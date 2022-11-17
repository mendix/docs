---
title: "OQL"
url: /refguide/oql/
tags: ["studio pro"]
---

## 1 Introduction

The Mendix Object Query Language (OQL) is a relational query language just like [SQL](http://en.wikipedia.org/wiki/Sql). The major advantage of OQL is that it uses entity and association names instead of actual database table names.

In addition, OQL can use predefined relations (associations) to easily join objects without having to calculate which columns should be coupled. Despite these differences, many SQL keywords also work in OQL.

These are some examples of OQL queries:

* `SELECT Name FROM Sales.Customer` –  retrieves the names of all customers
* `SELECT FirstName FROM Sales.Customer WHERE Name = 'Jansen'`  –  retrieves the first name of all customers with name "Jansen"
* `SELECT AVG(TotalPrice) FROM Sales."Order" WHERE IsPaid = 1`  –  retrieves the average of the total prices of all paid orders (`Order` needs to be wrapped in quotes, see the [Reserved Words](#reserved-oql-words) section below)

{{% alert color="info" %}}
OQL queries do not take security into account out-of-the-box. This means that you can use OQL to manually define custom security expressions. In some cases, handling security yourself using OQL—instead of using the out-of-the-box security of XPath—may result in faster queries.
{{% /alert %}}

Try your OQL example online with the [OQL Playground](https://service.mendixcloud.com/p/OQL) demo app. 

## 2 Query Components

An OQL query can use these components:

| Query Part | OQL | Purpose |
| --- | --- | --- |
| [Select clause](/refguide/oql-select-clause/) (required)  | `SELECT AVG(TotalPrice)` | Determines which attributes of the object being queried are retrieved. Any functions that need to be performed on the retrieved data should also be defined here.  |
| [From clause](/refguide/oql-from-clause/) (required)  | `FROM Sales."Order"`  | Designates the source entity from which the data will be retrieved.  |
| [Where clause](/refguide/oql-where-clause/) (optional) | `WHERE IsPaid = 1` | Constrains the data being retrieved.  |
| [Group by clause](/refguide/oql-group-by-clause/) (optional) | `GROUP BY Department` | Groups rows on the values of the specified attributes.  |
| [Order by clause](/refguide/oql-order-by-clause/) (optional) | `ORDER BY Date` | Sorts rows on the specified attributes.  |
| [Limit clause](/refguide/oql-limit-clause/) (optional) | `LIMIT 50 OFFSET 30` | Limits rows to a subset of the total amount.  |

## 3 Reserved Words {#reserved-oql-words}

Words with a specific purpose in OQL are reserved. If you use reserved words for entity, variable or attribute names in an OQL query, they must be wrapped in double quotes `" "`. For example, in the OQL query `SELECT AVG(TotalPrice) FROM Sales."Order" WHERE IsPaid = 1`, `Order` needs to be wrapped in quotes because it is a reserved word, as it can be used for `ORDER BY`.

Here is a list of all OQL reserved words:

* `ALL`
* `AND`
* `AS`
* `ASC`
* `AVG`
* `BOOLEAN`
* `BY`
* `CASE`
* `CAST`
* `COALESCE`
* `COUNT`
* `DATEDIFF`
* `DATEPART`
* `DATETIME`
* `DAY`
* `DAYOFYEAR`
* `DECIMAL`
* `DESC`
* `DISTINCT`
* `ELSE`
* `END`
* `EXISTS`
* `FALSE`
* `FLOAT`
* `FROM`
* `FULL`
* `GROUP`
* `HAVING`
* `HOUR`
* `IN`
* `INNER`
* `INTEGER`
* `IS`
* `JOIN`
* `LEFT`
* `LENGTH`
* `LIKE`
* `LIMIT`
* `LONG`
* `MAX`
* `MILLISECOND`
* `MIN`
* `MINUTE`
* `MONTH`
* `NEXTVALUE`
* `NOT`
* `NULL`
* `OFFSET`
* `ON`
* `OR`
* `ORDER`
* `OUTER`
* `QUARTER`
* `RANGEBEGIN`
* `RANGEEND`
* `RIGHT`
* `ROUND`
* `SECOND`
* `SELECT`
* `STRING`
* `SUM`
* `THEN`
* `TRUE`
* `UNION`
* `WEEK`
* `WEEKDAY`
* `WHEN`
* `WHERE`
* `YEAR`
