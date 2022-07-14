---
title: "OQL DATEDIFF"
url: /refguide8/oql-datediff/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/oql-datedeiff.pdf).
{{% /alert %}}

The DATEDIFF function returns the difference between two given date/time values. The difference is given in the specified unit.

The syntax is as follows:

```
DATEDIFF ( unit , startdate_expression, enddate_expression )
```

**unit**

Specifies the unit of the date/time value to retrieve. This can be one of the following:

`YEAR`, `QUARTER`, `MONTH`, `DAY`, `WEEK`, `HOUR`, `MINUTE` or `SECOND`.

**startdate_expression**
Specifies the startdate of the period being calculated. This should be formatted in an expression which resolves to a date/time value.

**enddate_expression**
Specifies the enddate of the period being calculated. This should be formatted in an expression which resolves to a date/time value.
