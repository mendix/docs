---
title: "XPath Minutes-from-DateTime"
url: /refguide8/xpath-minutes-from-datetime/
---

## 개요

`minutes-from-dateTime()` 함수는 **Date and time** Attribute에서 분 값을 추출하여 값과 비교할 수 있도록 합니다.

## 예제

이 쿼리는 `DateAttribute`의 분 부분이 30인 모든 로그를 반환합니다(예: "2011-12-30 08:30:00"):

```java
//Logging.Log[minutes-from-dateTime(DateAttribute) = 30]
```
