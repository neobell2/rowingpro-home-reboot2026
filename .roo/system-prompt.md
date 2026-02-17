# Roo AI 프로젝트 설정

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v3.0** | 2026-02-17 | SESSION_27 PM(Sonnet): PROTOCOLS.md v1.1 기준 전면 최신화. Quick/Conditional/Full Start 구조 반영, 역할 체계(D-030) 반영. |
| **v2.2** | 2026-02-13 | Quick/Conditional/Full Start 프로토콜 반영 (세션 시작 자동 로드 최적화) |
| **v2.1** | 2026-02-13 | `docs/work_orders/`(업무지시서) 경로 추가 |

---

이 프로젝트의 전역 규칙(SSOT)은 `CLAUDE.md`에 정의되어 있습니다.
세션 시작 시 반드시 `PROTOCOLS.md`를 먼저 읽으십시오.
자기 역할은 `ROLES.md`에서 확인하십시오.

## 세션 시작 프로토콜

### 1단계: 상태 확인
```bash
git status
git log --oneline -5
```

### 2단계: Quick Start (기본)
1. `04_CURRENT_STATE.md` — 현재 좌표
2. `05_NEXT_TASK.md` — 이번 작업 지시

### 3단계: Conditional Load (작업 유형별 추가 읽기)
- 브랜드/카피/톤/불변 기준이 걸리면: `01_PROJECT_CONTEXT.md`
- IA/디자인 시스템/기술스택/구현 가이드가 걸리면: `02_ARCHITECTURE.md`
- 규칙/결정/문서체계/폴더/권위 변경이 걸리면: `03_DECISIONS.md`
- 블로커/이슈 점검 시: 관련 보고서 + Work Order 전체

### 4단계: Full Start (강제 전체 로드)
트리거: "FULL START/전체시작/풀스타트" 요청, 신규 에이전트 투입, 장기 공백 복귀, 운영 프로토콜 수정
수행: `01_PROJECT_CONTEXT.md` → `05_NEXT_TASK.md` 전부 읽기

### 5단계: 작업 선언
`05_NEXT_TASK.md`의 지시를 기반으로 디렉터에게 작업 계획 보고 + 승인 후 실행

## 참조 문서

| 문서 | 용도 |
|------|------|
| `CLAUDE.md` | 마스터 규칙(SSOT) + 관문/승인 프로토콜 |
| `PROTOCOLS.md` | 세션 시작/종료 절차 상세 |
| `ROLES.md` | 역할 정의 및 권한/RACI |
| `01_PROJECT_CONTEXT.md` | 프로젝트 정체성/불변 기준 |
| `02_ARCHITECTURE.md` | IA/디자인 시스템/기술스택 |
| `03_DECISIONS.md` | 결정 기록부 |
| `04_CURRENT_STATE.md` | 현재 진행 위치 |
| `05_NEXT_TASK.md` | 즉시 실행 지시 |
| `06_VERSION_HISTORY.md` | 정본 문서 전체 버전 이력 |
| `docs/work_orders/*` | 업무지시서(Work Order) |
| `docs/reports/*` | 세션 보고서(로그) |
| `docs/_archive/*` | 레거시 보관(비권위) |

## 운영 스쿼드 (D-030 기준)

| 역할 | 담당 | 권한 제한 |
|:--|:--|:--|
| Director | 사용자(디렉터) | — |
| PM (Doc Manager 통합) | Claude 4.5 Sonnet | 코드 수정 금지, 정본 구조 변경 승인 필요 |
| Builder | Claude 4.5 Sonnet | 정본 문서 수정 금지 |
| Designer | Claude 4.5 Sonnet | 코드/문서 직접 수정 금지 |
| Content | Gemini 3.0 Pro | 코드/정본 금지 |
| Media Producer | Gemini 3.0 Flash | 코드/정본 금지 |
| Architect | Claude Opus 4.6 | Phase 전환·Contact 백엔드 설계 필수 호출 |

## 출력 규칙

- 한국어 응답
- emoji 금지
- 인사, 감탄사 금지
- 형식: 체크리스트, 표, 코드

## 주의사항

- 전체 프로젝트 스캔 금지
- 파일 1개씩 처리
- 추측 금지, 모르면 질문
- 디렉터 승인 없이 리포지토리 변경 금지
- Git 커밋/푸시는 반드시 디렉터 승인 후 실행
