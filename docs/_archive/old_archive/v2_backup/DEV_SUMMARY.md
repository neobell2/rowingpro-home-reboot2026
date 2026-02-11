# 개발 진입 준비 완료 보고서

**일자:** 2026-02-01
**담당:** Claude Sonnet 4.5 (Cursor)
**상태:** ChatGPT 산출물 수집 완료

---

## 작업 개요

ChatGPT가 생성한 설계 단계 산출물을 수집하여
개발 단계 진입에 필요한 문서 2종을 생성함.

---

## 수집한 원본 파일 (12개)

| 번호 | 파일명 | 내용 |
|------|--------|------|
| 01 | 01_작업준비_프롬프트준비.md | Phase 0 검수, 전환 구조, 정체성 재정의 |
| 02 | 02_BI전_정체성분석_7개문서생성.md | 3C/SWOT/STP 분석, 7개 기준 문서 (RP_01~07) |
| 03 | 03_BI_Lockin_Brand_Positioning_확정_260201.md | Core Belief, Brand Positioning, 가족 고객 전략 |
| 04 | 04_IA구조_상품패키지설계_260201.md | IA 스켈레톤, 페이지 역할, 패키지 전략 |
| 05 | 05_이벤트패키지_네이밍_가격안_260201.md | SIMPLE/CORE/PRO/MASTER 확정, 가격 시뮬레이션 |
| 06 | 06_프롬프트교정_CTA구조_260201.md | ChatGPT 출력 스타일 문제, CTA 단일 채널 확정 |
| 07 | 07_Contact설계_문의폼스펙_260201.md | 문의폼 필드, source_page 설계 |
| 08 | 08_Service메뉴구조_HRD학습_260201.md | Service 메뉴 구조, HRD 시장 분석 |
| 09 | 09_스포츠본질담론_정체성재정의_260201.md | 조정 종목 본질, '왜 조정인가' 실행 기준 |
| 10 | 10_260201.md | (중복 파일) |
| 11 | 10_랜딩구조_왜조정인가_PDF정책_260201.md | 랜딩페이지 구조, PDF 인쇄 기능 정책 |
| 12 | 11_IA템플릿확정_이미지3슬롯_설계종료_260201.md | 템플릿 확정(옵션 A), 이미지 3슬롯 규칙, 설계 종료 |

**위치:** `docs\_WEB_GPT_output\WEBGPT_Full_Thread_Backup\`

---

## 생성한 개발 문서 (2종)

### 1. DEV_HANDOFF.md
**목적:** 개발 진입 필수 정보 통합

**포함 내용:**
- IA 구조 (5카드)
- 랜딩페이지 공통 템플릿 (옵션 A, 10개 섹션)
- 이미지 3슬롯 규칙 (16:9, hero/start/summary)
- PDF(화면 인쇄) 기능 (도입 보류, 설계 훅 예약)
- CTA 및 문의폼 스펙
- 이벤트 패키지 네이밍 (SIMPLE/CORE/PRO/MASTER)
- 브랜드 메시지 핵심
- 기술 스택
- 구현 우선순위
- 미결 사항

### 2. DEV_CONTENT_SPEC.md
**목적:** 콘텐츠 작성 참고

**포함 내용:**
- 브랜드 포지셔닝 (Core Belief, Positioning Statement)
- 핵심 차별점 (선수 출신만 채용, 13년 무사고, 1보트 1코치)
- 톤앤매너 (제거/지향 요소, 표현 기준)
- Contact 폼 상세 스펙 (필드, 동작, 유효성)
- 조정(Rowing) 종목 정의
- '왜 조정인가' 실행 기준
- 페르소나 / 노출 순서
- 이미지 장면 기준 (3슬롯별 금지/허용)
- source_page 코드
- 법적 고지
- HRD 시장 기능 (내부 이해용)
- 콘텐츠 작성 체크리스트

---

## 추출한 핵심 정보

### IA 구조 (확정)

**GNB 메뉴 (6개):**
```
Home | About | Programs | Service | Track Record | Contact
```

**Service 하위 (5개) - 공통 템플릿:**
```
기업·조직 | 학교·청소년 | 스포츠 이벤트·행사 | 클럽·일반 | 가족 체험
```

**전체 페이지: 11개**
- 메인: 6개 (Home, About, Programs, Service 허브, Track Record, Contact)
- Service 하위: 5개 (공통 랜딩 템플릿 사용)

### Service 하위 공통 템플릿 (옵션 A)

**적용 페이지:** Service 하위 5개만

```
히어로 (카드명·한줄 정의)
  ↓
