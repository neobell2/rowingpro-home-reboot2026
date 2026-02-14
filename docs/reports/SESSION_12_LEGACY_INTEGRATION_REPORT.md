# [보고서] STEP 0: 레거시 디자인 스펙 통합 보고서

**작성자:** Claude 4.6 Opus (설계 사령관)
**일시:** 2026-02-13
**근거:** SESSION_12_OPUS_WO.md (Work Order)
**상태:** 디렉터 검토 대기

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.0** | 2026-02-13 | 레거시 7종 문서 분석 및 Draft 03 대조 초안 작성 |

---

## 0. 분석 개요

### 검토 문서

| # | 문서 | 역할 | 일자 |
|:--|:--|:--|:--|
| 1 | [01. 누락·오류·확정 필요 체크리스트](../_archive/WebGPT_outputs/260203/01.%20누락·오류·확정%20필요%20체크리스트.md) | 미결 항목 21개 | 2026-02-03 |
| 2 | [11_IA템플릿확정_이미지3슬롯_설계종료](../_archive/WebGPT_outputs/Archive/WEBGPT_Full_Thread_Backup/11_IA템플릿확정_이미지3슬롯_설계종료_260201.md) | IA/템플릿/이미지 규칙 확정 | 2026-02-01 |
| 3 | [DEV_SPEC.md v1.2](../_archive/2026-02-03_GPT_legacy/specs/DEV_SPEC.md) | 최종 구조 명세 (IA, 가격, SEO) | 2026-02-03 |
| 4 | [02. DESIGN.md](../_archive/old_archive/v2_backup/02.%20DESIGN.md) | 디자인 철학 원본 | 2026-01-29 |
| 5 | [DESIGN_TOKENS.md](../_archive/2026-02-03_GPT_legacy/specs/DESIGN_TOKENS.md) | Sky Blue 컬러 시스템 + 수치 규격 | 2026-02-04 |
| 6 | [dev_spec.md v1.1](../_archive/WebGPT_outputs/260203/dev_spec.md) | 개발 스펙 초안 | 2026-02-03 |
| 7 | [DEV_SPEC_VALIDATION_QUESTIONS.md](../DEV_SPEC_VALIDATION_QUESTIONS.md) | 22개 검증 질문 (미답변) | 2026-02-03 |

### 대조 기준

- **정본:** `02_ARCHITECTURE.md` (v1.1), `01_PROJECT_CONTEXT.md` (v1.1)
- **시안:** Draft 03 (Wave 3D Ver.) — 스크린캡처 시각 확인 완료

---

## 1. [확정] 통합 컬러 팔레트 및 타이포그래피 규격

### 1.1 컬러 팔레트 — Draft 03 기준 확정

> **판정: DESIGN_TOKENS.md의 Sky Blue 컬러 시스템은 폐기. Draft 03(Wave 3D)가 유일한 컬러 기준.**

| 토큰 | 값 | 용도 | Tailwind 매핑 |
|:--|:--|:--|:--|
| **Deep** | `#05080F` | 메인 배경 (압도적 다크 네이비) | `bg-[#05080F]` |
| **Neon** | `#00F0FF` | 브랜드 아이덴티티 (Cyan Neon 강조) | `text-[#00F0FF]`, `border-[#00F0FF]` |
| **Cobalt** | `#2D5BFF` | 보조 강조 (신뢰/무게감) | `text-[#2D5BFF]` |
| White | `#FFFFFF` | 본문 텍스트, 카드 텍스트 | `text-white` |
| White/5~10 | `rgba(255,255,255,0.05~0.10)` | 글라스모피즘 패널 배경 | `bg-white/5`, `bg-white/10` |

**폐기된 레거시 컬러:**

| 레거시 토큰 | 값 | 폐기 이유 |
|:--|:--|:--|
| Sky Blue (Primary) | `#0EA5E9` | Draft 03에서 Neon `#00F0FF`로 대체 |
| Cyan Light (CTA) | `#22D3EE` | Draft 03에서 Neon으로 통합 |
| Cyan Dark | `#0284C7` | 그라디언트 용도 → Cobalt로 대체 |
| Rose (Accent) | `#F43F5E` | Draft 03 팔레트에 부재, 폐기 |
| Navy Dark (Header) | `#0F172A` | Deep `#05080F`로 대체 |
| Navy (Footer) | `#1E293B` | Deep으로 통합 (전체 다크 톤) |

