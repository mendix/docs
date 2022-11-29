---
title: "XPath Year-from-DateTime"
url: /refguide8/xpath-year-from-datetime/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-year-from-datetime.pdf).
{{% /alert %}}

## 1 Overview

The `year-from-dateTime()` function extracts the amount of years from a `Date and time` attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where the amount of years in `DateAttribute` is "2011" (for example, "2011-12-30"):

```java
//Logging.Log[year-from-dateTime(DateAttribute) = 2011]
```
