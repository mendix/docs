---
title: "XPath max"
url: /refguide9/xpath-max/
---

## 1 Overview

The `max()` function returns the maximum value of its argument.

The function must specify a column in the query to aggregate (for example, `/TotalPrice`).

The query must specify an attribute that has a numeric type.

## 2 Examples

This query returns the highest total price found in any object:

```java {linenos=false}
max(//Sales.Order/TotalPrice)
```

This query returns the highest total price of an order placed by a customer named "Jansen":

```java {linenos=false}
max(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
