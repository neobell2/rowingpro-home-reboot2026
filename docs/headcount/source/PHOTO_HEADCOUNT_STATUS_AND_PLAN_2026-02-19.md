# PHOTO_HEADCOUNT_STATUS_AND_PLAN (2026-02-19)

## 1) 배경 / 문제 정의
- 목표: 사진/영상 기반으로 “정밀 계수”가 아니라 **세션(=폴더=1차수) 단위 참여자 규모를 `min~max` 범위**로 빠르게 누적 산출.
- 이전 시도(TaskID: `1771525407267`, 2026-02-20): 세션별 결론보다 툴/환경 덤프가 누적되며 컨텍스트가 소진되어 중단. 추출 리포트가 `docs/reports/EXTRACTED_*`에 남아 있음.
- 현실 이슈: 특정 세션(예: 흥국-양평미리내 시리즈)에서 **사진이 없고 동영상 프레임 일부만으로 판단**하면서 편차가 커짐(실제 규모는 비슷).

## 2) 현재 산출물/파일 현황
- 작업계획(운영): `docs/work_orders/WO_PHOTO_HEADCOUNT_ESTIMATE_PLAN.md`
- 방법론(요약): `docs/reports/PHOTO_HEADCOUNT_ESTIMATE_METHOD.md`
- 2013 누적 CSV: `docs/reports/photo_headcount_estimates_2013.csv`
- 2013 재개 체크포인트: `docs/reports/PHOTO_HEADCOUNT_RESUME_2013.md`
- 이전 로그 추출:
  - `docs/reports/EXTRACTED_COMPLETION_RESULT_1771525407267.md`
  - `docs/reports/EXTRACTED_WORK_RESULTS_1771525407267_HAS_CHANGES.md`
  - `docs/reports/EXTRACTED_WORK_RESULTS_1771525407267_TEXT.md`
  - `docs/reports/EXTRACTED_WORK_RESULTS_1771525407267.md`

## 3) 2013 CSV 진행 상황(요약)
`docs/reports/photo_headcount_estimates_2013.csv` 기준으로 일부 세션은 이미 값이 채워져 있음:
- `2013.04.04 메트라이프 천안행사`: `GROUP`, `40~50`, `B` (machine=8 근거)
- `2013.06.05 흥국 양평미리내`: `GROUP`, `20~40`, `C` (샘플 부족/근거 약함)
- `2013.06.10 흥국 양평미리내`: `GROUP`, `60~120`, `B`
- `2013.06.17 흥국 양평미리내.윤종성`: `GROUP`, `70~120`, `B` (동영상 프레임 샘플 근거)

핵심 이슈:
- 동일 시리즈(흥국-양평미리내)인데 `06.05`만 과소 추정된 형태. 원인은 **영상/프레임 기반 샘플링 편향(coverage 부족)**일 가능성이 큼.

## 4) 실행 전략(속도 + 정합성 “2트랙”)
### 트랙 A: 대량 판독 (Gemini Flash)
- 세션(폴더) 1개당 **CSV 1줄 초안**만 빠르게 작성.
- 샘플링은 3~10장(가능하면). 사진이 없으면 동영상에서 프레임 추출로 대체하되 “근거타입”을 반드시 기록.

### 트랙 B: 일관성/편차 검수 (GPT-5.2 Codex)
- 배치(20세션 내외) 단위로 CSV를 훑어 **편차/저근거 케이스만** 재작업 대상으로 지정.
- “시리즈 상속” 규칙으로 같은 규모가 흔들리지 않게 정합성 확보.

## 5) 규칙 업데이트(편차 방지용 최소 규칙)
### 5.1 근거 타입 강제(필수)
`evidence` 또는 `notes`에 아래를 반드시 남긴다(짧게):
- `src=photo|video|mixed`
- `sample_n≈N` (대략)
- (선택) `coverage=good|partial`

### 5.2 시리즈 상속(필수)
반복 세션(예: 흥국-양평미리내)은 `series_id`를 부여한다.
- 먼저 **근거가 가장 좋은 1회차를 “기준 회차”**로 확정한다.
- 동일 `series_id`의 다른 회차는 원칙적으로 기준 범위를 **상속**한다.
- 범위를 덮어쓰는 것은 “명확한 근거(A/B급)”가 있을 때만 허용.

### 5.3 video-only 저근거 처리(필수)
- `src=video` 이고 `sample_n<5` 또는 `coverage=partial`이면:
  - `confidence=C` 유지(또는 하향) + `notes=needs_resample` 표기
  - 시리즈 기준을 벗어나는 값은 확정하지 않는다(재샘플 후 결정).

## 6) 운영 단위(대화/스레드 관리)
- 한 대화 스레드에서 **20세션 내외** 처리 후 종료(컨텍스트 폭주 방지).
- 스레드 종료 직전에 대화에는 5줄만 남김:
  - 처리 세션 수, 누적 `min/max`, 타입별 개수, 규칙 변경 1줄, 다음 시작 세션명 1개

## 7) 다음 할 일(2013)
1. `series_id=흥국-양평미리내` 기준 회차 확정(예: `2013.06.10` 또는 `2013.06.17`).
2. `2013.06.05 흥국 양평미리내`는 video/coverage 기준으로 **상속 또는 재샘플**로 정리.
3. 이후 미처리 세션을 배치 단위로 전진(`2013.07.03 메디포스트...` 등).

