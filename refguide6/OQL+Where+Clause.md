---
title: "OQL Where Clause"
parent: "OQL"
---


The WHERE clause specifies how the data being retrieved must be constrained.

The syntax is as following:

```
WHERE <constraint>
```

`<constraint>`
An expression for which the value always equals true. Expressions consist of simple comparables with operators, functions, keywords or system variables.

<div class="alert alert-info">{% markdown %}

```
SELECT FirstName FROM Sales.Customer
WHERE LastName = 'Jansen'
```

This query retrieves all customers whose name is equal to 'Jansen'.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```
SELECT FirstName FROM Sales.Customer
INNER JOIN Sales.Customer/Sales.Customer_Address/Sales.Address
WHERE Sales.Address/LastName = 'Rotterdam'
```

This query retrieves all customers who live in 'Rotterdam'.

{% endmarkdown %}</div>
