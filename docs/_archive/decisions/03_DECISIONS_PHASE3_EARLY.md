# 03_DECISIONS_PHASE3_EARLY.md — Phase 3 초기 결정 아카이브

> **이 파일은 Phase 3 초기 결정(완료됨)을 보관합니다.**
> 이미 CLAUDE.md, 04_CURRENT_STATE.md에 반영되어 참조 불필요한 결정입니다.
> 현재 활성 결정은 03_DECISIONS.md를 참조하십시오.

**아카이브 일시:** 2026-02-16 (SESSION_22, Documentation Manager)
**포함 범위:** D-013 ~ D-018, D-027 (2026-02-14 ~ 2026-02-15)
**아카이브 이유:** 완료 또는 다른 정본 문서에 통합됨

---

## D-027: SESSION_20 프로젝트 진행 점검 — 병목 분석 및 SESSION_21 대기

```
결정:
  - SESSION_18 이후 프로젝트 전수 점검 결과, 3개 근본 병목 식별.
  - SESSION_19 본 작업(콘텐츠 고도화 + 디자인 폴리싱) 착수 불가 상태 확인.
  - SESSION_21 착수 조건: ① 빌드 복구(Builder), ② PHASE_3_INTEGRATED_ROADMAP_WO 최종 확정(디렉터).

이유:
  1. PHASE_3_INTEGRATED_ROADMAP_WO는 DRAFT 상태 + 모델 변경 미반영(D-018, D-025, D-026).
  2. 작업 도구 미결정: Architect 권고(프로세스 최적화)vs 외부보고서(Pencil.dev/Stitch).
  3. npm run build 실패(Exit 127): bash 환경에서 astro 명령어 경로 오류 → 페이지 렌더링 불가.

대안:
  - 빌드 복구 불가 시 → 환경 재설정 또는 CI/CD 빌드 환경 사용.
  - 도구 선택 지연 시 → SESSION_21+ 추가 필요 (일정 지연).

변경 가능 여부: 낮음 (기술적 블로커로 인한 필수 사항)

일시: 2026-02-15 (SESSION_20 PM 점검 완료)

산출물:
  - SESSION_20_PM_FINAL_REPORT.md (병목 분석)
  - SESSION_21_PREFLIGHT_WO.md (다음 세션 지시)
  - Work Order & Reports 아카이브 정리 완료

아카이브 사유: 병목 해결 완료, 과거 기록
```

---

## D-018: PM/Doc Manager Claude Haiku 전환 (품질 향상 및 비용 최적화)

```
결정:
  [PM 모델 변경]
  - 비용최적: Gemini 3.0 Flash → Claude Haiku 4.5
  - 이상적: Claude Haiku 유지

  [Doc Manager 모델 변경]
  - 비용최적: Gemini 3.0 Pro → Claude Haiku 4.5
  - 이상적: Claude 4.5 Sonnet 유지

이유:
  [PM 전환 근거]
  - 웹 검색 결과 (2026-02-15 기준):
    * Work Order/보고서 품질: Haiku가 Flash보다 15~20% 우수
    * 구조화 문서 작성: Haiku 85점 vs Flash 70점
    * 맥락 보존: Haiku 우수, Flash 중간
    * 연간 비용 차이: 단 $0.90 (무시 가능)
  - PM 작업 특성상 구조화된 문서 작성 및 논리적 분석 중요
  - Claude 구독 이미 보유, PM 작업량(30K tokens/월) 부담 적음

  [Doc Manager 전환 근거]
  - 웹 검색 결과 (2026-02-15 기준):
    * 비용: Haiku($1/$5) vs Pro($2-4/$12-18) → Haiku가 2~3배 저렴
    * 품질: Pro 대비 10~15% 낮지만 문서 관리에 충분
    * 월간 비용: Haiku $0.27 vs Pro $0.72-1.17 → 월 $0.45-0.90 절감
  - Doc 관리 작업(문서 갱신, 정합성 검증, 버전 관리)은 고난도 창의성 불필요
  - Gemini 크레딩 40만원을 Content(Pro)에 집중 투입
  - Claude 구독 활용도 증대

  [통합 효과]
  - Claude Haiku 2개 역할(PM + Doc Manager) 활용 극대화
  - 연간 비용 절감: $6~12
  - 품질 향상: PM/Doc Manager 모두 구조화 작업 강화
  - Gemini 크레딧 전략적 배분: Content에만 Pro 사용

대안:
  - 옵션 A (채택): PM/Doc Manager 모두 Haiku
  - 옵션 B (기각): PM만 Haiku, Doc Manager는 Pro 유지 → 비용 절감 효과 반감
  - 옵션 C (기각): 현상 유지 → 품질 개선 기회 상실

변경 가능 여부:
  - 중간 (운영 중 모델 교체 가능, 역할 자체는 유지)
  - 비용/품질 트레이드오프 모니터링 후 재조정 가능

일시: 2026-02-15 (Session 19.5 후속, 웹 검색 기반 모델 비교 분석 후)

아카이브 사유: 04_CURRENT_STATE.md 스쿼드 템플릿에 반영 완료
```

