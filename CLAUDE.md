# CLAUDE.md — 프로젝트 마스터 규칙 (Master Rules)

> **이 파일은 로잉프로 Reboot 2026 프로젝트에 참여하는 모든 AI 에이전트의 단일 규칙 원본(Single Source of Truth)입니다.**
> 도구(Claude, Gemini, GPT, AntiGravity 등)와 무관하게 이 규칙을 따릅니다.
> 모든 문서는 **한국어**로 작성합니다.

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v2.1** | 2026-02-13 | 실행 모드 정의를 "리포지토리 쓰기"로 확장(문서/폴더 포함). 문서 폴더 역할/변경관리/상대링크 규칙 추가. |
| **v2.0** | 2026-02-13 | 문서 가버넌스 전면 개편. 6개 파편 규칙 → 단일 Hub 통합. 관문 프로토콜, 5개 핵심 문서 체계, 한국어 작성 원칙 도입. |
| v1.2 | 2026-02-12 | Memory Protocol 개선 (Tiered Sync & Strategic Distillation) |
| v1.1 | 2026-02-12 | Context Continuity Protocol 재구성 |
| v1.0 | 2026-02-12 | 최초 작성 |

---

## 1. 세션 시작 프로토콜 (Mandatory)

아래 순서를 **반드시** 지키십시오. 순서를 건너뛰거나 바꾸면 안 됩니다.

### 1단계: 상태 확인
```bash
git status
git log --oneline -5
```

### 2단계: 프로젝트 이해 (읽기 전용)
1. `01_PROJECT_CONTEXT.md` — 프로젝트 정체성과 불변 기준
2. `02_ARCHITECTURE.md` — 구조, 디자인 시스템, 기술스택
3. `03_DECISIONS.md` — 왜 그렇게 설계했는지
4. `04_CURRENT_STATE.md` — 지금 어디까지 했는지
5. `05_NEXT_TASK.md` — 이번에 무엇을 해야 하는지

### 3단계: 감도 체득 (디자인 작업 시)
- 디자인 시안 파일을 직접 열어 시각적으로 확인
- 시안의 경로는 `02_ARCHITECTURE.md`에 명시됨
- **시안을 보지 않고 코딩을 시작하는 것은 금지**

### 4단계: 작업 선언
- `05_NEXT_TASK.md`의 지시를 기반으로 디렉터에게 작업 계획을 보고
- **디렉터 승인 후에만 실행 모드(리포지토리 쓰기) 진입**
  - 실행 모드 = 코드/문서/폴더/설정 등 리포지토리에 쓰기가 발생하는 모든 행위

---

## 2. 관문 프로토콜 (Gate Protocol)

> **이 프로토콜의 목적:** "보고 작업하는 것"이 아니라 "이해하고 승인받은 뒤 작업하는 것"

### 설계 관문 (Design Gate)
- `02_ARCHITECTURE.md`의 디자인 시스템이 `[STATUS: LOCKED]`가 아니면 **UI/스타일 코딩 금지**
- `[STATUS: BASELINE]`일 때는 구조(페이지/레이아웃)만 작업 가능, 시각적 디자인은 불가

### 승인 관문 (Approval Gate)
- 모든 작업은 `[계획 보고 → 디렉터 승인 → 실행]` 순서
- 독단적인 리포지토리 변경 금지 (코드/문서/폴더/설정/이동/리네임 포함)
- Git 커밋/푸시는 반드시 디렉터 승인 후 실행
- **문서 체계/폴더 구조/마스터 문서(`CLAUDE.md`, `01~05`) 변경은 별도 명시 승인 없이는 금지**

---

## 3. 핵심 운용 규칙

### 정보 처리
- **추론 금지**: 파일 내용을 직접 읽기 전에 상태를 추측하지 않는다
- **도구 우선**: `ls`, `grep`, `cat`, `git status` 등으로 실시간 확인
- **헤리티지 우선**: "The Origin (Since 2013)" — 13년 업력이 최우선 자산

