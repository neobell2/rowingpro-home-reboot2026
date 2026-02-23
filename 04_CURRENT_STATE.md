# 04_CURRENT_STATE.md — 프로젝트 현재 좌표

> **이 문서는 프로젝트의 현재 위치를 보여줍니다.**
> 세션 종료 시 반드시 갱신합니다. 이 문서가 없으면 "지금 어디까지 했는가?"라는 질문이 매번 발생합니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.39** | 2026-02-24 | SESSION_46L PM(Sonnet): WO_BUILDER_IA_TRANSITION 발행 완료 — Codex+Sonnet 하이브리드 방식, QA 프로토콜 추가. |
| **v1.38** | 2026-02-24 | SESSION_46L PM(Sonnet): 거버넌스 다이어트 완료 — 해결된 이슈 4개 삭제, 완료 섹션 압축(36줄→7줄), 06 초기 버전 아카이브(58줄). |
| **v1.37** | 2026-02-24 | SESSION_46L Builder+PM(Sonnet): 클라이언트 로고 롤링배너 구현 완료. KIBS.png 제거(66개), 모노크롬, 70초/루프. |

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
| **PM (Doc Manager 통합)** | **Claude 4.6 Sonnet** | **WO 발행, 세션 보고, 공정 모니터링, 정본 문서 정합성 검증, 문서 체계 관리** | **❌ 코드 수정, 정본 구조 변경(승인 필요), Phase 전환 결정** |
| Content | Gemini 3.1 Pro | 브랜드 스토리 및 고난도 카피라이팅 | — |
| **Media Producer** | **Gemini 3.0 Flash** | **미디어 아카이브 탐색, 자산 생산, Midjourney 프롬프트** | **❌ 코드/정본 문서 수정 금지** |
| Builder | **Claude 4.6 Sonnet** | Astro/Tailwind 구현 가이드 및 코드 작업 | — |
| **Designer** | **Claude 4.6 Sonnet** | **디자인 폴리싱, 시각적 완성도, 최종 QA** | **❌ 코드 직접 수정 금지** |

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

> **상세 이력**: [docs/_archive/04_COMPLETED_LOG.md](docs/_archive/04_COMPLETED_LOG.md)

- **Phase 1~2**: 기획/설계, 디자인 시스템 LOCKED, IA 17페이지 확장
- **Phase 3 (완료분)**: 스켈레톤 구현, 콘텐츠 SSOT, 거버넌스 감사, IA 14페이지 재설계, 롤링배너 구현

> SESSION_22~SESSION_46L 상세 이력은 아카이브 참조

## 진행중

- **Phase 3 (Content + Design Polishing)** — 콘텐츠 고도화 및 디자인 폴리싱
  - ✅ **드래프트 생산 완료**: Gemini 17개 + Opus 17개 + HTML 비교시트 17종
  - ✅ **Content Collections 구축 완료** (SESSION_36): src/content/pages/*.md 17개
  - ✅ **SEO 4종 드래프트 병합 완료** (SESSION_40): 16개 frontmatter 주석 삽입
  - ✅ **IA 14페이지 재설계 확정** (SESSION_46B+46C): D-040
  - ✅ **SESSION_46C 감사 후속 PM 처리 완료** (SESSION_46D): PM-01~PM-14
  - ✅ **클라이언트 로고 66개 확보 완료** (SESSION_46H~46L): `/public/assets/images/logos/` (KIBS.png 제거)
  - ✅ **롤링배너 구현 완료** (SESSION_46L): `ClientLogosBanner.astro`, 모노크롬, 70초/루프
  - ✅ **WO_BUILDER_IA_TRANSITION 발행 완료** (SESSION_46L): Codex 주/Sonnet 검수, QA 프로토콜 6개 항목
  - ✅ **IA 전환 구현 완료** (SESSION_46M): 17페이지 → 14페이지 구조 축소, TS 타입 스키마 에러 완벽 해결
  - 🔄 **콘텐츠 확정 작업 대기**: index.md 주석 해제 (디렉터 직접 입력)
  - 🔄 **STEP 4: Designer+Builder — 레이아웃 재설계** (Decision Gate 후)

## 이슈

### 차단(Blocking)

- **R-01: trailingSlash vs sitemap 불일치** — 신규 식별 (SESSION_41)
  - 현상: `astro.config.mjs` `trailingSlash: 'never'` ↔ `public/sitemap.xml` trailing slash 버전 혼용
  - 영향: 크롤러 중복 URL 인식, SEO 기반 투자 효과 반감
  - 해결: Builder WO에 포함 (trailingSlash 정책 일원화 + sitemap.xml 교정)

- **Git 미커밋** — SESSION 38~41 작업물 미반영
  - 대상: *_REVIEW.html 17개, ai_studio_package/, seo_*.md, 보고서 4개, src/*.md 16개(SEO 주석), WO 수정분
  - 해결: SESSION_42 PM 커밋 (디렉터 승인 후)

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
