---
title: "XPath Week-from-DateTime"
url: /refguide8/xpath-week-from-datetime/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/xpath-week-from-datetime.pdf).
{{% /alert %}}

## 1 Overview

The `week-from-dateTime()` function extracts the week number (in the year) from a **Date and time** attribute so it can be used to compare to a value. Values range from 1 to 53.

{{% alert color="warning" %}}
The value returned depends on which *database* is being used to support your Mendix app. It does *not* take into account the app runtime setting **First day of the week**.

Many databases implement [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), but please refer to the documentation for the database you are using to find the exact details.
{{% /alert %}}

## 2 Example

This query returns all the logs where the date `DateAttribute` falls in the second week of the year (for example, "2011-01-13"):

```java
//Logging.Log[week-from-dateTime(DateAttribute) = 2]
```

## 3 Read More

The following links are for the relevant documentation on how week number is calculated for a specific date for many of the databases used with Mendix.

The HSQLDB database used for testing locally uses JVM's [Calendar.WEEK_OF_YEAR](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Calendar.html).

PostgreSQL, Oracle, and MySQL follow [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601):

* [PostgreSQL](https://www.postgresql.org/docs/current/functions-datetime.html)
* [Oracle](https://docs.oracle.com/cd/B28359_01/olap.111/b28126/dml_commands_1029.htm#OLADM780)
* [MySQL](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_week)

Other databases have a more specific behavior:

* [SQL Server](https://docs.microsoft.com/en-us/sql/t-sql/functions/datepart-transact-sql?view=sql-server-ver15)
* [DB2](https://www.ibm.com/support/knowledgecenter/en/SSEPEK_10.0.0/sqlref/src/tpc/db2z_bif_week.html)
