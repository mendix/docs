---
title: "OQL Order by Clause"
url: /refguide/oql-order-by-clause/
tags: ["studio pro"]
---

## 1 Description

The `ORDER BY` clause specifies the sort order used on columns returned in a `SELECT` statement. Multiple columns can be specified. Columns are ordered in the sequence of the items in the `ORDER BY` clause.

This clause can include items that do not appear in the `SELECT` clause, except when `SELECT DISTINCT` is specified or when a `GROUP BY` clause exists. When `UNION` is used, the column names or aliases must be those specified in the `SELECT` clause of the first part of the query.

## 2 Syntax


The syntax is as follows:

```sql
ORDER BY
	{
		order_by_expression [ ASC | DESC ]
	}
```

### 2.1 order_by_expression

`order_by_expression` specifies an attribute of an entity or an alias from the `FROM` clause to sort on.

### 2.2 ASC

`ASC` specifies that the results must be ordered ascending, from the lowest to the highest value. This is the default sort type.

### 2.3 DESC

`DESC` specifies that the results must be ordered descending, from the highest to the lowest value.

{{% alert color="info" %}}
For details on the default ordering behavior of NULL values, see the [NULL Values Order Behavior](/refguide/ordering-behavior/#null-ordering-behavior) section of *Order By Behavior*.
{{% /alert %}}

## 3 Examples

This query retrieves all customers and returns the first names sorted on the last name, ascending:

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
```

This query retrieves all customers and returns the first and last name sorted on the last name, descending:

```sql
SELECT FirstName + ' ' + LastName FROM Sales.Customer
ORDER BY LastName DESC
```
