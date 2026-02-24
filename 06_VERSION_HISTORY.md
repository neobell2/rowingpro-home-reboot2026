# 06_VERSION_HISTORY.md — 정본 문서 전체 버전 히스토리

> **이 문서는 CLAUDE.md 및 01~05 정본 문서의 전체 버전 변경 이력을 보관합니다.**
> 각 정본 문서에는 최신 3개 버전만 유지하고, 나머지는 이곳에서 확인할 수 있습니다.

---

## CLAUDE.md — 프로젝트 마스터 규칙

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v3.1** | 2026-02-17 | 경량화: 302줄→61줄. PROTOCOLS.md/ROLES.md 분리. 중복 제거. Roo→Cline. Architect Opus 교정. D-031. |
| **v3.0** | 2026-02-16 | D-030 반영: PM+DocManager 통합, Sonnet 배정. 섹션 7.1/7.2 통합, 7.7 RACI 갱신. |
| **v2.7** | 2026-02-15 | Architect 역할 지정: 외부감사관 겸임 (Opus), 필수 호출 지점 명시 (Phase 전환, Contact 백엔드). D-024 반영. |
| **v2.6** | 2026-02-15 | PM 권한 재정의(계층적 접근), Doc Manager 재포지셔닝(검증자+구조전문가), 세션 종료 프로토콜 역할별 차별화. 거버넌스 모순 해결. |
| **v2.5** | 2026-02-15 | PM/Doc Manager를 Claude Haiku로 전환. 품질 향상 및 Gemini 크레딧 Content 집중 투입. |
| **v2.4** | 2026-02-15 | 비용최적화 재구조화. Doc Manager Gemini 전환, Designer 신설, Media Producer 추가. 9개 역할 확정. |
| **v2.3** | 2026-02-15 | 팀 구조 재편. PM 권한 명시적 제한, Documentation Manager 역할 신설, RACI 매트릭스 도입. 외부 감사 결과 반영. |
| **v2.2** | 2026-02-13 | 세션 시작을 Quick/Conditional/Full Start로 재정의하고, 자동 주입 문서량을 줄이는 운영 방식을 도입. |
| **v2.1** | 2026-02-13 | 실행 모드 정의를 "리포지토리 쓰기"로 확장(문서/폴더 포함). 문서 폴더 역할/변경관리/상대링크 규칙 추가. |
| **v2.0** | 2026-02-13 | 문서 가버넌스 전면 개편. 6개 파편 규칙 → 단일 Hub 통합. 관문 프로토콜, 5개 핵심 문서 체계, 한국어 작성 원칙 도입. |

> **초기 버전 (v1.0~v1.2)**: [docs/_archive/version_history/06_VERSION_HISTORY_EARLY_VERSIONS.md](docs/_archive/version_history/06_VERSION_HISTORY_EARLY_VERSIONS.md)

---

## 01_PROJECT_CONTEXT.md — 프로젝트 절대 기준

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.3** | 2026-02-21 | SESSION_46D PM(Gemini): 전체 페이지 17→14(D-040), IA 간접화(02 참조). |
| **v1.2** | 2026-02-18 | SESSION_35 PM(Sonnet): H-01 교정 — 현재 단계 Phase 3, 총 페이지 17페이지로 현행화 |
| **v1.1** | 2026-02-13 | 레거시 참조를 아카이브 경로로 정정 |
| **v1.0** | 2026-02-13 | 문서 가버넌스 개편에 따라 신규 작성. |

---

## 02_ARCHITECTURE.md — 구조 확정본

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.4** | 2026-02-21 | SESSION_46D PM(Gemini): IA 14페이지 재설계 반영(D-040). Programs 삭제, 비즈니스/라이프 분리, GNB 6메뉴 갱신, Footer 주소 오타 교정(케이앤몰동), 리소스 경로 갱신. |
| **v1.3** | 2026-02-14 | SESSION 16 미결 사안 반영. IA 17페이지 확장(4개 카테고리 추가), Track Record→History 변경, Programs 역할 정의, 히어로 타이틀 White 확정, Footer 법인정보 추가, 보류사항 정리. |
| **v1.2** | 2026-02-13 | SESSION 15 디자인 명세 반영. 컬러 시스템 확정(Heritage 승격, Cobalt 폐기), 타이포그래피/글라스모피즘/버튼 시스템 명세 추가. STATUS → LOCKED. |
| **v1.1** | 2026-02-13 | 레거시 참조를 아카이브 경로로 정정 |
| **v1.0** | 2026-02-13 | 문서 가버넌스 개편에 따라 신규 작성. |

