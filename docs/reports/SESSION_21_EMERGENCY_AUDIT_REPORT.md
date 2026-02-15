# [외부감사] 프로젝트 긴급 전수조사 보고서

**작성자:** External Auditor (Gemini 3.0 Pro)  
**일시:** 2026-02-15 (Session 21 긴급 감사)  
**대상:** 로잉프로 Reboot 2026 프로젝트 전체

---

## 1. 개요 및 총평

본 감사는 디렉터의 긴급 요청에 따라 수행되었습니다. 현재 프로젝트는 Phase 3(구현 단계)에 진입하여 스켈레톤 구현을 완료하고 콘텐츠 고도화 및 디자인 폴리싱을 앞두고 있습니다.

**종합 평가:**  
프로젝트의 구조(IA, 디자인 시스템)와 운영 체계(거버넌스)는 비교적 잘 정립되어 있으나, **구현 디테일(코드 레벨)에서 디자인 시스템 준수 미흡, 컴포넌트 파편화, 모바일 대응 부족** 등의 문제가 발견되었습니다. 특히 **`Header` 컴포넌트의 구현 상태**가 디자인 시스템 및 IA 정의와 불일치하며 심각하게 파손되어 있습니다. 또한, **빌드 환경(Node 버전) 이슈**는 해결된 것으로 보이나 지속적인 모니터링이 필요합니다.

---

## 2. 주요 문제점 (Critical Findings)

### 2.1. `Header` 컴포넌트의 심각한 결함 (Critical)
- **위치:** `src/components/Header.astro`
- **현상:**
  - **마크업 파손:** `Header` 컴포넌트 내부 코드가 미완성 상태이거나 복사/붙여넣기 오류로 추정되는 흔적이 있음.
  - **IA 불일치:** `CLAUDE.md` 및 `02_ARCHITECTURE.md`에 정의된 GNB 메뉴(Home, About, Programs, Service, History, Contact)가 올바르게 구현되지 않았거나 링크가 깨져 있을 가능성이 높음.
  - **모바일 메뉴 미구현:** 햄버거 메뉴 버튼(`md:hidden`)은 존재하나, 클릭 시 작동하는 스크립트나 메뉴 패널 마크업이 전무함. 모바일에서 네비게이션 불가능.
  - **스타일링 오류:** Tailwind 클래스가 난잡하게 적용되어 있거나, `glass-panel` 등 공통 유틸리티를 활용하지 않음.

### 2.2. 디자인 시스템 준수 미흡 (Major)
- **현상:**
  - `src/pages/index.astro`, `about.astro`, `contact.astro`, `service/index.astro` 등 주요 페이지에서 버튼(`btn-primary`, `btn-secondary`) 및 카드(`glass-panel`) 스타일을 일관되게 사용하려 노력했으나, 일부 하드코딩된 스타일(`style="..."`)이나 임의의 Tailwind 클래스 조합이 발견됨.
  - **Neon 컬러 오남용:** `text-neon` 등이 일부 링크나 강조에 사용되었으나, `02_ARCHITECTURE.md`의 "극도로 절제" 원칙과 달리 다소 산만하게 배치될 우려가 있음.

### 2.3. 컴포넌트 파편화 (Minor)
- **현상:**
  - `Section` 단위의 컴포넌트화가 이루어지지 않아 각 페이지 파일(`index.astro`, `about.astro` 등)의 길이가 길어지고 코드 중복이 발생함. (예: Hero 섹션, Stats 섹션 등)
  - `Footer` 내의 소셜 링크나 패밀리 사이트 링크 등이 정의되지 않음 (기획 부재일 수 있으나 확인 필요).

### 2.4. 빌드 및 환경 설정 (Resolved but Monitor)
- **현상:** `package.json`에 `node@22` 강제 설정이 추가되어 빌드 오류는 해결된 것으로 보임.
- **권고:** 향후 배포 환경(Cloudflare Pages 등)에서도 Node.js 22 버전을 명시적으로 선택해야 함.

---

## 3. 상세 분석 결과

| 대상 | 상태 | 상세 내용 |
|:--|:--|:--|
| **`Header.astro`** | ❌ **CRITICAL** | 모바일 메뉴 스크립트/마크업 누락, GNB 링크 검증 필요. 최우선 수정 대상. |
| `Footer.astro` | ⚠️ **WARN** | 기본 정보는 있으나 디자인적 완성도가 낮음. |
| `index.astro` (Home) | ⚠️ **WARN** | Video Loop 배경 구현은 되어 있으나, 로딩 최적화(Poster 이미지 등) 고려 부족. |
| `about.astro` | ✅ PASS | 구조 및 콘텐츠 바인딩 상태 양호. |
| `contact.astro` | ✅ PASS | 폼 미구현 상태(안내 문구 대체)로 정상. |
| `service/index.astro` | ✅ PASS | 허브 페이지 역할 수행 가능. |
| `global.css` | ✅ PASS | 디자인 시스템 토큰 및 유틸리티 클래스 정의 양호. |
| `tailwind.config.cjs` | ✅ PASS | 컬러 팔레트 및 폰트 설정 정확함. |

---

## 4. 권고 사항 (Action Plan)

1.  **Header 컴포넌트 재구현 (즉시 실행)**
    *   모바일 메뉴(햄버거 버튼 동작 + 슬라이드 패널) 구현
    *   GNB 메뉴 링크 및 활성 상태 스타일링 점검
    *   스크롤 시 헤더 배경 처리(Glassmorphism) 확인

2.  **디자인 시스템 전수 검사 및 폴리싱 (Phase 3 STEP 3)**
    *   모든 페이지의 버튼, 카드, 타이포그래피가 `02_ARCHITECTURE.md`의 `[STATUS: LOCKED]` 기준을 따르는지 Builder/Designer가 전수 검사.
    *   하드코딩된 스타일 제거 및 `global.css` 유틸리티 활용 유도.

3.  **홈(Index) 페이지 최적화**
    *   비디오 배경 로딩 전 노출될 Poster 이미지 추가
    *   모바일에서의 비디오 자동재생 정책 대응 확인

4.  **문서 현행화**
    *   본 감사 결과를 바탕으로 `05_NEXT_TASK.md` 및 Work Order에 기술적 부채 해결 과업을 추가.

---

**결론:** 프로젝트는 궤도에 올라와 있으나, **Header 컴포넌트의 기능 고장**은 치명적입니다. 콘텐츠 고도화(Step 1)와 병행하여, Builder에게 **Header 정상화**를 최우선 과제로 지시해야 합니다.
