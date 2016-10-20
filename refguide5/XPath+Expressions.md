---
title: "XPath Expressions"
parent: "XPath+Constraints"
space: "Reference Guide 5"
---


Expressions are used within constraints to generate a value that is true.

There are three types of expressions usable for constraints:

*   Comparisons with operators
*   Functions
*   Exist-expressions

## Comparisons

A comparison expression consists of two attributes or values, separated by a comparison [operator](XPath+Operators), like '=', '<=' and '>'.

<div class="alert alert-info">{% markdown %}

```
//Sales.Customer[Name = 'Jansen']
```

This query retrieves all customers whose name is 'Jansen'.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```
//Sales.Order[TotalPrice < 50.00]
```

This query retrieves all orders for which the total price is less than 50.00 euros.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```
//Sales.Customer[Sales.Customer_Order/Sales.Order/HasPayed = false()]
```

This query retrieves all customers who have at least one unpaid order.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```
//Sales.Customer[Name = City]
```

This query retrieves all customers who have the same name as the city they live in.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```
//Sales.Customer[Sales.Customer_Order = 'ID_124123512341']
```

This query retrieves the customer who placed the order with the given unique identification number.

<div class="alert alert-warning">{% markdown %}

The same result can be retrieved by doing the following query:

```
//Sales.Customer[Sales.Customer_Order/Sales.Order/ID = 'ID_124123512341']
```

However, it is strongly recommended not to use this notation. This is because its execution is inefficient and results in a lower performance due to manner in which it is processed by the database.

{% endmarkdown %}</div>
{% endmarkdown %}</div>

## Functions

See [this page](XPath+Constraint+Functions) for information on the available functions.

## Exist-expressions

The last type of expression, the exist-expression, can be used to check whether a specific association is filled or not.

<div class="alert alert-info">{% markdown %}

```
//Sales.Customer[Sales.Customer_Order/Sales.Order]
```

This query retrieves all customers who have placed at least one order.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```
//Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
```

This query retrieves all customers who have not placed any orders.

{% endmarkdown %}</div>
