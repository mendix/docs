---
title: "XPath max"
parent: "xpath-query-functions"
---

The `max()` function returns the maximum value of its argument.

The function requires an XPath query as argument.

The function must specify a column in the query to aggregate.

The query must specify an attribute that has a numeric type.

{{% alert type="info" %}}

```java
max(//Sales.Order/TotalPrice)
```

This query returns the highest total price found in any object.

```java
max(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```

This query returns the highest total price of an order placed by a customer named Jansen.

{{% /alert %}}
