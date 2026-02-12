# 문서체계 구조 감사 보고서 (Doc System Audit)

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.1** | 2026-02-13 | 핵심 상태 문서 파일명 번호 체계(01~05) 반영 및 자동지침(.roo/.github) 참조 갱신 |
| **v1.0** | 2026-02-12 | 최초 작성 (문서체계 구조 감사 결과 기록) |

**작성일:** 2026-02-12  
**목표:** 문서 역할 충돌 탐지 / 누락 문서(또는 깨진 참조) 식별 / 과잉 문서 제거 제안 / 구조 단순화 제안 / AI 작업연속성 관점 위험요소 탐지  
**제약:** 문서 재작성/스타일 개선/내용 보강 없음 (구조 감사만)

---

## 0) 스캔 범위/기준

- 스캔 대상: `*.md` (프로젝트 전체)
- 스캔 제외: 경로에 `node_modules`가 포함된 문서 전부
  - 참고: `docs/design/**/node_modules/**`가 존재하여, `docs/design` 내 문서는 대부분 제외됨

---

## 1) 인벤토리 스냅샷 (node_modules 제외)

### 1.1 폴더별 개수

- `docs/_archive/*.md`: 76
- `docs/_trash/*.md`: 78
- `docs/contents/*.md`: 10
- `docs/reports/*.md`: 4
- `docs/design/*.md`: 2
- 루트 `*.md`: 9
  - `CLAUDE.md`
  - `01_PROJECT_CONTEXT.md`
  - `02_ARCHITECTURE.md`
  - `03_DECISIONS.md`
  - `04_CURRENT_STATE.md`
  - `05_NEXT_TASK.md`
  - `README.md`
  - `task.md`
  - `AI 협업 프로젝트 작업연속성 가이드.md`

---

## 2) 운영 프로토콜에 실제로 영향 주는 중심 파일

### 2.1 v2 의도된 운영 중심(정상축)

- 규칙 SSOT: `CLAUDE.md`
- 5개 핵심 상태 문서: `01_PROJECT_CONTEXT.md`, `02_ARCHITECTURE.md`, `03_DECISIONS.md`, `04_CURRENT_STATE.md`, `05_NEXT_TASK.md`
- 도구별 포인터: `.cursorrules`, `.antigravityrules`, `.clinerules` (모두 `CLAUDE.md`로 유도)

### 2.2 실제 진입점/자동참조(충돌축)

아래 파일들은 “시작 동선” 또는 “자동 문서 읽기/정책 파일 지정”으로 인해, 사용자가 의도하지 않아도 운영 프로토콜을 바꿀 수 있음:

- `README.md` (GitHub/사람이 첫 화면에서 보는 진입점)
- `config.toml` (`priority_files`, `auto_read_docs`)
- `.roo/system-prompt.md` (Roo 계열 시스템 프롬프트/세션 시작 지시)
- `.roo/commands/handoff.json` (세션 종료 자동 업데이트를 전제)
- `.github/copilot-instructions.md` (Copilot/에이전트가 정책 파일을 무엇으로 볼지에 영향)

---

## 3) 문서 역할 충돌(SSOT/세션 시작 프로토콜 분열)

### 3.1 SSOT 다중 선언

- v2: `CLAUDE.md`가 마스터 규칙(SSOT)
- 현행: `.roo/system-prompt.md`는 `CLAUDE.md` + 01~05 핵심 상태 문서를 기준으로 세션 시작을 안내
- 현행: `.github/copilot-instructions.md`는 `CLAUDE.md` + 01~05 핵심 상태 문서를 기준으로 안내

### 3.2 “세션 시작” 지시문 다중 공존

- v2: `CLAUDE.md`의 5핵심 문서 → 승인 → 실행
- v1/레거시: README/config/.roo/.github가 전제하는 규칙 파일군(RULES/BLUEPRINT/HANDOVER/DASHBOARD/SESSION 등)

**결론:** 어떤 도구/어떤 파일부터 보느냐에 따라 운영 프로토콜이 분기함.

---

## 4) 누락 문서(또는 깨진 참조) — 루트 기준 “존재하지 않는 필수 파일명”

여러 진입점에서 “먼저 읽기/우선순위/정책 파일”로 언급되지만 **루트에 존재하지 않는 파일명**이 다수 확인됨:

- `PROJECT_BLUEPRINT_2026.md`
- `SESSION_HANDOVER.md`
- `TODO.md`
- `RULES.md`
- `DEV_SPEC.md`
- `DASHBOARD.md`
- `SESSION.md`
- `ROADMAP.md`
- `TEAM.md`
- `HANDOFF.md`
- `PROGRESS.md`
- `NEXT_SESSION.md`

