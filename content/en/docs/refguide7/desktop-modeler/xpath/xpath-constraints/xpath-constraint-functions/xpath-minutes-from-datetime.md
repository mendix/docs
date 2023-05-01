---
title: "XPath minutes-from-dateTime"
url: /refguide7/xpath-minutes-from-datetime/
---

## 1 Overview

The `minutes-from-dateTime()` function extracts the amount of minutes from a DateTime attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where the amount of minutes in `DateAttribute` is 30 (for example, "2011-12-30 08:30:00"):

```java
//Logging.Log[minutes-from-dateTime(DateAttribute) = 30]
```
