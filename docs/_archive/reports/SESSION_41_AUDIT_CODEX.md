# SESSION_41 외부감사(레드팀) — 구조/리스크 전수 진단 (CODEX)

**역할:** External Auditor / Red Team (Codex CLI)  
**일시:** 2026-02-18  
**범위:** 저장소 설정/문서/코드/산출물 정합성 및 “예산→성과” 전환 관점 리스크 감사  
**제약:** 네트워크 미사용, 실행/수정 없음(본 보고서 파일 생성만)

---

## 1. 총평 (한 줄)

프로젝트는 “웹사이트 개발”보다 “AI 운영 거버넌스”에 과투자된 상태이며, 실제 성과(릴리즈/배포/운영가능성)를 결정하는 구간(SSOT, 배포 재현성, 보안헤더, Contact 실연동 설계)이 비어 있어 예산 소모 대비 진척이 누적되지 않는다.

---

## 2. 감사 범위 및 확인한 근거(핵심)

### 2.1 규칙/운영 체계
- `CLAUDE.md` (승인 관문, 역할 경계, D-039 등)
- `PROTOCOLS.md` (세션 시작/종료 프로토콜)
- `ROLES.md` (RACI, Architect 필수 호출 지점)
- `.gpt-rules`, `.roo/system-prompt.md`, `.clinerules/.cursorrules/.antigravityrules`, `config.toml`

### 2.2 현재 좌표/지시/결정
- `04_CURRENT_STATE.md` (블로커/이슈, Node 22, 미커밋 등)
- `05_NEXT_TASK.md` (디렉터 직접 입력 지시)
- `03_DECISIONS.md` (D-033, D-034, D-037, D-039)
- Work Orders: `docs/work_orders/WO_CONTENT_CONFIRMATION.md`, `docs/work_orders/WO_TECHNICAL_DEBT_ROADMAP.md`, `docs/work_orders/PHASE_3_INTEGRATED_ROADMAP_WO.md`

### 2.3 구현/설정/산출물
- `package.json`, `package-lock.json`, `astro.config.mjs`, `tailwind.config.cjs`, `tsconfig.json`
- 콘텐츠/스키마: `src/content/config.ts`, `src/content/pages/*.md`, `src/content/common/site.yaml`
- 레이아웃/핵심 UI: `src/layouts/MainLayout.astro`, `src/components/Header.astro`, `src/components/Footer.astro`
- 라우트: `src/pages/**/*.astro`
- SEO 정적 파일: `public/robots.txt`, `public/sitemap.xml`
- 빌드 산출물 샘플: `dist/` 및 `dist/_astro/hoisted.*.js`

---

## 3. 핵심 발견: “예산은 쓰는데 성과가 안 나오는” 구조적 원인

### F-01. 디렉터가 크리티컬 패스(SPOF)로 고정됨
- 현재 지시가 “17페이지 최종 확정 — 디렉터 직접 입력”으로 고정되어 있어(`05_NEXT_TASK.md:41`, `05_NEXT_TASK.md:43`), 디렉터가 바쁘면 전체가 정지한다.
- 이는 휴먼에러가 아니라 프로세스 설계(업무 분해/위임/완료 기준 부재)의 결과다.

### F-02. “SSOT(단일 진실)”이 실제로는 분열됨
- 코드가 실제로 소비하는 콘텐츠는 `src/content/pages/*.md`(Astro Content Collections)인데, 별도의 문서 SSOT로 `docs/contents/*.md` 트리가 병행 유지된다.
- 파일명/슬러그 체계도 이원화되어 운영 비용(동기화·검증·리뷰)이 반복 발생한다.

### F-03. 거버넌스 산출물이 실행 산출물을 대체함(문서→문서 루프)
- 승인 관문/세션 프로토콜이 촘촘하지만, “릴리즈 기준(배포/보안/운영)”을 코드/자동화로 고정하지 않아 실행 누적이 약하다.
- 결과적으로 문서/보고서 생성은 진행되지만, 배포 품질·보안·운영 가능성은 Phase 4로 미뤄진 채 리스크가 누적된다.

