---
title: "XPath not"
parent: "xpath-constraint-functions"
---

## 1 Introduction

The `not()` function inverts the meaning (and as such; the result) of the argument.

## 2 First Example

This query returns all customers whose names are *not* equal to "Jansen":

```java
//Sales.Customer[not(Name = 'Jansen')]
```

The above query returns the same result as the following:

```java
//Sales.Customer[Name != 'Jansen']
```

## Second Example

This query returns all the customers who have not placed at least one order:

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
```

## Third Example

This query returns all the customers who have placed *no* orders with a TotalPrice of *more than* 30,000, including those that have not place any orders at all:

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order/TotalPrice > 30000)]
```

The query above does not return the same result as this one:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/TotalPrice <= 30000]
```

The query above returns all the customers who have placed *at least one* order with a TotalPrice of *less than* 30,000, regardless of the number of orders they have placed worth more than 30,000. For example, if a customer has placed two orders—one for 15,000 and one for 35,000—this query will return this customer, while the *not* query will not. Customers who have not placed any orders will not be returned by this query.
