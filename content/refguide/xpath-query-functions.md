---
title: "XPath Query Functions"
url: /refguide/xpath-query-functions/
parent: "xpath"
tags: ["studio pro"]
---

The following XPath query aggregate functions are available:

* [avg](xpath-avg)
* [count](xpath-count)
* [max](xpath-max)
* [min](xpath-min)
* [sum](xpath-sum)

These functions must contain full queries as their arguments. However, the `avg`, `max`, `min`, and `sum` functions must specify a column in the query to aggregate.

{{% alert type="warning" %}}
These functions are for use in Java code only.
{{% /alert %}}
