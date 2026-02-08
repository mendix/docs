---
title: "XPath Hours-from-DateTime"
url: /refguide8/xpath-hours-from-datetime/
---

## 개요

`hours-from-dateTime()` 함수는 **Date and time** Attribute에서 시간 값을 추출하여 값과 비교할 수 있도록 합니다.

## 예제

이 쿼리는 `DateAttribute`의 시간 부분이 8인 모든 로그를 반환합니다(예: "2011-12-30 08:00:00"):

```java
//Logging.Log[hours-from-dateTime(DateAttribute) = 8]
```
