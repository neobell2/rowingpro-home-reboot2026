# WO_CONTENT_CONFIRMATION — 17페이지 콘텐츠 최종 확정

**발행:** PM (Claude Sonnet 4.6, SESSION_37)
**수신:** Director
**일시:** 2026-02-18
**상태:** [STATUS: IN PROGRESS] — TASK 1.5 완료, TASK 2 대기중

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

**review ↔ src 파일명 매핑 (구분자: 언더스코어 → 하이픈)**

| review 폴더 (`_REVIEW`) | src/content/pages/ | 비고 |
|:--|:--|:--|
| `about_REVIEW` | `about.md` | |
| `common_REVIEW` | *(common.yaml — 데이터 컬렉션)* | 페이지 아님 |
| `contact_REVIEW` | `contact.md` | |
| `history_REVIEW` | `history.md` | |
| `index_REVIEW` | `index.md` | |
| `programs_REVIEW` | `programs.md` | |
| `service_club_general_REVIEW` | `service-club-general.md` | |
| `service_corporate_event_REVIEW` | `service-corporate-event.md` | |
| `service_corporate_hub_REVIEW` | `service-corporate-hub.md` | |
| `service_corporate_leadership_REVIEW` | `service-corporate-leadership.md` | |
| `service_corporate_teambuilding_REVIEW` | `service-corporate-teambuilding.md` | |
| `service_corporate_training_REVIEW` | `service-corporate-training.md` | |
| `service_corporate_wellness_REVIEW` | `service-corporate-wellness.md` | |
| `service_event_REVIEW` | `service-event.md` | |
| `service_family_REVIEW` | `service-family.md` | |
| `service_hub_REVIEW` | `service-hub.md` | |
| `service_school_youth_REVIEW` | `service-school-youth.md` | |
| *(없음)* | `privacy.md` | 법적 고정 텍스트, 리뷰 불필요 |

---

## TASK 1.5 — SEO title/description 드래프트 생산 ✅ 완료 (SESSION_40)

**완료 일시:** 2026-02-19 (SESSION_40 Architect/Opus 4.6)

**실제 수행 방식 (원래 계획과 다름):**
SESSION_38 중단(앵커링 오염) → SESSION_40에서 방식 변경하여 실행

| 변형 | 방법 | 앵커링 방지 |
|:--|:--|:--|
| GPT | 기존 src 파일 원문 그대로 추출 | 원본 보존 |
| Gemini | `ai_studio_package/GEMINI_SEO_PROMPT_OUTPUT.md`에서 추출 | src 미접촉 |
| Opus1 | 클린 창작 — 파일 0개 읽음 | 완전 격리 |
| Opus2 | SESSION_29 Opus 본문 드래프트만 참조 | src 미접촉 |

**결과:** `src/content/pages/*.md` 16개 frontmatter에 아래 형식으로 병합 완료:
```yaml
# GPT title: [원문]
# Gemini title: [AI Studio 드래프트]
# Opus1 title: [V1 클린 창작]
# Opus2 title: [V2 본문 기반]
title: "[기존 GPT 값 — 변경 없음]"
# GPT desc: ...
# Gemini desc: ...
# Opus1 desc: ...
# Opus2 desc: ...
description: "[기존 GPT 값 — 변경 없음]"
```

**다음 단계:** 디렉터가 각 파일에서 최종 title/description 선택 후 나머지 주석 삭제 (TASK 2와 동시 진행 가능)

**대상:** 16개 완료 (privacy.md 제외 — 법적 고정 텍스트)

---

## TASK 2 — 직접 입력

**수정 대상:** `src/content/pages/*.md` (17개 파일)

| 파일 | URL 경로 |
|:--|:--|
| index.md | / (홈) |
| about.md | /about |
| programs.md | /programs |
| contact.md | /contact |
| history.md | /history |
| privacy.md | /privacy |
| service-hub.md | /service |
| service-event.md | /service/event |
| service-club-general.md | /service/club-general |
| service-family.md | /service/family |
| service-school-youth.md | /service/school-youth |
| service-corporate-hub.md | /service/corporate |
| service-corporate-training.md | /service/corporate/training |
| service-corporate-teambuilding.md | /service/corporate/teambuilding |
| service-corporate-leadership.md | /service/corporate/leadership |
| service-corporate-event.md | /service/corporate/event |
| service-corporate-wellness.md | /service/corporate/wellness |

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

- [x] SEO 4종 드래프트 생산 및 src 병합 완료 (TASK 1.5) — SESSION_40
- [ ] 디렉터 최종 title/description 선택 + 나머지 주석 삭제 (TASK 1.5 디렉터 단계)
- [ ] 17개 `src/content/pages/*.md` 최종 카피 반영 (TASK 2)
- [ ] frontmatter 구조 이상 없음
- [ ] `npm run build` Exit 0
- [ ] PM 검증 완료

---
