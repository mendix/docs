---
title: "OQL DATEPART"
url: /refguide8/oql-datepart/
---

DATEPART 함수는 날짜/시간 값에서 지정된 요소를 검색합니다. 이 요소는 정수(Integer) 타입입니다.

구문은 다음과 같습니다:

```sql
DATEPART ( datepart , date_expression )
```

| datepart | 정의 | 2005년 7월 1일 금요일 16:34:20에 사용된 경우 예시 |
| --- | --- | --- |
| `YEAR` |   | 2005 |
| `QUARTER` | 1, 2, 3 또는 4 | 3 |
| `MONTH` | 1~12 | 7 |
| `DAYOFYEAR` | 1~366 |   |
| `DAY` | 1~31 | 5 |
| `WEEK` | 1~53 (데이터베이스 구현에 따라 다름) |   |
| `WEEKDAY` | 1~7 (1 = 일요일, 7 = 토요일) | 6 |
| `HOUR` | 0~23 | 16 |
| `MINUTE` | 0~59 | 34 |
| `SECOND` | 0~59 | 20 |

**datepart**
검색할 날짜/시간 값의 부분을 지정합니다. 위의 항목 중 하나일 수 있습니다.

**date_expression**
요소를 검색할 날짜를 지정합니다. 날짜/시간 값으로 확인되는 표현식으로 형식화해야 합니다.
