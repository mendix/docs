---
title: "XPath Day-from-DateTime"
url: /refguide8/xpath-day-from-datetime/
---

## 개요

`day-from-dateTime()` 함수는 **Date and time** Attribute에서 월의 일(day) 값을 추출하여 값과 비교할 수 있도록 합니다.

## 예제

이 쿼리는 `DateAttribute`가 월의 30일인 모든 로그를 반환합니다(예: "2011-12-30"):

```java
//Logging.Log[day-from-dateTime(DateAttribute) = 30]
```
