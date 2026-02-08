---
title: "XPath Ends-With"
url: /refguide8/xpath-ends-with/
---

## 개요

`ends-with()` 함수는 문자열 Attribute가 특정 문자열로 끝나는지(대소문자 구분 없음) 확인합니다.

## 예제

이 쿼리는 이름이 하위 문자열 `sen`으로 끝나는 모든 고객을 반환합니다:

```java
//Sales.Customer[ends-with(Name, 'sen')]
```

예를 들어 "Jansen" 또는 "Isaacsen"이라는 이름의 고객이 반환됩니다. 두 이름 모두 "sen"으로 끝나기 때문입니다.
