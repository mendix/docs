---
title: "XPath length"
category: "refguide4"
space: "Reference Guide 4"
---
The length() function returns the length of a String attribute or value.

<div class="alert alert-info">{% markdown %}

```
//Sales.Customer[length(FirstName) >= 5]

```

This query returns all customers with a FirstName of 5 or more characters.

{% endmarkdown %}</div>