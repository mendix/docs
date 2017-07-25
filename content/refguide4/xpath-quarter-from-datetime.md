---
title: "XPath quarter-from-dateTime"
parent: "xpath-constraint-functions"
---
The quarter-from-dateTime() function extracts the amount of quarters from a DateTime attribute so it can be used to compare to a value.

```
//Logging.Log[quarter-from-dateTime(DateAttribute) = 4]

```

This query returns all Logs where the amount of quarters in DateAttribute is 4, for example 2011-12-30\.
