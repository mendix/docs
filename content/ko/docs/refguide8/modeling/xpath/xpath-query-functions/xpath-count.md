---
title: "XPath Count"
url: /refguide8/xpath-count/
---

## 개요

`count()` 함수는 포함된 쿼리로 검색된 모든 객체의 수를 세고 정수로 값을 반환합니다.

## 예제

이 쿼리는 모든 주문 수를 반환합니다:

```java
count(//Sales.Order)
```

이 쿼리는 "Jansen"이라는 고객이 주문한 모든 주문 수를 반환합니다:

```java
count(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen'])
```
