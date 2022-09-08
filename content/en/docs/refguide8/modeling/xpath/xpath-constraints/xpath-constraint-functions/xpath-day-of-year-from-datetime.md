---
title: "XPath Day-of-Year-from-DateTime"
url: /refguide8/xpath-day-of-year-from-datetime/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-day-of-year-from-datetime.pdf).
{{% /alert %}}

## 1 Overview

The `day-of-year-from-dateTime()` function extracts the day in the year from a **Date and time** attribute so it can be used to compare to a value. Values range from 1 (January 1st) to 366 (due to leap years).

## 2 Example

This query returns all the logs where the day in the year in `DateAttribute` is 30 (for example, "2011-01-30" and "2012-01-30"):

```java
//Logging.Log[day-of-year-from-dateTime(DateAttribute) = 30]
```
