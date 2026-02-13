# 로잉프로 웹사이트 리부트 2026

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.2** | 2026-02-13 | 세션 시작을 Quick/Conditional/Full Start로 정합화 (자동 주입 문서량 최적화) |
| **v1.1** | 2026-02-12 | 운영 프로토콜 진입점을 v2(`CLAUDE.md`+5핵심)로 정합화 |
| v1.0 | 2026-02-10 | 최초 작성 |

**기술 스택:** Astro + Tailwind CSS + Cloudflare Pages
**현재 상태:** `04_CURRENT_STATE.md` 참고

---

## 🚀 빠른 시작

```bash
# 개발 서버 실행
npm run dev

# 브라우저 열기
# http://localhost:4321
```

---

## ✅ 운영 프로토콜 (SSOT)

- 이 프로젝트의 단일 규칙 원본(SSOT)은 `CLAUDE.md`입니다.
- 세션 시작/승인/관문(LOCKED/BASELINE) 규칙은 `CLAUDE.md`를 따르십시오.

---

## 📚 문서 구조

| 문서 | 용도 |
|------|------|
| **CLAUDE.md** | 마스터 규칙(SSOT) + 세션 프로토콜 |
| `01_PROJECT_CONTEXT.md` | 프로젝트 정체성/불변 기준 |
| `02_ARCHITECTURE.md` | IA/디자인 시스템/기술스택 |
| `03_DECISIONS.md` | 결정 기록(이유/대안/변경 가능 여부) |
| `04_CURRENT_STATE.md` | 현재 좌표(완료/진행중/이슈) |
| `05_NEXT_TASK.md` | 즉시 실행 지시서 |
| `docs/contents/` | 페이지별 콘텐츠 원고 |
| `docs/design/` | 디자인 시안 (Draft 01~10) |
| `docs/work_orders/` | 업무지시서(Work Order) |
| `docs/reports/` | 세션 보고서(로그) |
| `docs/_archive/` | 레거시 보관(비권위) |
| `docs/_trash/` | 삭제/격리 후보(비권위) |

---

## 📍 다음 세션 시작 시

```
@CLAUDE.md
# 기본(Quick Start): 04_CURRENT_STATE.md → 05_NEXT_TASK.md
# 필요 시(Conditional Load): 01_PROJECT_CONTEXT.md / 02_ARCHITECTURE.md / 03_DECISIONS.md 추가 확인
# Full Start 트리거면: 01~05 전부 재확인
```

---

## 🎯 현재 작업(요약)

상세 현황/이슈/다음 작업은 아래 문서를 기준으로 합니다:

- `04_CURRENT_STATE.md` (현황)
- `05_NEXT_TASK.md` (지시)

---

**최종 업데이트:** 2026-02-13
