---
title: "XPath Month-From-DateTime"
url: /refguide8/xpath-month-from-datetime/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-month-from-datetime.pdf).
{{% /alert %}}

## 1 Overview

The `month-from-dateTime()` function extracts the month value from a **Date and time** attribute so it can be used to compare to a value.

## 2 Example

This query returns all logs where the month value `DateAttribute` is 12 (December). For example, "2011-12-30":

```java
//Logging.Log[month-from-dateTime(DateAttribute) = 12]
```
