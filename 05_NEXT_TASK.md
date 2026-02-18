# 05_NEXT_TASK.md — 즉시 실행 지시서

> **이 문서는 AI에게 그대로 입력 가능한 작업 지시서입니다.**
> 작업 시작 전에 작성합니다. NEXT 없이 작업하면 방향이 흔들립니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.14** | 2026-02-18 | SESSION_35 PM(Sonnet): Builder WO TASK 3 보강(8건), WO_SEO_BASELINE 신규 추가. 현재 지시 갱신. |
| **v1.13** | 2026-02-18 | SESSION_33 PM(Sonnet): Builder WO 발행 완료. 현재 지시를 Builder 구현으로 교체. |
| **v1.12** | 2026-02-18 | SESSION_32 Architect(Opus): Architect 검토 완료. 현재 지시를 PM→Builder WO 발행으로 교체. Phase 전환 체크리스트에 D-033 항목 추가. |
| **v1.11** | 2026-02-18 | SESSION_31 PM(Sonnet): 다음 지시를 Architect 검토(TD-02 Content Collections 설계)로 교체. |
| **v1.10** | 2026-02-17 | SESSION_25 PM(Sonnet) 완료 — 다음 지시를 STEP 1-1 콘텐츠 톤 확정 (Opus 티키타카)으로 갱신. |

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

**근거:** `docs/work_orders/WO_BUILDER_CONTENT_COLLECTIONS_IMPL.md` (SESSION_35 보강), `docs/work_orders/WO_SEO_BASELINE.md`, `03_DECISIONS.md` D-032, D-034, D-037

```
목표: Content Collections 구현 + SEO 기반 구축 — Builder 세션
우선순위: 긴급 (콘텐츠 확정 작업 착수 전 선행 필수)
작업자: Builder (Claude Sonnet)

WO 1: WO_BUILDER_CONTENT_COLLECTIONS_IMPL (우선 실행)
  TASK 1: src/content/ 구조 신설 (config.ts + 17개 .md + common/)
  TASK 2: 17개 .astro 파일 Content Collections API 소비로 리팩터링
  TASK 3: 즉시 처리 8건 (SESSION_35 보강)
    - Lucide @latest → 버전 고정
    - Google Fonts / jsdelivr / unpkg CDN 버전 고정
    - BaseLayout.astro 삭제
    - package.json build 명령 개선
    - 주소 오기 수정 (케이에듀동 → 케이앤몰동) 3곳
    - tsconfig.json include/exclude 명시 (astro check 복구)
    - /colors 페이지 배포 제외
    - aos 패키지 제거

WO 2: WO_SEO_BASELINE (WO1 완료 후 또는 병행)
  TASK 1: public/robots.txt, public/sitemap.xml 정적 파일 추가
  TASK 2: MainLayout.astro canonical + OG + Twitter Card 최소세트 추가
  TASK 3: public/og/og-default.jpg 임시 이미지 배치

공통 제약:
  - 텍스트 그대로 이전 (내용 수정 금지)
  - CSS/스타일 변경 금지
  - 새 패키지 추가 금지
  - npm run build Exit 0 필수
  - Programs 구조: 인도어/수상/부스형/MIX (D-037)
  - service-event 가격 티어: SIMPLE/CORE/PRO/MASTER (D-034, 금액은 플레이스홀더)
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
  - (TD-02: Phase 3 선행으로 이동 완료 — D-032)
  - TD-03: 이미지 최적화 파이프라인
    ⚠️ D-033 적용: 이미지 교체 시 인간 마찰 발생하지 않는 구조로 설계
  - TD-04: 배포 어댑터 설정
  - ⚠️ **[ARCHITECT 필수 호출]** Contact 백엔드 설계 확정
  - ⚠️ **[ARCHITECT 필수 호출]** Phase 4 진입 가능성 검증
```

---
