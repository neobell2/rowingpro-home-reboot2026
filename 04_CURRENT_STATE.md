# 04_CURRENT_STATE.md — 프로젝트 현재 좌표

> **이 문서는 프로젝트의 현재 위치를 보여줍니다.**
> 세션 종료 시 반드시 갱신합니다. 이 문서가 없으면 "지금 어디까지 했는가?"라는 질문이 매번 발생합니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.31** | 2026-02-20 | SESSION_43 PM(Sonnet): 참여인원수 전수조사 방법확정, WO_BUILDER_HEADCOUNT_AUTOMATION 발행, 비공식 작업물 정리. |
| **v1.30** | 2026-02-20 | SESSION_42 PM(Sonnet): SESSION_40/41 반영, 차단이슈 원인 교정, R-01 신규 이슈 등록, seo_OPUS_draft.md 무효화 처리. |
| **v1.29** | 2026-02-19 | SESSION_39 PM(Sonnet): SESSION_38 사후 진단, 이슈 등록, 다음 세션 실행 목록 확정. |
| **v1.28** | 2026-02-18 | SESSION_37 PM(Sonnet): SESSION_36 완료 반영(Content Collections + SEO 기반), 완료 WO/보고서 아카이브(WO 5건, 보고서 11건), WO_CONTENT_CONFIRMATION 신규 발행. |
| **v1.27** | 2026-02-18 | SESSION_35 PM(Sonnet): 외부감사(SESSION_34) 리뷰 완료. H-01 교정(01_PROJECT_CONTEXT.md Phase/페이지수), H-04 교정(WO_TECHNICAL_DEBT_ROADMAP 경로), Builder WO TASK 3 보강(8건), WO_SEO_BASELINE 신규 발행. |
| **v1.26** | 2026-02-18 | SESSION_33 PM(Sonnet): D-034(상품/가격 표기 정책), D-037(Programs 구조 확정), D-012 주소 교정(케이에듀동→케이앤몰동). Builder WO 발행(WO_BUILDER_CONTENT_COLLECTIONS_IMPL). |
| **v1.25** | 2026-02-18 | SESSION_31 PM(Sonnet): 콘텐츠 폴더 정리(_source/ 분리), TD-02 Content Collections 선행 결정, Architect WO 발행, 05_NEXT_TASK 갱신. |
| **v1.24** | 2026-02-17 | SESSION_27 PM(Sonnet) 2차: WO 정비(PHASE_3_ROADMAP HPOC폐기·스쿼드 갱신, GEMINI_TOOLCHAIN COMPLETED), 리포트 아카이브 정리, 보고서 작성, git push 완료. |
| **v1.21** | 2026-02-17 | SESSION_25 PM(Sonnet, D-030 첫 가동): Git 정리, WO 상태 갱신, 네이밍 규칙 수립, docs/_archive/ 전면 정비 완료. |

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

## 진행중

- **SESSION_22 (PM)** — 외부감사 정리 및 Header 긴급 복구 완료 ✅
  - 외부감사 보고서 21건 전수 검토 및 우선순위 분류
  - Header 모바일 메뉴 긴급 복구 Work Order 발행 (WO_HEADER_MOBILE_EMERGENCY)
  - 기술 부채 해결 로드맵 Work Order 발행 (WO_TECHNICAL_DEBT_ROADMAP)
  - 리포트 폴더 정리 (11개 → 3개)
  - 05_NEXT_TASK.md v1.9 갱신
  - ✅ **Header 모바일 메뉴 복구 완료** (Builder/Codex, 2026-02-16)
    - 햄버거 토글, 5가지 닫기 동작, 활성 링크, 빌드 검증 완료
    - Commit: 4efcf16

- **SESSION_27 (PM)** — 전체 완료 ✅
  - config.toml: priority_files에 PROTOCOLS.md 추가
  - GEMINI.md 생성: Gemini Code Assist VSCode 확장 룰파일
  - 거버넌스 오류 수정: 06_VERSION_HISTORY.md 누락 버전 12개, D-031 교정, PROTOCOLS.md 06갱신 의무 명시
  - Gemini 툴체인 현황 파악 및 WO_GEMINI_TOOLCHAIN_REVIEW COMPLETED 처리
  - .claude/settings.local.json: git reset HEAD:* 로 교정 (파괴적 명령 차단)
  - .roo/ 정리 및 최신화 (PROTOCOLS.md v1.1·D-030 기준)
  - 리포트 아카이브 정리 (SESSION_24~26 완료분 이동, SESSION_24_ARCHITECT_AUDIT 유지)
  - PHASE_3_INTEGRATED_ROADMAP_WO: HPOC 폐기 반영, 운영 스쿼드 갱신 (Opus·Sonnet)
  - git push 완료 (origin 동기화, 39커밋)