---

## 4. 기술/보안/배포 리스크 (우선순위 순)

### R-01. URL 정합성(SEO) 불일치: sitemap vs canonical/trailingSlash
- `astro.config.mjs`는 `trailingSlash: 'never'`로 설정(`astro.config.mjs:9`).
- 그런데 sitemap은 trailing slash 버전으로 관리(`public/sitemap.xml:4` 등 `/about/`), 빌드 결과의 canonical/og:url은 slash 없는 버전으로 생성됨(예: `dist/about/index.html:1`의 `https://rowingpro.co.kr/about`).
- 영향: 크롤러/검색엔진에 중복 URL로 인식되거나 리다이렉트 체인 발생 가능(SEO 손실, 인덱싱 비효율).

### R-02. 보안헤더/CSP 부재 + 외부 CDN 런타임 의존
- `src/layouts/MainLayout.astro`에서 외부 리소스를 직접 로드(구글 폰트, jsdelivr Pretendard, unpkg Lucide) (`src/layouts/MainLayout.astro:44`, `:47`, `:50`).
- `public/_headers`가 없어(현재 미존재) CSP/HSTS/프레임·리퍼러 정책 등 “기본 방어막”이 코드로 고정되어 있지 않다.
- 특히 Lucide는 빌드 산출물에서 import로 끌어와 실행됨: `dist/_astro/hoisted.DGUtAcxi.js:1` (`import "https://unpkg.com/lucide@0.460.0/..."`).
- 영향: 공급망(변조/장애) 리스크, CSP 도입 난이도 상승, 보안감사 시 지적 가능성이 높음.

### R-03. Node 22 이슈는 “해결됨”으로 기록되었으나, 강제장치가 약함
- `04_CURRENT_STATE.md`에 Node 22 고정으로 빌드 복구가 기록되어 있음(`04_CURRENT_STATE.md:168`).
- 하지만 repo 루트에 `.nvmrc`/`.node-version` 같은 강제 파일이 없음(환경별 drift 재발 가능).
- 영향: 배포/빌드 환경에 따라 재현성 깨질 수 있음(특히 Cloudflare Pages 빌드 이미지/Node 선택).

### R-04. Content Collections 스키마가 느슨해 “운영 중 깨짐” 리스크
- `src/content/config.ts`에서 `title/description`만 강제하고 `.passthrough()`로 나머지 필드를 통과(`src/content/config.ts:9`).
- 실제 페이지들은 `heroTitle`, `stats`, `services` 등 다양한 필드를 전제로 렌더링(`src/pages/index.astro:6` 등).
- 영향: 콘텐츠 YAML 오타/누락이 빌드 에러로 잡히지 않고 런타임에서 “부분 깨짐”으로 나타날 수 있음(QA 비용 증가).

### R-05. 법정/운영 정보의 이중화(데이터 vs 하드코딩)
- 회사 정보가 `src/content/common/site.yaml`에 있음(`src/content/common/site.yaml:1`).
- 동시에 Footer/Contact에 값이 하드코딩되어 있어(`src/components/Footer.astro:17`, `src/pages/contact.astro:50` 등) 변경 시 불일치 리스크가 상시 존재.
- 영향: 사업자/주소/연락처 변경 시 법정표기 오류, 신뢰도 저하.

### R-06. Contact 실연동은 “기능 추가”가 아니라 “보안/운영 설계” 작업
- 현재 Contact 폼은 placeholder이며(`src/pages/contact.astro`), Supabase+Resend 연동 예정이 문서/콘텐츠에 명시됨(`src/content/pages/contact.md:14`, `docs/work_orders/WO_TECHNICAL_DEBT_ROADMAP.md:117`).
- 영향: 스팸/레이트리밋/시크릿 관리/로그·보관/개인정보 처리(privacy 정합)까지 포함되므로, 설계 없이 붙이면 운영·법무·보안 리스크가 한 번에 터짐.

