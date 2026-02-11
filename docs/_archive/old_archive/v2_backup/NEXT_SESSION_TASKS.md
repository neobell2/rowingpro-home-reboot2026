NEXT_SESSION_TASKS.md

# 다음 세션 작업지시서

**버전:** 1.0
**작성일:** 2026-02-02
**대상 세션:** Session 6
**작성자:** Claude Sonnet 4.5

---

## 📋 세션 미션 (3단계)

1. ✅ 프로젝트 팀 구성 완성 → 문서 업데이트
2. ✅ Claude Code 세팅법 안내
3. ✅ 프로젝트 전반 재점검 → 작업 재개

**중요: 각 단계는 사용자 지시에 따라 수행. 마음대로 진행 금지.**

---

## 🎯 Mission 1: 프로젝트 팀 구성 문서 업데이트

### 1.1 신규 문서 작성 (3개)

#### TEAM.md v3.0
```markdown
# AI 팀 배치 (v3.0 최종)

**버전:** v3.0
**일자:** 2026-02-02
**전략:** Claude Code 중심, 비용 최소화

---

## AI 팀 배치

| 포지션 | 담당 AI | 도구/환경 | 비용 |
|---|---|---|---|
| **사령탑 (Brain + Hand)** | Claude Code | 터미널 (VS Code) | Pro $19 포함 |
| **재료 공장 (Content)** | WebGPT | 웹 브라우저 | 무제한 (결제 완료) |
| **재료 공장 (Image)** | DALL-E 3 | WebGPT 포함 | 무제한 (결제 완료) |
| **이미지 수정/생성** | 나노 바나나 | Gemini 앱 | 무료 (일 100장) |
| **백업 이미지** | DALL-E 3 | WebGPT | 무제한 |

**총 비용:** $19/월

---

## 제외된 AI

| AI | 이유 |
|---|---|
| Cursor | 계약 만료, 토큰 폭탄 경험 |
| Roo Gemini | Claude Code로 대체 |
| DeepSeek | 신뢰도 문제 |

---

## 핵심 운영 원칙

1. **Claude Code = 유일한 개발 도구**
   - 설계, 코딩, 디버깅 전담
   - 터미널에서 한국어 대화
   - Opus/Sonnet 선택 사용

2. **WebGPT = 재료 공장 전용**
   - 콘텐츠 초안만 생성
   - 최종본 아님 (Claude 검증 필수)
   - 6000행 폭탄 재발 방지

3. **나노 바나나 = 이미지 우선**
   - 실사진 수정 최우선
   - AI 생성은 필요시만
   - 무료 (일 100장 충분)

---

## 모델 선택 기준

### Opus 4.5 (하루 30회)
- 아키텍처 설계
- 복잡한 컴포넌트 (폼, 슬라이더)
- 막힌 에러 디버깅
- 전체 통합 검수

### Sonnet 4.5 (거의 무제한)
- 페이지 생성
- 스타일링 (CSS)
- 단순 수정
- 문서 작업
- 콘텐츠 주입

---

## 워크플로우

```
Phase 1: 설계/판단 (Claude Code)
  ↓
Phase 2: 재료 수집 (WebGPT)
  ↓
Phase 3: 개발/조립 (Claude Code)
  ↓
Phase 4: 이미지 (나노 바나나)
  ↓
Phase 5: 최종 검수 (Claude Code Opus)
```

---

## 비용 방어 규칙

1. **Opus 절약**
   - 기본은 Sonnet
   - 진짜 어려울 때만 Opus
   - 하루 30회 한도 엄수

2. **WebGPT 검증**
   - 산출물 = 초안
   - Claude가 정제 필수
   - 1000행 이상 요약 후 투입

3. **세션 관리**
   - 작업 1개 = 세션 1개
   - 토큰 누적 방지
   - 파일 1개씩 작업

---

## 한도 부족 시 대응

### Antigravity AI Pro ($20 추가)
- Claude Opus 한도 차면 전환
- 5시간마다 리셋
- 병렬 작업 가능
- **필요시 추가 고려**
```