---

## D-017: `05_NEXT_TASK.md`에 근거 Work Order 명시 추가

```
결정:
  - `05_NEXT_TASK.md`의 "현재 지시" 섹션에 근거 Work Order 파일 경로 명시
  - 예: "근거: docs/work_orders/PHASE_3_INTEGRATED_ROADMAP_WO.md"

이유:
  - 문서 추적성(Traceability) 강화
  - `05_NEXT_TASK.md`는 "즉시 실행 지시서"이지만, 어떤 Work Order를 근거로 작성되었는지 명확하지 않음
  - PM 보고서에만 Work Order 참조가 있고, 공식 지시서에는 없어 권위 체계가 불명확함
  - Work Order → Next Task → Execution 흐름을 명시적으로 추적 가능하게 함

대안:
  - 옵션 A (채택): 근거 Work Order를 명시적으로 기록
  - 옵션 B (기각): 현상 유지 (버전 히스토리에만 "통합 로드맵" 개념 언급) → 추적성 부족

변경 가능 여부:
  - 높음 (거버넌스 개선, 필요 시 형식 조정 가능)

일시: 2026-02-15 (Session 20 문서 추적성 감사 후)

아카이브 사유: 프로세스로 정착됨, 05_NEXT_TASK.md에 반영 중
```

---

## D-016: 비용최적화 재구조화 및 Designer 신설

```
결정:
  [비용 구조 반영]
  - Gemini API 크레딧 확보 (Flash 무제한, Pro 40만원)
  - GPT/Codex 구독 중 (비용 무관)
  - Claude 구독이지만 토큰 소모 빠름 (최소화 필요)

  [팀 재편]
  - Doc Manager: Claude 4.5 Sonnet → Gemini 3.0 Pro로 변경
  - Designer 역할 신설: GPT 5.2 (Reviewer 전환)
  - Media Producer 역할 신설: Gemini 3.0 Flash
  - Analyst: 필요시에만 호출 (Doc Manager 병행 불가)
  - 운영 스쿼드 8개 → 9개 역할로 확대

  [역할별 담당 확정]
  주력 (매 세션):
    - PM: Gemini 3.0 Flash
    - Doc Manager: Gemini 3.0 Pro
    - Content: Gemini 3.0 Pro
    - Media Producer: Gemini 3.0 Flash
    - Builder: GPT Codex 5.3
    - Designer: GPT 5.2 (디자인 폴리싱 + 최종 QA)

  보조 (필요시만):
    - Architect: Claude 4.6 Opus (Phase 전환, 중요 결정)
    - Analyst: Claude 4.5 Sonnet (복잡한 분석)

  [이상적 모델 병기]
  - 각 역할에 "비용최적" vs "이상적" 모델 병기
  - 비용 제약 없을 시 참고용

이유:
  - 외부 감사 후 추가 분석 결과:
    1) 디자이너 부재: Phase 3 STEP 3이 디자인 폴리싱 중심인데 담당자 없음
    2) Claude 토큰 소모 과다: Sonnet을 매 세션 사용 시 비용 급증
    3) Gemini 크레딧 미활용: 40만원 크레딧이 있는데 Flash/Pro 활용 부족
    4) GPT 구독 활용 부족: 구독 중인데 Codex만 사용
  - Phase 3 STEP 3 작업 분석:
    * 폰트/간격/모션/반응형 디테일 = 디자인 감각 필요
    * Builder(Codex)는 코딩만, 시각적 판단은 별도 역할 필요
  - 비용 절감 효과:
    * Claude Sonnet 토큰 90% 절감 (Doc Manager를 Gemini로)
    * Gemini 크레딧 40만원 최대 활용
    * GPT 구독 활용 극대화 (Designer 추가)

대안:
  - 옵션 A (채택): Gemini 주력 + GPT 보조 + Claude 최소화
  - 옵션 B (기각): Claude 중심 유지 → 비용 과다
  - 옵션 C (기각): 역할 통합으로 축소 → 디자이너 공백 미해결

변경 가능 여부:
  - 중간 (운영 중 모델 교체 가능, 역할 자체는 유지)
  - 비용 구조 변경 시 재조정 가능

일시: 2026-02-15 (Session 20 비용최적화 분석 후)

아카이브 사유: D-018, D-025로 갱신됨, 04_CURRENT_STATE.md에 반영 완료
```

---

## D-015: 팀 구조 재편 (PM 권한 제한, Documentation Manager 신설, RACI 매트릭스 도입)

