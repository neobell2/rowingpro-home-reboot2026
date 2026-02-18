# SESSION 28 콘텐츠 보고서: 초안(Draft) 리라이팅 및 텍스트 추출

**역할:** Content Producer  
**작업자:** Gemini 3.0 Pro  
**일시:** 2026-02-18  
**상태:** ✅ 완료

---

## 1. 작업 개요

- **목적:** `SESSION_24_ARCHITECT_AUDIT.md`의 지적 사항을 반영하여, 기존 콘텐츠의 톤앤매너를 전면 수정한 초안(Draft) 생산.
- **핵심 목표:**
    1. 내부 프레임워크(HPOC) 노출 차단.
    2. 추상적/컨설팅 용어 배제 및 구체적 사실(숫자) 기반 서술.
    3. 창업주 정보 오류 정정.
    4. "고객에게 직접 말하는" 브랜드 톤앤매너 확립.

---

## 2. 상세 작업 내용

### 2.1 콘텐츠 초안 리라이팅 (17개 파일)
기존 `docs/contents/`의 파일을 참조하여 `_GEMINI_draft.md` 접미사를 붙인 초안 파일을 생성했습니다.

| 카테고리 | 생성 파일 목록 | 주요 수정 사항 |
|:--|:--|:--|
| **핵심 (Core)** | `home`, `about`, `programs`, `contact`, `common`, `history` | HPOC 제거, 윤종성 대표 정보 정정, 감성 헤드라인 적용 |
| **기업 (Corporate)** | `hub`, `training`, `teambuilding`, `leadership`, `event`, `wellness` | HRD 전문 용어 순화, 현장감 있는 비유 사용 |
| **기타 서비스** | `school_youth`, `sports_event`, `club_general`, `family`, `service_hub` | 대상별 핵심 혜택(Benefit) 중심 리라이팅 |

### 2.2 텍스트 추출 (Text Extraction)
- **대상:** `docs/contents/지오캐치_회사소개서_V2.0_202601.pdf`
- **결과:** `docs/contents/text_extract_지오캐치_회사소개서_V2.0_202601.md`
- **내용:** PDF 내의 텍스트 데이터를 분석 및 참고용으로 추출 완료.

---

## 3. 주요 개선 사항 (Audit 대응)

- **HPOC 제거:** "Hardware/People/Operation" 등의 라벨을 "Safety/Professional/Heritage" 등 고객 친화적 언어로 대체하거나 문맥 속에 녹여냄.
- **용어 순화:** "체계적인", "내재화", "함양", "솔루션" 등 추상어 삭제 → "13년 무사고", "전원 선수 출신", "회식보다 강력한 2시간" 등 구체적 표현 사용.
- **창업주 정보:** 모든 초안에서 창업주를 **윤종성 (1994 히로시마 아시안게임 국가대표 / 무한도전 헤드코치)**로 통일하여 기재.

---

## 4. 다음 단계 제언

1. **디렉터/아키텍트 검수:** 생성된 17개 초안 중 `home_GEMINI_draft.md`를 우선 검토하여 최종 톤 확정.
2. **콘텐츠 바인딩:** 확정된 초안을 바탕으로 원본 `md` 파일을 교체하고 Astro 컴포넌트에 바인딩.
3. **미디어 매칭 (STEP 2):** 확정된 텍스트 톤에 맞춰 Gemini Flash가 미디어 자산(이미지/영상) 생산 및 매칭.

---

**보고서 작성:** Content Producer (Gemini 3.0 Pro)  
**완료 일시:** 2026-02-18
