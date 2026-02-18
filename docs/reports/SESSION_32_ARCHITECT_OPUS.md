# SESSION_32 Architect 세션 보고서

**작성자:** Architect (Claude Opus 4.6)
**일시:** 2026-02-18
**상태:** [STATUS: COMPLETED]

---

## 1. 세션 개요

**목적:** TD-02 Content Collections 도입 설계 검토 (WO_ARCHITECT_CONTENT_COLLECTIONS_REVIEW)

**실제 수행:** 설계 검토 + 근본 원인 분석 + 프로젝트 전수 결함 점검

---

## 2. Content Collections 설계안 (D-032)

### 승인된 방향

- TD-02를 Phase 4에서 Phase 3 (콘텐츠 확정 전)으로 선행
- `src/content/pages/` 단일 컬렉션 (type: 'content') + `src/content/common/` 데이터 컬렉션 (type: 'data')
- 세부 스키마는 Builder 재량 (17페이지 실제 구조 기반 확정)
- `src/content/pages/`가 빌드 SSOT, `docs/contents/`는 편집 작업 공간 유지
- 17페이지 일괄 전환, 시각적 출력 변경 없음

### Builder 제약

- 현재 텍스트 그대로 이전 (내용 변경 금지)
- 디자인 시스템 CSS/클래스 변경 금지
- 새 npm 패키지 추가 금지 (Astro 내장 기능만)
- `npm run build` Exit 0 필수

---

## 3. 근본 원인 분석 — TD-02가 Phase 4로 밀린 이유

### 경위 추적

| 순서 | 주체 | 행위 | Content Collections 언급 |
|:--|:--|:--|:--:|
| 1 | Opus (Architect) | 거버넌스 감사 (SESSION_21) | 없음 (스코프 밖) |
| 2 | Gemini Pro (External Auditor) | 교차검증 — 기술 부채 4건 발견 | 있음 (시급도 미지정) |
| 3 | Haiku (PM) | WO_TECHNICAL_DEBT_ROADMAP 발행 | Phase 4로 배치 |
| 4 | 디렉터 | "Phase 4에 해도 되나?" 질문 → Haiku 답변 신뢰하여 승인 | — |

### 근본 원인: 소비자 관점 부재

모든 에이전트가 마찰을 자기 능력 기준으로 평가했음.

- AI에게 `.astro` 파일의 텍스트 교체는 0.5초 작업 → "급하지 않다"
- 실제 소비자(디렉터/인간)에게는 코드 파일 수백 회 편집 → 심각한 병목
- "콘텐츠 편집자가 코드를 만지면 안 된다"는 업계 기초 상식을 AI가 지식으로는 알지만, 자기 능력이 개입하면 긴급도 판단이 왜곡됨

### 디렉터와의 분석 과정

1. 디렉터 제기: "이거 처음에 왜 이렇게 설계 안 했나?"
2. Architect 답변: 스켈레톤 단계에서는 하드코딩이 맞으나, 구조 확정 후에도 미룬 것이 타이밍 실수
3. 디렉터 지적: "근본적으로 아키텍트 영역 아니냐? 최초 설계?"
4. Architect 인정: Architect 필수 호출 지점에 "구현 착수 전 빌드 구조 리뷰"가 없었음. 설계 누락.
5. 디렉터 맥락 제공: 초기 설계는 GPT, 리부팅 후 Architect 임명. GPT+인간 책임.
6. 디렉터 핵심 질문: "인간만이 할 수 있는 단계니까 AI가 예측 못한 건가?"
7. Architect 검증: 부분적 맞음. 원칙은 알고 있었으나 AI 자기 능력이 긴급도 판단을 왜곡.
8. 디렉터 지시: 이 발견을 재발 방지 체계로 남겨라.
9. 원칙 확장: "인간 vs AI" 프레이밍 → "소비자 vs 생산자" 보편 원칙으로 확장

---

## 4. 소비자 기준 원칙 (D-033)

CLAUDE.md §2 핵심 운용 규칙에 신설:

