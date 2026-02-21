# PROTOCOLS.md — 세션 프로토콜 및 운영 참조

> **CLAUDE.md의 확장 문서.** 세션 시작/종료 시 1회 로드합니다.
> 규칙 SSOT는 `CLAUDE.md`이며, 이 문서는 절차와 참조 정보를 담습니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.1** | 2026-02-17 | SESSION_27 PM: PM 종료 체크리스트에 06_VERSION_HISTORY.md 동시 갱신 의무 명시. |
| **v1.0** | 2026-02-17 | SESSION_26 Architect(Opus): CLAUDE.md 분리 신설. 세션 시작/종료 프로토콜, 맥락 유지, 문서 구조, 작업 환경. |

---

## 1. 세션 시작 프로토콜

아래 순서를 **반드시** 지키십시오. 순서를 건너뛰거나 바꾸면 안 됩니다.

### 1단계: 상태 확인
```bash
git status
git log --oneline -5
```

### 2단계: Quick Start (읽기 전용, 기본)
> 기본은 "필요한 만큼만 읽고 정확히 실행"입니다.

1. `04_CURRENT_STATE.md` — 현재 좌표
2. `05_NEXT_TASK.md` — 이번 작업 지시

### 3단계: Conditional Load (작업 유형별 추가 읽기)

**문서 카테고리별 조건:**
- **브랜드/카피/톤/불변 기준**이 걸리면: `01_PROJECT_CONTEXT.md`
- **IA/디자인 시스템/기술스택/구현 가이드**가 걸리면: `02_ARCHITECTURE.md`
- **규칙/결정/문서체계/폴더/권위 변경**이 걸리면: `03_DECISIONS.md`
- 불확실하면 해당 문서를 추가로 읽고, 모르면 질문

**작업 유형별 필수 로드:**
- **블로커/이슈 점검 시**: 해당 블로커 관련 **모든** 보고서 + Work Order (역할 무관)
- **세션 간 인수인계 시**: 직전 세션의 모든 보고서 (역할 무관)
- **Work Order 갱신 시**: 해당 Work Order에 명시된 근거 문서 전체

### 4단계: Full Start (강제 전체 로드)
> 아래에 해당하면 자동으로 `01~05` 전부 재확인합니다.

- 트리거: 디렉터가 "FULL START/전체시작/풀스타트" 요청, 신규 에이전트 투입, 장기 공백 복귀, 운영 프로토콜 파일 수정, 문서체계/폴더 구조 변경
- 수행: `01_PROJECT_CONTEXT.md` → `05_NEXT_TASK.md` 전부 읽기

### 5단계: 감도 체득 (디자인 작업 시)
- 디자인 시안 파일을 직접 열어 시각적으로 확인
- 시안의 경로는 `02_ARCHITECTURE.md`에 명시됨
- **시안을 보지 않고 코딩을 시작하는 것은 금지**

### 6단계: 작업 선언
- `05_NEXT_TASK.md`의 지시를 기반으로 디렉터에게 작업 계획을 보고

---

## 2. 세션 종료 프로토콜

세션 종료 전 **반드시** 수행:

### 모든 역할 공통

1. **Git 상태 확인** — `git status`, `git diff` 결과 디렉터에게 보고
2. **세션 보고서 생성** — `docs/reports/SESSION_XX_[ROLE]_[ACTOR].md`
   - 파일명 형식: `SESSION_{번호}_{역할}_{작업자}.md`
   - 작업자 약칭: HAIKU, SONNET, OPUS, GEMINI, FLASH, CODEX 등
3. **MCP Memory 증류** — 핵심 결론을 요약하여 메모리 서버 동기화

### PM 전용 (Doc Manager 통합, D-030)

4. **`04_CURRENT_STATE.md` 갱신** — "진행중", "이슈/차단사항" 섹션만 업데이트
   - ✅ 허용: 작업 진척 상태 기록
   - ❌ 금지: Phase 전환, 운영 스쿼드 역할/모델 변경, 문서 구조 변경
   - **⚠️ 정본 문서(`01~05`) 버전 변경 시 → `06_VERSION_HISTORY.md` 동시 갱신 필수 (매 변경마다, Phase 전환 불문)**
5. **Work Order 상태 갱신** — 발행한 Work Order의 진척 상태 기록
6. **결정 기록** — `03_DECISIONS.md` 갱신 시 디렉터에게 초안 확인 필수
7. **정합성 검증 (Phase 전환/구조 변경 시에만):**
   - 정본 문서 정합성 검증 — `01~05` 간 모순 점검
   - 버전 히스토리 갱신 — `06_VERSION_HISTORY.md` 해당 항목 갱신
   - 문서 체계 검증 — 링크 유효성, 파편화 모니터링

### 코드 수정 역할 (Builder, Designer)

8. **빌드 확인** — `npm run build` 성공 확인
9. **Git 커밋 승인 요청** — 변경 내용 요약 + 디렉터 승인 대기

---

## 3. 맥락 유지 3기둥

| 기둥 | 역할 | 도구 |
|:--|:--|:--|
| **Git** | 코드 변경 이력 | `git log`, `git diff` |
| **MCP Memory** | 세션 간 지식 공유 | Memory Server (`memory.jsonl`) |
| **문서** | 프로젝트 상태와 규칙 | `CLAUDE.md` + 정본 문서 |

- 작업 전 `read_graph`로 이전 세션의 지식 확인 (선별적 로드)
- 세션 종료 시 핵심 결론만 `store_memory` (컨텍스트 비대화 방지)

---

## 4. 문서 구조 (권위/역할)

- 규칙 SSOT: `CLAUDE.md` (+ `PROTOCOLS.md`, `ROLES.md`)
- 핵심 상태(정본): `01_PROJECT_CONTEXT.md` → `05_NEXT_TASK.md`
- 업무지시서(Work Order): `docs/work_orders/`
- 보고서/분석 산출물(로그): `docs/reports/`
- 콘텐츠 SSOT: `docs/contents/`
- 디자인 자산: `docs/design/`
- 참고/비권위: `docs/_archive/`, `docs/_trash/`

---

## 5. 작업 환경

| 환경 | 모델 | 도구 | 규칙 파일 |
|:--|:--|:--|:--|
| VSCode | **Claude Sonnet 4.5** | Cline, Claude 확장 | `.clinerules`, `CLAUDE.md` |
| AntiGravity | **Claude Sonnet 4.6** | 자율 에이전트 | `.antigravityrules` |

> 모든 도구별 규칙 파일은 `CLAUDE.md`를 가리키는 포인터입니다.
> **세션 보고서 작성 시 위 표의 모델명을 파일명과 내용에 반드시 반영할 것.**

---
