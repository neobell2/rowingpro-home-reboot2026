# [보고서] SESSION 15: 디자인 시스템 최종 명세 확정

**작성자:** Claude 4.5 Sonnet (디자인 전략가)
**일시:** 2026-02-13
**근거:** SESSION_15_SONNET_DESIGN_REVIEW_WO.md (Work Order)
**선행:** SESSION_12_LEGACY_INTEGRATION_REPORT.md (Opus 기술적 정합성 분석)
**상태:** 디렉터 승인 대기

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.0** | 2026-02-13 | 초안 작성 (컬러 시스템 확정) |

---

## 0. 요약 (Executive Summary)

### 핵심 결정 사항

✅ **로고 블루 승격:** CI 매뉴얼 `#2C63A7`을 브랜드 아이덴티티로 확정
✅ **컬러 시스템:** Heritage(주) + Neon(보조) 듀얼 시스템
✅ **Cobalt 폐기:** 의도 없이 생성된 Cobalt `#2D5BFF` 제거
🔄 **히어로 타이틀:** 그라데이션 사용 여부는 디자인 단계로 보류

---

## 1. Opus 분석 적합성 판정

### 1.1 컬러 팔레트 판정

| Opus 판정 | 내용 | Sonnet 재판정 | 근거 |
|:--|:--|:--|:--|
| **승인** | Deep `#05080F` | ✅ **승인** | 프리미엄 깊이감, 글라스모피즘 최적화 |
| **승인** | Neon `#00F0FF` | ✅ **승인 (역할 재정의)** | Heritage 보조, 밝기 보완 |
| **승인** | Cobalt `#2D5BFF` | ❌ **폐기** | 의도 없음, Heritage와 역할 중복 |
| **폐기** | Sky Blue `#0EA5E9` | ✅ **동의** | Draft 03에서 완전 교체됨 |
| **미확정** | Logo Blue `#2B66A3` | ✅ **승격 확정** | CI 매뉴얼 `#2C63A7`로 정정, 브랜드 주인공 |

---

## 2. 최종 컬러 시스템

### 2.1 기본 팔레트 (Base Palette)

```
Heritage  #2C63A7  RGB(44, 99, 167)   CMYK(C68 M64 Y6 K0)
Neon      #00F0FF  RGB(0, 240, 255)
Deep      #05080F  RGB(5, 8, 15)
White     #FFFFFF  RGB(255, 255, 255)
```

**출처:**
- Heritage: CI 매뉴얼 공식 브랜드 컬러 (13년 헤리티지)
- Neon: Draft 03 자동 생성, 밝기 보완용으로 승인
- Deep: Draft 03, 프리미엄 배경
- White: 표준

---

### 2.2 컬러 토큰 시스템 (Color Tokens)

#### Heritage (브랜드 주인공)

| 토큰 | 값 | 용도 | Tailwind |
|:--|:--|:--|:--|
| base | `#2C63A7` | 로고, 주 제목, 핵심 CTA | `text-heritage`, `bg-heritage` |
| /50 | `rgba(44,99,167,0.5)` | 버튼 테두리 | `border-heritage/50` |
| /30 | `rgba(44,99,167,0.3)` | 미세 테두리 | `border-heritage/30` |
| /15 | `rgba(44,99,167,0.15)` | 호버 배경 | `bg-heritage/15` |
| /10 | `rgba(44,99,167,0.1)` | 미세 배경 | `bg-heritage/10` |

**Glow:**
```css
text-shadow: 0 0 20px rgba(44, 99, 167, 0.3);
box-shadow: 0 0 30px rgba(44, 99, 167, 0.3);
```

---

#### Neon (보조 강조)

| 토큰 | 값 | 용도 | Tailwind |
|:--|:--|:--|:--|
| base | `#00F0FF` | 인터랙션, 호버 | `text-neon`, `bg-neon` |
| /70 | `rgba(0,240,255,0.7)` | 서브 강조 | `text-neon/70` |
| /40 | `rgba(0,240,255,0.4)` | 테두리 | `border-neon/40` |
| /20 | `rgba(0,240,255,0.2)` | 미세 강조 | `bg-neon/20` |
| /10 | `rgba(0,240,255,0.1)` | 미세 배경 | `bg-neon/10` |

