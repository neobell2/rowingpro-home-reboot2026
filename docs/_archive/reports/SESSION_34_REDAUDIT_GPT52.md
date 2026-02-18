# SESSION_34 레드팀 감사 보고서 — GPT-5.2 (Codex)

**일시:** 2026-02-18  
**역할:** External Red Team Auditor  
**실행 환경:** Windows / PowerShell / Codex CLI  
**상태:** [STATUS: COMPLETED]  

---

## 0. 감사 원칙(준수)

- **존댓말 사용**
- **파괴적 행위 금지**(삭제, `git reset/clean`, 강제 덮어쓰기 등) — 단, 디렉터 지시에 따라 **테스트 서버(astro preview) 종료는 수행**했습니다.
- 보고서는 **증거 기반(파일/명령 출력)**으로만 작성하고, 불확실한 항목은 **미확인/모호**로 분리했습니다.

---

## 1. 결론 요약(Executive Summary)

현재 프로젝트는 **Phase 3 구현 진행 중**이며, “콘텐츠를 사람이 안전하게 수정 가능한 구조(Content Collections)”로 전환하기 전까지는,
콘텐츠 정본(`docs/contents/*`)과 실제 사이트 출력(`src/pages/*.astro`)의 불일치가 구조적으로 지속됩니다.

이번 감사에서 확인된 최상위 리스크는 아래 5가지입니다.

1) **SEO/배포 필수 산출물 부재**: `robots.txt`, `sitemap.xml`, OG/canonical 메타 부재  
2) **히어로 비디오 MP4 누락**: `/videos/hero-bg.mp4` 404 → 일부 환경에서 히어로가 깨질 수 있음  
3) **외부 CDN + `@latest` 의존**: Lucide `@latest`(breaking change 시 즉시 파손) + 폰트 CDN 의존  
4) **정본 문서 간 모순 + 경로 붕괴**: Phase/페이지수/근거 문서 경로가 서로 충돌 또는 실제 파일 미존재  
5) **품질 게이트(astro check) 붕괴**: `tsconfig.json` 범위가 과도하여 `docs/design/*`까지 타입체크 대상이 되어 500+ 에러 발생

---

## 2. 감사 계획(실행 버전)

### 2.1 목표
- “모든 문제점”을 **카테고리별**로 전수 수집하고, **우선순위/근거/담당 역할**로 정리합니다.

### 2.2 범위
- 코드(빌드/런타임/의존성), 콘텐츠 SSOT(문서), 거버넌스(Work Order/Decision/버전), SEO/배포/보안/성능/접근성 관점.

### 2.3 수행 순서
1) 정적 스캔(rg)으로 위험 징후 수집  
2) 핵심 파일 정독 및 근거 캡처(정본 01~05 + 레이아웃/핵심 페이지)  
3) 빌드/프리뷰 재현 점검(서버 일시 구동 후 종료)  
4) 리스크 레지스터 작성 및 Work Order 매핑

---

## 3. 재현/검증 결과(팩트)

### 3.1 빌드 재현
- `npm run build` **Exit 0** 확인(단, 스크립트가 `npx --yes node@22 ...`로 고정되어 있음).

### 3.2 프리뷰(테스트 서버) 핵심 엔드포인트 결과

아래는 `astro preview`(127.0.0.1:4174) 임시 구동 후 확인 결과입니다.

```
/robots.txt              404
/sitemap.xml             404
/videos/hero-bg.webm     200
/videos/hero-bg.mp4      404
HOME has og              False
HOME has canonical       False
HOME has twitter         False
```

또한 프리뷰 응답 헤더 기준:
- `Content-Type: text/html` (charset 미표기)
- PowerShell 클라이언트는 `CharacterSet: ISO-8859-1`로 추정(브라우저는 `<meta charset="UTF-8">`로 대부분 복구 가능)

---

## 4. 리스크 레지스터(핵심)