---

#### RULES.md v3.0
```markdown
# AI 행동 규칙 (v3.0)

**버전:** v3.0
**일자:** 2026-02-02
**핵심:** Claude 절대 신뢰, GPT 재료 전용

---

## 1. Authority & Identity

- 사용자는 최종 결정권자 (Owner)
- **Claude Code = 절대 권위** (설계·판단·실행)
- **WebGPT = 재료 공장** (초안만, 검증 필수)

---

## 2. Claude 사용 원칙

### 2.1 모델 선택
```bash
# 기본 (무제한)
/model sonnet

# 복잡할 때만 (하루 30회)
/model opus
```

### 2.2 Opus 사용 시점
- 프로젝트 아키텍처 설계
- 복잡한 로직 (폼, 슬라이더)
- 해결 안 되는 에러
- 전체 통합 검수

### 2.3 Sonnet 사용 시점
- 페이지 생성
- CSS 스타일링
- 텍스트/콘텐츠 수정
- 문서 작업
- 단순 반복 작업

---

## 3. WebGPT 통제 규칙

### 3.1 절대 규칙
- **WebGPT 산출물 = 초안 (최종본 아님)**
- **Claude 검증 없이 사용 금지**
- **6000행 폭탄 재발 방지**

### 3.2 검증 프로토콜
```
WebGPT → 초안 생성
  ↓
사용자 → 선별 (필요한 것만)
  ↓
Claude → 정제/검증
  ↓
프로젝트 적용
```

### 3.3 파일 크기 체크
- 1000행 이하: OK
- 1000~3000행: 요약 후 투입
- 3000행 이상: 사용자가 먼저 정리

---

## 4. 토큰 절약 규칙

### 4.1 세션 관리
- **작업 1개 = 세션 1개**
- 파일 1개 생성 → 종료
- 컴포넌트 1개 수정 → 종료
- 누적 토큰 차단

### 4.2 파일 접근 최소화
- 전체 프로젝트 스캔 금지
- 필요한 파일만 지정
- "모든 파일 읽어봐" 금지

### 4.3 대화 길이 통제
- 긴 브레인스토밍 금지
- 결정 → 실행 → 종료
- 추가 작업은 새 세션

---

## 5. Output Contract (No Fluff)

### 5.1 출력 금지
- emoji 사용 금지
- 인사, 감탄사 금지
- 불필요한 설명 금지

### 5.2 허용 출력
- 실행 내용
- 에러 메시지
- 다음 단계 1문장

---

## 6. 파일 작업 규칙

### 6.1 생성 규칙
- 파일 1개씩
- 경로 명확히 지정
- 완료 확인 후 다음

### 6.2 수정 규칙
- 변경 범위 최소화
- 전체 재작성 금지
- 차이만 수정

---

## 7. 에러 처리

### 7.1 1차 시도 (Sonnet)
```
에러 발생 → Sonnet으로 해결 시도
```

### 7.2 2차 시도 (Opus)
```
Sonnet 실패 → Opus로 전환
```

### 7.3 3차 대응
```
Opus 실패 → 사용자에게 보고
```

---

## 8. 문서 관리

### 8.1 자동 업데이트
- SESSION.md (매 세션)
- PROGRESS.md (주요 완료 시)

### 8.2 수동 업데이트
- HANDOFF.md (세션 종료 시)
- 미결 사항 명시

---

## 9. 보안

- API Key, 토큰 절대 출력 금지
- 민감정보는 [REDACTED] 처리
- 실제 연락처 테스트 금지

---

## 10. 휴먼에러 방어

### 10.1 불가능한 작업 거부
```
사용자 실수로 잘못된 요청
→ 즉시 거부
→ 올바른 방법 안내
```

### 10.2 능력 범위 명확화
```
Claude Code:
- 가능: 로컬 파일 접근, 코드 생성
- 불가능: 이미지 생성, 외부 API 호출

