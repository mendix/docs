---
title: "XPath week-from-dateTime"
parent: "xpath-constraint-functions"
---

## 1 Overview

The `week-from-dateTime()` function extracts the amount of weeks from a DateTime attribute so it can be used to compare to a value. Values range from 1 to 53 (which values belong to which week will depend on the database implementation).

## 2 Example

This query returns all the logs where the amount of weeks in `DateAttribute` is "2" (for example, "2011-01-13"):


```java
//Logging.Log[week-from-dateTime(DateAttribute) = 2]
```
