"""
headcount_aggregate.py
headcount_classified.csv → 최종 집계 요약 생성
- 혼합 → 아웃도어 처리
- 이미지없는 세션 fallback 인원 적용 (디렉터 지시 기준)
- 세션 유형 분류 (교육/체험 / 대회및훈련 / 내부기타)
- 클라이언트 유형 분류
"""

import csv
import os
from collections import defaultdict

# ─────────────────────────────────────────────
# 이미지없는 세션 fallback 인원 (디렉터 지시)
# 키: session_name에 포함되는 문자열 (부분 매치)
# ─────────────────────────────────────────────
SPECIFIC_FALLBACKS = [
    # (매칭 키워드,               min, max)
    ("현대아산아카데미",            30,  30),
    ("조말론",                     30,  30),
    ("흥국 양평미리내",             90,  90),   # 이미지없는 차수들 (60~120 중간)
    ("지오캐치",                   20,  20),
    ("ADT캡스 최문재",              80,  80),   # 2014.09.30
    ("한국지역난방(백경훈팀장.2회차)", 40, 40),  # 2015
    ("한국지역난방공사(6회차",        40, 40),  # 2015
    ("한국지역난방(용인flc.백경훈팀장)", 40, 40),  # 2015
    ("대우조선해양 윤대표",          40,  40),  # 2015
    ("미디어로그",                 140, 140),  # 2015
    ("파리바게트 QSV",             100, 100),  # 2016.04.22
    ("파리바게트",                 100, 100),  # 기타 이미지없는 파리바게트
    ("KCC신입사원",                 40,  40),  # 2015
]
DEFAULT_NO_IMAGE = 50  # 나머지 이미지없는 세션 fallback

# ─────────────────────────────────────────────
# 세션 유형 분류 키워드
# ─────────────────────────────────────────────
TRAINING_KW = [
    "훈련", "로잉팀", "로잉클럽", "싱글스컬", "더블스컬",
    "스위프", "장비입고", "머신점검", "비품점검",
    "아마추어로잉", "동호인훈련", "세인트폴", "카일룸프렙",
    "푸르덴셜로잉팀", "샤크패밀리",
    "1K ", "500m", "7세트", "5set",
    "박세안", "세안 민석", "대원 민석", "준혁 상휘",
    "지승 윤승", "준석 싱글", "서인", "요환", "하음",
    "성욱,현준", "시조식",
    "서울대 정기훈련",
]

INTERNAL_KW = [
    "컨셉촬영", "회사소개영상", "용감독촬영", "소스", "촬영협조",
    "전체회식", "코치숙소", "홈페이지제작용", "비품점검",
    "효성 세빛둥둥섬 용감독", "현대해상 용감독",
]

# ─────────────────────────────────────────────
# 클라이언트 유형 분류
# ─────────────────────────────────────────────
LARGE_CORP_KW = [
    "삼성", "현대", "SK", "롯데", "LG", "KCC", "ADT",
    "대우조선", "DSME", "메트라이프", "효성", "파리바게트",
    "나이키", "루이비통", "조말론", "구찌", "로레알", "맥심",
    "한화", "중부발전", "동서발전", "한국지역난방", "중외",
    "BC카드", "국민카드", "푸르덴셜", "유한킴벌리", "사노피",
    "벤츠", "LIG", "한국그레이코", "EPS인터", "루메니스",
    "유안타", "SPtek", "세메스", "태광", "여천NCC",
    "삼보모터스", "미즈메디", "세방그룹", "금호석유화학",
    "연합뉴스", "오릭스", "프뢰벨", "삼다수", "민성정밀",
    "동희그룹", "BNF통상", "오픈타이드", "BR코리아",
    "신젠타", "니프코", "메카로", "중외그룹", "흥국배구단",
    "흥국 양평", "세코툴스", "KLA", "ABL생명", "AGNS",
    "서울우유", "한국벤처투자", "세방", "상상인",
    "메디포스트", "아산서원",
]

