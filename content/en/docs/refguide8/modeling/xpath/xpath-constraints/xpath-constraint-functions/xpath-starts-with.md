---
title: "XPath Starts-With"
url: /refguide8/xpath-starts-with/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-starts-with.pdf).
{{% /alert %}}

## 1 Overview

The `starts-with()` function tests whether a string attribute starts with a specific string (case-insensitive) as a sub-string.

## 2 Example

This query returns all the customers from which the name starts with the string "Jans":

```java
//Sales.Customer[starts-with(Name, 'Jans')]
```

Customers with the name "Jansen" will be returned, for example, because the name starts with "Jans."
