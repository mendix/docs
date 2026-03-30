---
title: "XPath Day-from-DateTime"
url: /refguide8/xpath-day-from-datetime/
---

## Overview

The `day-from-dateTime()` function extracts the day of the month value from a **Date and time** attribute so it can be used to compare to a value.

## Example

This query returns all the logs where `DateAttribute` is the 30th day of the month (for example, "2011-12-30"):

```java
//Logging.Log[day-from-dateTime(DateAttribute) = 30]
```
