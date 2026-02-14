# 04_CURRENT_STATE.md — 프로젝트 현재 좌표

> **이 문서는 프로젝트의 현재 위치를 보여줍니다.**
> 세션 종료 시 반드시 갱신합니다. 이 문서가 없으면 "지금 어디까지 했는가?"라는 질문이 매번 발생합니다.

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.6** | 2026-02-14 | SESSION 16 완료 반영. D1~D12 전체 확정, IA 17페이지 확장, Phase 3 구현 단계 진입 |
| **v1.5** | 2026-02-13 | SESSION 15 완료 반영. 디자인 시스템 LOCKED, Phase 2 완료, Phase 3 진입 준비 |
| **v1.4** | 2026-02-13 | 세션 시작 Quick/Conditional/Full Start 도입 반영 |
| **v1.3** | 2026-02-13 | 운영 스쿼드 템플릿 추가, 진행중 항목 중복 제거 |
| **v1.2** | 2026-02-13 | 레거시 참조를 아카이브 경로(`docs/_archive/governance_v1/SESSION_HANDOVER_v1.md`)로 정정 |
| **v1.1** | 2026-02-13 | 01~05 정본 문서 확정 및 도구 지침 참조 정렬 반영 |
| **v1.0** | 2026-02-13 | 문서 가버넌스 개편에 따라 신규 작성. `docs/_archive/governance_v1/SESSION_HANDOVER_v1.md`의 상태 정보 추출 및 정리. |

---

## 현재 Phase

**Phase 3 — 구현 단계 (진입)**

> Phase 2 완료: 디자인 시스템 LOCKED, D1~D12 미결 사안 전체 확정, IA 17페이지 확장 완료

---

## 운영 스쿼드(템플릿)

> 매 세션마다 팀 구성을 반복 설명하지 않기 위한 표준 템플릿입니다. (필요 시 모델/도구는 교체 가능, 역할이 우선)

| 역할 | 기본 담당(권장) | 책임 |
|:--|:--|:--|
| Director | 사용자(디렉터) | 최종 승인/결정 |
| PM | Gemini (PM) | 작업 계획/승인 요청/Work Order 발행 |
| Architect | Claude (Opus급) | 설계, 정합성, 최종 스펙 확정 |
| Analyst | Claude (Sonnet급) | 시안 코드/자산 분석, 토큰 추출 |
| Builder | Codex | Astro/Tailwind 구현 가이드 및 코드 작업 |
| Reviewer | GPT | 논리/누락/충돌 점검 (교차검증) |

---

## 완료

### Phase 1 & Phase 2

- Phase 1: 기획/설계, 폴더 구조 정리, 레거시 아카이브
- GitHub 저장소 연동 (`neobell2/rowingpro-home-reboot2026`)
- 13년 전수 실적 데이터 확보 (418건 행사, 219+ 클라이언트)
- 히스토리 마스터 데이터 구축 (`history_master.md`)
- Draft 03 시안 분석 완료
- AI 팀 구성 및 규칙 체계 수립
- 세션 시작 프로토콜 Quick/Conditional/Full Start 도입 (GPT 수행)
- 문서 가버넌스 강화 및 상대경로 링크 원칙 확립
- **디자인 시스템 통합 분석 완료 (Opus, Session 12)**
- **디자인 시스템 최종 명세 확정 (Sonnet, Session 15)**
  - 컬러 시스템: Heritage #2C63A7 승격, Cobalt 폐기
  - 컬러 토큰 변형 범위 확정 (opacity variants)
  - 타이포그래피, 글라스모피즘, 버튼 시스템 명세화
  - `02_ARCHITECTURE.md` STATUS → LOCKED
- **미결 사안 D1~D12 전체 확정 (Sonnet, Session 16)**
  - IA 17페이지 확장 (4개 서비스 카테고리 추가)
  - Track Record → History (/history) 변경
  - Programs=개요, Service=상세 역할 분리
  - 히어로 타이틀 White 확정, 포인트 핑크 미사용
  - About: CEO+창업주 한 페이지, 창업주 옵션 B
  - 가격 비노출(상담 유도), 부스형만 게시(200만+VAT)
  - PDF 인쇄 제거, OG 실사+로고, 접근성 AA 준수
  - 법인 정보 확보 (대표번호, 사업자등록번호, 주소 등)

## 진행중

- 없음 (17페이지 스켈레톤 구현 대기)

## 이슈

- Session 09에서 생성된 저품질 `.astro` 페이지 파일들이 `src/pages/`에 존재 → 17페이지 스켈레톤 구현 시 전면 재작성 필요
- 부스형 4단계 가격표 디테일 CEO 확인 필요 (현재 PRO급 200만+VAT만 확정)
- 디자인 단계 재검토 가능 사항: 히어로 타이틀 색상, 포인트 핑크 사용 여부

---
