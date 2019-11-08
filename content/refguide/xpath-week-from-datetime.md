---
title: "XPath Week-from-DateTime"
parent: "xpath-constraint-functions"
tags: ["studio pro"]
---

## 1 Overview

The `week-from-dateTime()` function extracts the week number (in the year) from a **Date and time** attribute so it can be used to compare to a value. Values range from 1 to 53 (which values belong to which week will depend on the database implementation).

## 2 Example

This query returns all the logs where the date `DateAttribute` falls in the second week of the year (for example, "2011-01-13"):


```java
//Logging.Log[week-from-dateTime(DateAttribute) = 2]
```
