---
title: "XPath Ends-With"
parent: "xpath-constraint-functions"
tags: ["studio pro"]
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-ends-with.pdf).
{{% /alert %}}

## 1 Overview

The `ends-with()` function checks whether a string attribute ends with a specific string (case-insensitive) as a sub-string.

## 2 Example

This query returns all customers whose name ends with the sub-string `sen`:

```java
//Sales.Customer[ends-with(Name, 'sen')]
```

Customers with the name "Jansen" or "Isaacsen" will be returned, for example, because both names end with "sen."