SCHOOL_KW = [
    "서울대멘토링", "이대경영",
    "고촌중", "백학중", "다산중", "김포중", "금파중",
    "양도중", "청산중", "은가람중", "용인백현중", "김포여중",
    "산본고", "백석대", "장안대", "연천군",
]

UNIV_KW = [
    "서울대", "한국외대", "동국대", "백석대", "장안대", "이대경영",
]

PUBLIC_KW = [
    "양평공직자", "양평군공직자", "수성구청", "강동구청",
    "장애인체육회", "KSPO", "산업인력관리",
    "한국농어촌", "환경부", "금융감독원",
    "SH 신입", "SH신입", "국립생태원", "인천농협",
    "기업은행", "대한체육회", "건강관리협회",
    "서울특별시", "하남시조정", "협동조합", "서울시장애인",
]

EVENT_KW = [
    "나이키 위런", "올림픽데이런", "바이애슬론", "해양레저쇼",
    "쉬엄쉬엄", "두바퀴축제", "위드블로그", "보트쇼",
    "HRD 컨퍼런스", "레저쇼", "컨퍼런스", "행사", "축제",
    "체육장학금", "서울시청스포츠재능나눔",
]


# ─────────────────────────────────────────────
# 헬퍼 함수
# ─────────────────────────────────────────────

def is_training(name: str) -> bool:
    n = name.lower()
    return any(kw.lower() in n for kw in TRAINING_KW)

def is_internal(name: str) -> bool:
    n = name.lower()
    return any(kw.lower() in n for kw in INTERNAL_KW)

def client_type(name: str) -> str:
    n = name.lower()
    if any(kw.lower() in n for kw in EVENT_KW):
        return "이벤트/스포츠행사"
    if any(kw.lower() in n for kw in SCHOOL_KW):
        return "학교(중·고)"
    if any(kw.lower() in n for kw in UNIV_KW):
        return "대학교"
    if any(kw.lower() in n for kw in PUBLIC_KW):
        return "공공기관/지자체"
    if any(kw.lower() in n for kw in LARGE_CORP_KW):
        return "기업(대기업/중견)"
    return "기업(중소/불명)"

def apply_fallback(row: dict) -> tuple[int, int]:
    """이미지없는 세션에 fallback 인원 적용. 이미 값있으면 그대로 반환."""
    pmin = row.get("people_min", "").strip()
    pmax = row.get("people_max", "").strip()

    # 이미 추산값 있으면 사용
    if pmin and pmin not in ("", "null"):
        try:
            return int(float(pmin)), int(float(pmax)) if pmax else int(float(pmin))
        except ValueError:
            pass

    # UNKNOWN 타입 (사람 안보임) → 0
    if row.get("session_type", "") == "UNKNOWN":
        return 0, 0

    name = row.get("session_name", "")

    # 특정 fallback 매칭
    for keyword, mn, mx in SPECIFIC_FALLBACKS:
        if keyword.lower() in name.lower():
            return mn, mx

    # 기본 fallback
    return DEFAULT_NO_IMAGE, DEFAULT_NO_IMAGE


def normalize_venue(venue: str) -> str:
    """혼합 → 아웃도어"""
    if venue in ("혼합", "N/A", "불명", "-"):
        return "아웃도어" if venue == "혼합" else venue
    return venue


# ─────────────────────────────────────────────
# 메인 집계
# ─────────────────────────────────────────────

