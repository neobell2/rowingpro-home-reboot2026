# 로잉프로 홈페이지 리부트

**상태:** 개발 진입 대기
**목표:** B2B 신뢰도 확보, HTTPS 보안, 월 0원 운영

---

## 프로젝트 개요

대한민국 국가대표 출신이 운영하는 조정 전문 교육 기업 "로잉프로" 공식 홈페이지 리부트

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프론트엔드 | Astro + Tailwind CSS |
| 배포 | Cloudflare Pages (무료) |
| 버전관리 | GitHub |

---

## AI 팀

| 역할 | 담당 |
|------|------|
| 사령탑 | Claude Code |
| 반복 코딩 | ChatGPT Codex |
| 콘텐츠 초안 | WebGPT |
| 이미지 수정 | 나노 바나나 |

**총 비용:** $39/월
상세: [TEAM.md](TEAM.md)

---

## 폴더 구조

```
/
├── README.md         # 프로젝트 개요
├── DASHBOARD.md      # 현재 상태 (세션 시작점)
│
├── project/          # 프로젝트 관리
│   ├── ROADMAP.md    # 전체 계획
│   ├── SESSION.md    # 세션 기록
│   ├── TEAM.md       # AI 팀 구성
│   ├── RULES.md      # 전역 규칙
│   └── CLAUDE.md     # Claude 설정
│
├── specs/            # 개발 스펙
│   └── DEV_SPEC.md   # IA, 브랜드, 디자인
│
├── docs/
│   ├── contents/     # 페이지별 콘텐츠 원고
│   └── archive/      # 구버전 문서
│
├── Design_ref/       # 디자인 참고
├── 참고자료/          # 외부 참고자료
│
├── src/              # (Astro 소스 - 개발 시 생성)
└── public/           # (정적 파일 - 개발 시 생성)
```

---

## 문서 체계

| 문서 | 역할 | 업데이트 |
|------|------|----------|
| DASHBOARD.md | 현재 상태, 할 일, 블로커 | 매 세션 |
| project/TEAM.md | AI 팀 구성, 비용 | 변경 시 |
| project/RULES.md | 전역 규칙 | 거의 고정 |
| specs/DEV_SPEC.md | IA, 템플릿, 브랜드, 디자인 | 거의 고정 |
| project/ROADMAP.md | 전체 계획, 미결 사항 | 마일스톤 완료 시 |
| project/SESSION.md | 세션별 작업 기록 | 매 세션 |

---

## 콘텐츠 원고 (docs/contents/)

| 파일 | 페이지 | 상태 |
|------|--------|------|
| home.md | Home | ✅ 일부 완성 |
| about.md | About | ⬜ 작성 예정 |
| programs.md | Programs | ⬜ 작성 예정 |
| services.md | Service (허브) | ⬜ 작성 예정 |
| track-record.md | Track Record | ⬜ 작성 예정 |
| contact.md | Contact | ⬜ 작성 예정 |
| common.md | 공통 (Footer 등) | ⬜ 작성 예정 |

## 빠른 시작

```
DASHBOARD.md 읽고 시작해
```

---

## 페이지 구조 (13개)

**메인 6개:**
- Home, About, Programs, Service(허브), Track Record, Contact

**Service 하위 5개:**
- 기업·조직, 학교·청소년, 스포츠 이벤트·행사, 클럽·일반, 가족 체험

**시스템 2개:**
- Privacy (개인정보 처리방침), 404 (페이지 없음)

---

**최종 수정:** 2026-02-03
