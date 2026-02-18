# [Work Order] 기술 부채 해결 로드맵 (Phase 3~4)

**발행자:** PM (Claude Haiku 4.5)
**일시:** 2026-02-16
**우선순위:** 🟡 **IMPORTANT — Phase별 순차 실행**
**상태:** [STATUS: ISSUED]

---

## 1. 개요

외부감사(SESSION_21)에서 식별된 4가지 기술 부채를 Phase별로 체계적으로 해결하기 위한 로드맵입니다.

**근거 문서:**
- `docs/_archive/reports/SESSION_21_FINAL_AUDIT_REPORT.md` (Section 4.2)
- `docs/_archive/reports/SESSION_21_EMERGENCY_AUDIT_REPORT.md` (Section 4)

**디렉터 승인:** Phase 4 진입 시 해결 (2026-02-16)

---

## 2. 기술 부채 목록 및 Phase별 해결 계획

### 🔴 Phase 3 STEP 3 (디자인 폴리싱 단계)

#### TD-01: 모바일 반응형 전수 검증
**담당:** Designer (Claude 4.5 Sonnet) + Builder (Claude 4.5 Sonnet)

**현황:**
- Header 모바일 메뉴: WO_HEADER_MOBILE_EMERGENCY로 별도 처리
- 나머지 페이지: Breakpoints 동작 미검증

**작업 내용:**
- [ ] 전체 17페이지 모바일 뷰(360px~768px) 검증
- [ ] Grid 레이아웃 Breakpoints 동작 확인
- [ ] 타이포그래피 가독성 검증 (모바일 폰트 크기)
- [ ] 터치 영역 최소 크기 확보 (버튼 44x44px)

**완료 기준:**
- [ ] 모바일 우선 검증 프로세스 수립
- [ ] 크롬/사파리 모바일 뷰 정상 동작
- [ ] 디자인 시스템 Breakpoints 가이드 문서화

**예상 소요:** 4~6시간
**완료 시점:** Phase 3 STEP 3 완료 전 (필수)

---

### 🟡 Phase 4 (배포 준비 단계)

#### TD-02: Content Collections 도입
**담당:** Builder (Claude 4.5 Sonnet)

**현황:**
- `docs/contents/*.md` → `src/pages/*.astro` 수동 복사 방식
- 유지보수 시 콘텐츠 변경마다 코드 수정 필요

**작업 내용:**
- [ ] Astro Content Collections 구조 설계
- [ ] `src/content/` 폴더 생성 및 스키마 정의
- [ ] `docs/contents/` → `src/content/` 마이그레이션
- [ ] 페이지 컴포넌트에서 `getCollection()` 활용

**완료 기준:**
- [ ] 콘텐츠 수정 시 코드 변경 불필요
- [ ] 타입 안전성 확보 (TypeScript 스키마)
- [ ] `npm run build` 성공

**예상 소요:** 6~8시간
**완료 시점:** Phase 4 진입 후 우선 처리

**근거 문서:** SESSION_21_FINAL_AUDIT_REPORT.md Section 4.2 (항목 4)

---

#### TD-03: 이미지 최적화 파이프라인
**담당:** Builder (Claude 4.5 Sonnet) + Media Producer (Gemini Flash)

**현황:**
- `public/assets/` 직접 배치 방식
- WebP 변환, 리사이징 수동 처리
- Astro Image 컴포넌트 미사용

**작업 내용:**
- [ ] 모든 정적 이미지 `src/assets/` 이동
- [ ] Astro `<Image />` 컴포넌트 적용
- [ ] WebP 자동 변환 및 리사이징 설정
- [ ] Lazy Loading 및 Placeholder 적용

**완료 기준:**
- [ ] Lighthouse Performance 점수 90+ (모바일)
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] 자동 최적화 파이프라인 확립

**예상 소요:** 4~6시간
**완료 시점:** Phase 4 배포 전

**근거 문서:** SESSION_21_FINAL_AUDIT_REPORT.md Section 4.2 (항목 5)

---

#### TD-04: 배포 어댑터 설정
**담당:** Builder (Claude 4.5 Sonnet)

**현황:**
- `astro.config.mjs`에 배포 환경 어댑터 미설정
- SSR 기능(Contact 폼 등) 배포 환경 작동 미보장

**작업 내용:**
- [ ] 배포 플랫폼 확정 (Cloudflare Pages / Vercel / Netlify)
- [ ] 해당 어댑터 설치 및 설정
- [ ] 환경 변수 구성 (.env.production)
- [ ] SSR 기능 배포 환경 테스트

**완료 기준:**
- [ ] 배포 환경에서 `npm run build` 성공
- [ ] Contact 폼 실연동 테스트 (Supabase/Resend)
- [ ] 배포 체크리스트 문서화

**예상 소요:** 2~3시간
**완료 시점:** Phase 4 배포 직전 (필수)

**근거 문서:** SESSION_21_FINAL_AUDIT_REPORT.md Section 2.4

---

## 3. 통합 타임라인

```
Phase 3 STEP 3 (디자인 폴리싱)
├─ [완료] Header 모바일 메뉴 복구 (WO_HEADER_MOBILE_EMERGENCY)
└─ TD-01: 모바일 반응형 전수 검증 (4~6시간)

Phase 4 (배포 준비)
├─ TD-02: Content Collections 도입 (6~8시간) — 우선순위 1
├─ TD-03: 이미지 최적화 파이프라인 (4~6시간) — 우선순위 2
└─ TD-04: 배포 어댑터 설정 (2~3시간) — 우선순위 3 (배포 직전)
```

**총 예상 소요:** 16~23시간 (Phase 3 STEP 3 + Phase 4 전체)

---

## 4. 레드팀 시나리오 예방 체크리스트

Gemini Pro가 제시한 4가지 공격 시나리오 예방:

### 시나리오 1: 콘텐츠 공백 (AI 상투적 표현)
- [x] Gemini Content에게 제약 명시 (상투적 표현 금지, 구체적 수치 필수)
- [ ] Content 검수 프로세스 수립 (Director 확인)

### 시나리오 2: 미디어 대참사 (고화질 자동재생)
- [ ] TD-03 해결로 자동 예방 (이미지 최적화)
- [ ] 파일 크기 제한 강제 (메인 2MB 이하)

### 시나리오 3: 유지보수 지옥 (텍스트 하드코딩)
- [ ] TD-02 해결로 자동 예방 (Content Collections)

### 시나리오 4: 모바일 붕괴 (PC만 검증)
- [ ] TD-01 해결로 자동 예방 (모바일 우선 검증)

---

## 5. 완료 보고

각 기술 부채 해결 시 개별 보고서 작성:
- `SESSION_XX_TD01_MOBILE_RESPONSIVE_REPORT.md`
- `SESSION_XX_TD02_CONTENT_COLLECTIONS_REPORT.md`
- `SESSION_XX_TD03_IMAGE_OPTIMIZATION_REPORT.md`
- `SESSION_XX_TD04_DEPLOYMENT_ADAPTER_REPORT.md`

**종합 보고서:** Phase 4 완료 시 `PHASE_4_TECHNICAL_DEBT_RESOLUTION_REPORT.md`

---

## 6. 참고 문서

- `docs/_archive/reports/SESSION_21_FINAL_AUDIT_REPORT.md` (Section 4.2, 5)
- `docs/_archive/reports/SESSION_21_EMERGENCY_AUDIT_REPORT.md` (Section 4)
- `02_ARCHITECTURE.md` (디자인 시스템 LOCKED 기준)

---

**PM 서명:** Claude Haiku 4.5
**승인:** [Director Approval Required]
