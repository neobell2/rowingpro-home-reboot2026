# 사진 기반 인원수 “대강 추산” 프롬프트 템플릿

## 모델 운용(권장)
- **대량 처리(반복):** Flash급(빠르고 저렴)
- **보정/애매 케이스:** 상위 모델(일관성/추론) 간헐 사용

## 공통 규칙(반드시 붙이기)
아래 블록을 프롬프트 상단에 고정:

```text
규칙:
1) 단일 숫자 금지. 항상 people_min~people_max 범위로만 답한다.
2) 사람사진이 부족해도 됨(세팅/전경/표지판/운영 흔적을 근거로 사용).
3) 출력은 반드시 "CSV 한 줄" + "짧은 요약 2줄"만. 그 외 텍스트 금지.
4) evidence는 키워드 형태로 1줄(예: machine=8; rotation=2~3; venue=연수원; cue=조끼).
5) 확신이 낮으면 confidence=C로 낮추고 범위를 넓힌다.
6) 제외 규칙: 세션명이 `대회/체전/체육대회(회사체육대회 제외)/선수권/협회장배/시장배/탄금호배`면 추산 대상 제외로 판단한다.
   - 이 경우 CSV는 `session_type=EXCLUDE`, `people_min/people_max`는 비워두고, notes에 `excluded=competition`을 기록한다.
```

## 템플릿 A: 세션 1건 처리(Flash용)
아래에서 `[...]`만 채워서 사용:

```text
[규칙 블록 붙여넣기]

입력:
- year: [2013]
- session_name: [2013.04.04 메트라이프 천안행사]
- session_path: [J:\공유 드라이브\...]
- 샘플 이미지: (최대 10장)
  1) [이미지 첨부] 설명: [전경/장소]
  2) [이미지 첨부] 설명: [장비 세팅]
  3) [이미지 첨부] 설명: [진행 일부]
  ...

출력 형식(엄수):
CSV:
year,session_name,session_path,session_type,people_min,people_max,confidence,evidence,notes

요약:
- 한줄 근거 요약
- 한줄 리스크/가정(있으면)
```

## 템플릿 B: 범위표 캘리브레이션(상위 모델용)
초기 20~30세션 정도 결과를 모은 뒤, 아래로 범위표만 조정:

```text
목표: 아래 CSV 결과를 보고 MEGA/GROUP/SMALL 기본 범위표를 로잉프로 현실에 맞게 "보수적으로" 보정해줘.
조건:
- 단일 숫자 금지, 타입별 범위만 제안
- 변경 이유 3줄 이내

현재 범위표:
- MEGA: 800~1500
- GROUP: 30~80
- SMALL: 5~20

CSV 샘플(20~30줄):
[여기에 붙여넣기]

출력:
- MEGA: min~max
- GROUP: min~max
- SMALL: min~max
- 이유: ...
```

## 템플릿 C: 20세션마다 요약(세션오류/컨텍스트 절약용)

```text
아래 CSV 20줄을 요약해줘. 출력은 6줄 이내.
- 총 세션 수
- 타입별 개수(MEGA/GROUP/SMALL)
- people_min 합계 / people_max 합계
- confidence A/B/C 분포

[CSV 20줄]
```
