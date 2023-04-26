---
title: "XPath Max"
url: /refguide8/xpath-max/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-max.pdf).
{{% /alert %}}

## 1 Overview

The `max()` function returns the maximum value of its argument.

The function requires an XPath query as argument.

The function must specify a column in the query to aggregate.

The query must specify an attribute that has a numeric type.

## 2 Examples

This query returns the highest total price found in any object:

```java
max(//Sales.Order/TotalPrice)
```

This query returns the highest total price of an order placed by a customer named "Jansen":

```java
max(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen']/TotalPrice)
```
