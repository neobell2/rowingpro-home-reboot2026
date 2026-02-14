# [Work Order] SESSION 19.7: Preflight — 선행 조건 정리

**작성자:** PM (Claude Haiku 4.5)
**일시:** 2026-02-15
**상태:** [STATUS: CONFIRMED]

---

## 1. 개요

Session 19 본격 작업(콘텐츠/디자인) 착수 전, **Session 19.6 전수조사에서 발견된 미결 이슈 5건**을 우선 해결합니다.

**근거:** `docs/reports/SESSION_19.6_FINAL_AUDIT.md`

---

## 2. 팀 배정

| 담당 | 도구 | TASK | 예상 소요 |
|:--|:--|:--|:--|
| **Builder** | GPT Codex 5.3 | TASK 1: 코드 정리 | 1~2시간 |
| **Media Producer** | Gemini 3.0 Flash | TASK 2: 이미지 확보 | 2~3시간 |
| **Doc Manager** | Claude Haiku 4.5 | TASK 3: 문서 정리 | 30분 |

**작업 순서:** TASK 1 → TASK 2 → TASK 3 (순차 실행 권장, 병렬 가능)

---

## TASK 1: Builder — 코드 및 빌드 정리

**담당:** Builder (GPT Codex 5.3)
**우선도:** 🔴 최우선 (차단 이슈)
**예상 소요:** 1~2시간

### 배경
Session 19.6 전수조사에서 발견된 기술적 이슈:
- IA 페이지 수 불일치 (명세 17 vs 실제 19)
- 빌드 상태 미확인 (`npm run build` 응답 없음)
- OG 이미지 경로 미생성

### 작업 내용

#### 1-1. IA 페이지 수 정정

**현황:**
```
IA 명세 (02_ARCHITECTURE.md):  17페이지
실제 파일 (src/pages/):        19개 .astro 파일
```

**불일치 파일:**
1. `src/pages/colors.astro` — IA에 없음
2. `src/pages/service/event.astro` vs `src/pages/service/corporate/event.astro` — 중복 의심

**작업 지시:**

**A. colors.astro 처리**
1. 파일 내용 확인 (`src/pages/colors.astro`)
2. 용도 판단:
   - **내부 참고용** (디자인 시스템 색상 미리보기) → `src/components/dev/ColorReference.astro`로 이동 또는 삭제
   - **배포 페이지** (외부 공개) → `02_ARCHITECTURE.md`에 추가 명시 필요 (PM에게 보고)
3. 결정 후 실행

**B. service/event.astro 중복 해소**
1. 두 파일 내용 비교:
   - `src/pages/service/event.astro`
   - `src/pages/service/corporate/event.astro`
2. 역할 구분:
   - 일반 이벤트 vs 기업 이벤트로 구분되는가?
   - 동일 콘텐츠인가?
3. 결정:
   - **구분 필요** → 두 파일 유지, `02_ARCHITECTURE.md` IA에 명시
   - **중복** → 하나 삭제 (IA 명세 확인 후)

**참고:** `02_ARCHITECTURE.md` IA 명세
```
Service (상세):
├── /service/club-general      (일반 동호회)
├── /service/family             (가족 단위)
├── /service/school-youth       (학교/청소년)
├── /service/event              (스포츠 이벤트) ← 여기 1개만 명시됨
└── /service/corporate/
    ├── /service/corporate/training
    ├── /service/corporate/teambuilding
    ├── /service/corporate/leadership
    ├── /service/corporate/event       ← 이게 중복인가?
    ├── /service/corporate/wellness
    └── /service/corporate/workshop
```

**판단 기준:**
- IA에 `/service/event` 1개만 명시
- `corporate/event`가 별도로 필요하면 IA 업데이트 제안

---

#### 1-2. 빌드 상태 확인 및 검증

**작업 지시:**

1. **빌드 실행**
   ```bash
   npm run build
   ```

2. **결과 확인**
   - 성공 여부
   - 경고(Warning) 개수
   - 오류(Error) 개수
   - `dist/` 폴더 생성 여부

3. **오류 해결**
   - 오류 발생 시 → 로그 분석 후 수정
   - 경고 발생 시 → 가능한 한 해결 (비차단 이슈는 보류 가능)

4. **최종 검증**
   - `npm run build` 성공 (0 errors)
   - `dist/` 폴더 존재 및 정상 파일 생성

---

#### 1-3. public/og/ 폴더 구조 생성

**배경:**
- `02_ARCHITECTURE.md`에 "OG 이미지는 `public/og/og-default.png`"로 명시
- 현재 `public/og/` 폴더 자체가 없음
- Media Producer가 이미지 배치 시 경로 필요

**작업 지시:**

1. **폴더 생성**
   ```bash
   mkdir public/og
   ```

