# 05_NEXT_TASK.md — 즉시 실행 지시서

> **이 문서는 AI에게 그대로 입력 가능한 작업 지시서입니다.**
> 작업 시작 전에 작성합니다. NEXT 없이 작업하면 방향이 흔들립니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.10** | 2026-02-17 | SESSION_25 PM(Sonnet) 완료 — 다음 지시를 STEP 1-1 콘텐츠 톤 확정 (Opus 티키타카)으로 갱신. |
| **v1.9** | 2026-02-16 | SESSION_22: Header 모바일 메뉴 긴급 복구 우선순위 변경. 기술 부채 로드맵 반영. |
| **v1.8** | 2026-02-15 | Phase 전환 체크리스트 신설, Architect 필수 호출 지점 명시 추가. D-024 반영. |

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

**근거:** `docs/work_orders/PHASE_3_INTEGRATED_ROADMAP_WO.md`

```
목표: STEP 1-1 — Home 페이지 톤 확정 (디렉터 티키타카)
우선순위: 즉시 실행
작업자: Content (Claude Opus — 고감도 카피라이팅 전담)
방식: 디렉터와 티키타카 방식으로 Home 콘텐츠 톤 확정

입력:
  - 01_PROJECT_CONTEXT.md (브랜드 정체성/핵심 메시지)
  - docs/contents/home.md (현재 콘텐츠 SSOT)
  - docs/contents/Headline_ideas_Set.txt (헤드라인 아이디어 세트)
  - SESSION_24 Architect 판정 (HPOC 제거, 톤 전면 교체 필요)

출력:
  - docs/contents/home.md 업데이트 (Hero H1/H2 확정, 섹션별 카피)
  - 확정된 톤 원칙 요약 (다음 13페이지 확장 기준)

중점:
  - H1: "ROWING = TEAMWORK" (고정, 변경 불가)
  - H2: 디렉터 티키타카로 확정 (★핵심 작업)
  - 금지 표현: HPOC 제거 (SESSION_24 Architect 지시)
  - 톤: 프리미엄 + 전문성 + 신뢰 (스포츠/레저 경량 톤 금지)

검수 순서: Home 확정 → About → Programs → Corporate Hub (순차 확장)
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
