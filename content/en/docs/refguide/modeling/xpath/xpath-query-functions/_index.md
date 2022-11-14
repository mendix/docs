---
title: "XPath Query Functions"
url: /refguide/xpath-query-functions/
tags: ["studio pro"]
---

The following XPath query aggregate functions are available:

* [avg](/refguide/xpath-avg/)
* [count](/refguide/xpath-count/)
* [max](/refguide/xpath-max/)
* [min](/refguide/xpath-min/)
* [sum](/refguide/xpath-sum/)

These functions must contain full queries as their arguments. However, the `avg`, `max`, `min`, and `sum` functions must specify a column in the query to aggregate.

{{% alert color="warning" %}}
These functions are for use in Java code only.
{{% /alert %}}
