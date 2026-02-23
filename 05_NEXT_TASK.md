# 05_NEXT_TASK.md — 즉시 실행 지시서

> **이 문서는 AI에게 그대로 입력 가능한 작업 지시서입니다.**
> 작업 시작 전에 작성합니다. NEXT 없이 작업하면 방향이 흔들립니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.19** | 2026-02-23 | SESSION_46K PM(Sonnet): 롤링배너 Builder WO 발행 확정. 모노크롬+한색 hover 스펙, CSS-only, 67개 로고 전량 사용. |
| **v1.18** | 2026-02-22 | SESSION_46G PM(Gemini): 다원적 AI 스쿼드 운용 원칙(D-042)에 따른 스쿼드 라인업 및 향후 하이브리드 지시 추가. |
| **v1.17** | 2026-02-21 | SESSION_46D PM(Gemini): 46C 감사 후속 PM 처리 완료 반영. 현재 지시 갱신. Builder/Designer WO 착수 선행조건 명시. |
| **v1.16** | 2026-02-21 | SESSION_46B PM(Sonnet): Decision Gate 추가(레이아웃 재설계 방식), IA 14페이지 반영, 1차 예정 지시 갱신(미디어 자산 우선순위). |

> 📋 **전체 버전 히스토리:** [06_VERSION_HISTORY.md](06_VERSION_HISTORY.md)

---

## Phase 전환 체크리스트

```
Phase 3 → Phase 4 전환 조건:
  - ✅ Phase 3 작업 완료 (콘텐츠 고도화, 디자인 폴리싱)
  - ⚠️ [ARCHITECT 필수 호출] Phase 4 진입 가능성 검증
    - 기술 부채 점검
    - 아키텍처 정합성 최종 확인
    - 산출물: Phase 4 진입 승인 또는 차단 사유 보고서
  - ⚠️ [ARCHITECT 필수] D-033 "소비자 기준 원칙" 최종 보고서 반영 확인
  - ✅ 디렉터 최종 승인
```

---

## 🚀 운영 스쿼드 쾌속 지침 (D-041 + D-042)
- **GPT (Builder/설계 선봉):** 파괴적 혁신, 0에서 1을 만드는 기초 스캐폴딩. 새로운 컴포넌트나 복잡한 로직이 필요할 때 투입.
- **Gemini (Content/Media PD):** 고속 정보 스캔, 다량의 미디어 처리, 카피라이팅/브랜딩 주입기. 속도전과 물량전에 강함.
- **Claude (PM/Designer/Architect):** 정합성 수호, 거버넌스 메타감사, 픽셀 단위 CSS 폴리싱. 수비 및 완성도에 특화.

---

## 현재 지시 (진행중)

### 1. 콘텐츠 확정 (디렉터 직접 입력)
목표: src/content/pages/*.md 파일에 디렉터 최종 카피 직접 입력 (진행 중)
완료 후: 다음 단계 (2. Builder IA 전환) 수행

### 2. Builder: IA 전환 및 스켈레톤 압축 구현
- **담당:** Builder (Claude Sonnet 4.6 또는 GPT Codex)
- **근거:** `WO_BUILDER_IA_TRANSITION.md`
- **핵심:** 17페이지 → 14페이지 구조 축소 구현, GNB 변경, Index 7개 섹션 활성화. 콘텐츠 입력과 독립적으로 구조 공사 즉시 진행.

### 3. Builder: 클라이언트 로고 롤링배너 컴포넌트 구현
- **담당:** Builder (Claude Sonnet 4.6)
- **근거:** `WO_BUILDER_ROLLING_BANNER.md` ✅ 발행 완료
- **스펙 확정:** 모노크롬 기본 / hover 컬러 복원 / CSS-only / 로고 67개 전량
- **에셋:** `/public/assets/images/logos/` 67개 확보 완료
- **착수 조건:** 없음 — 즉시 착수 가능

---

## 다음 예정 지시 (Decision Gate 이후)

### [STEP 3] Designer + Builder: 하이브리드 레이아웃 폴리싱 (Multi-Model 릴레이)
**목표:** 데이터 없는 껍데기(스켈레톤)에 브랜드 비주얼(혼)을 주입
**순서:** 
1. **(제안/초안)** GPT 또는 Claude가 전체 페이지 비주얼 박스 레이아웃 스캐폴딩 제안
2. **(콘텐츠 주입)** Gemini가 수많은 에셋과 텍스트를 고속 매핑
3. **(디렉터 선택)** "이 섹션의 이미지는 이것, 저 섹션 위계는 이렇게" 핵심 요소 디렉터 수동 확정
4. **(완성)** Claude(Designer/Builder) 일괄 CSS/레이아웃 픽셀 구현 및 정합성 보장

### [STEP 4] Phase 4 진입을 위한 Architect 통합 관문 (Meta-Audit)
**담당:** Architect (Claude Opus 4.6)
**조건:** 디자인 폴리싱 및 모바일 반응형 검증 종료 직후
**임무:** 
- Contact 폼 백엔드(Supabase) 설계 논리 검증
- 전체 시스템의 치명적 결함(SPOF) 단 1~3개만 발췌 보고
- **금지:** 오타나 파일 이동 같은 마이크로 매니징 지시 절대 금지 (D-042 적용)

---
