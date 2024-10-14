---
title: "OQL Clauses"
url: /refguide/oql-clauses/
weight: 10
---

## Introduction

The Mendix Object Query Language (OQL) is a relational query language inspired by [SQL](https://en.wikipedia.org/wiki/Sql). The major advantage of OQL is that it uses Mendix entity and association names instead of actual database table names. That way, it is possible to create queries that use names from the data model of your Mendix app without thinking of how that data model is represented in the database.

In addition, OQL can use predefined relations (associations) to easily join objects without having to calculate which columns should be coupled. Despite these differences, many SQL keywords also work in OQL.

These are some examples of OQL queries:

* `SELECT LastName FROM Sales.Customer` – retrieves the names of all customers
* `SELECT FirstName FROM Sales.Customer WHERE LastName = 'Jansen'` – retrieves the first name of all customers with name "Jansen"
* `SELECT SUM(TotalAmount) FROM Sales."Order" WHERE IsPaid = true` – retrieves the sum of the total prices of all paid orders (`Order` needs to be wrapped in quotes, see the [Reserved Words](#reserved-oql-words) section below)

{{% alert color="info" %}}
OQL queries do not take security into account out-of-the-box. This means that you can use OQL to manually define custom security expressions. In some cases, handling security yourself using OQL—instead of using the out-of-the-box security of XPath—may result in faster queries.
{{% /alert %}}

Try your OQL example online with the [OQL Playground](https://service.mendixcloud.com/p/OQL) demo app. 

## OQL Clauses

OQL clauses are reserved words that structure an OQL query into sections. Each section, and therefore clause, is responsible for a different aspect of the query. Every query has 2 mandatory clauses: `SELECT` and `FROM`. For example:

```sql
SELECT LastName, Address
FROM Sales.Customer
```

These basic clauses define which data needs to be retrieved and which entity or entities should be used as a source. Other clauses are not mandatory. They are used to specify limitations and other rules on the data being retrieved.

Other clauses are not mandatory, but if used, they should be present in a fixed order:

1. `SELECT`
2. `FROM`
3. `WHERE`
4. `GROUP BY`
5. `HAVING` (allowed only in combination with `GROUP BY`)
6. `ORDER BY`
7. `LIMIT`
8. `OFFSET`

### `SELECT` clause

The `SELECT` clause specifies which entity attributes or other specified data must be retrieved. The `SELECT` clause consists of the term `SELECT` and one or more expressions. These expressions must be separated by commas. Each expression defines a column in the result. Each expression can have an alias, which will be the name of the column in the result.

#### Syntax

The syntax is as follows:

```sql
SELECT [ DISTINCT ]
	{
			*
		| { entity_name | from_alias }.*
		| { expression [ [ AS ] column_alias ] } [ ,...n ]
	}
```
#### Selecting particular attributes

A simple way to define what is to be retrieved is to specify particular attributes of an entity. For example:

```sql
SELECT FirstName AS FName, LastName AS LName
FROM Sales.Customer
```

It is possible to specify aliases for attributes: `FirstName AS FName`. The keyword `AS` is not mandatory, so the following query is equivalent to the one above:

```sql
SELECT FirstName FName, LastName LName
FROM Sales.Customer
```

Alias is an alternative name to replace the column name in the result. When the name attribute is retrieved, the result column is "Name". With an alias, you can specify another result column name, like "Customer_Name". An alias cannot contain spaces.


{{% alert color="info" %}}
In some scenarios, aliases in `FROM` are mandatory. Aliases are mandatory when defining a view entity.
{{% /alert %}}

#### Selecting all attributes using `*`

`*` (asterisk) specifies that all attributes from all entities in the `FROM` clause should be returned. `entity_name/*` and `from_alias/*` specify that all attributes of the specified entity or expression of the `FROM` clause should be returned. `entity_name` can be optionally put in double quotes. If the entity name is a [reserved OQL word](/refguide/oql/#reserved-oql-words) (like `Order` or `Group`), double quotes are mandatory.

##### Examples

This query returns all attributes of `Sales.Customer`

```sql
SELECT *
FROM Sales.Customer
```

This query returns all attributes of objects of `Sales.Customer` entity all attributes of associated objects of `Sales.Request` (see TODO)

```sql
SELECT *
FROM Sales.Customer
JOIN Sales.Customer/Sales.Customer_Request/Sales.Request
```

This query returns all attributes of objects of `Sales.Request` that are associated to `Sales.Customer` objects (see TODO)

```sql
SELECT Sales.Request/*
FROM Sales.Customer
JOIN Sales.Customer/Sales.Customer_Request/Sales.Request
```

This query is equivalent to the previous one, but it uses table aliases

```sql
SELECT Req/*
FROM Sales.Customer Cust
JOIN Cust/Sales.Customer_Request/Sales.Request Req
```

#### Selecting distinct values with `DISTINCT`

TODO: `DISTINCT` with NULL

The keyword `DISTINCT` specifies that duplicate rows must not be included in the result.

Let's assume that `Sales.Customer` entity has 4 objects.

```sql
SELECT FirstName FName, LastName LName
FROM Sales.Customer
```

| FName | LName |
| ----- | ----- |
| John  | Doe   |
| Jane  | Doe   |
| Jane  | Doe   |
| Jane  | Moose |

Then the next query will result only in unique last names

```sql
SELECT DISTINCT LastName LName
FROM Sales.Customer
```

| LName |
| ----- |
| Doe   |
| Moose |

If multiple attributes are selected, the result is all unique combinations that are present ion the database:

```sql
SELECT DISTINCT FirstName FName, LastName LName
FROM Sales.Customer
```

| FName | LName |
| ----- | ----- |
| John  | Doe   |
| Jane  | Doe   |
| Jane  | Moose |

`DISTINCT` can also be combined with `*`. In the simple examples below, when an entity name is specified in `FROM`, adding `DISTINCT` does not affect the result because the entity always contains the unique column `ID`. In more complex cases, `SELECT DISTINCT *` can become useful.

```sql
SELECT DISTINCT *
FROM Sales.Customer
```

| ID              | FName | LName |
| --------------- | ----- | ----- |
| 562949953421521 | John  | Doe   |
| 562949953421683 | Jane  | Doe   |
| 562949953421777 | Jane  | Doe   |
| 562949953421923 | Jane  | Moose |

If used, `DISTINCT` should follow directly after `SELECT`. It is not possible to request only some attributes to be distinct.

#### Expressions

It is possible to use more complex expressions in `SELECT`. That is explained in detail in [Expressions](TODO). Here are some examples:

It is possible to use a function of an attribute. For instance:

```sql
SELECT LastName Name, LENGTH(LastName) NameLength
FROM Sales.Customer
```

| Name  | NameLength |
| ----- | ---------- |
| Doe   | 3          |
| Doe   | 3          |
| Doe   | 3          |
| Moose | 5          |

It is possible to use an aggregate function:

```sql
SELECT COUNT(*) AS CustomerCount
FROM Sales.Customer
```

| CustomerCount |
| ----------    |
| 5             |

Another possibility is subqueries. A subquery can refer to other tables and expressions in `FROM`.

```sql
SELECT
	Req/Number AS RequestNumber,
	(
		SELECT COUNT(*)
		FROM Sales.Customer Cust
		WHERE Cust/LastName = Req/CustomerName
	) AS CustomerCount
FROM Sales.Request Req
```

| RequestNumber | CustomerCount |
| ------------- | ------------- |
| 1             | 1             |
| 2             | 1             |
| -1            | 0             |

{{% alert color="info" %}}
Please note that if you use a subquery as an expression in `FROM`, then such subquery should always return  a single column, and the number of rows should be at most one. If the subquery returns more than one row or a number of columns different than one, that will lead to an exception during runtime.
{{% /alert %}}

### `FROM` clause

The `FROM` clause specifies the entities or other source from which the data must be retrieved. This clause starts with the `FROM` keyword, followed by an entity name. To select data from other entities, add these entities via the `JOIN` keywords. This syntax is a little more strict than the official `SQL FROM` clause syntax.

#### Syntax

This is an example of the full syntax:

```sql
FROM
	{
		entity_name | ( sub_oql_query )
	}
	[ [ AS ] from_alias ]

	{
		{ INNER | { { LEFT | RIGHT | FULL } [ OUTER ] } } JOIN
		entity_path | entity_name | ( sub_oql_query ) [ [ AS ] from_alias ]
		[ ON <constraint> ]
	} [ ,...n ]
```

#### `SELECT` from one entity

An example of a simple select from one entity:

```sql
SELECT Sales.Customer/LastName
FROM Sales.Customer
```

An alias can be used to replace entity name:

```sql
SELECT Cust/LastName
FROM Sales.Customer Cust
```

#### Select from multiple entities

It is possible to specify multiple tables in `FROM`. For instance, Let's say there are 2 entities, `Sales.Customer` and `Sales.Request`:

```sql
SELECT *
FROM Sales.Customer
```
| ID              | FirstName | LastName |
| --------------- | -----     | -----    |
| 562949953421521 | John      | Doe      |
| 562949953421923 | Jane      | Moose    |
| 562949953422131 | Jim       | Elk      |

```sql
SELECT *
FROM Sales.Request
```
| ID               | CustomerName | Number |
| ---------------- | ------------ | ------ |
| 1688849860264073 | Doe          | 1      |
| 1688849860264231 | Moose        | 2      |
| 1688849860264654 | Caribou      | -1     |

We can select data from both entities at once. As a result, we get all attributes of both entities. Every object of the first entity is combined with every object of the second entity, which results in a cartesian product of objects of the two entities.

```sql
SELECT *
FROM Sales.Customer, Sales.Request
```
| sales$customer.ID | FirstName | LastName | sales$request.ID | CustomerName | Number |
| ---------------   | -----     | -----    | ---------------- | ------------ | ------ |
| 562949953421521   | John      | Doe      | 1688849860264073 | Doe          | 1      |
| 562949953421923   | Jane      | Moose    | 1688849860264073 | Doe          | 1      |
| 562949953422131   | Jim       | Elk      | 1688849860264073 | Doe          | 1      |
| 562949953421521   | John      | Doe      | 1688849860264231 | Moose        | 2      |
| 562949953421923   | Jane      | Moose    | 1688849860264231 | Moose        | 2      |
| 562949953422131   | Jim       | Elk      | 1688849860264231 | Moose        | 2      |
| 562949953421521   | John      | Doe      | 1688849860264654 | Caribou      | -1     |
| 562949953421923   | Jane      | Moose    | 1688849860264654 | Caribou      | -1     |
| 562949953422131   | Jim       | Elk      | 1688849860264654 | Caribou      | -1     |

It is possible to specify conditions in `WHERE` (see more details and examples in [`WHERE` clause](TODO))

```sql
SELECT *
FROM Sales.Customer Cust, Sales.Request Req
WHERE Cust.LastName = Req.CustomerName
```
| sales$customer.ID | FirstName | LastName | sales$request.ID | CustomerName | Number |
| ---------------   | -----     | -----    | ---------------- | ------------ | ------ |
| 562949953421521   | John      | Doe      | 1688849860264073 | Doe          | 1      |
| 562949953421923   | Jane      | Moose    | 1688849860264231 | Moose        | 2      |

It is possible to specify columns in `SELECT`. To avoid ambiguity in case opf duplicate attribute names, it is possible to specify entity name or alias. Respectively, `<module>.<entity>/<attribute>` or `<alias>/<attribute>`. It is possible to retrieve alll attributes of a particular entity using `<alias>/*`
```sql
SELECT Cust/FirstName, Req/*
FROM Sales.Customer Cust, Sales.Request Req
WHERE Cust.LastName = Req.CustomerName
```
| FirstName | sales$request.ID | CustomerName | Number |
| -----     | ---------------- | ------------ | ------ |
| John      | 1688849860264073 | Doe          | 1      |
| Jane      | 1688849860264231 | Moose        | 2      |

#### Select from multiple tables using `JOIN`

OQL supports `JOIN` syntax, which is similar to SQL. There are 4 main types of `JOIN`:
- `INNER JOIN` or simply `JOIN`
- `LEFT JOIN` or `LEFT OUTER JOIN`
- `RIGHT JOIN` or `RIGHT OUTER JOIN`
- `FULL JOIN` or `FULL OUTER JOIN`

In addition to standard SQL syntax, OQL supports joins over associations.

The syntax is as follows:

	{ INNER | { { LEFT | RIGHT | FULL } [ OUTER ] } } JOIN
	entity_path | entity_name | ( sub_oql_query ) [ [ AS ] from_alias ]
	[ ON <constraint> ]

##### entity_path

`entity_path` specifies the entity to join and the path from an earlier defined entity in the `FROM` clause to this entity. With `entity-path` the `ON` condition is optional.

The example path `Crm.Customer/Crm.Customer_Address/Crm.Address` defines a path from the entity **Crm.Customer** to a new entity **Crm.Address**.

Similar to `entity_name`, double quotes can be used.

#### `JOIN` types

##### `INNER JOIN`

An `INNER JOIN` is the most common join operation between entities and represents the default join type. The query compares each row of entity A with each row of entity B to find all the pairs of rows that have an association and/or satisfy the JOIN predicate. If the association exists and the JOIN predicate is satisfied, the column values for each matched pair of rows of A and B are combined into a resulting row.

Example of an `INNER JOIN` with predicate:

```sql
SELECT Cust/LastName, Req/Number
FROM Sales.Customer Cust
JOIN Sales.Request Req ON Cust.LastName = Req.CustomerName
```
| LastName     | Number |
| ------------ | ------ |
| Doe          | 1      |
| Moose        | 2      |

If the model contains an association between `Sales.Request` and `Sales.Customer`, a more logical way to write a query would be using join on association:

```sql
SELECT Cust/LastName, Req/Number
FROM Sales.Customer Cust
JOIN Cust/Sales.Request_Customer/Sales.Request Req
```
| LastName     | Number |
| ------------ | ------ |
| Doe          | 1      |
| Moose        | 2      |

##### `LEFT OUTER JOIN`

A `LEFT OUTER JOIN` query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the `JOIN` predicate. When the association exists and the `JOIN` predicate is satisfied, column values for each matched pair of rows of A and B are combined into a resulting row.

However, in contrast to the `INNER JOIN` construction, the query will also return rows of entity A which do not match entity B. When columns of entity B are specified, these columns contain a null value for these rows.

The syntax is as follows:

```sql
LEFT [ OUTER ] JOIN entity_path [ ON <constraint> ]
```
Example of a `LEFT JOIN` with predicate:

```sql
SELECT Cust/LastName, Req/Number
FROM Sales.Customer Cust
LEFT OUTER JOIN Sales.Request Req ON Cust.LastName = Req.CustomerName
```
| LastName     | Number |
| ------------ | ------ |
| Doe          | 1      |
| Moose        | 2      |
| Elk          | Null   |

`LEFT OUTER JOIN` over association is also supported:

```sql
SELECT Cust/LastName, Req/Number
FROM Sales.Customer Cust
LEFT OUTER JOIN Cust/Sales.Request_Customer/Sales.Request Req
```
| LastName     | Number |
| ------------ | ------ |
| Doe          | 1      |
| Moose        | 2      |
| Elk          | NULL   |

##### `LEFT OUTER JOIN`

A `RIGHT OUTER JOIN` query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the `JOIN` predicate. If the association exists and the `JOIN` predicate is satisfied, the column values for each matched pair of rows of A and B are combined into a resulting row.

However, in contrast to the `INNER JOIN` construction, rows from entity B that do not match entity A will also be returned. When columns of entity A are specified, these columns contain a null value for these rows.

The syntax is as follows:

```sql
RIGHT [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

Example of a `RIGHT OUTER JOIN` with predicate:

```sql
SELECT Cust/LastName, Req/Number
FROM Sales.Customer Cust
RIGHT OUTER JOIN Sales.Request Req ON Cust.LastName = Req.CustomerName
```
| LastName     | Number |
| ------------ | ------ |
| Doe          | 1      |
| Moose        | 2      |
| NULL         | -1     |

`RIGHT OUTER JOIN` over association is also supported:

```sql
SELECT Cust/LastName, Req/Number
FROM Sales.Customer Cust
RIGHT OUTER JOIN Cust/Sales.Request_Customer/Sales.Request Req
```
| LastName     | Number |
| ------------ | ------ |
| Doe          | 1      |
| Moose        | 2      |
| NULL         | -1     |

##### `FULL OUTER JOIN`

A `FULL OUTER JOIN` query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the `JOIN` predicate. When the association exists and the `JOIN` predicate is satisfied, column values for each matched pair of rows from A and B are combined into a result row.

However, in contrast to the `INNER JOIN` construction, data from entities that do *not* match will also be returned. For these rows, columns of missing entities will contain null values.

The syntax is as follows:

```sql
FULL [ OUTER ] JOIN entity_path [ ON <constraint> ]
```
Example of a `FULL OUTER JOIN` with predicate:

```sql
SELECT Cust/LastName, Req/Number
FROM Sales.Customer Cust
FULL OUTER JOIN Sales.Request Req ON Cust.LastName = Req.CustomerName
```
| LastName     | Number |
| ------------ | ------ |
| Doe          | 1      |
| Moose        | 2      |
| Elk          | NULL   |
| NULL         | -1     |

`RIGHT OUTER JOIN` over association is also supported:

```sql
SELECT Cust/LastName, Req/Number
FROM Sales.Customer Cust
FULL OUTER JOIN Cust/Sales.Request_Customer/Sales.Request Req
```
| LastName     | Number |
| ------------ | ------ |
| Doe          | 1      |
| Moose        | 2      |
| Elk          | NULL   |
| NULL         | -1     |

#### Select from a subquery

It is possible to use a subquery in `FROM`. For example:

```sql
SELECT Cust/LastName
FROM (
		SELECT *
		FROM Sales.Customer
	) AS Cust
```
| LastName |
| -------- |
| Doe      |
| Moose    |
| Elk      |

Subqueries in `FROM` can be combined with other tables:

```sql
SELECT Cust/LastName, Req/Number
FROM
	Sales.Request Req,
	(
		SELECT *
		FROM Sales.Customer
	) AS Cust
WHERE
	Req.CustomerName = Cust.LastName
```
| LastName | Number |
| -------- | ------ |
| Doe      | 1      |
| Moose    | 2      |

`JOIN` is also supported:

```sql
SELECT Cust/LastName, Req/Number
FROM
	Sales.Request Req
	LEFT JOIN
	(
		SELECT *
		FROM Sales.Customer
	) AS Cust
	ON Req.CustomerName = Cust.LastName
```
| LastName | Number |
| -------- | ------ |
| Doe      | 1      |
| Moose    | 2      |
| NULL     | -1     |


### `WHERE` clause

The `WHERE` clause specifies how the data being retrieved must be constrained.

#### Syntax

The syntax is as follows:

```sql
WHERE <constraint>
```

`<constraint>` is an expression for which the value always equals true. Expressions consist of simple comparisons using operators, functions, keywords or system variables.

For more information, see [OQL Expressions](/refguide/oql-expressions/).

#### Examples

The following query retrieves all customers whose name is equal to "Doe":

```sql
SELECT FirstName, LastName
FROM Sales.Customer
WHERE LastName = 'Doe'
```
| FirstName | LastName |
| --------- | -------- |
| John      | Doe      |

It is possible to specify multiple conditiions in a constraint using logical operators `AND` and `OR`. Notice that `AND` has precedence over `OR`:

```sql
SELECT CustomerName, Number
FROM Sales.Request
WHERE
	CustomerName = 'Doe'
	OR
	CustomerName != 'Doe'
	AND
	Number < 0
```
| CustomerName | Number |
| ------------ | ------ |
| Doe          | 1      |
| Caribou      | -1     |


Precedence of logical operators can be modified using parentheses:

```sql
SELECT CustomerName, Number
FROM Sales.Request
WHERE
	(
		CustomerName = 'Doe'
		OR
		CustomerName != 'Doe'
	)
	AND
	Number < 0
```
| CustomerName | Number |
| ------------ | ------ |
| Caribou      | -1     |

It is possible to use a subquery in `FROM`. See [Subqueries](TODO) for more examples.

```sql
SELECT FirstName, LastName
FROM Sales.Customer Cust
WHERE
	EXISTS (
		SELECT * FROM Sales.Request Req
		WHERE Req/CustomerName = Cust/LastName
	)
```
| FirstName | LastName |
| --------- | -------- |
| John      | Doe      |
| Jane      | Moose    |

A feature that is specific to OQL compared to standard SQL syntax is using paths to other entities over associations. For example:

```sql
SELECT FirstName, LastName
FROM Sales.Customer
WHERE
	Sales.Customer/Sales.Request_Customer/Sales.Request/Number = 1
```
| FirstName | LastName |
| --------- | -------- |
| John      | Doe      |

### `GROUP BY` clause

The `GROUP BY` clause is used to group OQL query results into summary rows based on the values of one or multiple attribuites. It is possible to filter aggregated results further using a `HAVING` clause.

#### Syntax

The syntax is as follows:
```sql
GROUP BY
	expression [ ,...n ]

[HAVING <constraint>]
```

#### Using `GROUP BY`

The `GROUP BY` clause is usually used in combination with [aggregate functions](TODO): `AVG`, `COUNT`, `MAX`, `MIN`, `SUM`.

If a query contains a `GROUP BY` clause, then its `SELECT` clause can contain only aggregate functions and attributes and other expressions used `GROUP BY`. If an attribute is present in `SELECT`, but not present in `GROUP BY`, such query is invalid.

To better illustrate examples below, let's assume that there is an entity `Sales.SalesPerson` with the following objects:

```sql
SELECT Brand, City, Stock, Address, LocationNumber
FROM Sales.Location
```
| Brand  | City      | Stock | Address   | LocationNumber |
| ------ | -----     | ----- | --------- | -----          |
| Cinco  | Rotterdam | 5     | Address 1 | 1              |
| Rekall | Utrecht   | 9     | Address 4 | 4              |
| Rekall | Zwolle    | 3     | Address 3 | 3              |
| Veidt  | Rotterdam | 23    | Address 2 | 2              |
| Veidt  | Rotterdam | 1     | Address 6 | 6              |
| Veidt  | Utrecht   | 2     | Address 5 | 5              |

The following query retrieves total stock per brand:

```sql
SELECT Brand, SUM(Stock) AS SumStock
FROM Sales.Location
GROUP BY Brand
```
| Brand  | SumStock |
| ------ | -----    |
| Cinco  | 5        |
| Rekall | 12       |
| Veidt  | 26       |

It is possible to specify multiple aggregate functions in combinantion with `GROUP BY`:

```sql
SELECT
	Brand,
	SUM(Stock) AS SumStock,
	MIN(Stock) AS MinStock,
	MAX(Stock) AS MaxStock
FROM Sales.Location
GROUP BY Brand
```
| Brand  | SumStock | MinStock | MaxStock |
| ------ | -----    | -----    | -----    |
| Cinco  | 5        | 5        | 5        |
| Rekall | 12       | 3        | 9        |
| Veidt  | 26       | 1        | 23       |

It is possible to group by multiple attributes:

```sql
SELECT Brand, City, SUM(Stock) AS SumStock
FROM Sales.Location
GROUP BY Brand, City
```
| Brand  | SumStock |
| ------ | -----    |
| Cinco  | 5        |
| Rekall | 9        |
| Rekall | 3        |
| Veidt  | 24       |
| Veidt  | 2        |

It is possible to use functions of attributes in the `SELECT` clause, but only if those attributes are present in the `GROUP BY` clause.

```sql
SELECT Brand, LENGTH(Brand) AS NameLen, SUM(Stock) AS SumStock
FROM Sales.Location
GROUP BY Brand
```
| Brand  | NameLen | SumStock |
| ------ | ------  | -----    |
| Cinco  | 5       | 5        |
| Rekall | 6       | 12       |
| Veidt  | 5       | 26       |

It is also possible to use functions of attributes in `GROUP BY`. Please note that if `GROUP BY` contrains a function of an attribute, the attribute itself cannot be present in the `SELECT` clause because that would lead to ambiguity.

```sql
SELECT LENGTH(Brand) AS NameLen, SUM(Stock) AS SumStock
FROM Sales.Location
GROUP BY LENGTH(Brand)
```
| NameLen | SumStock |
| ------  | -----    |
| 5       | 5        |
| 6       | 12       |
| 5       | 26       |

{{% alert color="info" %}}
`GROUP BY` behavior in OQL relies on behavior of the underlying database. Some functionality is allowed by OQL syntax, but its implementation differs per vendor. It is recommended not to use that following functionality to avoid potential migration problems.
1. Some databases do not allow using aliases in `GROUP BY`. [Supported](/refguide/system-requirements/#databases) database vendors that allow that are: HSQLDB, PostgreSQL, MariaDB and MySQL.
2. Using a subquery in `GROUP BY` is also not supported by some databases. It is allowed in PostgreSQL, MariaDB and MySQL.
{{% /alert %}}

#### Using `GROUP BY` with `HAVING`

The `HAVING` clause is used to filter aggregated results of `GROUP BY`. The difference between `HAVING` and `WHERE` is that `WHERE` is applied to every object before the objects are grouped, and `HAVING` is applied to the aggregate rows.

The following query returns only aggregate rows for brands with more than one location:

```sql
SELECT Brand, SUM(Stock) AS SumStock, COUNT(*) AS LocationCount
FROM Sales.Location
GROUP BY Brand
HAVING COUNT(*) > 1

```
| Brand  | SumStock | LocationCount |
| ------ | -----    | ----          |
| Rekall | 12       | 2 			|
| Veidt  | 26       | 3 			|

It is possible to use aggregate functions that are not present in `SELECT`:

```sql
SELECT Brand
FROM Sales.Location
GROUP BY Brand
HAVING COUNT(*) > 1 AND SUM(Stock) < 20

```
| Brand  |
| ------ |
| Rekall |

More complex expressions such as subqueries and functions are allowed in `HAVING`:

```sql
SELECT Brand
FROM Sales.Location loc
GROUP BY Brand
HAVING
	COUNT(*) > 1
	AND
	EXISTS (
		SELECT *
		FROM Sales.Storage stor
		WHERE stor/AvailableStorage >= SUM(loc/Stock)
	)
```

### `ORDER BY` clause

The `ORDER BY` clause specifies the sort order used on columns returned in a `SELECT` statement. Multiple columns can be specified. Columns are ordered in the sequence of the items in the `ORDER BY` clause.

This clause can include items that do not appear in the `SELECT` clause, except when `SELECT DISTINCT` is specified or when a `GROUP BY` clause exists. When `UNION` is used, the column names or aliases must be those specified in the `SELECT` clause of the first part of the query.

#### Syntax

The syntax is as follows:

```sql
ORDER BY
	{
		order_by_expression [ ASC | DESC ]
	} [ ,...n ]
```

#### order_by_expression

`order_by_expression` specifies an attribute of an entity or an alias from the `FROM` clause to sort on.

```sql
SELECT FirstName, LastName
FROM Sales.SalesPerson
ORDER BY LastName
```
| FirstName | LastName |
| -----     | -----    |
| John      | Doe      |
| Amelia    | Doe      |
| Oliver    | Doe      |
| Oliver    | Moose    |
| Jane      | Moose    |

{{% alert color="info" %}}
For details on the default ordering behavior of NULL values, see the [NULL Values Order Behavior](/refguide/ordering-behavior/#null-ordering-behavior) section of *Order By Behavior*.
{{% /alert %}}
{{% alert color="info" %}}
It is not possible to use funcntions of attribuites in `ORDER BY` clause.
{{% /alert %}}
#### ASC

`ASC` specifies that the results must be ordered ascending, from the lowest to the highest value. This is the default sort type, so results are equivalent to not specifying `ASC`.

```sql
SELECT FirstName, LastName
FROM Sales.SalesPerson
ORDER BY LastName ASC
```
| FirstName | LastName |
| -----     | -----    |
| John      | Doe      |
| Amelia    | Doe      |
| Oliver    | Doe      |
| Oliver    | Moose    |
| Jane      | Moose    |

#### DESC

`DESC` specifies that the results must be ordered descending, from the highest to the lowest value.

```sql
SELECT FirstName, LastName
FROM Sales.SalesPerson
ORDER BY LastName DESC
```
| FirstName | LastName |
| -----     | -----    |
| Oliver    | Moose    |
| Jane      | Moose    |
| John      | Doe      |
| Amelia    | Doe      |
| Oliver    | Doe      |

#### Multiple `ORDER BY` criteria

Multiple criteria can be specified in `ORDER BY` separated by comma:

```sql
SELECT FirstName, LastName
FROM Sales.SalesPerson
ORDER BY LastName, FirstName
```
| FirstName | LastName |
| -----     | -----    |
| Amelia    | Doe      |
| John      | Doe      |
| Oliver    | Doe      |
| Jane      | Moose    |
| Oliver    | Moose    |

`ASC` and `DESC` modifiers apply to each criterion separately:

```sql
SELECT FirstName, LastName
FROM Sales.SalesPerson
ORDER BY LastName DESC, FirstName ASC
```
| FirstName | LastName |
| -----     | -----    |
| Jane      | Moose    |
| Oliver    | Moose    |
| Amelia    | Doe      |
| John      | Doe      |
| Oliver    | Doe      |

#### `ORDER BY` associated attribute

OQL allows specifying paths to attributes of associated entities in the `ORDER BY` clause. Note that in the example below `Sales.Customer` object for Jim Elk does not have any associated objects of `Sales.Request` entity. Depending on the database, that object will end up either at the beggining or at the end of the ordered result. See [NULL Values Order Behavior](/refguide/ordering-behavior/#null-ordering-behavior).

```sql
SELECT LastName
FROM Sales.Customer
ORDER BY Sales.Customer/Sales.Customer_Request/Sales.Request/Number
```
| LastName     |
| ------------ |
| Doe          |
| Moose        |
| Elk          |

### `LIMIT` and `OFFSET` clauses

With the `LIMIT` and `OFFSET` clauses, a portion of the result of a query can be returned. It is recommended to combine `LIMIT` and `OFFSET` clauses with `ORDER BY` because otherwise it can be impossible to predict which portion exactly weill be returned.

#### Syntax

The syntax is as follows:

```sql
[ LIMIT number ] [ OFFSET number ]
```

#### `LIMIT` clause

`LIMIT` specifies how many rows must be returned.

For example, the following query retrieves first 3 records sorted by last name and first name:

```sql
SELECT Brand, City, LocationNumber
FROM Sales.Location
ORDER BY LocationNumber
LIMIT 3
```
| Brand  | City      | LocationNumber |
| ------ | -----     | -----          |
| Cinco  | Rotterdam | 1              |
| Veidt  | Rotterdam | 2              |
| Rekall | Zwolle    | 3              |

#### `OFFSET` clause

`OFFSET` specifies how many rows must be skipped before returning the result rows.

For example, the following query retrieves all records except the first 2:

```sql
SELECT Brand, City, LocationNumber
FROM Sales.Location
ORDER BY LocationNumber
OFFSET 2
```
| Brand  | City      | LocationNumber |
| ------ | -----     | -----          |
| Rekall | Zwolle    | 3              |
| Rekall | Utrecht   | 4              |
| Veidt  | Utrecht   | 5              |
| Veidt  | Rotterdam | 6              |

`LIMIT` and `OFFSET` can be combined in one query.

For example, the following query skips 2 records and then returns 3 records:

```sql
SELECT Brand, City, LocationNumber
FROM Sales.Location
ORDER BY LocationNumber
LIMIT 3
OFFSET 2
```
| Brand  | City      | LocationNumber |
| ------ | -----     | -----          |
| Rekall | Zwolle    | 3              |
| Rekall | Utrecht   | 4              |
| Veidt  | Utrecht   | 5              |
