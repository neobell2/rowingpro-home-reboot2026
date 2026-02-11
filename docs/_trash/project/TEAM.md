# AI 팀 배치

**버전:** v3.2
**일자:** 2026-02-03

---

## 팀 구성

| 역할 | 담당 | 환경 | 비용 |
|------|------|------|------|
| 사령탑 | Claude Code | VS Code 터미널 | Pro $19 포함 |
| 반복 코딩 | ChatGPT Codex | 웹 브라우저 | Plus $20 포함 |
| 콘텐츠 초안 | WebGPT | 웹 브라우저 | 무제한 |
| 이미지 생성 | DALL-E 3 | WebGPT 포함 | 무제한 |
| 이미지 수정 | 나노 바나나 | Gemini 앱 | 무료 (일 100장) |

**총 비용:** $39/월

---

## 역할 정의

### Claude Code (사령탑)
- 설계, 판단, 아키텍처
- 프로젝트 셋업, 레이아웃, 템플릿
- 디버깅, 최종 검수
- 로컬 파일 직접 접근

### ChatGPT Codex (실행 부대)
- 반복 코딩 전담 (Service 하위 5개 등)
- 단순 페이지 (Privacy, 404)
- Tailwind 스타일링, 간단한 컴포넌트
- Claude 검수 필수

### WebGPT (재료 공장)
- 콘텐츠 초안만 생성
- **최종본 아님** (Claude 검증 필수)

### 나노 바나나 (이미지)
- 실사진 수정 우선
- AI 생성은 필요시만

---

## 제외된 AI

| AI | 이유 |
|------|------|
| Cursor | 토큰 폭탄, 계약 만료 |
| Roo Gemini | Claude Code로 대체 |
| DeepSeek | 신뢰도 문제 |

---

## 워크플로우

```
설계 (Claude) → 재료 (WebGPT) → 구현 (Claude/Codex) → 이미지 (나노) → 검수 (Claude)
```

### 역할 분담

| 작업 | 담당 |
|------|------|
| 프로젝트 셋업, 레이아웃 | Claude |
| Service 하위 5개 페이지 | Codex |
| Privacy, 404 | Codex |
| Contact 폼, 디버깅 | Claude |
| 최종 검수 | Claude |

---

## 한도 부족 시

Antigravity AI Pro ($20 추가) - 필요시 고려

---

**규칙/절차는 RULES.md 참고**
