# [Work Order] Phase 3 STEP 1: 브랜드 스토리 및 카피라이팅

**발행자:** PM (Claude Haiku 4.5)
**일시:** 2026-02-16 (Rev.1)
**우선순위:** 🟢 **HIGH — Phase 3 최우선 작업**
**상태:** [STATUS: COMPLETED — Gemini SESSION_23 초안 완료 (2026-02-16)]
**후속:** STEP 1-1 톤 리라이팅 별도 WO로 진행 예정 (본 WO는 초안 생산까지만)

---

## 📝 개정 이력

| 버전 | 일시 | 변경 내용 |
|:--|:--|:--|
| **Rev.1** | 2026-02-16 | 실제 IA 17페이지 구조 반영, 작업 순서/마일스톤 추가, 참고자료 리스트 신설, 페이지별 지시 상세화 |
| **Rev.0** | 2026-02-16 | 초안 발행 |

---

## 1. 개요

Phase 3의 첫 단계로, 로잉프로의 브랜드 스토리를 **HPOC 프레임워크** 기반으로 완성하고, **17개 페이지 전체**의 최종 카피를 생산합니다. 이 작업은 STEP 2 (미디어 자산) 및 STEP 3 (디자인 폴리싱)의 근거가 됩니다.

**핵심 목표:**
- HPOC 4축 (Hardware, People, Operation, Content) 브랜드 스토리 구축
- 톤앤매너 "프리미엄 + 전문성 + 신뢰" 일관성 유지
- 17페이지 전체 카피 완성 (기존 7개 고도화 + 누락 10개 신규 작성)

**근거 문서:**
- `docs/work_orders/PHASE_3_INTEGRATED_ROADMAP_WO.md` (통합 로드맵, APPROVED)
- `01_PROJECT_CONTEXT.md` (브랜드 정체성, 13년 업력)
- `02_ARCHITECTURE.md` (IA 17페이지 구조, 디자인 시스템 LOCKED)

---

## 2. 작업 범위 및 파일 매핑

### 2.1 실제 IA 구조 (총 17페이지)

**메인 6페이지:**
1. Home (`/`)
2. About (`/about`)
3. Programs (`/programs`)
4. Service Hub (`/service`)
5. History (`/history`)
6. Contact (`/contact`)

**Service 하위 — 기업·조직 (6페이지):**
7. Corporate Hub (`/service/corporate`)
8. Training (`/service/corporate/training`)
9. Teambuilding (`/service/corporate/teambuilding`)
10. Leadership (`/service/corporate/leadership`)
11. Event (`/service/corporate/event`)
12. Wellness (`/service/corporate/wellness`)

**Service 하위 — 기타 카테고리 (4페이지):**
13. School & Youth (`/service/school-youth`)
14. Sports Event (`/service/event`)
15. Club & General (`/service/club-general`)
16. Family (`/service/family`)

**시스템 페이지:**
17. Privacy (`/privacy`) — 본 작업 범위 외 (법무 검토 필요)

---

### 2.2 파일 매핑 및 작업 구분

| 페이지 | 콘텐츠 파일 경로 | 현재 상태 | 작업 유형 |
|:--|:--|:--:|:--|
| **Home** | `docs/contents/home.md` | ✅ | **고도화** (HPOC 프레임워크 적용) |
| **About** | `docs/contents/about.md` | ✅ | **고도화** (CEO+창업주 통합 스토리) |
| **Programs** | `docs/contents/programs.md` | ✅ | **고도화** (전체 프로그램 철학) |
| **Service Hub** | `docs/contents/service_hub.md` | ❌ | **신규 작성** (4개 카테고리 소개) |
| **History** | `docs/contents/history.md` | ❌ | **신규 작성** (13년 타임라인) |
| **Contact** | `docs/contents/contact.md` | ✅ | **고도화** (법인정보 포함) |
| **Common** | `docs/contents/common.md` | ✅ | **고도화** (헤더/푸터/CTA) |
| | | | |
| **Corporate Hub** | `docs/contents/service_corporate_hub.md` | ❌ | **신규 작성** |
| **Training** | `docs/contents/service_corporate_training.md` | ❌ | **신규 작성** |
| **Teambuilding** | `docs/contents/service_corporate_teambuilding.md` | ❌ | **신규 작성** |
| **Leadership** | `docs/contents/service_corporate_leadership.md` | ❌ | **신규 작성** |
| **Event** | `docs/contents/service_corporate_event.md` | ❌ | **신규 작성** |
| **Wellness** | `docs/contents/service_corporate_wellness.md` | ❌ | **신규 작성** |
| | | | |
| **School & Youth** | `docs/contents/service_school_youth.md` | ❌ | **신규 작성** |
| **Sports Event** | `docs/contents/service_sports_event.md` | ❌ | **신규 작성** |
| **Club & General** | `docs/contents/service_club_general.md` | ❌ | **신규 작성** |
| **Family** | `docs/contents/service_family.md` | ❌ | **신규 작성** |

