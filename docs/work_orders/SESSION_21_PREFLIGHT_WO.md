# [Work Order] SESSION_21: 프로젝트 재개 준비

**발행자:** PM (Claude Sonnet 4.5)
**일시:** 2026-02-15
**우선도:** 🔴 긴급
**상태:** [STATUS: IMMEDIATE ACTION REQUIRED]

---

## 개요

SESSION_20 점검 결과, SESSION_19 본 작업 착수 전에 **2개의 블로커**를 해결해야 합니다.

본 Work Order는 SESSION_21 시작 조건을 정리합니다.

---

## 블로커 1: 빌드 오류 해결

### 현상
```
npm run build 실패 (Exit code 127)
오류: bash 환경에서 astro 명령어 찾을 수 없음
결과: dist/ 폴더 미생성 → 페이지 렌더링 불가
```

### 담당
- **주담당:** Builder (또는 DevOps)
- **검증:** PM

### 필수 작업
1. npm/node PATH 환경 재설정
2. `npm run build` 성공 확인 (Exit 0)
3. dist/ 폴더 정상 생성 확인
4. 빌드 경고/오류 0개 확인
5. localhost에서 페이지 렌더링 확인

### 기한
- **필수:** SESSION_21 시작 전 해결
- **추정:** 30분

---

## 블로커 2: PHASE_3_INTEGRATED_ROADMAP_WO 최종 확정

### 현상
```
WO 상태: [STATUS: DRAFT]
미반영: 모델 변경 (D-018: Haiku 전환)
미반영: 역할 변경 (D-025: GPT Designer 폐기)
미결정: 작업 도구 (Architect vs 외부보고서)
```

### 담당
- **주담당:** PM
- **협의:** Architect (도구 선택)
- **승인:** 디렉터

### 필수 작업

#### STEP A: PM이 수행
1. PHASE_3_INTEGRATED_ROADMAP_WO 갱신
   - 모델 변경 반영 (Gemini Pro만, GPT 제외)
   - 작업 도구 명시 (Architect 권고: 프로세스 최적화 + 효율화)
   - Work Order 근거로 확정

2. 03_DECISIONS.md에 D-027 기록
   - 주제: SESSION_20 프로젝트 진행 점검 및 병목 분석
   - 결정: 빌드 복구 후 SESSION_21 착수

#### STEP B: 디렉터 승인
1. PHASE_3_INTEGRATED_ROADMAP_WO 검토
2. 도구 선택 최종 승인 (Architect vs 외부보고서)
3. 일정 확인 (1주일 목표 vs 현실)

### 기한
- **필수:** SESSION_21 시작 전 확정
- **추정:** 1시간

---

## SESSION_21 착수 조건 (체크리스트)

```
□ 빌드 오류 해결 (Builder)
  □ npm run build 성공
  □ dist/ 폴더 생성
  □ 페이지 렌더링 확인

□ PHASE_3_INTEGRATED_ROADMAP_WO 확정 (PM)
  □ 모델 변경 반영
  □ 작업 도구 명시
  □ Work Order 근거 확정

□ 디렉터 최종 승인
  □ WO 검토 완료
  □ 도구 선택 승인
  □ 일정 확정
```

---

## SESSION_19 본 작업 (예정)

### 착수 조건
✅ 위 2개 블로커 모두 해결
✅ 디렉터 최종 승인

### 작업 내용
**PHASE_3_INTEGRATED_ROADMAP_WO 기준:**

- **STEP 1 (Gemini 3.0 Pro)**
  - HPOC 기반 브랜드 스토리 완성
  - 17P 최종 카피 생산
  - 미디어 가이드 확정

- **STEP 2 (Gemini 3.0 Flash + Midjourney)**
  - 이미지 자산 생산
  - 영상 최적화

- **STEP 3 (Builder + Designer)**
  - 디자인 폴리싱
  - 최종 바인딩

---

## 특이사항

### 거버넌스 작업 완료
✅ SESSION_19.5~19.7 + SESSION_20
✅ CLAUDE.md v2.7 확정
✅ 모든 정본 문서 정합성 확보

### 기술적 이슈
⚠️ npm 빌드 환경 불안정 (예상 외 차단)
⚠️ 14개 미커밋 파일 대기 (거버넌스 문서)

---

**PM 서명:** Claude Sonnet 4.5
**승인 대기:** 디렉터