폴더/경로 불일치도 존재:

- `docs/archive` (없음) vs 실제 `docs/_archive` (있음)
- `contents/` (없음) vs 실제 `docs/contents` (있음)

**결론:** “README/설정이 가리키는 시작 경로”가 구조적으로 깨져 있음.

---

## 5) 과잉 문서(중복/미러) — 최신 판별 비용 증가

### 5.1 archive ↔ trash 미러 중복

`docs/_archive/*`와 `docs/_trash/*`에 동일/유사 역할 문서가 병렬로 다수 존재.

- 예: `RULES.md` 계열(복수), `DEV_SPEC.md` 계열(복수), `README.md` 계열(복수), `NEXT_SESSION.md` 계열(복수) 등

### 5.2 “규칙/세션/핸드오버” 후보 과다

파일명 검색(README/RULES/SESSION/HANDOFF/ROADMAP/PROGRESS/TODO 등)만으로도 후보가 과다하게 매칭되어,
AI/사람 모두 “최신/권위” 오판 가능성이 높음.

---

## 6) AI 작업연속성 위험요소 (우선순위 포함)

표기:
- 발생가능성(L): 낮음/중간/높음
- 영향(I): 낮음/중간/높음
- 우선순위: P0(즉시) / P1(상) / P2(중)

### R-01 온보딩 즉시 실패(깨진 시작 지시)

- 트리거: `README.md`, `config.toml`이 “루트에 없는 파일”을 필수로 읽도록 유도
- L: 높음 / I: 높음 → **P0**

### R-02 자동 문서 읽기(`auto_read_docs`)로 레거시 문서 재활성화

- 트리거: `config.toml`의 `priority_files`에 레거시 파일명이 포함 + `auto_read_docs = true`
- L: 중간~높음 / I: 높음 → **P0**

### R-03 도구별 시스템 프롬프트/지침이 v2와 다른 규칙 체계로 분기

- 트리거: `.roo/system-prompt.md`, `.github/copilot-instructions.md`
- L: 중간 / I: 높음 → **P0**

### R-04 archive/trash 중복으로 최신/권위 오판

- 트리거: 동일/유사 파일명이 여러 위치에 공존
- L: 중간 / I: 중간~높음 → **P1**

### R-05 세션 종료 자동화가 “존재하지 않는 파일”을 전제

- 트리거(해결됨): `.roo/commands/handoff.json`이 레거시 파일(`HANDOFF.md`, `SESSION.md`, `PROGRESS.md`) 자동 업데이트를 전제했으나, 현행은 v2(04/03/docs/reports)로 갱신됨
- L: 중간 / I: 중간 → **P1**

### R-06 `docs/reports/` 누적 시 최신성/권위 혼선

- 트리거: 보고서 열람 우선순위 규칙 부재
- L: 중간 / I: 중간 → **P2**

---

## 7) 구조 단순화 제안 (문서 재작성 없이 “역할/권위/경로”만 정리)

### P0: 진입점 4곳을 v2로 단일화(포인터화)

대상:
- `README.md`
- `config.toml`
- `.roo/system-prompt.md`
- `.github/copilot-instructions.md`

완료 조건:
- 어떤 도구로 시작해도 `CLAUDE.md` + 5핵심 문서로만 진입
- 존재하지 않는 파일명을 “필수/우선”으로 요구하는 구문 제거(또는 “아카이브 전용”으로 명시)

### P1: 중복(archive/trash) 구조 정리 방향 확정

- `docs/_trash`는 참조 금지/삭제 후보로만 취급하여 운영 루트에서 배제
- `docs/_archive`는 역사 보관용으로만 취급하여 운영 루트에서 배제
- 규칙/세션 시작 문서군은 v2 1세트만 “현역”으로 고정

### P2: 보고서(`docs/reports`)의 권위 규칙 최소 1개 고정

- 예: “지시는 `05_NEXT_TASK.md`만 권위. 보고서는 참고(로그).”

---

## 8) 결론(요약)

- v2(`CLAUDE.md` + 5핵심) 자체는 구조가 단순합니다.
- 그러나 실제 진입점(README/config/.roo/.github)이 v1/레거시 파일명을 전제하고 있고, 그 파일들이 루트에 없어서
  - 깨진 시작 루틴
  - SSOT 분열
  - 중복으로 인한 최신/권위 오판
  이 반복될 구조입니다.
