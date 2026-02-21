# 문서 네이밍 규칙 (Naming Conventions)

> **권위:** `CLAUDE.md`의 보조 참조 문서 (비권위)
> **목적:** SESSION_24 PM 실책(파일 검색 누락) 재발 방지 + 문서 탐색성 향상
> **근거:** `docs/reports/SESSION_24_ARCHITECT_AUDIT.md` 섹션 3.3

---

## 1. 세션 보고서 (`docs/reports/`)

```
형식: SESSION_{번호}_{역할}_{작업자}.md

예시:
  SESSION_25_PM_SONNET.md
  SESSION_23_CONTENT_GEMINI.md
  SESSION_22_BUILDER_CODEX.md

규칙:
  - 번호: 2자리 (예: 22, 23, 24)
  - 역할: PM / ARCHITECT / BUILDER / DESIGNER / CONTENT / ANALYST
  - 작업자: SONNET / HAIKU / OPUS / GEMINI / FLASH / CODEX
```

**예외 허용:**
- 디렉터 메모/요약: `SESSION_{번호}_DIRECTOR_{내용}.md`
- 대화 요약: `SESSION_{번호}_PM_Dialogue_Summary.md`

---

## 2. Work Order (`docs/work_orders/`)

```
형식: WO_{내용_대문자_언더스코어}.md

예시:
  WO_TECHNICAL_DEBT_ROADMAP.md
  WO_VERTEX_AI_FEASIBILITY_REVIEW.md
  WO_PHASE3_STEP1_CONTENT.md

예외 (통합 로드맵):
  PHASE_{번호}_{내용}_WO.md
  예: PHASE_3_INTEGRATED_ROADMAP_WO.md
```

**완료 처리:**
- 완료된 WO는 `docs/_archive/work_orders/` 폴더로 이동 (아카이브)
- 파일명 변경 없음, 파일 내 상태 필드를 `[STATUS: COMPLETED]`로 갱신

---

## 3. 이슈 감사 폴더 (`docs/reports/[이슈명]/`)

이슈별 감사·검토 문서가 3개 이상 생성될 경우 폴더로 묶습니다.

```
폴더명: [Audit]_{이슈명}/   또는   [Issue]_{이슈명}/

내부 파일 규칙:
  - 최종 결정: [Final_Decision]_{이슈명}.md   ← 반드시 이 접두어 사용
  - 검토 보고: SESSION_{번호}_{역할}_{내용}.md
  - 기술 시뮬레이션: Tech_simul/ 하위 폴더

예시 (Vertex AI 이슈):
  [Audit]_Vertex_bot_Issue/
  ├── [Final_Decision]_Vertex_AI_Chatbot.md     ← 최종 결정
  ├── SESSION_24_ARCHITECT_VERTEX_AI_REVIEW.md
  ├── SESSION_24_ARCHITECT_FEASIBILITY_VERDICT.md
  ├── SESSION_24_EXTERNAL_AUDIT_VERTEX_AI_REASSESSMENT.md
  ├── SESSION_24_MAINARCHITECT_OPUS.md
  └── Tech_simul/
```

**인덱스 원칙:** 폴더 내 파일이 4개 이상이면 `README.md`에 파일 목록과 역할 명시

---

## 4. 콘텐츠 SSOT (`docs/contents/`)

```
형식: {페이지명}.md   또는   service_{카테고리}.md

예시:
  home.md, about.md, programs.md, contact.md, common.md
  service_hub.md
  service_corporate_hub.md
  service_corporate_training.md
  service_school_youth.md
  service_sports_event.md
  service_club_general.md
  service_family.md
```

---

## 5. PM 파일 조회 체크리스트 (재발 방지)

> SESSION_24 PM 실책 재발 방지용. 폴더 내 파일을 "전수 확인"할 때 반드시 적용.

```
□ 1. 대상 폴더 전체 열거: Glob(**/*) 또는 ls 먼저 실행
□ 2. 총 파일 수 확인: "이 폴더에 N개 파일 존재" 명시
□ 3. 각 파일 목적 1줄 요약: 파일명 → 역할 매핑
□ 4. 누락 가능성 점검: "N개 중 M개 읽음, 누락 없음" 명시
□ 5. 보고 시 파일 목록 첨부: 디렉터가 직접 확인 가능하도록
```

**패턴 검색 한계 인식:**
- Glob 패턴은 대소문자 구분, 파일명 형식이 다르면 매칭 실패 가능
- `[Final_Decision]_`, `[Audit]_` 등 특수 접두어 파일은 패턴 검색에서 누락될 수 있음
- 검색 결과를 "전체"라 가정 금지 → 반드시 폴더 전체 열거로 교차 검증

---

**작성:** PM (Claude Sonnet 4.5) | SESSION 25 | 2026-02-17
**근거:** `docs/reports/SESSION_24_ARCHITECT_AUDIT.md` 섹션 3.3 Architect 권고
