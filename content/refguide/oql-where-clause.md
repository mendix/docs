---
title: "OQL Where Clause"
parent: "oql"
tags: ["studio pro", "queries", "where"]
---


The WHERE clause specifies how the data being retrieved must be constrained.

The syntax is as following:

```
WHERE <constraint>
```

`<constraint>`
An expression for which the value always equals true. Expressions consist of simple comparisons using operators, functions, keywords or system variables.

{{% alert type="info" %}}

```
SELECT FirstName FROM Sales.Customer
WHERE LastName = 'Jansen'
```

This query retrieves all customers whose name is equal to 'Jansen'.

{{% /alert %}}{{% alert type="info" %}}

```
SELECT FirstName FROM Sales.Customer
INNER JOIN Sales.Customer/Sales.Customer_Address/Sales.Address
WHERE Sales.Address/City = 'Rotterdam'
```

This query retrieves all customers who live in 'Rotterdam'.

{{% /alert %}}
