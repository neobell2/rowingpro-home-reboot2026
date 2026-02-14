# REPO_DIAGNOSTIC_REPORT_2026-02-13.md — 리포지토리 현상 파악 및 리스크 평가

**작성일:** 2026-02-13  
**작성자:** Codex(GPT)  
**범위:** 로컬 워크스페이스 전체(코드/문서/자산/깃 상태) — 읽기 전용 점검 결과 요약  
**제약:** 본 문서는 “현상 파악 + 의견”만 포함하며, 수정/삭제/이동/변경은 수행하지 않음

---

## 0) TL;DR (핵심 요약)

- 문서 체계(SSOT: `CLAUDE.md` + `01~05`)는 존재하며 운영 기준은 잡혀 있습니다.
- 현재는 디자인 시스템이 확정(LOCKED)되기 전 “혼재 과도기”로 보이며, **스펙(`02_ARCHITECTURE.md`) ↔ 실제 코드(`src/`, `tailwind.config.cjs`, `global.css`) 간 정합성이 낮습니다.**
- **협업/재현성 리스크:** 핵심 워크오더/보고서 일부가 Git에 미추적(`untracked`) 상태입니다.
- **자산 중복:** 동일 로고/영상 파일이 여러 위치에 중복 저장(해시 동일)되어 “정본 위치” 혼선 가능성이 있습니다.
- `docs/design/`는 로컬 기준 약 380MB로 매우 크며, 원인 대부분은 드래프트 소스 폴더 내부의 `node_modules` 존재입니다(현재 Git에는 거의 추적되지 않음).

---

## 1) 현상 파악 결과

### 1.1 Git 상태(로컬 기준)

- `master`가 `origin/master`보다 **1 commit ahead** 상태입니다.
  - 커밋: `c572111` — `docs: remove docs/_trash`
- 커밋에 포함되지 않은 로컬 변경이 남아 있습니다.
  - modified: `04_CURRENT_STATE.md`, `05_NEXT_TASK.md`, `docs/work_orders/SESSION_12_OPUS_WO.md`
  - untracked: `docs/reports/SESSION_12_LEGACY_INTEGRATION_REPORT.md`, `docs/reports/SESSION_14_REPORT.md`, `docs/work_orders/SESSION_15_SONNET_DESIGN_REVIEW_WO.md`

**의미:** “로컬에서는 중요한 문서가 존재하지만, 원격/다른 클론 환경에서는 사라질 수 있는” 상태입니다.

### 1.2 문서 체계(폴더 역할)

- 루트 SSOT 및 핵심 문서 존재 확인:
  - `CLAUDE.md`, `01_PROJECT_CONTEXT.md`, `02_ARCHITECTURE.md`, `03_DECISIONS.md`, `04_CURRENT_STATE.md`, `05_NEXT_TASK.md`, `README.md`, `config.toml`
- `docs/` 하위 구조(상위 레벨):
  - `docs/contents/` (원고 14개, `history_master.md` 포함)
  - `docs/design/` (드래프트/폰트/스크린샷 등, 매우 대용량)
  - `docs/work_orders/` (워크오더)
  - `docs/reports/` (세션/감사/권고/리포트)
  - `docs/_archive/` (레거시 보관)
- 참고: `README.md`에는 `docs/_trash/`가 구조로 기재되어 있으나, 현재 Git 히스토리상 `docs/_trash`는 삭제 커밋이 존재합니다(문서-현실 불일치 가능).

### 1.3 “디자인 시스템/토큰” 혼재 상태(스펙 ↔ 구현)

**스펙(문서) 기준**
- `02_ARCHITECTURE.md`는 Draft03 기준:
  - 컬러: `Deep #05080F`, `Neon #00F0FF`, `Cobalt #2D5BFF`
  - UI 원칙: Glassmorphism / Neon Glow / Cinematic Wrapper
  - 폰트: Readex Pro(디스플레이) + Pretendard(본문)
  - 시안 코드 경로: `docs/design/Rowingpro-Draft03-Wave-3D/index.html`

**구현(코드) 관측**
- `tailwind.config.cjs`의 컬러/톤은 `primary/#0a9afa`, `orange/#f4741a`, `dark/light/text` 등 “Upclub 스타일” 성격이 강합니다.
- `src/styles/global.css`는 또 다른 “Sky Blue 단일 시스템(variables)”을 사용합니다.
- `src/pages/index.astro`는 Hero에서 로컬 비디오가 아니라 외부 이미지(unsplash)를 사용하고, CTA/카피도 “Upclub 스타일” 톤이 섞여 있습니다.
- `src/pages/*` 다수는 수백 바이트 수준의 최소 페이지 형태(스켈레톤)로 보이며, `04_CURRENT_STATE.md`의 “저품질 .astro 페이지 전면 재작성 필요” 이슈와 정합합니다.

**의미:** 혼재 자체는 과도기라 가능하지만, “어느 것이 기준이고 어느 것이 실험인지” 경계가 없으면 LOCKED 이후 정리 난이도가 커집니다.

### 1.4 `docs/design/`의 추적/비추적 불균형(대용량 원인)

