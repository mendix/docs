---
title: "XPath Minutes-from-DateTime"
url: /refguide/xpath-minutes-from-datetime/
tags: ["studio pro"]
---

## 1 Overview

The `minutes-from-dateTime()` function extracts the minutes value from a **Date and time** attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where the minutes part of `DateAttribute` is 30 (for example, "2011-12-30 08:30:00"):

```java
//Logging.Log[minutes-from-dateTime(DateAttribute) = 30]
```
