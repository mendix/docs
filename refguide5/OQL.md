---
title: "OQL"
parent: "Data+Sets"
space: "Reference Guide 5"
---


Mendix OQL (Object Query Language) is a relational query language just like [SQL](http://en.wikipedia.org/wiki/Sql). The major advantage of OQL is that OQL uses entity and association names instead of the actual database table names.

Furthermore OQL can use the predefined relations (associations) to easily join objects without having to calculate which columns should be coupled. Despite these differences many SQL keywords also work in OQL.

Examples of OQL queries are:

*   `SELECT Name FROM Sales.Customer`
    Retrieve the names of all customers.
*   `SELECT FirstName FROM Sales.Customer WHERE Name = 'Jansen'`
    Retrieve the first name of all customers with name 'Jansen'.
*   `SELECT AVG(TotalPrice) FROM Sales.Order WHERE IsPayed = 1`
    Retrieve the average of the total prices of all paid orders.

An OQL query consists of a several components. Click on a component for more specific information.

<table><thead><tr><th class="confluenceTh">Query part</th><th class="confluenceTh">OQL</th><th class="confluenceTh">Purpose</th></tr></thead><tbody><tr><td class="confluenceTd"><strong><a href="OQL+Select+Clause">Select clause</a> </strong>(required)&nbsp;</td><td class="confluenceTd"><code>SELECT AVG(TotalPrice)</code></td><td class="confluenceTd">Determines which attributes of the object being queried are retrieved. Any functions that need to be performed on the retrieved data should also be defined here.&nbsp;</td></tr><tr><td class="confluenceTd"><strong><a href="OQL+From+Clause">From clause</a> </strong>(required)&nbsp;</td><td class="confluenceTd"><code>FROM Sales.Order</code>&nbsp;</td><td class="confluenceTd">Designates the source entity from which the data will be retrieved.&nbsp;</td></tr><tr><td class="confluenceTd"><strong><a href="OQL+Where+Clause">Where clause</a> </strong>(optional)</td><td class="confluenceTd"><code>WHERE IsPaid = 1</code></td><td class="confluenceTd">Constrains the data being retrieved.&nbsp;</td></tr><tr><td class="confluenceTd"><strong><a href="OQL+Group+by+Clause">Group by clause</a> </strong>(optional)</td><td class="confluenceTd"><code>GROUP BY Department</code></td><td class="confluenceTd">Group rows on the values of the specified attributes.&nbsp;</td></tr><tr><td class="confluenceTd"><strong><a href="OQL+Order+by+Clause">Order by clause</a> </strong>(optional)</td><td class="confluenceTd"><code>ORDER BY Date</code></td><td class="confluenceTd">Sorts rows on the specified attributes.&nbsp;</td></tr><tr><td class="confluenceTd"><strong><a href="OQL+Limit+Clause">Limit clause</a> </strong>(optional)</td><td class="confluenceTd"><code>LIMIT 50 OFFSET 30</code></td><td class="confluenceTd">Limits rows to a subset of the total amount.&nbsp;</td></tr></tbody></table>
