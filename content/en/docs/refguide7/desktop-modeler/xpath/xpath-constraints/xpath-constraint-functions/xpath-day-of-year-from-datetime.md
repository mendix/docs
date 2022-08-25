---
title: "XPath day-of-year-from-dateTime"
url: /refguide7/xpath-day-of-year-from-datetime/
---

## 1 Overview

The `day-of-year-from-dateTime()` function extracts the amount of days (in the year) from a DateTime attribute so it can be used to compare to a value. Values range from 1 to 366 (due to leap years).

## 2 Example

This query returns all the logs where the amount of days (in the year) in `DateAttribute` is 30 (for example, "2011-01-30"):

```java
//Logging.Log[day-of-year-from-dateTime(DateAttribute) = 30]
```
