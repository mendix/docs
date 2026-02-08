---
title: "OQL DATEDIFF"
url: /refguide8/oql-datediff/
---

DATEDIFF 함수는 두 개의 지정된 날짜/시간 값 사이의 차이를 반환합니다. 차이는 지정된 단위로 제공됩니다.

구문은 다음과 같습니다:

```sql
DATEDIFF ( unit , startdate_expression, enddate_expression )
```

**unit**

검색할 날짜/시간 값의 단위를 지정합니다. 다음 중 하나일 수 있습니다:

`YEAR`, `QUARTER`, `MONTH`, `DAY`, `WEEK`, `HOUR`, `MINUTE` 또는 `SECOND`.

**startdate_expression**
계산 기간의 시작 날짜를 지정합니다. 날짜/시간 값으로 확인되는 표현식으로 형식화해야 합니다.

**enddate_expression**
계산 기간의 종료 날짜를 지정합니다. 날짜/시간 값으로 확인되는 표현식으로 형식화해야 합니다.
