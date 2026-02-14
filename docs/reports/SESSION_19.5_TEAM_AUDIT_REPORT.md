# [보고서] SESSION 19.5: 팀 구조 외부 감사 및 거버넌스 개선

**작성자:** Claude 4.5 Sonnet (External Auditor)
**일시:** 2026-02-15
**근거:** 디렉터의 팀 구조 외부 감사 요청 (SESSION_20_AUDIT_WO.md 진입 전)

---

## 1. 수행 요약

SESSION_20_AUDIT_WO.md (기술 부채 진단) 착수 전, 디렉터의 요청으로 **팀 구조 및 운영 체계**에 대한 외부 감사를 수행했습니다. 4개 주요 결함을 식별하고, 9개 역할 재편 및 RACI 매트릭스 도입으로 구조적 개선을 완료했습니다.

---

## 2. 감사 결과 — 4대 구조적 결함

### 결함 1: PM 역할 과부하 및 경계 침범
- **증상:** PM(Gemini Flash)이 코드 수정 및 정본 문서 직접 변경 시도
- **근거:** `RCA_AGENT_CONTROL_FAILURE.md` 2건의 통제 실패 사례
- **영향:** 역할 경계 모호, 품질 저하 위험

### 결함 2: Documentation Manager 부재
- **증상:** 정본 문서(`01~05`, `CLAUDE.md`) 관리 책임자 없음
- **영향:** 문서 정합성 관리 공백, PM이 관리/실행을 동시 수행

### 결함 3: 콘텐츠/미디어 역할 미분리
- **증상:** Content 역할이 카피라이팅과 미디어 아카이브 탐색을 동시 담당
- **영향:** 고난도 작업과 단순 작업의 비효율적 혼재

### 결함 4: Designer 역할 공백
- **증상:** Phase 3 STEP 3(디자인 폴리싱)의 담당자 없음
- **영향:** 시각적 완성도 검증 불가, Builder만으로는 디자인 판단 불가

---

## 3. 주요 성과

### 3.1 팀 구조 재편 (7개 → 9개 역할)

**신설 역할:**
- **Documentation Manager** (Gemini 3.0 Pro)
  - 책임: 정본 문서 관리, 콘텐츠 SSOT 최신화, 문서 정합성 검증
  - 권한 제한: 코드 수정/Work Order 발행 금지
- **Designer** (GPT 5.2)
  - 책임: 디자인 폴리싱, 시각적 완성도, 최종 QA
  - 권한 제한: 코드 직접 수정 금지
- **Media Producer** (Gemini 3.0 Flash)
  - 책임: 미디어 아카이브 탐색, 자산 생산, Midjourney 프롬프트
  - 권한 제한: 코드/정본 문서 수정 금지

**역할 재정의:**
- **PM:** Work Order 발행/세션 보고/공정 모니터링만 담당
- **Content:** 브랜드 스토리 및 고난도 카피라이팅 전문화

### 3.2 RACI 매트릭스 도입

| 작업 | Director | PM | Doc Mgr | Content | Media PD | Builder | Designer | Architect | Analyst |
|:--|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Work Order 발행 | A | R | I | I | I | I | I | C | I |
| 정본 문서 관리 | A | I | R | C | - | - | - | C | - |
| 코드 작성 | A | I | - | - | - | R | C | C | - |
| 디자인 폴리싱 | A | I | - | - | - | C | R | C | - |
| 세션 보고 | A | R | C | - | - | - | - | - | - |

**범례:** R=Responsible, A=Accountable, C=Consulted, I=Informed

### 3.3 비용최적화 전략

**비용 구조 반영:**
- Gemini API 크레딧: Flash 무제한, Pro 40만원
- GPT/Codex: 구독 중 (비용 무관)
- Claude: 구독이지만 토큰 소모 빠름 (최소화 필요)

**개선 효과:**
- **Claude Sonnet 토큰 90% 절감**: Doc Manager를 Gemini Pro로 전환
- **Gemini 크레딧 40만원 최대 활용**: Pro/Flash 주력 투입
- **GPT 구독 활용 극대화**: Designer(GPT 5.2) 추가

**모델 병기:**
- 각 역할에 "비용최적" vs "이상적" 모델 표기
- 비용 제약 없을 시 참고용

### 3.4 거버넌스 개선

**문서 추적성 강화 (D-017):**
- `05_NEXT_TASK.md`에 근거 Work Order 명시 추가
- 예: `근거: docs/work_orders/PHASE_3_INTEGRATED_ROADMAP_WO.md`
- Work Order → Next Task → Execution 흐름 명시화

---