### R-07. CI(최소 빌드 게이트) 부재
- `.github/workflows/`가 없음(현 저장소 기준).
- 영향: “항상 빌드된다”를 자동으로 보장할 장치가 약하며, 승인 관문이 사람/문서로만 남아 품질 회귀가 쉬움.

### R-08. Git 위생: 작업물 미커밋/산출물 혼재
- 현재 워킹트리에 수정/삭제/Untracked가 섞여 있음(예: `04_CURRENT_STATE.md`에 “Git 미커밋” 블로커로 기록되어 있음).
- 영향: “무엇이 배포 가능한 상태인지”가 흐려지고, 롤백/감사 추적 비용이 증가.

### R-09. `.gitignore` 인코딩/패턴 신뢰성 저하 가능성
- `.gitignore`에 깨진 문자열이 존재(예: “참고자료” 관련 라인) (`.gitignore:30`~`:33`).
- 영향: 의도한 경로가 실제로 ignore되지 않을 가능성(대형 파일/참고자료 유입).

### R-10. XSS/HTML 인젝션 포인트(현재는 제한적)
- `set:html` 사용 지점 존재(`src/pages/contact.astro:76`). 현재는 repo 내 고정 텍스트라 위험이 제한적이나, 향후 CMS/외부 입력을 붙이면 즉시 취약점으로 전환될 수 있음.

---

## 5. “이 새끼들 뭐하고 있냐”에 대한 감사 결론(행위/패턴)

1) 문서/규칙/역할/프로토콜을 촘촘히 만들어 “사고를 막는 시스템”을 설계하려 했음.  
2) 하지만 실제 병목은 실행이 아니라 **결정(최종 카피/최종 SEO/커밋/배포)**인데, 그 결정을 코드/자동화로 고정하지 못해 문서 생산이 실행을 대체함.  
3) 다음 단계(Phase 4: 배포/Contact/보안/성능)에 들어가면 지금의 빈칸이 한 번에 비용으로 전환될 가능성이 높음.

---

## 6. 권고: “예산→성과”로 전환하는 최소 처방(우선순위)

### P0 (막지 않으면 계속 새는 구간)
- URL 정합성 1회 결정: `trailingSlash` 정책과 `public/sitemap.xml`/canonical/og:url를 동일 규칙으로 통일.
- 외부 CDN 의존 최소화 + 보안헤더 도입(최소 CSP/Referrer-Policy/X-Frame-Options 계열): Cloudflare Pages 방식에 맞춰 코드/리포에 고정.
- Node 버전 강제(배포/로컬 동일): `.nvmrc` 또는 동등한 단일 강제장치 도입.

### P1 (운영비 절감)
- `src/content/common/site.yaml`를 단일 소스로 삼고 Footer/Contact 하드코딩 제거(불일치 제거).
- Content Collections 스키마를 페이지별로 강화(필드 누락이 빌드에서 실패하도록).

### P2 (Phase 4 폭탄 제거)
- Contact 실연동 전 위협모델/운영정책 확정(스팸, rate limit, 시크릿, 로그, 개인정보 처리, 장애 대응).
- 최소 CI 게이트(빌드 성공 확인) 추가로 “항상 빌드된다”를 자동 보장.

---

## 7. 부록: 감사 중 확인된 사실(간단)

- 기술 스택: Astro + Tailwind (`package.json`)
- 배포 목표: Cloudflare Pages (`02_ARCHITECTURE.md:208`)
- SEO 정적 파일 존재: `public/robots.txt`, `public/sitemap.xml`
- 외부 시크릿 패턴 스캔: 뚜렷한 키 문자열은 발견되지 않음(정규식 기반 검색)

---

**보고서 생성:** Codex CLI (SESSION_41)  
**세션 종료:** Director 요청에 따라 본 보고서 생성 후 종료 처리

