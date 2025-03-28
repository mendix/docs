---
title: "OQL Expressions"
weight: 20
url: /refguide/oql-expressions/
aliases:
    - /refguide/oql-aggregation/
    - /refguide/oql-parameters/

---

## Introduction

An OQL expression is a query building block that returns a value or a list of values. Expressions can be one of the following:

* a constant
* a function
* a system variable
* a subquery
* a combination of attribute names, constants, system variables, functions, and subqueries connected by operators

OQL expressions can be used in `WHERE`, `SELECT`, `GROUP BY`, `UNION`, `HAVING`, and `ON` conditions of `JOIN` clauses. For more information, see [OQL clauses](/refguide/oql-clauses/).

## Aggregations{#aggregates}

Aggregations are functions that reduce a list of values from a retrieved column (or columns) into a single value. They can be used in the following ways:

* as an attribute in a `SELECT` clause
* as a condition in a `HAVING` clause 

When combined with a `GROUP BY` clause, aggregations in `SELECT` clauses can be used with any column normally available, not just those specified in the `GROUP BY` clause. Aggregation is performed over groups separately in this case.

### Syntax

```sql
  COUNT ( * )
  | { COUNT | AVG | MAX | MIN | SUM } ( [ DISTINCT ] attribute_path )
  | STRING_AGG ( attribute_path )
```

Where `attribute_path` is an attribute reachable from entities defined in the `FROM` and `JOIN` clauses.

#### COUNT

Calculates the number of rows in a column. Counting multiple columns using  `COUNT(*)` returns a count of all rows.

When counting a single column, rows with a `NULL` value are not counted.

#### AVG

Calculates the mean of numerical (`INTEGER`, `DECIMAL`, and `LONG`) values. `NULL` values are ignored.

#### MAX and MIN

Returns the maximum or minimum value from a column, with all data types being supported.

* Boolean values are treated as `0` and `1`
* Strings are compared alphabetically

`NULL` values are ignored.

#### SUM

Calculates the sum of numerical values.

`NULL` values are ignored.

#### STRING_AGG

Combines multiple string values from a specified column into a single string. Each value is separated from the next by a specified separator string.

`NULL` is ignored, empty strings are included.

The syntax of STRING_AGG differs from other aggregations and is as follows:

```sql
STRING_AGG ( attribute_path, separator )
```

`separator` is any expression of type `STRING`. 

{{% alert color="info" %}}
This aggregate function is only supported in Java actions.
{{% /alert %}}

### Examples

In the following examples, the `Sales.Product` entity has five objects with `Name` and `Stock` attributes:

```sql
SELECT Name, Stock FROM Sales.Product
```

| Name     | Stock |
|----------|-------|
| Cheese   | 5     |
| Milk     | 54    |
| Tomatoes | 44    |
| Tomatoes | 44    |
| Tomatoes | NULL  |

#### COUNT

The number of rows can be calculated with `COUNT`:

```sql
SELECT COUNT(*) AS ProductCount FROM Sales.Product
```

| ProductCount |
|:------------:|
|      5       |

The same result can be retrieved by using `COUNT` on a single attribute:

```sql
SELECT COUNT(Name) AS NameEntryCount FROM Sales.Product
```

As there is a `NULL` value in the `Stock` column, when using `COUNT` it will be ignored:

```sql
SELECT COUNT(Stock) AS StockEntryCount FROM Sales.Product
```

| StockEntryCount |
|:---------------:|
|        4        |

You can count just unique names with [`DISTINCT`](/refguide/oql-clauses/#distinct):

```sql
SELECT COUNT(DISTINCT Name) AS DistinctNameEntryCount FROM Sales.Product
```

| DistinctNameEntryCount |
|:----------------------:|
|           3            |

#### AVG

The average stock per product entry:

```sql
SELECT AVG(Stock) AS StockAverage FROM Sales.Product
```

| StockAverage  |
|:-------------:|
|     36.75     |

There are duplicate values in the `Stock` column, which can be ignored by using `DISTINCT`. The query below returns the average unique stock:

```sql
SELECT AVG(Distinct Stock) AS DistinctStockAverage FROM Sales.Product
```

| DistinctStockAverage |
|:--------------------:|
|        33.333        |

#### MAX

The most stock of any one product:

```sql
SELECT MAX(Stock) as StockMax FROM Sales.Product
```

| StockMax |
|:--------:|
|    54    |

To return the name(s) of the product(s) with the highest stock level you have to use a subquery. The subquery returns the maximum stock number, which is then compared to each product's stock in the `WHERE` clause:

```sql
SELECT HighestStockProductName FROM Sales.Product
WHERE Stock = (SELECT MAX(P.Stock) FROM Sales.Product P)
```

| HighestStockProductName |
|:-----------------------:|
|          Milk           |

#### SUM

The sum of all products in stock:

```sql
SELECT Sum(Stock) AS StockSum FROM Sales.Product
```

| StockSum |
|:--------:|
|   147    |

The sum of unique product entries:

```sql
SELECT Sum(DISTINCT Stock) AS DistinctStockSum FROM Sales.Product
```

| DistinctStockSum |
|:----------------:|
|       103        |

#### STRING_AGG

You can aggregate product names into a single list:

```sql
SELECT STRING_AGG(Name, ',') as ProductNames FROM Sales.Product
```

|         ProductNames          |
|:-----------------------------:|
| Cheese,Milk,Tomatoes,Tomatoes |

## Parameters

Parameters are external variables that are referenced to by name in an OQL query. To use a defined parameter in a query, prepend the `$` sign to the name of the parameter. 

If you use undefined in `IN` and `LIKE` comparison expressions, the condition always returns `true`. In other cases, undefined parameters cause an exception.

{{% alert color="warning" %}} Parameters are only supported within OQL queries defined in [data sets](/refguide/data-sets/) or inside Java actions using the [Mendix Runtime API](/apidocs-mxsdk/apidocs/runtime-api/). They can not be used in [view entities](/refguide/view-entities/).{{% /alert %}}

### Examples

#### Defined Parameters

In these examples the valid parameters `$age` and `$limit`, both of type `INTEGER`, have been defined.

The following query uses the parameter in the `WHERE` clause, returning a result set with person names whose age is higher than the value specified in the `$age` parameter.

```sql
SELECT Name
FROM Sales.Person
WHERE
    Age > $age
```

The following query will return a limited number of rows, limited by the value of the `$limit` parameter in the `LIMIT` clause.

```sql
SELECT Name
FROM Sales.Person
LIMIT $limit
```

#### Undefined Parameters

As an example, take a query with two comparisons using the parameter `$param`:

```sql
SELECT Name
FROM Sales.Person
WHERE
    Age > $param 
    OR
    Job = 'Sales'
```

If the value of `$param` is not provided as a parameter to the query, the query will be equivalent to:

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

If you use an undefined parameter used in a `LIMIT`, will throw an exception.

```sql
SELECT Name
FROM Sales.Person
ORDER BY LastName
LIMIT $param
```