**레거시에서 승계할 원칙:**
- "블루가 주인공" → **Neon이 주인공**으로 계승
- CTA 색상 희소성 원칙 (페이지당 2~3개 제한) → **유효**
- 포인트 컬러 극도 절제 → **유효** (Cobalt가 보조, 추가 포인트 없음)

### 1.2 타이포그래피 — Draft 03 기준 확정

| 용도 | 폰트 | Weight | 비고 |
|:--|:--|:--|:--|
| Headings (영문/Display) | **Readex Pro** | 600~700 | Draft 03 확인 |
| Body (국문/본문) | **Pretendard** | 400~500 | 전 문서 일치 |
| Fallback (영문 본문) | Inter | 400 | DESIGN_TOKENS에서 승계 |

**크기 스케일 (DESIGN_TOKENS에서 승계, Draft 03 확인 필요):**

| 요소 | Mobile | Desktop | Tailwind |
|:--|:--|:--|:--|
| Hero H1 | 48px | 72px | `text-5xl md:text-7xl` |
| H2 | 30px | 36px | `text-3xl md:text-4xl` |
| H3 | 20px | 24px | `text-xl md:text-2xl` |
| Body | 16px | 16px | `text-base` |
| Small | 14px | 14px | `text-sm` |

> ⚠️ **디렉터 확인 필요:** 위 크기 스케일은 DESIGN_TOKENS 원본값. Draft 03 시안에서의 실제 크기와 대조 검증이 필요합니다.

### 1.3 섹션 교차 패턴 — 재정의 필요

**레거시 (DESIGN_TOKENS):**
```
Navy Header → 히어로(Sky Blue) → 화이트 → Navy 다크 → 화이트 → Navy Footer
```

**Draft 03 (시안 확인):**
```
Dark Header → 히어로(Wave 3D + Deep BG) → Dark + Glass 카드 → Dark + Glass 카드 → ... → Dark Footer
```

**판정:** 레거시의 "화이트 ↔ 다크 교차" 패턴은 **폐기**. Draft 03은 **전면 다크 배경 + 글라스모피즘 카드**로 리듬을 구성. 단, "섹션 간 시각적 리듬감" 원칙 자체는 승계 (명암 차이 대신 글라스 투명도/블러 강도로 구현).

---

## 2. [확정] 섹션별 공통 템플릿 및 레이어 구조

### 2.1 Service 카드 랜딩 공통 템플릿 (옵션 A) — 전 문서 일치

> 출처: 11_IA템플릿확정 + DEV_SPEC.md v1.2 + dev_spec.md v1.1 — **3중 확인 완료**

| 순서 | 섹션명 | 목적 | 상단 노출 | 인쇄(PDF) |
|:--|:--|:--|:--|:--|
| 1 | 히어로 (카드명 + 한줄 정의) | 안전·정식·관리 신호 | O | X |
| 2 | 개회 장면 (이미지 hero) | 의식화(시작) | O | X |
| 3 | 요약 개요 | 구조 이해 | O | O |
| 4 | 프로그램 개요 | 운영 방식 요약 | O | O |
| 5 | 구조/운영 요약 | 통제·관리 증명 | O | O |
| 6 | 강도·난이도 | 선택 진입 이후 | X | X |
| 7 | 현장 장면 (이미지 start, summary) | 과정/종결 | X | X |
| 8 | FAQ (간략) | 막내 필터 보조 | X | X |
| 9 | 화면 인쇄(PDF) 버튼 | 보고서화 신호 | X | 트리거 |
| 10 | CTA: 문의하기 | 전환 | O | X |

**적용 범위:** Service 하위 카드 페이지만 (현재 기업·조직 5개 카드)

**Tailwind 매핑 가이드:**
```
섹션 래퍼:   py-16 md:py-24 (64~96px 섹션 간 여백)
카드 내부:   p-6 (24px)
요소 간:     space-y-8 (32px)
컨테이너:   max-w-7xl mx-auto px-4 md:px-6
```

