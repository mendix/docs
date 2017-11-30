---
title: "XPath sum"
parent: "xpath-query-functions"
---
The sum()-function returns the sum of its argument.
This function requires an XPath query as argument. The query must specify one attribute of type Long, Integer, Currency or Float.

```
sum(//Sales.Order/TotalPrice)

```

This query returns the sum of the total prices of all placed orders.

```
sum(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)

```

This query returns the sum of the total prices of all orders placed by a customer named Jansen.
