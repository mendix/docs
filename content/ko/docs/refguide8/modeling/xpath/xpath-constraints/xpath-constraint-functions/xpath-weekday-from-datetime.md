---
title: "XPath Weekday-from-DateTime"
url: /refguide8/xpath-weekday-from-datetime/
---

## 개요

`weekday-from-dateTime()` 함수는 **Date and time** Attribute에서 요일(숫자)을 추출하여 값과 비교할 수 있도록 합니다. 값은 1에서 7까지의 범위입니다 (1 = 일요일, 7 = 토요일).

## 예제

이 쿼리는 `DateAttribute`의 요일이 6(금요일)인 모든 로그를 반환합니다:

```java
//Logging.Log[weekday-from-dateTime(DateAttribute) = 6]
```
