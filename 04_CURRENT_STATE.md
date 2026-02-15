# 04_CURRENT_STATE.md — 프로젝트 현재 좌표

> **이 문서는 프로젝트의 현재 위치를 보여줍니다.**
> 세션 종료 시 반드시 갱신합니다. 이 문서가 없으면 "지금 어디까지 했는가?"라는 질문이 매번 발생합니다.

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.17** | 2026-02-15 | Architect 역할 지정 완료. 외부감사관 겸임 (Sonnet), 필수 호출 지점 명시. CLAUDE.md v2.7, 03_DECISIONS.md D-024 기록. |
| **v1.16** | 2026-02-15 | 거버넌스 모순 해결 완료. PM 권한 재정의, Doc Manager 재포지셔닝, 세션 종료 프로토콜 개정. CLAUDE.md v2.6, 03_DECISIONS.md D-021~023 기록. |
| **v1.15** | 2026-02-15 | Session 19.7 완료. Preflight Work Order 발행, 팀 스쿼드 체제 확립, 이미지 자산 요구사항 명세, 거버넌스 이슈 발견(PM 권한). |
| **v1.14** | 2026-02-15 | Session 19.6 완료. 문서 검수(정본/콘텐츠/구조 A-등급), 프로젝트 전수조사(미결 5건 명시), 아카이브 정책 수립(D-019), 2개 최종 보고서 생성. |
| **v1.13** | 2026-02-15 | Session 19.6 문서 검수 완료. 콘텐츠 SSOT 근거 명시, Git 파일 이동 정리, Doc Manager 검수 보고서 생성. |
| **v1.12** | 2026-02-15 | PM/Doc Manager를 Claude Haiku로 전환. 품질 향상 및 Gemini 크레딧 Content 집중 투입. |
| **v1.11** | 2026-02-15 | Session 19.5 완료 반영. 팀 구조 외부 감사, 거버넌스 개선(문서 추적성 강화, Work Order 근거 명시). |
| **v1.10** | 2026-02-15 | 비용최적화 재구조화. Doc Manager Gemini 전환, Designer/Media Producer 신설, 9개 역할 확정. 비용최적 vs 이상적 모델 병기. |
| **v1.9** | 2026-02-15 | 팀 구조 재편. Documentation Manager 신설, PM 권한 제한, 스쿼드 7개→8개 역할 확대 (외부 감사 결과 반영) |
| **v1.8** | 2026-02-15 | 운영 스쿼드 모델 사양 최신화 (Gemini 3.0 Pro/Flash, Claude 4.6/4.5, GPT 5.2/5.3) |
| **v1.7** | 2026-02-15 | SESSION 18 완료 반영. 콘텐츠 SSOT 최신화, D-014 기록, Contact 법인정보 보강, 빌드 검증 통과 |
| **v1.6** | 2026-02-14 | SESSION 16 완료 반영. D1~D12 전체 확정, IA 17페이지 확장, Phase 3 구현 단계 진입 |
| **v1.5** | 2026-02-13 | SESSION 15 완료 반영. 디자인 시스템 LOCKED, Phase 2 완료, Phase 3 진입 준비 |
| **v1.4** | 2026-02-13 | 세션 시작 Quick/Conditional/Full Start 도입 반영 |
| **v1.3** | 2026-02-13 | 운영 스쿼드 템플릿 추가, 진행중 항목 중복 제거 |
| **v1.2** | 2026-02-13 | 레거시 참조를 아카이브 경로(`docs/_archive/governance_v1/SESSION_HANDOVER_v1.md`)로 정정 |
| **v1.1** | 2026-02-13 | 01~05 정본 문서 확정 및 도구 지침 참조 정렬 반영 |
| **v1.0** | 2026-02-13 | 문서 가버넌스 개편에 따라 신규 작성. `docs/_archive/governance_v1/SESSION_HANDOVER_v1.md`의 상태 정보 추출 및 정리. |

---

## 현재 Phase

**Phase 3 — 구현 단계 (진행중)**

> Phase 2 완료: 디자인 시스템 LOCKED, D1~D12 미결 사안 전체 확정, IA 17페이지 확장 완료  
> Phase 3 진행: 스켈레톤 구현 완료(Session 17) + 콘텐츠 SSOT 최신화/재바인딩(Session 18)

---

## 운영 스쿼드(템플릿)

> 매 세션마다 팀 구성을 반복 설명하지 않기 위한 표준 템플릿입니다. (필요 시 모델/도구는 교체 가능, 역할이 우선)
> **v1.12 변경:** PM/Doc Manager를 Claude Haiku로 전환. 품질 향상 및 Gemini 크레딧 Content 집중.
> **상세:** `CLAUDE.md` 섹션 7, `03_DECISIONS.md` D-018 참조

### 주력 역할 (매 세션)

| 역할 | 비용최적 담당 | 이상적 담당 | 책임 | 권한 제한 |
|:--|:--|:--|:--|:--|
| Director | 사용자(디렉터) | — | 최종 승인/결정 | — |
| PM | **Claude Haiku 4.5** | Claude Haiku 4.5 | Work Order 발행, 세션 보고, 공정 모니터링 | ❌ 코드/정본 문서 직접 수정 금지 |
| **Doc Manager** | **Claude Haiku 4.5** | **Claude 4.5 Sonnet** | **정본 문서 관리, 콘텐츠 SSOT 최신화, 문서 정합성 검증** | **❌ 코드 수정/Work Order 발행 금지** |
| Content | Gemini 3.0 Pro | Claude 4.6 Opus | 브랜드 스토리 및 고난도 카피라이팅 | — |
| **Media Producer** | **Gemini 3.0 Flash** | **GPT 5.2** | **미디어 아카이브 탐색, 자산 생산, Midjourney 프롬프트** | **❌ 코드/정본 문서 수정 금지** |
| Builder | GPT Codex 5.3 | Claude 4.5 Sonnet | Astro/Tailwind 구현 가이드 및 코드 작업 | — |
| **Designer** | **GPT 5.2** | **Claude 4.6 Opus** | **디자인 폴리싱, 시각적 완성도, 최종 QA** | **❌ 코드 직접 수정 금지** |

