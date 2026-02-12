# 02_ARCHITECTURE.md — 구조 확정본

> **이 문서는 프로젝트의 구조(IA, 디자인 시스템, 기술스택)를 정의합니다.**
> 구조 변경이 발생하면 즉시 갱신합니다. 이 문서가 없으면 AI는 매번 새 구조를 제안하려 합니다.

### 📜 버전 히스토리

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.1** | 2026-02-13 | 레거시 참조를 아카이브 경로(`docs/_archive/governance_v1/*_v1.md`)로 정정 |
| **v1.0** | 2026-02-13 | 문서 가버넌스 개편에 따라 신규 작성. 기존 `docs/_archive/governance_v1/PROJECT_BLUEPRINT_2026_v1.md`의 IA/디자인/기술 섹션과 `docs/_archive/governance_v1/SESSION_HANDOVER_v1.md`의 구조 정보를 통합. 디자인 시스템은 Draft 03 기준 BASELINE으로 설정. |

---

## 1. 정보 구조 (IA) — 총 13페이지

```
메인 6페이지:
├── Home (/)                     ← Video Loop 배경 + "Rowing = Teamwork"
├── About (/about)               ← 국가대표, 13년 무사고, 협회 주관사
├── Programs (/programs)         ← 인도어/아웃도어/워크숍 구분
├── Service Hub (/service)       ← 서비스 허브 페이지
├── Track Record (/track-record) ← 13년 업력 전수 기록 ("걸어온 길")
└── Contact (/contact)           ← 문의 폼

Service 하위 5페이지:
├── Corporate Hub (/service/corporate)
├── Training (/service/corporate/training)
├── Teambuilding (/service/corporate/teambuilding)
├── Leadership (/service/corporate/leadership)
├── Event (/service/corporate/event)
└── Wellness (/service/corporate/wellness)

시스템 2페이지:
├── Privacy (/privacy)
└── 404 (/404)
```

---

## 2. 디자인 시스템

**[STATUS: BASELINE — 디벨롭 진행중]**

> 현재 기준점: **Draft 03 (Wave 3D Ver.)**
> 이 값들은 디벨롭 과정에서 변경될 수 있음.
> 최종 확정 시 디렉터가 `[STATUS: LOCKED]`로 변경.

### 시안 참조 파일
- **시안 코드**: `docs/design/Rowingpro-Draft03-Wave-3D/index.html`
- **시안 캡처**: `docs/design/스크린캡처/로잉프로 시안 스크린캡처/screencapture-rowingpro-draft03-wave-3d-netlify-app-2026-02-06-02_03_46.png`

> ⚠️ **모든 UI 작업자는 코딩 시작 전 위 시안을 직접 열어 시각적 감도를 체득할 것.**

### 2.1 컬러 시스템 (Draft 03 기준)

| 토큰 | 값 | 용도 |
|:--|:--|:--|
| Deep | `#05080F` | 메인 배경 — 압도적 깊이감의 다크 네이비 |
| Neon | `#00F0FF` | 브랜드 아이덴티티 — Cyan Neon 강조색 |
| Cobalt | `#2D5BFF` | 보조 강조색 — 신뢰와 무게감 |

### 2.2 타이포그래피

| 용도 | 폰트 | 비고 |
|:--|:--|:--|
| Headings (영문/Display) | Readex Pro | 퓨처리스틱/스포츠 |
| Body (국문/본문) | Pretendard | 가독성 |

### 2.3 UI 원칙

| 원칙 | 설명 |
|:--|:--|
| **Cinematic Wrapper** | 배경에 영상/3D 오브젝트 배치, 그 위에 콘텐츠를 올리는 레이어링 |
| **Glassmorphism** | 모든 패널/카드에 `backdrop-blur` + `white/5~10` 투명도의 유리 재질 |
| **Neon Glow** | 텍스트/버튼에 `#00F0FF` 미세 Glow 효과로 에너지 표현 |

---

## 3. 기술 스택

| 항목 | 기술 | 비고 |
|:--|:--|:--|
| 프레임워크 | Astro | 정적 사이트 생성 |
| 스타일링 | Tailwind CSS | 유틸리티 퍼스트 |
| 배포 | Cloudflare Pages | GitHub 자동 배포 |
| 데이터베이스 | Supabase | Contact 폼 등 |
| 이메일 | Resend | Email API |
| 버전 관리 | Git + GitHub | `neobell2/rowingpro-home-reboot2026` |

---

## 4. 공통 레이아웃

- `src/layouts/MainLayout.astro` — 모든 페이지의 공통 레이아웃
- 헤더: 상단 고정 네비게이션 (All Pages)
- 푸터: 공통 푸터 (All Pages)
- 반응형: 모바일 → 햄버거 메뉴

---

## 5. 주요 리소스 위치

| 리소스 | 경로 |
|:--|:--|
| 히어로 배경 영상 | `docs/design/Hero_bg.webm`, `Hero_bg.mp4` |
| 디자인 시안 (Draft 03) | `docs/design/Rowingpro-Draft03-Wave-3D/` |
| 콘텐츠 문서 | `docs/contents/*.md` |
| 히스토리 마스터 데이터 | `docs/contents/history_master.md` |
| 로고 | `public/logo.svg` |

---
