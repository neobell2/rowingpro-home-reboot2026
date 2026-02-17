# [Plan] 로잉프로 Vertex AI 도입 및 영업 자동화 구축 실행 계획서

**작성자:** Technical Audit Officer (Gemini 2.0 Pro)
**일시:** 2026-02-16
**근거:** Vertex AI 도입 기정사실화에 따른 실행 중심 설계
**대상:** `docs/reports/[Audit]_Vertex_bot_Issue`

---

## Executive Summary

본 문서는 로잉프로 웹사이트에 **Vertex AI Agent Builder** 기반의 영업 자동화 시스템을 도입하기 위한 **구체적인 실행 계획(Action Plan)**입니다. 이전 감사에서 제기된 '필요성 검증' 단계를 넘어서, **"도입을 확정했을 때 가장 효율적이고 안전하게 구축하는 방법"**을 기술적, 비용적 측면에서 설계했습니다.

**핵심 전략:**
1.  **Hybrid Architecture:** 정적 웹사이트(Astro)의 성능을 유지하면서 Vertex AI 위젯을 비동기(Lazy Load)로 통합합니다.
2.  **Lean Operations:** 140만원 상당의 크레딧을 전략적으로 활용하여 초기 1년간 **Zero Cash Cost** 운영을 목표로 하되, 초과 리스크를 원천 차단하는 가드레일을 설치합니다.
3.  **Risk-Free Automation:** 환각(Hallucination) 위험이 있는 생성형 답변은 제한하고, **구조화된 데이터 수집(Lead Gen)과 검색(RAG)**에 집중합니다.

---

## 1. 구축 목표 및 범위

### 1.1 목표 시스템 (Target System)
*   **시스템명:** 로잉프로 지능형 영업 에이전트 (RowingPro Intelligent Sales Agent)
*   **주요 기능:**
    1.  **24/7 응대:** 방문자 문의에 대한 1차 자동 응답 (프로그램 안내, 일정 확인)
    2.  **RAG 기반 검색:** PDF 제안서 및 행사 이력(418건) 기반 정확한 정보 제공
    3.  **리드 수집 자동화:** 대화 맥락에서 고객 연락처/니즈 추출
    4.  **제안서 발송:** 상담 종료 즉시 고객 메일로 맞춤 제안서 발송 (n8n 연동)

### 1.2 상세 기술 스택 (Tech Stack)

| 구분 | 구성 요소 | 역할 | 비고 |
|:---:|:---|:---|:---|
| **Frontend** | **Astro (Island)** | 위젯 컨테이너 | 기존 웹사이트 성능 영향 최소화 |
| | **Vertex AI Widget** | 채팅 UI (`<df-messenger>`) | Google Managed UI 활용 (커스텀 최소화) |
| **Backend** | **Vertex AI Search** | RAG 엔진 | PDF/웹사이트 데이터 인덱싱 및 답변 생성 |
| | **Dialogflow CX** | 대화 흐름 제어 | 인사 -> 니즈 파악 -> 정보 수집 -> 종료 |
| **Automation** | **n8n (Self-hosted)** | 워크플로우 자동화 | Webhook 수신 -> 이메일 발송 트리거 |
| **Infra** | **Google Cloud** | 컴퓨팅/스토리지 | 데이터 저장 및 인증 처리 |
| | **Resend API** | 이메일 전송 | 높은 도달률 및 템플릿 관리 |

---

## 2. 상세 구축 가이드 (Implementation Guide)

### Step 1: 데이터 정제 및 인덱싱 (Data Preparation)
*   **리스크:** 개인정보(이름, 연락처)가 포함된 과거 행사 데이터 유출
*   **조치:**
    1.  모든 PDF/문서에서 고객사 담당자 이름, 직급, 전화번호, 이메일 마스킹 처리
    2.  파일명 규칙 통일: `[연도]_[고객사명]_[프로그램유형].pdf`
    3.  Google Cloud Storage 버킷 생성 (`rowingpro-knowledge-base`) 및 업로드
    4.  Vertex AI Search 'Data Store' 생성 및 GCS 버킷 연동

