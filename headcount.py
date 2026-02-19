#!/usr/bin/env python3
"""
headcount.py — 로잉프로 세션 참여인원수 자동 추산 스크립트

WO: WO_BUILDER_HEADCOUNT_AUTOMATION.md (SESSION_43 발행, 2026-02-20)

사용법:
    python headcount.py --all                          # 전체 연도 자동 실행
    python headcount.py --year 2013                    # 특정 연도만 실행
    python headcount.py --year 2013 --delay 1          # API 딜레이 조정 (유료 플랜)
    python headcount.py --all --api-key YOUR_KEY       # API 키 직접 지정

환경변수:
    GEMINI_API_KEY: Gemini API 키 (--api-key 대신 사용 가능)

필요 패키지:
    pip install google-genai pillow
"""

import argparse
import csv
import json
import os
import re
import sys
import time
from pathlib import Path

# ── 설정 ──────────────────────────────────────────────────────────────────

SCRIPT_DIR = Path(__file__).parent

J_DRIVE_ROOT = Path("j:/공유 드라이브")
HISTORY_FILE = SCRIPT_DIR / "docs/contents/_source/history_count/history_full_list.txt"
OUTPUT_DIR = SCRIPT_DIR / "docs/reports"

# 처리 대상 연도 목록
ALL_YEARS = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]

# 제외 키워드 (세션명에 포함 시 API 호출 없이 excluded 처리)
EXCLUDE_KEYWORDS = ["대회", "체전", "선수권", "협회장배", "시장배", "탄금호배", "보트쇼"]

CSV_HEADER = [
    "year", "session_name", "session_path",
    "session_type", "people_min", "people_max",
    "confidence", "evidence", "notes"
]

GEMINI_PROMPT = """\
아래 사진들은 로잉(조정) 체험/교육 세션의 사진입니다.
세션명: {session_name}

다음 규칙으로 참여 인원을 추산하세요:
1. 단체샷이 있으면 직접 계수
2. 조끼를 색깔별로 팀 구분하는 경우: 색깔 수 × 8~15명 (팀당)
3. 장비(로잉머신) 수 보이면: 머신 수 × 1~3회전
4. 위 단서가 없으면: 장소/규모 기준 보수적 범위 적용

출력 형식 (JSON 1줄):
{{"type":"GROUP|MEGA|SMALL","min":숫자,"max":숫자,"confidence":"A|B|C","evidence":"근거 1줄(영문 키워드)"}}

단체샷도 없고 인원 파악이 전혀 불가하면:
{{"type":"UNKNOWN","min":null,"max":null,"confidence":"C","evidence":"no_people_visible"}}"""

GEMINI_MODEL = "gemini-3-flash-preview"
MAX_RETRIES = 3
RETRY_DELAY_SEC = 15  # Rate limit 시 재시도 대기
MAX_IMAGE_PX = 2000   # 장변 최대 픽셀 (업로드 안정성)


# ── 인자 파싱 ─────────────────────────────────────────────────────────────

def parse_args():
    parser = argparse.ArgumentParser(
        description="로잉프로 세션 참여인원수 자동 추산 (Gemini Flash Vision)"
    )
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--all", action="store_true", help="전체 연도 순차 처리")
    group.add_argument("--year", type=int, metavar="YYYY", help="특정 연도만 처리 (예: 2013)")

    parser.add_argument("--api-key", help="Gemini API 키 (또는 환경변수 GEMINI_API_KEY)")
    parser.add_argument("--drive-root", default=str(J_DRIVE_ROOT),
                        help=f"J드라이브 루트 경로 (기본: {J_DRIVE_ROOT})")
    parser.add_argument("--delay", type=float, default=4.0,
                        help="API 호출 간 딜레이 초 (기본: 4.0 / 유료 플랜: 1.0)")
    return parser.parse_args()