> 등급 기준: **Impact(1~5) × Likelihood(1~5)**.  
> 표에 없는 항목도 “상세 발견 목록”에 모두 기재했습니다.

| ID | 분류 | 이슈 | 증거(핵심) | 영향 | 가능성 | 등급 | 담당(권고) |
|---:|---|---|---|---:|---:|---|---|
| C-01 | SEO/배포 | `robots.txt`, `sitemap.xml` 미존재로 크롤링/색인 기준 부재 | `public/robots.txt: False`, `public/sitemap.xml: False`, 프리뷰 404 | 5 | 5 | **CRITICAL** | Builder/PM |
| C-02 | 미디어 | 히어로 MP4 누락(`/videos/hero-bg.mp4` 404) → WebM 미지원 환경에서 히어로 깨짐 | `public/videos/hero-bg.mp4: False`, `src/pages/index.astro:15` | 5 | 4 | **CRITICAL** | Media PD/Builder |
| C-03 | 공급망 | Lucide `@latest` 외부 로드(즉시 파손 가능) | `src/layouts/MainLayout.astro:33` | 4 | 5 | **CRITICAL** | Builder |
| H-01 | 거버넌스 | 정본 문서 상호 모순(Phase/페이지수)로 온보딩 실패 위험 | `01_PROJECT_CONTEXT.md:24-25`, `04_CURRENT_STATE.md:21`, `02_ARCHITECTURE.md:18` | 4 | 4 | **HIGH** | PM |
| H-02 | 데이터 정합성 | 주소 교정(D-012) 미반영: ‘케이에듀동’이 코드/SSOT에 잔존 | `src/pages/contact.astro:76`, `src/components/Footer.astro:16`, `docs/contents/common.md:32`, 정답은 `docs/_archive/decisions/...:206` | 4 | 4 | **HIGH** | PM/Builder |
| H-03 | 품질게이트 | `astro check`가 `docs/design/*`까지 포함하여 500+ 에러 발생(체크 불능) | `tsconfig.json` include/exclude 부재 + `npx node@22 ... check` 결과 “542 errors” | 4 | 4 | **HIGH** | Builder |
| H-04 | 근거 붕괴 | WO가 존재하지 않는 경로(`docs/reports/...`)를 근거로 참조 | `WO_TECHNICAL_DEBT_ROADMAP.md:15-16` vs 실제 파일은 `docs/_archive/reports/...` | 3 | 5 | **HIGH** | PM |
| M-01 | 비의도 노출 | `/colors` 페이지가 빌드/프리뷰에 포함되고 “작업 중—미확정” + 폐기 팔레트 포함 | `src/pages/colors.astro:104` + 빌드 시 `/colors/index.html` 생성 | 3 | 4 | **MEDIUM** | Builder/PM |
| M-02 | 외부 CDN | Pretendard를 jsdelivr로 외부 로드(버전 고정은 있으나 로컬 부재) | `src/layouts/MainLayout.astro:30` | 3 | 4 | **MEDIUM** | Builder |
| M-03 | 미사용 의존성 | `aos` 설치되어 있으나 `src/`에서 사용 흔적 없음 | `package.json:14` + `src/` 검색 결과 없음 | 2 | 4 | **MEDIUM** | Builder |

---

## 5. 상세 발견 목록(“모든 문제점” 전수 목록)

### 5.1 문서/거버넌스/정합성

1) **정본 간 모순**: `01_PROJECT_CONTEXT.md`는 Phase 2/13페이지, `04_CURRENT_STATE.md`는 Phase 3 진행, `02_ARCHITECTURE.md`는 IA 17페이지 확정.  
   - 근거: `01_PROJECT_CONTEXT.md:24-25`, `04_CURRENT_STATE.md:21`, `02_ARCHITECTURE.md:18`

