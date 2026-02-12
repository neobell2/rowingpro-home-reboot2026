# 현행 문서 시스템 기술 감사 보고서 (Technical Audit: Documentation Governance)

**일시:** 2026-02-12
**작성자:** Antigravity
**대상:** 차기 세션 [문서 체계 전면 개편]을 위한 기초 진단

---

## 1. 현행 문서 컴포넌트 분석 (Component Mapping)

현재 프로젝트를 구동하는 문서는 크게 5개 계층으로 파편화되어 있습니다.

| 계층 | 관련 문서 | 주요 실패 지점 (Failure Points) |
| :--- | :--- | :--- |
| **규칙 (Rules)** | `CLAUDE.md`, `.antigravityrules`, `.clinerules`, `.cursorrules`, `config.toml` | **중복 및 충돌**: 4~5개의 규칙 파일이 서로 다른 초기화(Initialization) 방식을 제안함. AI는 가장 읽기 편한(짧은) 규칙에 안주함. |
| **마스터 (Master)** | `PROJECT_BLUEPRINT_2026.md`, `사이트맵.txt` | **정적 정보 한계**: "무엇(What)"은 정의되나, 시안과의 "정렬(Alignment)"을 강제하는 동적 관문이 없음. |
| **지시 (Instruction)** | `JOB_ORDER_PHASE2_01.md`, `TODO.md`, `task.md` | **실행 위주 설계**: 작업 범위(Scope)를 '파일 단위'로만 규정함. '감도(Sensitivity)'나 '품질(Quality)'은 체크리스트의 부가 요소로 취급됨. |
| **연속성 (Relay)** | `SESSION_HANDOVER.md`, `docs/reports/*.md` | **정보 매몰 (Context Bloat)**: 인수인계서가 300라인을 넘어가며 핵심 경고(예: 13년 업력 강조)가 문서 하단에 배치되어 무시됨. |
| **지식 (Knowledge)** | `AI_OPERATIONAL_GUIDELINE.md`, `history_master.md` | **접근 격차**: 실제 작업 중인 `src/` 폴더와 `docs/` 간의 거리가 멀어, 구현 중 데이터를 조회하지 않음. |

---

## 2. 시스템 작동 로직 및 병목 구간 (Process Audit)

에이전트가 세션에 진입하여 실패에 이르기까지의 **논리적 흐름(Logic Flow)**입니다.

1.  **초기화 (Init)**: `CLAUDE.md`에 따라 `git status` 확인. (상태 좌표 확인)
2.  **임무 수령 (Tasking)**: `SESSION_HANDOVER.md` 하단의 'Next Task' 확인. 
    - *문제점:* 여기서 이미 **"스켈레톤 코딩"**이라는 결론이 내려짐.
3.  **작업 리스트 확정 (Commitment)**: `task.md` 작성. 
    - *문제점:* AI는 이 순간 **"기획자"에서 "노동자"**로 전환됨.
4.  **시각적 참고 (Reference)**: `docs/design/...` 확인.
    - *문제점:* 이미 작업 목록이 확정된 후이므로, 시안은 '지켜야 할 철학'이 아닌 '대충 흉내 낼 그림'이 됨.
5.  **실행 및 실패 (Execution)**: 저급한 품질의 껍데기 코드 생산.

---

## 3. 의견 및 근본 원인 (Root Cause Analysis)

### 🚨 원인 1: "관문의 수동성 (Passive Gating)"
- 현행 시스템은 "읽어라"라고 권고할 뿐, "읽지 않고 승인받지 않으면 코드를 쓸 수 없다"는 **물리적 제약(Constraint)**이 없습니다.

### 🚨 원인 2: "행동 강령의 파편화 (Protocol Fragmentation)"
- 도구(Claude, Cursor, Cline)별로 규칙 파일이 흩어져 있어, 프로젝트 전체의 '중심 철학(로잉프로다움)'이 도구의 '운용 효율성'에 밀려납니다.

### 🚨 원인 3: "품질 지표의 부재 (Lack of Quality Metrics)"
- `task.md`의 성공 기준이 [x] 표시(파일 존재 여부)에만 맞춰져 있어, 시각적 감도나 데이터의 진실성에 대한 검증이 자동화/표준화되어 있지 않습니다.

---

## 4. 시스템 개선 대책 (Proposed Solutions)

### 🛠️ 대책 1: [통합 가버넌스 구축]
- 5개로 흩어진 규칙 파일을 `CLAUDE.md` 하나로 단일화하고, 나머지는 참조하지 않도록 폐기(Purge).

### 🛠️ 대책 2: [물리적 설계 관문 (Hard-Gate) 도입]
- `DESIGN_SETTINGS.md` (혹은 `GOVERNANCE_LOCK`) 파일 신설.
- 이 파일에 디렉터의 `LOCKED` 사인이 없으면 AI 에이전트의 파일 쓰기 도구(`write_to_file`, `replace_file_content`) 사용을 금지하는 규칙 강제.

### 🛠️ 대책 3: [데이터 우선순위 강제]
- `task.md` 생성 시 반드시 `history_master.md`의 데이터를 어떻게 활용할 것인지 서술하는 '데이터 바인딩 계획서' 제출을 필수 단계로 삽입.

---

---

## 5. 차기 작업자(해결사)를 위한 직설적 지침 (Directives for Successor)

이 보고서를 수령한 당신은 다음의 **'강제 중단(Kill-Switch)'** 프로토콜을 즉시 가동하십시오.

### 🛑 1단계: 실행 모드(EXECUTION) 진입 금지
- 이 프로젝트의 `src/` 폴더 내 어떤 파일도 수정하지 마십시오. 
- 현재의 `CLAUDE.md`와 `SESSION_HANDOVER.md`는 오염된 지침을 포함하고 있으므로, 이를 근거로 코딩을 시작하는 행위는 '지속적인 실패'로 간주됩니다.

### 🧹 2단계: 문서 정글 클린업 (The Great Purge)
- `docs/guides/AI_OPERATIONAL_GUIDELINE.md`, `.antigravityrules`, `.clinerules`, `.cursorrules`, `config.toml` 등에 흩어진 모든 파편화된 규칙을 읽고 나서, **이를 `CLAUDE.md` 단일 파일로 통합**하십시오.
- 통합이 완료된 후, 나머지 파편화된 규칙 파일들은 시스템에서 **완전히 삭제(Delete)** 하는 것을 디렉터에게 제안하십시오.

### 🏗️ 3단계: '설계 관문' 문서 강제 생성
- `DESIGN_SETTINGS.md` 파일을 생성하고, 여기에 **그리드(Grid), 컬러(Color), 쉐이프(Shape), 데이터 활용법**을 명시하십시오.
- 해당 문서 상단에 `[STATUS: UNLOCKED]`를 표기하고, 디렉터로부터 이를 `[STATUS: LOCKED]`로 변경받기 전까지는 다음 단계를 수행하지 마십시오.

### 🪓 4단계: 실패작의 퍼지(Purge)
- 설계 관문이 잠기면(LOCKED), Session 09에서 생성된 모든 `.astro` 페이지 파일들을 삭제하고, 확정된 설계 사양에 맞춰 백지상태에서 다시 구현하십시오.

---

**마지막 경고:** 당신이 "작업 리스트(task.md)"부터 작성한다면, 당신은 이미 이 감사를 무시하고 실패의 길로 들어선 것입니다. **반드시 시스템 정비(Systemic Overhaul)를 1순위 태스크로 잡으십시오.** 
