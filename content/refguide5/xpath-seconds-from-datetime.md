---
title: "XPath seconds-from-dateTime"
parent: "xpath-constraint-functions"
---


The seconds-from-dateTime() function extracts the amount of seconds from a DateTime attribute so it can be used to compare to a value.

```
//Logging.Log[seconds-from-dateTime(DateAttribute) = 30]

```

This query returns all Logs where the amount of seconds in DateAttribute is 30, for example 2011-12-30 08:08:30.
