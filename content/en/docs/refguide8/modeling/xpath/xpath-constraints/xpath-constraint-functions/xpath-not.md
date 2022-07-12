---
title: "XPath Not"
url: /refguide8/xpath-not/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-not.pdf).
{{% /alert %}}

## 1 Overview

The `not()` function inverts the meaning (and as such; the result) of the argument.

{{% alert color="info" %}}
This can have different results from an inverse comparison (for example `!=` as the negative of `=`) if the XPath is over a one-to-many relationship. See the examples below for more explanation.
{{% /alert %}}

## 2 Examples

This query returns all customers whose names are *not* equal to "Jansen":

```java
//Sales.Customer[not(Name = 'Jansen')]
```

In this case, the above query returns the same result as the following query:

```java
//Sales.Customer[Name != 'Jansen']
```

The following query returns all the customers who have not placed at least one order:

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
```

The following query returns all the customers who have placed *no* orders with a `TotalPrice` of *more than* 30,000, including those who have not placed any orders at all:

```java
//Sales.Customer[not(Sales.Customer_Order/Sales.Order/TotalPrice > 30000)]
```

The query above does not return the same result as the one below, which returns all the customers who have placed *at least one* order with a `TotalPrice` of *less than* 30,000, regardless of the number of orders they have placed worth more than 30,000:

```java
//Sales.Customer[Sales.Customer_Order/Sales.Order/TotalPrice <= 30000]
```
For example, if a customer has placed two orders—one for 15,000 and one for 35,000—this query will return this customer, while the *not* query will not. Customers who have not placed any orders will not be returned by this query.
