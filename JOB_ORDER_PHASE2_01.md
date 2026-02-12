# 📋 JOB ORDER: Phase 2 - 인프라 및 페이지 스켈레톤 구축

**발행일**: 2026-02-12
**발신**: PM (Antigravity)
**수신**: Claude Sonnet 4.5

---

## 1. 작업 개요
로잉프로 Reboot 2026 프로젝트의 실질적인 개발 단계인 Phase 2를 시작함. 블루프린트와 사이트맵에 정의된 13개 페이지의 구조를 완벽하게 생성하고, 프로젝트 인프라를 최적화하는 것이 목표임.

## 2. 작업 상세 (Scope)

### [Step 0] 디자인 아키텍처 확정 (Pre-Coding)
- **그리드 및 레이아웃**: 페이지별 중앙 정렬 폭(Max-width) 및 그리드 시스템 확정.
- **디자인 토큰**: 배경 동영상과의 대비를 고려한 컬러 팔레트, 쉐이프(Corner Radius), 폰트 스케일 확정.
- **SSOT 반영**: 위 결정 사항을 `PROJECT_BLUEPRINT_2026.md`에 영구 기록 후 작업 이관.

### [Step 1] 인프라 정리 (Clean Slate)

### [Step 2] 13개 페이지 스켈레톤 생성
- **URL 구조 준수**: `사이트맵.txt` 및 블루프린트 3번 항목 참조.
- **대상 목록**:
  - `/`, `/about`, `/programs`, `/service`, `/track-record`, `/contact`
  - `/service/corporate` (Hub), `/service/corporate/training`, `/teambuilding`, `/leadership`, `/event`, `/wellness`
  - `/privacy`, `/404`

### [Step 3] 공통 레이아웃 구축
- `src/layouts/MainLayout.astro` 생성 또는 최적화.
- 모든 페이지에 `MainLayout` 적용 확인.

## 3. 참조 문서
- **`PROJECT_BLUEPRINT_2026.md`**: 전반적인 설계 지침
- **`사이트맵.txt`**: 정확한 URL 경로 확인
- **`CLAUDE.md`**: 작업자의 행동 수칙

## 4. 성공 기준 (Success Criteria)
1. `npm run dev` 실행 시 모든 13개 페이지가 정상 응답(200 OK)해야 함.
2. 모든 페이지가 `MainLayout`을 상속받아 일관된 헤더/푸터 구조를 가져야 함.
3. Git Commit 전 반드시 PM(디렉터)의 승인을 획득해야 함.

---
**본 작업지시서 수령 후 계획(Plan)을 디렉터에게 보고하고 승인 후 실행할 것.**
