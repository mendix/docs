---
title: "XPath hours-from-dateTime"
url: /refguide7/xpath-hours-from-datetime/
---

## 1 Overview

The `hours-from-dateTime()` function extracts the amount of hours from a DateTime attribute so it can be used to compare to a value.

## 2 Example

This query returns all the logs where the amount of hours in `DateAttribute` is 8 (for example, "2011-12-30 08:00:00"):

```java
//Logging.Log[hours-from-dateTime(DateAttribute) = 8]
```
