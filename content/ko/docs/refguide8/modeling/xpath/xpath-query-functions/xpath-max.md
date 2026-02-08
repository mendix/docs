---
title: "XPath Max"
url: /refguide8/xpath-max/
---

## 개요

`max()` 함수는 인수의 최대값을 반환합니다.

이 함수는 XPath 쿼리를 인수로 필요로 합니다.

함수는 집계할 쿼리의 열을 지정해야 합니다.

쿼리는 숫자 유형의 Attribute를 지정해야 합니다.

## 예제

이 쿼리는 모든 객체에서 발견된 가장 높은 총 가격을 반환합니다:

```java
max(//Sales.Order/TotalPrice)
```

이 쿼리는 "Jansen"이라는 고객이 주문한 주문의 가장 높은 총 가격을 반환합니다:

```java
max(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