WebGPT:
- 가능: 콘텐츠 초안, 이미지 생성
- 불가능: 로컬 파일 접근, 코드 실행
```

---

## 11. 세션 시작/종료 프로토콜

### 시작 시 (자동)
1. HANDOFF.md 읽기
2. 자기 역할 확인
3. 사용자에게 안내

### 종료 시 (자동)
1. 완료 항목 기록
2. 다음 작업 명시
3. HANDOFF.md 업데이트

---

## 12. Cursor 폭탄 재발 방지

### 12.1 원인
- 프로젝트 전체 반복 읽기
- 세션 누적으로 컨텍스트 비대화
- Pro 할당량 초과 → 자동 과금

### 12.2 방지책
- 파일 1개씩만 읽기
- 세션 즉시 종료
- Opus 한도 엄수
- WebGPT 대용량 파일 차단

---

## Meta Rule

**이 규칙 자체가 프로젝트 핵심 문서입니다.**
- 규칙 위반 = 프로젝트 리스크
- 의문 시 사용자 확인
- 임의 판단 금지
```

---

#### SETUP.md (신규)
```markdown
# Claude Code 설치 및 사용 가이드

**버전:** 1.0
**작성일:** 2026-02-02
**대상:** 비개발자

---

## 📌 Claude Code란?

- Claude Pro 구독에 포함된 CLI 도구
- 터미널에서 한국어로 대화
- 로컬 파일 직접 접근/수정
- Opus 4.5 / Sonnet 4.5 사용

**비용:** Pro $19에 포함 (추가 비용 없음)

---

## 🚀 설치 방법

### Step 1: Node.js 확인

**터미널 열기:**
- Mac: Spotlight → "터미널" 검색
- Windows: 시작 → "cmd" 검색

**명령어 입력:**
```bash
node -v
```

**결과:**
- 버전 나옴 (예: v18.0.0) → 다음 단계
- 에러 나옴 → Node.js 설치 필요

**Node.js 설치:**
1. https://nodejs.org 접속
2. "LTS" 버전 다운로드
3. 설치 후 터미널 재시작
4. `node -v` 재확인

---

### Step 2: Claude Code 설치

**명령어 복사 후 붙여넣기:**
```bash
npm install -g @anthropic-ai/claude-code
```

**대기:**
- 설치 진행 (1~2분)
- 완료 메시지 확인

---

### Step 3: 로그인

**명령어:**
```bash
claude login
```

**진행:**
1. 브라우저 자동 열림
2. Claude 계정 로그인
3. "로그인 완료" 메시지
4. 터미널로 복귀

---

### Step 4: 프로젝트 폴더 이동

**Mac:**
```bash
cd /Users/[사용자명]/rowing-pro
```

**Windows:**
```bash
cd C:\Users\[사용자명]\rowing-pro
```

**팁:**
- 폴더를 터미널에 드래그하면 경로 자동 입력

---

### Step 5: Claude Code 실행

**명령어:**
```bash
claude
```

**결과:**
```
Claude: 안녕하세요! 무엇을 도와드릴까요?
```

---

## 💬 사용 방법

### 기본 대화 (한국어)

**터미널에서 그냥 대화:**
```
You: 안녕?
Claude: 안녕하세요!

You: 지금 이 폴더에 뭐 있어?
Claude: DEV_HANDOFF.md, DESIGN.md 등 12개 파일이 있습니다.