### 2.2 UI 레이어 구조 — Draft 03 기준

| z-index | 레이어 | 설명 | Tailwind |
|:--|:--|:--|:--|
| 0 | Background | Deep `#05080F` 배경 | `z-0` |
| 10 | 3D/Video | Wave 3D 오브젝트, 히어로 영상 | `z-10` |
| 20 | Overlay | 배경 오버레이 (가독성 보장) | `z-20` |
| 30 | Content | 글라스모피즘 패널, 텍스트, 카드 | `z-30` |
| 40 | Navigation | 헤더, 네비게이션 (고정) | `z-40` |
| 50 | Modal/Toast | 모달, 알림 (현재 미사용) | `z-50` |

**글라스모피즘 기본값:**
```css
/* Tailwind 클래스 */
backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl
```

### 2.3 레이아웃 공통 컴포넌트 — 미결 항목 통합

> 레거시 미결 체크리스트에서 "Header/Footer 상세 미기재" 지적 있음. 아래는 시안과 레거시를 종합한 최소 규격.

**Header:**
- 상단 고정, 전체 다크 배경
- 로고: 좌측, h-10 (40px) — DESIGN_TOKENS 승계
- GNB: 우측, 6메뉴 (Home | About | Programs | Service | Track Record | Contact)
- CTA 버튼: 우상단 "문의하기" (Neon 컬러)
- 모바일: 햄버거 메뉴 → 풀스크린 or 슬라이드 오버레이

**Footer:**
- 전 페이지 고정 노출, 예외 없음
- 로고: h-8 (32px) — DESIGN_TOKENS 승계
- 법적 고지: 상호, 대표자, 주소, 전화, 이메일, 사업자등록번호
- 개인정보 처리방침 링크 (`/privacy`)

> ⚠️ **디렉터 확인 필요:** Header/Footer의 세부 브레이크포인트별 동작, Service 드롭다운 2단계 구조, 모바일 메뉴 애니메이션 방식은 아직 미정.

---

## 3. [확정] SEO 및 이미지 규격

### 3.1 이미지 3슬롯 시스템 — 전 문서 일치, 확정

| 항목 | 규격 |
|:--|:--|
| 비율 | 16:9 가로 (고정) |
| 슬롯 수 | 3개 (hero / start / summary) |
| hero | 개회/의식화 — 시작 직전의 긴장 |
| start | 구조/동기화 — 팀이 하나로 움직이는 순간 |
| summary | 종결/완결 — 과정을 끝낸 후의 상태 |

**동작 규칙:**

| 환경 | 동작 | Tailwind/JS 참고 |
|:--|:--|:--|
| 모바일 | 자동 슬라이드 3.5s, 터치 시 정지, 화면 이탈 시 정지 | IntersectionObserver + setInterval |
| 데스크톱 | 자동 전환 **금지**, 수동 네비게이션만 | 화살표/도트 UI |

**이미지 콘텐츠 원칙:**
- 실사진 우선, 스톡/AI는 예외적 보조
- **허용:** 전신 사용, 긴장된 집중, 반복 리듬, 통제된 폭발
- **금지:** 웃음 위주, 가벼운 체험, 개인 영웅, 정적 시설

> ⚠️ **디렉터 확인 필요:** `prefers-reduced-motion` 존중 여부 (DEV_SPEC_VALIDATION Q4), 이미지 네이밍/버전 규칙 (미결 체크리스트 D항).

### 3.2 SEO/OG 규격 — DEV_SPEC.md v1.2 기준 확정

| 항목 | 규격 |
|:--|:--|
| Title | 한글 28자 내외 |
| Description | 한글 80자 내외, 설명·나열 금지 |
| OG Type | website |
| OG Locale | ko_KR |
| OG Image | 16:9, 페이지 히어로 우선, `/public/og/` 경로 |
| H1 규칙 | 페이지당 1개, Hero 메인 카피 = H1 |
| Hero 구성 | H1 + 서브 1줄, CTA는 Home/Service Hub만 |
| Canonical | `https://rowingpro.co.kr{pathname}` |
| robots | 기본 index, follow |

