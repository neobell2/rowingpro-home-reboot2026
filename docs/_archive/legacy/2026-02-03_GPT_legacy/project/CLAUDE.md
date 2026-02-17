# Claude Code 프로젝트 설정

이 프로젝트의 전역 규칙은 `project/RULES.md`에 정의되어 있습니다.

## 세션 시작 시

1. `project/RULES.md` 읽기 (전역 규칙)
2. `DASHBOARD.md` 읽기 (현재 상태, 할 일)
3. 작업 시작

## 참조 문서

| 문서 | 용도 |
|------|------|
| DASHBOARD.md | 현재 상태, 이번 세션 할 일 |
| project/RULES.md | 전역 규칙 |
| project/TEAM.md | AI 팀 구성 |
| specs/DEV_SPEC.md | 개발 스펙 (IA, 브랜드, 디자인) |
| project/ROADMAP.md | 전체 계획 |

## 담당 및 모델 선택 (자동)

**각 작업 시작 전 Claude가 자동 판단하고 알림**

### AI 팀 역할

- **Claude Code (Sonnet/Opus)**: 설계, 판단, 아키텍처, 디버깅
  - Sonnet: 주 40-80시간 (기본)
  - Opus: 하루 30회 (복잡한 작업만)
- **ChatGPT Codex**: 반복 코딩 (Service 하위, Privacy/404 등)

### 자동 판단 프로세스

```
1. DASHBOARD 확인: 다음 작업
2. project/TEAM.md 참조: 담당 판단 (Claude/Codex)
3. project/RULES.md 참조: 모델 선택 (Sonnet/Opus)
4. 사용자 알림: "[작업]은 [담당]/[모델]로 진행합니다"
5. 사용자 승인 후 시작
```

**예시:**
- "레이아웃 설계는 Claude/Sonnet으로 진행합니다. 예상 15개 메시지"
- "Service 하위 5개는 Codex로 진행합니다"

**상세:** [RULES.md](RULES.md) 섹션 11, [TEAM.md](TEAM.md)

## 주의사항

- 전체 프로젝트 스캔 금지
- 파일 1개씩 처리
- WebGPT 산출물은 검증 후 사용
