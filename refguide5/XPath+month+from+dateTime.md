---
title: "XPath month-from-dateTime"
parent: "XPath+Constraint+Functions"
space: "Reference Guide 5"
---


The month-from-dateTime() function extracts the amount of months from a DateTime attribute so it can be used to compare to a value.

```
//Logging.Log[month-from-dateTime(DateAttribute) = 12]

```

This query returns all Logs where the amount of months in DateAttribute is 12, for example 2011-12-30.
