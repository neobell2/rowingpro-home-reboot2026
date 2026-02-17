# SESSION_26_DIRECTOR_Cline_첫기동_거버넌스_원인분석

> **일시:** 2026-02-17 | **작성:** Director | **맥락:** Roo 폐기 진행 + Cline 도입(첫 기동)

---

## 1) 요약

- Cline 첫 기동에서 프로젝트 거버넌스(세션 시작 프로토콜)가 자동으로 강제되지 않는 원인을 확인했다.
- 원인은 `config.toml`의 자동 주입 우선 문서(`priority_files`)에 `PROTOCOLS.md`가 누락된 구성에 있다.

---

## 2) 관측된 사실

### A. 세션 시작 프로토콜 우선순위 불일치

- `CLAUDE.md`는 세션 시작 시 `PROTOCOLS.md`를 먼저 읽도록 명시한다.
- 그러나 현재 `config.toml` 설정은 다음 파일만 우선 주입 대상으로 둔다.

```toml
[context]
priority_files = ["CLAUDE.md", "04_CURRENT_STATE.md", "05_NEXT_TASK.md", ".gpt-rules"]
auto_read_docs = true
```

→ `PROTOCOLS.md`가 자동 주입 우선순위에서 빠져 있어, 첫 기동에서 절차 준수가 약해질 수 있다.

### B. MCP Memory 설정 존재(참고)

- VS Code(Cline) / AntiGravity 환경에 `@modelcontextprotocol/server-memory` 기반의 `memory` 서버 설정이 존재한다.
- 메모리 파일 경로는 `C:/Users/윤종호/.mcp-memory/memory.jsonl`로 설정되어 있다.

---

## 3) 조치(권고)

- 문서/거버넌스 담당(문서관리자/PM)이 `config.toml`의 `priority_files`를 점검하여 `PROTOCOLS.md` 포함 여부 및 순서를 결정하고 정합화한다.
- (선택) `.gpt-rules`의 필요성은 Cline 전환 이후 재검토한다.

---

*작성: Director | 기록 목적: Cline 전환 초기 기동 이슈(거버넌스 자동 주입 누락) 원인 기록*