2) **Work Order 근거 경로 붕괴**: `WO_TECHNICAL_DEBT_ROADMAP.md`가 `docs/reports/SESSION_21_*`를 근거로 들지만 실제 파일은 `docs/_archive/reports/SESSION_21_*`에 존재.  
   - 근거: `docs/work_orders/WO_TECHNICAL_DEBT_ROADMAP.md:15-16` + `docs/reports/`에는 파일 없음

3) **Git 관리 이슈(리포트 폴더 오염)**: `docs/reports/`에 PNG 스크린샷이 untracked로 존재(현재 git status에 노출).  
   - 근거: `git status -sb` 결과

4) **품질 게이트 설계 결함**: `tsconfig.json` 범위가 제한되지 않아 `docs/design/*`가 타입체크 대상이 됨 → 체크가 항상 실패/과부하.  
   - 근거: `tsconfig.json`에 include/exclude 없음

### 5.2 콘텐츠 SSOT/코드 불일치(구조적)

5) **SSOT(`docs/contents/*`)가 실제 출력에 반영되지 않음**: Content Collections 미도입 상태에서 `.astro` 하드코딩이 유지됨(이미 결정/WO로 인지된 구조적 병목).  
   - 근거: `docs/work_orders/WO_BUILDER_CONTENT_COLLECTIONS_IMPL.md`

6) **History 핵심 지표 불일치**: SSOT는 `219+ Clients`, 사이트는 `150+ Clients`.  
   - 근거: `docs/contents/history.md:19` vs `src/pages/history.astro:98`

7) **Contact SSOT와 구현 불일치**: SSOT는 실제 폼 필드/개인정보 동의까지 정의하지만, 사이트는 폼이 아닌 플레이스홀더(빈 div) 구조.  
   - 근거: `docs/contents/contact.md:32-37` vs `src/pages/contact.astro`(실제 `<form>` 미존재)

8) **주소 교정(D-012) 미반영**: 코드/SSOT/푸터가 모두 “케이에듀동”을 유지(결정문에는 “케이앤몰동”).  
   - 근거: `src/pages/contact.astro:76`, `src/components/Footer.astro:16`, `docs/contents/common.md:32` vs `docs/_archive/decisions/03_DECISIONS_PHASE2.md:206`

9) **Contact 이메일 불일치**: SSOT는 이메일 “추후 추가”인데 사이트는 `contact@rowingpro.co.kr`을 노출(실재 여부도 미확인).  
   - 근거: `docs/contents/contact.md:26` vs `src/pages/contact.astro:71`

### 5.3 SEO/메타/배포 준비

10) **OG/canonical/twitter 메타 부재**: 홈 기준 OG/canonical/twitter 메타가 없음.  
11) **`public/og/` 비어 있음**: OG 이미지 자산 부재.  
12) **robots/sitemap 부재**: 파일 자체가 없음.

### 5.4 보안/공급망/신뢰성

13) **Lucide `@latest` 외부 CDN 의존**: `@latest`는 breaking change 즉시 적용 → 사이트 파손 리스크 최고.  
   - 근거: `src/layouts/MainLayout.astro:33`

14) **외부 폰트/스타일 CDN 다중 의존**: Google Fonts + jsdelivr Pretendard + unpkg(icons). 네트워크/차단/속도/프라이버시 리스크.  
   - 근거: `src/layouts/MainLayout.astro:27-33`

15) **빌드 재현성 리스크**: `npm run build`가 `npx --yes node@22 ...`에 의존(네트워크/캐시/CI 불안정).  
   - 근거: `package.json:8`

### 5.5 성능/모바일/접근성

16) **히어로 비디오 대체 포맷 누락(MP4)**: 일부 환경에서 비디오 미표시 가능.  
17) **자동재생 비디오 + 모션 제어 부재**: `prefers-reduced-motion` 고려 없음(접근성 리스크).  
18) **외부 폰트/스크립트로 초기 로드 비용 증가**: LCP/TTFB 악화 가능(정량 측정은 Phase 4에서 권장).

