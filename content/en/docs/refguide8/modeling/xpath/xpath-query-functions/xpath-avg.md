---
title: "XPath Avg"
url: /refguide8/xpath-avg/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-avg.pdf).
{{% /alert %}}

## 1 Overview

The `avg()` function returns the average of its argument.

The function requires an XPath query as argument.

The function must specify a column in the query to aggregate.

The query must specify an attribute that has a numeric type.

## 2 Examples

This query returns the average total price of all placed orders:

```java
avg(//Sales.Order/TotalPrice)
```

This query returns the average total price of all orders placed by a customer named "Jansen":

```java
avg(//Sales.Order[Sales.Customer_Order/Sales.Customer = 'Jansen']/TotalPrice)
```
