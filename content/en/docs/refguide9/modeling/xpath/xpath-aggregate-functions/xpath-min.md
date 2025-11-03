---
title: "XPath min"
url: /refguide9/xpath-min/
---

## Overview

The `min()` function returns the minimum value of its argument.

The function must specify a column in the query to aggregate (for example, `/TotalPrice`).

The query must specify an attribute that has a numeric type.

## Examples

This query returns the lowest total price found in any object:

```java
min(//Sales.Order/TotalPrice)
```

This query returns the lowest total price of an order placed by a customer named "Jansen":

```java
min(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