- **SESSION_28 (Content / Gemini Pro)** — 완료 ✅
  - 17페이지 `_GEMINI_draft.md` 초안 생성 (HPOC 제거, 창업주 정보 정정, 구체적 표현 적용)
  - `text_extract_지오캐치_회사소개서_V2.0_202601.md` 생성

- **SESSION_29 (Content / Opus 4.6)** — 완료 ✅
  - 17페이지 `_OPUS_draft.md` 독립 창작 (Gemini 드래프트 미참조, 앵커링 방지)
  - 톤 원칙: 선언적·짧은 문장·사실 기반·고객 직접 대화체

- **SESSION_30 (Media PD / Gemini Flash)** — 완료 ✅
  - `docs/contents/review/` 신규 생성, 드래프트 34개 이동
  - HTML-based XLS 비교시트 17종 생성 (Original/Gemini/Opus/Director Final 4열)
  - `REVIEW_GUIDE.md` 작성

- **SESSION_31 (PM / Sonnet)** — 완료 ✅
  - 콘텐츠 폴더 정리: `_source/` 분리 (1차 재료 11개 격리), SSOT 21개 루트 정리
  - 설계 이슈 발견: TD-02(Content Collections) 선행 필요 확인
  - `WO_ARCHITECT_CONTENT_COLLECTIONS_REVIEW` 발행

- **SESSION_32 (Architect / Opus 4.6)** — 완료 ✅
  - D-032: Content Collections 설계 확정 (스키마 구조, Builder 재량 17페이지 기준)
  - D-033: 소비자 기준 원칙 확립 (다음 작업자 관점 우선)
  - 잠재 위험 16건 심층점검 보고 (처리 방침: 기존 트랙 배분)

- **SESSION_33 (PM / Sonnet)** — 완료 ✅
  - D-034: 상품/가격 표기 정책 확정 (체험부스 200만+VAT 노출, 나머지 상담)
  - D-037: Programs 구조 확정 (인도어/수상/부스형/MIX — SESSION_16 명세 공백 교정)
  - D-012 주소 교정: 케이에듀동 → 케이앤몰동 (OCR 오류)
  - Builder WO 발행: `WO_BUILDER_CONTENT_COLLECTIONS_IMPL.md`

- **SESSION_34 (External Red Team / GPT-5.2)** — 완료 ✅
  - 레드팀 감사 21개 이슈 발굴 (CRITICAL 3, HIGH 4, MEDIUM 3 등)
  - `npm run build` Exit 0, `astro preview` 재현 점검
  - 보고서: `docs/reports/SESSION_34_REDAUDIT_GPT52.md`

- **SESSION_35 (PM / Sonnet)** — 완료 ✅
  - C-02 RESOLVED: `public/videos/hero-bg.mp4` 디렉터 직접 배치
  - H-01 교정: `01_PROJECT_CONTEXT.md` Phase 3 / 17페이지로 현행화
  - H-04 교정: `WO_TECHNICAL_DEBT_ROADMAP.md` 근거 경로 `docs/_archive/reports/`로 교정
  - Builder WO 보강: `WO_BUILDER_CONTENT_COLLECTIONS_IMPL` TASK 3 8건으로 확장 (H-02 주소교정, H-03 tsconfig, M-01 /colors, M-03 aos)
  - WO_SEO_BASELINE 신규 발행 (C-01: robots.txt / sitemap.xml / OG / canonical)

- **SESSION_36 (Builder / Opus 4.6)** — 완료 ✅ (커밋 5a0cee0)
  - WO_BUILDER_CONTENT_COLLECTIONS_IMPL TASK 1~3 전부 완료
    - TASK 1: src/content/ 구조 신설 (config.ts, 17개 .md, common/)
    - TASK 2: 17개 .astro 파일 Content Collections API 전환
    - TASK 3: 기술 부채 8건 처리 (Lucide 버전 고정, 주소 교정, /colors 삭제, aos 제거 등)
  - WO_SEO_BASELINE 완료 (robots.txt, sitemap.xml, og-default.png 플레이스홀더, MainLayout SEO 메타태그)
  - 빌드: npm run build Exit 0 확인
  - 잔여: og-default.png 실제 브랜드 이미지 교체 필요 (현재 단색 플레이스홀더)