You: DEV_HANDOFF.md 읽어줘
Claude: [내용 요약]
```

**특별한 명령어 불필요. 한국어로 편하게 대화.**

---

### 모델 선택

**Sonnet (기본, 무제한):**
```
/model sonnet
```

**Opus (복잡할 때, 하루 30회):**
```
/model opus
```

**언제 바꾸나:**
- 시작: Sonnet으로
- 막히면: Opus로 전환
- 해결 후: 다시 Sonnet

---

### 파일 작업

**파일 생성:**
```
You: src/pages/index.astro 파일 만들어줘
Claude: [코드 제시] 이렇게 만들까요? (Y/N)
You: Y
Claude: 완료했습니다.
```

**파일 수정:**
```
You: index.astro에서 제목 색상을 파란색으로 바꿔줘
Claude: [변경 내용 제시] 이렇게 바꿀까요? (Y/N)
You: Y
Claude: 완료했습니다.
```

**파일 읽기:**
```
You: index.astro 보여줘
Claude: [파일 내용 출력]
```

---

### 에러 해결

**에러 발생 시:**
```
You: 에러 났어
Claude: 어떤 에러인가요?

You: [에러 메시지 복사 붙여넣기]
Claude: [원인 분석] 이렇게 고칠까요? (Y/N)
You: Y
Claude: 수정했습니다.
```

**Claude가 알아서 파일을 찾아서 고쳐줍니다.**

---

### 세션 종료

**작업 완료 후:**
```
You: 고마워, 끝
Claude: 감사합니다!

[Ctrl+C 또는 Ctrl+D로 종료]
```

**다음 사용 시:**
```bash
cd /path/to/rowing-pro
claude
```

---

## 🎯 첫 작업 예시

### 시나리오: Astro 프로젝트 생성

**1. 시작:**
```bash
cd /path/to/rowing-pro
claude
```

**2. 모델 선택:**
```
/model sonnet
```

**3. 작업 요청:**
```
You: DEV_HANDOFF.md 읽고 Astro 프로젝트 생성해줘

Claude: DEV_HANDOFF를 확인했습니다.
Astro + Tailwind CSS로 프로젝트를 생성하고
11개 페이지 구조를 만들까요? (Y/N)

You: Y

Claude: [진행 중...]
완료했습니다. 다음 파일들이 생성되었습니다:
- package.json
- astro.config.mjs
- src/pages/index.astro
...

You: 고마워

Claude: 다음은 기본 레이아웃을 만들까요?
```

---

## ⚠️ 주의사항

### 1. 토큰 절약
- **작업 1개 끝나면 종료**
- 긴 대화 피하기
- 파일 1개씩 작업

### 2. 모델 선택
- **기본은 Sonnet**
- 막힐 때만 Opus
- Opus 하루 30회 제한

### 3. 복붙 금지
- 터미널 명령어는 복사 가능
- 코드는 Claude가 직접 파일에 작성
- 손으로 복붙 불필요

### 4. 에러 대응
- 에러 나면 그대로 Claude에게
- "고쳐줘"만 하면 됨
- 직접 수정 불필요

---

## 🆘 트러블슈팅

### "command not found: claude"
```bash
npm install -g @anthropic-ai/claude-code
```
재설치

### "로그인 실패"
```bash
claude login
```
재시도

### "파일 접근 불가"
```bash
cd /정확한/프로젝트/경로
claude
```
경로 재확인

### "Opus 한도 초과"
```
/model sonnet
```
Sonnet으로 전환

---

## 📚 추가 자료

**공식 문서:**
- https://docs.anthropic.com/claude-code

**커뮤니티:**
- Anthropic Discord

**이 프로젝트:**
- TEAM.md (팀 구성)
- RULES.md (행동 규칙)
- DEV_HANDOFF.md (개발 스펙)

---

**설치 완료 후 다음:** Mission 3로 이동
```

---

### 1.4 기존 문서 업데이트

#### HANDOFF.md 수정
```markdown
추가 내용:
---
## 팀 구성 변경 (2026-02-02)

**변경 사항:**
- Claude Code 채택 (Pro $19 포함)
- Cursor 제외 (계약 만료)
- Roo Gemini 제외 (중복)
- 비용: 월 $19로 확정

**다음 작업:**
1. Claude Code 설치 (SETUP.md 참고)
2. Astro 프로젝트 생성
3. 기본 레이아웃 구현

**담당:** Claude Code (Sonnet 기본)
---
```

