---
title: "XPath Query Functions"
url: /refguide8/xpath-query-functions/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-query-functions.pdf).
{{% /alert %}}

The following XPath query aggregate functions are available:

* [avg](/refguide8/xpath-avg/)
* [count](/refguide8/xpath-count/)
* [max](/refguide8/xpath-max/)
* [min](/refguide8/xpath-min/)
* [sum](/refguide8/xpath-sum/)

These functions must contain full queries as their arguments. However, the `avg`, `max`, `min`, and `sum` functions must specify a column in the query to aggregate.

{{% alert color="warning" %}}
These functions are for use in Java code only.
{{% /alert %}}
