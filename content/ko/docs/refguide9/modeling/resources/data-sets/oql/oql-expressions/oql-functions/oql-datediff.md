---
title: "OQL DATEDIFF"
url: /refguide9/oql-datediff/
---

## 설명

`DATEDIFF` 함수는 두 주어진 날짜/시간 값 사이의 차이를 반환합니다. 차이는 지정된 단위로 제공됩니다.

## 구문

구문은 다음과 같습니다:

```sql
DATEDIFF ( unit , startdate_expression, enddate_expression [, timezone ] )
```

### unit

`unit`은 검색할 날짜/시간 값의 단위를 지정합니다. 다음 중 하나일 수 있습니다:
`YEAR`, `QUARTER`, `MONTH`, `DAY`, `WEEK`, `HOUR`, `MINUTE` 또는 `SECOND`. 날짜/시간 값에 대한 자세한 내용은 *OQL DATEPART*의 [예시](/refguide9/oql-datepart/#oql-datepart-example) 섹션을 참조하십시오.

### startdate_expression

`startdate_expression`은 계산되는 기간의 시작 날짜를 지정합니다. 날짜/시간 값으로 해석되는 표현식 형식이어야 합니다.

### enddate_expression

`enddate_expression`은 계산되는 기간의 종료 날짜를 지정합니다. 날짜/시간 값으로 해석되는 표현식 형식이어야 합니다.

### timezone

{{% alert color="info" %}}
선택적 `timezone` 매개변수는 [Studio Pro 9.22.0](/releasenotes/studio-pro/9.22/) 이상에서 사용할 수 있습니다. 
{{% /alert %}}

`timezone`은 검색에 사용할 시간대를 지정합니다. 이 매개변수는 선택적이며 기본값은 로컬 시간대입니다. IANA 시간대를 포함하는 문자열 리터럴이어야 합니다. GMT 오프셋 시간대는 지원되지 않습니다.