**URL 정규화 (DEV_SPEC.md v1.2):**
- 표준 도메인: `https://rowingpro.co.kr` (non-www)
- www → 301 redirect
- Trailing slash: 없음 (`/about` O, `/about/` X → 301)

**sitemap.xml:**
- 위치: `/public/sitemap.xml`
- 포함: 전 페이지 (404 제외)
- 우선순위: Home 1.0, 나머지 0.8

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://rowingpro.co.kr/sitemap.xml
```

### 3.3 PDF 인쇄 정책 — 도입 보류 (설계 훅만 예약)

| 항목 | 결정 |
|:--|:--|
| 도입 여부 | **보류** (디렉터 결정 대기) |
| 출력 허용 | 섹션 3(요약 개요), 4(프로그램 개요), 5(구조/운영 요약) |
| 출력 비허용 | 히어로, 이미지, 강도, FAQ, CTA |
| 버튼 위치 | 섹션 5 하단 (중·하단), CTA와 분리 |
| 인쇄 규칙 | 워터마크/푸터(출처·페이지명·날짜), 이미지 최소화 |

---

## 4. [확정] IA 정합성 비교

### 4.1 문서별 IA 비교표

| 항목 | 02_ARCHITECTURE (현재 정본) | DEV_SPEC.md v1.2 (레거시) | dev_spec.md v1.1 (레거시) |
|:--|:--|:--|:--|
| 총 페이지 | **13** | 12 + 미정 | 11 |
| GNB | 6메뉴 일치 | 6메뉴 일치 | 6메뉴 일치 |
| Service 1단계 | Corporate Hub만 | **5개 카테고리** | **5개 카테고리** |
| Corporate 하위 | 5카드 일치 | 5카드 일치 | 없음 (flat) |
| 나머지 카테고리 | **누락** | 미정 표시 | flat 5개 |
| Privacy/404 | 포함 | 포함 | 미포함 |

### 4.2 핵심 충돌: Service 구조

**현재 정본 (02_ARCHITECTURE.md):**
```
/service                       → Service Hub
/service/corporate             → Corporate Hub
/service/corporate/training    → 사원교육·조직개발
/service/corporate/teambuilding → 팀빌딩·협업
/service/corporate/leadership  → 리더십
/service/corporate/event       → 행사·체육대회
/service/corporate/wellness    → 건강·웰니스
```

**레거시 DEV_SPEC.md v1.2의 전체 범위:**
```
/service                       → Service Hub
/service/corporate             → 기업·조직 (허브) ← 하위 5카드 있음
/service/school-youth          → 학교·청소년 ← 미정
/service/event                 → 스포츠 이벤트·행사 ← 미정
/service/club-general          → 클럽·일반 ← 미정
/service/family                → 가족 체험 ← 미정
```

**판정:**
- 현재 정본의 13페이지는 **기업·조직 MVP 범위**로 정확함
- 레거시에서 정의한 나머지 4개 카테고리 (school-youth, event, club-general, family)는 현재 정본에 **명시적으로 "미정/향후" 표시가 없음**
- 이들의 존재 자체가 누락된 것인지, 의도적 축소인지 디렉터 확인 필요

### 4.3 Programs vs Service 관계

- 미결 체크리스트에서 **"Programs 페이지 목적: Service와의 관계·중복 회피 기준 미기재"** 지적
- 현재까지 어떤 문서에서도 Programs와 Service의 관계가 명확히 정의되지 않음
- **디렉터 결정 필요**

### 4.4 IA 최종 확정안 (제안)

```
현재 구현 범위 (13페이지):
├── Home (/)
├── About (/about)
├── Programs (/programs)             ← 목적 정의 필요
├── Service Hub (/service)
│   └── Corporate Hub (/service/corporate)
│       ├── Training (/service/corporate/training)
│       ├── Teambuilding (/service/corporate/teambuilding)
│       ├── Leadership (/service/corporate/leadership)
│       ├── Event (/service/corporate/event)
│       └── Wellness (/service/corporate/wellness)
├── Track Record (/track-record)     ← 네이밍 미결
├── Contact (/contact)
├── Privacy (/privacy)
└── 404 (/404)

