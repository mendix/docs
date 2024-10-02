---
title: "XPath Year-from-DateTime"
url: /refguide8/xpath-year-from-datetime/
---

## Overview

The `year-from-dateTime()` function extracts the amount of years from a `Date and time` attribute so it can be used to compare to a value.

## Example

This query returns all the logs where the amount of years in `DateAttribute` is "2011" (for example, "2011-12-30"):

```java
//Logging.Log[year-from-dateTime(DateAttribute) = 2011]
```
