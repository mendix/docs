---
title: "XPath day-from-dateTime"
category: "refguide5"
space: "Reference Guide 5"
---


The day-from-dateTime() function extracts the amount of days from a DateTime attribute so it can be used to compare to a value.

<div class="alert alert-info">{% markdown %}

```
//Logging.Log[day-from-dateTime(DateAttribute) = 30]

```

This query returns all Logs where the amount of days in DateAttribute is 30, for example 2011-12-30.

{% endmarkdown %}</div>