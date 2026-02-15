# 05_NEXT_TASK.md — 즉시 실행 지시서

> **이 문서는 AI에게 그대로 입력 가능한 작업 지시서입니다.**
> 작업 시작 전에 작성합니다. NEXT 없이 작업하면 방향이 흔들립니다.

### 📜 버전 히스토리 (최근 3개)

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **v1.8** | 2026-02-15 | Phase 전환 체크리스트 신설, Architect 필수 호출 지점 명시 추가. D-024 반영. |
| **v1.7** | 2026-02-15 | GPT Designer 제거 및 운영 스쿼드 재편 반영. D-025, D-026 반영. |
| **v1.6** | 2026-02-15 | 근거 Work Order 명시 추가 (문서 추적성 강화). |

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
  - ✅ 디렉터 최종 승인
```

---

## 현재 지시

**근거:** `docs/work_orders/PHASE_3_INTEGRATED_ROADMAP_WO.md`

```
목표: Phase 3 — 콘텐츠 고도화 및 디자인 폴리싱 (통합 로드맵)
요구사항:
  - [STEP 1] Gemini 3.0 Pro: HPOC 기반 브랜드 스토리 및 17P 최종 카피 완성
  - [STEP 2] Gemini 3.0 Flash: 미디어 자산(이미지/영상) 생산 및 정제
  - [STEP 3] Claude 4.5/4.6: 디자인 폴리싱 및 최종 바인딩
  - 02_ARCHITECTURE.md [STATUS: LOCKED] 준수
금지사항:
  - 디자인 시스템에 없는 신규 컬러/토큰 임의 추가 금지
  - CEO 확정 전 부스형 4단계 가격표 디테일 임의 게시 금지
  - 문서체계/폴더 구조 변경 시 별도 승인 필요
```

---

## 다음 예정 지시 (참고용)

```
목표: Contact 폼 실연동 + SEO/OG 배포 품질 확보
요구사항:
  - ⚠️ **[ARCHITECT 필수 호출]** Contact 백엔드 설계 확정 (Supabase/Resend 연동 착수 전)
  - Supabase/Resend 연동 구현 및 실패 fallback(1566-1931) 유지
  - 페이지별 메타/OG 최종 적용 및 이미지 생성 반영
  - Lighthouse/접근성 핵심 지표 점검
  - ⚠️ **[ARCHITECT 권장]** Session 20 최종 QA 시 아키텍처 정합성 검증
```

---