**작업 요약:**
- ✅ **기존 고도화**: 7개 파일 (Home, About, Programs, Contact, Common + 기타)
- ❌ **신규 작성**: 10개 파일 (Service Hub, History, Corporate 6개, 기타 3개)

---

## 3. 작업 순서 및 마일스톤

### Phase 1: 핵심 페이지 고도화 (우선순위 HIGH)
**예상 소요:** 1.5~2시간

1. **Home (/)** — 브랜드 첫인상 완성
   - HPOC 4축 간결한 소개
   - 히어로 섹션 카피 (30자 이내)
   - 핵심 CTA 정의

2. **About (/about)** — 브랜드 스토리 핵심
   - CEO + 창업주 통합 프로필
   - 국가대표 출신 + 13년 무사고 강조
   - 비전/미션/핵심가치

3. **Programs (/programs)** — 프로그램 철학
   - "왜 로잉인가?" 설명
   - 4개 서비스 카테고리 개요
   - Service로 유도하는 CTA

**🎯 Milestone 1:** Home + About + Programs 완성 → **디렉터 1차 검수**

---

### Phase 2: 서비스 허브 및 기업교육 (우선순위 HIGH)
**예상 소요:** 1.5~2시간

4. **Service Hub (/service)** — 서비스 진입점
   - 4개 카테고리 카드 소개
   - 각 카테고리 3줄 요약 + CTA

5. **Corporate Hub (/service/corporate)** — 기업교육 허브
   - HRD 적용형 vs 비HRD 구분
   - 하위 5개 서비스 소개

6. **Corporate 5개 상세** — Training, Teambuilding, Leadership, Event, Wellness
   - 각 페이지 3단 구조: 특징 / 대상 / 기대효과
   - 가격 정책: "상담 유도" (비노출)

**🎯 Milestone 2:** Service Hub + Corporate 전체 완성 → **디렉터 2차 검수**

---

### Phase 3: 기타 서비스 및 히스토리 (우선순위 MEDIUM)
**예상 소요:** 1~1.5시간

7. **Sports Event (/service/event)** — 스포츠 이벤트·행사
   - 부스형 패키지 4단계 (SIMPLE / CORE / PRO / MASTER)
   - **PRO급 가격 노출**: 200만원+VAT
   - 나머지 패키지: 상담 유도

8. **기타 3개** — School & Youth, Club & General, Family
   - 각 페이지 대상/특징/문의 유도 구조

9. **History (/history)** — 13년 걸어온 길
   - 2013~2025 타임라인
   - 418건 행사, 219+ 클라이언트
   - 주요 클라이언트 사례 (있는 것만)

**🎯 Milestone 3:** 전체 17페이지 완성 → **디렉터 최종 검수**

---

### Phase 4: 공통 요소 및 최종 정리 (우선순위 LOW)
**예상 소요:** 30분

10. **Common Elements** — 헤더/푸터/CTA 버튼
    - GNB 6개 항목 명칭 확정
    - 푸터 법인정보 (있는 그대로)
    - CTA 버튼 패턴 2~3가지

11. **Contact (/contact)** — 문의 안내
    - 법인정보 반영 (사업자/법인등록번호)
    - 문의 폼 안내 카피
    - 개인정보 처리방침 링크 (추후)

**🎯 Milestone 4:** 전체 파일 Git 커밋 준비 완료

---

## 4. 필수 참고자료

### 4.1 필수 입력 문서 (작업 전 반드시 읽기)

