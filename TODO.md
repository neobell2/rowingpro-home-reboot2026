# 작업 목록

**최종 업데이트:** 2026-02-10
**현재 Phase:** Phase 1 완료 → Phase 2 진입

---

## 📍 현재 상태

**완료:**
- ✅ 레거시 정리 (Trash/Archive)
- ✅ 폴더 구조 정리
- ✅ TODO.md 생성

**현재 위치:**
- 페이지: 2/13 완료 (index.astro, colors.astro)
- 디자인: Draft 03 메인 시안만 확정
- 콘텐츠: docs/contents/ (7개 파일, home.md 80% 완성)

---

## 🎯 Phase 1: 정리 및 구조화 ✅

- [x] 레거시 문서 Trash/Archive 처리
  - Trash: DASHBOARD, VISUAL_PLANNING, project/ROADMAP 등
  - Archive: DEV_SPEC, DESIGN_TOKENS, WebGPT 출력물 등
- [x] 폴더 구조 정리
  - Design_Drafts → docs/design
  - 빈 폴더(project, specs) 제거
- [x] TODO.md 생성

---

## 🔄 Phase 2: 디자인 확정 (다음)

**목표:** 모든 디자인 결정 완료 → SSOT 확정 준비

### 디자인 작업
- [ ] Draft 03 메인 페이지 구체화
  - 동영상 배경 적용 (3D캡처렌더링모음/[SHANA]4K_16.9_60fps.webm)
  - 레이아웃 최종 확정
  - 반응형 테스트

- [ ] 서브 페이지 디자인 확정
  - Draft 07 또는 다른 시안 선택
  - About, Programs, Service 등

### 구조 확정
- [ ] URL 매핑 확정
  - 13페이지 정확한 경로 결정
  - /service/corporate/training 등 상세 URL

- [ ] 템플릿 구조 확정
  - Service 공통 템플릿
  - 3슬롯 이미지 구조
  - 컴포넌트 재사용 전략

### 디자인 시스템 확정
- [ ] 컬러 팔레트
  - Primary: #0EA5E9 (Sky Blue) [확정]
  - Secondary, Accent 색상 결정
  - 다크/라이트 섹션 배분

- [ ] 타이포그래피
  - 영문: Readex Pro [확정]
  - 국문: Pretendard-Medium [확정]
  - 크기, weight, line-height 기준

- [ ] Spacing & Layout
  - 기본 단위 (8px?)
  - Container width
  - Section padding
  - Breakpoints

---

## ⭐ Phase 3: SSOT 확정 (마일스톤)

**트리거:** Phase 2 완료 시

**실행 항목:**
- [ ] PROJECT_BLUEPRINT_2026.md → v2.0 업데이트
  - 확정된 URL 매핑 반영
  - 디자인 시스템 상세 명시
  - 템플릿 구조 명시
  - 리소스 위치 명시 (콘텐츠, 디자인, 로고 등)

- [ ] README.md 업데이트
  - "SSOT는 PROJECT_BLUEPRINT v2.0 참고" 명시

- [ ] Git Tag 생성
  - `git tag v2.0-ssot-lock`
  - "SSOT 확정" 커밋 메시지

- [ ] SSOT 선언 기록
  - 변경 이력에 기록
  - 이후 변경 시 버전업 필수

**결과:**
→ 완전한 SSOT 확정
→ 이후 모든 작업은 SSOT 기준
→ 변경 시 버전업 + 기록 필수

---

## 🚀 Phase 4: 개발 실행 (SSOT 확정 후)

### 페이지 생성 (11개 남음)
- [ ] About
- [ ] Programs
- [ ] Service (허브)
- [ ] Service/Corporate/Training
- [ ] Service/Corporate/Teambuilding
- [ ] Service/Corporate/Leadership
- [ ] Service/Corporate/Event
- [ ] Service/Corporate/Wellness
- [ ] Track Record
- [ ] Contact
- [ ] Privacy, 404

### 콘텐츠 작업
- [ ] docs/contents/ 파일들을 각 페이지에 삽입
- [ ] 누락된 콘텐츠 작성

### 이미지 작업
- [ ] 이미지 도구 선택 (나노바나나 vs 미드저니)
- [ ] 이미지 30장 생성/확보
  - Hero 1장
  - 각 페이지 히어로 5장
  - Service 3슬롯 15장
  - Track Record 9장

### 테스트 & 배포
- [ ] 반응형 테스트 (모바일/태블릿/데스크톱)
- [ ] 브라우저 호환성 테스트
- [ ] 성능 최적화
- [ ] Cloudflare Pages 배포
- [ ] 도메인 연결

---

## 👥 팀 구성 [미정]

**확정:**
- PM/총괄: Gemini (Roo + VS Code)
- 검수/QA: Claude (Claude Code 확장)

**미정 (작업하면서 결정):**
- 페이지 생성 담당: TBD
  - 결정 방법: 첫 2~3개 페이지로 속도/품질 테스트
  - 결정 시점: Phase 4 초반
  - 기록: 작업 배정 로그 작성

- 컴포넌트/스타일링: TBD
  - 복잡도에 따라 배정
  - 반복 작업은 빠른 쪽

---

## 🎨 이미지 생성 도구 [미정]

**선택지:**
- A. 나노바나나 (Gemini 3 Image)
  - 장점: 무료 (하루 100장)
  - 단점: 품질/스타일 미검증

- B. 미드저니
  - 장점: 고품질, 검증됨
  - 단점: $30~60/월

**결정 방법:**
1. 이미지 스펙 확정 (Draft 03/07 스타일 분석)
2. 샘플 생성 (각 도구로 3~5장)
3. 품질/스타일 비교
4. 비용 대비 효과 판단

**결정 시점:** Phase 4 이미지 작업 직전

---

## 📝 작업 원칙

**SSOT 확정 전 (현재 - Phase 1~2):**
- 블루프린트 v1.0 = 임시 가이드
- 확정 안 된 것은 작업하면서 결정
- 유연하게 변경 가능
- TODO.md로 진행 상황 추적

**SSOT 확정 후 (Phase 3 이후):**
- 블루프린트 v2.0 = 절대 기준
- 모든 결정 사항 명시
- 변경 시 버전업 + 기록 필수
- 일관성 유지

---

## 🔗 주요 파일 위치

**마스터:**
- `PROJECT_BLUEPRINT_2026.md` - 시작 가이드 (v1.0)
- `TODO.md` - 이 파일

**콘텐츠:**
- `docs/contents/*.md` - 페이지별 콘텐츠 (7개)

**디자인:**
- `docs/design/Draft03/` - 메인 시안
- `docs/design/Draft07/` - 서브 시안 후보

**리소스:**
- `public/logo.svg` - 로고
- `3D캡처렌더링모음/[SHANA]4K_16.9_60fps.webm` - 동영상 배경
- `Design_ref/` - 로고 원본 등

**레거시:**
- `docs/_archive/` - 과거 문서 보관
- `docs/_trash/` - 삭제 예정

---

## 🎯 다음 단계

**즉시 작업:**
1. Phase 2 시작: 디자인 확정 작업
2. Draft 03 구체화
3. URL 매핑 결정

**세션 시작 시:**
```
@PROJECT_BLUEPRINT_2026.md @TODO.md 읽고 시작해
```

**세션 종료 시:**
```
TODO.md 업데이트: 완료 체크박스, 다음 할 일 갱신
```

---

**마지막 업데이트:** 2026-02-10 00:40
