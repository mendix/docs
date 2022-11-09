---
title: "XPath Avg"
url: /refguide/xpath-avg/
tags: ["studio pro"]
---

{{% alert color="warning" %}}
This function is for use in Java code only and it must contain a full XPath query as its argument.
{{% /alert %}}

## 1 Overview

The `avg()` function returns the average of its argument.

The function must specify a column in the query to aggregate (for example, `/TotalPrice`).

The query must specify an attribute that has a numeric type.

## 2 Examples

This query returns the average total price of all placed orders:

```java {linenos=false}
avg(//Sales.Order/TotalPrice)
```

This query returns the average total price of all orders placed by a customer named "Jansen":

```java {linenos=false}
avg(//Sales.Order[Sales.Customer_Order/Sales.Customer = 'Jansen']/TotalPrice)
```