**Glow:**
```css
text-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
box-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
```

---

#### White (텍스트)

| 토큰 | 값 | 용도 | Tailwind |
|:--|:--|:--|:--|
| base | `#FFFFFF` | 본문 텍스트 | `text-white` |
| /90 | `rgba(255,255,255,0.9)` | 약한 본문 | `text-white/90` |
| /70 | `rgba(255,255,255,0.7)` | 보조 텍스트 | `text-white/70` |
| /30 | `rgba(255,255,255,0.3)` | 테두리 | `border-white/30` |
| /10 | `rgba(255,255,255,0.1)` | 글라스 테두리 | `border-white/10` |
| /5 | `rgba(255,255,255,0.05)` | 글라스 배경 | `bg-white/5` |
| /3 | `rgba(255,255,255,0.03)` | 글라스 배경 (light) | `bg-white/3` |

---

#### Deep (배경)

| 토큰 | 값 | 용도 | Tailwind |
|:--|:--|:--|:--|
| base | `#05080F` | 메인 배경 | `bg-deep` |
| /95 | `rgba(5,8,15,0.95)` | 네비게이션 (스크롤) | `bg-deep/95` |
| /80 | `rgba(5,8,15,0.8)` | 네비게이션 (상단) | `bg-deep/80` |

---

### 2.3 컬러 사용 원칙

#### 역할 분담

- **Heritage:** 로고, 메인 제목, 브랜드 핵심 요소
  - 예: 로고 "PRO", 섹션 제목 강조, About "12+"

- **Neon:** 인터랙션, 호버, 밝기 보완
  - 예: 네비게이션 hover, 버튼 테두리, About "500+", 아이콘

- **Deep:** 배경 전용

- **White:** 텍스트, 글라스 요소

#### 위계 규칙

1. **페이지당 Heritage 사용:** 3~5회 (제목, 핵심 숫자, 로고)
2. **Neon 사용:** 10~15회 (호버, 아이콘, 링크, 보조 강조)
3. **Glow 효과:** 극도로 절제 (히어로 타이틀만 선택적 사용)

---

### 2.4 폐기 항목

| 컬러 | 값 | 폐기 이유 |
|:--|:--|:--|
| Cobalt | `#2D5BFF` | Gemini 자동 생성, 의도 없음, Heritage와 역할 중복 |
| Sky Blue | `#0EA5E9` | 레거시, Draft 03에서 완전 교체 |
| Cyan Light | `#22D3EE` | 레거시, Neon으로 통합 |
| Rose | `#F43F5E` | 레거시, Draft 03 팔레트에 부재 |

---

## 3. 글라스모피즘 (Glassmorphism) 명세

### 3.1 기본 스펙

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

**Tailwind 클래스:**
```
backdrop-blur-xl bg-white/3 border border-white/10 rounded-3xl
```

---

### 3.2 호버 효과

**Heritage 강조:**
```css
.glass-panel:hover {
  border-color: rgba(44, 99, 167, 0.5);
  box-shadow: 0 0 30px rgba(44, 99, 167, 0.2);
  transform: translateY(-5px);
}
```

**Neon 강조:**
```css
.glass-panel:hover {
  border-color: rgba(0, 240, 255, 0.5);
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
  transform: translateY(-5px);
}
```

---

## 4. 타이포그래피 (Typography)

### 4.1 폰트 시스템

| 용도 | 폰트 | Weight | 출처 |
|:--|:--|:--|:--|
| Display (영문) | Readex Pro | 600~700 | Draft 03 |
| Body (국문) | Pretendard | 400~500 | Draft 03 |
| Fallback (영문 본문) | Inter | 400 | DESIGN_TOKENS |

**CDN:**
```html
<!-- Readex Pro -->
<link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;600;700&display=swap" rel="stylesheet">

<!-- Pretendard -->
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
```

---

### 4.2 크기 스케일 (Size Scale)

