---
title: "XPath Quarter-from-DateTime"
url: /refguide8/xpath-quarter-from-datetime/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-quarter-from-datetime.pdf).
{{% /alert %}}

## 1 Overview

The `quarter-from-dateTime()` function extracts the quarter corresponding to a **Date and time** attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where `DateAttribute` is in quarter 4 (for example, "2011-12-30").

```java
//Logging.Log[quarter-from-dateTime(DateAttribute) = 4]
```
