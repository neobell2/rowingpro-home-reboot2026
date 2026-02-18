# WO_BUILDER_CONTENT_COLLECTIONS_IMPL

**발행:** PM (Claude Sonnet 4.5)
**수신:** Builder (Claude Sonnet 4.5)
**일시:** 2026-02-18
**우선순위:** 긴급 (콘텐츠 확정 작업 착수 전 선행 필수)
**상태:** [STATUS: ISSUED]

---

## 1. 배경

D-032 결정에 따라 Content Collections를 Phase 3 콘텐츠 작업 전에 선행 구현한다.
현재 17페이지 텍스트가 `.astro` 파일에 하드코딩되어 있어, 디렉터가 텍스트를 수정하려면
코드를 직접 편집해야 하는 구조적 문제가 있다.

---

## 2. 작업 범위

### TASK 1 — Content Collections 구조 구축

**`src/content/config.ts` 신설**
- `pages` 컬렉션 (type: 'content', .md) — 17페이지
- `common` 컬렉션 (type: 'data', .yaml) — 공통 데이터

**`src/content/pages/` 신설 — 17개 .md 파일**
현재 `.astro` 파일의 텍스트를 그대로 이전 (내용 변경 금지):

```
index.md           (Home)
about.md           (About)
programs.md        (Programs)
contact.md         (Contact)
history.md         (History)
privacy.md         (Privacy)
service-hub.md     (Service Hub)
service-club-general.md
service-event.md   (Sports Event / 체험부스)
service-family.md
service-school-youth.md
service-corporate-hub.md
service-corporate-event.md
service-corporate-leadership.md
service-corporate-teambuilding.md
service-corporate-training.md
service-corporate-wellness.md
```

**`src/content/common/` 신설**
- `site.yaml` — Footer 법인정보, 대표번호, 이메일, 주소
- `faq.yaml` — FAQ 데이터 (현재 하드코딩된 것)

**스키마 설계 원칙:**
- 세부 스키마는 Builder 재량 (17페이지 실제 코드 구조 기반)
- `programs.md` 스키마: 4개 카드 구조 (인도어/수상/부스형/MIX) — D-037 확정
- `service-event.md` 스키마: 티어 배열 포함 (SIMPLE/CORE/PRO/MASTER)

---

### TASK 2 — 17개 .astro 파일 리팩터링

- `getCollection()` / `getEntry()` API로 Content Collections 데이터 소비
- 기존 하드코딩 텍스트 제거, 컬렉션 참조로 교체
- 시각적 출력 변경 금지 (레이아웃/CSS/클래스 변경 금지)

---

### TASK 3 — 즉시 처리 항목 (기술 부채)

아래 4건을 이번 WO에 함께 처리한다:

| 항목 | 작업 내용 |
|:--|:--|
| Lucide Icons `@latest` CDN | 특정 버전으로 고정 (예: `@0.460.0`) |
| 외부 CDN 3개 (Google Fonts, jsdelivr, unpkg) | 버전 고정 또는 로컬 번들링 |
| `BaseLayout.astro` | 미사용 레거시 파일 삭제 |
| 빌드 명령 `npx --yes node@22` | 로컬 Node 바이너리 직접 참조로 교체 |

---

## 3. 제약 조건

- 현재 텍스트 그대로 이전 (내용 변경 금지)
- 디자인 시스템 CSS/클래스 변경 금지 (디자인 시스템 LOCKED)
- 새 npm 패키지 추가 금지 (Astro 내장 Content Collections 기능만)
- `npm run build` Exit 0 필수

---

## 4. 완료 기준

- [ ] `src/content/config.ts` 생성 (스키마 정의)
- [ ] `src/content/pages/` 17개 .md 파일 생성
- [ ] `src/content/common/` 공통 데이터 생성
- [ ] 17개 `.astro` 파일 Content Collections API 소비로 전환
- [ ] 즉시 처리 4건 완료
- [ ] `npm run build` Exit 0 확인
- [ ] 시각적 출력 변화 없음 확인

---

## 5. 참고 문서

- `03_DECISIONS.md` D-032 — Content Collections 설계 방향
- `03_DECISIONS.md` D-034 — 상품/가격 표기 정책 (service-event.md 스키마 참고)
- `03_DECISIONS.md` D-037 — Programs 페이지 구조 (programs.md 스키마 참고)
- `docs/reports/SESSION_32_ARCHITECT_OPUS.md` — Architect 설계 검토 결과
- `02_ARCHITECTURE.md` — IA 17페이지 목록 및 디자인 시스템

---

## 6. 완료 보고

완료 시 보고서 작성:
`docs/reports/SESSION_XX_BUILDER_SONNET.md`

내용 포함:
1. 구현된 스키마 구조 요약
2. 17페이지 리팩터링 완료 목록
3. 즉시 처리 4건 완료 확인
4. `npm run build` 결과
5. 다음 단계 (디렉터 .md 파일 텍스트 입력 가능 상태 확인)

---

**PM 서명:** Claude Sonnet 4.5 (SESSION_33)
**디렉터 승인 대기**
