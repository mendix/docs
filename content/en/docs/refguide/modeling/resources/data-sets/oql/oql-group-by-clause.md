---
title: "OQL Group by Clause"
url: /refguide/oql-group-by-clause/
tags: ["studio pro"]
---

## 1 Description

The `GROUP BY` clause will condense all returned rows into a single row that shares the same values for the expressions defined in this clause. The expressions in this clause must exist in the `SELECT` clause of the query. All expressions in the `SELECT` clause which do not exist in the `GROUP BY` clause must be either an aggregation or the result an aggregate function.

## 2 Syntax

The syntax is as follows:

```sql
GROUP BY
	expression [ ,...n ]

[HAVING <constraint>]
```

### 2.1 expression

`expression` specifies the expressions by which values of the rows are grouped.

### 2.2 HAVING \<constraint\>

`HAVING <constraint>` specifies a constraint that must be defined in a `HAVING` clause, when a `GROUP BY` expression is used.

## 3 Examples

This query returns the count of all customers per city:

```sql
SELECT COUNT(Sales.Customer/*)
FROM Sales.Customer
INNER JOIN Sales.Customer/Sales.Customer_Address/Sales.Address
GROUP BY Sales.Address/City
```

This query returns the sum of the total prices of all orders per city:

```sql
SELECT SUM(Sales.Order/TotalPrice)
FROM Sales.Order
INNER JOIN Sales.Order/Sales.Customer_Order/Sales.Customer/Sales.Customer_Address/Sales.Address
GROUP BY Sales.Address/City
```

This query returns the sum of the total prices of all orders per city for which the sum is greater than 1000.00 or the City is Losdun:

```sql
SELECT SUM(Sales.Order/TotalPrice)
FROM Sales.Order
INNER JOIN Sales.Order/Sales.Customer_Order/Sales.Customer/Sales.Customer_Address/Sales.Address
GROUP BY Sales.Address/City
HAVING SUM(Sales.Order/TotalPrice) > 1000.0 OR Sales.Address/City = 'Losdun'
```

