---
title: "OQL Limit Clause"
url: /refguide8/oql-limit-clause/
---

With the limit clause a portion of the result of a query can be returned.

The syntax is as following:

```sql
[ LIMIT number ] [ OFFSET number ]
```

**LIMIT**
Specifies how many rows must be returned.

**OFFSET**
Specifies how many rows must be skipped before returning the result rows.

{{% alert color="info" %}}

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
LIMIT 10
```

This query retrieves the first ten customers, sorted by their last name.

{{% /alert %}}{{% alert color="info" %}}

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
OFFSET 10
```

This query retrieves all customers, except the first ten, sorted by their last name.

{{% /alert %}}{{% alert color="info" %}}

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
LIMIT 10 OFFSET 10
```

This query retrieves the 11th to 20th customer, sorted by their last name.

{{% /alert %}}
