# WO_GEMINI_TOOLCHAIN_REVIEW.md — Gemini 툴체인 생존 전략 검토

> **발행:** 2026-02-17 | **발행자:** PM (Sonnet, SESSION 25) | **STATUS: PENDING**

---

## 배경

현재 Gemini API 예산 소진으로 Roo/Cline(VS Code) 내 Gemini 운용 중단 상태.
STEP 2(미디어 단계)에서 Gemini Flash 투입이 예정되어 있어 대안 툴체인 수립이 필요함.

디렉터가 외부 참고 자료 2건을 입수해 PM과 검토 완료:
- `docs/reports/SESSION_24_DIRECTOR_Issue_gemini-survival-guide.md` (주 문서)
- `docs/reports/SESSION_24_DIRECTOR_Issue_gemini-survival-guide_ANNEX.md` (ANNEX)

PM 분석 요약:
- 두 문서 간 **MCP 충돌** 확인 (Firebase Studio ↔ 로컬 MCP 연결 가능 여부)
  - File 1: 불가 (클라우드 격리) ✅ 기술적으로 맞음
  - ANNEX: 가능 ❌ Firebase Studio 부분만 오류, Roo+AntiGravity는 맞음
- **AntiGravity** = Google VS Code 포크 (2025.11 출시), 로컬 실행, Gemini 3 자체 무료 쿼터 보유
- STEP 2 대비 즉시 가용 옵션: AI Studio Flash-Lite API(1,000회/일), AntiGravity 자체 쿼터

---

## Architect 검토 요청 사항

### 1. 툴체인 전략 결정
아래 3가지 옵션 중 최적 조합 선택 및 근거 제시:

| 옵션 | 내용 | 장점 | 단점 |
|:---|:---|:---|:---|
| A | AI Studio Flash-Lite API 키 → Roo 재연결 | 즉시 사용, 기존 환경 유지 | 1,000회/일 한도 |
| B | AntiGravity 자체 쿼터 활용 (별도 IDE) | 독립 쿼터, 멀티모델 지원 | 환경 분리, 맥락 공유 필요 |
| C | A + B 병행 (주: Roo+API, 백업: AntiGravity) | 유연성 최대 | 관리 복잡도 증가 |

### 2. GEMINI.md 설정 필요성
- Roo/AntiGravity에서 자동 맥락 주입용 `GEMINI.md` 지금 작성할지 여부
- 내용 범위: 프로젝트 요약 + 현재 Phase + AI 팀 구성 + 다음 작업

### 3. MCP 공유 전략
- Roo + AntiGravity 간 로컬 MCP 동기화 필요 여부
- Firebase Studio 사용 시 파일 기반(GitHub) 맥락 공유로 충분한지 확인

### 4. STEP 2 투입 준비 시점
- 지금 준비 vs STEP 1-1(Content) 완료 후 준비

---

## 판단 기준

- STEP 2 시작까지의 여유 기간 (STEP 1-1 완료 예상 기간)
- 툴체인 전환 비용 (설정 시간, 학습 비용)
- 쿼터 안정성 (일일 vs 주간 리셋, 소진 패턴)
- 로컬 MCP 메모리 서버와의 통합 가능 여부

---

## 산출물

1. **툴체인 결정 문서** — 선택 옵션 + 근거 + 실행 계획
2. **D-031 결정 기록** (`03_DECISIONS.md` 갱신)
3. **GEMINI.md 초안** (필요 시)
4. **05_NEXT_TASK.md 갱신** (툴체인 준비 작업 반영 시)

---

## 참고 문서

- `docs/reports/SESSION_24_DIRECTOR_Issue_gemini-survival-guide.md`
- `docs/reports/SESSION_24_DIRECTOR_Issue_gemini-survival-guide_ANNEX.md`
- `docs/work_orders/PHASE_3_INTEGRATED_ROADMAP_WO.md` (STEP 2 미디어 계획)
- `ROLES.md` Architect 역할 정의