2. **README.md 작성**
   `public/og/README.md` 파일 생성:
   ```markdown
   # OG 이미지 디렉토리

   - `og-default.png` (1200x630px) — 전체 페이지 기본 OG 이미지
   - 페이지별 OG 이미지 추가 가능

   ## 규격
   - 크기: 1200x630px (16:9 비율)
   - 포맷: PNG 또는 JPG
   - 내용: 실사 사진 + 로고 오버레이 (D-009 참조)
   ```

3. **Git 추적**
   - `.gitkeep` 파일 추가 (빈 폴더 Git 추적용)
   ```bash
   touch public/og/.gitkeep
   ```

---

### 완료 기준 (DoD)

Builder 작업 완료 조건:
- [ ] IA 17페이지와 실제 파일 수 일치 (또는 불일치 사유 보고)
- [ ] `npm run build` 성공 (0 errors)
- [ ] `public/og/` 폴더 존재 (README.md 포함)
- [ ] 빌드 경고 최소화 (가능한 범위)

### 보고 양식

작업 완료 시 `docs/reports/SESSION_19.7_BUILDER_REPORT.md` 작성:
```markdown
# SESSION 19.7 — Builder 작업 완료 보고

## 1. IA 페이지 처리
- colors.astro: [삭제/이동/유지] — 사유: ...
- service/event 중복: [해소 완료/구분 유지] — 사유: ...

## 2. 빌드 결과
- npm run build: [성공/실패]
- Errors: 0
- Warnings: X개 (목록)

## 3. public/og/ 생성
- 폴더 생성: 완료
- README.md: 작성 완료

## 이슈
- (있으면 기재)
```

---

## TASK 2: Media Producer — 이미지 자산 확보

**담당:** Media Producer (Gemini 3.0 Flash)
**우선도:** 🔴 최우선
**예상 소요:** 2~3시간

### 배경
About 페이지 프로필, OG 이미지, Hero 배경 등 **필수 이미지 4장**이 없어 Session 19 본 작업 착수 불가.

### 탐색 경로
**구글 드라이브 마운트:** `J:\공유 드라이브`

**폴더 구조:**
```
J:\공유 드라이브/
├── 2013 사진 영상/
├── 2014 사진 영상/
├── ...
├── 2024 사진 영상/
├── 2025 사진 영상/
├── _홍보.영업 자료실/
└── ___로잉프로홈페이지Reboot.202601/
```

---

### 작업 내용

#### 2-1. 창업주(윤종성) 프로필 사진

**요구사항:**
- **용도:** About 페이지 창업주 섹션
- **내용:** 윤종성 (2013.08.29 설립, 올림픽 국가대표 출신)
- **분위기:** 헤리티지, 전문성, 2013년 창업 시점 강조

**탐색 경로:**
```
J:\공유 드라이브\2013 사진 영상\2013.08.03 부산광역시장배\
  - 윤종성01.JPG
  - 윤종성02.JPG
  - ...
  - 윤종성08.JPG (총 8장)
```

**작업 지시:**
1. 8장 중 **프로필용 최적 1장 선별**
   - 기준: 인물 클로즈업, 얼굴 선명, 전문성, 조정복/유니폼 착용
2. 원본 복사 → 프로젝트로 가져오기
3. **규격 조정:**
   - 크기: 400x400px (정사각형)
   - 크롭: 얼굴 중심
   - 포맷: JPG (최적화)
4. **저장:**
   - 경로: `public/assets/profiles/yoon-jongsung.jpg`
   - 파일 크기: 100KB 이하

---

#### 2-2. CEO(김정겸) 프로필 사진

**요구사항:**
- **용도:** About 페이지 CEO 섹션
- **내용:** 김정겸 (2023.04 취임, 국가대표 선수 경력)
- **분위기:** 현대적, 전문성

