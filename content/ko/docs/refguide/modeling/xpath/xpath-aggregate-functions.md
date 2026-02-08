---
title: "XPath 집계 함수"
url: /refguide/xpath-aggregate-functions/
weight: 1
---

## 소개

이 문서에서는 XPath 쿼리 집계 함수에 대해 설명합니다.

{{% alert color="warning" %}}
이 함수들은 Java 코드에서만 사용할 수 있으며, 인수로 전체 XPath 쿼리를 포함해야 합니다.
{{% /alert %}}

{{% alert color="info" %}}
`avg`, `max`, `min`, `sum` 함수는 쿼리에서 집계할 Attribute를 지정해야 합니다(예: `/TotalPrice`).

`avg`, `max`, `min`, `sum` 함수는 또한 숫자 유형의 Attribute를 지정해야 합니다.
{{% /alert %}}

다음 XPath 쿼리 집계 함수를 사용할 수 있습니다:

* [avg](#avg)
* [count](#count)
* [max](#max)
* [min](#min)
* [sum](#sum)

## avg {#avg}

`avg()` 함수는 인수의 평균을 반환합니다.

### 예제

이 쿼리는 모든 주문의 평균 총 가격을 반환합니다:

```java
avg(//Sales.Order/TotalPrice)
```

이 쿼리는 "Jansen"이라는 고객이 주문한 모든 주문의 평균 총 가격을 반환합니다:

```java
avg(//Sales.Order[Sales.Customer_Order/Sales.Customer = 'Jansen']/TotalPrice)
```

## count {#count}

`count()` 함수는 포함된 쿼리에 의해 검색된 모든 객체의 수를 세고 값을 정수로 반환합니다.

### 예제

이 쿼리는 모든 주문의 수를 반환합니다:

```java
count(//Sales.Order)
```

이 쿼리는 "Jansen"이라는 고객이 주문한 모든 주문의 수를 반환합니다:

```java
count(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen'])
```

## max {#max}

`max()` 함수는 인수의 최대값을 반환합니다.

### 예제

이 쿼리는 모든 객체에서 발견된 가장 높은 총 가격을 반환합니다:

```java
max(//Sales.Order/TotalPrice)
```

이 쿼리는 "Jansen"이라는 고객이 주문한 주문 중 가장 높은 총 가격을 반환합니다:

```java
max(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```

## min {#min}

`min()` 함수는 인수의 최소값을 반환합니다.

### 예제

이 쿼리는 모든 객체에서 발견된 가장 낮은 총 가격을 반환합니다:

```java
min(//Sales.Order/TotalPrice)
```

이 쿼리는 "Jansen"이라는 고객이 주문한 주문 중 가장 낮은 총 가격을 반환합니다:

```java
min(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```

## sum {#sum}

`sum()` 함수는 인수의 합계를 반환합니다.

### 예제

이 쿼리는 모든 주문의 총 가격 합계를 반환합니다:

```java
sum(//Sales.Order/TotalPrice)
```

이 쿼리는 "Jansen"이라는 고객이 주문한 모든 주문의 총 가격 합계를 반환합니다:

```java
sum(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
