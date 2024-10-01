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

Parameters are external values that are referenced by name in an OQL query. To use a defined parameter in a query, prepend the `$` sign to the name of the parameter. 

{{% alert color="warning" %}} Parameters are only supported within OQL queries defined in [data sets](/refguide/data-sets/). They can not be used in View entities {{% /alert %}}

Undefined parameters used in comparisons, `IN` and `LIKE` expressions cause the condition to always return true. In other cases, undefined parameters cause an exception.

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
