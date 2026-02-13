# [Work Order] STEP 0: 레거시 디자인 스펙 추적 및 통합

**수신:** Claude 4.6 Opus (설계 사령관)
**발신:** Gemini 3 Flash (Project Manager)
**일시:** 2026-02-13

## 1. 배경 및 목적
프로젝트 '로잉프로홈페이지Reboot.202601'은 현재 디자인 베이스라인(Draft 03)을 확정하고 `LOCKED` 상태로 전환하기 위한 정밀 명세화 단계에 있습니다. 시각적 시안 외에 과거 작업 과정에서 논의되고 검토된 핵심 요구사항(레거시)을 추출하여 현재 설계에 완벽히 통합하는 것이 본 작업의 목적입니다.

## 2. 검토 대상 레거시 문서 (Single Source of Truth 확보용)
다음 3종의 문서를 정밀 분석하여 현재 설계(Draft 03)와 대조하십시오.

1.  **질문 및 답변 로그**: [DEV_SPEC_VALIDATION_QUESTIONS.md](../DEV_SPEC_VALIDATION_QUESTIONS.md)
    - 초기 설계 단계의 미결 사항과 이에 대한 답변(Q1~Q22)이 포함되어 있습니다.
2.  **디자인 철학 및 토큰**: [DESIGN_TOKENS.md](../_archive/2026-02-03_GPT_legacy/specs/DESIGN_TOKENS.md)
    - 'Sky Blue' 단일 컬러 시스템의 기원과 디자인 원칙이 담겨 있습니다.
3.  **초기 개발 스펙**: [dev_spec.md](../_archive/WebGPT_outputs/260203/dev_spec.md)
    - IA 구조, 이미지 3슬롯 규칙, SEO 및 레이아웃 시스템의 원형이 명시되어 있습니다.

## 3. 핵심 분석 및 수행 과제
- **모순점 식별**: Draft 03의 시각적 수치와 레거시 문서의 규격(예: 3슬롯 이미지 규칙, 섹션 교차 패턴 등) 간의 충격 지점을 찾으십시오.
- **최종안 도출**: 충돌 발생 시, 현재 기술 스택(Astro, Tailwind) 및 디렉터의 최신 의도(Wave 3D)를 기준으로 가장 유효한 스펙을 확정하십시오.
- **IA 정합성**: `01_PROJECT_CONTEXT.md`와 레거시 IA 구조를 비교하여 13개 페이지 구조를 최종 확정하십시오.

## 4. 산출물 (Deliverable)
- **파일명**: `docs/reports/SESSION_12_LEGACY_INTEGRATION_REPORT.md`
- **포함 내용**:
    - [확정] 통합 컬러 팔레트 및 타이포그래피 규격
    - [확정] 섹션별 공통 템플릿 및 레이어 z-index 구조
    - [확정] SEO 및 이미지 규격 (3슬롯 시스템 반영 여부 등)
    - [특이사항] 레거시 중 폐기되거나 변경된 항목 리스트

## 5. 제약 사항
- 본인의 역할은 **설계**에 한정됩니다. `src/` 내 코드를 직접 수정하지 마십시오.
- 모든 규격은 Tailwind CSS 클래스로 즉시 매핑 가능하도록 작성하십시오.
