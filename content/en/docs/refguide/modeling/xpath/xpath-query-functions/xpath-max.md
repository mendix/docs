---
title: "XPath Max"
url: /refguide/xpath-max/
tags: ["studio pro"]
---

{{% alert color="warning" %}}
This function is for use in Java code only and it must contain a full XPath query as its argument.
{{% /alert %}}

## 1 Overview

The `max()` function returns the maximum value of its argument.

The function must specify a column in the query to aggregate (for example, `/TotalPrice`).

The query must specify an attribute that has a numeric type.

## 2 Examples

This query returns the highest total price found in any object:

```java {linenos=false}
max(//Sales.Order/TotalPrice)
```

This query returns the highest total price of an order placed by a customer named "Jansen":

```java {linenos=false}
max(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
