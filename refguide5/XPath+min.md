---
title: "XPath min"
parent: "XPath+Query+Functions"
space: "Reference Guide 5"
---


The min()-function returns the minimum value of its argument.
This function requires an XPath query as argument. The query must specify an attribute that has a numeric type.

```
min(//Sales.Order/TotalPrice)

```

This query returns the lowest total price found in any object.

```
min(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)

```

This query returns the lowest total price of an order placed by a customer named Jansen.
