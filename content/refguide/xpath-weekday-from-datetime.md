---
title: "XPath Weekday-from-DateTime"
parent: "xpath-constraint-functions"
tags: ["studio pro"]
---

## 1 Overview

The `weekday-from-dateTime()` function extracts the day of the week (as a number) from a **Date and time** attribute so it can be used to compare to a value. Values range from 1 to 7 (1 = Sunday, 7 = Saturday).

## 2 Example

This query returns all the logs where the day of the week in `DateAttribute` is 6 (Friday):

```java
//Logging.Log[weekday-from-dateTime(DateAttribute) = 6]
```
