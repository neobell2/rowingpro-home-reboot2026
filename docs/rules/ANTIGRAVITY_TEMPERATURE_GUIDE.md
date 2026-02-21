# AntiGravity 템퍼러처(Temperature) 설정 안내

AntiGravity(또는 Cline/Roo) 사용 중 AI의 답변이 너무 창의적이거나(환각 발생), 반대로 너무 일관되게 단조로울 경우 **Temperature(온도)** 값을 조절하여 통제할 수 있습니다.

### 1. Temperature란?
- **AI의 출력 무작위성(Randomness)을 결정하는 값**입니다. (보통 0.0 ~ 1.0 또는 0.0 ~ 2.0 사이)
- **값이 낮을수록 (예: 0.0 ~ 0.3):** AI가 매우 결정론적이고 일관된 답변을 합니다. (코드 작성, 팩트 기반 문서 작성, 규칙 엄수에 적합)
- **값이 높을수록 (예: 0.7 ~ 1.0):** AI가 더 다양하고 창의적인 단어를 선택합니다. (카피라이팅, 아이디어 브레인스토밍에 적합하지만, 로잉프로처럼 거버넌스가 엄격한 프로젝트에서는 환각/망상(Hallucination)의 주범이 될 수 있습니다.)

### 2. 설정 방법

#### A. AntiGravity (또는 VSCode 확장) 내 UI 설정 (가장 권장)
1. AntiGravity(또는 Cline) 창 우측 상단의 **톱니바퀴 아이콘(Settings)**을 클릭합니다.
2. **API Configuration** 또는 **Advanced Provider Settings** 메뉴를 찾습니다.
3. **Temperature** 슬라이더나 입력 칸을 찾습니다.
4. 로잉프로 프로젝트의 PM/Builder/Architect 역할 수행 시에는 **0.0 ~ 0.2** 사이로 낮추는 것을 강력히 권장합니다. (환각 차단 및 `CLAUDE.md` 룰 준수력 극대화)

#### B. 설정 파일 직접 수정 (고급)
사용자 환경의 설정 파일(`.toml` 또는 `.json`)에서 파라미터를 직접 수정할 수도 있습니다.
- 경로 예시 (Windows): `C:\Users\윤종호\AppData\Roaming\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json` (또는 AntiGravity 전용 설정 파일 경로)
- `temperature`: 0.0 ~ 1.0 사이의 값으로 지정.

---
* 문서 생성일: 2026-02-22
* 작성자: PM (Claude 4.6 Sonnet)