### Step 2: Vertex AI Agent 설정 (Agent Configuration)
*   **핵심:** 환각 방지 및 브랜드 톤앤매너 유지
*   **설정 값:**
    *   **Agent Type:** Search and Conversation
    *   **Engine:** Enterprise Edition (Gen App Builder)
    *   **System Prompt:**
        ```text
        당신은 로잉프로의 전문 영업 매니저입니다.
        제공된 문서(Data Store)에 있는 내용만 근거로 답변하세요.
        문서에 없는 내용은 "죄송합니다. 그 부분은 담당자가 직접 확인하여 안내드리겠습니다. 연락처를 남겨주시겠습니까?"라고 답변하세요.
        가격에 대한 확답을 피하고 "대략적인 예산 범위"만 안내하세요.
        ```
    *   **Fallback:** 답변 신뢰도 낮음 -> Contact Form 유도

### Step 3: 웹사이트 통합 (Frontend Integration)
*   **위치:** `src/layouts/MainLayout.astro`
*   **방식:** 지연 로딩(Lazy Loading) 적용
    ```html
    <!-- Vertex AI Widget Integration -->
    <script is:inline>
      window.addEventListener('load', function() {
        const script = document.createElement('script');
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
        document.body.appendChild(script);
      });
    </script>
    <df-messenger
      project-id="rowingpro-2026"
      agent-id="[AGENT_ID]"
      language-code="ko"
      max-query-length="-1">
      <df-messenger-chat-bubble
       chat-title="로잉프로 AI 상담"
       placeholder="무엇이든 물어보세요 (예: 팀빌딩 견적)">
      </df-messenger-chat-bubble>
    </df-messenger>
    ```
