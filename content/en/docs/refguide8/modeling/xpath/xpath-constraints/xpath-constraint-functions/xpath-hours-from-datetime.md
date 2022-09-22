---
title: "XPath Hours-from-DateTime"
url: /refguide8/xpath-hours-from-datetime/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-hours-from-datetime.pdf).
{{% /alert %}}

## 1 Overview

The `hours-from-dateTime()` function extracts the hours value from a **Date and time** attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where the hours part of `DateAttribute` is 8 (for example, "2011-12-30 08:00:00"):

```java
//Logging.Log[hours-from-dateTime(DateAttribute) = 8]
```
