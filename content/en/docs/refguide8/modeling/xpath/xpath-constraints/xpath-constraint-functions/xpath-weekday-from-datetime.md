---
title: "XPath Weekday-from-DateTime"
url: /refguide8/xpath-weekday-from-datetime/
---

## Overview

The `weekday-from-dateTime()` function extracts the day of the week (as a number) from a **Date and time** attribute so it can be used to compare to a value. Values range from 1 to 7 (1 = Sunday, 7 = Saturday).

## Example

This query returns all the logs where the day of the week in `DateAttribute` is 6 (Friday):

```java
//Logging.Log[weekday-from-dateTime(DateAttribute) = 6]
```
