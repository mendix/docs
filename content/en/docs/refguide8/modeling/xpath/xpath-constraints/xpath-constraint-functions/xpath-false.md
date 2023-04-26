---
title: "XPath False"
url: /refguide8/xpath-false/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-false.pdf).
{{% /alert %}}

## 1 Overview

The function `false()` returns the Boolean value `false`.

To use the values `true` or `false` in XPath queries, it is necessary to either use the `true()` and `false()` functions or to enclose the values in quotation marks.

## 2 Example

This query returns all the customers who are not classified as gold customers:

```java
//Sales.Customer[IsGoldCustomer = false()]
```
