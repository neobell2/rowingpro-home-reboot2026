# 05_NEXT_TASK.md — 즉시 실행 지시서

> **이 문서는 AI에게 그대로 입력 가능한 작업 지시서입니다.**
> 작업 시작 전에 작성합니다. NEXT 없이 작업하면 방향이 흔들립니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.11** | 2026-02-18 | SESSION_31 PM(Sonnet): 다음 지시를 Architect 검토(TD-02 Content Collections 설계)로 교체. |
| **v1.10** | 2026-02-17 | SESSION_25 PM(Sonnet) 완료 — 다음 지시를 STEP 1-1 콘텐츠 톤 확정 (Opus 티키타카)으로 갱신. |
| **v1.9** | 2026-02-16 | SESSION_22: Header 모바일 메뉴 긴급 복구 우선순위 변경. 기술 부채 로드맵 반영. |

> 📋 **전체 버전 히스토리:** [06_VERSION_HISTORY.md](06_VERSION_HISTORY.md)

---

## Phase 전환 체크리스트

```
Phase 3 → Phase 4 전환 조건:
  - ✅ Phase 3 작업 완료 (콘텐츠 고도화, 디자인 폴리싱)
  - ⚠️ [ARCHITECT 필수 호출] Phase 4 진입 가능성 검증
    - 기술 부채 점검
    - 아키텍처 정합성 최종 확인
    - 산출물: Phase 4 진입 승인 또는 차단 사유 보고서
  - ✅ 디렉터 최종 승인
```

---

## 현재 지시

**근거:** `docs/work_orders/WO_ARCHITECT_CONTENT_COLLECTIONS_REVIEW.md`

```
목표: TD-02 Content Collections 도입 설계 검토 및 확정
우선순위: 긴급 (콘텐츠 확정 작업 착수 전 선행 필수)
작업자: Architect (Claude Opus 4.6)

배경:
  - 현재 텍스트가 .astro 파일에 하드코딩 → 텍스트 수정마다 코드 직접 편집 필요
  - 17페이지 콘텐츠 확정 작업 시작 전 구조 변경이 효율적
  - PM이 스키마 샘플 작성 완료 (docs/contents/home_schema_sample.md)

검토 항목:
  1. Content Collections 선행 타당성 (Phase 3 내 TD-02)
  2. src/content/ 디렉터리 구조 설계
  3. docs/contents/ 폴더 향후 역할 결정
  4. 스키마 샘플 검토 (home_schema_sample.md)
  5. Builder WO 발행용 기술 범위 명세

출력:
  - Content Collections 설계안 확정
  - Builder WO 발행 기준 제공
  - Architect 세션 보고서 (docs/reports/SESSION_32_ARCHITECT_OPUS.md)
```

---

## 다음 예정 지시 (Architect 검토 완료 후)

```
목표: Builder WO 발행 — Content Collections 구현
작업자: PM (Claude Sonnet) → Builder (Claude Sonnet)
내용:
  - Architect 설계안 기반 Builder WO 작성
  - Builder: src/content/ 구조 구현, 17페이지 스키마 적용
  - PM: 17개 SSOT .md 파일 새 형식으로 재작성
```

---

## 다음 예정 지시 (참고용)

### 1차: Phase 3 STEP 2~3 (Content 완료 후)
```
목표: 미디어 자산 생산 + 디자인 폴리싱
근거: docs/work_orders/PHASE_3_INTEGRATED_ROADMAP_WO.md
요구사항:
  - [STEP 2] Gemini Flash (Media Producer) — 미디어 자산 생산
  - [STEP 3] Claude Sonnet (Builder + Designer) — 디자인 폴리싱
  - [필수] TD-01 모바일 반응형 전수 검증 (docs/work_orders/WO_TECHNICAL_DEBT_ROADMAP.md)
```

### 2차: Phase 4 (기술 부채 + 배포)
```
목표: 기술 부채 해결 + Contact 폼 실연동 + SEO/OG 배포
근거: docs/work_orders/WO_TECHNICAL_DEBT_ROADMAP.md
요구사항:
  - TD-02: Content Collections 도입
  - TD-03: 이미지 최적화 파이프라인
  - TD-04: 배포 어댑터 설정
  - ⚠️ **[ARCHITECT 필수 호출]** Contact 백엔드 설계 확정
  - ⚠️ **[ARCHITECT 필수 호출]** Phase 4 진입 가능성 검증
```

---
