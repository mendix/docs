---
title: "XPath Seconds-from-DateTime"
url: /refguide8/xpath-seconds-from-datetime/
---

## 개요

`seconds-from-dateTime()` 함수는 **Date and time** Attribute에서 초 부분을 추출하여 값과 비교할 수 있도록 합니다.

## 예제

이 쿼리는 `DateAttribute`의 초 부분이 30인 모든 로그를 반환합니다(예: "2011-12-30 08:08:30"):

```java
//Logging.Log[seconds-from-dateTime(DateAttribute) = 30]
```
