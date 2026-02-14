# [작업 지시서] SESSION 18: 콘텐츠 데이터 바인딩 및 페이지 상세 구현

**작성일:** 2026-02-14
**작성자:** Architect (Roo)
**상태:** 승인 대기 (Draft)
**목표:** SESSION 17에서 구축된 스켈레톤 구조에 `docs/contents/`의 실제 기획 데이터를 통합하여 완성된 페이지를 구현한다.

---

## 1. 작업 개요 (Overview)

본 세션은 "뼈대(Skeleton)"에 "살(Content)"을 붙이는 단계입니다. 디자인 시스템(Heritage Blue, Neon, Deep Navy)을 유지하면서, 기획 문서에 정의된 텍스트와 구조를 Astro 컴포넌트에 하드코딩 또는 데이터 바인딩 방식으로 적용합니다.

**핵심 원칙:**
1.  **Content First:** 기획 문서(`docs/contents/`)의 내용을 빠짐없이 반영한다.
2.  **Design Consistency:** `global.css`와 `tailwind.config.cjs`에 정의된 스타일 가이드를 준수한다.
3.  **Mobile Responsive:** 모든 콘텐츠는 모바일 뷰포트에서 가독성이 확보되어야 한다.

---

## 2. 입력 데이터 (Input Data)

작업자는 아래 매핑 테이블을 참조하여 각 페이지에 맞는 콘텐츠를 로드해야 합니다.

| 페이지 (Route) | 콘텐츠 소스 (`docs/contents/`) | 비고 |
|:---|:---|:---|
| `/` (Home) | `home.md` | 히어로 섹션 카피, 주요 프로그램 요약 |
| `/about` | `about.md` | 비전, 미션, 대표 인사말 |
| `/history` | `history_master.md` (또는 `history_all_merged.txt`) | 연혁 데이터 (타임라인 컴포넌트화 필요) |
| `/programs` | `programs.md` | 프로그램 전체 개요 |
| `/service/*` | `services.md` | 각 서비스별 상세 설명 매핑 |
| `/contact` | `contact.md` | 연락처 정보, 오시는 길 |

---

## 3. 상세 작업 내용 (Tasks)

### TASK 1: 메인 페이지 (`src/pages/index.astro`) 콘텐츠 통합
- **Hero Section:** `home.md`의 메인 카피("Rowing for Life" 등) 적용. 비디오 배경 유지.
- **Features:** 로잉프로의 핵심 가치 3가지(전문성, 커뮤니티 등)를 아이콘/카드 형태로 구현.
- **Call to Action (CTA):** "체험 신청하기" 등의 버튼 링크 연결.

### TASK 2: 소개 및 연혁 (`/about`, `/history`)
- **About:** `about.md`의 텍스트를 가독성 있게 배치 (이미지 + 텍스트 교차 레이아웃 권장).
- **History:** `history_master.md`의 연도별 데이터를 파싱하여 수직 타임라인(Vertical Timeline) UI로 구현.
    - *Tip:* 데이터가 많으므로 최근 순으로 정렬하고, 주요 이정표(Milestone)를 강조.

### TASK 3: 프로그램 및 서비스 상세 (`/programs`, `/service/*`)
- **Programs:** `programs.md`의 내용을 바탕으로 프로그램 카테고리(엘리트, 생활체육 등) 소개.
- **Service Detail:**
    - `/service/corporate`: 기업 연수 프로그램 상세 (팀빌딩, 리더십 등).
    - `/service/school-youth`: 학교/청소년 프로그램.
    - `/service/club-general`: 동호회/일반인 대상.
    - 각 하위 페이지(`teambuilding.astro`, `leadership.astro` 등)에 `services.md`의 해당 섹션 내용 적용.

### TASK 4: 문의 페이지 (`/contact`)
- **Info:** 주소, 전화번호, 이메일, 운영시간 정보 업데이트.
- **Map:** 카카오맵 또는 네이버지도 연동을 위한 플레이스홀더(또는 이미지) 배치.
- **Form:** 문의 폼 UI 구현 (기능 연동은 추후 진행하더라도 UI는 완성).

---

## 4. 기술적 제약 사항 (Constraints)

- **이미지:** 현재 `assets/` 폴더에 이미지가 부족할 수 있음. 적절한 플레이스홀더(Unsplash 등)를 사용하거나, `div` 박스로 영역을 잡고 "이미지 준비 필요" 주석을 남길 것.
- **스타일:**
    - 텍스트 색상: `text-white` (기본), `text-gray-300` (본문), `text-neon` (강조).
    - 배경: `bg-deep` (기본), `.glass-panel` (카드/섹션 배경).
- **컴포넌트:** 반복되는 UI(예: 프로그램 카드, 섹션 헤더)는 `src/components/`에 별도 컴포넌트로 분리하여 재사용성을 높일 것.

---

## 5. 완료 조건 (Definition of Done)

1.  모든 페이지(`src/pages/**/*.astro`)에서 "Lorem Ipsum"이 제거되고 실제 기획 텍스트가 표시되어야 함.
2.  `npm run dev` 실행 시 콘솔 에러가 없어야 함.
3.  모바일/데스크탑 뷰에서 레이아웃 깨짐이 없어야 함.
4.  작업 완료 후 `SESSION_18_REPORT.md` 작성.
