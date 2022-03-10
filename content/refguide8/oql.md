---
title: "OQL"
url: /refguide8/oql/
parent: "data-sets"
tags: ["studio pro"]
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/oql.pdf).
{{% /alert %}}

## 1 Introduction

The Mendix Object Query Language (OQL) is a relational query language just like [SQL](http://en.wikipedia.org/wiki/Sql). The major advantage of OQL is that it uses entity and association names instead of actual database table names.

In addition, OQL can use predefined relations (associations) to easily join objects without having to calculate which columns should be coupled. Despite these differences, many SQL keywords also work in OQL.

These are some examples of OQL queries:

* `SELECT Name FROM Sales.Customer` –  retrieves the names of all customers
* `SELECT FirstName FROM Sales.Customer WHERE Name = 'Jansen'`  –  retrieves the first name of all customers with name "Jansen"
* `SELECT AVG(TotalPrice) FROM Sales."Order" WHERE IsPaid = 1`  –  retrieves the average of the total prices of all paid orders (`Order` needs to be encapsulated in quotes because it is a reserved word, meaning it can be used for `ORDER BY`)

{{% alert type="info" %}}
OQL queries do not take security into account out-of-the-box. This means that you can use OQL to manually define custom security expressions. In some cases, handling security yourself using OQL (instead of using the out-of-the-box security of XPath) may result in faster queries.
{{% /alert %}}

Try your OQL example online with the [OQL Playground](https://mydemoversion8-sandbox.mxapps.io/p/OQL) demo app. 

## 2 Query Components

An OQL query can use these components:

| Query Part | OQL | Purpose |
| --- | --- | --- |
| [Select clause](oql-select-clause) (required)  | `SELECT AVG(TotalPrice)` | Determines which attributes of the object being queried are retrieved. Any functions that need to be performed on the retrieved data should also be defined here.  |
| [From clause](oql-from-clause) (required)  | `FROM Sales.Order`  | Designates the source entity from which the data will be retrieved.  |
| [Where clause](oql-where-clause) (optional) | `WHERE IsPaid = 1` | Constrains the data being retrieved.  |
| [Group by clause](oql-group-by-clause) (optional) | `GROUP BY Department` | Group rows on the values of the specified attributes.  |
| [Order by clause](oql-order-by-clause) (optional) | `ORDER BY Date` | Sorts rows on the specified attributes.  |
| [Limit clause](oql-limit-clause) (optional) | `LIMIT 50 OFFSET 30` | Limits rows to a subset of the total amount.  |

