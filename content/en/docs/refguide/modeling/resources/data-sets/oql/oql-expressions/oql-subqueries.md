---
title: "OQL Subqueries"
url: /refguide/oql-subqueries/
---

## Description

A subquery is a nested SELECT query inside certain clauses of a SELECT query. Subqueries can be used in a:

* `SELECT` clause
* `FROM` clause
* `WHERE` clause
* `HAVING` clause combined with `GROUP BY`

A subquery must always be placed in parentheses.

## Subquery in SELECT

Example:

```sql
SELECT
    City,
    ZipCodeValue AS ZipCodeAlias,
    (SELECT COUNT(*) FROM Module.Address WHERE Module.Address.ZipCode = ZipCodeEntity.ZipCodeValue) AS NumberOfAddresses
FROM
    Module.ZipCode AS ZipCodeEntity
```

If a subquery is used in a `SELECT` clause, it should return exactly one column and at most one row. If it returns no rows, the value is replaced with `NULL`.

The subquery can refer to attributes of other entities and subqueries in the main query's `FROM` clause. Those attributes can be referenced only by name, not by alias (In the example above, attribute `ZipCodeValue` has an alias in the main query, but it is referenced by name in the subquery).

Other entities and subqueries in the main query's `FROM` clause can only be referenced by alias, if there is one. If no alias is set, they can be referenced by name (In the example above, entity `Module.ZipCode` has an alias in the main query, and that alias is used in the subquery).

To avoid ambiguity, it is recommended to always refer to attributes with corresponding entity names in the format `<ModuleName>.<EntityName>.<AttributeName>` if there is no alias or `<Alias>.<AttributeName>` if there is an alias.

## Subquery in FROM

Example:

```sql
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

A subquery can be used in the `FROM` clause of the main query in the same manner as an entity name. When used in a `FROM` clause, a subquery can return multiple columns and multiple rows.

In contrast with a subquery in a `SELECT` clause, a subquery in a `FROM` clause cannot contain references to other entities and subqueries declared in the main query's `FROM` clause.

## Subquery in WHERE

There are two ways to use a subquery in a `WHERE` clause—as a value and as a collection.

### Value Subqueries

A value subquery is a subquery that returns exactly one row and exactly one column. In that case, its result can be considered a value. It can be used in a `WHERE` clause with the comparison operators `=`, `!=`, `<`, `<=`, `>`, `>=`.

Example:

```sql
SELECT
    *
FROM
    Module.House AS House
WHERE
    House.Price < (SELECT AVG(Price) FROM Module.House)
```

### Collection Subqueries

A collection subquery is a subquery that can have more than one row. If a subquery is used in a `WHERE` clause, it must always contain one column. Such a subquery can be referenced as a collection using the `IN` and `EXISTS` keywords.

Examples:

```sql
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

```sql
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

## Subquery in HAVING

A subquery can also be used in a `HAVING` clause in a similar way to a `WHERE` clause. The difference is that only attributes and aggregates from the query can be referred to in the `HAVING` subquery.

Example:

```sql
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