| 문서 | 경로 | 용도 |
|:--|:--|:--|
| **프로젝트 맥락** | `01_PROJECT_CONTEXT.md` | 브랜드 정체성, 핵심 메시지, 13년 업력 |
| **IA 구조** | `02_ARCHITECTURE.md` | 17페이지 구조, 디자인 시스템, 톤앤매너 |
| **히스토리 마스터** | `docs/contents/history_master.md` | 418건 행사 전수 데이터 (2013~2025) |
| **히스토리 체크리스트** | `docs/contents/history_checklist.md` | 히스토리 페이지 콘텐츠 스펙 |
| **서비스 구조** | `docs/contents/services.md` | 서비스 카테고리 구조 및 가격 정책 |

---

### 4.2 선택 참고자료 (톤앤매너 감도 체득)

| 자료 유형 | 경로 | 용도 |
|:--|:--|:--|
| **디자인 시안** | `docs/design/Rowingpro-Draft03-Wave-3D/index.html` | 시각적 감도 체득 (직접 열어볼 것) |
| **시안 스크린캡처** | `docs/design/스크린캡처/로잉프로 시안 스크린캡처/*.png` | 디자인 톤 참고 |
| **히어로 영상** | `docs/design/Hero_bg.webm` | 히어로 섹션 배경 영상 |
| **기존 카피** | `docs/contents/*.md` (7개 파일) | 기존 톤 참고 (업데이트 대상) |

---

### 4.3 외부 참고자료 (프로젝트 외부)

| 자료 유형 | 설명 |
|:--|:--|
| **HPOC 프레임워크** | Hardware, People, Operation, Content 4축 브랜드 스토리 구조 |
| **B2B 카피 벤치마크** | 프리미엄 기업교육 업계 카피 톤 (예: 현대자동차그룹 인재개발원, SK아카데미) |
| **조정(Rowing) 개념** | 팀워크 = 완벽한 하나, 조화-협력, 소통-배려 등 종목 본질 이해 |

---

## 5. HPOC 브랜드 스토리 프레임워크 (필수 적용)

모든 카피는 아래 4가지 축을 기반으로 작성:

| 축 | 핵심 메시지 | 증거 | 적용 예시 |
|:--|:--|:--|:--|
| **Hardware** | 전문 장비와 안전 환경 | 실내 로잉 머신, 통제된 환경 | "실내 전용 머신으로 안전을 최우선합니다" |
| **People** | 국가대표 출신 전문 코치진 | 창업주 ~~김동조 (2008 베이징 4위)~~ → **윤종성 (1994 히로시마 아시안게임)** | "전 교육진이 전문 조정 선수 출신입니다" |
| **Operation** | 13년 무사고 운영 시스템 | 2013~2025, 418건, 219+ 클라이언트 | "2013년 이후 418건 무사고 실적" |
| **Content** | HRD 관점의 체계적 교육 | 기업 팀워크 교육, 과학적 접근 | "조직개발 전문가와 함께 설계한 프로그램" |

---

## 6. 톤앤매너 (Tone & Manner) — 3축 일관성

**프리미엄 (Premium):**
- 고급스러움, 품격, 차별화된 경험
- ✅ 좋은 예: "대한민국 기업교육의 기준을 세웁니다"
- ❌ 나쁜 예: "재미있고 신나는 체험!"

**전문성 (Expertise):**
- 체계적, 과학적, 데이터 기반
- ✅ 좋은 예: "13년간 418건의 무사고 실적이 증명합니다"
- ❌ 나쁜 예: "대충 체험해보세요"

**신뢰 (Trust):**
- 실적 기반, 안전 보증, 약속 이행
- ✅ 좋은 예: "국가대표 출신 코치진이 직접 설계한 프로그램"
- ❌ 나쁜 예: "최고의 프로그램" (검증 불가)

---

## 7. 핵심 메시지 (Key Messages) — 3가지

모든 페이지에 아래 메시지를 자연스럽게 녹여야 함:

1. **"국가대표 출신"** — 창업주 ~~김동조 (2008 베이징 올림픽 4위)~~ → **윤종성 (1994 히로시마 아시안게임)** ⚠️ SESSION_24 실시간 정정
2. **"13년 무사고"** — 2013년부터 현재까지의 완벽한 안전 기록
3. **"팀워크"** — 기업 교육의 핵심 가치, Rowing = Teamwork

---

## 8. 페이지별 상세 작업 지시

### 8.1 Home (/) — 브랜드 첫인상

**목표:** 5초 안에 "누구인가, 무엇을 하는가, 왜 선택해야 하는가" 전달

