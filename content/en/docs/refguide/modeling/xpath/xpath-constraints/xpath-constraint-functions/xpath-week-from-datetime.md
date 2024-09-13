---
title: "XPath week-from-dateTime"
url: /refguide/xpath-week-from-datetime/
weight: 14
---

## Overview

The `week-from-dateTime()` function extracts the week number (in the year) from a **Date and time** attribute so it can be used to compare to a value. Values range from 1 to 53.

{{% alert color="warning" %}}
The value returned depends on which *database* is being used to support your Mendix app. It does NOT take into account the app runtime setting **First day of the week**.

Many databases implement [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), but please refer to the documentation for the database you are using to find the exact details.
{{% /alert %}}

## Syntax

The syntax is as follows:

```
week-from-dateTime ( attribute [, timezone ] )
```

### attribute

`attribute` specifies the attribute to extract the day from. Attribute must be of the **Date and time** type.

### timezone

`timezone` specifies the time zone to use for the extraction. This parameter is optional and defaults to the local time zone. It should be a string literal containing an IANA time zone or `'UTC'`. GMT offset time zones are not supported.

## Examples

This query returns all the logs where the date `DateAttribute` falls in the second week of the year in the local time zone (for example, "2011-01-13"):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [week-from-dateTime(DateAttribute) = 2]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[week-from-dateTime(DateAttribute) = 2]
    {{% /tab %}}
{{< /tabpane >}}

This query returns all the logs where the date `DateAttribute` falls in the second week of the year in the New York time zone (for example, "2011-01-13"):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [week-from-dateTime(DateAttribute, 'America/New_York') = 2]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[week-from-dateTime(DateAttribute, 'America/New_York') = 2]
    {{% /tab %}}
{{< /tabpane >}}

## Read More

The following links are for the relevant documentation on how week number is calculated for a specific date for many of the databases used with Mendix.

The HSQLDB database used for testing locally uses JVM's [Calendar.WEEK_OF_YEAR](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html).

PostgreSQL, Oracle, and MySQL follow [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601):

* [PostgreSQL](https://www.postgresql.org/docs/current/functions-datetime.html)
* [Oracle](https://docs.oracle.com/cd/B28359_01/olap.111/b28126/dml_commands_1029.htm#OLADM780)
* [MySQL](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_week)

Other databases have a more specific behavior:

* [SQL Server](https://docs.microsoft.com/en-us/sql/t-sql/functions/datepart-transact-sql?view=sql-server-ver15)