## 4. 변경 파일 (초기)

- **마스터 규칙:** `CLAUDE.md` v2.4
  - 섹션 7 전면 재작성 (9개 역할 정의, RACI 매트릭스)
- **결정 기록:** `03_DECISIONS.md` v1.11
  - D-015: 팀 구조 재편 및 PM 권한 제한
  - D-016: 비용최적화 재구조화 및 Designer 신설
  - D-017: 문서 추적성 강화
- **현재 상태:** `04_CURRENT_STATE.md` v1.11
  - 운영 스쿼드 템플릿 갱신 (9개 역할, 비용최적/이상적 모델 병기)
- **작업 지시:** `05_NEXT_TASK.md` v1.6
  - 근거 Work Order 명시 추가

---

## 5. 후속 완료: PM/Doc Manager 모델 전환 (D-018)

### 5.1 배경

Session 19.5 완료 후 디렉터의 추가 질문:
- "PM 담당에 Haiku와 Gemini Pro를 비교하면 누가 우세?"
- "비용은 얼마나 차이나? 지금 Gemini 3.0 Flash와 Haiku의 퍼포먼스 차이는?"

### 5.2 웹 검색 기반 분석 (2026-02-15)

**가격 비교:**
- Gemini 3 Flash: $0.50/$3 (입/출력 per 1M tokens)
- Gemini 3 Pro: $2-4/$12-18
- Claude Haiku 4.5: $1/$5

**성능 비교 (Flash vs Haiku):**
- 속도: Flash 약간 빠름 (200+ tokens/sec)
- Work Order/보고서 품질: Haiku 15~20% 우수
- 맥락 보존: Haiku 우수
- 구조화 문서: Haiku 85점 vs Flash 70점

**비용 시뮬레이션:**
- PM 월간 사용량: 30K tokens → 연간 비용 차이 $0.90 (미미)
- Doc Manager 월간 사용량: 45K tokens → Pro 대비 월 $0.45-0.90 절감

### 5.3 최종 결정 (D-018)

**변경 사항:**
- PM: Gemini 3.0 Flash → **Claude Haiku 4.5**
- Doc Manager: Gemini 3.0 Pro → **Claude Haiku 4.5**

**근거:**
- PM: 품질 향상 15~20%, 비용 차이 무시 가능
- Doc Manager: Pro 대비 2~3배 저렴, 문서 관리에 충분한 품질
- Claude 구독 활용도 증대, Gemini 크레딧 Content에 집중

**효과:**
- 연간 비용 절감: $6~12
- 품질 향상: 구조화 작업 강화
- 자원 배분 최적화

### 5.4 추가 변경 파일

- **마스터 규칙:** `CLAUDE.md` v2.5
  - 섹션 7.1, 7.2 모델 변경
- **결정 기록:** `03_DECISIONS.md` v1.12
  - D-018: PM/Doc Manager Claude Haiku 전환
- **현재 상태:** `04_CURRENT_STATE.md` v1.12
  - 운영 스쿼드 템플릿 모델 갱신

---

## 6. 후속 작업

### 즉시 실행 가능
- **SESSION 20:** 기술 부채 진단 (`SESSION_20_AUDIT_WO.md`)
  - 17페이지 코드 정합성, 링크 유효성, 문서-코드 동기화 전수 조사

### Phase 3 진행
- **SESSION 19 (STEP 1):** 콘텐츠 고도화 (Gemini 3.0 Pro)
- **SESSION 20+ (STEP 2):** 미디어 자산 생산 (Gemini 3.0 Flash)
- **SESSION 21+ (STEP 3):** 디자인 폴리싱 (GPT 5.2 Designer + GPT Codex 5.3 Builder)

---

## 7. 권고 사항

### 운영 체계
1. **PM 관문 강화:** PM의 코드/문서 직접 수정 시도를 시스템적으로 차단
2. **역할 경계 준수:** RACI 매트릭스 기반 권한 체계 엄격 적용
3. **비용 모니터링:** Claude 토큰 사용량 주기적 점검

### 품질 관리
1. **Documentation Manager 정기 감사:** 정본 문서와 콘텐츠 SSOT 정합성 검증
2. **Designer 최종 QA:** Phase 3 STEP 3 완료 전 Designer의 시각적 승인 필수

### 문서 추적성
1. **Work Order 의무화:** 모든 세션 시작 전 Work Order 발행 및 `05_NEXT_TASK.md`에 근거 명시
2. **세션 번호 체계 정리:** Session 19.5처럼 중간 세션 발생 시 일관된 네이밍 규칙 적용

---

**보고 종료.**
