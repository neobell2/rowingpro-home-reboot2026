# PROJECT_BLUEPRINT_2026.md

# 🏗️ 로잉프로 웹사이트 구축 통합 마스터플랜 (VS Code + Roo Edition)

**프로젝트명:** Rowing Pro Reboot 2026
**작성일:** 2026-02-09
**실행 환경:** VS Code + Roo Code Extension
**목적:** 비개발자 디렉터(User)와 AI 에이전트(Roo)의 협업 기준점 (SSOT)

---

## 1. 프로젝트 정의

### 1.1 핵심 목표
*   **정체성:** 대한민국 국가대표 출신이 운영하는 HRD/팀빌딩 전문 기업
*   **기술 스택:** Astro + Tailwind CSS (정적 사이트 생성)
*   **배포:** Cloudflare Pages (GitHub 자동 배포)
*   **데이터:** Supabase (DB) + Resend (Email API)

### 1.2 팀 운영 (Roo Code 활용 전략)
*   **Director (User):** `PROJECT_BLUEPRINT_2026.md`를 기준으로 Roo에게 지시하고, 결과물을 승인(Approve)함.
*   **Architect (Claude 모델 권장):** 복잡한 구조 설계, 에러 원인 분석 시 사용.
*   **Coder (Gemini/GPT 모델 권장):** 단순 페이지 양산, 코드 작성 시 사용.

---

## 2. 디자인 시스템 (불변의 기준)

### 2.1 컬러 시스템 (Design Tokens)
*   **Primary:** `#0EA5E9` (Sky Blue) - 브랜드 아이덴티티
*   **Surface:** `#0F172A` (Navy Dark / Header), `#FFFFFF` (Content)
*   **Action:** `#22D3EE` (Cyan Light) - CTA 버튼 전용

### 2.2 타이포그래피
*   **Headings:** `Readex Pro` (영문/숫자), `Pretendard` (국문 - 굵기 700)
*   **Body:** `Pretendard` (국문 - 굵기 400/500)

### 2.3 레이아웃 원칙
*   **통제된 에너지:** 화이트(여백)와 다크(무게감) 섹션의 교차 반복.
*   **이미지 중심:** 텍스트 설명보다 '3슬롯 이미지(Hero/Action/Result)'로 시각적 설득.

---

## 3. 정보 구조 (IA) 및 URL 맵

**총 13페이지 (반드시 이 구조대로 생성할 것)**

1.  **Home** (`/`) - Video Loop (`wave.mp4`) + H1 "Rowing = Teamwork"
2.  **About** (`/about`) - "국가대표", "13년 무사고", "협회 주관사"
3.  **Programs** (`/programs`) - 인도어/아웃도어/워크숍 구분
4.  **Service Hub** (`/service`)
5.  **Service Detail (5 Cards)**
    *   `/service/corporate` (기업·조직 허브)
    *   `.../training` (교육), `.../teambuilding` (팀빌딩), `.../leadership` (리더십), `.../event` (행사), `.../wellness` (건강)
6.  **Track Record** (`/track-record`) - 주요 고객사 로고 + 연혁
7.  **Contact** (`/contact`) - 문의 폼 (성함, 연락처, 회사명, 문의유형)
8.  **System** - `/privacy` (개인정보처리방침), `/404` (에러)

---

## 4. 실행 가이드 (Step-by-Step for Roo)

User는 아래 단계를 Roo 채팅창에 **그대로 복사**하여 지시한다.

### [Step 1] 인프라 구축
**명령어:**
> "이 블루프린트의 3번 항목(IA)에 따라 Astro 프로젝트를 초기화해. Tailwind와 React를 포함하고, `src/pages`에 13개 페이지 파일을 모두 생성해. 그리고 `src/layouts/MainLayout.astro`를 만들어서 공통 헤더/푸터를 적용해. 완료하면 `npm run dev`로 서버를 켜."

### [Step 2] 디자인 토큰 적용
**명령어:**
> "tailwind.config.mjs 파일을 열어서 블루프린트 2.1번 컬러 시스템(#0EA5E9 등)을 theme 설정에 추가해. 그리고 `src/styles/global.css`에 폰트 설정을 적용해."

### [Step 3] 콘텐츠 주입 (순차 진행)
**명령어 (예시):**
> "이제 `docs/content/home.md`의 내용을 읽고, `src/pages/index.astro`를 구현해. Hero 섹션에는 `public/wave.mp4`를 배경으로 깔아줘."

### [Step 4] 기능 및 배포
**명령어:**
> "Contact 페이지의 폼을 만들고, Supabase와 연동할 수 있도록 API 라우트를 작성해. 코드가 완성되면 전체 프로젝트의 타입 에러를 검사해줘."

---

## 5. 검수 체크리스트 (User 확인용)

Roo가 작업을 마쳤다고 할 때마다 아래 항목을 확인하고 **[Approve]** 버튼을 누르시오.

- [ ] **서버 실행:** 터미널에 에러 없이 `http://localhost:4321`이 떴는가?
- [ ] **페이지 이동:** 메뉴를 클릭했을 때 13개 페이지가 모두 열리는가? (404 없음)
- [ ] **디자인:** 포인트 컬러가 Sky Blue(`#0EA5E9`)로 정확히 나오는가?
- [ ] **반응형:** 브라우저 창을 줄였을 때 모바일 메뉴(햄버거)가 작동하는가?