---
title: "XPath sum"
parent: "XPath+Query+Functions"
space: "Reference Guide 5"
---


The sum()-function returns the sum of its argument.
This function requires an XPath query as argument. The query must specify an attribute that has a numeric type.

```
sum(//Sales.Order/TotalPrice)

```

This query returns the sum of the total prices of all placed orders.

```
sum(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)

```

This query returns the sum of the total prices of all orders placed by a customer named Jansen.
