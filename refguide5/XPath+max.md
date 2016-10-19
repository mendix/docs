---
title: "XPath max"
category: "refguide5"
space: "Reference Guide 5"
---


The max()-function returns the maximum value of its argument.
This function requires an XPath query as argument. The query must specify an attribute that has a numeric type.

```
max(//Sales.Order/TotalPrice)

```

This query returns the highest total price found in any object.

```
max(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)

```

This query returns the highest total price of an order placed by a customer named Jansen.
