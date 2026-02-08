---
title: "XPath Month-From-DateTime"
url: /refguide8/xpath-month-from-datetime/
---

## 개요

`month-from-dateTime()` 함수는 **Date and time** Attribute에서 월 값을 추출하여 값과 비교할 수 있도록 합니다.

## 예제

이 쿼리는 `DateAttribute`의 월 값이 12(12월)인 모든 로그를 반환합니다. 예: "2011-12-30":

```java
//Logging.Log[month-from-dateTime(DateAttribute) = 12]
```