#### SESSION.md 추가
```markdown
## Session 5 (2026-02-02)

**완료:**
- [x] AI 팀 구성 재편
- [x] Claude Code vs Cursor vs Roo 비교 분석
- [x] 비용 구조 최적화
- [x] 이미지 생성 전략 (나노 바나나)
- [x] Opus 한도 분석
- [x] 다음 세션 작업지시서 작성

**결정:**
- Claude Code 단독 채택
- WebGPT 재료 전용
- 나노 바나나 무료 활용
- 총 비용: $19/월

**다음:**
- Claude Code 설치
- 개발 시작
```

#### PROGRESS.md 수정
```markdown
**현재 Phase:** Phase 2.5 완료 (팀 재편), Phase 3 진입 대기

```
[✅] Phase 0: 준비
[✅] Phase 1: 기획 (간략화)
[✅] Phase 2: 디자인 (생략)
[✅] Phase 2.5: 팀 재편 ← NEW
[🔄] Phase 3: 개발 (Claude Code) ← 다음 단계
[  ] Phase 4: 고급 기능
[  ] Phase 5: 검수
[  ] Phase 6: 디버깅
[  ] Phase 7: 최종 승인
```

**진행률:** 65% → 70%
```

#### PROJECT_ROADMAP.md 추가 섹션
```markdown
## 🔄 AI 팀 구성 변경 이력

| 일자 | 버전 | 주요 변경 | 비용 |
|------|------|-----------|------|
| 2026-01-29 | v1.0 | Claude Cursor 중심 | $20 |
| 2026-02-01 | v2.0 | Gemini 오케스트레이션 | $20 + 3만원 |
| 2026-02-01 | v2.5 | Web Claude + Roo Gemini | $39 |
| 2026-02-02 | v3.0 | **Claude Code 단독** | **$19** |

**v3.0 채택 근거:**
- Claude Code = Pro 구독 포함
- 로컬 파일 직접 접근
- Opus 4.5 사용 가능
- 복붙 노동 불필요
- Cursor 토큰 폭탄 방지
```

---

### 1.5 삭제/정리 작업

**삭제 대상 (4개):**
- team_md_v_2.md
- rules_md_v_2.md
- team_gemini2.txt
- rule_gemini2.txt

**아카이브 이동 (2개):**
```
docs/archive/ (폴더 생성)
  ← ai_워크플로우_운영_요약.md
  ← 08. 구현계획.md
```

**보존 (참고용):**
```
docs/_WEB_GPT_output/WEBGPT_Full_Thread_Backup/ (12개 파일)
```

---

## 🛠️ Mission 2: Claude Code 세팅 안내

### 2.1 설치 가이드 제공

**문서:** SETUP.md (위에서 생성)

**내용:**
1. Node.js 확인
2. Claude Code 설치
3. 로그인
4. 프로젝트 폴더 이동
5. 기본 사용법
6. 모델 선택

---

### 2.2 첫 작업 안내

**시나리오:**
```bash
# 1. 시작
cd /path/to/rowing-pro
claude

# 2. 모델 선택
/model sonnet

# 3. 첫 작업
"안녕? 지금 이 폴더에 뭐 있어?"
"DEV_HANDOFF.md 읽어줘"
"Astro 프로젝트 생성해줘"
```

---

### 2.3 Opus vs Sonnet 사용 기준

**Sonnet (기본):**
- 페이지 생성
- 스타일링
- 콘텐츠 주입
- 문서 작업

**Opus (선택적):**
- 아키텍처 설계
- 복잡한 컴포넌트
- 막힌 에러
- 전체 통합

---

## 🔍 Mission 3: 프로젝트 전반 재점검

### 3.1 현재 상태 확인