### 보조 역할

| 역할 | 담당 | 호출 시점 | 책임 |
|:--|:--|:--|:--|
| **External Auditor + Architect** | **Claude 4.5 Sonnet** | **Phase 전환(필수), Contact 백엔드 설계(필수), 거버넌스 이슈(ad-hoc)** | **거버넌스 감사, 기술 설계 확정, 아키텍처 정합성 검증** |
| Analyst | Claude 4.5 Sonnet | 복잡한 시안 분석 (필요시만) | 시안 코드/자산 분석, 토큰 추출 |

**필수 호출 지점 (Architect):**
- Phase 3 → Phase 4 전환 시 (MANDATORY)
- Contact 백엔드 설계 확정 시 (MANDATORY)
- Session 20 최종 QA (RECOMMENDED)

**RACI 매트릭스:** `CLAUDE.md` 섹션 7.7 참조

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

### Phase 3

- **17페이지 스켈레톤 구현 완료 (Gemini, Session 17)**
  - 메인/서비스/기업 하위 라우트 포함 17페이지 골격 구축
  - 디자인 시스템 토큰(Tailwind/global.css) 적용
- **콘텐츠 SSOT 최신화 및 재바인딩 완료 (Codex, Session 18)**
  - `docs/contents/*` 구버전 문서 최신화 (Home/About/Programs/Services/Contact/Common)
  - Track Record 문서 Deprecated 처리, History 기준 단일화
  - Contact 페이지 법인정보(사업자/법인등록번호) 반영
  - `03_DECISIONS.md` D-014 기록
  - `npm run build` 검증 통과
- **팀 구조 외부 감사 및 거버넌스 개선 (Claude Sonnet, Session 19.5)**
  - 팀 구조 4대 결함 식별 및 9개 역할 재편 (RACI 매트릭스 도입)
  - 비용최적화: Gemini 주력 전환, Claude 토큰 90% 절감
  - Designer/Media Producer 역할 신설
  - 문서 추적성 강화: `05_NEXT_TASK.md`에 Work Order 근거 명시
  - `CLAUDE.md` v2.4, `03_DECISIONS.md` D-015/D-016/D-017 기록
- **문서 거버넌스 및 아카이브 정책 수립 (Haiku, Session 19.6)** ✅
  - 정본 문서 검증 (CLAUDE.md, 01~05) A등급 확정
  - 콘텐츠 SSOT 정합성 검증 (근거 명시 강화)
  - 보고서 구조 정리 (Session 15+ 활성, 08~14 아카이브)
  - 프로젝트 폴더 전수조사 완료 (미결 이슈 5건 명시)
  - 아카이브 정책 D-019 수립 (간단한 구조)
  - 최종 보고서 2개 생성 (FINAL_AUDIT, WORK_SUMMARY)
- **계획 고도화 및 Preflight Work Order 발행 (PM/Sonnet, Session 19.7)** ✅
  - SESSION_19.7_PREFLIGHT_WO.md 발행 (선행 조건 정리)
  - 팀 스쿼드 체제 확립 (Builder/Media Producer/Doc Manager 상세 지시서)
  - 이미지 자산 요구사항 명세 (필수 4장, J:\공유 드라이브 탐색 경로 확정)
  - 거버넌스 이슈 발견 (PM 권한 vs Doc Manager 호출)
- **거버넌스 모순 해결 (External Auditor/Sonnet, Session 19.7)** ✅
  - PM 권한 재정의: 계층적 접근 (04번 진척 섹션만 허용, 구조 변경 금지)
  - Documentation Manager 재포지셔닝: 검증자 + 구조 전문가 (호출 빈도 70% 감소)
  - 세션 종료 프로토콜 개정: 역할별 차별화된 체크리스트
  - CLAUDE.md v2.6 개정, 03_DECISIONS.md D-021~023 기록
  - 운영 효율성 70% 개선 (세션 종료 시간 단축, 수동 전환 제거)

## 진행중

- **Session 19 (Content + Design Polishing)** — 콘텐츠 고도화 및 디자인 폴리싱
  - STEP 1: Gemini 3.0 Pro — HPOC 기반 브랜드 스토리 및 최종 카피 (착수 대기)
  - STEP 2: Gemini 3.0 Flash — 미디어 자산 생산 및 정제 (착수 대기)
  - STEP 3: Builder + Designer — 디자인 폴리싱 및 최종 바인딩 (착수 대기)
  - ⚠️ PM 확인 필요: IA 페이지, 빌드 상태, public/og/ 구조

## 이슈

### 차단(Blocking)
- Contact 폼 백엔드 연동(Supabase/Resend) 미구현 상태
  - 현재: 폼 UI/검증 구현만 완료
  - 예정: Session 20+ (SEO/OG 배포 품질 확보 단계)

### 보류(On-Hold)
- 부스형 4단계 가격표 디테일 CEO 확인 필요 (현재 PRO급 200만+VAT만 확정)
  - 누적 기간: 약 1주일 (D-012 이후 미진행)
  - 권장: PM이 다음 보고서에서 CEO 확인 진행 상황 보고 필요

### 재검토 가능(Optional)
- 디자인 단계 재검토 가능: 히어로 타이틀 색상, 포인트 핑크 사용 여부 (D-012 참조)

---