def get_api_key(args):
    key = args.api_key or os.environ.get("GEMINI_API_KEY")
    if not key:
        print("오류: Gemini API 키가 필요합니다.")
        print("  방법 1: python headcount.py --all --api-key YOUR_KEY")
        print("  방법 2: 환경변수 GEMINI_API_KEY 설정 후 실행")
        sys.exit(1)
    return key


# ── 세션 목록 파싱 ────────────────────────────────────────────────────────

def parse_session_list(year: int) -> list[str]:
    """history_full_list.txt에서 해당 연도의 세션명 목록 추출.

    유효 세션: 'YYYY.' 로 시작하는 항목 (연도 뒤 점 필수 — 20140524_ 형태 제외)
    """
    year_str = str(year)
    pattern = re.compile(r"^\d{4}\.")
    sessions = []

    with open(HISTORY_FILE, encoding="utf-8", errors="replace") as f:
        for line in f:
            name = line.strip()
            # " - " 또는 "- " 접두어 제거
            if name.startswith("- "):
                name = name[2:].strip()
            if not pattern.match(name):
                continue
            if name[:4] != year_str:
                continue
            sessions.append(name)

    return sessions


# ── J드라이브 폴더 인덱스 ─────────────────────────────────────────────────

def build_folder_index(drive_root: Path, year: int) -> dict[str, Path]:
    """연도 폴더를 최대 2레벨 탐색하여 {폴더명: 절대경로} 딕셔너리 반환.

    2023년처럼 카테고리 서브폴더가 있는 구조를 처리하기 위해 2레벨 탐색.
      Level 1: {YYYY} 사진 영상/{session}/
      Level 2: {YYYY} 사진 영상/{category}/{session}/
    """
    year_root = drive_root / f"{year} 사진 영상"
    index: dict[str, Path] = {}

    if not year_root.exists():
        return index

    for item in year_root.iterdir():
        if not item.is_dir():
            continue
        # Level 1 등록
        index[item.name] = item
        # Level 2: 서브폴더 탐색 (카테고리 폴더 내부)
        try:
            for sub in item.iterdir():
                if sub.is_dir() and sub.name not in index:
                    index[sub.name] = sub
        except PermissionError:
            pass

    return index


# ── 이미지 선택 ───────────────────────────────────────────────────────────

def get_top_jpgs(folder: Path, n: int = 5) -> list[Path]:
    """폴더(재귀)에서 파일 크기 내림차순 상위 n개 JPG 반환."""
    candidates: list[tuple[int, Path]] = []
    try:
        for f in folder.rglob("*"):
            if f.is_file() and f.suffix.lower() in (".jpg", ".jpeg"):
                try:
                    candidates.append((f.stat().st_size, f))
                except OSError:
                    pass
    except PermissionError:
        pass

    candidates.sort(key=lambda x: x[0], reverse=True)
    return [f for _, f in candidates[:n]]


# ── Gemini API 호출 ───────────────────────────────────────────────────────

def load_image(path: Path):
    """PIL Image 로드 + 장변 MAX_IMAGE_PX 이하로 리사이즈."""
    from PIL import Image
    img = Image.open(path)
    img.load()
    w, h = img.size
    if max(w, h) > MAX_IMAGE_PX:
        scale = MAX_IMAGE_PX / max(w, h)
        img = img.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
    # Gemini는 RGB 필요
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")
    return img


def call_gemini(client, session_name: str, jpg_paths: list[Path]) -> tuple[dict | None, str | None]:
    """Gemini Flash Vision API 호출. (result_dict, error_str) 반환."""
    images = []
    for p in jpg_paths:
        try:
            images.append(load_image(p))
        except Exception as e:
            print(f"    이미지 로드 실패: {p.name} — {e}")

    if not images:
        return None, "no_images_loaded"

    prompt = GEMINI_PROMPT.format(session_name=session_name)
    contents = [prompt] + images

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            response = client.models.generate_content(model=GEMINI_MODEL, contents=contents)
            text = response.text.strip()
            # 마크다운 코드블록 제거
            text = re.sub(r"```[a-z]*\s*|\s*```", "", text).strip()
            # JSON 객체 추출
            json_match = re.search(r"\{[^{}]+\}", text, re.DOTALL)
            if not json_match:
                return None, f"no_json_in_response"
            data = json.loads(json_match.group())
            return data, None

        except json.JSONDecodeError:
            return None, "invalid_json"
        except Exception as e:
            err = str(e)
            if "429" in err or "RESOURCE_EXHAUSTED" in err or "quota" in err.lower():
                print(f"    Rate limit (시도 {attempt}/{MAX_RETRIES}), {RETRY_DELAY_SEC}초 대기...")
                time.sleep(RETRY_DELAY_SEC)
            else:
                return None, f"api_error: {err[:100]}"

    return None, "api_error: max_retries_exceeded"


