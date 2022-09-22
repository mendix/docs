---
title: "XPath month-from-dateTime"
url: /refguide7/xpath-month-from-datetime/
---

## 1 Overview

The `month-from-dateTime()` function extracts the amount of months from a DateTime attribute so it can be used to compare to a value.

## 2 Example

This query returns all logs where the amount of months in `DateAttribute` is 12 (for example, "2011-12-30"):

```java
//Logging.Log[month-from-dateTime(DateAttribute) = 12]
```
