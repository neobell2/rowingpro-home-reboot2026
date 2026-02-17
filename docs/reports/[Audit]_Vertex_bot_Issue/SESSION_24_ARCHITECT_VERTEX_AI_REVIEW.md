# [아키텍트 검토] Vertex AI 도입 제안서 종합 분석 보고서

**검토자:** Architect (Claude 4.5 Sonnet)
**일시:** 2026-02-16
**대상:** `docs/reports/로잉프로 Vertex AI 도입 및 영업 자동화 전략 제안서.md`
**검토 목적:** 프로젝트 정합성, 아키텍처 영향, 실행 가능성 평가

---

## Executive Summary (임원 요약)

**결론:** Vertex AI 제안은 **비즈니스적으로 타당하나, 현재 프로젝트 범위를 벗어남**
**권고:** 현재 Phase 3/4 완료 후 **별도 Phase 5로 분리 검토** (Phase 4 진입 시 통합 설계 재검토)

### 핵심 판단 근거
| 항목 | 판정 | 비고 |
|:--|:--:|:--|
| **비즈니스 로직 정합성** | ✅ 우수 | B2B 고단가 서비스, 24시간 대응 필요성 명확 |
| **프로젝트 범위 정합성** | ❌ 불일치 | 현재 정의: "기업소개 + 서비스 안내" 웹사이트 |
| **기술 스택 정합성** | ⚠️ 충돌 | Astro(정적) vs. Vertex AI(동적 클라우드) |
| **Phase 우선순위** | ❌ 범위 초과 | Phase 3/4는 정적 사이트 완성에 집중 |
| **실행 가능성** | ✅ 높음 | 제안서 구축 로드맵(7일) 실현 가능 |
| **비용 대비 효과** | ✅ 우수 | 연 50~120만원으로 24시간 영업 자동화 |

---

## 1. 프로젝트 정합성 분석

### 1.1 비즈니스 로직 정합성: ✅ **우수**

**긍정적 일치:**
- `01_PROJECT_CONTEXT.md` 비즈니스 구조와 완벽히 부합
  - "캐시카우: B2B (기업/학교)" — Vertex AI 타겟과 일치
  - 고단가 서비스 특성 — 단 1건 계약으로 연간 AI 비용 회수 가능
- 핵심 자산 활용 가능성
  - 13년 전수 실적 (418건 행사) → Vertex AI Search 학습 데이터
  - 219+ 클라이언트 사례 → 대화형 리드 수집 시나리오
- 운영 현실 반영
  - "사장님이 교육 현장에 나가 있을 때 홈페이지 문의에 즉각 대응하기 어렵습니다" (제안서)
  - 실제 영세업자 구조와 일치

### 1.2 프로젝트 정의 정합성: ❌ **불일치**

**충돌 지점:**
- `01_PROJECT_CONTEXT.md` 프로젝트 정의:
  ```
  목적: 로잉프로 공식 웹사이트 리뉴얼 (기업소개 + 서비스 안내)
  목표: 13년 업력의 전문성과 고감도 디자인이 결합된 프리미엄 B2B/B2C 웹사이트
  ```
- Vertex AI 제안: "지능형 영업 실장" (능동적 상담 + 리드 수집 + 자동 제안서 발송)
- **결론:** AI 챗봇/자동화는 현재 프로젝트 정의에 **명시되지 않음**

### 1.3 절대 불변 요소 충돌: ⚠️ **승인 필요**

**`01_PROJECT_CONTEXT.md` 절대 불변 요소:**
> 기술 스택: Astro + Tailwind CSS (**변경 시 디렉터 승인 필수**)

**Vertex AI 도입 시 변경 사항:**
- 기술 스택 추가: Google Cloud Platform (Vertex AI, Cloud Storage, n8n)
- 기존 스택 유지 + 클라우드 인프라 추가 = **기술 스택 확장**
- **판정:** 디렉터 승인 필요 (변경이 아닌 확장이지만, 절대 불변 조항 저촉)

---

## 2. 아키텍처 영향 평가

