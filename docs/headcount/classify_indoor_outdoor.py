"""
classify_indoor_outdoor.py
기존 headcount CSV에 인도어/아웃도어 컬럼 추가 (API 호출 없음)
session_name + session_path + evidence 텍스트 기반 분류
"""

import csv
import glob
import os

# ─────────────────────────────────────────────
# 분류 키워드 정의
# ─────────────────────────────────────────────

# 이름에 이게 있으면 → 인도어
INDOOR_NAME_KW = [
    "인도어", "indoor",
    "FLC", "퓨처리더십",
    "인재개발원", "연수원", "교육원", "훈련원",
    "킨텍스", "KINTEX",
    "마북",           # 현대 HRD센터 (마북리)
    "한화리조트", "대명리조트", "블룸비스타",
    "비체펠리스", "소노펠리체", "노블카운티",
    "용인FLC", "용인.FLC", "용인flc",
    "삼성레포츠센터",
    "유니콘",          # 인도어 에르고 시설 (2023~2024)
    "대명홍천소노",
    "야쿠르트인재개발원",
    "cnp", "CNP",     # 세메스 천안 CNP센터 (인도어)
    "HRD",
    "양평미리내",      # 흥국배구단 등 실내 에르고 세션 (evidence로 확인)
    "재능연수원",      # 메트라이프 안성 TS인재개발원 계열
    "TS인재", "ts인재",
    "생산성본부",      # 서울 실내 세미나 시설
    "위드블로그",      # 블로거 행사 → 실내 행사장
]

# 이름에 이게 있으면 → 아웃도어(수상)
OUTDOOR_NAME_KW = [
    "미사리",         # 조정경기장 (수상)
    "충주",           # 충주호 (수상)
    "한강",
    "무의도",
    "올림픽공원",
    "아웃도어", "outdoor",
    "수상",
    "대부도",
    "제주",
    "해운대",
    "부산",           # 부산 수상 세션이 대부분
    "거제",           # 대우조선 거제 → 수상
    "춘천",           # 춘천 = 아웃도어
    "가평",           # 가평 수상
    "평택",           # 메카로 패밀리데이 = 야외 수상
    "단양",           # 단양 수상
    "동강",
    "대청호",
    "인천 대부도", "인천.대부도",
    "해양레저쇼",
    "백담사",         # 인제 백담사 = 야외
    "아산서원",       # 충남 아산 수상 조정 교육 시설
    "수성구청",       # 단양 수상 체험 세션 다수
    "양평공직자", "양평군공직자",  # 양평 수상 체험
    "미사리.백경훈", "미사리 백경훈",  # 미사리 수상
    "올림픽데이런",
    "두바퀴축제",     # 광명스피돔 실내지만 에르고 부스 야외 배치
    "쉬엄쉬엄",       # 한강 쉬엄쉬엄 축제 (야외)
]

# evidence 필드 키워드
INDOOR_EVI_KW = [
    "rowing machine", "ergometer", "ergo",
    "auditorium", "indoor", "seated", "classroom",
    "workshop setting", "seminar", "lecture",
    "score sheet", "scoreboard", "monitor", "digital screen",
    "scorecard",
    "sitting",        # "people sitting" → 실내 착석
    "in the room",    # 명시적 실내
    "seating capacity",
    "conference",
    "digital screen", "on screen", "on the screen",
]

OUTDOOR_EVI_KW = [
    "boat", "dock", "shell", "scull", "rowing shell",
    "outdoor", "pier", "shore", "water", "vessel",
    "coxed", "quad", "single scull", "double scull",
    "sweep", "4-person boat", "4 person boat",
    "tent", "beach", "riverside", "river",
]


def classify(session_name: str, session_path: str, evidence: str) -> tuple[str, str]:
    """
    Returns (venue_type, basis)
    venue_type: 인도어 | 아웃도어 | 혼합 | 불명
    basis: 판별 근거 요약
    """
    name = (session_name or "").lower()
    path = (session_path or "").lower()
    evi  = (evidence or "").lower()

    combined_name = name + " " + path

    indoor_name  = any(kw.lower() in combined_name for kw in INDOOR_NAME_KW)
    outdoor_name = any(kw.lower() in combined_name for kw in OUTDOOR_NAME_KW)
    indoor_evi   = any(kw in evi for kw in INDOOR_EVI_KW)
    outdoor_evi  = any(kw in evi for kw in OUTDOOR_EVI_KW)

    indoor_score  = indoor_name * 2  + indoor_evi
    outdoor_score = outdoor_name * 2 + outdoor_evi

    # 판별
    if indoor_score > 0 and outdoor_score == 0:
        return "인도어", "name" if indoor_name else "evidence"
    if outdoor_score > 0 and indoor_score == 0:
        return "아웃도어", "name" if outdoor_name else "evidence"
    if indoor_score > 0 and outdoor_score > 0:
        return "혼합", "name+evidence"
    return "불명", "-"


def process_all():
    csv_dir = os.path.join(
        os.path.dirname(__file__),
        "docs", "reports"
    )
    pattern = os.path.join(csv_dir, "photo_headcount_estimates_*.csv")
    files = sorted(glob.glob(pattern))

    if not files:
        print(f"CSV 파일 없음: {pattern}")
        return

    out_path = os.path.join(csv_dir, "headcount_classified.csv")
    out_fields = [
        "year", "session_name", "session_path", "session_type",
        "people_min", "people_max", "confidence", "evidence", "notes",
        "venue_type", "venue_basis",
    ]

    stats = {"인도어": 0, "아웃도어": 0, "혼합": 0, "불명": 0}
    total = 0

    with open(out_path, "w", newline="", encoding="utf-8-sig") as fout:
        writer = csv.DictWriter(fout, fieldnames=out_fields)
        writer.writeheader()

        for fpath in files:
            year = os.path.basename(fpath).replace(
                "photo_headcount_estimates_", ""
            ).replace(".csv", "")

            with open(fpath, newline="", encoding="utf-8-sig") as fin:
                reader = csv.DictReader(fin)
                for row in reader:
                    notes = row.get("notes", "")
                    # 제외/이미지없음 세션은 분류 불필요 → 그대로 기록
                    if notes in ("excluded",) or notes.startswith("no_supported") or notes == "folder_not_found":
                        vtype, vbasis = "N/A", "-"
                    else:
                        vtype, vbasis = classify(
                            row.get("session_name", ""),
                            row.get("session_path", ""),
                            row.get("evidence", ""),
                        )
                    row["venue_type"]  = vtype
                    row["venue_basis"] = vbasis

                    # 누락 컬럼 채우기
                    for f in out_fields:
                        if f not in row:
                            row[f] = ""

                    writer.writerow({f: row[f] for f in out_fields})
                    total += 1
                    if vtype in stats:
                        stats[vtype] += 1

    print(f"\n=== 인도어/아웃도어 분류 완료 ===")
    print(f"처리 행수: {total}")
    print(f"출력 파일: {out_path}")
    print()
    print(f"  인도어  : {stats['인도어']}건")
    print(f"  아웃도어: {stats['아웃도어']}건")
    print(f"  혼합    : {stats['혼합']}건")
    print(f"  불명    : {stats['불명']}건")
    print()

    # 불명 목록 출력 (검토용)
    print("=== 불명 세션 목록 (검토 필요) ===")
    with open(out_path, newline="", encoding="utf-8-sig") as fin:
        reader = csv.DictReader(fin)
        for row in reader:
            if row["venue_type"] == "불명":
                print(f"  {row['year']} | {row['session_name'][:50]}")


if __name__ == "__main__":
    process_all()
