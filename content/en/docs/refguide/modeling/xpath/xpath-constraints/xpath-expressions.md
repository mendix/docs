---
title: "XPath Expressions"
url: /refguide/xpath-expressions/
tags: ["studio pro"]
---

## 1 Overview

Expressions are used within constraints to generate a value that is true.

There are three types of expressions usable for constraints:

* Comparisons with operators
* Functions
* Exist-expressions

## 2 Comparisons

A comparison expression consists of two attributes or values separated by a comparison [operator](/refguide/xpath-operators/) like `=`, `<=,` and `>`.

### 2.1 Examples

For example, this query retrieves all customers whose name is "Jansen":

```java
//Sales.Customer[Name = 'Jansen']
```

This query retrieves all the orders for which the total price is less than 50.00 euros:

```java
//Sales.Order[TotalPrice < 50.00]
```

This query retrieves all customers who have at least one unpaid order:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/HasPayed = false()]
```

This query retrieves all the customers who have the same name as the city they live in:

```java
//Sales.Customer[Name = City]
```

This query retrieves the customer who placed the order with the given unique identification number:

```java
//Sales.Customer[Sales.Customer_Order = 'ID_124123512341']
```

The same result can be retrieved by doing the following query:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/ID = 'ID_124123512341']
```

However, it is strongly recommended not to use the notation above. This is because its execution is inefficient and will result in a lower performance due to the manner in which it is processed by the database.

## 3 Functions

For information on the available functions, see [XPath Constraint Functions](/refguide/xpath-constraint-functions/).

## 4 Exist-Expressions {#exist}

The last type of expression is the exist-expression, which can be used to check whether a specific association is filled or not.

### 4.1 Examples

This query retrieves all the customers who have placed at least one order:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order]
```

This query retrieves all the customers who have not placed any orders:

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
```
