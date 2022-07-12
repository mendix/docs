---
title: "OQL Limit Clause"
url: /refguide/oql-limit-clause/
tags: ["studio pro"]
---

## 1 Description

With the `LIMIT` clause a portion of the result of a query can be returned.

## 2 Syntax

The syntax is as follows:

```sql
[ LIMIT number ] [ OFFSET number ]
```

### 2.1 LIMIT

`LIMIT` specifies how many rows must be returned.

### 2.2 OFFSET

`OFFSET` specifies how many rows must be skipped before returning the result rows.

## 3 Examples

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