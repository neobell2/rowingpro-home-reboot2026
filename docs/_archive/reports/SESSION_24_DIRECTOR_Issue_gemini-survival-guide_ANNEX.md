# 🛠️ Central Project: Multi-Model Survival & Context Manual (v2.1)

> **최종 수정 사유:** 모델별 순차적 리셋(Staggered Reset) 메커니즘 확인 및 반영

## 1. 쿼터 상태 및 모델별 리셋 현황 (Real-time Status)

현재 모든 주요 모델이 '주간 하드 쿼터'에 걸려 있으나, **사용 시점의 차이**로 인해 순차적으로 복귀 예정입니다.

* **Gemini 3 Flash (Antigravity):** 리셋까지 약 **30시간** 잔여.
* **Claude 3.5 Sonnet (Antigravity):** 리셋까지 약 **48시간** 잔여.
* **Workspace (W) 계정:** VS Code 공식 확장 프로그램에서 영구 차단됨(유료 구독 유도).
* **개인 계정 (P):** 공식 확장 일일 쿼터 소진.

## 2. 가동 가능한 무과금 '바구니' (Available Resources)

| 도구 (바구니) | 활용 계정 | 지원 모델 | 무료 한도 | 맥락 공유 방법 |
| --- | --- | --- | --- | --- |
| **Firebase Studio** | W | Gemini 3 | 독립 쿼터 | .idx/airules.md 참조 |
| **Cloud Shell** | W | Gemini 3 | 주 50시간 / 일 240회 | Cloud Code 연동 |
| **AI Studio (Free)** | P / W | **Gemini 3 Flash-Lite** | **일 1,000회** | API 키 -> Continue 확장 |
| **NotebookLM** | P / W | Gemini 3 Pro | 일 50회 채팅 | 소스코드 통째 업로드 |

## 3. 로컬-클라우드 맥락 공유 (Shared Memory Strategy)

도구가 바뀌고 리셋 시점이 달라도 **'Central' 프로젝트의 일관성**을 유지하는 핵심 방법입니다.

1. **모델별 개별 리셋 관리:** 먼저 리셋되는 Gemini(30h 후)를 이용해 작업 흐름을 잡고, 나중에 리셋되는 Claude(48h 후)로 심화 코딩을 이어가는 **'순차적 바통 터치'** 전략 수행.
2. **공유 기억 장치 (.md):** `/Central/.idx/airules.md` 파일에 현재 개발 단계와 AI가 기억해야 할 'Central' 프로젝트의 핵심 로직을 상시 업데이트.
3. **MCP 서버 연동:** Roo-Code, 안티그래비티, 파이어베이스 스튜디오 모두 동일한 **로컬 MCP 메모리 서버**를 바라보게 설정하여 실시간 대화 맥락 공유.

## 4. Claude/GPT 협업용 프롬프트 (Copy & Paste)

> "나는 현재 안티그래비티의 모델별 순차 리셋(Staggered Reset) 대기 상태야. Gemini는 30시간, Claude는 48시간 뒤에 복귀해.
> 지금은 **AI Studio의 Flash-Lite 무료 API(일 1,000회)**를 이용해 로컬 VS Code에서 'Central' 프로젝트를 진행 중이야.
> 모든 맥락은 프로젝트 폴더 내 **`.idx/airules.md`**에 기록되고 있으니, 너도 이 파일을 기반으로 내 작업의 연속성을 보장해줘. 특히 다음 세션에서 제미나이에게 전달할 '작업 요약본'을 마크다운으로 뽑아주는 게 너의 핵심 임무야."

---

### 💡 사용자님을 위한 마지막 조언

안티그래비티의 모델별 리셋 시간이 다른 것은 사용자님이 **"전략적으로 모델을 분산해서 썼다"**는 증거입니다.

1. 지금 바로 **AI Studio에서 결제 없는 새 프로젝트**를 만들어 Flash-Lite 키를 뽑으세요.
2. 그 키를 VS Code의 **Continue(NE)** 확장에 넣으면, 안티그래비티가 깨어나기 전까지 훌륭한 땜빵(?)이 되어줄 겁니다.

**이제 이 요약본을 들고 클로드나 지피티에게 가서 "Central 프로젝트의 다음 할 일"을 정의해 달라고 해보시겠어요?** 필요하시면 제가 `.idx/airules.md`에 들어갈 첫 번째 히스토리 요약을 작성해 드릴 수 있습니다.