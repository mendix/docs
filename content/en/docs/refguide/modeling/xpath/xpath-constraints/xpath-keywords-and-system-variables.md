---
title: "XPath Keywords and System Variables"
url: /refguide/xpath-keywords-and-system-variables/
---

## Overview

In XPath, several keywords and system variables can be called as a comparison.

## Keywords

Either of these keywords can be used to check whether an attribute has a value (any value) or if it has been left empty:

* `NULL`
* `empty`

### Example

This query returns all the customers whose name is not known to the system:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = NULL]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Name = NULL]
    {{% /tab %}}
{{< /tabpane >}}

These keywords can only be used in conjunction with attributes. The existence of associations cannot be confirmed in this manner. For more information on how to constrain on associations, see [XPath Constraint Functions](/refguide/xpath-constraint-functions/).

## System Variables {#system-variables}

System variables can be used to obtain system or date related values. The available tokens are described below.

### Object-Related {#object-related}

| Token | Description |
| --- | --- |
| `[%CurrentUser%]` | The GUID of the user currently logged in. |
| `[%CurrentObject%]` | The GUID of the active object (in the context). |

### User Roles

These will be created for each user role in your app. Here is an example:

| Token | Description |
| --- | --- |
| `[%UserRole_Administrator%]` | The Administrator user role. |

Here is an example for retrieving that user role: 

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/xpath-keywords-and-system-variables/user-role.png" width="500px" class="no-border" >}}

### Time-Related

The following tokens can be used to obtain a date and time value:

| Token | Description |
| --- | --- |
| `[%CurrentDateTime%]` | The current date and time. |
| `[%BeginOfCurrentMinute%]` | The date and time at the beginning of the current minute. |
| `[%BeginOfCurrentMinuteUTC%]` | The date and time at the beginning of the current minute in UTC. |
| `[%EndOfCurrentMinute%]` | The date and time at the end of the current minute. |
| `[%EndOfCurrentMinuteUTC%]` | The date and time at the end of the current minute in UTC. |
| `[%BeginOfCurrentHour%]` | The date and time at the beginning of the current hour. |
| `[%BeginOfCurrentHourUTC%]` | The date and time at the beginning of the current hour in UTC. |
| `[%EndOfCurrentHour%]` | The date and time at the end of the current hour. |
| `[%EndOfCurrentHourUTC%]` | The date and time at the end of the current hour in UTC. |
| `[%BeginOfCurrentDay%]` | The date and time at the beginning of the current day. |
| `[%BeginOfCurrentDayUTC%]` | The date and time at the beginning of the current day in UTC. |
| `[%EndOfCurrentDay%]` | The date and time at the end of the current day. |
| `[%EndOfCurrentDayUTC%]` | The date and time at the end of the current day in UTC. |
| `[%BeginOfYesterday%]` | The date and time at the beginning of yesterday. |
| `[%BeginOfYesterdayUTC%]` | The date and time at the beginning of yesterday in UTC. |
| `[%EndOfYesterday%]` | The date and time at the end of yesterday. |
| `[%EndOfYesterdayUTC%]` | The date and time at the end of yesterday in UTC. |
| `[%BeginOfTomorrow%]` | The date and time at the beginning of tomorrow. |
| `[%BeginOfTomorrowUTC%]` | The date and time at the beginning of tomorrow in UTC. |
| `[%EndOfTomorrow%]` | The date and time at the end of tomorrow. |
| `[%EndOfTomorrowUTC%]` | The date and time at the end of tomorrow in UTC. |
| `[%BeginOfCurrentWeek%]` | The date and time at the beginning of the current week. |
| `[%BeginOfCurrentWeekUTC%]` | The date and time at the beginning of the current week in UTC. |
| `[%EndOfCurrentWeek%]` | The date and time at the end of the current week. |
| `[%EndOfCurrentWeekUTC%]` | The date and time at the end of the current week in UTC. |
| `[%BeginOfCurrentMonth%]` | The date and time at the beginning of the current month. |
| `[%BeginOfCurrentMonthUTC%]` | The date and time at the beginning of the current month in UTC. |
| `[%EndOfCurrentMonth%]` | The date and time at the end of the current month. |
| `[%EndOfCurrentMonthUTC%]` | The date and time at the end of the current month in UTC. |
| `[%BeginOfCurrentYear%]` | The date and time at the beginning of the current year. |
| `[%BeginOfCurrentYearUTC%]` | The date and time at the beginning of the current year in UTC. |
| `[%EndOfCurrentYear%]` | The date and time at the end of the current year. |
| `[%EndOfCurrentYearUTC%]` | The date and time at the end of the current year in UTC. |

{{% alert color="info" %}}
Do not use the UTC variants of these tokens (for example, `[%BeginOfCurrentDayUTC%]`) in client-side expressions if you want to assign the output to (or compare the output with) an attribute of type **Date and time** where **Localize** is disabled. In the client, the localization functionality is built into the attribute type itself, and using UTC functions causes the time zone conversion to be handled twice.
{{% /alert %}}

The following tokens can be used to add or subtract a period of time from a date and time token value:

| Token | Description |
| --- | --- |
| `[%DayLength%]` | The length of one day (24 hour). |
| `[%HourLength%]` | The length of one hour. |
| `[%MinuteLength%]` | The length of one minute. |
| `[%SecondLength%]` | The length of one second. |
| `[%WeekLength%]` | The length of one week (seven days). |
| `[%MonthLength%]` | The length of one month. |
| `[%YearLength%]` | The length of one year. |

{{% alert color="info" %}}
These variables must be used as string values and placed between two quotes. Time-related tokens combined with period-related tokens must be placed within one string. See example 3.
{{% /alert %}}

#### Examples

This query returns only customers who have registered since the beginning of this week:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [DateRegistered >= '[%BeginOfCurrentWeek%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]']
    {{% /tab %}}
{{< /tabpane >}}

This query returns only customers who have registered this week:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [DateRegistered >= '[%BeginOfCurrentWeek%]' and DateRegistered < '[%EndOfCurrentWeek%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]' and DateRegistered < '[%EndOfCurrentWeek%]']
    {{% /tab %}}
{{< /tabpane >}}

This query returns only customers who have registered in the past three years:

[//]: # (<!-- markdownlint-disable no-space-in-emphasis -->)

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
    {{% /tab %}}
{{< /tabpane >}}

[//]: # (<!-- markdownlint-enable no-space-in-emphasis -->)

This query returns users with the role "Administrator":

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [System.UserRoles = '[%UserRole_Administrator%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //System.User[System.UserRoles = '[%UserRole_Administrator%]']
    {{% /tab %}}
{{< /tabpane >}}

{{% alert color="info" %}}
Because system variables are written as a string (between quotes), it is not possible to use parentheses to group expressions.
{{% /alert %}}
