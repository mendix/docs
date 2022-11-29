---
title: "XPath day-from-dateTime"
url: /refguide7/xpath-day-from-datetime/
---

## 1 Overview

The `day-from-dateTime()` function extracts the amount of days from a DateTime attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where the amount of days in `DateAttribute` is 30 (for example, "2011-12-30"):

```java
//Logging.Log[day-from-dateTime(DateAttribute) = 30]
```
