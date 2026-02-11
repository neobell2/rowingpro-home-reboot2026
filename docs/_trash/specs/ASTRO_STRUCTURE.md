# Astro 프로젝트 구조

**버전:** v1.0
**일자:** 2026-02-03
**목적:** 개발 착수 전 폴더/파일 구조 확정

---

## 전체 폴더 구조

```
/
├── src/
│   ├── layouts/          # 레이아웃 템플릿
│   ├── components/       # 재사용 컴포넌트
│   ├── pages/            # 페이지 (라우팅)
│   └── styles/           # 스타일
│
├── public/               # 정적 파일
│   ├── images/           # 이미지
│   ├── og/               # OG 이미지
│   ├── sitemap.xml       # Sitemap
│   └── robots.txt        # Robots
│
├── docs/                 # (기존) 콘텐츠 원고
├── project/              # (기존) 프로젝트 관리
├── specs/                # (기존) 개발 스펙
│
├── astro.config.mjs      # Astro 설정
├── tailwind.config.cjs   # Tailwind 설정
├── tsconfig.json         # TypeScript 설정
└── package.json          # 의존성
```

---

## src/ 상세 구조

### 1. layouts/ (레이아웃)

```
src/layouts/
├── BaseLayout.astro       # 기본 레이아웃 (공통)
└── ServiceLayout.astro    # Service 하위 전용
```

#### BaseLayout.astro
```astro
<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- Meta, OG, Fonts -->
</head>
<body>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</body>
</html>
```

#### ServiceLayout.astro
```astro
---
import BaseLayout from './BaseLayout.astro';
---
<BaseLayout>
  <!-- Service 공통 구조 -->
  <Hero />
  <ImageSlot3 />
  <!-- 콘텐츠 슬롯 -->
  <slot />
  <!-- FAQ, CTA -->
</BaseLayout>
```

---

### 2. components/ (컴포넌트)

```
src/components/
├── Header.astro           # 헤더 (로고 + GNB + 드롭다운)
├── Footer.astro           # 푸터 (법적 고지 + Privacy)
├── Hero.astro             # 히어로 섹션 (범용)
├── ImageSlot3.astro       # 3슬롯 이미지 시스템
├── ContactForm.astro      # Contact 폼
├── ServiceCard.astro      # Service 허브 카드
└── CTA.astro              # CTA 버튼
```

#### 주요 컴포넌트 스펙

**Header.astro**
- 로고 (좌측)
- GNB 메뉴 (Home, About, Programs, Service, Track Record, Contact)
- Service 드롭다운 (5개 카테고리)
- 반응형: 모바일 햄버거 메뉴

**Footer.astro**
- 법적 고지 (상호, 대표자, 주소, 전화, 이메일, 사업자등록번호)
- 개인정보 처리방침 링크 (`/privacy`)
- 전 페이지 고정 노출

**ImageSlot3.astro**
- Props: `hero`, `start`, `summary` (이미지 경로)
- 모바일: 자동 슬라이드 (3.5s, 터치/이탈 정지)
- 데스크톱: 정적 3분할 또는 수동 전환
- 비율: 16:9 고정

**ContactForm.astro**
- 필수: 성함, 회사, 이메일, 연락처
- 선택: 부서, 직함, 홈페이지
- 숨김: source_page, referrer, timestamp, user_agent
- 백엔드: CEO 결정 후 선택 (Formspree/Netlify Forms/CF Workers)

---

### 3. pages/ (페이지 라우팅)

```
src/pages/
├── index.astro                      # / (Home)
├── about.astro                      # /about
├── programs.astro                   # /programs
├── service/
│   ├── index.astro                  # /service (허브)
│   ├── corporate/
│   │   ├── index.astro              # /service/corporate (기업·조직)
│   │   ├── training.astro           # /service/corporate/training
│   │   ├── teambuilding.astro       # /service/corporate/teambuilding
│   │   ├── leadership.astro         # /service/corporate/leadership
│   │   ├── event.astro              # /service/corporate/event
│   │   └── wellness.astro           # /service/corporate/wellness
│   ├── school-youth.astro           # /service/school-youth (미정)
│   ├── event.astro                  # /service/event (미정)
│   ├── club-general.astro           # /service/club-general (미정)
│   └── family.astro                 # /service/family (미정)
├── track-record.astro               # /track-record
├── contact.astro                    # /contact
├── privacy.astro                    # /privacy
└── 404.astro                        # /404
```

#### URL 매핑 (13개 페이지)

| 파일 경로 | URL | 페이지명 |
|-----------|-----|----------|
| `index.astro` | `/` | Home |
| `about.astro` | `/about` | About |
| `programs.astro` | `/programs` | Programs |
| `service/index.astro` | `/service` | Service (허브) |
| `service/corporate/index.astro` | `/service/corporate` | 기업·조직 |
| `service/corporate/training.astro` | `/service/corporate/training` | 사원교육·조직개발 |
| `service/corporate/teambuilding.astro` | `/service/corporate/teambuilding` | 팀빌딩·협업 |
| `service/corporate/leadership.astro` | `/service/corporate/leadership` | 리더십 |
| `service/corporate/event.astro` | `/service/corporate/event` | 행사·체육대회 |
| `service/corporate/wellness.astro` | `/service/corporate/wellness` | 건강·웰니스 |
| `service/school-youth.astro` | `/service/school-youth` | 학교·청소년 (미정) |
| `service/event.astro` | `/service/event` | 스포츠 이벤트·행사 (미정) |
| `service/club-general.astro` | `/service/club-general` | 클럽·일반 (미정) |
| `service/family.astro` | `/service/family` | 가족 체험 (미정) |
| `track-record.astro` | `/track-record` | Track Record |
| `contact.astro` | `/contact` | Contact |
| `privacy.astro` | `/privacy` | Privacy |
| `404.astro` | `/404` | 404 |