---

## PROTOCOLS.md — 세션 프로토콜 및 운영 참조

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.2** | 2026-02-22 | SESSION_46G PM(Sonnet): D-041 반영. VSCode 작업 모델 사양 4.6으로 상향 교정. |
| **v1.1** | 2026-02-17 | SESSION_27 PM: PM 종료 체크리스트에 06_VERSION_HISTORY.md 동시 갱신 의무 명시. |
| **v1.0** | 2026-02-17 | SESSION_26 Architect(Opus): 신설. 세션 시작/종료 프로토콜, 맥락 유지, 문서 구조, 작업 환경. |

---

## ROLES.md — 역할 정의 및 권한

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.1** | 2026-02-22 | SESSION_46G PM(Sonnet): D-041 스쿼드 재편 재귀검증 반영. PM/Designer/Analyst 모델 사양 4.6으로 일괄 상향 교정. |
| **v1.0** | 2026-02-17 | SESSION_26 Architect(Opus): 신설. 역할 상세 정의, 권한, RACI 매트릭스. |

---

## 03_DECISIONS.md — 결정 기록부

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.33** | 2026-02-24 | SESSION_46L PM(Sonnet): 거버넌스 다이어트 — 8개 결정 아카이브(D-019~D-023, D-028, D-029, D-031). Phase 3 Operational 분리. |
| **v1.32** | 2026-02-22 | D-042(AI 스쿼드 다원화 및 상호 보완 운용 원칙) 추가. 디렉터의 멀티 모델 신뢰 철학 반영. |
| **v1.31** | 2026-02-22 | D-041(2026.02 AI 스쿼드 최적화) 등록. SESSION_46E 스쿼드 점검 결산. |
| **v1.28** | 2026-02-18 | D-038(Google Workspace 다운사이징 방향) 추가. SESSION_35 PM/Sonnet. |
| **v1.27** | 2026-02-18 | SESSION_33 PM(Sonnet): D-034(상품/가격 표기 정책), D-037(Programs 구조 확정), D-012 주소 교정(케이에듀동→케이앤몰동). |
| **v1.26** | 2026-02-18 | SESSION_32 Architect(Opus): D-033(소비자 기준 원칙 확립). |
| **v1.25** | 2026-02-18 | SESSION_32 Architect(Opus): D-032(Content Collections 설계 확정, Builder 재량 17페이지 기준). |
| **v1.24** | 2026-02-17 | D-031 내 GEMINI.md 항목 교정: SESSION_27(PM) 생성 사실 반영. |
| **v1.23** | 2026-02-17 | D-031 추가: CLAUDE.md 경량화 + Roo→Cline 전환 + Architect 모델 교정(Opus). |
| **v1.22** | 2026-02-16 | D-030 추가: PM+DocManager 통합, Sonnet 배정. D-021/D-022/D-023 부분 대체. Architect 설계 결함 자인. |

> **초기 버전 (v1.0~v1.21)**: [docs/_archive/version_history/06_VERSION_HISTORY_EARLY_VERSIONS.md](docs/_archive/version_history/06_VERSION_HISTORY_EARLY_VERSIONS.md)

---

## 04_CURRENT_STATE.md — 프로젝트 현재 좌표

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.40** | 2026-02-24 | SESSION_47E PM(Sonnet): IA 전환 Cloudflare Pages 배포 완료, 14페이지 정상 작동 확인, 모바일 메뉴 가독성 이슈 기록. |
| **v1.39** | 2026-02-24 | SESSION_46L PM(Sonnet): WO_BUILDER_IA_TRANSITION 발행 완료 — Codex+Sonnet 하이브리드 방식, QA 프로토콜 추가. |
| **v1.38** | 2026-02-24 | SESSION_46L PM(Sonnet): 거버넌스 다이어트 완료 — 해결된 이슈 4개 삭제, 완료 섹션 압축(36줄→7줄), 06 초기 버전 아카이브(58줄). |
| **v1.36** | 2026-02-23 | SESSION_46K 중간점검(PM/Sonnet): 로고 수량 교정(34종→67개), 중복/부적절 로고 4종 삭제, 문서 정합성 교정. |
| **v1.31** | 2026-02-20 | SESSION_43 PM(Sonnet): 인원수 전수조사 방법확정, WO_BUILDER_HEADCOUNT_AUTOMATION 발행, 비공식 작업물 정리. |
| **v1.30** | 2026-02-20 | SESSION_42 PM(Sonnet): SESSION_40/41 완료 반영, 차단이슈 원인 교정(설계결함 판정), R-01 신규 등록, seo_OPUS_draft 무효화 처리. |
| **v1.29** | 2026-02-19 | SESSION_39 PM(Sonnet): SESSION_38 중단 반영, 이슈 3건 등록(WO순서오류/seo_OPUS오염/Git미커밋), 다음 실행 목록 확정. |
| **v1.28** | 2026-02-18 | SESSION_37 PM(Sonnet): SESSION_36 완료 반영, WO_CONTENT_CONFIRMATION 신규 발행. |
| **v1.27** | 2026-02-18 | SESSION_35 PM(Sonnet): 외부감사(SESSION_34) 리뷰. H-01/H-04 교정, Builder WO TASK 3 보강(8건), WO_SEO_BASELINE 신규 발행, SESSION_34~35 상태 반영. |
| **v1.26** | 2026-02-18 | SESSION_33 PM(Sonnet): D-034, D-037, D-012 주소 교정, Builder WO 발행. SESSION_31~33 상태 반영. |

