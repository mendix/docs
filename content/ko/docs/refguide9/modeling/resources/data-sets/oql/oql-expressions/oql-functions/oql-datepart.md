---
title: "OQL DATEPART"
url: /refguide9/oql-datepart/
---

## 설명

`DATEPART` 함수는 날짜/시간 값에서 지정된 요소를 검색합니다. 이 요소는 정수 유형입니다.

## 구문

구문은 다음과 같습니다:

```sql
DATEPART ( datepart , date_expression [, timezone ] )
```

### datepart

`datepart`는 검색할 날짜/시간 값의 부분을 지정합니다. 가능한 값은 아래의 [예시](#oql-datepart-example)를 참조하십시오.

### date_expression

`date_expression`은 요소를 검색할 날짜를 지정합니다. 날짜/시간 값으로 해석되는 표현식 형식이어야 합니다.

### timezone

{{% alert color="info" %}}
선택적 `timezone` 매개변수는 [Studio Pro 9.22.0](/releasenotes/studio-pro/9.22/) 이상에서 사용할 수 있습니다. 
{{% /alert %}}

`timezone`은 검색에 사용할 시간대를 지정합니다. 이 매개변수는 선택적이며 기본값은 로컬 시간대입니다. IANA 시간대를 포함하는 문자열 리터럴이어야 합니다. GMT 오프셋 시간대는 지원되지 않습니다.

## 예시{#oql-datepart-example}

| datepart | 정의 | 예시 (2005년 7월 1일 금요일, 16:34:20) |
| --- | --- | --- |
| `YEAR` |   | 2005 |
| `QUARTER` | 1, 2, 3 또는 4 | 3 |
| `MONTH` | 1 ~ 12 | 7 |
| `DAYOFYEAR` | 1 ~ 366 |   |
| `DAY` | 1 ~ 31 | 5 |
| `WEEK` | 1 ~ 53 (데이터베이스 구현에 따라 다름) |   |
| `WEEKDAY` | 1 ~ 7 (1 = 일요일, 7 = 토요일) | 6 |
| `HOUR` | 0 ~ 23 | 16 |
| `MINUTE` | 0 ~ 59 | 34 |
| `SECOND` | 0 ~ 59 | 20 |
