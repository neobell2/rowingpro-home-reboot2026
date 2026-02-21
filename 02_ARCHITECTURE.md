# 02_ARCHITECTURE.md — 구조 확정본

> **이 문서는 프로젝트의 구조(IA, 디자인 시스템, 기술스택)를 정의합니다.**
> 구조 변경이 발생하면 즉시 갱신합니다. 이 문서가 없으면 AI는 매번 새 구조를 제안하려 합니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.4** | 2026-02-21 | SESSION_46D PM(Gemini): IA 14페이지 재설계 반영(D-040). Programs 삭제, 비즈니스/라이프 분리, GNB 6메뉴 갱신, Footer 주소 오타 교정(케이앤몰동), 리소스 경로 갱신. |
| **v1.3** | 2026-02-14 | SESSION 16 미결 사안 반영. IA 17페이지 확장(4개 카테고리 추가), Track Record→History 변경, Programs 역할 정의, 히어로 타이틀 White 확정, Footer 법인정보 추가, 보류사항 정리. |
| **v1.2** | 2026-02-13 | SESSION 15 디자인 명세 반영. 컬러 시스템 확정(Heritage 승격, Cobalt 폐기), 타이포그래피/글라스모피즘/버튼 시스템 명세 추가. STATUS → LOCKED. |

> 📋 **전체 버전 히스토리:** [06_VERSION_HISTORY.md](06_VERSION_HISTORY.md)

---

## 1. 정보 구조 (IA) — 총 14페이지 (D-040, 2026-02-21)

```
메인 5페이지:
├── Home (/)                     ← Video Loop 배경 + "ROWING = TEAMWORK" (White), 7섹션
├── About (/about)               ← 국가대표, 13년 무사고, 협회 주관사, CEO+창업주 프로필
├── History (/history)           ← 13년 업력 전수 기록 ("걸어온 길")
├── Contact (/contact)           ← 문의 폼 (실패 시 대표번호 1566-1931 노출)
└── Privacy (/privacy)           ← 시스템

비즈니스 — B2B (4페이지):
├── 비즈니스 허브 (/business)          ← 허브 (HRD·기업행사·임직원건강복지 카드)
├── HRD 교육 (/business/hrd)          ← Training+Teambuilding+Leadership 통합
├── 기업행사 (/business/event)
└── 임직원건강복지 (/business/wellness)

라이프 — B2C (5페이지):
├── 라이프 허브 (/life)               ← 허브 (학교·청소년·스포츠이벤트·클럽·가족 카드)
├── 학교·청소년 (/life/school-youth)
├── 스포츠이벤트 (/life/sports-event)  ← 부스형 가격 게시
├── 클럽·일반 (/life/club)
└── 가족 (/life/family)
```

> **GNB 6메뉴:** Home | About | 비즈니스 | 라이프 | History | Contact
> **리디렉트:** `/programs` → `/`, `/service` → `/life`, `/service/corporate/*` → `/business/*`
> **Index 7섹션:** 히어로 / 통계 / 클라이언트 롤링배너(30개) / 제공방식 / 서비스미리보기 / 왜로잉프로 / CTA
> **404:** Astro 기본 404 처리, 별도 IA 카운트에서 제외.

---

## 2. 디자인 시스템

**[STATUS: LOCKED]**

