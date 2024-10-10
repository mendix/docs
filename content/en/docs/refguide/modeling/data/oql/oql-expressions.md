---
title: "OQL Expressions"
url: /refguide/oql-expressions/
---

## Introduction

An expression is a query building block that returns a value or a list of values. Expressions can be a constant, function, combination of attribute names, constants, and functions connected by operators, or a subquery. They can be used in `WHERE`, `SELECT`, `GROUP BY`, `UNION` and `JOIN` clauses.

## Aggregation

Aggregations are functions that reduce a list of values from a retrieved column (or columns) into a singular value. They can be used as an attribute in a `SELECT` clause or in a condition in `HAVING`. 

When combined with a `GROUP BY` clause, aggregations can be used with any column normally available in `SELECT`, not just those specified in the `GROUP BY` clause. Aggregation is performed over groups separately in this case.

## Syntax

```sql
  COUNT ( * )
  | { COUNT | AVG | MAX | MIN | SUM | STRING_AGG } ( [ DISTINCT ] attribute_path )
```
Where `attribute_path` is an attribute reachable from entities defined in `FROM` and `JOIN`.

### AVG

Calculates the mean of numerical (`INTEGER`, `DECIMAL`, `LONG`) values. Null values are ignored.

### COUNT

Calculates the number of rows in a column (or columns). Counting multiple columns with `COUNT(*)` returns count of all rows.
When counting a single column, rows with a `NULL` value are not counted.

### MAX and MIN

Returns the maximum or minimum value from a column, with all data types being supported. Boolean values are treated as `0` and `1`, strings are compared alphabetically. Null values are ignored.

### SUM

Calculates the sum of numerical values. Null values are ignored.

### STRING_AGG

Combines multiple strings into a single value and adds a separator string in between. `NULL` is ignored, empty strings are included. Syntax differs from other aggregations:

```sql
STRING_AGG ( attribute_path, separator )
```
Where `separator` is any expression of type `STRING`. 

{{% alert color="info" %}}
This aggregate function is currently only supported in Java actions.
{{% /alert %}}

### Examples

Let's assume that `Sales.Product` entity has 4 objects with `Name` and `Stock` attributes:

```sql
SELECT Name, Stock FROM Sales.Product
```

| Name     | Stock |
|----------|-------|
| Cheese   | 5     |
| Milk     | 54    |
| Tomatoes | 44    |
| Tomatoes | NULL  |

The number of rows can be calculated with `COUNT`:
```sql
SELECT COUNT(*) AS ProductCount FROM Sales.Product
```
| ProductCount |
|:------------:|
|      4       |

The same result can be retrieved by using `COUNT` on a single table:
```sql
SELECT COUNT(Name) AS ProductCount FROM Sales.Product
```

As there is a `NULL` value in the `Stock` column, when using `COUNT` it will be ignored:
```sql
SELECT COUNT(Stock) AS ProductCount FROM Sales.Product
```
| ProductCount |
|:------------:|
|      3       |

The sum of all products in stock:
```sql
SELECT Sum(Stock) AS ProductCount FROM Sales.Product
```
| ProductCount |
|:------------:|
|     103      |

The average stock per product:
```sql
SELECT AVG(Stock) AS ProductCount FROM Sales.Product
```
| ProductCount |
|:------------:|
|    34.333    |

The highest stock number:
```sql
SELECT MAX(Stock) as StockMax FROM Sales.Product
```
| StockMax |
|:--------:|
|    54    |

Selecting the product with the most stock requires the use of a subquery. The subquery returns the maximum stock number, which is then compared to each product's stock in the `WHERE` clause:
```sql
SELECT Name FROM Sales.Product
WHERE Stock = (SELECT MAX(P.Stock) FROM Sales.Product P)
```
| Name |
|:----:|
| Milk |

Product names can be aggregated into a single list:
```sql
SELECT STRING_AGG(Name, ',') as ProductNames FROM Sales.Product
```
|         ProductNames          |
|:-----------------------------:|
| Cheese,Milk,Tomatoes,Tomatoes |

#### Distinct

There are duplicate values in the `Name` column, which might not want to be counted separately. `DISTINCT` can be used to get the number of unique rows:
```sql
SELECT COUNT(DISTINCT Name) AS ProductCount FROM Sales.Product
```
| ProductCount |
|:------------:|
|      3       |


## Parameters

Parameters are external variables that are referenced by name in an OQL query. To use a defined parameter in a query, prepend the `$` sign to the name of the parameter. 

Undefined parameters used in comparisons, `IN` and `LIKE` expressions cause the condition to always return true. In other cases, undefined parameters cause an exception.

{{% alert color="warning" %}} Parameters are only supported within OQL queries defined in [data sets](/refguide/data-sets/) or inside java actions. They can not be used in View entities {{% /alert %}}

### Examples

Assume valid parameters defined with names `$age` and `$limit`, both of type `INTEGER`. This query uses the parameter in the `WHERE` clause, returning a result set
with person names whose age is higher than the value specified in the `$age` parameter.

```sql
SELECT Name
FROM Sales.Person
WHERE
    Age > $age
```

This query will return a limited number of rows, limited by the value of the `$limit` parameter in the `LIMIT` clause.

```sql
SELECT Name
FROM Sales.Person
LIMIT $limit
```

#### Undefined parameters

As an example, take a query with two comparisons and a use of the parameter `$param`:
```sql
SELECT Name
FROM Sales.Person
WHERE
    Age > $param 
    OR
    Job = 'Sales'
```

If the value of `$param` is not provided, the query will be equivalent to:

```sql
SELECT Name
FROM Sales.Person
WHERE
    TRUE
    OR
    Job = 'Sales'
```

The example above is different from the case where the value of `$param` is provided, but is `NULL`. In that case, the query will be equivalent to:

```sql
SELECT Name
FROM Sales.Person
WHERE
    Age > NULL
    OR
    Job = 'Sales'
```

However, an undefined parameter used in a `LIMIT`, will throw an exception.

```sql
SELECT Name
FROM Sales.Person
ORDER BY LastName
LIMIT $param
```