---

### 4. styles/ (스타일)

```
src/styles/
└── global.css             # 전역 스타일 (Tailwind + Custom)
```

**global.css 내용:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Design Tokens 적용 */
:root {
  --color-primary: #1E3A8A;
  --color-secondary: #1F2937;
  --font-heading: 'Pretendard Variable', sans-serif;
  --font-body: 'Pretendard Variable', sans-serif;
}

/* 커스텀 유틸리티 */
@layer components {
  .btn-primary {
    @apply bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900;
  }
}
```

---

## public/ 구조

```
public/
├── images/
│   ├── logo.svg                    # 로고
│   ├── home-hero.jpg               # Home 히어로
│   ├── about-hero.jpg              # About 히어로
│   ├── programs-hero.jpg           # Programs 히어로
│   ├── service-hero.jpg            # Service 히어로
│   ├── track-record-hero.jpg       # Track Record 히어로
│   └── service/
│       ├── corporate/
│       │   ├── hero.jpg            # 기업·조직 히어로
│       │   ├── start.jpg           # 동기화 장면
│       │   └── summary.jpg         # 완결 장면
│       └── (기타 카테고리)
│
├── og/
│   ├── default.jpg                 # 기본 OG 이미지
│   ├── home.jpg                    # Home OG
│   └── (기타 페이지별)
│
├── sitemap.xml                     # SEO
└── robots.txt                      # SEO
```

---

## 설정 파일

### astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://rowingpro.co.kr',
  base: '/',
  trailingSlash: 'never', // /about (O), /about/ (X)
});
```

### tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',     // Deep Blue
        secondary: '#1F2937',   // Charcoal Black
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

---

## 개발 우선순위

### Phase 1: 골격 (1-2일)
1. Astro 프로젝트 생성 (`npm create astro@latest`)
2. Tailwind 설치 (`npx astro add tailwind`)
3. 폴더 구조 생성
4. BaseLayout 작성
5. Header/Footer 컴포넌트

### Phase 2: 컴포넌트 (1-2일)
1. ImageSlot3 컴포넌트
2. Hero 컴포넌트
3. ContactForm 컴포넌트
4. ServiceLayout 작성

### Phase 3: 페이지 (2-3일)
1. Home, About, Programs (메인 3개)
2. Service 허브
3. Service/Corporate 하위 6개
4. Track Record, Contact
5. Privacy, 404

### Phase 4: 콘텐츠 (1일)
1. docs/contents/ 원고 주입
2. 이미지 배치
3. SEO 메타 설정

### Phase 5: 배포 (0.5일)
1. Cloudflare Pages 연결
2. 도메인 설정
3. 최종 테스트

---

## Service 템플릿 구조

**Service 하위 페이지 공통 구조 (옵션 A):**

```astro
---
import ServiceLayout from '../../layouts/ServiceLayout.astro';
import ImageSlot3 from '../../components/ImageSlot3.astro';
---

<ServiceLayout title="사원교육·조직개발">
  <!-- 1. 히어로 (자동) -->

  <!-- 2. 개회 장면 (3슬롯) -->
  <ImageSlot3
    hero="/images/service/corporate/training-hero.jpg"
    start="/images/service/corporate/training-start.jpg"
    summary="/images/service/corporate/training-summary.jpg"
  />

  <!-- 3. 요약 개요 -->
  <section class="py-16">
    <p>조직의 성과는 구성원 간 협력의 질에 달려 있습니다...</p>
  </section>

  <!-- 4-7. 프로그램 개요, 구조, 강도, 현장 장면 -->

  <!-- 8. FAQ -->
  <section class="py-16">
    <h2>자주 묻는 질문</h2>
    <!-- FAQ 항목 -->
  </section>

  <!-- 9. PDF 버튼 (보류) -->

  <!-- 10. CTA (자동) -->
</ServiceLayout>
```

---

## Contact Form source_page 코드

**자동 전송 로직:**

```astro
---
const currentPath = Astro.url.pathname;
let sourcePageCode = 'unknown';

const pathMap = {
  '/': 'home',
  '/about': 'about',
  '/programs': 'programs',
  '/service': 'service',
  '/service/corporate': 'service--corporate',
  '/service/corporate/training': 'service--corporate--training',
  '/service/corporate/teambuilding': 'service--corporate--teambuilding',
  '/service/corporate/leadership': 'service--corporate--leadership',
  '/service/corporate/event': 'service--corporate--event',
  '/service/corporate/wellness': 'service--corporate--wellness',
  '/service/school-youth': 'service--school-youth',
  '/service/event': 'service--event',
  '/service/club-general': 'service--club-general',
  '/service/family': 'service--family',
  '/track-record': 'track-record',
  '/contact': 'contact',
};

sourcePageCode = pathMap[currentPath] || 'unknown';
---

<form>
  <input type="hidden" name="source_page" value={sourcePageCode} />
  <!-- 기타 필드 -->
</form>
```

---

## 다음 단계

1. CEO Design Tokens 결정
2. Astro 프로젝트 생성
3. 이 문서 기반 폴더/파일 생성
4. Contact 백엔드 선택 및 구현
5. 프로토타입 개발 시작

---

**참조:** [DEV_SPEC.md](DEV_SPEC.md), [DESIGN_TOKENS.md](DESIGN_TOKENS.md)
