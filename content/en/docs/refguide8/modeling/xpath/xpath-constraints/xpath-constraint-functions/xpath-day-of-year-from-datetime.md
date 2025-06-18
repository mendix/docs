---
title: "XPath Day-of-Year-from-DateTime"
url: /refguide8/xpath-day-of-year-from-datetime/
---

## Overview

The `day-of-year-from-dateTime()` function extracts the day in the year from a **Date and time** attribute so it can be used to compare to a value. Values range from 1 (January 1) to 366 (due to leap years).

## Example

This query returns all the logs where the day in the year in `DateAttribute` is 30 (for example, "2011-01-30" and "2012-01-30"):

```java
//Logging.Log[day-of-year-from-dateTime(DateAttribute) = 30]
```