| 요소 | Mobile | Desktop | Tailwind |
|:--|:--|:--|:--|
| Hero H1 | 48px | 72px | `text-5xl md:text-7xl` |
| H2 | 30px | 36px | `text-3xl md:text-4xl` |
| H3 | 20px | 24px | `text-xl md:text-2xl` |
| Body | 16px | 16px | `text-base` |
| Small | 14px | 14px | `text-sm` |

**출처:** DESIGN_TOKENS.md (레거시 승계)

⚠️ **디렉터 확인 필요:** Draft 03 시안의 실제 크기와 대조 검증 필요

---

## 5. 버튼 시스템 (Buttons)

### 5.1 Primary Button (Heritage)

```css
/* 기본 */
background: transparent;
border: 1px solid rgba(44, 99, 167, 0.5);
color: white;
padding: 0.75rem 2rem; /* py-3 px-8 */
border-radius: 9999px; /* rounded-full */
backdrop-filter: blur(10px);

/* 호버 */
background: rgba(44, 99, 167, 0.15);
border-color: rgba(44, 99, 167, 0.8);
```

**Tailwind:**
```html
<button class="px-8 py-3 bg-transparent border border-heritage/50 text-white rounded-full backdrop-blur-sm hover:bg-heritage/15 hover:border-heritage/80 transition-all">
  프로그램 보기
</button>
```

---

### 5.2 Secondary Button (White)

```css
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.3);
color: white;

/* 호버 */
background: rgba(255, 255, 255, 0.15);
border-color: rgba(255, 255, 255, 0.5);
```

---

### 5.3 버튼 원칙

- **글로우 제거:** 히어로 버튼에서 강한 글로우 금지 (시각 위계 복원)
- **크기 축소:** `px-10 py-4` → `px-8 py-3` (메시지 대비 톤 다운)
- **투명 우선:** 배경은 투명 + 테두리 강조

---

## 6. 보류 사항 (디자인 단계 이관)

### 6.1 히어로 타이틀 "TEAMWORK" 색상

**옵션 A: 오리지널 그라데이션 유지**
```
ROWING: Heritage #2C63A7
TEAMWORK: #80E9FF → #D1B5FF → #FF99F5 (시안-퍼플-핑크)
```
- 장점: Wave 3D 조화, 시각적 임팩트 극대화
- 단점: 핑크 도입으로 컬러 복잡도 증가

**옵션 B: Heritage 단색**
```
ROWING = TEAMWORK 전체를 Heritage #2C63A7
```
- 장점: 브랜드 일관성 극대화
- 단점: Wave 3D와 단절, 임팩트 약화

**판정:** 디자인 단계에서 Wave 3D와의 조화를 직접 확인 후 결정

---

### 6.2 포인트 레드(핑크) 사용

- 핑크 `#FF99F5`를 포인트 레드로 활용할 경우
- 히어로 타이틀 외 추가 사용처 검토 필요
- 희소성 원칙 유지 (페이지당 1~2회)

---

## 7. D1~D12 미결 사안 (Opus 보고서)

### 처리 완료 항목

| # | 항목 | Sonnet 판정 |
|:--|:--|:--|
| D1~D12 | 전체 | **디자인 단계로 이관** |

**사유:** D1~D12는 콘텐츠/IA/기능 관련 사항으로, 디자인 시스템 확정과 무관. 별도 세션에서 처리.

---

## 8. 다음 단계 권고

### 8.1 즉시 실행

1. **`02_ARCHITECTURE.md` 업데이트**
   - 컬러 시스템 섹션 확장
   - 본 보고서의 명세 반영
   - 타이포그래피/버튼/글라스모피즘 추가

2. **디렉터 승인**
   - 히어로 타이틀 색상 최종 결정
   - 포인트 레드 사용 여부 결정

3. **STATUS 전환**
   - `[STATUS: BASELINE]` → `[STATUS: LOCKED]`

---

### 8.2 구현 단계 (LOCKED 이후)

1. 13페이지 스켈레톤 구현
2. 컴포넌트 라이브러리 구축
3. Wave 3D 통합 최종 조정

---

**보고 종료. 디렉터 검토를 요청드립니다.**
