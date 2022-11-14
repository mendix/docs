---
title: "XPath weekday-from-dateTime"
url: /refguide7/xpath-weekday-from-datetime/
---

## 1 Overview

The `weekday-from-dateTime()` function extracts the amount of days (in the week) from a DateTime attribute so it can be used to compare to a value. Values range from 1 to 7 (1 = Sunday, 7 = Saturday).

## 2 Example

This query returns all the logs where the amount of weekdays in `DateAttribute` is 6 (for example, "Friday 2011-12-30"):

```java
//Logging.Log[day-from-dateTime(DateAttribute) = 6]
```
