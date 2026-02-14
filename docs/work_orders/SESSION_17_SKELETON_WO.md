# [Work Order] SESSION 17: 17페이지 스켈레톤 구현 및 디자인 시스템 적용

**수신:** 작업 에이전트 (Builder / Implementation Lead)
**발신:** Antigravity (Project Manager)
**일시:** 2026-02-14

---

## 1. 배경 및 목적
Session 16에서 정립된 **17페이지 IA 구조**와 **최종 디자인 명세**를 바탕으로 실제 Astro 프로젝트의 골격을 구축합니다. Session 09에서 생성된 저품질의 기존 파일들을 모두 제거하고, 고품질의 확장 가능한 코드로 재정의하는 작업입니다.

## 2. 수행 과제 (Mission)

### TASK 1: 레이아웃 및 디자인 토큰 베이스라인 구축
- `MainLayout.astro`를 업데이트하여 `02_ARCHITECTURE.md`의 디자인 토큰(Heritage Blue, Readex Pro 등)을 적용합니다.
- 확정된 GNB(6개 메뉴)와 법적 고지가 포함된 Footer를 구현합니다.

### TASK 2: 17페이지 스켈레톤 구현 (전면 재작성)
- `src/pages/` 폴더 내의 기존 파일들을 무시하거나 삭제하고, `02_ARCHITECTURE.md` v1.3의 IA 구조에 맞춰 17개의 라우트 파일을 생성합니다.
- 각 페이지는 최소한의 섹션 구조(히어로, 개요 등)만 포함하며, 디자인 시스템 규격(글라스모피즘, 버튼 스타일 등)이 적용되어야 합니다.
- **IA 매핑:**
  - 메인 6: `/`, `/about`, `/programs`, `/service`, `/history`, `/contact`
  - 기업 6: `/service/corporate`, `/training`, `/teambuilding`, `/leadership`, `/event`, `/wellness`
  - 기타 4: `/service/school-youth`, `/service/event`, `/service/club-general`, `/service/family`
  - 시스템 1: `/privacy`

### TASK 3: 시안(Draft 03) 시각 정합성 검증
- `docs/design/Rowingpro-Draft03-Wave-3D/index.html`을 직접 실행하여 시각적 감도를 확인한 후 코딩합니다.
- 특히 배경 비디오 루프와 글라스모피즘 패널의 레이어 구조(`z-index`)를 아키텍처 명세대로 구현합니다.

## 3. 검토 대상 문서
1. [02_ARCHITECTURE.md](../../02_ARCHITECTURE.md) v1.3 (필독)
2. [SESSION_16_FINALIZATION_REPORT.md](../reports/SESSION_16_FINALIZATION_REPORT.md)
3. 시안 코드: `docs/design/Rowingpro-Draft03-Wave-3D/`

## 4. 제약 및 주의사항
- **LOCKED 준수**: 디자인 시스템에 정의되지 않은 신규 컬러나 토큰 사용을 금지합니다.
- **Clean Code**: Session 09의 코드를 재사용하지 말고 처음부터 고품질로 작성하십시오.
- **Mobile First**: 모든 페이지는 모바일 대응을 고려한 레이아웃으로 시작합니다.

---
**구현이 완료되면 `npm run dev`를 통해 전체 라우트의 정상 동작을 확인하십시오.**
