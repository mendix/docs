---
title: "OQL"
url: /refguide/oql/
weight: 90
---

## Introduction

The Mendix Object Query Language (OQL) is a relational query language inspired by [SQL](https://en.wikipedia.org/wiki/Sql). The major advantage of OQL is that it uses Mendix entity and association names instead of actual database table names. In that way, it is possible to create queries that use names from the data model of your Mendix app without thinking about how that data model is represented in the database.

In addition, OQL can use predefined relations (associations) to easily join objects without having to calculate which columns should be coupled. Despite these differences, many SQL keywords also work in OQL.

Some examples of OQL queries are:

* `SELECT LastName FROM Sales.Customer` – retrieves the family names of all customers
* `SELECT FirstName FROM Sales.Customer WHERE LastName = 'Jansen'` – retrieves the given name of all customers with family name "Jansen"
* `SELECT SUM(TotalAmount) FROM Sales."Order" WHERE IsPaid = true` – retrieves the sum of the total amount on all paid orders (`Order` needs to be wrapped in quotes, see the [Reserved Words](#reserved-oql-words) section below)

{{% alert color="info" %}}
OQL queries do not take security into account out-of-the-box. This means that you can use OQL to manually define custom security expressions. In some cases, handling security yourself using OQL—instead of using the out-of-the-box security of XPath—may result in faster queries.
{{% /alert %}}

{{% alert color="info" %}}
You can try your OQL example online in the [OQL Playground](https://service.mendixcloud.com/p/OQL) demo app.
{{% /alert %}} 

## Reserved Words {#reserved-oql-words}

Words with a specific purpose in OQL are reserved. If you use reserved words for entity, variable, or attribute names in an OQL query, they must be wrapped in double quotes `" "`. For example, in the OQL query `SELECT AVG(TotalPrice) FROM Sales."Order" WHERE IsPaid = 1`, `Order` needs to be wrapped in quotes because it is a reserved word, as it can be used to `ORDER BY`.

Here is a list of all OQL reserved words:

`ALL`, `AND`, `AS`, `ASC`, `AVG`

`BOOLEAN`, `BY`

`CASE`, `CAST`, `COUNT`

`DATEDIFF`, `DATEPART`, `DATETIME`, `DAY`, `DAYOFYEAR`, `DECIMAL`, `DESC`, `DISTINCT`

`ELSE`, `END`, `EXISTS`

`FALSE`, `FLOAT`, `FROM`, `FULL`

`GROUP`

`HAVING`, `HOUR`

`IN`, `INNER`, `INTEGER`, `IS`

`JOIN`

`LEFT`, `LIKE`, `LIMIT`, `LONG`

`MAX`, `MILLISECOND`, `MIN`, `MINUTE`, `MONTH`

`NOT`, `NULL`

`OFFSET`, `ON`, `OR`, `ORDER`, `OUTER`

`QUARTER`

`RIGHT`

`SECOND`, `SELECT`, `STRING`, `SUM`

`THEN`, `TRUE`

`UNION`

`WEEK`, `WEEKDAY`, `WHEN`, `WHERE`

`YEAR`

{{% alert color="info" %}}
In OQL, `FLOAT` is a reserved word for legacy reasons. Mendix no longer supports a Float data type. It should not be used.
{{% /alert %}}