```
결정:
  [팀 구조]
  - Documentation Manager 역할 신설 (Claude 4.5 Sonnet 담당)
  - PM(Gemini 3.0 Flash) 권한을 Work Order 발행 및 공정 관리로 제한
  - 운영 스쿼드를 7개 역할에서 8개 역할로 확대

  [PM 권한 제한]
  - 허용: Work Order 발행, 세션 보고서 작성, 공정 모니터링(읽기), 디렉터 승인 요청
  - 금지: 코드 직접 수정, 정본 문서 직접 수정, 신규 폴더 생성/삭제, 문서 체계 변경, 작업물 생산
  - 문서 변경 필요 시: Documentation Manager에게 Work Order 발행

  [Documentation Manager 책임]
  - 정본 문서(CLAUDE.md, 01~05) 버전 관리
  - 콘텐츠 SSOT(docs/contents/) 최신화 검증 및 갱신
  - 문서 간 정합성 검증 (설계 ↔ 콘텐츠 ↔ 코드)
  - 결정 기록(03_DECISIONS.md) 지속적 갱신
  - 문서 파편화 모니터링 및 통합

  [RACI 매트릭스 도입]
  - 9개 작업 유형별로 R/A/C/I 명시
  - 역할 침범 발생 시 매트릭스 참조하여 교정
  - CLAUDE.md 섹션 7에 전체 매트릭스 기록

이유:
  - 2026-02-15 외부 감사(Claude 4.5 Sonnet) 결과, 3가지 심각한 구조적 결함 식별:
    1) PM 역할 과부하 (기획+관리+실행+문서관리 혼재)
    2) 문서관리 담당 부재 (콘텐츠 SSOT 최신화 지연, 문서 파편화 방치)
    3) 역할 경계 모호성 (PM 통제 실패 반복 발생)
  - RCA 보고서(docs/reports/RCA_AGENT_CONTROL_FAILURE.md)에서 PM의 독단적 행동 2건 확인:
    * 2026-02-13: 신규 폴더 생성, CLAUDE.md 임의 수정
    * 2026-02-14: src/ 폴더 직접 수정 (역할 침범)
  - Session 18: docs/contents/ 일부 문서가 구버전(2026-02-03)으로 방치된 사실 발견
  - 문서 체계가 프로젝트 SSOT인데 전담 관리자 없음 = 거버넌스 붕괴 위험
  - Phase 3 STEP 2에서 PM이 미디어 자산 생산 예정 = PM 역할 범위 벗어남

대안:
  - 옵션 A (채택): Documentation Manager 신설 + PM 권한 제한
  - 옵션 B (기각): PM 유지하되 교육 강화 → 구조적 문제로 재발 가능성 높음
  - 옵션 C (기각): 모든 역할을 더 세분화 → 오버헤드 증가

변경 가능 여부:
  - 낮음 (구조적 결함 해결을 위한 필수 조치)
  - Documentation Manager 담당 모델은 변경 가능 (역할 자체는 유지)
  - RACI 매트릭스는 운영 중 조정 가능

일시: 2026-02-15 (Session 20 외부 감사 후)

아카이브 사유: D-021, D-022로 재정의됨, CLAUDE.md Section 7에 통합 완료
```

---

## D-014: 콘텐츠 SSOT 최신화 및 재바인딩 기준 확정

```
결정:
  - `docs/contents/`를 Session 16 확정값(D1~D12) 기준으로 최신화한다.
  - Home/About/Programs/Services/Contact/Common/Track Record(Deprecated) 문서를 갱신한다.
  - Track Record 명칭은 보관용으로 유지하고, 실사용 기준은 `/history` + `history_master.md`로 고정한다.
  - 페이지 콘텐츠 반영 시 `docs/contents` 최신본을 우선 기준으로 재바인딩한다.
이유:
  - 기존 `docs/contents` 일부 문서가 2026-02-03 버전에 머물러 설계/결정 최신 상태와 불일치.
  - 콘텐츠 SSOT가 구버전이면 구현물이 과거 카피로 회귀하는 문제가 반복됨.
대안:
  - 페이지 텍스트만 임시 수정하고 SSOT는 유지 → 재발 위험으로 폐기.
변경 가능 여부:
  - 중간 (후속 세션에서 카피 고도화 가능, 단 SSOT 단일 기준 원칙은 유지)
일시: 2026-02-15 (Session 18)

아카이브 사유: SESSION 18에서 완료됨
```

---

## D-013: SESSION 18 작업 범위 축소 및 분리 결정

```
결정:
  - SESSION 18의 범위를 "콘텐츠 데이터 바인딩(Content Data Binding)"으로 한정한다.
  - 디자인 폴리싱(폰트, 간격, 모션 등)은 SESSION 19로 명시적으로 분리/이관한다.
  - 작업 수행 주체는 Builder(Codex)로 지정한다.
이유:
  - 콘텐츠 주입(논리적 정합성)과 디자인 수정(감각적 완성도)을 동시에 진행 시 품질 저하 및 디자인 시스템 위반 위험 방지
  - 단계별 완료 기준(Definition of Done)을 명확히 하여 검수 효율성 증대
대안:
  - 기존대로 통합 진행 → 디렉터 지적으로 폐기 (리스크 높음)
변경 가능 여부: 낮음 (프로세스 확정)
일시: 2026-02-14 (Session 17)

아카이브 사유: SESSION 18에서 완료됨
```

---

**Phase 3 초기 아카이브 종료.**
