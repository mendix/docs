---
title: "XPath avg"
parent: "xpath-query-functions"
---

The `avg()` function returns the average of its argument.

The function requires an XPath query as argument.

The function must specify a column in the query to aggregate.

The query must specify an attribute that has a numeric type.

{{% alert type="info" %}}

```java
avg(//Sales.Order/TotalPrice)
```

This query returns the average total price of all placed orders.

```java
avg(//Sales.Order[Sales.Customer_Order/Sales.Customer = 'Jansen']/TotalPrice)
```

This query returns the average total price of all orders placed by a customer named Jansen.

{{% /alert %}}
