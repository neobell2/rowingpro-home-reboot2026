# WO_CONTENT_CONFIRMATION — 17페이지 콘텐츠 최종 확정

**발행:** PM (Claude Sonnet 4.6, SESSION_37)
**수신:** Director
**일시:** 2026-02-18
**상태:** [STATUS: ISSUED]

---

## 목표

17페이지 콘텐츠를 디렉터가 직접 최종 확정하고 `src/content/pages/*.md`에 반영한다.

---

## 배경

- SESSION_28~30: Gemini/Opus 드래프트 생산 완료 (각 17개)
- SESSION_30: docs/contents/review/ 비교시트 17종 생성 (Original / Gemini / Opus / Director Final 4열)
- SESSION_33: D-034 가격 정책, D-037 Programs 구조 확정
- SESSION_36: Content Collections 구축 완료 → `src/content/pages/*.md` 17개 파일이 실제 소비 소스

---

## 작업 방식

디렉터가 직접 `src/content/pages/*.md` 파일에 최종 카피를 입력하고, 완료 후 PM을 호출한다.

---

## TASK 1 — 비교 검토 (선택적)

참고 경로: `docs/contents/review/`
- 17개 페이지별 비교시트 (Original / Gemini / Opus / Director Final)
- 필요 시 참고하여 최종 카피 결정

---

## TASK 2 — 직접 입력

**수정 대상:** `src/content/pages/*.md` (17개 파일)

| 파일 | 페이지 |
|:--|:--|
| home.md | 홈 |
| about.md | 회사소개 |
| programs-indoor.md | 프로그램 - 인도어 |
| programs-water.md | 프로그램 - 수상 |
| programs-booth.md | 프로그램 - 부스형 |
| programs-mix.md | 프로그램 - MIX |
| service-corporate.md | 서비스 - 법인/단체 |
| service-event.md | 서비스 - 이벤트 |
| service-hrd.md | 서비스 - HRD |
| why-rowing.md | 왜 로잉인가 |
| why-us.md | 왜 로잉프로인가 |
| instructors.md | 강사진 |
| media.md | 미디어 |
| contact.md | 문의 |
| faq.md | FAQ |
| partners.md | 파트너 |
| landing.md | 랜딩 |

**제약 사항:**
- frontmatter 구조(키 이름) 변경 금지 — 값만 수정
- D-034 적용: 부스형 PRO급 200만+VAT 노출, 나머지 금액은 플레이스홀더 유지
- D-037 적용: Programs 4종 구조 유지 (인도어/수상/부스형/MIX)

---

## TASK 3 — PM 호출 및 검증

디렉터가 입력 완료 후 PM을 호출한다.

PM 수행:
1. 17개 파일 전수 확인 (내용 입력 여부, frontmatter 구조 이상 없음)
2. `npm run build` Exit 0 확인 요청 (Builder에 위임)
3. Work Order COMPLETED 처리
4. 04_CURRENT_STATE.md 갱신

---

## 완료 기준

- [ ] 17개 `src/content/pages/*.md` 최종 카피 반영
- [ ] frontmatter 구조 이상 없음
- [ ] `npm run build` Exit 0
- [ ] PM 검증 완료

---
