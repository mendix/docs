---
title: "XPath seconds-from-dateTime"
url: /refguide7/xpath-seconds-from-datetime/
---

## 1 Overview

The `seconds-from-dateTime()` function extracts the amount of seconds from a DateTime attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where the amount of seconds in `DateAttribute` is 30 (for example, "2011-12-30 08:08:30"):

```java
//Logging.Log[seconds-from-dateTime(DateAttribute) = 30]
```
