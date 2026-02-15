# 05_NEXT_TASK.md — 즉시 실행 지시서

> **이 문서는 AI에게 그대로 입력 가능한 작업 지시서입니다.**
> 작업 시작 전에 작성합니다. NEXT 없이 작업하면 방향이 흔들립니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.9** | 2026-02-16 | SESSION_22: Header 모바일 메뉴 긴급 복구 우선순위 변경. 기술 부채 로드맵 반영. |
| **v1.8** | 2026-02-15 | Phase 전환 체크리스트 신설, Architect 필수 호출 지점 명시 추가. D-024 반영. |
| **v1.7** | 2026-02-15 | GPT Designer 제거 및 운영 스쿼드 재편 반영. D-025, D-026 반영. |

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
목표: 브랜드 스토리 및 카피라이팅 (Phase 3 STEP 1)
우선순위: 즉시 실행
요구사항:
  - [작업자] Content (Gemini 3.0 Pro)
  - [입력] 01_PROJECT_CONTEXT.md, 02_ARCHITECTURE.md, docs/contents/*
  - [출력] docs/contents/ 내 각 페이지별 최종 카피 (Markdown)
  - [중점] "국가대표 출신", "13년 무사고", "팀워크" 핵심 메시지
  - [검수] 톤앤매너 "프리미엄 + 전문성 + 신뢰"
금지사항:
  - 없는 사실 지어내기, 과장 광고 금지
  - 스포츠/레저의 가벼운 톤 사용 금지
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
