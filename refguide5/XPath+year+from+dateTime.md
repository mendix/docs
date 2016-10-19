---
title: "XPath year-from-dateTime"
parent: "XPath+Constraint+Functions"
space: "Reference Guide 5"
---


The year-from-dateTime() function extracts the amount of years from a DateTime attribute so it can be used to compare to a value.

```
//Logging.Log[year-from-dateTime(DateAttribute) = 2011]

```

This query returns all Logs where the amount of years in DateAttribute is 2011, for example 2011-12-30.