개회 장면 (이미지 1 - hero)
  ↓
요약 개요
  ↓
프로그램 개요
  ↓
구조/운영 요약
  ↓
강도·난이도
  ↓
현장 장면 (이미지 2, 3 - start/summary)
  ↓
FAQ
  ↓
화면 인쇄(PDF) 버튼 (보류)
  ↓
CTA: 문의하기
```

**Home/About/Programs/Track Record/Contact는 개별 디자인**

### 이미지 규칙
- **비율:** 16:9 가로 (고정)
- **슬롯:** hero / start / summary
- **모바일:** 자동 슬라이드 (3.5s, 터치/이탈 정지)
- **데스크톱:** 자동 전환 금지

### 브랜드 메시지
- **Core Belief:** IN THE SAME BOAT
- **Positioning:** 혼자서는 완성될 수 없는 과정을 끝까지 이어가게 만드는 조정 기반 경험 설계 브랜드
- **차별점 1순위:** 선수 출신만 채용
- **차별점 2순위:** 13년 무사고
- **차별점 3순위:** 1보트 1코치 탑승

### 패키지
- **네이밍:** SIMPLE / CORE / PRO / MASTER
- **가격:** 미정 (CEO 결정 대기)
- **성격:** 기준점(anchor), 계약 조건 아님

### CTA/폼
- **채널:** 문의하기 단일
- **필수 필드:** 성함, 회사, 이메일, 연락처
- **선택 필드:** 부서, 직함/직급, 홈페이지
- **숨김 필드:** source_page, referrer, timestamp

---

## 개발 가능 범위

### 즉시 구현 가능
- [x] Astro 프로젝트 생성
- [x] 기본 레이아웃 (헤더/푸터/네비게이션)
- [x] 드롭다운 메뉴 (Service 호버)
- [x] Home 페이지 구조 (placeholder)
- [x] About 페이지 구조 (placeholder)
- [x] Programs 페이지 구조 (placeholder)
- [x] Track Record 페이지 구조 (placeholder)
- [x] Contact 페이지 + 문의폼 UI
- [x] Service 허브 페이지 (placeholder)
- [x] Service 공통 템플릿 (옵션 A, 10개 섹션)
- [x] 이미지 3슬롯 컴포넌트 (16:9, 모바일 슬라이더)
- [x] Service 하위 5개 페이지 (placeholder)

### 보류 (결정 대기)
- [ ] PDF 인쇄 버튼 (코멘트 처리 후 배포)
- [ ] 패키지 가격 표시 (코멘트 처리)
- [ ] Track Record 네이밍 (실적 / 운영 이력)
- [ ] 네이버 블로그 RSS 연동

### 미완료 (개발 중 작성)
- [ ] Home 콘텐츠
- [ ] About 콘텐츠
- [ ] Programs 콘텐츠 (4개 프로그램 유형)
- [ ] Track Record 콘텐츠 (이력, 사례)
- [ ] Service 하위 5개 페이지 콘텐츠 (15개 섹션 × 5)
- [ ] 이미지 실물 (15장: Service 하위만)
- [ ] FAQ 내용
- [ ] 메타 태그/OG 태그

---

## 다음 단계

### Codex (Roo) 작업
1. Astro 프로젝트 생성 + Tailwind CSS 설정
2. 기본 레이아웃 (헤더/푸터/네비게이션)
3. 드롭다운 메뉴 (Service 호버)
4. 메인 6개 페이지 구조 (Home, About, Programs, Service 허브, Track Record, Contact)
5. Contact 문의폼 UI
6. Service 공통 템플릿 구현 (옵션 A)
7. 이미지 3슬롯 컴포넌트 (모바일 슬라이더)
8. Service 하위 5개 페이지 생성
9. GitHub 연결
10. Cloudflare Pages 배포 준비

### ChatGPT 작업
1. Home 콘텐츠 작성
2. About 콘텐츠 작성
3. Programs 콘텐츠 작성 (4개 프로그램 유형)
4. Track Record 콘텐츠 작성 (이력, 사례)
5. Service 하위 5개 페이지 콘텐츠 (15개 섹션 × 5)
6. 이미지 생성 (DALL-E 3, 15장)
7. FAQ 작성
8. 메타 태그 작성

---

## 미결 사항 (CEO 결정 대기)

1. **PDF 인쇄 기능 도입 여부**
   - 설계 훅 예약 완료
   - 결정 후 즉시 활성화 가능

2. **이벤트 패키지 가격 확정**
   - 네이밍 확정: SIMPLE/CORE/PRO/MASTER
   - 가격 시뮬레이션: 40만/150만/200만/300만 (VAT 별도)
   - 최종 결정 대기

3. **창업주 노출 범위**
   - 옵션 A/B/C 제시 완료
   - 결정 대기

4. **Track Record 네이밍**
   - 현재: Track Record
   - 대안: "실적" 또는 "운영 이력"
   - 검토 중

5. **영문판 제작 여부**
   - 구조 동일
   - GPT 번역
   - 우선순위 낮음

---

## 완료 체크리스트

- [x] 12개 원본 파일 읽기
- [x] IA 구조 정확히 파악 (11개 페이지)
- [x] 핵심 정보 추출
- [x] DEV_HANDOFF.md 생성 및 수정 (v1.1)
- [x] DEV_CONTENT_SPEC.md 생성 및 수정
- [x] DEV_SUMMARY.md 생성 및 수정 (이 문서)
- [x] 개발 가능 범위 정리
- [x] 미결 사항 정리
- [x] 요약 오류 수정 (IA 구조 정확히 반영)

---

## 파일 위치

```
프로젝트 루트/
  ├── DEV_HANDOFF.md (v1.1 - 개발 핸드오프 패키지)
  ├── DEV_CONTENT_SPEC.md (v1.1 - 콘텐츠 상세 스펙)
  ├── DEV_SUMMARY.md (v1.1 - 이 문서)
  ├── PROJECT_ROADMAP.md (v1.4)
  ├── 07. SESSION.md
  └── docs/
      └── _WEB_GPT_output/
          └── WEBGPT_Full_Thread_Backup/
              ├── 01_작업준비_프롬프트준비.md
              ├── 02_BI전_정체성분석_7개문서생성.md
              ├── 03_BI_Lockin_Brand_Positioning_확정_260201.md
              ├── 04_IA구조_상품패키지설계_260201.md ⭐
              ├── 05_이벤트패키지_네이밍_가격안_260201.md
              ├── 06_프롬프트교정_CTA구조_260201.md
              ├── 07_Contact설계_문의폼스펙_260201.md
              ├── 08_Service메뉴구조_HRD학습_260201.md ⭐
              ├── 09_스포츠본질담론_정체성재정의_260201.md
              ├── 10_260201.md (중복)
              ├── 10_랜딩구조_왜조정인가_PDF정책_260201.md
              └── 11_IA템플릿확정_이미지3슬롯_설계종료_260201.md ⭐

⭐ = IA 구조 핵심 문서
```

---

**버전:** 1.1 (IA 구조 수정)
**상태:** 개발 진입 준비 완료, 요약 오류 수정 완료
**다음 작업:** Astro 프로젝트 생성 및 11개 페이지 구조 구현 (Codex/Roo)
**최종 수정:** 2026-02-01
