---
title: "OQL DATEDIFF"
url: /refguide7/oql-datediff/
---


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
