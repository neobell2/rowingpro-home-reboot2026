# 개발 스펙

**버전:** v1.2
**일자:** 2026-02-03
**통합:** DEV_HANDOFF + DEV_CONTENT_SPEC + DESIGN
**최종 수정:** IA 재구조화 (기업·조직 > 5개 카드 적용)

---

## Version History

| 버전   | 일자         | 내용                                                   |
| ---- | ---------- | ---------------------------------------------------- |
| v1.2 | 2026-02-03 | IA 재구조화: 기업·조직 > 5개 카드 적용, 나머지 미정 표시 |
| v1.1 | 2026-02-03 | Privacy/404 IA 추가, SEO 파일 실체, URL 정규화 정책 보완 |
| v1.0 | 2026-02-03 | DEV_HANDOFF + DEV_CONTENT_SPEC + DESIGN 통합 초안     |

---

## 1. IA 구조 (12페이지)

### GNB 메뉴 (6개)
```
Home | About | Programs | Service | Track Record | Contact
```

### Service 구조

#### 1-1. Service 허브
- `/service` → Service (허브, 안내 페이지)

#### 1-2. Service 하위 (5개 카테고리)

**1단계: Service 카테고리**
| URL 코드 | 메뉴명 | 상태 |
|------|--------|------|
| service--corporate | 기업·조직 | ✅ 완성 |
| service--school-youth | 학교·청소년 | ⏳ 미정 |
| service--event | 스포츠 이벤트·행사 | ⏳ 미정 |
| service--club-general | 클럽·일반 | ⏳ 미정 |
| service--family | 가족 체험 | ⏳ 미정 |

**2단계: 기업·조직 하위 카드 (5개) - 완성**
```
/service/corporate                    → 기업·조직 (허브)
  ├─ /service/corporate/training      → 사원교육·조직개발
  ├─ /service/corporate/teambuilding  → 팀빌딩·협업
  ├─ /service/corporate/leadership    → 리더십
  ├─ /service/corporate/event         → 행사·체육대회
  └─ /service/corporate/wellness      → 건강·웰니스
```

**3단계: 나머지 카테고리 하위 구조 - 미정**
```
/service/school-youth    → (향후 설계)
/service/event           → (향후 설계)
/service/club-general    → (향후 설계)
/service/family          → (향후 설계)
```

### 전체 URL 구조
```
/                              → Home
/about                         → About
/programs                      → Programs
/service                       → Service (허브)
/service/corporate             → 기업·조직
/service/corporate/training    → 사원교육·조직개발
/service/corporate/teambuilding → 팀빌딩·협업
/service/corporate/leadership  → 리더십
/service/corporate/event       → 행사·체육대회
/service/corporate/wellness    → 건강·웰니스
/service/school-youth         → 학교·청소년 (미정)
/service/event                → 스포츠 이벤트·행사 (미정)
/service/club-general         → 클럽·일반 (미정)
/service/family               → 가족 체험 (미정)
/track-record                 → Track Record
/contact                      → Contact
/privacy                      → Privacy (개인정보 처리방침)
/404                          → 404 (페이지 없음)
```

---

## 2. 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | Astro |
| 스타일링 | Tailwind CSS |
| 배포 | Cloudflare Pages |
| 버전관리 | GitHub |

---

## 3. Service 공통 템플릿 (옵션 A)

```
1. 히어로 (카드명 + 한줄 정의)
2. 개회 장면 (이미지 hero)
3. 요약 개요
4. 프로그램 개요
5. 구조/운영 요약
6. 강도·난이도
7. 현장 장면 (이미지 start, summary)
8. FAQ
9. PDF 버튼 (보류)
10. CTA: 문의하기
```

**적용:** Service 하위 5개 페이지만

---

## 4. 이미지 규칙

### 3슬롯 시스템
| 슬롯 | 의미 | 장면 |
|------|------|------|
| hero | 개회/의식화 | 시작 직전의 긴장 |
| start | 구조/동기화 | 팀이 하나로 움직이는 순간 |
| summary | 종결/완결 | 과정을 끝낸 후의 상태 |

### 규격
- 비율: 16:9 가로 (고정)
- 모바일: 자동 슬라이드 (3.5s, 터치/이탈 정지)
- 데스크톱: 자동 전환 금지

### 금지/허용
- **금지:** 웃음 위주, 가벼운 체험, 개인 영웅, 정적 시설
- **허용:** 전신 사용, 긴장된 집중, 반복 리듬, 통제된 폭발

---

## 5. 브랜드

### Core Belief
```
IN THE SAME BOAT
```

### Brand Definition
```
로잉프로는 조정(Rowing) 교육 전문회사입니다.
```

### 핵심 차별점 (우선순위)
1. **선수 출신만 채용** - 스탭/알바 포함, 인건비 3배
2. **13년 무사고** - 2013년부터 무사고 운영
3. **1보트 1코치 탑승** - 진짜 동승 지도

---

## 6. 톤앤매너

### 제거
- 설명, 비장함, 이벤트성, 격식주의, 웃음 위주

### 지향
- 설명 최소, 장면 중심
- 관리되고 통제된 스포츠
- 훈련을 다루는 사람의 태도
- 통제된 폭발

### 기준
- 말로 납득시키려는 순간 = 잘못된 방향
- 이미지는 "보는 즉시 이해되는가"만 통과

---

## 7. 디자인 철학

### 핵심: 통제된 에너지 (Disciplined Energy)
- 동기화: 팀원들의 움직임이 하나로
- 수평 이동: 일직선으로 나아가는 힘
- 지속되는 리듬: 반복되는 노 젓기 패턴

### B2B가 읽는 방식
- 통제력, 신뢰, 안정성

