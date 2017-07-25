---
title: "OQL Order by Clause"
parent: "oql"
---


The ORDER BY clause specifies the sort order used on columns returned in a SELECT statement. Multiple columns can be specified. Columns are ordered in the sequence of the items in the ORDER BY clause.
This clause can include items that do not appear in the SELECT clause, except when SELECT DISTINCT is specified or when an GROUP BY clause exists. When UNION is used, the column names or aliases must be those specified in the SELECT clause of the first part of the query.

The syntax is as following:

```
ORDER BY
    {
        order_by_expression [ ASC | DESC ]
    }
```

**order_by_expression**
Specifies an attribute of an entity or an alias from the FROM clause to sort on.

**ASC**
Specifies that the results must be ordered ascending, from the lowest to the highest value. ASC is the default sort.

**DESC**
Specifies that the results must be ordered descending, from the highest to the lowest value.

{{% alert type="info" %}}

```
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
```

This query retrieves all customers and returns the first names sorted on the last name, ascending.

{{% /alert %}}{{% alert type="info" %}}

```
SELECT FirstName + ' ' + LastName FROM Sales.Customer
ORDER BY LastName DESC
```

This query retrieves all customers and returns the first and last name sorted on the last name, descending.

{{% /alert %}}

**Note:** For default ordering behavior of NULL values refer to [this documentation](null-ordering-behavior).
