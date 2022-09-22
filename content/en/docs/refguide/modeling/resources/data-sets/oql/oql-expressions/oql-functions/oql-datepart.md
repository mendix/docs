---
title: "OQL DATEPART"
url: /refguide/oql-datepart/
tags: ["studio pro"]
---

## 1 Description

The `DATEPART` function retrieves a specified element from a date/time values. This element is of type integer.

## 2 Syntax

The syntax is as follows:

```sql
DATEPART ( datepart , date_expression )
```

### 2.1 datepart

`datepart` specifies the part of the date/time value to retrieve. For possible values, see the [Example](#oql-datepart-example) below.

### 2.2 date_expression

`date_expression` specifies the date to retrieve an element from. This should be formatted in an expression which resolves to a date/time value.

## 3 Example{#oql-datepart-example}

| datepart | Definition | Example (Friday July 1, 2005, 16:34:20) |
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
