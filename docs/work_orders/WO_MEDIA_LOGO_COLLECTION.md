# Work Order: 클라이언트 로고 30개 수집 및 처리

> **발행:** SESSION_46B (2026-02-21)
> **상태:** ✅ **COMPLETED** (SESSION_46H~46K, 2026-02-23)
> **담당:** Media PD (Gemini Flash)
> **우선순위:** Phase 3 Critical Path
> **실제 산출물:** WO 목표 30개 초과 — **67개 확보** (`/public/assets/images/logos/`)
> **삭제 완료:** 중복 4종 제거 — `Dongguk_Univ.svg`, `parisBaguette01.svg`, `SNU_logo.svg`, `samsung-oval.svg`

---

## 작업 개요

Index 페이지 클라이언트 레퍼런스 롤링배너를 위한 **30개 기업 로고** 수집, SVG 변환 및 최적화 작업.

**캡션:** "13년간 함께 해주신 500+ 클라이언트" (동적 config 관리)

---

## 산출물 스펙

### 파일 형식
- **포맷:** SVG (벡터)
- **높이:** 100px (가로는 비율 유지)
- **스타일:** 모노크롬 또는 원본 컬러 (통일성 우선)
- **최적화:** SVGO 처리 (불필요한 메타데이터 제거)

### 파일 위치
```
/public/assets/images/logos/
  ├── samsung.svg
  ├── hyundai.svg
  ├── lg.svg
  └── ... (총 30개)
```

### 네이밍 규칙
- 소문자, 영문, 하이픈 허용
- 예: `samsung.svg`, `louis-vuitton.svg`, `korea-tourism.svg`

---

## 로고 리스트 (30개)

### 제조/전자 (5개)
1. 삼성 (Samsung)
2. 현대 (Hyundai)
3. LG
4. SK
5. CJ

### 자동차 (3개)
6. 벤츠 (Mercedes-Benz)
7. 아우디 (Audi)
8. 닛산 (Nissan)

### 패션/스포츠/뷰티 (5개)
9. 나이키 (Nike)
10. 아디다스 (Adidas)
11. 루이비통 (Louis Vuitton)
12. 로레알 (L'Oréal)
13. 조말론 (Jo Malone)

### IT (3개)
14. 마이크로소프트 (Microsoft)
15. 어도비 (Adobe)
16. 효성 (Hyosung)

### 금융 (5개)
17. 메트라이프 (MetLife)
18. 푸르덴셜 (Prudential)
19. 우리은행 (Woori Bank)
20. 신한은행 (Shinhan Bank)
21. 한국투자증권 (Korea Investment & Securities)

### 유통/식품 (6개)
22. 롯데 (Lotte)
23. 이마트 (E-Mart)
24. GS리테일 (GS Retail)
25. 서울우유 (Seoul Milk)
26. 대상 (Daesang)
27. 동원 (Dongwon)

### 제약/화학 (2개)
28. 사노피 (Sanofi)
29. 신젠타 (Syngenta)

### 공공 (1개)
30. 한국관광공사 (Korea Tourism Organization)

---

## 작업 가이드

### Step 1: 공식 로고 수집
- 각 기업 공식 사이트 또는 브랜드 가이드라인에서 로고 다운로드
- SVG 형식 우선, 없을 경우 고해상도 PNG 수집 후 SVG 변환

### Step 2: SVG 변환 (PNG인 경우)
- 온라인 도구 또는 Illustrator 사용
- 단순한 로고: 자동 변환 도구 (convertio, vectorizer 등)
- 복잡한 로고: 수동 처리 필요 (디렉터 작업)

### Step 3: 최적화
- SVGO 또는 SVGOMG 사용
- 불필요한 메타데이터, 주석, 숨겨진 레이어 제거
- 목표: 파일당 5~20KB

### Step 4: 일관성 검토
- 모든 로고 높이 100px 통일 확인
- 색상 스타일 통일 (모노크롬 또는 원본 컬러)
- 여백 정리 (viewBox 최적화)

---

## 소비자 기준 (D-033)

**소비자:** Media PD (Gemini Flash 2.0)

**환경:**
- 프롬프트 기반 작업 (파일 시스템 접근 가능)
- 웹 검색 및 이미지 수집 가능
- SVG 최적화 도구 활용 가능

**제약사항:**
- 복잡한 로고 처리 어려움 (디렉터 보완 필요)
- 저작권 확인 불가 (디렉터 최종 검토)

**기대 산출물:**
- 30개 SVG 파일 (70~80% 완성도)
- 디렉터가 20~30% 보완 후 최종 확정

---

## 성능 예상

- **총 용량:** 150~600KB (30개 × 5~20KB)
- **로딩 영향:** 무한 스크롤 배너, 초기 로딩 시 lazy load 가능
- **사용자 경험:** 100px 높이로 페이지 길이 증가 최소

---

## 체크리스트

- [ ] 30개 로고 공식 파일 수집
- [ ] SVG 변환 (PNG인 경우)
- [ ] SVGO 최적화
- [ ] 높이 100px 통일
- [ ] `/public/assets/images/logos/` 배치
- [ ] 네이밍 규칙 준수
- [ ] 디렉터 최종 검토

---

## 참고 자료

- `참고자료/지오캐치_회사소개서_V2.0_202601/Image00016.png` (60~70개 로고 레퍼런스)
- SESSION_46B 보고서 (line 132-141: 30개 로고 리스트 및 스펙)

---

## 후속 작업

- Builder: 롤링배너 컴포넌트 구현
- PM: Index 페이지 콘텐츠에 로고 배열 정의
- Architect: 성능 검토 (필요시)

---

**발행일:** 2026-02-21
**발행자:** PM (Claude Sonnet 4.5)
**승인:** 디렉터 승인 후 Media PD 작업 착수
