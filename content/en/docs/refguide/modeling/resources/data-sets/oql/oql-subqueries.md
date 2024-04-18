---
title: "OQL Subqueries"
url: /refguide/oql-subqueries/
weight: 70
tags: ["oql", "studio pro"]
---

## 1 Description

A subquery is a nested SELECT query inside a SELECT query. Subqueries can be used in:
- A `SELECT` clause
- A `FROM` clause
- A `WHERE` clause
- A `HAVING` clause combined with `GROUP BY`

A subquery should always be placed in parentheses.

## 2 Subquery in SELECT

Example:

```
SELECT
    City,
    ZipCode,
    (SELECT COUNT(*) FROM Module.Address WHERE Module.Address.ZipCode = ZipCode.ZipCode) AS NumberOfAddresses
FROM
    Module.ZipCode AS ZipCode
```

If a subquery is used in a `SELECT` clause, it should return exactly one column and at most one row. Zero rows are allowed. In that case, the value is replaced with `NULL`.

The subquery can refer to attributes of the entities and subqueries in `FROM`. Those attributes can be referenced only by name, not by alias. Entities and subqueries in from, on the other hand, can only be referenced by alias, if there is one. They can be referenced by name only if there is no alias. 
To avoid ambiguity, it is recommended to always refer to attributes with corresponding entity names in format `<ModuleName>.<EntityName>.<AttributeName>` if there is no alias or `<Alias>.<AttributeName>` if there is an alias.

## 3 Subquery in FROM

Example:

```
SELECT
    ZipCode.City,
    ZipCode.ZipCode,
    AddressStats.AddressCount,
    AddressStats.FirstHouseYear
FROM
    Module.ZipCode AS ZipCode
    INNER JOIN (
        SELECT
           COUNT(*) AS AddressCount,
            MIN(YearBuilt) AS FirstHouseYear,
            ZipCode
        FROM
            Module.Address
        GROUP BY ZipCode
    ) AS AddressStats
    ON ZipCode.ZipCode = AddressStats.ZipCode
```

A subquery can be used in `FROM` in the same manner as an entity name. Subquery in `FROM` can return multiple columns and multiple rows.

In contrast with subquery in `SELECT`, it cannot contain references to other entities and subqueries in `FROM`.

## 4 Subquery in WHERE

There are two ways to use a subquery in `WHERE`: as a value and as a collection.

### 4.1 Scalar subqueries

A Scalar subquery is a subquery that returns exactly one row and exactly one column. In that case, its result can be considered a value. It can be used in `WHERE` clause with comparison operators `=`, `!=`, `<`, `<=`, `>`, `>=`.

Example:

```
SELECT
    *
FROM
    Module.House AS House
WHERE
    House.Price < (SELECT AVG(Price) FROM Module.House)
```

### 4.2 Multirow subqueries

A multirow subquery is a subquery that can have more than one row. If a subquery is used in `WHERE`, it should always contain one column. Such subquery can be referenced as a collection using `IN` and `EXISTS` keywords.

Examples:

```
SELECT
    *
FROM
    Module.Venue AS Venue
WHERE
    Venue.Name IN (
        SELECT
            VenueName
        FROM
            Module.Event
        WHERE
            EventDate = '2025-04-01'
    )
```

```
SELECT
    *
FROM
    Module.Venue AS Venue
WHERE
    EXISTS (
        SELECT
            VenueName
        FROM
            Module.Event
        WHERE
            EventDate = '2025-04-01'
            AND
            VenueName = Venue.VenueName
    )
```

## 4 Subquery in HAVING

A subquery can also be used in a `HAVING` clause similarly to how it is used in `WHERE`. The difference is that only attributes and aggregates from the query can be referred in the `HAVING` subquery.

Example:

```
SELECT
    ZipCode,
    AVG(Price)
FROM
    Module.House AS House
GROUP BY
    ZipCode
HAVING
    AVG(Price) < (SELECT AVG(Price) FROM Module.House)
```
