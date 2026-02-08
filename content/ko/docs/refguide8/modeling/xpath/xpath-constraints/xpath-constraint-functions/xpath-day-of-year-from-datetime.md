---
title: "XPath Day-of-Year-from-DateTime"
url: /refguide8/xpath-day-of-year-from-datetime/
---

## 개요

`day-of-year-from-dateTime()` 함수는 **Date and time** Attribute에서 연도 내 일(day) 값을 추출하여 값과 비교할 수 있도록 합니다. 값은 1(1월 1일)에서 366(윤년)까지의 범위입니다.

## 예제

이 쿼리는 `DateAttribute`에서 연도 내 일이 30인 모든 로그를 반환합니다(예: "2011-01-30" 및 "2012-01-30"):

```java
//Logging.Log[day-of-year-from-dateTime(DateAttribute) = 30]
```
