---
title: "OQL DATEPART"
url: /refguide8/oql-datepart/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/oql-datepart.pdf).
{{% /alert %}}

The DATEPART function retrieves a specified element from a date/time values. This element is of type integer.

The syntax is as follows:

```
DATEPART ( datepart , date_expression )
```

| datepart | definition | example when used for Friday July 1, 2005, 16:34:20 |
| --- | --- | --- |
| `YEAR` |   | 2005 |
| `QUARTER` | 1, 2, 3 or 4 | 3 |
| `MONTH` | 1 to 12 | 7 |
| `DAYOFYEAR` | 1 to 366 |   |
| `DAY` | 1 to 31 | 5 |
| `WEEK` | 1 to 53 (depends on the database implementation) |   |
| `WEEKDAY` | 1 to 7 (1 = Sunday, 7 = Saturday) | 6 |
| `HOUR` | 0 to 23 | 16 |
| `MINUTE` | 0 to 59 | 34 |
| `SECOND` | 0 to 59 | 20 |

**datepart**
Specifies the part of the date/time value to retrieve. This can be one of the following:

**date_expression**
Specifies the date to retrieve an element from. This should be formatted in an expression which resolves to a date/time value.
