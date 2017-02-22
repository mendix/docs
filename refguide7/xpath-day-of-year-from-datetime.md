---
title: "XPath day-of-year-from-dateTime"
space: "Mendix 7 Reference Guide"
parent: "xpath-constraint-functions"
---


The day-of-year-from-dateTime() function extracts the amount of days (in the year) from a DateTime attribute so it can be used to compare to a value. Values range from 1 to 366 (due to leap years)

<div class="alert alert-info">{% markdown %}

```java
//Logging.Log[day-of-year-from-dateTime(DateAttribute) = 30]
```

This query returns all Logs where the amount of days (in the year) in DateAttribute is 30, for example 2011-01-30.

{% endmarkdown %}</div>
