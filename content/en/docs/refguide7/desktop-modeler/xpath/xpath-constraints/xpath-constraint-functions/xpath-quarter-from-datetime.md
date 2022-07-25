---
title: "XPath quarter-from-dateTime"
url: /refguide7/xpath-quarter-from-datetime/
---

## 1 Overview

The `quarter-from-dateTime()` function extracts the amount of quarters from a DateTime attribute so it can be used to compare to a value.

## 2 Example

```java
//Logging.Log[quarter-from-dateTime(DateAttribute) = 4]
```

This query returns all the logs where the amount of quarters in `DateAttribute` is 4 (for example, "2011-12-30").

