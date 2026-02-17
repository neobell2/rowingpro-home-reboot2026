# Gemini Survival Mode — 무료 사용 가이드
> **최종 업데이트:** 2026년 2월 17일 | 공식 문서 기준으로 검증됨

---

## TL;DR — 핵심 3줄 요약

1. **W(Workspace) 계정** → AI 기능 대부분 차단. **AI Studio API 키**와 **NotebookLM**만 사용 가능
2. **P(Personal) 계정** → 메인으로 사용. Firebase Studio(3개) + Cloud Shell + Code Assist(채팅 240회/일)
3. **쿼터 소진 시** → AI Studio **Flash-Lite API 키**(1,000회/일)로 버팀. GCP 프로젝트 여러 개 생성 시 쿼터 배수 증가

---

## 1. 계정별 제약 현황

| 계정 | 상태 | 설명 |
|:---|:---|:---|
| **W (Workspace Business Standard)** | 🔴 AI 기능 차단 | Google 공식: Gemini Code Assist 무료 tier는 Workspace 계정 사용 불가. Standard/Enterprise 라이선스 구매 필요 |
| **P (Personal)** | 🟡 일일 쿼터 소진 중 | Code Assist 개인 무료: 채팅 240회/일, 코드 완성 6,000회/일 |
| **Antigravity** | 🟡 주간 쿼터 적용 | Gemini CLI는 Code Assist for Individuals 한도 공유. 7일 단위 리셋 |

---

## 2. 사용 가능한 무료 쿼터 버킷

| 도구 | 사용 계정 | 무료 제공량 | 비고 |
|:---|:---|:---|:---|
| **Cloud Shell Editor** | P만 가능 | 주당 50시간 / 채팅은 Code Assist 한도(240회/일) 공유 | W 계정은 AI 기능 차단. 터미널 자체는 사용 가능 |
| **Firebase Studio** | P 권장 | 워크스페이스 3개 무료 | W 계정은 Gemini in Firebase 사용 시 Code Assist 구독 필요. Google Developer Program(무료) 가입 시 10개로 확대 |
| **AI Studio (Free Tier)** | P / W 모두 가능 | Flash-Lite: 1,000회/일 · Flash: 250회/일 · Pro: 100회/일 | GCP **프로젝트 단위** 쿼터 적용 → 프로젝트 여러 개 생성으로 쿼터 분산 가능 |
| **NotebookLM** | P / W 모두 가능 | 채팅 50회/일 · 소스 50개/노트북 · 노트북 100개 | 소스당 최대 500,000단어/200MB 업로드 가능. 코드베이스 전체 분석에 유리 |
| **Gemini CLI (API Key 모드)** | P / W 모두 가능 | Flash 모델: 250회/일 (무료 API 키 기준) | AI Studio에서 무료 키 발급 → `gemini auth --api-key YOUR_KEY` |
| **Vertex AI Express Mode** | P | 별도 쿼터 버킷 | 빌링 계정 없이 Gemini CLI에서 사용 가능 |

> ⚠️ **2025년 12월 7일 AI Studio 쿼터 대폭 삭감됨.** Flash가 기존 ~1,000회에서 250회로 감소. Flash-Lite(1,000회)를 우선 활용할 것.

---

## 3. 비상 워크플로

```
[Antigravity / P 계정 한도 도달]
        │
        ▼
① Firebase Studio (P 계정, 워크스페이스 3개)
   → .idx/airules.md 자동 로드 → 맥락 즉시 복원
        │
        ├── 한도 도달 시
        ▼
② AI Studio 무료 API 키 (Flash-Lite 1,000회/일)
   → Gemini CLI: gemini auth --api-key YOUR_KEY
   → Continue.dev 확장에 이식 (VS Code 유지 가능)
        │
        ├── 모두 소진 시
        ▼
③ NotebookLM
   → 전체 소스코드 업로드 (노트북당 50개 소스)
   → 구조 분석 및 다음 세션 요약본 생성
   → 결과물을 GEMINI.md에 저장 후 커밋
        │
        └── 사전에 해두면 좋은 것
④ Google Developer Program 무료 가입
   → Firebase Studio 워크스페이스 3개 → 10개
   → URL: developers.google.com/profile
```

---

## 4. 맥락 공유 전략

### 파일 기반 (권장)
GitHub 레포에 아래 두 파일을 유지하고, 세션 종료 전 반드시 커밋.

| 파일 경로 | 역할 |
|:---|:---|
| `GEMINI.md` | Gemini CLI가 자동으로 읽는 컨텍스트 파일 (로컬 작업 디렉토리) |
| `.idx/airules.md` | Firebase Studio가 자동으로 읽는 컨텍스트 파일 |

**운영 방법:**
1. 세션 종료 전 현재 상황을 두 파일에 기록 → `git push`
2. 다른 환경에서 시작 시 `git pull` 한 번으로 전체 맥락 복원
3. 도구 전환 시 별도 설명 없이 AI가 이전 작업을 이어받음

### MCP 서버 (로컬 전용)
- 로컬 SQLite MCP 서버는 **로컬 환경(Roo-Code, Gemini CLI 터미널)에서만** 동작
- Firebase Studio, Cloud Shell은 격리된 클라우드 환경 → 로컬 MCP 직접 연결 불가
- 클라우드 IDE 간 맥락 공유는 반드시 **파일 기반(GitHub)** 으로 처리할 것

---

## 5. W 계정에서 사용 가능한 경로

W 계정도 할 수 있는 것이 있음:

- ✅ **AI Studio API 키 발급** → GCP 프로젝트 생성 후 Flash-Lite 1,000회/일 사용
- ✅ **NotebookLM** → P 계정과 동일한 무료 한도
- ✅ **Cloud Shell 터미널** → AI 기능 제외, 코드 실행/빌드/배포 용도로 활용
- ❌ Code Assist VS Code 확장 (무료) → 차단
- ❌ Gemini CLI 개인 무료 인증 → 차단
- ❌ Firebase Studio Gemini 기능 → 차단

---

## 6. 다음 AI에게 전달할 컨텍스트 프롬프트

```
나는 Gemini 7일 주간 쿼터(Code Assist for Individuals)와 AI Studio API 예산을 소진하여
여러 무료 도구를 교차 사용하는 'Survival Mode' 개발 중이야.

- W(Workspace) 계정: Gemini Code Assist 무료 tier 차단됨
- P(Personal) 계정 + AI Studio 무료 API 키 중심으로 운영 중
- 맥락 파일: GEMINI.md (로컬/CLI용), .idx/airules.md (Firebase Studio용)

프로젝트 'Central'의 진행 상황은 위 파일에 기록되어 있으니,
파일을 기반으로 맥락을 파악하고 다음 세션을 위한 요약본을 만들어줘.
```

---

## 참고 링크

- [Gemini Code Assist 공식 한도](https://developers.google.com/gemini-code-assist/resources/quotas)
- [AI Studio 요금 및 한도](https://ai.google.dev/pricing)
- [Firebase Studio 가격 정책](https://firebase.google.com/docs/studio/pricing)
- [NotebookLM 자주 묻는 질문](https://support.google.com/notebooklm/answer/16269187)
- [Google Developer Program 가입](https://developers.google.com/profile)
