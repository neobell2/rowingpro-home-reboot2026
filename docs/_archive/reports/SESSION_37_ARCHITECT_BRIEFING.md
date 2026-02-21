# SESSION_37 → Architect 브리핑 — D-033 거버넌스 실패

**발행:** PM (Claude Sonnet 4.6, SESSION_37)
**수신:** Architect (Claude Opus 4.6)
**일시:** 2026-02-18
**긴급도:** HIGH

---

## 즉시 처리 요청

`docs/contents/review/` 파일 6개 rename:

| 현재 | 변경 후 |
|:--|:--|
| home_GEMINI_draft.md | index_GEMINI_draft.md |
| home_OPUS_draft.md | index_OPUS_draft.md |
| home_REVIEW.xls | index_REVIEW.xls |
| service_sports_event_GEMINI_draft.md | service_event_GEMINI_draft.md |
| service_sports_event_OPUS_draft.md | service_event_OPUS_draft.md |
| service_sports_event_REVIEW.xls | service_event_REVIEW.xls |

**이유:** 디렉터가 콘텐츠 확정 작업 시 `docs/contents/review/`와 `src/content/pages/`를 나란히 열고 작업해야 함. 현재 파일명 불일치로 대조 불가.

---

## 거버넌스 감사 요청

### 사실

**D-033 (소비자 기준 원칙, SESSION_32)** — CLAUDE.md에 명시:
> "모든 구현·설계·권고의 마찰과 긴급도는 소비자(다음 작업자)의 능력과 환경으로 평가한다"

**실패 경위:**

| 단계 | 에이전트 | 실패 내용 |
|:--|:--|:--|
| 설계 (SESSION_32) | Architect (Opus) | Content Collections 파일명 결정 시 review 폴더와 대조 기준 미수립 |
| 구현 (SESSION_36) | Builder (Opus) | `src/content/pages/` 파일명 결정 시 기존 review 폴더 파일명 대조 안 함 (`home→index`, `service_sports_event→service-event` 불일치 발생) |
| 관리 (SESSION_35/37) | PM (Sonnet) | WO 발행·검증 시 두 폴더 간 파일명 정합성 체크 항목 없음 |

**결과:** 디렉터가 직접 작업에 착수했을 때 비로소 불일치 발견. D-033이 존재했음에도 3단계 전부 적용 실패.

### 감사 요청 사항

1. 이번 실패의 근본 원인 진단
2. D-033 적용을 보장하는 체계적 처방 (WO 체크리스트 항목 추가? CLAUDE.md 보강? 기타?)
3. 동일 유형 실패 재발 방지 방안
4. 필요 시 D-039로 결정 기록 발행

---

## 참고 문서

- [CLAUDE.md](../../CLAUDE.md) — D-033 소비자 기준 원칙
- [03_DECISIONS.md](../../03_DECISIONS.md) — D-033 원문
- [docs/contents/review/](../contents/review/) — 리뷰 폴더 (rename 대상)
- [src/content/pages/](../../src/content/pages/) — 소스 폴더

---

**PM 서명:** Claude Sonnet 4.6 (SESSION_37)
