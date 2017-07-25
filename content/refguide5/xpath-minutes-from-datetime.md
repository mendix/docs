---
title: "XPath minutes-from-dateTime"
parent: "xpath-constraint-functions"
---


The minutes-from-dateTime() function extracts the amount of minutes from a DateTime attribute so it can be used to compare to a value.

```
//Logging.Log[minutes-from-dateTime(DateAttribute) = 30]

```

This query returns all Logs where the amount of minutes in DateAttribute is 30, for example 2011-12-30 08:30:00.
