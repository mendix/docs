---
title: "XPath Length"
url: /refguide8/xpath-length/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-length.pdf).
{{% /alert %}}

## 1 Overview

The `length()` function returns the length of a string attribute or value.

## 2 Example

This query returns all customers with a `FirstName` of 5 or more characters:

```java
//Sales.Customer[length(FirstName) >= 5]
```
