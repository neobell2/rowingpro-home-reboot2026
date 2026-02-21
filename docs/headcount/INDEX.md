# 헤드카운트 프로젝트 파일 목록

> **작업 기간:** 2026-02-19 ~ 2026-02-20 (SESSION 45 ~ 46)
> **목적:** 2013~2025 로잉프로 누적 참여인원 집계

---

## 최종 산출물

| 파일 | 설명 |
|:--|:--|
| [ROWINGPRO_HEADCOUNT_REPORT.md](ROWINGPRO_HEADCOUNT_REPORT.md) | 종합 분석 보고서 (홈페이지·제안서 근거 자료) |

---

## 스크립트

| 파일 | 설명 |
|:--|:--|
| [classify_indoor_outdoor.py](classify_indoor_outdoor.py) | 텍스트 기반 인도어/아웃도어 분류 (API 없음) |
| [headcount_aggregate.py](headcount_aggregate.py) | fallback 인원 적용 + 최종 집계 |

---

## 데이터

| 파일 | 설명 |
|:--|:--|
| [data/headcount_classified.csv](data/headcount_classified.csv) | 마스터 데이터셋 (분류 통합본, 411행) |
| [data/photo_headcount_estimates_2013.csv](data/photo_headcount_estimates_2013.csv) | Gemini Vision 원본 추산 — 2013 |
| [data/photo_headcount_estimates_2014.csv](data/photo_headcount_estimates_2014.csv) | Gemini Vision 원본 추산 — 2014 |
| [data/photo_headcount_estimates_2015.csv](data/photo_headcount_estimates_2015.csv) | Gemini Vision 원본 추산 — 2015 |
| [data/photo_headcount_estimates_2016.csv](data/photo_headcount_estimates_2016.csv) | Gemini Vision 원본 추산 — 2016 |
| [data/photo_headcount_estimates_2017.csv](data/photo_headcount_estimates_2017.csv) | Gemini Vision 원본 추산 — 2017 |
| [data/photo_headcount_estimates_2018.csv](data/photo_headcount_estimates_2018.csv) | Gemini Vision 원본 추산 — 2018 |
| [data/photo_headcount_estimates_2019.csv](data/photo_headcount_estimates_2019.csv) | Gemini Vision 원본 추산 — 2019 |
| [data/photo_headcount_estimates_2023.csv](data/photo_headcount_estimates_2023.csv) | Gemini Vision 원본 추산 — 2023 |
| [data/photo_headcount_estimates_2024.csv](data/photo_headcount_estimates_2024.csv) | Gemini Vision 원본 추산 — 2024 |
| [data/photo_headcount_estimates_2025.csv](data/photo_headcount_estimates_2025.csv) | Gemini Vision 원본 추산 — 2025 |

---

## 원본 소스 (작업 참고자료)

| 경로 | 설명 |
|:--|:--|
| [source/](source/) | Gemini 작업 전 스크래치 자료 (프롬프트, 템플릿, 추출 결과 등) |
