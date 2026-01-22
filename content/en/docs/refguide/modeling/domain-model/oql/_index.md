---
title: "OQL"
url: /refguide/oql/
weight: 90
---

## Introduction

The Mendix Object Query Language (OQL) is a relational query language inspired by [SQL](https://en.wikipedia.org/wiki/Sql). The major advantage of OQL is that it uses Mendix entity and association names instead of actual database table names. In that way, it is possible to create queries that use names from the data model of your Mendix app without thinking about how that data model is represented in the database.

In addition, OQL can use predefined relations (associations) to easily join objects without having to calculate which columns should be coupled. Despite these differences, many SQL keywords also work in OQL.

{{% alert color="info" %}}
OQL can only be used on persistable and view entities and the associations between them. It cannot be used with non-persistable or external [entities](/refguide/entities/). 
{{% /alert %}}

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

## Syntax basics

An OQL statement consists of [keywords](#reserved-oql-words), identifiers, [value literals](/refguide/oql-expression-syntax/#oql-literals) and [operators](/refguide/oql-expression-syntax/#oql-operators).

Identifiers are used for module, entity, attribute, association, and alias names and parts of names in paths. Identifiers are only allowed to contain latin characters (`a-Z`), underscores (`_`) and numbers (`0-9`). Numbers can not be used as for the first character of an identifier. Identifiers can be wrapped in double quotes `" "` to allow special characters `.`, `/`, and `@`.

Multiple identifiers can be composed into a path, separated by special characters `.` and `/`. The `.` special character can be used to indicate the module and entity in the form `Module.Entity`. The `/` special character can be used to indicate the attribute of an entity in the form `Module.Entity/Attribute` and it can be used for separating associations in long paths. Examples of paths can be seen in the [Select from Multiple Tables using JOIN](/refguide/oql-clauses/#join) section of *OQL Clauses*.

### Reserved Words {#reserved-oql-words}

Words with a specific purpose in OQL are reserved. If you use reserved words for entity, variable, or attribute names in an OQL query, they must be wrapped in double quotes `" "`. For example, in the OQL query `SELECT AVG(TotalPrice) FROM Sales."Order" WHERE IsPaid = 1`, `Order` needs to be wrapped in quotes because it is a reserved word, as it can be used to `ORDER BY`.

Here is a list of all OQL reserved words:

`ALL`, `AND`, `AS`, `ASC`, `AVG`

`BOOLEAN`, `BY`

`CASE`, `CAST`, `CONFLICT`, `COUNT`

`DATEDIFF`, `DATEPART`, `DATETIME`, `DAY`, `DAYOFYEAR`, `DECIMAL`, `DELETE`, `DESC`, `DISTINCT`, `DUPLICATE`

`ELSE`, `END`, `EXISTS`

`FALSE`, `FLOAT`, `FROM`, `FULL`

`GROUP`

`HAVING`, `HOUR`

`IGNORE`, `IN`, `INNER`, `INSERT`, `INTEGER`, `INTO`, `IS`

`JOIN`

`KEY`

`LEFT`, `LIKE`, `LIMIT`, `LONG`

`MATCHED`, `MAX`, `MERGE`, `MILLISECOND`, `MIN`, `MINUTE`, `MONTH`

`NOT`, `NULL`

`OFFSET`, `ON`, `OR`, `ORDER`, `OUTER`

`QUARTER`

`REPLACE`, `RIGHT`

`SECOND`, `SELECT`, `SET`, `SOURCE`, `STRING`, `STRING_AGG`, `SUM`

`TARGET`, `THEN`, `TRUE`

`UNION`, `UPDATE`, `UPSERT`, `USING`

`VALUES`

`WEEK`, `WEEKDAY`, `WHEN`, `WHERE`, `WITH`

`YEAR`

{{% alert color="info" %}}
In OQL, `FLOAT` is a reserved word for legacy reasons. Mendix no longer supports a Float data type. It should not be used.
{{% /alert %}}

{{% alert color="info" %}}
In OQL, `REPLACE`, `UPSERT`, `SET`, `VALUES`, `IGNORE`, `MATCHED`, `DUPLICATE`, `KEY`, `CONFLICT`, `MERGE`, `USING`, `SOURCE`, `TARGET`, and `WITH` are reserved but not yet used.
{{% /alert %}}
