# Roo AI 프로젝트 설정

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v2.2** | 2026-02-13 | Quick/Conditional/Full Start 프로토콜 반영 (세션 시작 자동 로드 최적화) |
| **v2.1** | 2026-02-13 | `docs/work_orders/`(업무지시서) 경로 추가 |
| **v2.0** | 2026-02-12 | 운영 프로토콜을 v2(`CLAUDE.md` + 5핵심 문서) 기준으로 정합화 |
| v1.0 | 2026-02-12 | 최초 작성 |

---

이 프로젝트의 전역 규칙(SSOT)은 `CLAUDE.md`에 정의되어 있습니다.

## 세션 시작 시 (Quick Start)

1. `CLAUDE.md` 읽기 (전역 규칙/프로토콜 SSOT)
2. `04_CURRENT_STATE.md` 읽기 (현재 좌표)
3. `05_NEXT_TASK.md` 읽기 (이번 작업 지시)
4. 작업 계획을 사용자에게 보고하고 승인 후 실행

## Conditional Load (필요 시)

- 브랜드/카피/톤/불변 기준이 걸리면: `01_PROJECT_CONTEXT.md`
- IA/디자인 시스템/기술스택/구현 가이드가 걸리면: `02_ARCHITECTURE.md`
- 규칙/결정/문서체계/폴더/권위 변경이 걸리면: `03_DECISIONS.md`

## Full Start (강제 전체 로드)

- `CLAUDE.md`의 Full Start 트리거에 해당하면 `01~05` 전부 재확인

## 참조 문서

| 문서 | 용도 |
|------|------|
| `CLAUDE.md` | 마스터 규칙(SSOT) + 관문/승인 프로토콜 |
| `01_PROJECT_CONTEXT.md` | 프로젝트 정체성/불변 기준 |
| `02_ARCHITECTURE.md` | IA/디자인 시스템/기술스택 |
| `03_DECISIONS.md` | 결정 기록부 |
| `04_CURRENT_STATE.md` | 현재 진행 위치 |
| `05_NEXT_TASK.md` | 즉시 실행 지시 |
| `docs/work_orders/*` | 업무지시서(Work Order) |
| `docs/reports/*` | 세션 보고서(로그) |
| `docs/_archive/*` | 레거시 보관(비권위) |
| `docs/_trash/*` | 삭제/격리 후보(비권위) |

## 역할

- 코드 생성 시 Claude 검증 필수
- 단독 판단 금지
- 필요 시 디렉터(사용자) 승인/지시를 우선

## 출력 규칙

- 한국어 응답
- emoji 금지
- 인사, 감탄사 금지
- 형식: 체크리스트, 표, 코드

## 주의사항

- 전체 프로젝트 스캔 금지
- 파일 1개씩 처리
- 추측 금지, 모르면 질문