**필수 섹션:**
1. **히어로 타이틀** (30자 이내)
   - 예: "ROWING = TEAMWORK" (현재 시안)
   - 또는 제안: "국가대표 출신이 만든 기업 팀워크 교육"

2. **서브 타이틀** (50자 이내)
   - HPOC 4축 중 1~2개 강조
   - 예: "전문 조정 선수 출신 코치진 | 13년 무사고 실적"

3. **핵심 가치 제안** (3줄 요약)
   - Hardware: 안전한 실내 환경
   - People: 국가대표 출신 코치진
   - Operation: 13년 무사고 운영

4. **CTA 버튼**
   - 주 CTA: "무료 상담 신청"
   - 보조 CTA: "프로그램 알아보기"

**톤:** 프리미엄 + 전문성, 첫인상 임팩트 중요

---

### 8.2 About (/about) — 브랜드 스토리 핵심

**목표:** "왜 로잉프로인가?"에 대한 명확한 답변

**필수 섹션:**
1. **CEO + 창업주 통합 프로필**
   - ~~김동조 대표 (2008 베이징 올림픽 경량급 남자 더블스컬 4위)~~ → **윤종성 창업주 (1994 히로시마 아시안게임)** ⚠️ SESSION_24 실시간 정정
   - 조정 선수 경력 → 창업 스토리
   - "The Origin (Since 2013)" 강조

2. **비전/미션**
   - 비전: "대한민국 기업교육의 새로운 기준"
   - 미션: "조정의 본질(팀워크)을 기업에 전달"

3. **핵심 가치** (3~5가지)
   - 안전 (13년 무사고)
   - 전문성 (전 교육진 선수 출신)
   - 진정성 (하남시조정협회 주관사)

4. **연혁** (주요 마일스톤만)
   - 2013: 창립
   - 2015: 하남시조정협회 주관사
   - 2020: 기업교육 본격 확대
   - 2025: 418건 무사고 달성

**톤:** 신뢰 + 진정성, 스토리텔링

---

### 8.3 Programs (/programs) — 프로그램 철학

**목표:** "왜 로잉인가?"를 설득력 있게 설명

**필수 섹션:**
1. **로잉의 본질**
   - Rowing = Teamwork (스타 플레이어 없음)
   - 완벽한 하나, 조화-협력, 소통-배려

2. **4개 서비스 카테고리 소개** (각 3줄)
   - 기업·조직: HRD 적용형 + 비HRD 적용형
   - 학교·청소년: 인성 교육, 체육 활동
   - 스포츠 이벤트: 대규모 체험 패키지
   - 클럽·일반: 정기 레슨, 원데이 체험

3. **프로그램 설계 철학**
   - HRD 관점 (교육학적 접근)
   - 안전 최우선 (1-boat-1-coach)

4. **CTA**
   - "서비스 상세 보기" → Service Hub로 연결

**톤:** 전문성 + 교육적, 설득력

---

### 8.4 Service Hub (/service) — 서비스 진입점

**목표:** 4개 카테고리를 명확히 구분하여 사용자 유도

**필수 섹션:**
1. **카테고리 카드 4개** (각각 제목 + 3줄 설명 + CTA)

   **A. 기업·조직** (`/service/corporate`)
   - 대상: B2B 기업교육, 조직개발
   - 특징: HRD 전문가와 협업 설계
   - CTA: "기업교육 프로그램 보기"

   **B. 학교·청소년** (`/service/school-youth`)
   - 대상: 초중고 학교, 청소년 단체
   - 특징: 인성 교육 + 체육 활동 결합
   - CTA: "청소년 프로그램 보기"

   **C. 스포츠 이벤트·행사** (`/service/event`)
   - 대상: 대규모 행사, 축제, 이벤트
   - 특징: 패키지형 부스 운영 (PRO급 200만원+VAT)
   - CTA: "이벤트 패키지 보기"

   **D. 클럽·일반** (`/service/club-general`)
   - 대상: 동호회, 개인 레슨, 원데이 체험
   - 특징: 유연한 일정, 소규모 맞춤형
   - CTA: "클럽 프로그램 보기"

2. **공통 안내**
   - "가격은 상담을 통해 안내드립니다" (Sports Event 제외)

**톤:** 명료함 + 친절, 선택 유도

---

### 8.5 Corporate Hub (/service/corporate) — 기업교육 허브

**목표:** 기업 고객에게 5개 서비스 구분 설명

