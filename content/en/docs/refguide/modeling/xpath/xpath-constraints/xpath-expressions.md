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

```java {linenos=false}
//Sales.Customer[Name = 'Jansen']
```

This query retrieves all the orders for which the total price is less than 50.00 euros:

```java {linenos=false}
//Sales.Order[TotalPrice < 50.00]
```

This query retrieves all customers who have at least one unpaid order:

```java {linenos=false}
//Sales.Customer[Sales.Customer_Order/Sales.Order/HasPayed = false()]
```

This query retrieves all the customers who have the same name as the city they live in:

```java {linenos=false}
//Sales.Customer[Name = City]
```

This query retrieves the customer who placed the order with the given unique identification number:

```java {linenos=false}
//Sales.Customer[Sales.Customer_Order = 124123512341]
```

The same result can be retrieved by doing the following query:

```java {linenos=false}
//Sales.Customer[Sales.Customer_Order/Sales.Order/ID = 124123512341]
```

### 2.2 Implicit type conversions

If the two sides of a comparison (`=`, `!=`, `<`, `<=`, `>`, `>=`) have different types, one of the sides may be converted implicitly to the type of the other side.

If one of the sides is a plain value (a literal, a microflow variable or a [system variable](/refguide/xpath-keywords-and-system-variables/#3-system-variables)) and the other side is an attribute to be queried, the value is converted to the type of the attribute. For example, the line below will convert the string `'42'` to the number `42` before executing the query:

```java {linenos=false}
//Sales.Order[TotalPrice >= '42']
```

Conversely, this line will convert the number `42` to the string `'42'` before executing the query:

```java {linenos=false}
//Sales.Customer[42 = Name]
```

If both sides are plain values and have different types, one side will be converted to the type of the other. The type to convert to will be the one that occurs first in the following list:

1. Date and time
1. Boolean
1. Decimal
1. Integer/Long
1. String

For example, when comparing `[%CurrentDateTime%]` (which is a Date and time) to `12345678` (which is a Long), the Long will be converted to a Date and time.

Conversions are done the following way:

* An attempt to convert a Boolean to a Date and time will result in an error.
* A Decimal or Integer/Long is converted to a Date and time by interpreting it as the number of seconds since the Unix Epoch, January 1, 1970, 00:00 UTC.
* A String is converted to a Date and time by parsing it using the ISO 8601 format. If no timezone is specified, like in `2011-12-03T10:15:30`, the timezone of the session is used.
* A Decimal or Integer/Long is converted to a Boolean by converting any positive number as `true` and any zero or negative number as `false`.
* A String is converted to a Boolean by comparing it to the string `'true'` in a case insensitive way.
* A String is converted to a Decimal or Integer/Long by parsing it as a number.

## 3 Functions

For information on the available functions, see [XPath Constraint Functions](/refguide/xpath-constraint-functions/).

## 4 Exist-Expressions {#exist}

The last type of expression is the exist-expression, which can be used to check whether a specific association is filled or not.

### 4.1 Examples

This query retrieves all the customers who have placed at least one order:

```java {linenos=false}
//Sales.Customer[Sales.Customer_Order/Sales.Order]
```

This query retrieves all the customers who have not placed any orders:

```java {linenos=false}
//Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
```
