---
title: "XPath Contains"
url: /refguide8/xpath-contains/
---

## 개요

`contains()` 함수는 문자열 Attribute가 특정 문자열을 하위 문자열로 포함하는지(대소문자 구분 없음) 테스트합니다.

## 예제

이 쿼리는 이름에 `an` 문자열이 포함된 모든 고객을 반환합니다:

```java
//Sales.Customer[contains(Name, 'an')]
```

예를 들어 "Andy" 또는 "Jan"이라는 이름의 고객이 반환됩니다. "an"이 해당 이름의 일부이기 때문입니다.
