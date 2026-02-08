---
title: "XPath False"
url: /refguide8/xpath-false/
---

## 개요

`false()` 함수는 Boolean 값 `false`를 반환합니다.

XPath 쿼리에서 `true` 또는 `false` 값을 사용하려면 `true()` 및 `false()` 함수를 사용하거나 값을 따옴표로 묶어야 합니다.

## 예제

이 쿼리는 골드 고객으로 분류되지 않은 모든 고객을 반환합니다:

```java
//Sales.Customer[IsGoldCustomer = false()]
```