향후 확장 예정 (미정, 디렉터 결정 시):
├── /service/school-youth          → 학교·청소년
├── /service/event                 → 스포츠 이벤트·행사
├── /service/club-general          → 클럽·일반
└── /service/family                → 가족 체험
```

---

## 5. [특이사항] 레거시 폐기/변경 항목 리스트

### 5.1 완전 폐기 항목

| # | 레거시 항목 | 출처 | 폐기 이유 |
|:--|:--|:--|:--|
| 1 | Sky Blue 컬러 시스템 (`#0EA5E9` 중심) | DESIGN_TOKENS | Draft 03에서 Dark+Neon으로 전면 교체 |
| 2 | Rose 포인트 컬러 (`#F43F5E`) | DESIGN_TOKENS | Draft 03 팔레트에 부재 |
| 3 | Navy Dark/Navy 구분 (`#0F172A`/`#1E293B`) | DESIGN_TOKENS | Deep `#05080F`로 통합 |
| 4 | 화이트 ↔ 다크 섹션 교차 패턴 | DESIGN_TOKENS | 전면 다크 + 글라스모피즘으로 대체 |
| 5 | Pretendard-only 타이포 (Heading 포함) | DESIGN_TOKENS | Heading → Readex Pro로 교체 |
| 6 | "블루 2 : 화이트 2 : 다크 2" 비율 | DESIGN_TOKENS | 다크 배경 지배적, 비율 무의미 |
| 7 | 버튼 3종 색상값 (Cyan Light/White+Sky/Rose) | DESIGN_TOKENS | Draft 03 Neon 기반으로 재정의 필요 |
| 8 | "오렌지/레드 포인트" 색상 방향 | 02. DESIGN.md | Draft 03에서 Cyan Neon + Cobalt로 확정 |
| 9 | Phase 1~3 구현 체크리스트 (2026-02-04) | DESIGN_TOKENS | Session 09 저품질 코드 연관, 전면 재작성 예정 |
| 10 | DALL-E 3 / Gemini 이미지 생성 전략 | 02. DESIGN.md | 실사진 우선 원칙으로 대체 |

### 5.2 승계 항목 (값은 Draft 03에 맞춰 조정)

| # | 레거시 항목 | 출처 | 승계 내용 |
|:--|:--|:--|:--|
| 1 | Spacing 시스템 | DESIGN_TOKENS | 섹션 py-16~24, 요소 space-y-8, 카드 p-6, Container max-w-7xl |
| 2 | Breakpoints | DESIGN_TOKENS | Tailwind 기본 (sm 640, md 768, lg 1024, xl 1280, 2xl 1536), Mobile First |
| 3 | 타이포 크기 스케일 | DESIGN_TOKENS | Hero H1 48/72px 등 (Draft 03 검증 필요) |
| 4 | 버튼 계층 구조 | DESIGN_TOKENS | Primary/Secondary/Accent 3계층 (색상은 Draft 03 기준) |
| 5 | 로고 시스템 | DESIGN_TOKENS | Header h-10, Footer h-8, SVG, 중복 텍스트 제거 |
| 6 | CTA 희소성 원칙 | DESIGN_TOKENS | 페이지당 2~3개 제한 |
| 7 | SEO/OG 전체 정책 | DEV_SPEC.md v1.2 | Title/Desc/OG/canonical/sitemap/robots |
| 8 | URL 정규화 | DEV_SPEC.md v1.2 | non-www, no trailing slash, 301 redirect |
| 9 | Contact 폼 구조 | DEV_SPEC.md v1.2 | 필수 4 + 선택 3 + 숨김 자동, source_page 체계 |
| 10 | 가격 정책 프레임 | DEV_SPEC.md v1.2 | 체험부스형 공개, 나머지 문의 유도 |
| 11 | 5카드 공통 템플릿 (옵션 A) | 11_IA템플릿확정 | 10개 섹션, 인쇄 허용/비허용 구분 |
| 12 | 이미지 3슬롯 규칙 | 11_IA템플릿확정 | 16:9, hero/start/summary, 동작 규칙 |
| 13 | PDF 출력 범위 통제 | 11_IA템플릿확정 | 도입 시 섹션 3/4/5만 출력 |
| 14 | 유지보수 권한 구분 | 11_IA템플릿확정 | 단순 교체=운영자, 구조 변경=대표 승인 |
| 15 | 디자인 철학 | 02. DESIGN.md | "통제된 에너지", 타깃별 이중 읽기, 3D 원칙 |
| 16 | CTA 단일 채널 | 전 문서 | 모든 CTA → Contact 페이지 이동, 모달 금지 |
| 17 | 언어 정책 | DEV_SPEC.md v1.2 | 기본 국문, 영문 고정(Core Belief, 패키지명) |