### 2.1 기술 스택 충돌 분석

**현재 아키텍처 (`02_ARCHITECTURE.md`):**
```
프레임워크: Astro (정적 사이트 생성)
배포: Cloudflare Pages (GitHub 자동 배포)
데이터베이스: Supabase (Contact 폼 등)
이메일: Resend (Email API)
```

**Vertex AI 제안 아키텍처:**
```
Vertex AI Search: PDF/문서 기반 검색
Vertex AI Conversation: 대화형 챗봇
n8n: 워크플로우 자동화 (제안서 발송)
Google Cloud Storage: 문서 저장
```

**통합 시나리오 분석:**

| 시나리오 | 아키텍처 | 장점 | 단점 |
|:--|:--|:--|:--|
| **A. 분리 운영** | Astro 사이트 + Vertex AI 위젯(별도) | 현재 프로젝트 영향 최소 | 데이터 파편화, 이중 관리 |
| **B. Contact 폼 대체** | Astro + Vertex AI (Contact 폼 제거) | 단일 채널, 자동화 극대화 | Supabase/Resend 투자 손실 |
| **C. 하이브리드** | Astro + Contact 폼 + Vertex AI 챗봇 | 양쪽 활용 | 복잡도 증가, 비용 중복 |

**권고:** 시나리오 A (분리 운영) — Astro 사이트에 Vertex AI 위젯만 삽입

### 2.2 Contact 백엔드 전략 충돌

**Phase 4 예정 작업 (`05_NEXT_TASK.md`):**
```
Phase 4: Contact 폼 실연동
  - Supabase (DB)
  - Resend (이메일 API)
  - ⚠️ [ARCHITECT 필수 호출] Contact 백엔드 설계 확정
```

**Vertex AI 제안:**
```
대화형 리드 수집 (Vertex AI Conversation)
3초 제안서 자동 발송 (n8n + 메일 발송)
```

**충돌 분석:**
- Contact 폼 = 수동 문의 입력 (Supabase + Resend)
- Vertex AI = 능동 대화 + 자동 리드 수집 (Vertex AI + n8n)
- **결론:** 두 시스템은 **병행 가능하나, 우선순위 결정 필요**

**통합 설계 옵션:**
1. **옵션 A (병행)**: Contact 폼 유지 + Vertex AI 챗봇 추가 → 사용자 선택권
2. **옵션 B (대체)**: Contact 폼 폐기, Vertex AI로 단일화 → 관리 간소화
3. **옵션 C (단계별)**: Phase 4에서 Contact 폼 구현 → Phase 5에서 Vertex AI 도입

**권고:** 옵션 C (단계별) — Contact 백엔드 설계 시 Vertex AI 통합 여부 재검토

### 2.3 문서 체계 영향

**Vertex AI 도입 시 필요한 문서 변경:**
- `01_PROJECT_CONTEXT.md`: 프로젝트 정의 확장 (AI 자동화 명시)
- `02_ARCHITECTURE.md`: 기술 스택 섹션에 Vertex AI 추가
- `03_DECISIONS.md`: Vertex AI 도입 결정 기록 (D-030 등)
- `04_CURRENT_STATE.md`: Phase 5 추가 또는 Phase 4 확장
- `05_NEXT_TASK.md`: Vertex AI 구축 Work Order 근거

**거버넌스 영향:**
- 절대 불변 요소 수정 (디렉터 승인 필수)
- 운영 스쿼드에 "AI Operations" 역할 신설 가능성
- Phase 정의 재검토 (Phase 5: AI Automation)

---

## 3. 우선순위 및 타이밍 분석

### 3.1 현재 Phase 상태

**Phase 3 (진행중):**
- ✅ 스켈레톤 구현 완료 (SESSION_17)
- ✅ 콘텐츠 SSOT 최신화 완료 (SESSION_18)
- ✅ Header 모바일 메뉴 복구 완료 (SESSION_22)
- 🔄 **다음 작업**: Phase 3 STEP 1 — Content (Gemini 3.0 Pro) 브랜드 스토리 카피

