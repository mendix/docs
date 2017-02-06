---
title: "XPath year-from-dateTime"
category: "refguide4"
space: "Reference Guide 4"
---
The year-from-dateTime() function extracts the amount of years from a DateTime attribute so it can be used to compare to a value.

<div class="alert alert-info">{% markdown %}

```
//Logging.Log[year-from-dateTime(DateAttribute) = 2011]

```

This query returns all Logs where the amount of years in DateAttribute is 2011, for example 2011-12-30\.

{% endmarkdown %}</div>