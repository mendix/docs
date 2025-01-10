---
title: "OQL DATEDIFF"
url: /refguide/oql-datediff/
---

## Description

The `DATEDIFF` function returns the difference between two given date/time values. The difference is given in the specified unit.

## Syntax

The syntax is as follows:

```sql
DATEDIFF ( unit , startdate_expression, enddate_expression [, timezone ] )
```

### unit

`unit` specifies the unit of the date/time value to retrieve. This can be one of the following:
`YEAR`, `QUARTER`, `MONTH`, `DAY`, `WEEK`, `HOUR`, `MINUTE` or `SECOND`. For more information on date/time values, see the [Example](/refguide/oql-datepart/#oql-datepart-example) section in *OQL DATEPART*.

### startdate_expression

`startdate_expression` specifies the start date of the period being calculated. This should be formatted in an expression which resolves to a date/time value.

### enddate_expression

`enddate_expression` specifies the end date of the period being calculated. This should be formatted in an expression which resolves to a date/time value.

### timezone

`timezone` specifies the time zone to use for the retrieval. This parameter is optional and defaults to the local time zone. It should be a string literal containing an IANA time zone. GMT offset time zones are not supported.
