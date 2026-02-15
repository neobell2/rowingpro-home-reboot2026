# [Work Order] 긴급 기술 부채 해결 및 Header 정상화

**작성자:** External Auditor (Gemini 3.0 Pro)
**일시:** 2026-02-15
**상태:** [STATUS: APPROVED — 외부감사 권고]

---

## 1. 개요
2026-02-15 수행된 긴급 전수조사(`docs/reports/SESSION_21_EMERGENCY_AUDIT_REPORT.md`) 결과 식별된 치명적 결함(Critical Findings)을 즉시 해결하기 위한 긴급 작업 지시서입니다.

## 2. 작업 목표
1.  **Header 컴포넌트 완전 정상화 (모바일 메뉴 구현 포함)**
2.  **디자인 시스템 일관성 확보 (버튼/카드 스타일 전수 검사)**
3.  **홈 페이지 비디오 로딩 최적화 (Poster 추가)**

## 3. 상세 요구사항

### 3.1. Header.astro 재구현 (CRITICAL)
- **모바일 메뉴 패널 구현:**
    - 햄버거 버튼 클릭 시 우측에서 슬라이드되거나 전체 화면을 덮는 메뉴 패널 구현
    - 닫기 버튼(X) 포함
    - 모바일 메뉴 항목: Home, About, Programs, Service, History, Contact (동일하게)
    - `backdrop-blur-xl` 등 Glassmorphism 적용
    - `astro` 스크립트(`script`)를 사용하여 토글 로직 구현 (바닐라 JS)
- **스크롤 반응형 배경:**
    - 최상단에서는 투명(`bg-transparent`) 또는 은은한 그라데이션
    - 스크롤 시 `bg-deep/90` + `backdrop-blur-lg` 적용
- **활성 메뉴 표시:**
    - 현재 페이지(`Astro.url.pathname`)에 해당하는 메뉴 아이템에 `text-neon` 또는 `text-white` 강조

### 3.2. 공통 컴포넌트 스타일 점검 (MAJOR)
- **버튼:** 모든 `<a>`, `<button>` 요소가 `btn-primary` 또는 `btn-secondary` 클래스를 사용하는지 확인하고, 하드코딩된 스타일(`style="..."` 등) 제거
- **카드:** 모든 카드 형태 UI에 `glass-panel` 클래스 적용 확인

### 3.3. Index.astro 최적화 (MINOR)
- **Video 태그 보완:**
    - `poster="/images/hero-poster.jpg"` 속성 추가 (이미지 파일이 없다면 `public/images/`에 플레이스홀더라도 생성하거나 경로만이라도 지정)
    - 모바일에서 자동재생을 위한 `playsinline` 속성 확인 (이미 존재함, 유지)

## 4. 수행 역할 및 도구
- **주수행자:** Builder (Claude 4.5 Sonnet / Gemini 3.0 Pro)
- **참조 문서:** `02_ARCHITECTURE.md` (디자인 시스템), `src/styles/global.css`

## 5. 완료 기준 (DoD)
- [ ] 모바일 뷰포트(Chrome DevTools)에서 햄버거 메뉴 클릭 시 메뉴 패널이 부드럽게 열리고 닫혀야 함.
- [ ] 스크롤 시 헤더 배경이 부드럽게 전환되어야 함.
- [ ] 모든 페이지의 GNB 링크가 정상 작동해야 함.
- [ ] `npm run build` 성공

---