**탐색 경로 (우선순위):**
1. `J:\공유 드라이브\2023 사진 영상\`
2. `J:\공유 드라이브\___로잉프로홈페이지Reboot.202601\KakaoTalk_20260123_190351278*.jpg`
3. `J:\공유 드라이브\2024 사진 영상\`
4. `J:\공유 드라이브\2025 사진 영상\`

**작업 지시:**
1. **탐색 전략:**
   - 키워드: "김정겸", "정겸", "대표", "CEO"
   - 인물 사진 선별 (단체 사진 제외)
2. **선별 기준:**
   - 얼굴 선명도
   - 전문성 (정장 또는 조정복)
   - 최근 사진 우선 (2023년 이후)
3. **규격 조정:**
   - 크기: 400x400px
   - 크롭: 얼굴 중심
   - 포맷: JPG
4. **저장:**
   - 경로: `public/assets/profiles/kim-jungkyum.jpg`
   - 파일 크기: 100KB 이하

**못 찾을 경우:**
- PM에게 보고 → Midjourney 대체 생성 검토

---

#### 2-3. OG 이미지 (실사 + 로고 오버레이)

**요구사항:**
- **용도:** 전체 페이지 OG 메타태그 (SNS 공유 썸네일)
- **내용:** 조정 보트 실사 + 로고 오버레이
- **분위기:** 역동적, 팀워크, 13년 헤리티지

**참고:** `03_DECISIONS.md` D-009
```
OG 이미지 — 실사 사진 + 로고 오버레이 (1200x630, 16:9)
```

**탐색 경로:**
```
J:\공유 드라이브\2024 사진 영상\
J:\공유 드라이브\2025 사진 영상\
```

**작업 지시:**

1. **실사 사진 선별**
   - 조건:
     - 조정 보트가 포함된 장면
     - 역동적 (경기 중, 훈련 중)
     - 고화질 (1920px 이상)
     - 가로형 (16:9 비율)
   - 추천: 여러 명이 함께 노 젓는 장면 (팀워크 강조)

2. **로고 오버레이 작업**
   - 로고 파일: `public/logo.svg` 또는 `public/logo.png`
   - 위치: 우측 하단 또는 중앙 하단
   - 크기: 로고 width 300~400px
   - 배경: 반투명 어두운 그라데이션 (가독성 확보)

3. **규격 조정:**
   - 크기: 1200x630px (정확히)
   - 포맷: PNG (투명도 보존)
   - 파일 크기: 300KB 이하

4. **저장:**
   - 경로: `public/assets/og/og-default.png`

**도구 추천:**
- Photopea (웹 기반 포토샵)
- Canva (템플릿 활용)
- 또는 AI 이미지 편집 도구

---

#### 2-4. Hero 배경 Fallback 이미지

**요구사항:**
- **용도:** Home 히어로 영상(`hero-bg.webm`) 로드 실패 시 대체 이미지
- **내용:** 영상의 대표 프레임

**작업 지시:**

1. **영상 파일 확인**
   - 경로: `public/videos/hero-bg.webm`
   - 또는: `docs/design/Hero_bg.webm`, `docs/design/Hero_bg.mp4`

2. **대표 프레임 추출**
   - 영상 재생 후 가장 임팩트 있는 장면 캡처
   - 또는: 영상 중간 지점(50%) 프레임
   - 도구: VLC Player, FFmpeg, 또는 온라인 도구

3. **규격 조정:**
   - 크기: 1920x1080px (Full HD)
   - 포맷: JPG
   - 파일 크기: 500KB 이하

4. **저장:**
   - 경로: `public/assets/hero/hero-fallback.jpg`

---

### 완료 기준 (DoD)

Media Producer 작업 완료 조건:
- [ ] 창업주(윤종성) 프로필: `public/assets/profiles/yoon-jongsung.jpg` (400x400px)
- [ ] CEO(김정겸) 프로필: `public/assets/profiles/kim-jungkyum.jpg` (400x400px)
- [ ] OG 이미지: `public/assets/og/og-default.png` (1200x630px)
- [ ] Hero 배경: `public/assets/hero/hero-fallback.jpg` (1920x1080px)
- [ ] 모든 이미지 최적화 완료 (파일 크기 준수)

### 보고 양식

작업 완료 시 `docs/reports/SESSION_19.7_MEDIA_ASSET_LIST.md` 작성:
```markdown
# SESSION 19.7 — Media Producer 이미지 자산 목록

## 확보 완료

| 항목 | 경로 | 규격 | 원본 출처 |
|:--|:--|:--|:--|
| 창업주 프로필 | public/assets/profiles/yoon-jongsung.jpg | 400x400px, 95KB | J:\공유 드라이브\2013 사진 영상\...\윤종성03.JPG |
| CEO 프로필 | public/assets/profiles/kim-jungkyum.jpg | 400x400px, 87KB | J:\공유 드라이브\2023 사진 영상\... |
| OG 이미지 | public/assets/og/og-default.png | 1200x630px, 245KB | J:\공유 드라이브\2024 사진 영상\... + 로고 오버레이 |
| Hero 배경 | public/assets/hero/hero-fallback.jpg | 1920x1080px, 420KB | Hero_bg.webm 프레임 추출 |

## 작업 이슈
- (있으면 기재, 예: CEO 사진 미발견)
```

---

## TASK 3: Documentation Manager — 콘텐츠 폴더 정리

**담당:** Documentation Manager (Claude Haiku 4.5)
**우선도:** 🟡 중간 (비차단, 품질 향상)
**예상 소요:** 30분

### 배경
`docs/contents/` 폴더에 마크다운 SSOT와 레거시 TXT/PDF 파일이 혼재되어 있음.

**현황:**
```
docs/contents/
├── about.md ✅
├── common.md ✅
├── contact.md ✅
├── history_checklist.md ✅
├── history_master.md ✅
├── home.md ✅
├── programs.md ✅
├── services.md ✅
├── track-record.md (Deprecated)
└── [정리 필요]
    ├── history_2024_2025.txt
    ├── history_all_merged.txt
    ├── history_draft_2024_2025.md
    ├── history_folder_list.txt
    ├── history_full_list.txt
    └── 지오캐치_이벤트형....pdf