**Phase 4 (예정):**
- Contact 폼 백엔드 연동 (Supabase/Resend)
- SEO/OG 배포 품질 확보
- 기술 부채 해결 (TD-01~04)

### 3.2 Vertex AI 제안서의 타이밍 이슈

**제안서 구축 로드맵:**
```
1. [준비] 데이터 수집 (3일)
2. [두뇌 생성] Vertex AI 설정 (1일)
3. [현장 배치] 위젯 삽입 (1일)
4. [마무리] 자동화 연결 (2일)
총 7일 소요
```

**현재 프로젝트 일정:**
- Phase 3/4 완료 목표: 약 1주일 (디렉터 목표)
- Vertex AI 구축: 7일 (제안서 기준)
- **충돌:** 현재 일정에 Vertex AI를 추가하면 **최소 2배 지연**

### 3.3 우선순위 판정

**긴급도/중요도 매트릭스:**

| 작업 | 긴급도 | 중요도 | 우선순위 |
|:--|:--:|:--:|:--:|
| Phase 3 Content 완성 | 높음 | 높음 | **1순위** |
| Phase 4 Contact 폼 연동 | 높음 | 중간 | **2순위** |
| Vertex AI 도입 | 낮음 | 높음 | **3순위** |

**근거:**
- Phase 3/4 미완료 시 웹사이트 자체가 출시 불가 (긴급)
- Vertex AI는 운영 효율화 도구 (중요하나 긴급하지 않음)
- 정적 웹사이트 완성 후 AI 자동화를 추가하는 것이 순서상 자연스러움

**권고:** **Phase 5로 분리** (Phase 3/4 완료 후 착수)

---

## 4. 기술 실현성 검토

### 4.1 제안서 구축 로드맵 검증

**제안된 단계:**
1. ✅ **데이터 수집 (3일)**: 실현 가능
   - 로잉프로는 이미 418건 행사 데이터, 219+ 클라이언트 사례 보유
   - `docs/contents/history_master.md`, PDF 제안서 등 활용 가능
2. ✅ **Vertex AI 설정 (1일)**: 실현 가능
   - 구글 클라우드 콘솔 UI 기반 설정 (코딩 불필요)
   - 신규 가입 시 $300 크레딧 활용
3. ⚠️ **위젯 삽입 (1일)**: 기술적 검토 필요
   - Astro 정적 사이트에 동적 위젯 삽입 시 호환성 확인 필요
   - 글로벌 레이아웃 (`src/layouts/MainLayout.astro`)에 스크립트 추가 방식
4. ✅ **자동화 연결 (2일)**: 실현 가능
   - n8n 워크플로우 툴은 노코드 수준
   - 이메일 발송은 Resend API 재활용 가능

**종합 판정:** 기술적으로 실현 가능 (7일 소요는 낙관적이나, 10~14일이면 안정적)

### 4.2 Astro 정적 사이트와의 통합 이슈

**Astro의 특성:**
- 빌드 타임에 정적 HTML 생성
- 클라이언트 사이드 JavaScript는 Island Architecture로 관리

**Vertex AI 위젯 통합 방식:**
```html
<!-- MainLayout.astro에 추가 -->
<script>
  // Vertex AI Conversation 위젯 로드
  (function(v,e,r,t,x){...})();
</script>
```

**호환성 검증 필요:**
- Astro Island와 외부 위젯 스크립트 충돌 여부
- 정적 빌드 후 동적 위젯 초기화 타이밍

**권고:** Phase 5 착수 전 **기술 검증(PoC)** 수행 (1일 소요)

### 4.3 데이터 개인정보 이슈

**Vertex AI에 업로드할 데이터:**
- 과거 행사 사례 (418건) — 기업명, 인원, 프로그램 내용
- 클라이언트 정보 (219+) — 기업명, 업종

**개인정보보호법 검토 필요:**
- 기업 B2B 데이터는 개인정보가 아님 (법인 정보)
- 하지만 담당자 이름, 연락처 등이 포함되어 있다면 **개인정보 해당**
- **조치:** 데이터 익명화 또는 법적 검토 필요

