---
title: "XPath Keywords and System Variables"
url: /refguide7/xpath-keywords-and-system-variables/
---

## 1 Overview

In XPath, several keywords and system variables can be called as a comparison.

## 2 Keywords

Either of these keywords can be used to check whether an attribute has a value (any value) or if it has been left empty:

* `NULL`
* `empty`

### 2.1 Example

This query returns all the customers whose name is not known to the system:

```java
//Sales.Customer[Name = NULL]
```

These keywords can only be used in conjunction with attributes. The existence of associations cannot be confirmed in this manner. For more information on how to constrain on associations, see [XPath Constraint Functions](/refguide7/xpath-constraint-functions/).

## 3 System Variables

System variables can be used to obtain system or date related values. The available tokens are described below.

### 3.1 Object-Related

| Token | Description |
| --- | --- |
| `[%CurrentUser%]` | The GUID of the user currently logged in. |
| `[%CurrentObject%]` | The GUID of the active object (in the context). |

### 3.2 User Roles

These will be created for each user role in your app. Here is an example:

| Token | Description |
| --- | --- |
| `[%UserRole_Administrator%]` | The Administrator user role. |

### 3.3 Time-Related

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

The following tokens can be used to add or subtract a period of time from a date and time token value:

| Token | Description |
| --- | --- |
| `[%DayLength%]` | The length of one day (24 hour). |
| `[%HourLength%]` | The length of one hour. |
| `[%MinuteLength%]` | The length of one minute. |
| `[%SecondLength%]` | The length of one second. |
| `[%WeekLength%]` | The length of one week (seven days). |
| `[%YearLength%]` | The length of one year. |

{{% alert color="info" %}}
These variables must be used as string values and placed between two quotes. Time-related tokens combined with period-related tokens must be placed within one string. See example 3.
{{% /alert %}}

#### 3.3.1 Examples

This query returns only customers who have registered since the beginning of this week:

```java
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]']
```

This query returns only customers who have registered this week:

```java
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]' and DateRegistered < '[%EndOfCurrentWeek%]']
```

This query returns only customers who have registered in the past three years:

```java
//Sales.Customer[DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
```

This query returns users with the role "Administrator":

```java
//System.User[System.UserRoles = '[%UserRole_Administrator%]']
```
{{% alert color="info" %}}
Because system variables are written as a string (between quotes), it is not possible to use parentheses to group expressions.
{{% /alert %}}
