# WO_ARCHITECT_CONTENT_COLLECTIONS_REVIEW

**발행:** PM (Claude Sonnet 4.5)
**수신:** Architect (Claude Opus 4.6)
**일시:** 2026-02-18
**우선순위:** 긴급 (콘텐츠 작업 착수 전 설계 확정 필요)
**상태:** 🔴 OPEN — Architect 검토 대기

---

## 1. 배경 및 검토 요청 사유

Phase 3 콘텐츠 작업(17페이지 텍스트 확정)이 다음 세션부터 본격화됩니다.

현재 텍스트가 `.astro` 파일 안에 하드코딩되어 있습니다. 텍스트 수정 시마다 코드 파일을 직접 편집해야 하며, 17페이지 전체에 걸쳐 수백 회의 코드 수정이 발생합니다.

이를 해결하기 위해 **Astro Content Collections(TD-02)를 콘텐츠 작업 전에 선행**하는 방향을 검토 중입니다. 설계 확정 권한이 Architect에게 있어 검토를 요청합니다.

---

## 2. 현재 상태

| 항목 | 현황 |
|:--|:--|
| 텍스트 위치 | `src/pages/*.astro` 안에 하드코딩 |
| 콘텐츠 SSOT | `docs/contents/*.md` (참조 문서, 빌드 비연동) |
| TD-02 상태 | Phase 4 예정 → **선행 검토 요청** |
| 콘텐츠 드래프트 | `docs/contents/review/`에 17페이지 완성 (Gemini + Opus 2세트) |
| 다음 작업 | 디렉터 주도 텍스트 확정 (WO_DIRECTOR_17page_Text_Creation_Plan.md) |

---

## 3. 검토 요청 사항

### Q1. Content Collections 선행 적합성
Phase 3 진행 중 TD-02를 선행하는 것이 아키텍처 정합성 측면에서 적절한가?
Phase 4로 유지하는 것 대비 리스크가 있는가?

### Q2. src/content/ 구조 설계
- 디렉터리 구조 (예: `src/content/pages/home.md` vs `src/content/home.md`)
- config.ts 스키마 위치 및 구성 방식
- 17페이지 전체 적용 vs 우선순위 페이지부터 단계적 적용

### Q3. docs/contents/ 폴더 향후 역할
- `src/content/`로 통합하고 `docs/contents/`는 폐기하는가?
- 아니면 `docs/contents/`는 인간 편집용 초안 공간으로 유지하고 `src/content/`는 별도로 관리하는가?

### Q4. 샘플 스키마 검토
`docs/contents/home_schema_sample.md` — PM이 작성한 예시 양식.
이 구조가 올바른 방향인지 확인 요청.

### Q5. Builder WO 범위 확정
Architect 검토 완료 후 PM이 Builder WO를 발행합니다.
WO에 포함되어야 할 기술 범위와 제약 조건을 명시해주십시오.

---

## 4. 참고 문서

- `docs/contents/home_schema_sample.md` — 스키마 샘플
- `src/pages/index.astro` — 현재 Home 하드코딩 현황
- `docs/work_orders/WO_TECHNICAL_DEBT_ROADMAP.md` — TD-02 원본 등록
- `docs/work_orders/WO_DIRECTOR_17page_Text_Creation_Plan.md` — 콘텐츠 작업 계획
- `02_ARCHITECTURE.md` — 기술 스택 및 IA

---

## 5. 기대 산출물

1. **Content Collections 도입 승인 또는 대안 제시**
2. **src/content/ 디렉터리 구조 설계안**
3. **docs/contents/ 폴더 향후 처리 방침**
4. **Builder WO 발행용 기술 범위 명세**

---

**Architect 검토 완료 후 → PM 세션 재개 → Builder WO 발행**