### 5.6 유지보수/코드 품질

19) **미사용 의존성**: `aos`가 설치되었으나 `src/`에서 사용 흔적이 없습니다.  
20) **레거시 레이아웃 잔존**: `src/layouts/BaseLayout.astro`가 존재하나 사용처가 확인되지 않습니다(WO에서 삭제 대상).  
21) **`astro check` 실제 코드 에러 포함**: `src/components/Header.astro`의 스크립트 파라미터가 implicit any로 보고됩니다(체크 기준에서는 결함).

---

## 6. 조치 권고(Work Order 매핑)

### 6.1 즉시(Phase 3) — 사이트 파손/신뢰 리스크 제거

- **WO_BUILDER_CONTENT_COLLECTIONS_IMPL** 실행을 최우선 유지(콘텐츠/공통데이터 SSOT 통합의 전제).
- **TASK 3(기술부채 4건)**은 “즉시 파손 리스크”를 줄이는 항목이므로 우선순위가 타당합니다.

### 6.2 신규/보강 WO 제안(짧게)

1) **WO_SEO_BASELINE**: `robots.txt`, `sitemap.xml`, OG/canonical/twitter 메타 최소세트 도입  
2) **WO_HERO_VIDEO_COMPAT**: `hero-bg.mp4` 제작/추가 + 자동재생/모션 정책 정리  
3) **WO_TOOLING_TSCOPE**: `tsconfig.json` include/exclude로 `src/**` 중심으로 제한, `docs/design/**` 제외, `astro check`를 “의미 있게 통과”시키기  
4) **WO_REMOVE_INTERNAL_PAGES**: `/colors` 같은 내부 점검 페이지의 배포 제외 정책(삭제 또는 빌드 제외)

---

## 7. 디렉터 확인 필요(미확인/모호/모르는 것)

- `contact@rowingpro.co.kr` **실재/운영 여부**(실제 수신 테스트 필요)
- 개인정보 처리방침의 **법무 검토 여부**(수집 항목/보관기간/동의 UI와 일치하는지)
- “219+ Clients / 418 Events / 10,000+ Participants / Zero Accident” 등 **수치의 근거 문서**(외부 공개 가능 수준인지)
- `/colors` 페이지를 외부에 노출해도 되는지(보통은 **노출 금지** 권고)

---

## 8. 미래 발생 리스크 예측(런칭 시나리오 TOP 10)

> 아래는 “지금 상태로 공개/런칭”을 가정했을 때, **현실적으로 먼저 터질 확률이 높은 사고 시나리오**를 우선순위로 정리한 것입니다.
> (근거가 되는 현재 상태는 본 보고서 3~5장 및 표의 증거 항목을 따릅니다.)

