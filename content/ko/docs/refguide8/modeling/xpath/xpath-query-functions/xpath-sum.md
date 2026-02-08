---
title: "XPath Sum"
url: /refguide8/xpath-sum/
---

## 개요

`sum()` 함수는 인수의 합계를 반환합니다.

이 함수는 XPath 쿼리를 인수로 필요로 합니다.

함수는 집계할 쿼리의 열을 지정해야 합니다.

쿼리는 숫자 유형의 Attribute를 지정해야 합니다.

## 예제

이 쿼리는 모든 주문의 총 가격 합계를 반환합니다:

```java
sum(//Sales.Order/TotalPrice)
```

이 쿼리는 "Jansen"이라는 고객이 주문한 모든 주문의 총 가격 합계를 반환합니다:

```java
sum(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