```

---

### 작업 내용

#### 3-1. TXT 파일 아카이브

**대상 파일:**
- `history_2024_2025.txt`
- `history_all_merged.txt`
- `history_folder_list.txt`
- `history_full_list.txt`

**작업 지시:**
1. 아카이브 폴더 생성 (없으면)
   ```bash
   mkdir -p docs/_archive/contents_legacy
   ```

2. TXT 파일 이동
   ```bash
   mv docs/contents/history_*.txt docs/_archive/contents_legacy/
   ```

3. Git 커밋 (나중에 Builder와 함께 일괄 커밋)

---

#### 3-2. Draft 파일 확인

**대상:** `history_draft_2024_2025.md`

**작업 지시:**
1. 파일 내용 읽기
2. 판단:
   - **유효한 콘텐츠** → `history_master.md`와 비교 후 병합 또는 별도 유지
   - **중복/불필요** → 아카이브 이동
3. 결정 후 실행

---

#### 3-3. PDF 파일 정책

**대상:** `지오캐치_이벤트형....pdf`

**작업 지시:**
1. 파일 용도 확인 (파일명으로 추정)
2. 이동 경로 결정:
   - **디자인 참고용** → `docs/design/`
   - **홍보 자료** → `docs/_archive/promotional/`
   - **레거시** → `docs/_archive/contents_legacy/`
3. 이동 실행

---

### 완료 기준 (DoD)

Documentation Manager 작업 완료 조건:
- [ ] `docs/contents/`에 `.md` SSOT만 유지 (TXT 파일 0개)
- [ ] 레거시 파일 아카이브 완료
- [ ] Draft 파일 처리 완료 (병합 또는 아카이브)
- [ ] PDF 파일 적절한 위치로 이동

### 보고 양식

작업 완료 시 PM에게 구두 보고 (또는 간단 메모):
```
SESSION 19.7 Doc Manager 완료
- TXT 4개 → _archive/contents_legacy/
- history_draft: [병합/아카이브]
- PDF: [docs/design/ 이동]
```

---

## 3. 전체 완료 기준 (Preflight DoD)

**SESSION 19.8 착수 조건:**
- [ ] IA 17페이지 일치 (Builder)
- [ ] `npm run build` 성공 (Builder)
- [ ] `public/og/` 폴더 존재 (Builder)
- [ ] 이미지 4장 확보 (Media Producer)

**권장 (품질 향상):**
- [ ] 빌드 경고 0건 (Builder)
- [ ] 콘텐츠 폴더 정리 완료 (Doc Manager)

---

## 4. PM 진행 계획

### 4-1. 팀 투입 순서

**병렬 가능 (동시 투입):**
- Builder (TASK 1)
- Media Producer (TASK 2)

**순차 (TASK 1, 2 완료 후):**
- Documentation Manager (TASK 3)

### 4-2. 진척 모니터링

각 담당자 작업 중:
- Builder → 1시간 경과 시 중간 확인
- Media Producer → 이미지 선별 단계에서 중간 보고
- Doc Manager → 판단 필요 시 PM 문의

### 4-3. 완료 보고

전체 완료 시 PM이 `docs/reports/SESSION_19.7_PREFLIGHT_SUMMARY.md` 작성:
```markdown
# SESSION 19.7 — Preflight 완료 보고

## 완료 사항
- [x] Builder: IA 17페이지 일치, 빌드 성공
- [x] Media Producer: 이미지 4장 확보
- [x] Doc Manager: 콘텐츠 폴더 정리

## 이슈
- (있으면 기재)

## SESSION 19.8 착수 가능
완료 기준 충족, 콘텐츠 작업 즉시 시작 가능
```

---

## 5. 금지 사항

**전체 공통:**
- ❌ 디자인 시스템 변경 (LOCKED)
- ❌ 정본 문서 임의 수정 (`CLAUDE.md`, `01~05`)
- ❌ 신규 폴더 생성 (지정된 경로 외)

**Builder:**
- ❌ IA 확장 (17페이지 유지, 불일치는 보고)

**Media Producer:**
- ❌ 이미지 임의 생성 (실사 우선, 못 찾으면 보고)

---

**발행자:** PM (Claude Haiku 4.5)
**디렉터 승인:** 2026-02-15
**즉시 실행 가능**
