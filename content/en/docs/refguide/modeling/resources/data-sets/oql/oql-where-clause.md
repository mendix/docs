---
title: "OQL Where Clause"
url: /refguide/oql-where-clause/
tags: ["studio pro", "queries", "where"]
---

## 1 Description

The `WHERE` clause specifies how the data being retrieved must be constrained.

## 2 Syntax

The syntax is as follows:

```sql
WHERE <constraint>
```

`<constraint>` is an expression for which the value always equals true. Expressions consist of simple comparisons using operators, functions, keywords or system variables.

For more information, see [OQL Expressions](/refguide/oql-expressions/).

## 3 Examples

This query retrieves all customers whose name is equal to "Jansen":

```sql
SELECT FirstName FROM Sales.Customer
WHERE LastName = 'Jansen'
```

This query retrieves all customers who live in "Rotterdam":

```sql
SELECT FirstName FROM Sales.Customer
INNER JOIN Sales.Customer/Sales.Customer_Address/Sales.Address
WHERE Sales.Address/City = 'Rotterdam'
```