1) **검색 유입 저조/색인 지연**: `robots.txt`/`sitemap.xml` 부재 + canonical 정책 부재로 크롤러/정규화가 흔들림 (`public/robots.txt`, `public/sitemap.xml`, `src/layouts/MainLayout.astro`)
2) **공유 카드 품질 붕괴(카톡/슬랙/링크드인)**: OG 메타/OG 이미지 부재로 공유 미리보기 신뢰도 하락 (`src/layouts/MainLayout.astro`, `public/og/`)
3) **특정 브라우저에서 히어로 검은 화면/정지 화면**: MP4 소스 참조 대비 실파일 부재로 WebM 미지원 환경에서 실패 가능 (`src/pages/index.astro:15`, `public/videos/hero-bg.mp4`)
4) **“어느 날 갑자기” 아이콘/상호작용 파손**: Lucide `@latest` upstream 변경/장애가 즉시 반영됨 (`src/layouts/MainLayout.astro:33`)
5) **기업/학교망(차단 환경)에서 폰트·스크립트 로드 실패 → 브랜딩/레이아웃 흔들림**: 외부 CDN 다중 의존(`fonts.googleapis.com`, `cdn.jsdelivr.net`, `unpkg.com`) (`src/layouts/MainLayout.astro:27-33`)
6) **법인정보 오기재로 신뢰/클레임 발생**: 주소 교정(D-012)이 코드/SSOT에 미반영된 상태 (`src/pages/contact.astro:76`, `src/components/Footer.astro:16`)
7) **문의 전환 손실**: Contact 페이지가 실제 `<form>`이 아닌 플레이스홀더(사용자 기대 불일치) (`src/pages/contact.astro`)
8) **콘텐츠 수정 혼선(“수정했는데 반영 안 됨”)**: `docs/contents/*`와 `src/pages/*.astro`의 구조적 분리로 배포 직전 불일치가 반복될 확률이 높음 (`docs/work_orders/WO_BUILDER_CONTENT_COLLECTIONS_IMPL.md`)
9) **품질 게이트 무력화로 결함 누적**: `astro check`가 의미 있게 통과하지 못하면(대량 오류), 결국 “체크를 믿지 않는” 운영으로 붕괴될 가능성이 큼 (`tsconfig.json`, `astro check` 결과)
10) **내부 점검 페이지 외부 노출/색인**: `/colors`가 200으로 노출되며 “작업 중 — 미확정” 및 폐기 팔레트 정보를 포함 (`src/pages/colors.astro:104`)

---

## 9. 위험도 저감 최소 조치 체크리스트(우선순위)

### A) CRITICAL → HIGH (외부 공개 전 필수)

- `public/robots.txt`, `public/sitemap.xml` 추가(정적 파일로 시작해도 됨)
- `src/layouts/MainLayout.astro`에 **canonical + OG(최소)** 적용 + 기본 OG 이미지 확보(`public/og/`)
- `hero-bg.mp4` 실파일 추가 또는 MP4 참조/대체 정책 확정 (`src/pages/index.astro`)
- Lucide `@latest` 제거(버전 고정 또는 로컬 번들) (`src/layouts/MainLayout.astro:33`)
- `/colors` 비노출(최소: prod 제외/리다이렉트/robots noindex 중 1) (`src/pages/colors.astro`)
- 주소 오기(케이에듀동→케이앤몰동) 전면 정합(코드+SSOT) (`src/pages/contact.astro`, `src/components/Footer.astro`, `docs/contents/*`)

### B) HIGH → MEDIUM (개발/운영 안정화)

- Content Collections 도입(기존 WO 실행)로 SSOT↔출력 불일치 구조 제거 (`docs/work_orders/WO_BUILDER_CONTENT_COLLECTIONS_IMPL.md`)
- `tsconfig.json` include/exclude를 명시하여 `astro check` 범위를 `src/**` 중심으로 제한(체크가 “의미 있게 통과”하도록 복구)
- `WO_TECHNICAL_DEBT_ROADMAP.md`의 근거 문서 경로를 실제 위치(`docs/_archive/reports/SESSION_21_*`)로 정합
- Node 버전 운영 통일(개발/빌드/프리뷰의 재현성 확보)

### C) MEDIUM → LOW (배포 품질/장기 리스크 저감)

- 성능: 히어로 비디오 용량/모션 정책(`prefers-reduced-motion`) 및 이미지 파이프라인(TD-03) 확립
- 보안/프라이버시: 3rd-party 의존 최소화, (Contact 연동 시) 스팸/레이트리밋/로그 정책 확정
- SEO 완성: 페이지별 OG override, 구조화 데이터, 404/리다이렉트 정책 점검

---

## 10. 부록 — 이번 세션에서 실행한 주요 명령(요약)

- 정적 스캔: `rg`로 CDN/SEO/하드코딩/placeholder 탐지  
- 빌드: `npm run build` (Exit 0)  
- 프리뷰: `npx --yes node@22 ... astro preview --port 4174` (테스트 후 종료)  
- 타입체크: `npx --yes node@22 node_modules/astro/astro.js check` (에러 다수 확인)
