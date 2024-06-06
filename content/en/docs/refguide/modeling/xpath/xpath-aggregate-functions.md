---
title: "XPath Aggregate Functions"
url: /refguide/xpath-aggregate-functions/
weight: 1
---

## 1 Introduction

This document describes XPath query aggregate functions.

{{% alert color="warning" %}}
These functions are for use in Java code only and must contain full XPath queries as their arguments.
{{% /alert %}}

{{% alert color="info" %}}
The functions `avg`, `max`, `min`, and `sum` functions must specify a column in the query to aggregate (for example, `/TotalPrice`).

The functions `avg`, `max`, `min`, and `sum` functions must also specify an attribute that has a numeric type.
{{% /alert %}}

The following XPath query aggregate functions are available:

* [avg](#avg)
* [count](#count)
* [max](#max)
* [min](#min)
* [sum](#sum)

## 2 avg {#avg}

The `avg()` function returns the average of its argument.

### 2.1 Examples

This query returns the average total price of all placed orders:

```java {linenos=false}
avg(//Sales.Order/TotalPrice)
```

This query returns the average total price of all orders placed by a customer named "Jansen":

```java {linenos=false}
avg(//Sales.Order[Sales.Customer_Order/Sales.Customer = 'Jansen']/TotalPrice)
```

## 3 count {#count}

The `count()` function counts all objects retrieved by the enclosed query and returns the value as an integer.

### 3.1 Examples

This query returns a count of all the placed orders:

```java {linenos=false}
count(//Sales.Order)
```

This query returns a count of all the orders placed by a customer named "Jansen":

```java {linenos=false}
count(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen'])
```

## 4 max {#max}

The `max()` function returns the maximum value of its argument.

### 4.1 Examples

This query returns the highest total price found in any object:

```java {linenos=false}
max(//Sales.Order/TotalPrice)
```

This query returns the highest total price of an order placed by a customer named "Jansen":

```java {linenos=false}
max(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```

## 5 min {#min}

The `min()` function returns the minimum value of its argument.

### 5.1 Examples

This query returns the lowest total price found in any object:

```java {linenos=false}
min(//Sales.Order/TotalPrice)
```

This query returns the lowest total price of an order placed by a customer named "Jansen":

```java {linenos=false}
min(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```

## 6 sum {#sum}

The `sum()` function returns the sum of its argument.

### 6.1 Examples

This query returns the sum of the total prices of all placed orders:

```java {linenos=false}
sum(//Sales.Order/TotalPrice)
```

This query returns the sum of the total prices of all the orders placed by a customer named "Jansen":

```java {linenos=false}
sum(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