*   **스타일링:** CSS Variables를 활용하여 로잉프로 테마 컬러(#05080F, #00A3FF) 적용 (제약적이지만 색상 매칭 가능)

### Step 4: 자동화 워크플로우 (Automation Setup)
*   **도구:** n8n (Cloud 버전 또는 로컬 호스팅) + Resend
*   **Flow:**
    1.  **Trigger:** Dialogflow CX `Webhook` (이벤트: `consultation_finished`)
    2.  **Action 1:** 데이터 파싱 (고객명, 이메일, 관심 프로그램)
    3.  **Action 2:** Resend API 호출 (맞춤형 이메일 템플릿 전송)
        *   템플릿 A (기업 워크숍): 회사소개서 + 프로그램 제안서 PDF 첨부
        *   템플릿 B (학교/단체): 교육 프로그램 안내서 첨부
    4.  **Action 3:** 운영진 슬랙/메일로 알림 발송 ("새로운 고가망 리드 도착")

---

## 3. 리소스 및 비용 시뮬레이션

### 3.1 초기 구축 리소스 (One-time)
| 항목 | 예상 투입 시간 | 수행 주체 | 비고 |
|:---|:---:|:---:|:---|
| 데이터 전처리 (마스킹) | 12h | 사장님/운영진 | 보안 필수 |
| GCP/Vertex 환경 설정 | 4h | 기술 담당 | 계정/빌링/권한 |
| 위젯 프론트엔드 통합 | 4h | 개발자 | CSS 조정 포함 |
| n8n 워크플로우 구성 | 6h | 기술 담당 | 테스트 포함 |
| **총계** | **약 26시간** | | **약 3~4일 소요** |

### 3.2 월간 운영 비용 (Monthly Recurring Cost)
*   **전제:** 월 방문자 1,000명, 상담 전환율 5% (50건), 건당 평균 10턴 대화
*   **보유 크레딧:** ₩1,430,080 (유효기간: ~2027.02.16)

| 항목 | 계산식 (추정) | 월 예상 비용 | 비고 |
|:---|:---|:---|:---|
| **Vertex AI Search** | $10/1000쿼리 (기본) | ~$5.00 | 검색 쿼리 발생 시 |
| **Conversational Agents** | $0.007/request * 500 | ~$3.50 | 텍스트 대화 |
| **Gen AI Add-on** | 생성형 답변 사용 시 추가 | ~$15.00 | 변동성 높음 |
| **n8n (Cloud Starter)** | 월 고정 | $20.00 | 자가호스팅 시 $5 |
| **Resend (Email)** | 3,000건 무료 | $0.00 | 무료 티어 충분 |
| **합계 (USD)** | | **~$43.50** | **약 6만원** |
| **합계 (KRW)** | @1,380 | **약 60,000원** | |

*   **분석:** 월 6만원 발생 시, **연간 72만원** 소요.
*   **결론:** **보유 크레딧(143만원) 내에서 1년간 충분히 운영 가능 (Cash-out 0원).**
    *   단, n8n Cloud 비용은 크레딧 적용 불가 (별도 결제 필요). 자가 호스팅(GCP Compute Engine e2-micro 등) 시 크레딧 적용 가능.

---

## 4. 리스크 관리 및 안전장치 (Safety Rails)

### 4.1 비용 폭탄 방지
*   **GCP Budget Alert:** 월 예산 $50 설정. 50%, 90%, 100% 도달 시 이메일/SMS 알림 즉시 발송.
*   **Quota 제한:** 일일 API 호출량 제한 설정으로 DDoS 공격 등에 의한 과금 방지.

### 4.2 할루시네이션(거짓 답변) 방지
*   **Grounding 설정:** 답변 생성 시 반드시 'Data Store'의 내용만을 인용하도록 강제 (`Grounding with Google Search` 옵션 끄기 - 외부 정보 차단).
*   **신뢰도 임계값:** 답변 신뢰도(Confidence Score)가 일정 수준 이하면 무조건 "사람 상담"으로 넘김.

### 4.3 개인정보 보호
*   **데이터 필터링:** 업로드 전 데이터 마스킹(Step 1) 필수 이행.
*   **수집 동의:** 챗봇 대화 시작 시 "원활한 상담을 위해 대화 내용이 저장될 수 있습니다" 안내 문구 및 개인정보 처리방침 링크 제공.

---

## 5. 실행 타임라인 (Timeline)

*   **D-Day (착수일):** Phase 3/4 완료 직후 (예상: 2026.02.24)

| 일정 | 단계 | 주요 활동 | 산출물 |
|:---|:---|:---|:---|
| **D+1 ~ D+2** | 준비 | 데이터 마스킹 및 정제, 계정 설정 | 정제된 데이터셋 |
| **D+3** | 구축 1 | Vertex AI Agent 생성 및 튜닝 | 동작하는 챗봇 엔진 |
| **D+4** | 구축 2 | Astro 웹사이트 위젯 삽입 및 디자인 | 위젯 적용된 Dev 서버 |
| **D+5** | 구축 3 | n8n 연동 및 이메일 발송 테스트 | 자동화 워크플로우 |
| **D+6** | 테스트 | 내부 QA (시나리오별 대화 테스트) | QA 리포트 |
| **D+7** | 배포 | 프로덕션 배포 및 모니터링 시작 | **서비스 오픈** |

## 6. 결론

Vertex AI 도입은 로잉프로의 **"1인 기업의 한계 극복"**이라는 비즈니스 니즈를 정확히 타격하는 솔루션입니다.
비용 측면에서도 **보유한 GCP 크레딧을 활용하면 실질적인 재무 부담이 없습니다(초기 1년).**
기술적으로도 Astro의 정적 특성을 해치지 않으면서 **Lazy Loading** 방식으로 안전하게 통합 가능합니다.

따라서, **Phase 3/4를 통해 웹사이트의 기초 체력을 다진 후(D-Day), 위 계획에 따라 7일간 집중 투입하여 구축하는 것을 승인 요청합니다.**
