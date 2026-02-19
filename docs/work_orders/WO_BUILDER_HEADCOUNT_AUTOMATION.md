# WO: 참여인원수 전수조사 자동화 스크립트

**발행:** PM / Claude Sonnet 4.6 (SESSION_43)
**일시:** 2026-02-20
**수신:** Builder
**근거:** SESSION_43 방법결정 확정 (디렉터 승인)

---

## 목표

J드라이브 세션 폴더(416건)를 순회하여 Gemini Flash Vision API로 인원을 추산하고, 연도별 CSV에 자동 기록하는 Python 스크립트를 작성한다.

---

## 입력

| 항목 | 내용 |
|:--|:--|
| 세션 목록 | `docs/contents/_source/history_count/history_full_list.txt` |
| 이미지 소스 | J드라이브 각 세션 폴더 내 JPG 파일 |
| API | Gemini Flash Vision (API 키: 디렉터 보유) |

---

## 출력

- `docs/reports/photo_headcount_estimates_{YYYY}.csv` (연도별 1개)
- 헤더(고정):
```csv
year,session_name,session_path,session_type,people_min,people_max,confidence,evidence,notes
```

---

## 핵심 규칙 (스크립트에 하드코딩)

### 이미지 선택
- 폴더당 **파일 크기 큰 JPG 5장** (오름차순 정렬 후 상위 5개)
- JPG/JPEG 확장자만 대상 (MP4 등 영상 제외)

### 추산 규칙 (Gemini 프롬프트에 명시)

**우선순위:**
1. 단체샷 직접 계수 → `min~max` (confidence=A)
2. **조끼 색깔 수 기반** → `색깔수×8 ~ 색깔수×15` (confidence=B)
3. 머신 수 기반 → `머신수×회전수(1~3)` (confidence=B)
4. 전경/운영 흔적 → 기본 범위표 적용 (confidence=C)

**기본 범위표 (Fallback):**
- MEGA: 800~1500
- GROUP: 30~80
- SMALL: 5~20

**조끼 색깔 규칙 (로잉프로 특화, 실내/실외 동일):**
```
색깔 수 × 8 = people_min
색깔 수 × 15 = people_max
예: 4색 → 32~60
```

### 제외 항목 (CSV에 excluded=true 표기 후 스킵)
- 폴더명에 포함: `대회`, `체전`, `선수권`, `협회장배`, `시장배`, `탄금호배`, `보트쇼`

---

## Gemini 프롬프트 템플릿

```
아래 사진들은 로잉(조정) 체험/교육 세션의 사진입니다.
세션명: {session_name}

다음 규칙으로 참여 인원을 추산하세요:
1. 단체샷이 있으면 직접 계수
2. 조끼를 색깔별로 팀 구분하는 경우: 색깔 수 × 8~15명 (팀당)
3. 장비(로잉머신) 수 보이면: 머신 수 × 1~3회전
4. 위 단서가 없으면: 장소/규모 기준 보수적 범위 적용

출력 형식 (JSON 1줄):
{"type":"GROUP|MEGA|SMALL","min":숫자,"max":숫자,"confidence":"A|B|C","evidence":"근거 1줄(영문 키워드)"}

단체샷도 없고 인원 파악이 전혀 불가하면:
{"type":"UNKNOWN","min":null,"max":null,"confidence":"C","evidence":"no_people_visible"}
```

---

## 실행 방식

**스크립트 작성:** Builder (Claude Code)
**스크립트 실행:** 디렉터 — VSCode 터미널에서 연도별로 직접 실행

```bash
python headcount.py --year 2013
python headcount.py --year 2014
# ... 연도별로 순차 실행
```

- 연도 완료 후 CSV 확인 → 이상 없으면 다음 연도 진행
- 오류 발생 시 해당 연도만 재실행 가능
- VSCode 터미널은 Claude Code와 독립 → 타임아웃 없음

---

## 스크립트 처리 절차 (내부 로직)

1. `--year` 인자로 대상 연도 지정
2. `history_full_list.txt` 파싱 → 해당 연도 세션 목록 추출
3. 각 세션:
   a. J드라이브 폴더 존재 확인
   b. JPG 5장 선택 (파일 크기 내림차순)
   c. Gemini Flash Vision API 호출 (이미지 + 프롬프트)
   d. JSON 응답 파싱
   e. `photo_headcount_estimates_{YYYY}.csv` 1행 추가
4. 폴더 없는 세션: `notes=folder_not_found` 기록
5. 예외/오류: `notes=api_error` 기록 후 다음 세션 계속 진행
6. 연도 완료 시 처리 결과 요약 출력 (총 N건, 완료/스킵/오류 건수)

---

## 검수

- 전수 완료 후: 연도별 GROUP 타입 5개 랜덤 재검토
- 시리즈 세션(동일 기관 반복)은 편차가 2배 이상이면 `notes=check_series` 표기
- 최종 집계: 전체 `min 합계 ~ max 합계` 보고

---

## 완료 기준

- [ ] 416건 전수 처리 완료 (제외 항목 포함)
- [ ] 연도별 CSV 생성 완료
- [ ] 전체 누적 min/max 보고
- [ ] Builder 세션 보고서 작성
