# Work Order: 클라이언트 로고 롤링배너 컴포넌트 구현

> **발행:** SESSION_46K (2026-02-23)
> **담당:** Builder (Claude Sonnet 4.6)
> **상태:** ✅ DONE (SESSION_46L, 2026-02-24)
> **우선순위:** Phase 3 — Index 페이지 핵심 섹션
> **선행조건:** 없음 (로고 에셋 67개 확보 완료)
> **완료:** KIBS.png 제거, 66개 로고, 모노크롬, 70초/루프, 빌드 성공, 커밋 b03ad8a

---

## 작업 개요

Index 페이지 클라이언트 레퍼런스 섹션에 들어갈 **무한 롤링 배너 컴포넌트** 구현.

**섹션 캡션:** "13년간 함께 해주신 500+ 클라이언트"

---

## 확정 스펙 (디렉터 승인 2026-02-23)

### 파일 위치
```
src/components/ClientLogosBanner.astro   ← 신규 생성
public/assets/images/logos/              ← 로고 에셋 (67개, 기확보)
```

### 레이아웃 스펙
```css
/* 로고 셀 */
.logo-item {
  height: 56px;          /* 고정높이 — 시각 확인 후 디렉터 미세조정 가능 */
  width: auto;           /* 비율 유지 */
  max-width: 160px;      /* 극단 가로형 방지 */
  object-fit: contain;   /* 비율 보존 */

  /* 색상: 모노크롬 기본 (디렉터 육안 확인 후 최종 확정) */
  filter: grayscale(100%) opacity(60%);  /* hover 시 원본 컬러 복원 */
}

.logo-item:hover {
  filter: grayscale(0%) opacity(100%);
  transition: filter 0.3s ease;
}
```

### 애니메이션 스펙
- **방식:** CSS `@keyframes` 무한 좌→우 스크롤 (JS 의존 없음)
- **속도:** 30~40초 1루프 (시각 확인 후 조정)
- **루프:** 로고 세트를 2벌 복제하여 끊김 없는 무한 반복
- **일시정지:** `hover` 시 배너 전체 일시정지

### 접근성
```css
@media (prefers-reduced-motion: reduce) {
  .banner-track { animation: none; }
}
```

### 예외 처리
- **세로 우세형 로고** (`Korea_Univ.svg` 등, 비율 < 0.8): `max-width: 48px` 예외 클래스 적용
- **KIBS.png**: 현재 포함 (SVG 변환 여부는 디렉터 별도 결정)

---

## 로고 목록 (67개 전량 사용)

```
/public/assets/images/logos/ 내 전체 파일
```

---

## 구현 가이드

### 컴포넌트 구조

```astro
---
// ClientLogosBanner.astro
const logos = await Astro.glob('/public/assets/images/logos/*');
---

<section class="client-banner-section">
  <p class="banner-caption">13년간 함께 해주신 500+ 클라이언트</p>
  <div class="banner-wrapper">
    <div class="banner-track">
      <!-- 로고 세트 1 -->
      <!-- 로고 세트 2 (복제, 무한 루프용) -->
    </div>
  </div>
</section>
```

### Index 페이지 삽입 위치
- `src/pages/index.astro` 또는 `src/content/pages/index.md` 기준
- **Hero 섹션 하단, 서비스 소개 섹션 상단** 사이

---

## 검수 기준

- [ ] 로고 67개 전량 표시 확인
- [ ] 무한 스크롤 끊김 없음 확인
- [ ] 모노크롬 기본 / hover 시 컬러 복원 동작 확인
- [ ] 모바일(360px) 정상 동작 확인
- [ ] `prefers-reduced-motion` 동작 확인
- [ ] `npm run build` 성공 확인

---

## 소비자 기준 (D-033)

**소비자:** Builder (Claude Sonnet 4.6)
**환경:** Astro 4.x, Tailwind CSS, Windows 로컬 dev 서버
**제약:** JS 라이브러리 추가 금지 (CSS only 원칙), src/ 외 정본 문서 수정 금지

---

## 후속 작업

- **디렉터:** 브라우저에서 모노크롬 vs 컬러 육안 비교 후 최종 컬러 확정
- **PM:** 06_VERSION_HISTORY.md 갱신
- **다음 단계:** Decision Gate (레이아웃 재설계 방식 A/B/C) 결정

---

**발행일:** 2026-02-23
**발행자:** PM (Claude Sonnet 4.6)
**승인:** 디렉터 (SESSION_46K)
