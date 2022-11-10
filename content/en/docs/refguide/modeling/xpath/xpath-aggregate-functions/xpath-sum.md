---
title: "XPath Sum"
url: /refguide/xpath-sum/
tags: ["studio pro"]
---

{{% alert color="warning" %}}
This function is for use in Java code only and it must contain a full XPath query as its argument.
{{% /alert %}}

## 1 Overview

The `sum()` function returns the sum of its argument.

The function must specify a column in the query to aggregate (for example, `/TotalPrice`).

The query must specify an attribute that has a numeric type.

## 2 Examples

This query returns the sum of the total prices of all placed orders:

```java {linenos=false}
sum(//Sales.Order/TotalPrice)
```

This query returns the sum of the total prices of all the orders placed by a customer named "Jansen":

```java {linenos=false}
sum(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
