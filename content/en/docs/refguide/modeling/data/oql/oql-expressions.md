---
title: "OQL Expressions"
url: /refguide/oql-expressions/
---

## Introduction

An expression is a query building block that returns a value or a list of values. Constants, functions, combinations of attribute names, constants, and functions connected by operators, or a . They can be used in `WHERE`, `SELECT`, `GROUP BY` and `JOIN` clauses.

## Aggregation

Aggregations are functions that reduce a list of values from a retrieved column (or columns) into a singular value. They can be used as an attribute in a `SELECT` clause or in a condition in `HAVING`. 

When combined with a `GROUP BY` clause, aggregations can target any column normally available in `SELECT`, not just those specified in the `GROUP BY` clause. Aggregation is performed over groups separately.

## Syntax

```sql
  COUNT ( { * | attribute_path } )
  | { AVG | MAX | MIN | SUM } ( attribute_path )
```
Where `attribute_path` is an attribute reachable from entities defined in `FROM` and `JOIN`.

### AVG

Calculates the mean of numerical (`INTEGER`, `DECIMAL`, `LONG`) values. Null values are ignored.

```sql
AVG ( attribute_path )
```

### COUNT

Calculates the number of rows in a column (or columns). Counting multiple columns with `COUNT(*)` returns count of all rows.
When counting a single column, rows that are have the `NULL` value are not counted.

### MAX and MIN

Returns the maximum or minimum value from a column, with all data types being supported. Boolean values are treated as `0` and `1`, strings are compared alphanumerically. Null values are ignored.

### SUM

Calculates the sum of numerical values. Null values are ignored.

### STRING_AGG

Combines multiple strings into a single value. Syntax differs from other aggregations:

```sql
STRING_AGG
(
    attribute_path, separator
)
```
Where `separator` is any expression of type `STRING`. 

### Examples



## Parameters

Parameters are external variables that are referenced by name in an OQL query. To use a defined parameter in a query, prepend the `$` sign to the name of the parameter. 

Undefined parameters used in comparisons, `IN` and `LIKE` expressions cause the condition to always return true. In other cases, undefined parameters cause an exception.

{{% alert color="warning" %}} Parameters are only supported within OQL queries defined in [data sets](/refguide/data-sets/) or inside java actions. They can not be used in View entities {{% /alert %}}

### Examples

Assume valid parameters defined with names `$age` and `$limit`, both of type `INTEGER`. This query uses the parameter in the `WHERE` clause, returning a result set
with person names whose age is higher than the value specified in the `$age` parameter.

```sql
SELECT Name
FROM Module.Person
WHERE
    Age > $age
```

This query will return a limited number of rows, limited by the value of the `$limit` parameter in the `LIMIT` clause.

```sql
SELECT Name
FROM Module.Person
LIMIT $limit
```

#### Undefined parameters

Take a query with two comparisons and a use of the parameter `$param`:
```sql
SELECT Name
FROM Module.Person
WHERE
    Age > $param 
    AND
    Active = true
```

If the value of `$param` is not provided, the query will be equivalent to:

```sql
SELECT Name
FROM Module.Person
WHERE
    Active = true
```

The example above is different from the case where the value of `$param` is provided, but is `NULL`. In that case, the query will be equivalent to:

```sql
SELECT Name
FROM Module.Person
WHERE
    Age > NULL
    AND
    Active = true
```

However, an undefined parameter used in a `LIMIT`, will throw an exception.

```sql
SELECT Name
FROM Module.Person
ORDER BY LastName
LIMIT $param
```
