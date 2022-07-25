---
title: "XPath Quarter-from-DateTime"
url: /refguide/xpath-quarter-from-datetime/
tags: ["studio pro"]
---

## 1 Overview

The `quarter-from-dateTime()` function extracts the quarter corresponding to a **Date and time** attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where `DateAttribute` is in quarter 4 (for example, "2011-12-30").

```java
//Logging.Log[quarter-from-dateTime(DateAttribute) = 4]
```
