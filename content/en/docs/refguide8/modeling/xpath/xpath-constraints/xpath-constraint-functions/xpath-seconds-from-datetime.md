---
title: "XPath Seconds-from-DateTime"
url: /refguide8/xpath-seconds-from-datetime/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-seconds-from-datetime.pdf).
{{% /alert %}}

## 1 Overview

The `seconds-from-dateTime()` function extracts the seconds part of a **Date and time** attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where the seconds part of `DateAttribute` is 30 (for example, "2011-12-30 08:08:30"):

```java
//Logging.Log[seconds-from-dateTime(DateAttribute) = 30]
```
