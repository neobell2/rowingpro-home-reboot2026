# WO_BUILDER_IA_TRANSITION — IA 14페이지 전환 구현

**발행:** PM / Gemini (SESSION_46D) + PM / Sonnet (SESSION_46L)
**수신:** Builder (GPT Codex 주 / Claude Sonnet 4.6 검수)
**일시:** 2026-02-21 (초안) / 2026-02-24 (최종 발행)
**상태:** [STATUS: ISSUED] — Codex+Sonnet 하이브리드 작업
**근거:** `docs/reports/SESSION_46C_ARCHITECT_OPUS.md` BL-01~BL-12 + AD-02 URL 권고 + D-042 (다원화 및 상호 보완 운용)

---

## 선행 조건 (완료 확인)

- [x] DD-01=A: URL 경로 `/business/` + `/life/` 확정
- [x] PM-01: D-040 등록 완료 (03_DECISIONS.md)
- [x] PM-02: 02_ARCHITECTURE.md 14페이지 IA 갱신 완료
- [x] PM-03: 01_PROJECT_CONTEXT.md 14페이지 반영 완료

---

## 소비자

- **소비 환경:** Astro 빌드 시스템 (Node 22, `npm run build`)
- **기존 산출물 대조:** 현재 `src/pages/` 17페이지 기반 구조 → 14페이지로 전환

---

## URL 리디렉트 정책

| 구 URL | 신 URL |
|:--|:--|
| `/programs` | `/` (Index로) |
| `/service` | `/life` |
| `/service/corporate` | `/business` |
| `/service/corporate/training` | `/business/hrd` |
| `/service/corporate/teambuilding` | `/business/hrd` |
| `/service/corporate/leadership` | `/business/hrd` |
| `/service/corporate/event` | `/business/event` |
| `/service/corporate/wellness` | `/business/wellness` |
| `/service/school-youth` | `/life/school-youth` |
| `/service/event` | `/life/sports-event` |
| `/service/club-general` | `/life/club` |
| `/service/family` | `/life/family` |

---

## TASK 1 — 네비게이션 변경

### BL-01: Header.astro 네비 변경

```
변경 전: Home | About | Programs | Service | History | Contact
변경 후: Home | About | 비즈니스 | 라이프 | History | Contact

navItems 배열:
  - { label: 'Home', href: '/' }
  - { label: 'About', href: '/about' }
  - { label: '비즈니스', href: '/business' }
  - { label: '라이프', href: '/life' }
  - { label: 'History', href: '/history' }
  - { label: 'Contact', href: '/contact' }
```

### BL-02: Footer.astro Quick Links 변경

```
삭제: /programs 링크
추가: /business (비즈니스), /life (라이프) 링크
```

---

## TASK 2 — 페이지 파일 재편

### BL-03: programs.astro 삭제

```
삭제 대상: src/pages/programs.astro
```

### BL-04: Training+Teambuilding+Leadership → hrd.astro

```
삭제: src/pages/service/corporate/training.astro
삭제: src/pages/service/corporate/teambuilding.astro
삭제: src/pages/service/corporate/leadership.astro
신규: src/pages/business/hrd.astro (ServicePage 템플릿 기반)
  - Content: src/content/pages/service-corporate-training.md (기존 활용 or 신규)
  - 세 페이지 내용 통합 (HRD 교육 통합 페이지)
```

### BL-05: service/index.astro → life/index.astro (라이프 허브)

```
삭제: src/pages/service/index.astro
신규: src/pages/life/index.astro (허브 페이지)
  - 카드: 학교·청소년 / 스포츠이벤트 / 클럽·일반 / 가족
  - 각 카드 → /life/* URL로 연결
```

### BL-06: service/corporate/index.astro → business/index.astro (비즈니스 허브)

```
삭제: src/pages/service/corporate/index.astro
신규: src/pages/business/index.astro (허브 페이지)
  - 카드: HRD 교육 / 기업행사 / 임직원건강복지
  - 각 카드 → /business/* URL로 연결
```

### BL-07: 나머지 서비스 페이지 이동

```
이동+리네임:
  service/corporate/event.astro    → business/event.astro
  service/corporate/wellness.astro → business/wellness.astro
  service/school-youth.astro       → life/school-youth.astro
  service/event.astro              → life/sports-event.astro
  service/club-general.astro       → life/club.astro
  service/family.astro             → life/family.astro

Content Collections 연결 업데이트 (각 파일 내부 slug 참조 확인)
```

---

## TASK 3 — Content Collections 정비

### BL-07 연동: src/content/pages/*.md 대응