### 5.3 3D/인터랙션 정합성

| 레거시 원칙 (02. DESIGN.md) | Draft 03 구현 | 판정 |
|:--|:--|:--|
| 3D 조건부 허용 (리듬 중심) | Wave 3D 물결 배경 | **정합** |
| 허용: 노의 반복 궤적, 물결·리듬·패턴 | Wave 형태 사용 | **정합** |
| 금지: 기술 과시, 메시지 분산 | 배경 보조 역할 유지 | **정합** |
| 원칙: "오브젝트는 말하지 않는다. 리듬만 보여준다." | Wave = 리듬 | **정합** |

---

## 6. 디렉터 결정 필요 항목 (Decision Required)

> 이하 항목은 레거시 전체를 통틀어 **아직 미결인 사안**입니다.

### 6.1 구조/IA 결정

| # | 항목 | 선택지 | 출처 |
|:--|:--|:--|:--|
| D1 | 나머지 4개 카테고리 포함 시기 | (a) 현재 IA에 "미정" 표기 추가 / (b) 완전 제외 | DEV_SPEC v1.2 |
| D2 | Programs vs Service 관계 | (a) Programs=인도어/아웃도어 / (b) Programs=개요, Service=상세 / (c) 기타 | 미결 체크리스트 |

### 6.2 콘텐츠/네이밍 결정

| # | 항목 | 선택지 | 출처 |
|:--|:--|:--|:--|
| D3 | Track Record 네이밍 | (a) "Track Record" 유지 / (b) "실적" / (c) "걸어온 길" | DEV_SPEC v1.2 |
| D4 | Home 대문 문구 | 시안: "ROWING = TEAMWORK" — 확정인가? | 미결 체크리스트 |
| D5 | About 실명/경력 공개 범위 | CEO 결정 대기 | 미결 체크리스트 |
| D6 | 패키지 네이밍 (SIMPLE/CORE/PRO/MASTER) | (a) 유효 / (b) 폐기 | DEV_SPEC v1.2 |

### 6.3 기능/정책 결정

| # | 항목 | 선택지 | 출처 |
|:--|:--|:--|:--|
| D7 | Event 가격 (200만원) 웹 노출 | (a) 노출 / (b) 문의 유도 | DEV_SPEC v1.2 |
| D8 | PDF 인쇄 최종 도입 | (a) 도입 / (b) 보류 유지 | 11_IA템플릿확정 |
| D9 | OG 전용 이미지 제작 | (a) 히어로 재사용 / (b) 전용 제작 | 미결 체크리스트 |
| D10 | Contact 폼 성공/실패 문구 | 미확정 | 미결 체크리스트 |
| D11 | 접근성 최소 기준 (WCAG AA?) | 미확정 | 미결 체크리스트, Q19 |
| D12 | prefers-reduced-motion 존중 | (a) 필수 / (b) 권장 | Q4 |

---

## 7. 다음 단계 권고

본 보고서의 분석 결과를 바탕으로, 디자인 시스템 LOCKED 전환을 위해 다음 순서를 권고합니다:

1. **디렉터 D1~D12 결정** — 미결 사항 해소
2. **Draft 03 시안 코드 정밀 토큰 추출** — 실제 px값, 간격, 글라스모피즘 수치 확인 (Analyst 역할)
3. **02_ARCHITECTURE.md 디자인 시스템 섹션 확장** — 본 보고서의 확정/승계 항목 반영
4. **디렉터 승인 후 STATUS: LOCKED 전환**

---

**보고 종료. 디렉터 검토를 요청드립니다.**