> **초기 버전 (v1.0~v1.25)**: [docs/_archive/version_history/06_VERSION_HISTORY_EARLY_VERSIONS.md](docs/_archive/version_history/06_VERSION_HISTORY_EARLY_VERSIONS.md)

---

## 05_NEXT_TASK.md — 즉시 실행 지시서

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.20** | 2026-02-24 | SESSION_47E PM(Sonnet): Architect IA 평가 소환 지시 추가. Gemini 3.1 Builder 능력 검증, IA 14페이지 정합성 평가. |
| **v1.19** | 2026-02-23 | SESSION_46K PM(Sonnet): 롤링배너 Builder WO 발행 확정. 모노크롬+한색 hover 스펙, CSS-only, 67개 로고 전량 사용. |
| **v1.18** | 2026-02-22 | SESSION_46G PM(Gemini): 다원적 AI 스쿼드 운용 원칙(D-042)에 따른 스쿼드 라인업 및 향후 하이브리드 지시 추가. |
| **v1.17** | 2026-02-21 | SESSION_46D PM(Gemini): 46C 감사 후속 PM 처리 완료 반영. 현재 지시 갱신. Builder/Designer WO 착수 선행조건 명시. |
| **v1.16** | 2026-02-21 | SESSION_46B PM(Sonnet): Decision Gate 추가(레이아웃 재설계 방식), IA 14페이지 반영, 1차 예정 지시 갱신(미디어 자산 우선순위). |
| **v1.15** | 2026-02-18 | SESSION_37 PM(Sonnet): SESSION_36 완료 반영. 현재 지시를 콘텐츠 확정(디렉터 직접 입력)으로 교체. |
| **v1.14** | 2026-02-18 | SESSION_35 PM(Sonnet): Builder WO TASK 3 보강(8건), WO_SEO_BASELINE 신규 추가. 현재 지시 갱신. |
| **v1.13** | 2026-02-18 | SESSION_33 PM(Sonnet): Builder WO 발행 완료. 현재 지시를 Builder 구현으로 교체. |
| **v1.12** | 2026-02-18 | SESSION_32 Architect(Opus): Architect 검토 완료. 현재 지시를 PM→Builder WO 발행으로 교체. |
| **v1.11** | 2026-02-18 | SESSION_31 PM(Sonnet): 다음 지시를 Architect 검토(TD-02 Content Collections 설계)로 교체. |
| **v1.10** | 2026-02-17 | SESSION_25 PM(Sonnet) 완료 — 다음 지시를 STEP 1-1 콘텐츠 톤 확정 (Opus 티키타카)으로 갱신. |
| **v1.9** | 2026-02-16 | SESSION_22: Header 모바일 메뉴 긴급 복구 우선순위 변경. 기술 부채 로드맵 반영. |
| **v1.8** | 2026-02-15 | Phase 전환 체크리스트 신설, Architect 필수 호출 지점 명시 추가. D-024 반영. |
| **v1.7** | 2026-02-15 | GPT Designer 제거 및 운영 스쿼드 재편 반영. D-025, D-026 반영. |

> **초기 버전 (v1.0~v1.6)**: [docs/_archive/version_history/06_VERSION_HISTORY_EARLY_VERSIONS.md](docs/_archive/version_history/06_VERSION_HISTORY_EARLY_VERSIONS.md)

---

**관리 지침:**
- 정본 문서 버전 갱신 시, 최신 3개는 해당 문서에 유지하고 나머지는 이 파일에 기록합니다.
- 이 파일은 참조 전용이며, 자주 읽을 필요는 없습니다.
- 문서 변경 이력 추적이 필요할 때만 참조하십시오.
