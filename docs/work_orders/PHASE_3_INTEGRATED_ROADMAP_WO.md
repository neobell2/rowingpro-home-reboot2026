# [Work Order] Phase 3: 콘텐츠 완성 및 디자인 폴리싱 통합 로드맵

**작성자:** PM (Claude Haiku 4.5)
**일시:** 2026-02-15
**상태:** [STATUS: APPROVED — 디렉터 승인 완료 (2026-02-15)]

---

## 📝 업데이트 이력

| 세션 | 내용 |
|:--|:--|
| SESSION_21 | D-025, D-026 반영 (모델 변경), D-027 병목 분석, 운영 스쿼드 최신화 |
| SESSION_22 | ✅ **Header 모바일 메뉴 복구 완료** (Builder/Codex, Commit 4efcf16) |
| SESSION_24 | ✅ **Vertex AI 도입 NO-GO** (Architect 판정 — ROI 미달, 운영 리스크) |
| SESSION_24 | ✅ **D-030** — PM+DocMgr 통합, Haiku → Sonnet 교체 |
| SESSION_24 | ✅ **STEP 1 방식 변경** — Gemini 초안 완료, 이후 Opus 티키타카 톤 리라이팅(STEP 1-1)으로 전환 |

---

## 1. 개요
본 문서는 Phase 3의 핵심인 '콘텐츠 완성'과 '디자인 폴리싱'을 파편화 없이 유기적으로 연결하기 위한 통합 작업 지시서입니다. 콘텐츠가 디자인의 근거가 되고, 디자인이 콘텐츠를 빛나게 하는 선순환 구조를 구축합니다.

## 2. 통합 작업 로드맵 (Master Plan)

### [STEP 1] 콘텐츠 고도화 및 자산 확정 (SESSION 19)
- **주수행자**: Gemini 3.0 Pro (Content)
- **핵심 과업**: 
    - HPOC 프레임워크 기반 브랜드 스토리 완성
    - 17P 전체 최종 카피 생산 (SSOT 갱신)
    - 미디어 자산(이미지/영상) 컨셉 및 Midjourney 프롬프트 확정
- **출력물**: `docs/contents/` 최종본, 미디어 생산 가이드

### [STEP 2] 미디어 자산 생산 및 정제 (SESSION 19~20)
- **주수행자**: Gemini 3.0 Flash (Media Producer) + Midjourney
- **협조**: PM 감시 (진행률 관리)
- **핵심 과업**:
    - STEP 1에서 확정된 가이드에 따른 이미지 생성 및 보정
    - 기존 영상 자산(`hero-bg.webm`) 최적화
- **출력물**: `public/assets/` 내 최종 이미지/영상 파일

### [STEP 3] 디자인 폴리싱 및 최종 바인딩 (SESSION 21+)
- **주수행자**: Claude 4.5 Sonnet (Builder) + Claude 4.5 Sonnet (Designer)
- **협조**: Architect (QA 및 아키텍처 정합성 검증)
- **핵심 과업**:
    - 최종 확정된 콘텐츠와 자산을 17P 스켈레톤에 주입
    - 디자인 시스템(`LOCKED`) 기준 시각적 디테일(간격, 타이포, 모션) 폴리싱
    - 모바일 반응형 최종 점검
    - 빌드 검증 및 배포 준비
- **출력물**: 100% 완성된 웹사이트 구현물 (dist/ 폴더)

## 3. 상세 요구사항 (STEP 1 중심)

### 3.1 HPOC 브랜드 스토리 (Pro 담당)
- **Hardware**: 장비의 전문성 및 안전 환경
- **People**: 선수 출신 코치진의 진정성
- **Operation**: 13년 무사고 운영 시스템
- **Content**: HRD 관점의 교육 시나리오

### 3.2 17P 최종 카피 및 가격 정책
- 서비스별 [특징/대상/기대효과] 표준화
- 부스형 4단계 패키지(SIMPLE/CORE/PRO/MASTER) 상세 스펙 확정

## 4. 모델별 협업 및 비용 최적화
**최신 운영 스쿼드 (D-018, D-025, D-026 반영):**

- **Gemini 3.0 Pro** (Content): 고난도 전략 및 HPOC 기반 카피라이팅 (STEP 1)
- **Gemini 3.0 Flash** (Media Producer): 미디어 생성 지원, 데이터 정제 (STEP 2)
- **Claude Haiku 4.5** (PM): 공정 관리 및 진척 모니터링 (전 단계)
- **Claude 4.5 Sonnet** (Builder): 코드 구현 및 최종 바인딩 (STEP 3)
- **Claude 4.5 Sonnet** (Designer): 시각적 완성도 및 폴리싱 검증 (STEP 3)
- **Claude 4.5 Sonnet** (Architect): 아키텍처 정합성 최종 검증 (STEP 3)

## 5. 완료 기준 (DoD)
- [ ] 파편화 없는 단계별 작업 연계 확인
- [ ] 17P 전체에 즉시 주입 가능한 최종 콘텐츠 및 미디어 자산 확보
- [ ] 디자인 시스템과 콘텐츠가 완벽히 결합된 최종 결과물 도출
- [ ] `npm run build` 성공 (dist/ 폴더 생성)
- [ ] localhost에서 페이지 렌더링 확인

## 6. 선행 조건 (SESSION_21 착수 필수)
⚠️ **블로커 1: npm build 오류 해결** (Builder 담당)
- `npm run build` Exit 0 확인
- dist/ 폴더 생성 확인

⚠️ **블로커 2: PHASE_3_INTEGRATED_ROADMAP_WO 최종 확정** (현재 진행)
- 모델 변경 반영 ✅ (본 수정안)
- 도구 선택 확정 (디렉터 승인 대기)

## 7. 근거 문서
- `docs/reports/SESSION_20_PM_FINAL_REPORT.md` (병목 분석)
- `docs/reports/SESSION_21_BUILD_BLOCKER_REPORT.md` (기술 진단)
- `docs/work_orders/SESSION_21_PREFLIGHT_WO.md` (블로커 정의)
- `03_DECISIONS.md` D-027 (SESSION_20 결정 기록)

---

**PM 수정 완료 (SESSION_21)** — ✅ **디렉터 승인 완료 (2026-02-15)**

**승인 완료 항목:**
1. ✅ PHASE_3_INTEGRATED_ROADMAP_WO 최종 확정 (APPROVED)
2. ✅ 작업 도구 선택 승인 (Gemini Pro/Flash + Claude Sonnet 조합)
3. ✅ Phase 3 착수 승인 (빌드 복구 완료 + 디렉터 승인)