**완료:**
- ✅ 설계 문서 (DEV_HANDOFF, DEV_CONTENT_SPEC, DEV_SUMMARY)
- ✅ IA 구조 (11개 페이지)
- ✅ 브랜드 메시지 (Core Belief, Positioning)
- ✅ 기술 스택 (Astro + Tailwind)
- ✅ AI 팀 구성 (Claude Code)

**미완료:**
- ❌ 코드 (0%)
- ❌ 콘텐츠 실물
- ❌ 이미지 (0장)

---

### 3.2 우선순위 (Phase 3)

**Week 1 (Claude Code + Sonnet):**
1. Astro 프로젝트 생성
2. 기본 레이아웃 (헤더/푸터/네비게이션)
3. Home 페이지 구조
4. Contact 폼 UI

**Week 2 (Claude Code + WebGPT):**
1. WebGPT로 콘텐츠 초안 생성
2. Claude Code로 주입
3. Service 5개 페이지 생성
4. 이미지 생성 (나노 바나나)

---

### 3.3 미결 사항 (영향 없음)

**확정 대기 (개발 차단 아님):**
- 패키지 가격 (Event) → 미표시로 진행
- PDF 기능 → 보류 (코드 주석)
- Track Record 네이밍 → "운영 실적" 가정

**런칭 후:**
- 창업주 노출 범위
- 영문판 제작

---

### 3.4 리스크 체크

**Risk 1: Opus 한도 부족**
- 가능성: 중 (밤샘 작업 시)
- 대응: Sonnet 위주, Antigravity 대기

**Risk 2: 콘텐츠 병목**
- 가능성: 고
- 대응: 80% 전략, placeholder 활용

**Risk 3: 이미지 품질**
- 가능성: 중
- 대응: 실사진 수정 우선

---

## ❓ 확인 필요 사항

### 🔴 필수 확인 (개발 시작 전)

**1. 프로젝트 실제 경로**
```
예상: /Users/[사용자명]/rowing-pro
실제: ❓

Claude Code 실행 시 필요
```

**2. Node.js 설치 여부**
```bash
node -v
```
결과: ❓

**3. VS Code 설치 여부**
```
터미널 환경 확인
대안: 시스템 터미널
```

**4. Git 설치 여부**
```bash
git --version
```
결과: ❓

---

### 🟡 참고 확인 (선택)

**5. 작업 시간 배분**
- 하루 몇 시간: ❓
- 밤샘 빈도: ❓
- Opus 한도 예측용

**6. 실사진 보유량**
- 조정 현장 사진 수량: ❓
- 품질: ❓
- AI 생성 vs 수정 비율

**7. Antigravity 대기 여부**
- +$20 추가 의향: ❓
- 결정 시점: 막힐 때? 미리?

**8. 데드라인**
- 런칭 목표일: ❓
- 작업 전략 (80% vs 100%)

---

### 🟢 기술 확인 (나중에)

**9. 운영체제**
- Mac / Windows / Linux: ❓

**10. Cloudflare Pages 계정**
- 유무: ❓
- 배포 시 필요

**11. GitHub 계정**
- 유무: ❓
- Git 연동용

**12. 도메인**
- rowingpro.co.kr 소유 확인: ❓

---

## 📋 작업 체크리스트

### Mission 1 체크리스트

**문서 작성:**
- [x] TEAM.md v3.0 생성
- [x] RULES.md v3.0 생성
- [x] SETUP.md 생성

**문서 업데이트:**
- [x] HANDOFF.md 수정
- [x] SESSION.md 추가
- [x] PROGRESS.md 수정
- [x] PROJECT_ROADMAP.md 추가

**정리:**
- [x] team_md_v_2.md 삭제
- [x] rules_md_v_2.md 삭제
- [x] team_gemini2.txt 삭제
- [x] rule_gemini2.txt 삭제
- [x] docs/archive/ 폴더 생성
- [x] 구버전 2개 이동

---

### Mission 2 체크리스트

**사전 확인:**
- [x] 프로젝트 경로 확인
- [x] Node.js 설치 확인