- `docs/design/` 내부에 `node_modules` 폴더가 실제 존재합니다(로컬 디스크 용량에 큰 영향).
- Git 추적 상태는 드래프트별로 편차가 큽니다.
  - Draft03 폴더는 디스크에 수천 파일이 있으나, Git에는 `index.html` 1개만 추적되는 상태입니다.
  - Draft01/02는 “Original Source”의 일부 핵심 파일만 선택적으로 추적됩니다.

**의미:** 로컬 작업/백업/동기화 비용이 커질 수 있고, 실수로 대용량이 Git에 유입될 위험이 있습니다(현재는 `.gitignore`로 `node_modules/` 기본 제외).

### 1.5 자산 중복(해시 기준 동일 파일)

아래는 내용이 완전히 동일(sha256 동일)한 중복 파일입니다.

- 로고 JPG 3중복:
  - `assets/images/로잉프로로고.jpg`
  - `docs/design/로잉프로로고.jpg`
  - `public/logo.jpg`
- 히어로 webm 2중복:
  - `docs/design/Hero_bg.webm`
  - `public/videos/hero-bg.webm`
- `public/favicon.svg`와 `public/logo.svg`가 동일 파일

**의미:** 최종적으로 “정본 위치”를 하나로 정하면 정리 가능하지만, 지금 상태에서는 파일 참조 경로가 분산될 여지가 있습니다.

### 1.6 시안(Draft03) 코드의 외부 의존성(오프라인/재현성 리스크)

`docs/design/Rowingpro-Draft03-Wave-3D/index.html`은 다음 외부 리소스를 사용합니다.

- Tailwind CDN (`https://cdn.tailwindcss.com`)
- Lucide (`https://unpkg.com/lucide@latest`)
- Google Fonts / Pretendard CDN
- Spline iframe(외부 URL)
- Mixkit mp4(외부 URL)

**의미:** 시안 재현은 빠르지만, 네트워크 제한/차단 환경에서는 동일하게 렌더링되지 않을 수 있습니다.

---

## 2) 위험도 평가(우선순위)

| 위험도 | 항목 | 현상 | 영향 |
|---:|---|---|---|
| **CRITICAL** | 핵심 문서 untracked | Work Order/Report 일부가 Git 미추적 | 다른 환경에서 작업 시작 불가, 링크 깨짐, 승인/근거 자료 소실 |
| **HIGH** | 스펙↔구현 정합성 낮음 | `02_ARCHITECTURE`(Draft03) vs Tailwind/GlobalCSS/페이지 톤 혼재 | LOCKED 후 리팩토링 비용 급증, “무엇이 기준인지” 혼선 |
| **HIGH** | 디자인 자산 대용량/분산 | `docs/design` 약 380MB + 드래프트별 추적 불균형 | 백업/동기화/작업 속도 저하, 실수로 대용량 커밋 위험 |
| **MEDIUM** | 자산 중복(정본 위치 불명) | 로고/비디오가 여러 폴더에 중복 | 참조 경로 분기, 실수로 다른 파일 사용 가능 |
| **MEDIUM** | 문서-현실 불일치 | `README`가 `docs/_trash`를 구조로 언급 | 신규 참여자 혼선, 운영 규칙 오해 |
| **LOW~MEDIUM** | Draft03 외부 의존성 | CDN/Spline/Mixkit 사용 | 오프라인에서 시안 검토/재현 어려움 |

---

## 3) 제가 “필요하다”고 보는 요소(정리 관점)

### 3.1 혼재 기간 운영을 위한 최소 규칙(강추)

- **정본 후보 1개 명시:** 현재 “채택 후보(기준)” 디자인 시스템이 무엇인지(예: Draft03) 1줄로 고정 표기
- **실험 영역 분리:** 실험용 토큰/페이지는 “임시” 표시(파일/폴더/명명 규칙 중 하나로 통일)
- **LOCKED 전 체크리스트:** LOCKED 전 반드시 정리할 항목을 목록화(토큰 소스, 로고/영상 정본 위치, 문서 링크 정합 등)

### 3.2 협업 재현성 확보(필수)

- **워크오더/핵심 보고서의 Git 추적 상태 정리**(특히 `docs/work_orders/*`, `docs/reports/*`에서 “현재 세션의 근거 문서”)

### 3.3 자산 정본 위치 1개로 통일(LOCKED 이후 권장)

- 로고: `public/logo.svg`(또는 `public/logo.png`) 등 1개만 “정본”으로 확정
- 히어로 영상: `public/videos/hero-bg.webm` 등 1개만 “정본”으로 확정
- 나머지는 “보관용/참조용”이면 `docs/_archive` 또는 별도 규정된 위치로 이동(단, 이는 작업 승인 후 수행)

---

## 4) 권장 다음 액션(제안만, 미수행)

1. **CRITICAL 해결:** untracked 상태인 워크오더/리포트의 추적 여부를 결정(추적한다면 Git에 포함)
2. “현재 채택 후보” 디자인 시스템을 1개로 명시하고, 혼재 요소를 “임시/실험”으로 분리
3. 중복 자산은 LOCKED 이후 “정본 1개 + 나머지 정리” 계획 확정
4. `docs/design` 대용량 폴더는 “추적/비추적 정책”을 명문화(특히 드래프트 소스와 `node_modules`)

---

**끝.**

