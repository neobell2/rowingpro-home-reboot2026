# WO_SEO_BASELINE — SEO 최소 기반 구축

**발행:** PM (Claude Sonnet 4.5)
**수신:** Builder (Claude Sonnet 4.5)
**일시:** 2026-02-18
**우선순위:** 🔴 긴급 — 배포 전 필수 (C-01, SESSION_34 감사)
**상태:** [STATUS: ISSUED]

---

## 1. 배경

SESSION_34 레드팀 감사(GPT-5.2)에서 `robots.txt`, `sitemap.xml`, OG/canonical 메타가 전혀 없음을 CRITICAL(C-01)로 확인.
현재 상태로 배포 시 검색 크롤러 색인 기준 부재 및 SNS 공유 미리보기 불량이 즉시 발생한다.

본 WO는 **Phase 3** 내 가능한 최소세트를 구현하는 것을 목표로 한다. SEO 완성(페이지별 OG override, 구조화 데이터)은 Phase 4에서 처리한다.

---

## 2. 작업 범위

### TASK 1 — 정적 파일 추가

**`public/robots.txt` 신설**
```
User-agent: *
Allow: /

Sitemap: https://www.rowingpro.co.kr/sitemap.xml
```
- 배포 도메인 확정 전까지는 플레이스홀더 URL 사용 허용
- `/colors` 페이지는 noindex 처리 (WO_BUILDER_CONTENT_COLLECTIONS_IMPL TASK 3와 연동)

**`public/sitemap.xml` 신설**
- 17페이지 URL 정적 수동 작성 (Astro sitemap 통합 플러그인은 Phase 4)
- 형식: W3C XML sitemap 표준 준수
- 우선순위(priority): 홈 1.0, 주요 페이지 0.8, 서브 0.6 기본값 적용

---

### TASK 2 — MainLayout.astro 메타 기반 추가

`src/layouts/MainLayout.astro`에 아래 메타 태그 최소세트 추가:

**canonical**
```html
<link rel="canonical" href={Astro.url.href} />
```

**OG 기본 (페이지별 override 지원 구조)**
```html
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={Astro.url.href} />
<meta property="og:type" content="website" />
<meta property="og:image" content="/og/og-default.jpg" />
```

**Twitter Card 기본**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content="/og/og-default.jpg" />
```

**제약:**
- `title`, `description` props는 이미 MainLayout에 존재하는 것을 활용
- OG 이미지(`/og/og-default.jpg`)는 `public/og/` 폴더에 기본 이미지 1장만 배치 (실제 이미지 제작은 Media PD, 또는 브랜드 로고 PNG 임시 사용 허용)
- CSS/레이아웃 변경 금지

---

## 3. 제약 조건

- 새 npm 패키지 추가 금지 (Astro 내장 기능 + 정적 파일만)
- `npm run build` Exit 0 필수
- 시각적 출력 변화 없음 (메타 태그는 `<head>` 내부)

---

## 4. 완료 기준

- [ ] `public/robots.txt` 생성 및 브라우저 접근 확인
- [ ] `public/sitemap.xml` 생성 (17개 URL 포함)
- [ ] `MainLayout.astro` — canonical, OG, Twitter Card 추가
- [ ] `public/og/og-default.jpg` 배치 (임시 이미지 허용)
- [ ] `npm run build` Exit 0 확인

---

## 5. 참고 문서

- `SESSION_34_REDAUDIT_GPT52.md` — C-01, 섹션 5.3, 섹션 9-A
- `02_ARCHITECTURE.md` — 17페이지 IA 목록 (sitemap URL 기준)
- `WO_BUILDER_CONTENT_COLLECTIONS_IMPL.md` — TASK 3 M-01 (/colors noindex와 연동)

---

## 6. 실행 순서

이 WO는 `WO_BUILDER_CONTENT_COLLECTIONS_IMPL` **이후** 또는 **병행** 실행 가능.
단, `sitemap.xml`의 `/colors` 항목 포함 여부는 TASK 3 M-01 처리 결과에 따라 결정.

---

## 7. 완료 보고

완료 시 보고서 작성: `docs/reports/SESSION_XX_BUILDER_SONNET.md`
(WO_BUILDER_CONTENT_COLLECTIONS_IMPL 보고서와 통합 가능)

---

**PM 서명:** Claude Sonnet 4.5 (SESSION_35)
**디렉터 승인 대기**