**필수 섹션:**
1. **기업교육 소개**
   - HRD 적용형 vs 비HRD 구분
   - 조직개발 전문가와 협업

2. **하위 5개 서비스 카드** (각 제목 + 1줄 설명)
   - Training: 온보딩, 직무 협업
   - Teambuilding: 협업 미션, 디브리핑
   - Leadership: 리더-팔로워 실행 훈련
   - Event: 사내 행사, 체육대회
   - Wellness: 임직원 건강, 복지 연계

3. **CTA**
   - 각 카드 → 상세 페이지 이동

**톤:** 전문성 + B2B 신뢰

---

### 8.6 Corporate 상세 5개 — Training, Teambuilding, Leadership, Event, Wellness

**공통 구조 (3단):**

1. **특징 (Features)** — 무엇이 다른가
   - 이 서비스의 차별화 포인트
   - HPOC 4축 중 1~2개 강조

2. **대상 (Target)** — 누구를 위한 것인가
   - 추천 기업/조직 유형
   - 추천 인원/기간

3. **기대효과 (Benefits)** — 참가자가 얻는 것
   - 개인적 변화 (팀워크 역량)
   - 조직적 변화 (협업 문화)

**가격 정책:**
- "상담을 통해 안내" (가격 비노출)

**톤:** B2B 전문성, ROI 명확화

---

### 8.7 Sports Event (/service/event) — 스포츠 이벤트·행사

**목표:** 부스형 패키지 4단계 소개 + PRO급 가격 명시

**필수 섹션:**
1. **부스형 패키지 소개**
   - SIMPLE / CORE / PRO / MASTER 4단계

2. **PRO급 상세** (유일한 가격 노출 페이지)
   - **가격:** 200만원 + VAT
   - **구성:** 머신 10대, 강사 2인, 4시간
   - **지역:** 서울·경기 기준

3. **나머지 패키지**
   - SIMPLE/CORE/MASTER는 "상담 유도"
   - "행사 목적 및 규모에 따라 협의"

4. **CTA**
   - "무료 견적 상담"

**톤:** 명료함 + 가격 투명성

---

### 8.8 기타 3개 — School & Youth, Club & General, Family

**공통 구조:**
1. **대상 설명** (2~3줄)
2. **주요 특징** (3가지)
3. **문의 유도** (상담 CTA)

**톤:** 친근함 + 접근성

---

### 8.9 History (/history) — 13년 걸어온 길

**목표:** 실적 기반 신뢰 구축

**필수 섹션:**
1. **타임라인** (2013~2025)
   - 주요 연도별 마일스톤
   - 예: 2013 창립, 2015 협회 주관사, 2020 기업교육 확대

2. **실적 통계** (인포그래픽 형태로 제안)
   - **418건** 행사
   - **219+** 클라이언트
   - **13년** 무사고

3. **주요 클라이언트 사례** (있는 것만)
   - `history_master.md` 데이터 기반
   - 과장 없이 사실만 기록

**데이터 출처:**
- `docs/contents/history_master.md` (418건 전수 데이터)
- `docs/contents/history_checklist.md` (콘텐츠 스펙)

**톤:** 신뢰 + 데이터 기반

---

### 8.10 Contact (/contact) — 문의 안내

**목표:** 문의 장벽 낮추기 + 법인정보 투명 공개

**필수 섹션:**
1. **문의 유도 카피**
   - "무료 상담으로 시작하세요"
   - "궁금한 점을 남겨주시면 24시간 내 답변드립니다"

2. **법인정보** (Footer와 동일)
   - 상호: 주식회사 로잉프로
   - 대표: 김정겸
   - 주소: 경기도 하남시 덕풍동로 111-21, 케이에듀동 10층 1021호
   - 대표번호: 1566-1931
   - 사업자등록번호: 211-88-99912

3. **개인정보 처리방침**
   - 링크: `/privacy` (추후 법무 작성)

**톤:** 친절 + 투명성

---

### 8.11 Common Elements — 헤더/푸터/CTA

**A. 헤더 (GNB)**
- Home | About | Programs | Service | History | Contact

**B. 푸터**
- 법인정보 (Contact와 동일)
- Copyright: © 2025 Rowing Pro. All rights reserved.
- 개인정보 처리방침 링크