> **확정 명세**: SESSION_15_DESIGN_SPEC_FINALIZATION.md
> **기준점**: Draft 03 (Wave 3D Ver.) + CI 매뉴얼 Heritage Blue
> **히어로 타이틀**: White(#FFFFFF) 확정. 배경은 Video Loop(Hero_bg.webm/mp4). 디자인 단계 재검토 가능.
> **포인트 핑크(#FF99F5)**: 미사용. 디자인 단계 재검토 가능.

### 시안 참조 파일
- **시안 코드**: `docs/design/Rowingpro-Draft03-Wave-3D/index.html`
- **시안 캡처**: `docs/design/스크린캡처/로잉프로 시안 스크린캡처/screencapture-rowingpro-draft03-wave-3d-netlify-app-2026-02-06-02_03_46.png`

> ⚠️ **모든 UI 작업자는 코딩 시작 전 위 시안을 직접 열어 시각적 감도를 체득할 것.**

### 2.1 컬러 시스템

#### 기본 팔레트 (Base Palette)

| 토큰 | 값 | 출처 | 역할 |
|:--|:--|:--|:--|
| **Heritage** | `#2C63A7` | CI 매뉴얼 공식 브랜드 컬러 | 로고, 주 제목, 브랜드 핵심 요소 |
| **Neon** | `#00F0FF` | Draft 03 | 인터랙션, 호버, 밝기 보완 |
| **Deep** | `#05080F` | Draft 03 | 메인 배경 (프리미엄 깊이감) |
| **White** | `#FFFFFF` | 표준 | 텍스트, 글라스 요소 |

**폐기:** Cobalt `#2D5BFF` (의도 없는 자동 생성, Heritage와 역할 중복)

#### 컬러 토큰 (Opacity Variants)

**Heritage 변형:**
- `base` #2C63A7 — 로고, 주 제목, 핵심 CTA
- `/50` rgba(44,99,167,0.5) — 버튼 테두리
- `/30` rgba(44,99,167,0.3) — 미세 테두리
- `/15` rgba(44,99,167,0.15) — 호버 배경
- `/10` rgba(44,99,167,0.1) — 미세 배경

**Neon 변형:**
- `base` #00F0FF — 인터랙션, 호버
- `/70` rgba(0,240,255,0.7) — 서브 강조
- `/40` rgba(0,240,255,0.4) — 테두리
- `/20` rgba(0,240,255,0.2) — 미세 강조
- `/10` rgba(0,240,255,0.1) — 미세 배경

**White 변형:**
- `base` #FFFFFF — 본문 텍스트
- `/90`, `/70` — 텍스트 위계
- `/30`, `/10`, `/5`, `/3` — 글라스 요소

**Deep 변형:**
- `base` #05080F — 메인 배경
- `/95`, `/80` — 네비게이션 투명도

#### 컬러 사용 원칙

- **Heritage**: 페이지당 3~5회 (제목, 핵심 숫자, 로고)
- **Neon**: 페이지당 10~15회 (호버, 아이콘, 링크, 보조 강조)
- **Glow 효과**: 극도로 절제 (히어로 타이틀만 선택적 사용)

### 2.2 타이포그래피

#### 폰트 시스템

| 용도 | 폰트 | Weight | 비고 |
|:--|:--|:--|:--|
| Display (영문) | Readex Pro | 600~700 | 퓨처리스틱, 스포츠 감성 |
| Body (국문) | Pretendard | 400~500 | 가독성 우선 |
| Fallback (영문 본문) | Inter | 400 | 범용 Sans-serif |

**CDN:**
```html
<!-- Readex Pro -->
<link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;600;700&display=swap" rel="stylesheet">

<!-- Pretendard -->
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
```

#### 크기 스케일 (Size Scale)

| 요소 | Mobile | Desktop | Tailwind |
|:--|:--|:--|:--|
| Hero H1 | 48px | 72px | `text-5xl md:text-7xl` |
| H2 | 30px | 36px | `text-3xl md:text-4xl` |
| H3 | 20px | 24px | `text-xl md:text-2xl` |
| Body | 16px | 16px | `text-base` |
| Small | 14px | 14px | `text-sm` |

### 2.3 UI 원칙

#### Glassmorphism (글라스모피즘)

**기본 스펙:**
```css
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem; /* 24px */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
```

**Tailwind:** `backdrop-blur-xl bg-white/3 border border-white/10 rounded-3xl`

**호버 효과:**
- Heritage 강조: `border-heritage/50` + `shadow-heritage/20`
- Neon 강조: `border-neon/50` + `shadow-neon/20`

#### 버튼 시스템

**Primary Button (Heritage):**
```css
/* 기본 */
background: transparent;
border: 1px solid rgba(44, 99, 167, 0.5);
padding: 0.75rem 2rem; /* py-3 px-8 */
border-radius: 9999px; /* rounded-full */
backdrop-filter: blur(10px);

/* 호버 */
background: rgba(44, 99, 167, 0.15);
border-color: rgba(44, 99, 167, 0.8);
```

**Secondary Button (White):**
```css
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.3);

/* 호버 */
background: rgba(255, 255, 255, 0.15);
border-color: rgba(255, 255, 255, 0.5);
```

**원칙:**
- 글로우 제거 (시각 위계 복원)
- 크기 축소 (메시지 대비 톤 다운)
- 투명 우선 (배경 투명 + 테두리 강조)

#### 레이어 구조

| 원칙 | 설명 |
|:--|:--|
| **Cinematic Wrapper** | 배경에 영상/3D 오브젝트 배치, 그 위에 콘텐츠를 올리는 레이어링 |
| **Visual Hierarchy** | 메시지 우선, CTA는 보조 (히어로 메시지 > 버튼) |

---

## 3. 기술 스택

| 항목 | 기술 | 비고 |
|:--|:--|:--|
| 프레임워크 | Astro | 정적 사이트 생성 |
| 스타일링 | Tailwind CSS | 유틸리티 퍼스트 |
| 배포 | Cloudflare Pages | GitHub 자동 배포 |
| 데이터베이스 | Supabase | Contact 폼 등 |
| 이메일 | Resend | Email API |
| 버전 관리 | Git + GitHub | `neobell2/rowingpro-home-reboot2026` |

---

## 4. 공통 레이아웃

- `src/layouts/MainLayout.astro` — 모든 페이지의 공통 레이아웃
- 헤더: 상단 고정 네비게이션 (All Pages), GNB 6메뉴 (Home | About | 비즈니스 | 라이프 | History | Contact)
- 푸터: 공통 푸터 (All Pages)
- 반응형: 모바일 → 햄버거 메뉴

### Footer 법적 고지

| 항목 | 값 |
|:--|:--|
| 상호 | 주식회사 로잉프로 |
| 대표 | 김정겸 |
| 주소 | 경기도 하남시 덕풍동로 111-21, 케이앤몰동 10층 1021호 |
| 대표번호 | 1566-1931 |
| 사업자등록번호 | 211-88-99912 |
| 개인정보 처리방침 | `/privacy` |

---

## 5. 주요 리소스 위치

| 리소스 | 경로 |
|:--|:--|
| 히어로 배경 영상 | `public/videos/hero-bg.webm`, `hero-bg.mp4` |
| 디자인 시안 (Draft 03) | `docs/design/Rowingpro-Draft03-Wave-3D/` |
| 콘텐츠 SSOT (빌드 기준) | `src/content/pages/*.md` |
| 회사 원본 자료 | `docs/contents/_source/` |
| 로고 (빌드용) | `public/logo.svg` |
| 로고 (원본 보관) | `public/images/logo.jpg`, `logo.png` |
| OG 이미지 | `public/og/og-default.png` (실사+로고, 1200x630) |

---