```
### 소비자 기준 원칙 (D-033)
- 모든 구현·설계·권고의 마찰과 긴급도는 소비자(다음 작업자)의 능력과 환경으로 평가한다
- 생산자 자신이 처리할 수 있다는 이유로 문제의 심각도를 낮추지 않는다
- 우선순위 판단, 일정 배치, 구현 착수 전에 "이 결과물을 다음에 누가, 어떻게 사용하는가"를 확인한다
```

적용 범위: 인간/AI 불문. 모든 소비자에게 적용.
최종 보고서 반영: 필수 (Phase 전환 체크리스트에 등록 완료).

---

## 5. 프로젝트 전수 결함 점검

### 인간 작업 동선 기준 (7건)

| # | 결함 | 심각도 | 상태 |
|:--|:--|:--|:--|
| 1 | 페이지 텍스트 하드코딩 (TD-02) | HIGH | 교정 중 |
| 2 | 공통 데이터 중복 하드코딩 (Footer/Contact) | MEDIUM | 신규 — D-032로 함께 해결 |
| 3 | FAQ 데이터 하드코딩 | LOW | 신규 — D-032로 함께 해결 |
| 4 | TD-03 이미지 최적화가 새 마찰을 만들 위험 | MEDIUM | 예방적 — 05_NEXT_TASK에 D-033 경고 등록 |
| 5 | Architect 필수 호출 지점 누락 (구현 착수 전) | HIGH | 신규 |
| 6 | 승인 관문의 구조적 한계 | MEDIUM | 신규 |
| 7 | 인간 영향 평가 체계 부재 (근본 원인) | CRITICAL | D-033으로 교정 |

### 심층 점검 — 잠재 위험 (16건)

**지금 깨져 있음 (4건):**
- hero-bg.mp4 미존재 (WebM fallback만 있음)
- public/images/, public/og/ 빈 폴더 (OG 이미지 미존재)
- BaseLayout.astro 죽은 파일 (미사용 레거시)
- docs/contents/ SSOT와 실제 코드 불일치 (home.md vs index.astro)

**시한폭탄 (4건):**
- Lucide Icons `@latest` CDN 참조 (breaking change 시 사이트 파손)
- hero-bg.webm 3.3MB (모바일 데이터 폭탄)
- 빌드 명령 `npx --yes node@22` (네트워크 의존, CI/CD 불안정)
- 외부 CDN 3개 의존 (Google Fonts, jsdelivr, unpkg)

**미지 (5건):**
- 배포 경로 미검증 (어댑터 없음, 테스트 0회)
- contact@rowingpro.co.kr 이메일 실재 여부 미확인
- 개인정보 처리방침 법적 검증 없음
- 런칭 후 운영 모델 미정의
- SEO 인프라 제로 (robots.txt, sitemap, OG, 구조화 데이터 없음)

**모호 (3건):**
- 부스형 4단계 가격표 CEO 확인 1주+ 미결
- 콘텐츠 드래프트 34개 중 확정 0개
- 지도 연동 서비스 미결정

---

## 6. 산출물

| 산출물 | 위치 |
|:--|:--|
| CLAUDE.md v3.2 | CLAUDE.md (D-033 원칙 삽입) |
| D-032 결정 기록 | 03_DECISIONS.md |
| D-033 결정 기록 | 03_DECISIONS.md |
| 05_NEXT_TASK.md v1.12 | 현재 지시 갱신, Phase 전환 체크리스트 D-033 추가 |
| WO 상태 갱신 | WO_ARCHITECT_CONTENT_COLLECTIONS_REVIEW → COMPLETED |
| 세션 보고서 | docs/reports/SESSION_32_ARCHITECT_OPUS.md (본 문서) |

---

## 7. 다음 단계

1. **PM (Sonnet):** D-032 기반 Builder WO 발행
2. **Builder (Sonnet):** Content Collections 구현 (src/content/ 구조 + 17페이지 리팩터링)
3. **PM:** Builder 완료 후 src/content/pages/*.md에 확정 텍스트 주입 체계 확보
4. **디렉터:** 콘텐츠 창작 작업 시작 (.md 파일 텍스트만 수정하면 화면 반영)

---

**Architect 서명:** Claude Opus 4.6
**세션 상태:** 완료
