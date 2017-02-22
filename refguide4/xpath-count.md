---
title: "XPath count"
parent: "xpath-query-functions"
space: "Reference Guide 4"
---
The count()-function counts all objects retrieved by the enclosed query and returns the value as an integer.

```
count(//Sales.Order)
```

This query returns a count of all placed orders.

```
count(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen'])
```

This query returns a count of all orders placed by a customer named Jansen.
