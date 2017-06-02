---
title: "XPath weekday-from-dateTime"
parent: "xpath-constraint-functions"
space: "Reference Guide 4"
---
The weekday-from-dateTime() function extracts the amount of days (in the week) from a DateTime attribute so it can be used to compare to a value. Values range from 1 to 7 (1 = Sunday, 7 = Saturday)

```
//Logging.Log[day-from-dateTime(DateAttribute) = 6]

```

This query returns all Logs where the amount of weekdays in DateAttribute is 6, for example friday 2011-12-30\.