def aggregate():
    csv_path = os.path.join(
        os.path.dirname(__file__),
        "docs", "reports", "headcount_classified.csv"
    )
    out_md = os.path.join(
        os.path.dirname(__file__),
        "docs", "reports", "HEADCOUNT_SUMMARY.md"
    )

    # 카테고리별 집계 구조
    cats = {
        "교육/체험": defaultdict(lambda: {"sessions": 0, "min": 0, "max": 0,
                                          "indoor": 0, "outdoor": 0, "unknown_venue": 0}),
        "대회및훈련": defaultdict(lambda: {"sessions": 0, "min": 0, "max": 0}),
        "내부/기타":  defaultdict(lambda: {"sessions": 0, "min": 0, "max": 0}),
    }
    total = {"sessions": 0, "min": 0, "max": 0}
    edu_indoor = {"sessions": 0, "min": 0, "max": 0}
    edu_outdoor = {"sessions": 0, "min": 0, "max": 0}
    edu_unknown = {"sessions": 0, "min": 0, "max": 0}

    client_type_count = defaultdict(int)
    client_set = set()  # 중복 제거용 (기관명 기준)
    year_totals = defaultdict(lambda: {"sessions": 0, "min": 0, "max": 0})

    with open(csv_path, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            name  = row.get("session_name", "")
            notes = row.get("notes", "")
            year  = row.get("year", "")
            venue = normalize_venue(row.get("venue_type", "불명"))

            # 대회 제외
            if notes == "excluded":
                cats["대회및훈련"]["대회"]["sessions"] += 1
                continue

            # 인원 산정
            pmin, pmax = apply_fallback(row)

            # 세션 유형 판별
            if is_internal(name):
                cats["내부/기타"]["내부"]["sessions"] += 1
                cats["내부/기타"]["내부"]["min"] += pmin
                cats["내부/기타"]["내부"]["max"] += pmax
                continue

            if is_training(name):
                cats["대회및훈련"]["훈련"]["sessions"] += 1
                cats["대회및훈련"]["훈련"]["min"] += pmin
                cats["대회및훈련"]["훈련"]["max"] += pmax
                continue

            # ─── 교육/체험 세션 ───
            ctype = client_type(name)
            c = cats["교육/체험"][ctype]
            c["sessions"] += 1
            c["min"] += pmin
            c["max"] += pmax

            # 인도어/아웃도어
            if venue == "인도어":
                c["indoor"] += 1
                edu_indoor["sessions"] += 1
                edu_indoor["min"] += pmin
                edu_indoor["max"] += pmax
            elif venue == "아웃도어":
                c["outdoor"] += 1
                edu_outdoor["sessions"] += 1
                edu_outdoor["min"] += pmin
                edu_outdoor["max"] += pmax
            else:
                c["unknown_venue"] += 1
                edu_unknown["sessions"] += 1
                edu_unknown["min"] += pmin
                edu_unknown["max"] += pmax

            # 클라이언트 중복 제거 (기관명 추출: 날짜 이후 첫 단어들)
            # 간단히: session_name에서 날짜 부분 제거하고 앞 10글자를 키로
            client_key = name[10:25].strip() if len(name) > 10 else name
            if client_key not in client_set:
                client_set.add(client_key)
                client_type_count[ctype] += 1

            year_totals[year]["sessions"] += 1
            year_totals[year]["min"] += pmin
            year_totals[year]["max"] += pmax

            total["sessions"] += 1
            total["min"] += pmin
            total["max"] += pmax

    # ─────────────────────────────────────────────
    # 출력
    # ─────────────────────────────────────────────
    lines = []
    lines.append("# 로잉프로 헤드카운트 집계 요약")
    lines.append("")
    lines.append("> **기준:** photo_headcount_classified.csv (2026-02-20)")
    lines.append("> **방법:** Gemini Flash Vision 추산 + 이미지없는 세션 fallback 적용 (디렉터 지시)")
    lines.append("> **혼합 세션:** 아웃도어로 통합")
    lines.append("")
    lines.append("---")
    lines.append("")

    # 1. 전체 요약
    lines.append("## 1. 전체 요약")
    lines.append("")
    lines.append(f"| 항목 | 수치 |")
    lines.append(f"|:--|:--|")
    lines.append(f"| 총 교육/체험 세션수 | **{total['sessions']}건** |")
    lines.append(f"| 총 참여자 (추산) | **{total['min']:,} ~ {total['max']:,}명** |")
    lines.append(f"| 고유 클라이언트 (추산) | **약 {len(client_set)}개 기관** |")
    lines.append(f"| 운영 기간 | 2013 ~ 2025 (약 12년) |")
    lines.append("")

    # 2. 인도어/아웃도어
    lines.append("## 2. 장소 유형별")
    lines.append("")
    lines.append("| 유형 | 세션수 | 참여자 |")
    lines.append("|:--|:--|:--|")
    lines.append(f"| 인도어 (에르고미터) | {edu_indoor['sessions']}건 | {edu_indoor['min']:,} ~ {edu_indoor['max']:,}명 |")
    lines.append(f"| 아웃도어 (수상 조정) | {edu_outdoor['sessions']}건 | {edu_outdoor['min']:,} ~ {edu_outdoor['max']:,}명 |")
    lines.append(f"| 불명 | {edu_unknown['sessions']}건 | {edu_unknown['min']:,} ~ {edu_unknown['max']:,}명 |")
    lines.append(f"| **합계** | **{total['sessions']}건** | **{total['min']:,} ~ {total['max']:,}명** |")
    lines.append("")

    # 3. 클라이언트 유형별
    lines.append("## 3. 클라이언트 유형별 (교육/체험 세션 기준)")
    lines.append("")
    lines.append("| 클라이언트 유형 | 세션수 | 참여자 | 기관수(추산) |")
    lines.append("|:--|:--|:--|:--|")
    edu_total_sessions = 0
    for ctype, c in sorted(cats["교육/체험"].items()):
        lines.append(
            f"| {ctype} | {c['sessions']}건 | "
            f"{c['min']:,} ~ {c['max']:,}명 | "
            f"약 {client_type_count[ctype]}개 |"
        )
        edu_total_sessions += c["sessions"]
    lines.append("")

    # 4. 연도별
    lines.append("## 4. 연도별 교육/체험 세션")
    lines.append("")
    lines.append("| 연도 | 세션수 | 참여자 |")
    lines.append("|:--|:--|:--|")
    for yr in sorted(year_totals.keys()):
        y = year_totals[yr]
        lines.append(f"| {yr} | {y['sessions']}건 | {y['min']:,} ~ {y['max']:,}명 |")
    lines.append("")

    # 5. 대회및훈련
    lines.append("## 5. 대회 및 훈련")
    lines.append("")
    lines.append("| 구분 | 건수 |")
    lines.append("|:--|:--|")
    comp = cats["대회및훈련"]
    lines.append(f"| 대회 (excluded 처리) | {comp['대회']['sessions']}건 |")
    tr   = comp.get("훈련", {"sessions": 0, "min": 0, "max": 0})
    lines.append(f"| 훈련 세션 | {tr['sessions']}건, 참여 {tr['min']:,} ~ {tr['max']:,}명 |")
    lines.append("")

    # 6. Fallback 적용 안내
    lines.append("## 6. 이미지없는 세션 Fallback 기준 (디렉터 지시)")
    lines.append("")
    lines.append("| 세션 | 적용 인원 |")
    lines.append("|:--|:--|")
    for kw, mn, mx in SPECIFIC_FALLBACKS:
        lines.append(f"| {kw} | {mn}명 |")
    lines.append(f"| 나머지 이미지없는 세션 | {DEFAULT_NO_IMAGE}명 (기본) |")
    lines.append("")

    # 출력
    md_content = "\n".join(lines)
    with open(out_md, "w", encoding="utf-8") as f:
        f.write(md_content)

    print("=== 집계 완료 ===")
    print(f"총 교육/체험 세션: {total['sessions']}건")
    print(f"총 참여자 (추산): {total['min']:,} ~ {total['max']:,}명")
    print(f"고유 클라이언트(키 기준): 약 {len(client_set)}개")
    print()
    print("장소별:")
    print(f"  인도어  : {edu_indoor['sessions']}건 / {edu_indoor['min']:,}~{edu_indoor['max']:,}명")
    print(f"  아웃도어: {edu_outdoor['sessions']}건 / {edu_outdoor['min']:,}~{edu_outdoor['max']:,}명")
    print(f"  불명    : {edu_unknown['sessions']}건 / {edu_unknown['min']:,}~{edu_unknown['max']:,}명")
    print()
    print("클라이언트 유형별:")
    for ctype, c in sorted(cats["교육/체험"].items()):
        print(f"  {ctype}: {c['sessions']}건 / {c['min']:,}~{c['max']:,}명")
    print()
    print(f"출력: {out_md}")


if __name__ == "__main__":
    aggregate()