```
삭제: programs.md
삭제: service-corporate-training.md, service-corporate-teambuilding.md, service-corporate-leadership.md
신규: business-hrd.md (3개 통합 내용, HRD 교육 허브)
신규: business-hub.md (비즈니스 허브 카드 내용)
신규: life-hub.md (라이프 허브 카드 내용)
리네임: service-corporate-event.md → business-event.md
리네임: service-corporate-wellness.md → business-wellness.md
리네임: service-school-youth.md → life-school-youth.md
리네임: service-event.md → life-sports-event.md
리네임: service-club-general.md → life-club.md
리네임: service-family.md → life-family.md
```

### BL-08: config.ts 스키마 강화

```
변경: .passthrough() 제거
추가: 페이지 유형별 필수 필드 zod 타입 강화
  - heroTitle: z.string()
  - heroSubtitle: z.string()
  - (Optional) hubCards: z.array(...) (허브 페이지용)
```

---

## TASK 4 — Index + CTA + SEO

### BL-09: index.astro 7섹션 활성화

```
index.md 주석 해제 (디렉터 콘텐츠 입력 후)
index.astro 섹션 구현:
  1. 히어로 (기존)
  2. 통계 (13년, 500회+, 30,000명+, ZERO Accident)
  3. 클라이언트 롤링배너 (로고 30개 — WO_MEDIA_LOGO_COLLECTION 완료 후)
  4. 제공방식 (인도어/수상/부스형/MIX 카드)
  5. 서비스 미리보기 (/business, /life 진입점)
  6. 왜 로잉프로 (핵심 가치 4개)
  7. CTA

⚠️ 로고 30개 수집 전까지 롤링배너 섹션은 플레이스홀더 처리
```

### BL-10: sitemap.xml 교정

```
trailing slash 제거 (astro.config trailingSlash: 'never'와 일치)
14페이지 URL 기준으로 재생성
```

### BL-11: index.astro CTA 링크 교정

```
변경: /service → #services (Index 내 서비스미리보기 섹션 앵커)
```

---

## TASK 5 — 리디렉트 설정

### BL-12: 구 URL → 신 URL 301 리디렉트

```
방식: public/_redirects (Cloudflare Pages 형식)

/programs / 301
/service /life 301
/service/corporate /business 301
/service/corporate/training /business/hrd 301
/service/corporate/teambuilding /business/hrd 301
/service/corporate/leadership /business/hrd 301
/service/corporate/event /business/event 301
/service/corporate/wellness /business/wellness 301
/service/school-youth /life/school-youth 301
/service/event /life/sports-event 301
/service/club-general /life/club 301
/service/family /life/family 301
```

---

## 완료 기준

- [ ] BL-01: Header 6메뉴 변경 확인
- [ ] BL-02: Footer Quick Links 변경 확인
- [ ] BL-03: programs.astro 삭제
- [ ] BL-04: hrd.astro 생성 (3페이지 통합)
- [ ] BL-05~06: business/index, life/index 허브 전환
- [ ] BL-07: 서비스 하위 페이지 전부 이동+리네임
- [ ] BL-08: config.ts 스키마 강화
- [ ] BL-09: Index 7섹션 구조 구현 (로고는 플레이스홀더)
- [ ] BL-10: sitemap.xml 14페이지 기준 재생성
- [ ] BL-11: CTA 링크 교정
- [ ] BL-12: _redirects 파일 생성
- [ ] `npm run build` Exit 0
- [ ] Builder 세션 보고서 작성

---

## QA 프로토콜 — Sonnet 검수 필수

**작업 흐름:** Codex 구현 → Sonnet 검수 → 승인 후 커밋

### Sonnet 검수 항목

1. **디자인 토큰 일관성**
   - `02_ARCHITECTURE.md` 컬러/타이포/간격 시스템 준수
   - 글라스모피즘 적용 일관성 (허브 카드, 버튼)
   - 히어로 타이틀 White 확인

2. **리디렉트 규칙 완전성**
   - 12개 URL 매핑 전부 `public/_redirects`에 존재
   - 형식: Cloudflare Pages 호환 (`/old /new 301`)

3. **빌드 성공 확인**
   - `npm run build` Exit 0
   - 14페이지 전부 생성 확인

4. **링크 무결성**
   - Header/Footer 링크 404 없음
   - 허브 페이지 카드 링크 정확성
   - Index 섹션 앵커 링크 유효성

5. **Content Collections 스키마**
   - `src/content/config.ts` 타입 준수
   - 필수 필드 누락 없음 (heroTitle, heroSubtitle 등)

6. **네비게이션 구조**
   - GNB 6메뉴: Home | About | 비즈니스 | 라이프 | History | Contact
   - Footer Quick Links: /business, /life 포함 확인

**검수 실패 시:** Codex에게 수정 요청 후 재검수

---

## 자동 해소 항목 (별도 조치 불요)

| 항목 | 사유 |
|:--|:--|
| S-04 programs.md CTA `/service` | BL-03 파일 삭제로 자동 해소 |
| L-04 service-corporate-hub.md 링크 | BL-07 파일 변환으로 자동 해소 |