### 작업 규율
- 파일 1개씩 처리 (한 번에 대량 수정 금지)
- 전체 프로젝트 스캔 금지 (필요한 파일만 읽기)
- 토큰 절약: 작업 1개 = 세션 1개, 긴 브레인스토밍 금지

### 문서 규율
- **모든 문서는 한국어로 작성**
- **모든 시스템 문서(정본/운영 문서)에는 버전 히스토리 필수 기록**
  - 시스템 문서 예: `CLAUDE.md`, `01~05`, `.roo/system-prompt.md`, `.github/copilot-instructions.md`
- 결정이 발생하면 즉시 `03_DECISIONS.md`에 기록 (결정/이유/대안/변경가능여부)

### 문서 구조(권위/역할)
- 규칙 SSOT: `CLAUDE.md`
- 핵심 상태(정본): `01_PROJECT_CONTEXT.md` → `05_NEXT_TASK.md`
- 업무지시서(Work Order): `docs/work_orders/` (누가/무엇을/어디에/제약 포함)
- 보고서/분석 산출물(로그): `docs/reports/` (세션 보고, RCA, 감사, 통합 리포트)
- 콘텐츠 SSOT: `docs/contents/`
- 디자인 자산: `docs/design/`
- 참고/비권위: `docs/_archive/`, `docs/_trash/`
- `docs/analysis/`는 현재 **미사용** (도입은 디렉터 승인 + `03_DECISIONS.md` 기록 후)

### 변경관리(Change Control) — 신규 폴더/체계 변경
- 제안서에 포함: 목적, 경로, 대안, 영향(권위/검색성/마이그레이션), 롤백, 소유자
- 디렉터 승인 후에만 실제 반영
- 반영 후 `03_DECISIONS.md`에 기록

### 링크 규칙
- 리포지토리 내부 링크는 **상대경로** 사용 (`file:///` 절대경로 링크 금지)

---

## 4. 맥락 유지 3기둥 (Context Continuity)

이 프로젝트의 맥락은 아래 3가지로 유지됩니다:

| 기둥 | 역할 | 도구 |
|:--|:--|:--|
| **Git** | 코드 변경 이력 | `git log`, `git diff` |
| **MCP Memory** | 세션 간 지식 공유 | Memory Server (`memory.jsonl`) |
| **문서** | 프로젝트 상태와 규칙 | 본 파일 + 5개 핵심 문서 |

### MCP Memory 사용
- 작업 전 `read_graph`로 이전 세션의 지식 확인 (선별적 로드)
- 세션 종료 시 핵심 결론만 `store_memory` (컨텍스트 비대화 방지)

---

## 5. 세션 종료 프로토콜 (Mandatory)

세션 종료 전 **반드시** 수행:

1. **`04_CURRENT_STATE.md` 갱신** — 완료/진행중/이슈 업데이트
2. **`03_DECISIONS.md` 갱신** — 이번 세션에서 발생한 결정 기록
3. **세션 보고서 생성** — `docs/reports/SESSION_XX_REPORT.md`
4. **MCP Memory 증류** — 핵심 결론을 요약하여 메모리 서버 동기화
5. **Git 상태 보고** — `git diff` 결과를 디렉터에게 보여주고 커밋 승인 요청

---

## 6. 작업 환경

| 환경 | 도구 | 규칙 파일 |
|:--|:--|:--|
| VSCode | Roo/Gemini (Cline), Claude 확장, GPT 확장 | `.clinerules`, `CLAUDE.md`, `config.toml` |
| AntiGravity | 자율 에이전트 | `.cursorrules` → `.antigravityrules` |

> 모든 도구별 규칙 파일은 본 문서(`CLAUDE.md`)를 가리키는 포인터입니다.
> 규칙 내용은 오직 이 파일에만 존재합니다.

---