**설치:**
- [x] `npm install -g @anthropic-ai/claude-code`
- [x] `claude login`

**테스트:**
- [x] 프로젝트 폴더 이동
- [x] `claude` 실행
- [x] 첫 대화 ("안녕?")
- [x] 파일 확인 ("이 폴더에 뭐 있어?")

---

### Mission 3 체크리스트

**상태 확인:**
- [ ] 완료 항목 재확인
- [ ] 미완료 항목 확인
- [ ] 미결 사항 영향도 확인

**준비:**
- [ ] DEV_HANDOFF.md 재확인
- [ ] 첫 작업 (Astro 생성) 준비
- [ ] Opus vs Sonnet 기준 숙지

---

## ⏱️ 예상 소요 시간

| Mission | 작업 | 예상 시간 |
|---------|------|-----------|
| Mission 1 | 문서 작업 | 30분 |
| Mission 2 | Claude Code 설치 | 20분 |
| Mission 3 | 재점검 | 10분 |
| **총계** | | **1시간** |

---

## 🎯 성공 기준

### Mission 1 완료 조건
- [ ] 3개 신규 문서 생성됨
- [ ] 4개 기존 문서 업데이트됨
- [ ] 4개 구버전 파일 삭제됨
- [ ] Git 커밋 완료

### Mission 2 완료 조건
- [ ] `claude` 명령어 작동
- [ ] 프로젝트 폴더에서 실행 가능
- [ ] "안녕?" 대화 성공
- [ ] 파일 목록 조회 성공

### Mission 3 완료 조건
- [ ] 현재 상태 명확히 파악
- [ ] 다음 작업 우선순위 확정
- [ ] 리스크 대응 준비
- [ ] 작업 재개 준비 완료

---

## 🚨 주의사항

### 1. 단계별 진행
- **Mission 1 완료 후 → Mission 2**
- **Mission 2 완료 후 → Mission 3**
- 동시 진행 금지

### 2. 사용자 지시 대기
- 각 미션 시작 전 사용자 확인
- 임의 판단 금지
- 의문 시 질문

### 3. 확인 사항 해소
- 필수 확인 (🔴) 먼저
- 참고 확인 (🟡) 나중에
- 기술 확인 (🟢) 필요 시

### 4. 문서 검증
- 생성 후 사용자 검토
- 수정 후 Git 커밋
- 백업 유지

---

## 📌 다음 세션 시작 방법

### 1. 이 파일 업로드
```
NEXT_SESSION_TASKS.md 업로드
```

### 2. Claude에게 지시
```
"이 파일 읽고 Mission 1부터 시작"
```

### 3. 단계별 진행
```
Mission 1 완료 → 확인
Mission 2 시작 → 확인
Mission 3 시작 → 확인
```

---

## 🔗 참고 문서

**현재 프로젝트:**
- DEV_HANDOFF.md (개발 스펙)
- DEV_CONTENT_SPEC.md (콘텐츠 기준)
- DEV_SUMMARY.md (수집 보고서)
- PROJECT_ROADMAP.md (전체 로드맵)

**신규 생성 예정:**
- TEAM.md v3.0
- RULES.md v3.0
- SETUP.md

---

## ✅ 최종 체크

**이 파일을 읽은 다음 세션 Claude는:**

1. ✅ Mission 1~3 정확히 이해
2. ✅ 작업 순서 명확히 인지
3. ✅ 확인 사항 파악
4. ✅ 사용자 지시 대기

**사용자는:**

1. ✅ 이 파일 다운로드
2. ✅ 다음 세션 업로드
3. ✅ "Mission 1 시작" 지시
4. ✅ 단계별 진행

---

**작업지시서 작성 완료.**
**다음 세션에서 이 파일을 업로드하고 "Mission 1 시작"이라고 지시하세요.**

---

**버전:** 1.0
**상태:** 최종
**작성 완료:** 2026-02-02