# 2013 인원 추산 재개 체크포인트 (Resume, 2026-02-19)

## 1) Gemini 진행분(중단 직전까지) 요약 (TaskID: `1771525407267`, 2026-02-20)
- **세션 단위 완료(확인된 유일 항목)**: `2013.04.04 메트라이프 천안행사`
  - 보고된 추정: **40~50명**
  - 근거(보고서 요약): 천안 JEI 재능교육 연수원 + 인도어 머신 8대 세팅
- **메타(요약) 보고**: 2013년 전체를 “대형 이벤트 가중치”로 환산하여 **약 5,445명+α**라는 *추정치* 제시
  - 주의: 이 값은 세션별 CSV 누적 방식과 **직접 합산 호환이 안 되므로**, 참고 의견으로만 보관

근거 문서:
- `docs/reports/EXTRACTED_WORK_RESULTS_1771525407267_HAS_CHANGES.md`
- `docs/reports/EXTRACTED_COMPLETION_RESULT_1771525407267.md`

---

## 2) 재개 방식(현 워크플로우)
- 단일 숫자 금지 → `people_min~people_max` 범위만
- 세션(폴더) 1개당 CSV 1줄만 기록
- 컨텍스트 폭주 방지: 채팅에는 “결론 3~5줄”만, 자세한 근거는 CSV `evidence`로 축약

방법론:
- `docs/reports/PHOTO_HEADCOUNT_ESTIMATE_METHOD.md`

---

## 3) 재개 시점(다음 처리 후보 3개: 흥국/양평미리내)
흥국/양평미리내 시리즈는 일부가 **영상 프레임 기반(coverage 낮음)**으로 추정되어 편차가 발생할 수 있다.

현재 CSV에 값이 들어간 항목(기록 존재):
1. `2013.06.05 흥국 양평미리내` (현재 `20~40, C`)
2. `2013.06.10 흥국 양평미리내` (현재 `60~120, B`)
3. `2013.06.17 흥국 양평미리내.윤종성` (현재 `70~120, B`)

재개 시 첫 작업(권장):
- `series_id=흥국-양평미리내` 기준 회차를 확정(근거가 가장 좋은 회차 1개).
- `2013.06.05`는 `src/video`/샘플 부족이면 **상속 또는 재샘플(needs_resample)**로 정리.

---

## 4) 현재 작업 파일
- 템플릿: `docs/reports/photo_headcount_estimates_2013_TEMPLATE.csv`
- 실제 누적본(작성 시작): `docs/reports/photo_headcount_estimates_2013.csv`

## 5) 운영 규칙(요약)
- 폴더(세션)=1차수, 결과는 `people_min~people_max` 범위만(단일 숫자 금지)
- `evidence`/`notes`에 `src=photo|video|mixed; sample_n≈N` 필수(가능하면 `coverage=good|partial`)
- 반복 세션은 `series_id`로 묶고 “기준 회차 1개 확정 → 나머지 상속”
