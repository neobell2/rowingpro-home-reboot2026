# 05_NEXT_TASK.md — 즉시 실행 지시서

> **이 문서는 AI에게 그대로 입력 가능한 작업 지시서입니다.**
> 작업 시작 전에 작성합니다. NEXT 없이 작업하면 방향이 흔들립니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.17** | 2026-02-21 | SESSION_46D PM(Gemini): 46C 감사 후속 PM 처리 완료 반영. 현재 지시 갱신. Builder/Designer WO 착수 선행조건 명시. |
| **v1.16** | 2026-02-21 | SESSION_46B PM(Sonnet): Decision Gate 추가(레이아웃 재설계 방식), IA 14페이지 반영, 1차 예정 지시 갱신(미디어 자산 우선순위). |
| **v1.15** | 2026-02-18 | SESSION_37 PM(Sonnet): SESSION_36 완료 반영. 현재 지시를 콘텐츠 확정(디렉터 직접 입력)으로 교체. |

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
  - ⚠️ [ARCHITECT 필수] D-033 "소비자 기준 원칙" 최종 보고서 반영 확인
  - ✅ 디렉터 최종 승인
```

---

## 현재 지시

> ⚠️ **선행 필수:** Builder/Designer WO 착수 전 `02_ARCHITECTURE.md` 갱신 완료 상태여야 함 ✅ SESSION_46D 완료

### 1. 콘텐츠 확정 (디렉터 직접 입력 — 진행중)

```
목표: 콘텐츠 최종 확정 — 디렉터 직접 입력 세션
작업자: Director (직접 입력)

방식:
  1. src/content/pages/*.md 파일에 최종 카피 직접 입력
  2. 완료 후 PM 호출

제약:
  - frontmatter 구조(키 이름) 변경 금지 — 값만 수정
  - IA 14페이지 기준 (D-040, 02_ARCHITECTURE.md 반영 완료)

완료 후 다음 단계:
  - PM: Builder IA 전환 WO 착수 확인 (이미 발행 완료 — PM-14)
  - 디렉터: 레이아웃 재설계 방식 결정 (Decision Gate)
```

### 2. Builder IA 전환 WO 진행

**근거:** `docs/work_orders/WO_BUILDER_IA_TRANSITION.md` (PM-14, SESSION_46D 발행)

```
BL-01~BL-12 순차 처리
의존관계: 콘텐츠 확정과 병렬 진행 가능 (구조 변경이므로 콘텐츠와 독립)
로고 30개 수집은 WO_MEDIA_LOGO_COLLECTION 별도 진행
```

---

## 다음 예정 지시 (참고용)

### 1차: Phase 3 STEP 2~3 (Content 확정 + Decision Gate 후)
```
목표: 미디어 자산 생산 + 레이아웃 재설계 + 디자인 폴리싱
근거: docs/work_orders/PHASE_3_INTEGRATED_ROADMAP_WO.md, SESSION_46B 확정 사항

우선순위 작업:
  1. [즉시] Media PD (Gemini Flash) — 클라이언트 로고 30개 수집
     - WO: docs/work_orders/WO_MEDIA_LOGO_COLLECTION.md
     - 산출물: /public/assets/images/logos/ (SVG 30개, 100px 높이)

  2. [Decision Gate 후] 레이아웃 재설계
     - 방식 A: 점진적 폴리싱 (페이지별 Designer + Builder 협업, 8~10 세션)
     - 방식 B: 시안 재생산 (17개 페이지 일괄 시안 → 구현, 5~8 세션)
     - 방식 C: 하이브리드 (주요 페이지 A방식 + 하위 페이지 B방식, 6~9 세션)
     - 근거: docs/reports/SESSION_46B_DESIGN_APPROACH_ISSUE.md

  3. [STEP 2] Gemini Flash (Media Producer) — 추가 미디어 자산 생산

  4. [STEP 3] Claude Sonnet (Builder + Designer) — 디자인 폴리싱

  5. [필수] TD-01 모바일 반응형 전수 검증 (docs/work_orders/WO_TECHNICAL_DEBT_ROADMAP.md)

IA 변경 사항 (SESSION_46B):
  - 17페이지 → 14페이지 (Programs 삭제, 비즈니스/라이프 분리)
  - 네비게이션: Home / About / 비즈니스 / 라이프 / History / Contact (6개)
  - 비즈니스: HRD 교육, 기업행사, 임직원 건강복지 (3개)
  - 라이프: 학교·청소년, 스포츠이벤트, 클럽·일반, 가족 (4개)
  - Index: 7개 섹션 (히어로, 통계, 클라이언트 롤링배너, 제공 방식, 서비스 미리보기, 왜 로잉프로, CTA)
```

### 2차: Phase 4 (기술 부채 + 배포)
```
목표: 기술 부채 해결 + Contact 폼 실연동 + SEO/OG 배포
근거: docs/work_orders/WO_TECHNICAL_DEBT_ROADMAP.md
요구사항:
  - (TD-02: Phase 3 선행으로 이동 완료 — D-032)
  - TD-03: 이미지 최적화 파이프라인
    ⚠️ D-033 적용: 이미지 교체 시 인간 마찰 발생하지 않는 구조로 설계
  - TD-04: 배포 어댑터 설정
  - ⚠️ **[ARCHITECT 필수 호출]** Contact 백엔드 설계 확정
  - ⚠️ **[ARCHITECT 필수 호출]** Phase 4 진입 가능성 검증
```

---
