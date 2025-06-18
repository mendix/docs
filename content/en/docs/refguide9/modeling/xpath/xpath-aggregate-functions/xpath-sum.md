---
title: "XPath sum"
url: /refguide9/xpath-sum/
---

## Overview

The `sum()` function returns the sum of its argument.

The function must specify a column in the query to aggregate (for example, `/TotalPrice`).

The query must specify an attribute that has a numeric type.

## Examples

This query returns the sum of the total prices of all placed orders:

```java
sum(//Sales.Order/TotalPrice)
```

This query returns the sum of the total prices of all the orders placed by a customer named "Jansen":

```java
sum(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
