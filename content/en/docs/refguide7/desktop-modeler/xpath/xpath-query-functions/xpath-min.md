---
title: "XPath min"
url: /refguide7/xpath-min/
---

## 1 Overview

The `min()` function returns the minimum value of its argument.

The function requires an XPath query as argument.

The function must specify a column in the query to aggregate.

The query must specify an attribute that has a numeric type.

## 2 Examples

This query returns the lowest total price found in any object:

```java
min(//Sales.Order/TotalPrice)
```
This query returns the lowest total price of an order placed by a customer named "Jansen":

```java
min(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
