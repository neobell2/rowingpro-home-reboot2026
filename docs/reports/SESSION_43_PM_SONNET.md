# SESSION_43 PM 보고서 — 참여인원수 전수조사 방법결정

**역할:** PM / Claude Sonnet 4.6
**일시:** 2026-02-20
**세션 유형:** 방법결정 + 문서정리

---

## 1. 세션 목표

참여인원수 전수조사 방법을 확정하고, 이전 비공식 작업물을 공식 체계 밖으로 분리.

---

## 2. 확정된 방법론

### 2.1 조사 범위
- **416건 전수조사** (2020~2022 COVID 공백 포함, 기록 없는 연도는 "기록 없음" 처리)

### 2.2 도구
- **Gemini Flash Vision API**
- 세션당 **파일 크기 큰 것 5장** 선택 (파일명 순서 앞 5장 제외 — 현수막/건물/준비 사진 확률 높음)

### 2.3 추산 규칙 (우선순위)

| 순위 | 방법 | 신뢰도 |
|:--|:--|:--:|
| 1 | 단체샷 직접 계수 | A |
| 2 | **조끼 색깔 수 × 8~15명** (실내/실외 동일) | B |
| 3 | 머신 수 × 회전수 | B |
| 4 | 전경/운영 흔적 → 기본 범위표 | C |

**조끼 색깔 규칙 (로잉프로 특화):**
```
min = 색깔 수 × 8
max = 색깔 수 × 15
추산 = 색깔 수 × 10 (중간값)
예: 4색 → 32~60명, 추산 40명
```
- 실내(인도어)/실외(수상) 구분 없이 동일 적용
- 보트 수 기반 추산 불가 — 로테이션 운영 구조

### 2.4 Fallback (조끼 식별 불가 시)
- MEGA: 800~1,500명/세션
- GROUP: 30~80명/세션
- SMALL: 5~20명/세션

### 2.5 제외 기준
- 대회, 체전, 선수권, 협회장배, 시장배, 탄금호배 등 경기성 항목

### 2.6 산출물 용도
- 홈페이지 수록 + 모든 공식 문서의 근거 수치
- 디렉터 어림짐작 기준: 최소 2만명 (416건 × 평균 50명)

---

## 3. 실행 구조 (미실행 — 다음 세션)

```
Python 자동화 스크립트
  └ J드라이브 폴더 순회 (416건)
  └ 폴더당: 파일 크기 큰 JPG 5장 선택
  └ Gemini Flash Vision API 호출
  └ 프롬프트: 조끼 색깔 기반 규칙 적용
  └ CSV 자동 기록 (1세션 = 1행)
```

**필요:** Builder WO 신규 발행 (Python 스크립트 작성)

---

## 4. 비공식 작업물 정리

### 4.1 삭제
| 파일/폴더 | 사유 |
|:--|:--|
| `session_sample_` | 임시 바이너리 파일 |
| `.tmp_frames/` | 영상 프레임 추출 임시폴더 |

### 4.2 아카이브 이동 (`docs/_archive/headcount_scratch_20260219/`)
| 파일 | 원위치 |
|:--|:--|
| `WO_PHOTO_HEADCOUNT_ESTIMATE_PLAN.md` | `docs/work_orders/` |
| `PHOTO_HEADCOUNT_ESTIMATE_METHOD.md` | `docs/reports/` |
| `PHOTO_HEADCOUNT_RESUME_2013.md` | `docs/reports/` |
| `PHOTO_HEADCOUNT_STATUS_AND_PLAN_2026-02-19.md` | `docs/reports/` |
| `photo_headcount_estimates_2013.csv` | `docs/reports/` |
| `photo_headcount_estimates_2013_TEMPLATE.csv` | `docs/reports/` |
| `photo_headcount_estimates_2013_excel_cp949.csv` | `docs/reports/` |
| `EXTRACTED_*` 4개 | `docs/reports/` |
| `PHOTO_HEADCOUNT_PROMPTS.md` | `docs/guides/` |
| `tools/` (스크립트 2개) | 루트 |

### 4.3 현위치 유지 (공식 작업 재활용)
- `docs/contents/_source/history_count/` — 폴더 목록·클라이언트 목록 원본 4개

---

## 5. 다음 세션 지시

**Builder WO 발행 필요:**
- 목적: Python 자동화 스크립트 작성
- 입력: J드라이브 폴더 목록 (`history_count/history_full_list.txt` 기준)
- 처리: 폴더당 JPG 5장(크기 큰 것) → Gemini Flash Vision API → 조끼 색깔 규칙 적용
- 출력: `docs/reports/photo_headcount_estimates_{YYYY}.csv` 연도별 누적

---

**보고서 작성:** PM / Claude Sonnet 4.6
**완료:** 2026-02-20
