---
title: "XPath Sum"
url: /refguide8/xpath-sum/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-sum.pdf).
{{% /alert %}}

## 1 Overview

The `sum()` function returns the sum of its argument.

The function requires an XPath query as argument.

The function must specify a column in the query to aggregate.

The query must specify an attribute that has a numeric type.

## 2 Examples

This query returns the sum of the total prices of all placed orders:

```java
sum(//Sales.Order/TotalPrice)
```

This query returns the sum of the total prices of all the orders placed by a customer named "Jansen":

```java
sum(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
