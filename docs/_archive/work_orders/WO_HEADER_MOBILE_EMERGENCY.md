# [Work Order] Header 모바일 메뉴 긴급 복구

**발행자:** PM (Claude Haiku 4.5)
**일시:** 2026-02-16
**우선순위:** 🔴 **CRITICAL — 즉시 실행**
**상태:** [STATUS: COMPLETED]
**완료일:** 2026-02-16
**작업자:** Builder (Codex GPT-5.3)
**보고서:** `docs/reports/SESSION_22_BUILDER_CODEX.md`
**커밋:** `4efcf16`

---

## 1. 개요

외부감사(SESSION_21)에서 Header 컴포넌트의 모바일 메뉴 기능 파산이 발견되었습니다. 현재 모바일 환경에서 사이트 네비게이션이 불가능한 CRITICAL 상태입니다.

**근거 문서:**
- `docs/reports/SESSION_21_EMERGENCY_AUDIT_REPORT.md` (Section 2.1)
- `docs/reports/SESSION_21_FINAL_AUDIT_REPORT.md` (Section 2.1)

---

## 2. 작업 지시

### 담당자
**Builder (Claude 4.5 Sonnet)**

### 작업 범위
**파일:** `src/components/Header.astro`

### 필수 구현 사항

#### A. 모바일 메뉴 동작 스크립트
- [ ] 햄버거 버튼 클릭 이벤트 리스너
- [ ] 메뉴 패널 열기/닫기 토글 기능
- [ ] 메뉴 항목 클릭 시 패널 자동 닫기

#### B. 모바일 메뉴 패널 마크업
- [ ] 슬라이드 패널 구조 (`fixed` + `transform`)
- [ ] GNB 메뉴 전체 표시 (Home, About, Programs, Service, History, Contact)
- [ ] 현재 페이지 활성 상태 표시

#### C. 디자인 시스템 준수
- [ ] `glass-panel` 유틸리티 사용 (글라스모피즘)
- [ ] `02_ARCHITECTURE.md` LOCKED 기준 준수
- [ ] Tailwind 클래스 체계적 사용 (하드코딩 금지)

#### D. GNB 링크 검증
- [ ] 17페이지 IA 기준 링크 정확성 확인
- [ ] 활성 페이지 스타일링 (`aria-current="page"`)

---

## 3. 제약 조건

### 필수 준수
- ✅ 디자인 시스템 `[STATUS: LOCKED]` 기준 엄격 준수
- ✅ 모바일 우선 검증 (360px ~ 768px)
- ✅ 데스크탑 기능 유지 (기존 동작 보존)

### 금지 사항
- ❌ 디자인 시스템 변경 금지
- ❌ 새로운 컬러/토큰 추가 금지
- ❌ 외부 라이브러리 도입 금지 (Vanilla JS만 사용)

---

## 4. 검증 기준 (DoD)

### 기능 검증
- [ ] 모바일(360px~768px)에서 햄버거 버튼 클릭 시 메뉴 패널 표시
- [ ] 메뉴 항목 클릭 시 해당 페이지 이동
- [ ] 메뉴 외부 클릭 시 패널 자동 닫기

### 품질 검증
- [ ] `npm run build` 성공 (Exit 0)
- [ ] 크롬/사파리 모바일 뷰 정상 동작
- [ ] Console 에러 없음

---

## 5. 완료 보고

작업 완료 후 다음 보고서 작성:
- **파일명:** `docs/reports/SESSION_22_HEADER_RECOVERY_REPORT.md`
- **포함 내용:**
  - 구현 상세 (스크립트, 마크업)
  - 변경 파일 목록
  - 검증 스크린샷 (모바일/데스크탑)
  - 빌드 성공 확인

---

## 6. 타임라인

- **발행:** 2026-02-16 (즉시)
- **예상 소요:** 1~2시간
- **완료 기한:** SESSION_22 (금일 내)

---

**PM 서명:** Claude Haiku 4.5
**승인:** [Director Approval Required]
