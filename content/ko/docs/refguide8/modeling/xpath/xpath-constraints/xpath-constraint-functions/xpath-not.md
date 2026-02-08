---
title: "XPath Not"
url: /refguide8/xpath-not/
---

## 개요

`not()` 함수는 인수의 의미(및 결과)를 반전시킵니다.

{{% alert color="info" %}}
XPath가 일대다 관계에 대한 것인 경우 역비교(예: `=`의 부정으로 `!=`)와 다른 결과를 가질 수 있습니다. 자세한 설명은 아래 예제를 참조하십시오.
{{% /alert %}}

## 예제

이 쿼리는 이름이 "Jansen"과 *같지 않은* 모든 고객을 반환합니다:

```java
//Sales.Customer[not(Name = 'Jansen')]
```

이 경우 위의 쿼리는 다음 쿼리와 동일한 결과를 반환합니다:

```java
//Sales.Customer[Name != 'Jansen']
```

다음 쿼리는 최소 하나의 주문을 하지 않은 모든 고객을 반환합니다:

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
```

다음 쿼리는 `TotalPrice`가 30,000을 *초과하는* 주문을 하지 *않은* 모든 고객을 반환합니다. 여기에는 주문을 전혀 하지 않은 고객도 포함됩니다:

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order/TotalPrice > 30000)]
```

위의 쿼리는 아래 쿼리와 동일한 결과를 반환하지 않습니다. 아래 쿼리는 30,000 이상의 주문 수에 관계없이 `TotalPrice`가 30,000 *미만*인 주문을 *최소 하나* 한 모든 고객을 반환합니다:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/TotalPrice <= 30000]
```

예를 들어, 고객이 15,000과 35,000의 두 주문을 한 경우, 이 쿼리는 이 고객을 반환하지만 *not* 쿼리는 반환하지 않습니다. 주문을 전혀 하지 않은 고객은 이 쿼리에서 반환되지 않습니다.
