# Copilot / AI Agent 지침 (요약)

목적: 이 파일은 이 저장소에서 AI 코드/콘텐츠 에이전트가 즉시 생산적으로 작업할 수 있도록 "핵심 문맥"만 간결하게 정리합니다.

1) 프로젝트 개요(한줄)
- 이 저장소는 정적 콘텐츠 기반의 웹/문서 프로젝트입니다. 주요 콘텐츠는 `docs/`와 `contents/`에 있으며 디자인·자산은 `assets/images/`에 보관됩니다.

2) 핵심 구조(파일/디렉터리)
- 콘텐츠(공개 페이지): `contents/*.md` (예: `contents/home.md`, `contents/about.md`).
- 프로젝트 문서·아카이브: `docs/` (특히 `docs/_WEB_GPT_output/`에 프롬프트·생성물 보관).
- 운영·세션 기록: `SESSION.md` — 모든 작업/세션 요약을 여기서 확인하고 갱신해야 함.
- 이미지 자원: `assets/images/` — 마크다운에서 상대 경로로 참조됨.
- 참고 아카이브: `docs/archive/` 및 `docs/archive/v2_backup/` (과거 빌드/설정 노트 포함).
- 저장소 루트의 `README.md`, `DEV_SPEC.md`, `RULES.md`는 프로젝트의 정책·작업흐름을 담고 있으므로 변경 전 반드시 확인.

3) 빌드 / 실행 / 테스트 (발견된 사항)
- 현재 루트에 `package.json` 등 직접적인 빌드 스크립트가 없음. 즉시 실행 가능한 프론트엔드 빌드 파이프라인은 발견되지 않았음.
- 과거 설정/참고는 `docs/archive/v2_backup/SETUP.md`와 `NEXT_SESSION_TASKS.md`에 있음 — 빌드 관련 지침을 찾을 때 먼저 확인.

4) 작업 흐름(커밋 규칙, 세션 관리)
- 모든 변경 전후 `SESSION.md`를 읽고(또는 업데이트) 세션 컨텍스트를 유지하세요.
- 문서·콘텐츠 변경은 `contents/` 또는 `docs/` 하위에만 적용; 아카이브(`docs/archive/`)는 보존용이므로 수정 시 주석에 이유를 남기세요.

5) 패턴·컨벤션(프로젝트 특유의 규칙)
- 프롬프트·생성물 보관: `docs/_WEB_GPT_output/`에 GPT/WEBGPT 산출물이 집중되어 있음 — 여기서 과거 프롬프트/응답 패턴을 재사용.
- 세션·작업 기록 패턴: `SESSION.md`에 '작업 개요 → 변경 사항 → 다음 작업' 형태를 유지하는 관행이 반복됨. 새로운 변경도 같은 포맷으로 기록.
- 문서 업데이트는 작은 논리 단위(파일 단위)로 커밋하고, 커밋 메시지에 `SESSION.md` 업데이트 참조를 포함.

6) 안전·범위(에이전트가 건드려도 되는 것)
- 안전하게 수정 가능한 곳: `contents/`, `docs/`, `assets/images/` (새 이미지 추가 포함).
- 수정 전 관리자 확인 권장: `README.md`, `DEV_SPEC.md`, `RULES.md`, `docs/archive/`의 핵심 정책 파일.

7) 빠른 예시
- 새로운 랜딩 문구 추가: 편집 `contents/home.md` → 관련 이미지 `assets/images/hero.jpg` 추가 → `SESSION.md`에 변경 요약 기입.
- 과거 프롬프트/템플릿 재사용: `docs/_WEB_GPT_output/WEBGPT_Full_Thread_Backup/` 내부 스레드를 복사해 새 프롬프트 생성.

8) 참고 파일(우선 확인 권장)
- `README.md` — 프로젝트 전반 설명
- `SESSION.md` — 세션/작업 흐름
- `docs/_WEB_GPT_output/` — 프롬프트와 생성 로그
- `contents/` — 공개 페이지 원고
- `assets/images/` — 이미지 자산
- `docs/archive/v2_backup/SETUP.md` — 과거 빌드·설정 메모

9) 변경 후 행동
- 문서·콘텐츠 변경을 푸시할 때 `SESSION.md`에 항목을 추가하고, 변경 요약(1-2문장)을 작성하세요. 에이전트가 자동 커밋할 경우 메시지에 변경 파일과 이유를 포함.

피드백 요청: 이 파일이 충분한가요? 특정 파일·작업 흐름(예: 배포 파이프라인, 이미지 리사이즈 규칙)을 더 상세히 문서화하길 원하시면 알려주세요.
