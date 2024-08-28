---
title: "XPath Expressions"
url: /refguide9/xpath-expressions/
---

## Overview

Expressions are used within constraints to generate a value that is true.

There are three types of expressions usable for constraints:

* Comparisons with operators
* Functions
* Exist-expressions

## Comparisons

A comparison expression consists of two attributes or values separated by a comparison [operator](/refguide9/xpath-operators/) like `=`, `<=`, or `>`.

### Examples

For example, the following query retrieves all customers whose name is "Jansen":

```java
//Sales.Customer[Name = 'Jansen']
```

The following query retrieves all the orders for which the total price is less than 50.00 euros:

```java
//Sales.Order[TotalPrice < 50.00]
```

The following query retrieves all customers who have at least one unpaid order:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/HasPayed = false()]
```

The following query retrieves all customers with an order that has a status different from `Delivered`.
Note that it does not retrieve customers with no orders.

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/Status != 'Delivered']
```

The following query retrieves all customers with an order that has a status that is empty.
As with the example above, it does not retrieve customers with no orders.

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/Status = empty]
```

The following query retrieves all customers that do not have an order that has a status equal to `Delivered`.
Unlike the previous three queries, it also retrieves customers with no orders.

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order/Status = 'Delivered')]
```

The following query retrieves all the customers who have the same name as the city they live in:

```java
//Sales.Customer[Name = City]
```

The following query retrieves the customer who placed the order with the given unique identification number:

```java
//Sales.Customer[Sales.Customer_Order = 124123512341]
```

The following query retrieves the same customer as the previous query:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/ID = 124123512341]
```

### Implicit type conversions

If two sides of a comparison (`=`, `!=`, `<`, `<=`, `>`, `>=`) have different types, one of the sides may be converted implicitly to the type of the other side.

If one of the sides is a plain value (a literal, a microflow variable or a [system variable](/refguide9/xpath-keywords-and-system-variables/#system-variables)) and the other side is an attribute to be queried, the value is converted to the type of the attribute. For example, the line below will convert the string `'42'` to the number `42` before executing the query:

```java
//Sales.Order[TotalPrice >= '42']
```

Conversely, this line will convert the number `42` to the string `'42'` before executing the query:

```java
//Sales.Customer[42 = Name]
```

If both sides are plain values and have different types, one side will be converted to the type of the other. The type to convert to will be the one that occurs first in the following list:

1. Date and time
1. Boolean
1. Decimal
1. Integer/Long
1. String

For example, when comparing `[%CurrentDateTime%]` (Date and time) to `12345678` (Long), the Long will be converted to a Date and time.

Conversions work in the following way:

* An attempt to convert a Boolean to a Date and time will result in an error.
* A Decimal or Integer/Long is converted to a Date and time by interpreting it as the number of seconds since the Unix Epoch, January 1, 1970, 00:00 UTC.
* A String is converted to a Date and time by parsing it using the ISO 8601 format. If no time zone is specified, like in `2011-12-03T10:15:30`, the time zone of the session is used.
* A Decimal or Integer/Long is converted to a Boolean by converting any positive number as `true`, and any zero or negative number as `false`.
* A String is converted to a Boolean by comparing it to the string `'true'` in a case insensitive way.
* A String is converted to a Decimal or Integer/Long by parsing it as a number.

## Functions

For information on the available functions, see [XPath Constraint Functions](/refguide9/xpath-constraint-functions/).

## Exist-Expressions {#exist}

The last type of expression is the exist-expression, which can be used to check whether a specific association is filled or not.

### Examples

This query retrieves all the customers who have placed at least one order:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order]
```

This query retrieves all the customers who have not placed any orders:

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
```
