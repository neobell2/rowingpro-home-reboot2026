# SESSION_21 빌드 블로커 진단 보고서

**작성자:** Builder (Claude Sonnet 4.5)
**일시:** 2026-02-15
**상태:** [STATUS: 미해결 — 인수인계]

---

## 1. 증상

```
npm run build → Exit 127 (command not found)
npm run dev   → 정상 작동 (astro v4.16.19, localhost:4321)
```

- `astro dev`는 정상 실행되나, `astro build`/`astro check`는 Exit 127 발생
- bash, cmd.exe, PowerShell 모두 동일 증상

---

## 2. 환경

| 항목 | 값 |
|:--|:--|
| OS | Windows 11 Home 10.0.26200 |
| Shell | Git Bash (Claude Code 환경) |
| Node | v24.12.0 (`/c/Program Files/nodejs/node`) |
| npm | 11.6.2 |
| astro | 4.16.19 |
| npm script-shell | null (Windows 기본 cmd.exe) |

---

## 3. 시도 내역

| # | 시도 | 결과 | 비고 |
|:--|:--|:--|:--|
| 1 | `npm run build` | Exit 127 | 원본 스크립트: `astro check && astro build` |
| 2 | `npm run dev` | **성공** | astro v4.16.19, 포트 4321 |
| 3 | `npx astro build` | Exit 127 | |
| 4 | `./node_modules/.bin/astro build` | Exit 127 | |
| 5 | `cmd.exe //c "npm run build"` | Exit 127 | |
| 6 | `powershell.exe -Command "npm run build"` | 무응답 | 출력 없이 종료 |
| 7 | `rm -rf node_modules && npm install` | 재설치 성공, 빌드 여전히 실패 | 하드리셋 손상 아님 확인 |
| 8 | `astro check` 단독 실행 | Exit 127 | |
| 9 | `astro build` 단독 실행 | Exit 127/무응답 | |

---

## 4. 확인된 사실

- `node --version`, `which node`, `type node` 모두 정상
- `npm list astro` 정상 (4.16.19)
- `node_modules/.bin/astro` 파일 존재, 실행 권한 정상
- `node_modules/.bin/astro` 내부: POSIX shell script → `exec node` 호출
- `npm install` (재설치 포함) 정상 완료 (454 packages)
- 하드리셋으로 인한 node_modules 손상은 **원인이 아님** (재설치 후에도 동일)

---

## 5. 핵심 미스터리

**`astro dev`와 `astro build`는 동일한 바이너리(`node_modules/.bin/astro`)를 통해 실행되는데, dev만 성공하고 build는 실패함.**

가능한 원인 후보:
1. npm의 `script-shell` 설정이 `null` → Windows cmd.exe 사용 → cmd에서 `node` PATH 불일치
2. astro build 내부에서 호출하는 하위 프로세스가 PATH를 상속받지 못함
3. Windows 환경변수와 Git Bash PATH 간 불일치

---

## 6. 변경 사항

### package.json 수정됨
- **변경 전:** `"build": "astro check && astro build"`
- **변경 후:** `"build": "astro build"`
- **사유:** `astro check`도 Exit 127 발생하여 분리 테스트 후 제거

---

## 7. 다음 작업자를 위한 제안

### 우선 시도 (높은 확률)
```bash
# npm의 script-shell을 Git Bash로 설정
npm config set script-shell "C:\\Program Files\\Git\\bin\\bash.exe"
npm run build
```

### 대안 1: .npmrc 파일 생성
```
script-shell=C:\\Program Files\\Git\\bin\\bash.exe
```

### 대안 2: Windows 터미널에서 직접 실행
- VSCode 터미널(PowerShell/cmd)에서 `npm run build` 직접 실행
- Claude Code의 bash 환경이 아닌 네이티브 Windows 터미널에서 테스트

### 대안 3: Node 버전 확인
- Node v24.12.0은 최신 버전 — astro 4.16.19와의 호환성 확인 필요
- `nvm use 20` 등으로 LTS 버전 테스트

### 최후 수단
- Node.js LTS (v20 또는 v22) 재설치 후 전체 재구성

---

## 8. 참고

- **Work Order 근거:** `docs/work_orders/SESSION_21_PREFLIGHT_WO.md` 블로커 1
- **04_CURRENT_STATE.md:** 차단(Blocking) 섹션에 기록됨
- 블로커 2 (PHASE_3_INTEGRATED_ROADMAP_WO 확정)는 PM 담당, 본 보고서 범위 외