### 일반 고객이 읽는 방식
- 역동성, 접근성, 전문성

---

## 8. Contact 폼

### 필수 (4개)
- 성함, 회사, 이메일, 연락처

### 선택 (3개)
- 부서, 직함/직급, 홈페이지

### 숨김 (자동)
- source_page, referrer, timestamp, user_agent

### source_page 코드
```
home, about, programs, service
service--corporate, service--school-youth, service--event
service--club-general, service--family
track-record, contact, unknown
```

---

## 9. CTA 전략

- **단일 채널:** 문의하기
- **패키지별 차이 없음**
- **source_page 자동 전달**

---

## 10. 패키지 네이밍

```
SIMPLE / CORE / PRO / MASTER
```
- 성격: 기준점(anchor), 계약 조건 아님
- 가격: CEO 결정 대기

---

## 11. 법적 고지 (Footer)

- 상호, 대표자, 주소, 전화, 이메일, 사업자등록번호
- 개인정보 처리방침 링크 (`/privacy`)

---

## 12. 구현 우선순위

### Phase 1: 골격
- Astro 프로젝트 + Tailwind
- 레이아웃 (헤더/푸터)
- 드롭다운 메뉴

### Phase 2: 페이지
- 메인 6개 구조
- Service 공통 템플릿
- 이미지 3슬롯 컴포넌트

### Phase 3: 기능
- Contact 폼
- 반응형
- SEO 기본

### Phase 4: 콘텐츠
- 텍스트 주입
- 이미지 배치

### Phase 5: 배포
- Cloudflare Pages
- 도메인 연결

---

## 13. 상품 가격 정책 (CEO 확정)

### 13.1 패키지 정의

**체험부스형 (Event Package)**
- 가격: 200만원 + VAT
- 스펙: 머신 10대, 강사 2인
- 거리: 서울경기
- 홈페이지: ✅ 가격 표기 (Service > 스포츠 이벤트·행사)

### 13.2 별도 상담 상품 (패키지 미적용)

| 상품 | 내부 기준 | 홈페이지 표기 |
|------|---------|---------|
| **인도어** | 1인 5만원 (2h, 최소 20인, 머신 4대, 강사 1인) | ❌ 문의 유도 |
| **아웃도어** | 1인 5만원 | ❌ 문의 유도 |

### 13.3 Contact 폼 source_page 코드

```
home, about, programs, service (허브)

# 기업·조직 (완성)
service--corporate (기업·조직 허브),
service--corporate--training (사원교육·조직개발),
service--corporate--teambuilding (팀빌딩·협업),
service--corporate--leadership (리더십),
service--corporate--event (행사·체육대회 = 체험부스형 패키지·가격 공개),
service--corporate--wellness (건강·웰니스 = 인도어/아웃도어 문의),

# 나머지 카테고리 (미정)
service--school-youth (학교·청소년 - 미정),
service--event (스포츠 이벤트·행사 - 미정),
service--club-general (클럽·일반 - 미정),
service--family (가족 체험 - 미정),

track-record, contact, unknown
```

---

## 14. 미결 사항

| 항목 | 상태 |
|------|------|
| PDF 인쇄 기능 | CEO 결정 대기 |
| Track Record 네이밍 | 검토 중 |
| 창업주 노출 범위 | 검토 중 |

---

## 15. System / SEO / Layout Rules

### 15.1 SEO & OG 정책

- **Global Default:** 전 페이지 공통 메타/OG 1세트 적용
- **Page Override:** Home, Service 하위 5개, Track Record

### 15.2 Meta 기준

- **Title:** 한글 기준 28자 내외
- **Description:** 한글 기준 80자 내외, 설명·나열 금지

### 15.3 OG 규칙

- **Type:** website
- **Locale:** ko_KR
- **Image:** 16:9, 페이지 히어로 우선
- **경로:** `/public/og/` 표준 사용

### 14.4 H1 규칙

- 페이지당 H1 1개
- Hero 메인 카피 = H1

### 14.5 Hero 영역 구성

- 필수: H1 + 서브 1줄
- CTA 포함 여부: Home/Service 허브만 허용

### 14.6 CTA / Contact 호출

- 모든 CTA는 Contact 페이지 이동
- 모달 방식 금지

### 14.7 Footer 규칙

- 전 페이지 고정 노출
- 예외 없음

### 14.8 시스템 페이지

- 404, Privacy 페이지는 톤 최소화
- CTA 선택 노출

### 14.9 언어 정책

- 기본 국문
- 영문 고정 허용: Core Belief, 패키지명

### 14.10 SEO 기술 기본

- canonical 기본 설정
- robots 기본 index, follow

### 14.11 페이지 식별자

- URL과 source_page 코드 1:1 매핑

### 14.12 SEO 파일 실체

**sitemap.xml**
- 위치: `/public/sitemap.xml`
- 포함: 전 페이지 (12개 + 404 제외)
- 갱신: 수동 (페이지 추가 시)
- 우선순위: Home 1.0, 나머지 0.8

**robots.txt**
- 위치: `/public/robots.txt`
- 내용:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://rowingpro.co.kr/sitemap.xml
  ```

### 14.13 URL 정규화 정책

**기준 도메인**
- 표준: `https://rowingpro.co.kr` (non-www)
- www 요청 시: 301 redirect to non-www

**Trailing Slash**
- 정책: 없음 (no trailing slash)
- 예: `/about` (O), `/about/` (X → 301 to `/about`)

**Canonical 설정**
- 모든 페이지: `<link rel="canonical" href="https://rowingpro.co.kr{pathname}" />`
- Service 하위: `/service/corporate` (하이픈 유지)

---

**콘텐츠 원고:** `docs/contents/`