**C. CTA 버튼 패턴**
- 주 CTA: "무료 상담 신청" (Contact 폼으로 이동)
- 보조 CTA: "프로그램 알아보기" (Programs로 이동)
- 서비스 CTA: "서비스 상세 보기" (Service Hub로 이동)

---

## 9. 제약 조건 (절대 금지)

### 필수 준수
- ✅ **사실 기반 작성**: 있는 실적만 사용
- ✅ **과장 금지**: "대한민국 1위", "최고" 등 검증 불가능한 표현 배제
- ✅ **톤앤매너 일관성**: 프리미엄 + 전문성 + 신뢰
- ✅ **SSOT 기반**: `docs/contents/` 업데이트 방식

### 절대 금지
- ❌ **없는 사실 창작** (허위 클라이언트, 허위 실적)
- ❌ **경쟁사 비방** 또는 비교 마케팅
- ❌ **스포츠 이벤트 톤** ("신나는", "재미있는", "즐거운")
- ❌ **감정적 과장** ("인생을 바꿀", "놀라운", "혁명적인")
- ❌ **검증 불가 표현** ("최고", "1위", "유일")

---

## 10. 검증 기준 (DoD - Definition of Done)

### 콘텐츠 품질
- [ ] HPOC 4축이 Home, About, Programs에 명확히 반영됨
- [ ] 톤앤매너 3축 (프리미엄, 전문성, 신뢰) 일관성 유지
- [ ] 핵심 메시지 3가지 ("국가대표", "13년 무사고", "팀워크") 포함
- [ ] 과장 없는 사실 기반 작성 (history_master.md 데이터만 사용)

### 파일 구조
- [ ] `docs/contents/` 내 17개 파일 전체 작성 완료
- [ ] Markdown 형식 준수 (헤더 구조 `#`, `##`, `###`)
- [ ] 상대경로 링크 사용 (절대경로 금지)
- [ ] 파일명 규칙 준수 (예: `service_corporate_training.md`)

### 마일스톤 체크
- [ ] **Milestone 1**: Home + About + Programs → 디렉터 1차 검수 통과
- [ ] **Milestone 2**: Service Hub + Corporate 전체 → 디렉터 2차 검수 통과
- [ ] **Milestone 3**: 전체 17페이지 완성 → 디렉터 최종 검수 통과
- [ ] **Milestone 4**: Git 커밋 준비 완료

---

## 11. 완료 보고

작업 완료 후 다음 보고서 작성:

**파일명:** `docs/reports/SESSION_23_CONTENT_GEMINI.md` (세션 번호에 맞게 조정)

**포함 내용:**
1. **HPOC 프레임워크 적용 상세**
   - 각 축별 주요 카피 예시

2. **페이지별 카피 작성 요약**
   - 17개 페이지 각각 핵심 메시지 요약

3. **변경 파일 목록**
   - 17개 Markdown 파일 경로
   - Git diff 요약

4. **디렉터 피드백 반영**
   - 1차/2차/최종 검수 피드백 처리 내역

5. **다음 단계 준비**
   - 미디어 자산 컨셉 제안 (STEP 2 연계)
   - 디자인 폴리싱 고려사항 (STEP 3 연계)

---

## 12. 타임라인

- **발행:** 2026-02-16 (Rev.1)
- **예상 총 소요:** 3.5~4.5시간 (Gemini 3.0 Pro 기준)
  - Phase 1: 1.5~2시간
  - Phase 2: 1.5~2시간
  - Phase 3: 1~1.5시간
  - Phase 4: 30분
- **중간 검수:** Milestone 1, 2에서 디렉터 검수
- **완료 기한:** SESSION_23 (금일 내)

---

## 13. 중간 체크포인트 (Checkpoint)

### Checkpoint 1 (Phase 1 완료 시)
**제출:** Home, About, Programs 3개 파일
**검수 항목:**
- HPOC 4축 명확성
- 톤앤매너 방향성
- 핵심 메시지 전달력

### Checkpoint 2 (Phase 2 완료 시)
**제출:** Service Hub + Corporate 전체 7개 파일
**검수 항목:**
- 서비스 구분 명확성
- B2B 카피 전문성
- 가격 정책 준수

### Checkpoint 3 (Phase 3 완료 시)
**제출:** 전체 17개 파일
**검수 항목:**
- 전체 일관성
- 누락 페이지 없는지 확인
- History 데이터 정확성

---

**PM 서명:** Claude Haiku 4.5
**승인:** [Director Approval Required]