# ── CSV 관리 ──────────────────────────────────────────────────────────────

def load_processed_sessions(csv_path: Path, year: int) -> set[str]:
    """CSV에 이미 기록된 session_name 목록 반환 (재실행 시 스킵용)."""
    processed = set()
    if not csv_path.exists():
        return processed
    try:
        with open(csv_path, encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row.get("year") == str(year):
                    processed.add(row["session_name"])
    except Exception:
        pass
    return processed


def write_csv_row(csv_path: Path, row: dict):
    """CSV에 1행 추가. 파일 없으면 헤더 포함 생성."""
    file_exists = csv_path.exists()
    with open(csv_path, "a", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_HEADER)
        if not file_exists:
            writer.writeheader()
        writer.writerow(row)


def summarize_csv(csv_path: Path, year: int):
    """연도 완료 후 min/max 합계 출력."""
    total_min = total_max = 0
    with open(csv_path, encoding="utf-8-sig") as f:
        for row in csv.DictReader(f):
            if row.get("year") != str(year):
                continue
            try:
                if row["people_min"]:
                    total_min += int(row["people_min"])
                if row["people_max"]:
                    total_max += int(row["people_max"])
            except (ValueError, KeyError):
                pass
    if total_min or total_max:
        print(f"  {year}년 누적 추산: {total_min:,} ~ {total_max:,}명")


# ── 연도 단위 처리 ────────────────────────────────────────────────────────

def process_year(year: int, client, drive_root: Path, delay: float):
    print(f"\n{'='*60}")
    print(f"  {year}년 처리 시작")
    print(f"{'='*60}")

    # 세션 목록
    sessions = parse_session_list(year)
    if not sessions:
        print(f"  → {year}년 세션 없음 (history_full_list.txt에 항목 없음)")
        return

    print(f"  세션 목록: {len(sessions)}건")

    # J드라이브 폴더 인덱스 (2레벨)
    folder_index = build_folder_index(drive_root, year)
    print(f"  J드라이브 인덱스: {len(folder_index)}개 폴더")

    # CSV 경로 + 기처리 세션
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    csv_path = OUTPUT_DIR / f"photo_headcount_estimates_{year}.csv"
    processed = load_processed_sessions(csv_path, year)
    if processed:
        print(f"  이미 처리된 세션: {len(processed)}건 (스킵)")

    done = skipped_excluded = skipped_resume = 0
    not_found = no_image = errors = 0

    for i, session_name in enumerate(sessions, 1):
        # 재실행 시 이미 처리된 세션 스킵
        if session_name in processed:
            skipped_resume += 1
            continue

        print(f"\n  [{i}/{len(sessions)}] {session_name}")

        row = {
            "year": year,
            "session_name": session_name,
            "session_path": "",
            "session_type": "",
            "people_min": "",
            "people_max": "",
            "confidence": "",
            "evidence": "",
            "notes": "",
        }

        # ── 제외 키워드 확인
        if any(kw in session_name for kw in EXCLUDE_KEYWORDS):
            print(f"    → 제외 (키워드 매칭)")
            row["notes"] = "excluded"
            write_csv_row(csv_path, row)
            skipped_excluded += 1
            continue

        # ── 폴더 탐색 (인덱스 우선, 없으면 not_found)
        folder = folder_index.get(session_name)
        if folder is None:
            print(f"    → 폴더 없음")
            row["notes"] = "folder_not_found"
            write_csv_row(csv_path, row)
            not_found += 1
            continue

        row["session_path"] = str(folder)

        # ── JPG 선택
        jpg_paths = get_top_jpgs(folder)
        if not jpg_paths:
            print(f"    → JPG 없음")
            row["notes"] = "no_images_found"
            write_csv_row(csv_path, row)
            no_image += 1
            continue

        print(f"    JPG {len(jpg_paths)}장 → Gemini 호출 중...")

        # ── Gemini API 호출
        data, err = call_gemini(client, session_name, jpg_paths)

        if err:
            print(f"    → 오류: {err}")
            row["notes"] = err
            write_csv_row(csv_path, row)
            errors += 1
        else:
            row["session_type"] = data.get("type", "")
            row["people_min"] = data.get("min") if data.get("min") is not None else ""
            row["people_max"] = data.get("max") if data.get("max") is not None else ""
            row["confidence"] = data.get("confidence", "")
            row["evidence"] = data.get("evidence", "")
            print(
                f"    → {data.get('type')} "
                f"{data.get('min')}~{data.get('max')}명 "
                f"[{data.get('confidence')}] {data.get('evidence')}"
            )
            write_csv_row(csv_path, row)
            done += 1

        time.sleep(delay)

    # ── 연도 요약
    print(f"\n  ── {year}년 완료 ──────────────────────────────")
    print(f"  완료: {done}건 | 제외: {skipped_excluded}건 | 재개스킵: {skipped_resume}건")
    print(f"  폴더없음: {not_found}건 | 사진없음: {no_image}건 | 오류: {errors}건")
    summarize_csv(csv_path, year)
    print(f"  CSV: {csv_path.relative_to(SCRIPT_DIR)}")


# ── 메인 ──────────────────────────────────────────────────────────────────

def main():
    args = parse_args()

    # 의존성 확인
    try:
        from google import genai
        from PIL import Image  # noqa: F401
    except ImportError as e:
        print(f"오류: 필요한 패키지가 없습니다 — {e}")
        print("  pip install google-genai pillow")
        sys.exit(1)

    # API 초기화
    api_key = get_api_key(args)
    client = genai.Client(api_key=api_key)

    drive_root = Path(args.drive_root)
    delay = args.delay

    # 처리 대상 연도 결정
    if args.all:
        years = ALL_YEARS
        print(f"전체 모드: {years[0]}~{years[-1]}년 순차 처리 (딜레이 {delay}초)")
    else:
        years = [args.year]
        print(f"단일 연도 모드: {args.year}년 (딜레이 {delay}초)")

    # HISTORY_FILE 존재 확인
    if not HISTORY_FILE.exists():
        print(f"오류: 세션 목록 파일 없음 — {HISTORY_FILE}")
        sys.exit(1)

    # 연도별 처리
    grand_total_min = grand_total_max = 0

    for year in years:
        process_year(year, client, drive_root, delay)

        # 전체 누적 집계
        csv_path = OUTPUT_DIR / f"photo_headcount_estimates_{year}.csv"
        if csv_path.exists():
            with open(csv_path, encoding="utf-8-sig") as f:
                for row in csv.DictReader(f):
                    try:
                        if row["people_min"]:
                            grand_total_min += int(row["people_min"])
                        if row["people_max"]:
                            grand_total_max += int(row["people_max"])
                    except (ValueError, KeyError):
                        pass

    # 전체 요약 (--all 시)
    if args.all:
        print(f"\n{'='*60}")
        print(f"  전체 처리 완료")
        print(f"  전체 누적 추산: {grand_total_min:,} ~ {grand_total_max:,}명")
        print(f"  CSV 위치: {OUTPUT_DIR.relative_to(SCRIPT_DIR)}/")
        print(f"{'='*60}")


if __name__ == "__main__":
    main()
