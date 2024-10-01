---
title: "OQL Expressions"
url: /refguide/oql-expressions/
---

## Introduction

An expression is either a constant, a function, or any combination of attribute names, constants, and functions connected by operator (or operators), or a subquery.

## Aggregation

Aggregations perform specific calculations on the values of the retrieved column (or columns). The following aggregate functions are possible:

| Expression | Description |
| --- | --- |
| AVG | Average |
| COUNT | Count |
| MAX | Maximum |
| MIN | Minimum |
| SUM | Sum |

When you are using an aggregate expression in the `SELECT` clause, all expressions in the `SELECT` clause have to be either an aggregation *or* part of the `GROUP BY` clause of the query.

## Parameters

Currently, parameters are only supported within OQL queries defined in [datasets](/refguide/data-sets/). To use a defined parameter in a query, use the `$` sign.

### Examples

Examples of correct parameter names are `$weight_range`, `$age`.

If a parameter value is not set in an OQL query, that part of the statement is ignored. For example, in the following query:

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
