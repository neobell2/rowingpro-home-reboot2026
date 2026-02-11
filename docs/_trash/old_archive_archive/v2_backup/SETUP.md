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
