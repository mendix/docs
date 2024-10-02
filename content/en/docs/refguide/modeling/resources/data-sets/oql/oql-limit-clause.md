---
title: "OQL Limit Clause"
url: /refguide/oql-limit-clause/
weight: 60
---

## Description

With the `LIMIT` clause a portion of the result of a query can be returned.

## Syntax

The syntax is as follows:

```sql
[ LIMIT number ] [ OFFSET number ]
```

### LIMIT

`LIMIT` specifies how many rows must be returned.

### OFFSET

`OFFSET` specifies how many rows must be skipped before returning the result rows.

## Examples

This query retrieves the first ten customers, sorted by their last name:

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
LIMIT 10
```

This query retrieves all customers, except the first ten, sorted by their last name:

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
OFFSET 10
```

This query retrieves the 11th to 20th customer, sorted by their last name:

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
LIMIT 10 OFFSET 10
```
