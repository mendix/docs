---
title: "XPath Starts-With"
url: /refguide8/xpath-starts-with/
---

## 개요

`starts-with()` 함수는 문자열 Attribute가 특정 문자열로 시작하는지(대소문자 구분 없음) 테스트합니다.

## 예제

이 쿼리는 이름이 "Jans" 문자열로 시작하는 모든 고객을 반환합니다:

```java
//Sales.Customer[starts-with(Name, 'Jans')]
```

예를 들어 "Jansen"이라는 이름의 고객이 반환됩니다. 이름이 "Jans"로 시작하기 때문입니다.
