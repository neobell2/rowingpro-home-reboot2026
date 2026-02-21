# 04_CURRENT_STATE.md — 프로젝트 현재 좌표

> **이 문서는 프로젝트의 현재 위치를 보여줍니다.**
> 세션 종료 시 반드시 갱신합니다. 이 문서가 없으면 "지금 어디까지 했는가?"라는 질문이 매번 발생합니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.34** | 2026-02-21 | SESSION_46D PM(Gemini): SESSION_46C 감사 후속조치 PM-01~PM-14 일괄 처리 완료. 완료 항목 경량화. |
| **v1.33** | 2026-02-21 | SESSION_46B PM(Sonnet): 컨텐츠 중간점검 완료(16/17), IA 재설계 확정(14페이지), 기업 서비스 통합(HRD 교육), Index 구성(7섹션+롤링배너 30개), 레이아웃 재설계 Decision Gate 설정. |
| **v1.32** | 2026-02-20 | SESSION_44 PM(Sonnet): 비공식 문서관리 — 버전히스토리 교정(04/05/06), 폴더 전수점검, legacy/ 압축, 빈폴더·위치오류 교정 7건. |
| **v1.31** | 2026-02-20 | SESSION_43 PM(Sonnet): 참여인원수 전수조사 방법확정, WO_BUILDER_HEADCOUNT_AUTOMATION 발행, 비공식 작업물 정리. |

> 📋 **전체 버전 히스토리:** [06_VERSION_HISTORY.md](06_VERSION_HISTORY.md)

---

## 현재 Phase

**Phase 3 — 구현 단계 (진행중)**

> Phase 2 완료: 디자인 시스템 LOCKED, D1~D12 미결 사안 전체 확정, IA 17페이지 확장 완료  
> Phase 3 진행: 스켈레톤 구현 완료(Session 17) + 콘텐츠 SSOT 최신화/재바인딩(Session 18)

---

## 운영 스쿼드(템플릿)

> 매 세션마다 팀 구성을 반복 설명하지 않기 위한 표준 템플릿입니다. (필요 시 모델/도구는 교체 가능, 역할이 우선)
> **v1.20 변경:** D-030 반영 — PM+DocManager 통합, Sonnet 배정. Haiku PM 업무품질 문제(SESSION_24) 및 Architect 설계 결함 교정.
> **상세:** [ROLES.md](ROLES.md), `03_DECISIONS.md` D-030 참조

### 주력 역할 (매 세션)

| 역할 | 담당 | 책임 | 권한 제한 |
|:--|:--|:--|:--|
| Director | 사용자(디렉터) | 최종 승인/결정 | — |
| **PM (Doc Manager 통합)** | **Claude 4.5 Sonnet** | **WO 발행, 세션 보고, 공정 모니터링, 정본 문서 정합성 검증, 문서 체계 관리** | **❌ 코드 수정, 정본 구조 변경(승인 필요), Phase 전환 결정** |
| Content | Gemini 3.0 Pro | 브랜드 스토리 및 고난도 카피라이팅 | — |
| **Media Producer** | **Gemini 3.0 Flash** | **미디어 아카이브 탐색, 자산 생산, Midjourney 프롬프트** | **❌ 코드/정본 문서 수정 금지** |
| Builder | **Claude 4.5 Sonnet** | Astro/Tailwind 구현 가이드 및 코드 작업 | — |
| **Designer** | **Claude 4.5 Sonnet** | **디자인 폴리싱, 시각적 완성도, 최종 QA** | **❌ 코드 직접 수정 금지** |

### 보조 역할

| 역할 | 담당 | 호출 시점 | 책임 |
|:--|:--|:--|:--|
| **External Auditor + Architect** | **Claude Opus 4.6** | **Phase 전환(필수), Contact 백엔드 설계(필수), 거버넌스 이슈(ad-hoc)** | **거버넌스 감사, 기술 설계 확정, 아키텍처 정합성 검증** |
| Analyst | Claude 4.5 Sonnet | 복잡한 시안 분석 (필요시만) | 시안 코드/자산 분석, 토큰 추출 |

**필수 호출 지점 (Architect):**
- Phase 3 → Phase 4 전환 시 (MANDATORY)
- Contact 백엔드 설계 확정 시 (MANDATORY)
- Session 20 최종 QA (RECOMMENDED)

**RACI 매트릭스:** [ROLES.md](ROLES.md) 참조

---

## 완료

> 상세 이력: [docs/_archive/04_COMPLETED_LOG.md](docs/_archive/04_COMPLETED_LOG.md)

- Phase 1: 기획/설계 완료
- Phase 2: 디자인 시스템 LOCKED, D1~D12 확정, IA 17페이지 확장
- Phase 3 (완료분): 스켈레톤 구현, 콘텐츠 SSOT 최신화, 거버넌스 감사 3회, Header 복구, Git/문서 정비, CLAUDE.md 경량화
- SESSION_22~31: 외부감사 정리, Header 복구, Content Collections 설계, 콘텐츠 드래프트 3종, 비교시트 생산
- SESSION_32~37: Architect Content Collections 설계 확정, Builder WO 구현, SEO 기반 구축, WO 아카이브 정비
- SESSION_38~44: SEO 드래프트 병합, 외부감사(Codex), 폴더 정비, headcount 자동화 WO 발행
- **SESSION_46B (PM/Sonnet)**: IA 14페이지 재설계 확정, Index 7섹션, Decision Gate 설정
- **SESSION_46C (Architect/Opus)**: 통합 감사(정합성/업무/심층/로지컬), 가비지 5건 삭제, D-039 검증, AD-01 추인, 빌드 성공
- **SESSION_46D (PM/Gemini — 이번 세션 완료)**:
  - PM-01: D-040(IA 14페이지) 03_DECISIONS.md 등록
  - PM-02: 02_ARCHITECTURE.md 14페이지 IA 전면 갱신, GNB/Footer/리소스 교정
  - PM-03: 01_PROJECT_CONTEXT.md 17→14페이지, IA 간접화
  - PM-04: 04_CURRENT_STATE.md 경량화 (이 항목)
  - PM-06: WO_CONTENT_CONFIRMATION SUPERSEDED
  - PM-07: PHASE_3_INTEGRATED_ROADMAP_WO → _archive/work_orders/
  - PM-08: WO_BUILDER_HEADCOUNT_AUTOMATION COMPLETED + 아카이브
  - PM-09: docs/IA.md 삭제
  - PM-10: NAMING_CONVENTIONS.md 경로 교정
  - PM-11/12: docs/contents/ .md 21개+.html 1개 삭제 (src/content/pages/에 이전 완료)
  - DD-03: public/logo.jpg+logo.png → public/images/ 이동