---

## 5. 비용 및 리소스 분석

### 5.1 비용 구조 비교

**현재 Phase 4 예정 비용 (Contact 폼):**
| 항목 | 비용 | 비고 |
|:--|:--|:--|
| Supabase | 무료 (Hobby) | 월 50,000 DB 요청까지 무료 |
| Resend | 무료 (Free) | 월 100통까지 무료, 이후 $1/1,000통 |
| 합계 | **0원** | 트래픽 초과 시 유료 전환 |

**Vertex AI 제안 비용:**
| 항목 | 비용 | 비고 |
|:--|:--|:--|
| 초기 구축 | 0원 | $300 크레딧 활용 |
| 월간 운영비 | 3~8만원 | 상담 10~20건/일 기준 |
| 연간 총비용 | **50~120만원** | 영업 직원 연봉의 3% |

**비용 대비 효과:**
- Contact 폼: 수동 문의 접수 (사장님이 직접 회신)
- Vertex AI: 24시간 AI 상담 + 자동 제안서 발송 + 리드 수집
- **ROI:** B2B 고단가 계약 특성상 단 1건 추가 성사로 1년치 비용 회수 가능

**판정:** 비용 대비 효과 우수 (단, 현재 웹사이트 완성 후 도입 권고)

### 5.2 인력 리소스

**Vertex AI 구축 시 필요 인력:**
- 데이터 수집/정제: 사장님 직접 가능 (3일)
- Vertex AI 설정: 제안서 작성자 또는 외부 전문가 (1일)
- 위젯 삽입: Builder (Claude Sonnet) — 1일
- 자동화 연결: Builder 또는 외부 전문가 — 2일

**현재 운영 스쿼드 영향:**
- Builder(Sonnet)가 Phase 3/4 코딩 + Vertex AI 위젯 삽입 병행 시 **과부하**
- **권고:** Phase 3/4 완료 후 Vertex AI 착수 (리소스 충돌 방지)

---

## 6. 최종 권고사항

### 6.1 즉시 조치 (디렉터 의사결정 필요)

**질문 1: Vertex AI 도입 여부**
- [ ] 도입한다 → 질문 2로 진행
- [ ] 도입하지 않는다 → 제안서 거부
- [ ] 보류한다 → Phase 3/4 완료 후 재검토

**질문 2: 도입 시기 및 우선순위**
- [ ] **옵션 A (권고)**: Phase 5로 분리 (Phase 3/4 완료 후 착수)
- [ ] 옵션 B: Phase 4와 병행 (일정 2배 지연 감수)
- [ ] 옵션 C: Phase 3/4 축소하고 Vertex AI 우선 투입

**질문 3: Contact 폼 vs. Vertex AI 전략**
- [ ] **옵션 A (권고)**: Contact 폼 유지 + Vertex AI 챗봇 병행
- [ ] 옵션 B: Vertex AI로 Contact 폼 대체
- [ ] 옵션 C: Phase 4에서 Contact 폼 구현 → Phase 5에서 통합 재설계

### 6.2 Architect 권고 (전문가 의견)

**권고 1: 현재 Phase 3/4 완료 우선**
- 근거: 웹사이트 자체가 미완성이면 Vertex AI 챗봇도 무의미
- 정적 사이트 완성 → 트래픽 확보 → AI 자동화 도입이 자연스러운 순서

**권고 2: Phase 5로 분리 (별도 Work Order)**
- 근거: Vertex AI는 7~14일 소요, Phase 3/4와 병행 시 일정 지연
- Phase 정의: "Phase 5 — AI 자동화 및 운영 효율화"

**권고 3: Contact 백엔드 설계 시 통합 검토**
- 근거: Architect 필수 호출 지점 (Contact 백엔드 설계 확정 시)
- Phase 4 진입 전 Contact 폼 vs. Vertex AI 전략 최종 결정

**권고 4: 기술 검증(PoC) 선행**
- 근거: Astro + Vertex AI 위젯 통합 호환성 미확인
- 1일 소요 PoC로 기술적 리스크 제거 후 본격 착수

