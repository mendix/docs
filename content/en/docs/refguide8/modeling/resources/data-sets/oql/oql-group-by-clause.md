---
title: "OQL Group by Clause"
url: /refguide8/oql-group-by-clause/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/oql-group-by-clause.pdf).
{{% /alert %}}

The GROUP BY clause will condense all returned rows into a single row that shares the same values for the expressions defined in this clause. The expressions in this clause must exist in the SELECT clause of the query. All expressions in the SELECT clause which do not exist in the GROUP BY clause must be either an aggregation or the result an aggregate function.

The syntax is as following:

```
GROUP BY
    expression [ ,...n ]

[HAVING <constraint>]
```

**expression**
Specifies the expressions by which values of the rows are grouped.

`HAVING <constraint>`
Specifies a constraint. When a GROUP BY expression is used, constraints must be defined in a HAVING clause.

{{% alert color="info" %}}

```
SELECT COUNT(Sales.Customer/*)
FROM Sales.Customer
INNER JOIN Sales.Customer/Sales.Customer_Address/Sales.Address
GROUP BY Sales.Address/City
```

This query returns the count of all customers per city.

{{% /alert %}}{{% alert color="info" %}}

```
SELECT SUM(Sales.Order/TotalPrice)
FROM Sales.Order
INNER JOIN Sales.Order/Sales.Customer_Order/Sales.Customer/Sales.Customer_Address/Sales.Address
GROUP BY Sales.Address/City
```

This query returns the sum of the total prices of all orders per city.

{{% /alert %}}{{% alert color="info" %}}

```
SELECT SUM(Sales.Order/TotalPrice)
FROM Sales.Order
INNER JOIN Sales.Order/Sales.Customer_Order/Sales.Customer/Sales.Customer_Address/Sales.Address
GROUP BY Sales.Address/City
HAVING SUM(Sales.Order/TotalPrice) > 1000.0 OR Sales.Address/City = 'Losdun'
```

This query returns the sum of the total prices of all orders per city for which the sum is greater than 1000.00 or the City is Losdun.

{{% /alert %}}
