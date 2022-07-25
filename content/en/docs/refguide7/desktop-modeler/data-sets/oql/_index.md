---
title: "OQL"
url: /refguide7/oql/
---


Mendix OQL (Object Query Language) is a relational query language just like [SQL](http://en.wikipedia.org/wiki/Sql). The major advantage of OQL is that OQL uses entity and association names instead of the actual database table names.

Furthermore OQL can use the predefined relations (associations) to easily join objects without having to calculate which columns should be coupled. Despite these differences many SQL keywords also work in OQL.

Examples of OQL queries are:

*   `SELECT Name FROM Sales.Customer`
    Retrieve the names of all customers.
*   `SELECT FirstName FROM Sales.Customer WHERE Name = 'Jansen'`
    Retrieve the first name of all customers with name 'Jansen'.
*   `SELECT AVG(TotalPrice) FROM Sales.Order WHERE IsPayed = 1`
    Retrieve the average of the total prices of all paid orders.

An OQL query consists of a several components. Click on a component for more specific information.

| Query part | OQL | Purpose |
| --- | --- | --- |
| **[Select clause](/refguide7/oql-select-clause/)** (required)  | `SELECT AVG(TotalPrice)` | Determines which attributes of the object being queried are retrieved. Any functions that need to be performed on the retrieved data should also be defined here.  |
| **[From clause](/refguide7/oql-from-clause/)** (required)  | `FROM Sales.Order`  | Designates the source entity from which the data will be retrieved.  |
| **[Where clause](/refguide7/oql-where-clause/)** (optional) | `WHERE IsPaid = 1` | Constrains the data being retrieved.  |
| **[Group by clause](/refguide7/oql-group-by-clause/)** (optional) | `GROUP BY Department` | Group rows on the values of the specified attributes.  |
| **[Order by clause](/refguide7/oql-order-by-clause/)** (optional) | `ORDER BY Date` | Sorts rows on the specified attributes.  |
| **[Limit clause](/refguide7/oql-limit-clause/)** (optional) | `LIMIT 50 OFFSET 30` | Limits rows to a subset of the total amount.  |