### 6.3 실행 로드맵 (권고안 채택 시)

**Phase 3/4 완료 (현재 ~ +7일)**
```
STEP 1: Content 고도화 (Gemini Pro) — 2~3일
STEP 2: Media 자산 생산 (Gemini Flash) — 2~3일
STEP 3: Design 폴리싱 (Sonnet Builder/Designer) — 2일
Phase 4: Contact 폼 연동 (Supabase/Resend) — 1~2일
  ⚠️ [ARCHITECT 필수 호출] Contact 백엔드 설계 확정
```

**Phase 5 준비 (Phase 4 완료 후 +1일)**
```
- 기술 검증(PoC): Astro + Vertex AI 위젯 통합 테스트 (1일)
- PoC 성공 시 → Phase 5 Work Order 발행
- PoC 실패 시 → 대안 검토 (Contact 폼 강화 또는 다른 챗봇 솔루션)
```

**Phase 5 본격 착수 (PoC 성공 시 +7~14일)**
```
1. 데이터 수집/정제 (3일) — 사장님 직접
2. Vertex AI 설정 (1일) — 외부 전문가 또는 Builder
3. 위젯 삽입 (1일) — Builder (Sonnet)
4. 자동화 연결 (2일) — Builder 또는 외부 전문가
5. 통합 테스트 (1일) — Architect + Builder
6. 배포 및 모니터링 (1일) — PM
```

---

## 7. 위험 요소 및 완화 방안

| 위험 | 발생 가능성 | 영향도 | 완화 방안 |
|:--|:--:|:--:|:--|
| Phase 3/4 일정 지연 시 Vertex AI 착수 불가 | 중간 | 낮음 | Phase 5 분리로 영향 최소화 |
| Astro + Vertex AI 위젯 통합 실패 | 낮음 | 높음 | PoC 선행으로 조기 검증 |
| 데이터 개인정보보호법 위반 | 중간 | 높음 | 데이터 익명화 + 법적 검토 |
| Vertex AI 비용 초과 (월 8만원 이상) | 낮음 | 낮음 | 초기 3개월 모니터링 후 조정 |
| Contact 폼 vs. Vertex AI 이중 운영 복잡도 | 높음 | 중간 | Phase 4 설계 시 통합 전략 수립 |

---

## 8. 결론 및 다음 단계

### 8.1 종합 판정

**Vertex AI 제안서 평가:**
- ✅ 비즈니스적으로 타당함
- ✅ 기술적으로 실현 가능함
- ✅ 비용 대비 효과 우수함
- ❌ 현재 프로젝트 범위와 불일치
- ❌ Phase 3/4 일정과 충돌

**최종 판정:** **조건부 승인** (Phase 5로 분리 시 강력 권고)

### 8.2 디렉터 승인 대기 사항

1. **Vertex AI 도입 여부 최종 결정**
2. **도입 시 우선순위 결정** (Phase 5 분리 vs. Phase 4 병행)
3. **Contact 폼 전략 결정** (병행 vs. 대체 vs. 통합)
4. **예산 승인** (연 50~120만원 운영비)

### 8.3 다음 단계

**디렉터 승인 후 즉시 수행:**
- [ ] `03_DECISIONS.md`에 D-030 기록 (Vertex AI 도입 결정)
- [ ] `01_PROJECT_CONTEXT.md` 프로젝트 정의 확장 (AI 자동화 명시)
- [ ] `02_ARCHITECTURE.md` 기술 스택 섹션 갱신
- [ ] Phase 5 Work Order 발행 (`docs/work_orders/PHASE_5_VERTEX_AI_WO.md`)
- [ ] 기술 검증(PoC) Work Order 발행 (1일 소요)

**Architect 재호출 필요 시점:**
- Phase 4 Contact 백엔드 설계 확정 시 (필수)
- Phase 5 PoC 결과 검토 시 (권장)

---

**보고서 작성:** Architect (Claude 4.5 Sonnet)
**검토 완료:** 2026-02-16
**디렉터 승인 대기**
