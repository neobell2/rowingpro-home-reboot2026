# WebGPT 답변 후 실행 가이드

**작성일:** 2026-02-03
**용도:** Session 9 시작 시 참조

---

## 🎯 WebGPT PHASE 1 답변 받은 후

### 1단계: 답변 검토 (10분)

**확인 사항:**
- [ ] Q1-Q9 모든 질문에 답변 완료
- [ ] 기업·조직 5개 카드 명칭 최종 확정
- [ ] 나머지 4개 카테고리 구조 결정 (또는 미정 유지)
- [ ] Service 공통 템플릿 적용 범위 확정
- [ ] 패키지 네이밍 상태 확인 (SIMPLE/CORE/PRO/MASTER vs 체험부스형)

**문서 업데이트:**
- DEV_SPEC.md에 WebGPT 답변 반영 (필요시)

---

### 2단계: Design Tokens 제안 (30분)

**Claude 준비:**
1. 로고에서 색상 추출 (RGB/HEX)
   - Design_ref/로잉프로로고.jpg
2. 컬러 팔레트 제안:
   ```
   Primary: 로고 파랑
   Secondary: 보조 색상
   Neutral: 회색 톤 (3-4단계)
   Accent: 강조 색상
   ```
3. 폰트 후보 제안:
   ```
   한글: Pretendard / Noto Sans KR / Spoqa Han Sans
   제목: weight 600-700
   본문: weight 400-500
   ```
4. Spacing 기준:
   ```
   기본 단위: 8px
   예시: 8, 16, 24, 32, 48, 64
   ```
5. Breakpoint:
   ```
   Mobile: ~768px
   Tablet: 768px~1024px
   Desktop: 1024px~
   ```

**CEO에게 제시:**
- 색상 샘플 (시각적으로)
- 폰트 예시 (텍스트로)
- 여백 비율 설명

**CEO 피드백:**
- "이 파랑이 맞아?" / "더 진하게" / "폰트가 차갑네"
- 수정 반영 → 재제안 → 확정

---

### 3단계: Astro 개발 착수 (5시간)

**착수 조건:**
- ✅ Design Tokens 확정
- ✅ WebGPT 답변 반영 완료

**작업 목록:**

1. **Astro 프로젝트 생성 (30분)**
   ```bash
   npm create astro@latest
   npx astro add tailwind
   ```
   - 폴더 구조: src/layouts, src/components, src/pages, public/

2. **Contact 백엔드 선택 (1시간)**
   - 옵션 비교: Formspree / Netlify Forms / 직접 API
   - source_page 코드 자동 전송 로직 설계
   - 최종 선택 및 구현

3. **이미지 3슬롯 컴포넌트 설계 (1.5시간)**
   - 자동슬라이드 로직 (3.5s)
   - prefers-reduced-motion 존중
   - 터치/이탈 감지 (모바일)

4. **기본 레이아웃 프로토타입 (1.5시간)**
   - Header: 로고 + GNB
   - Footer: 법적 고지 + Privacy 링크
   - Design Tokens 적용

5. **로고 색상 추출 (15분)**
   - 이미지에서 RGB 추출
   - HEX 코드 변환

6. **SEO 파일 골격 (30분)**
   - sitemap.xml 템플릿
   - robots.txt 템플릿

---

### 4단계: CEO 프로토타입 검수 (반복)

**프로세스:**
```
localhost:3000 열기
  ↓
CEO 피드백 ("이 색 바꿔", "여백 줄여")
  ↓
수정 (실시간 반영)
  ↓
재검수
  ↓
반복 → 확정
```

**CEO 판단 항목:**
- 색상이 마음에 드는가?
- 폰트가 따뜻한가?
- 여백이 적당한가?
- 모바일에서 읽기 쉬운가?

---

## 📋 체크리스트 (Session 9)

### WebGPT 답변 후
- [ ] 답변 검토 완료
- [ ] DEV_SPEC.md 업데이트 (필요시)

### Design Tokens
- [ ] 로고 색상 추출
- [ ] 컬러 팔레트 제안
- [ ] 폰트 후보 제안
- [ ] CEO 확정

### Astro 개발
- [ ] 프로젝트 생성
- [ ] Contact 백엔드 선택
- [ ] 이미지 슬롯 설계
- [ ] 기본 레이아웃 프로토타입

### 프로토타입 검수
- [ ] localhost 실행
- [ ] CEO 피드백 수집
- [ ] 수정 반영
- [ ] 최종 확정

---

**다음:** 콘텐츠 삽입 → 이미지 배치 → 전체 페이지 완성