## 진행중

- **Phase 3 (Content + Design Polishing)** — 콘텐츠 고도화 및 디자인 폴리싱
  - ✅ **드래프트 생산 완료**: Gemini 17개 + Opus 17개 + HTML 비교시트 17종
  - ✅ **Content Collections 구축 완료** (SESSION_36): src/content/pages/*.md 17개
  - ✅ **SEO 4종 드래프트 병합 완료** (SESSION_40): 16개 frontmatter 주석 삽입
  - ✅ **IA 14페이지 재설계 확정** (SESSION_46B+46C): D-040
  - ✅ **SESSION_46C 감사 후속 PM 처리 완료** (SESSION_46D): PM-01~PM-14
  - 🔄 **콘텐츠 확정 작업 대기**: index.md 주석 해제 (디렉터 직접 입력)
  - 🔄 **Builder IA 전환 WO 발행 대기**: PM-14 (본 세션 마지막)
  - STEP 2: Media PD — 클라이언트 로고 30개 수집 (WO_MEDIA_LOGO_COLLECTION)
  - STEP 3: Builder — IA 전환 구현
  - STEP 4: Designer+Builder — 레이아웃 재설계 (Decision Gate 후)

## 이슈

### 차단(Blocking)

- **R-01: trailingSlash vs sitemap 불일치** — 신규 식별 (SESSION_41)
  - 현상: `astro.config.mjs` `trailingSlash: 'never'` ↔ `public/sitemap.xml` trailing slash 버전 혼용
  - 영향: 크롤러 중복 URL 인식, SEO 기반 투자 효과 반감
  - 해결: Builder WO에 포함 (trailingSlash 정책 일원화 + sitemap.xml 교정)

- **Git 미커밋** — SESSION 38~41 작업물 미반영
  - 대상: *_REVIEW.html 17개, ai_studio_package/, seo_*.md, 보고서 4개, src/*.md 16개(SEO 주석), WO 수정분
  - 해결: SESSION_42 PM 커밋 (디렉터 승인 후)

~~**WO_CONTENT_CONFIRMATION TASK 순서 오류**~~ → ✅ **RESOLVED (SESSION_40)**
  - TASK 1.5(SEO)는 SESSION_40 Architect가 src 직접 편집 방식으로 완료 처리
  - 원인(교정): WO TASK 순서 오류 + 설계 결함 (PM WO 거버넌스 위반 아님 — 디렉터 판정)

~~**seo_OPUS_draft.md 오염**~~ → ✅ **무효화 (SESSION_40)**
  - SESSION_40에서 src 직접 편집으로 대체. 무효화 주석 추가 완료 (SESSION_42)
- ~~**Header 모바일 메뉴 기능 파산** (Session 21 외부감사 발견)~~ → ✅ **RESOLVED (Session 22, Builder/Codex)**
  - 현상: 모바일(360px~768px)에서 햄버거 버튼 클릭 시 메뉴 미동작
  - 원인: Session 17 스켈레톤 구현 시 미완성 (모바일 메뉴 스크립트/패널 마크업 누락)
  - 해결: 햄버거 토글, 5가지 닫기 동작, 활성 링크, 글라스모피즘 적용 완료
  - 검증: npm run build Exit 0, 모바일 동작 확인 완료
  - Work Order: docs/work_orders/WO_HEADER_MOBILE_EMERGENCY.md
  - Report: docs/reports/SESSION_22_BUILDER_CODEX.md

- ~~**npm run build 실패** (Session 20 발견)~~ → ✅ **RESOLVED (Session 21, Builder/Codex)**
  - 원인: Node v24 + Astro 4.16.19 호환성 (Windows crash 0xC0000409)
  - 해결: Node 22 LTS로 빌드 경로 고정 (package.json)
  - 검증: npm run build Exit 0, dist/ 생성, preview HTTP 200

- Contact 폼 백엔드 연동(Supabase/Resend) 미구현 상태
  - 현재: 폼 UI/검증 구현만 완료
  - 예정: Phase 4 (SEO/OG 배포 품질 확보 단계)

### 보류(On-Hold)
- 부스형 4단계 가격 티어 세부 확정 (D-034: SIMPLE/CORE/PRO/MASTER 틀 확정, 세부 금액 CEO 확인 필요)
  - 현재 확정: PRO급 200만+VAT (기준점), SIMPLE은 과거 자료 60만 (검토 필요)
  - 처리: Builder가 서비스 이벤트 페이지 구현 시 플레이스홀더 처리 후 별도 확정

- Google Workspace 다운사이징 (D-038: 구글챗 이전 완료 + 스토리지 외부 이전 후 Phase 4에서 실행)

### 재검토 가능(Optional)
- 디자인 단계 재검토 가능: 히어로 타이틀 색상, 포인트 핑크 사용 여부 (D-012 참조)

---