- **SESSION_37 (PM / Sonnet)** — 완료 ✅
  - 완료 WO 5건 아카이브: WO_GEMINI_TOOLCHAIN_REVIEW, WO_DIRECTOR_17page_Text_Creation_Plan, WO_ARCHITECT_CONTENT_COLLECTIONS_REVIEW, WO_BUILDER_CONTENT_COLLECTIONS_IMPL, WO_SEO_BASELINE
  - 보고서 11건 아카이브: SESSION_24~36 전체
  - WO_CONTENT_CONFIRMATION 신규 발행 (디렉터 직접 입력 방식)

- **SESSION_43 (PM / Sonnet)** — 완료 ✅
  - 참여인원수 전수조사 방법 전체 확정
    - 범위: 416건 전수 / 도구: Gemini Flash Vision, 세션당 파일크기 큰 JPG 5장
    - 추산 규칙: 조끼 색깔 수 × 8~15명 (실내/실외 동일), fallback 기본 범위표
    - 실행: VSCode 터미널에서 디렉터가 연도별로 `python headcount.py --year YYYY` 직접 실행
  - `WO_BUILDER_HEADCOUNT_AUTOMATION.md` 발행
  - 비공식 작업물 12건 → `docs/_archive/headcount_scratch_20260219/` 이동
  - 임시파일 (`session_sample_`, `.tmp_frames/`) 삭제

- **SESSION_38 (Content / Opus 4.6)** — ❌ 중단 (ABORTED)
  - SEO title/description 드래프트 작업 중 앵커링 오염 발생
  - 원인: WO TASK 순서 오류(SEO→본문확정) + 설계 결함 (SESSION_40 Architect 판정 — D-040)
  - 보고서: `docs/reports/SESSION_38_CONTENT_OPUS_SEO_ABORT.md`

- **SESSION_39 (PM / Sonnet)** — 완료 ✅ (진단 전용)
  - SESSION 38 사후 진단 및 거버넌스 검토
  - 다음 세션 실행 목록 확정
  - 파일 변경 없음

- **SESSION_40 (Architect / Opus 4.6)** — 완료 ✅ (미커밋)
  - 거버넌스 감사: SESSION_38 원인 판정 (설계 결함), PM WO 거버넌스 위반 판단 → 디렉터 판정으로 추궁 아님
  - SEO 4종 드래프트(GPT/Gemini/Opus1/Opus2) 생산 → `src/content/pages/*.md` 16개 frontmatter 주석 형식으로 직접 병합
  - 활성 title/description 값 미변경 (GPT 원문 유지, 디렉터 선택 대기)
  - 보고서: `docs/reports/SESSION_40_ARCHITECT_OPUS.md`

- **SESSION_41 (External Auditor / Codex CLI)** — 완료 ✅ (감사 전용)
  - 저장소 전수 감사: 구조/기술/보안/배포 리스크 10건 발굴
  - 신규 식별: R-01(trailingSlash vs sitemap 불일치), R-04(스키마 느슨), R-05(회사정보 이중화)
  - 교차검증: R-06(Contact 실연동), R-08(Git 미커밋) — 기존 계획 확인
  - 기각: F-02(SSOT 이원화) — 콘텐츠 작업 플로우 정상, 디렉터 판정
  - 보고서: `docs/reports/SESSION_41_AUDIT_CODEX.md`

- **Phase 3 (Content + Design Polishing)** — 콘텐츠 고도화 및 디자인 폴리싱
  - ✅ **드래프트 생산 완료**: Gemini 17개 + Opus 17개 + HTML 비교시트 17종 (.xls → .html 전환)
  - ✅ **Content Collections 구축 완료** (SESSION_36): src/content/pages/*.md 17개 파일이 실제 콘텐츠 소스
  - ✅ **SEO 4종 드래프트 병합 완료** (SESSION_40): src/*.md 16개 frontmatter에 GPT/Gemini/Opus1/Opus2 주석 삽입. 디렉터 최종 선택 대기
  - 🔄 **콘텐츠 확정 작업 대기 중**: TASK 2(본문 확정) 미시작 — 디렉터 직접 입력 방식
  - ✅ **Header 복구 완료** (SESSION_22, Builder/Codex)
  - STEP 2: Gemini 3.0 Flash — 미디어 자산 생산 및 정제
  - STEP 3: Claude 4.5 Sonnet (Builder/Designer) — 디자인 폴리싱 및 최종 바인딩
  - ✅ **블로커 1 RESOLVED**: npm run build 성공 (Node 22로 고정, Exit 0, dist 생성)
  - ✅ **블로커 2 RESOLVED**: PHASE_3_INTEGRATED_ROADMAP_WO 디렉터 승인 완료 (2026-02-15)
  - ✅ **블로커 3 RESOLVED**: Header 모바일 메뉴 복구 완료 (2026-02-16)

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
