---
title: "XPath Keywords and System Variables"
parent: "xpath-constraints"
---


In XPath, several keywords and system variables can be used called as a comparison.

## Keywords

*   `NULL`
*   `empty`

Either of these keywords can be used to check whether an attribute has a value (any value) or if it has been left empty.

{{% alert type="info" %}}

See the following query:

```java
//Sales.Customer[Name = NULL]
```

This query returns all customers whose name is not known to the system.

{{% /alert %}}{{% alert type="warning" %}}

These keywords can only be used in conjunction with attributes. The existence of associations cannot be confirmed in this manner. Read [this page](xpath-constraints) for more information on how to constrain on associations.

{{% /alert %}}

## System variables

System variables can be used to obtain system or date related values. The following tokens are available:

### Object related

| Token | Description |
| --- | --- |
| `[%CurrentUser%]` | GUID of the user currently logged on |
| `[%CurrentObject%]` | GUID of the active object (in the context) |

### Userroles

These will be created for each userrole in your project. Here is an example:

| Token | Description |
| --- | --- |
| `[%UserRole_Administrator%]` | The userrole Administrator |

### Time related

The following tokens can be used to obtain a date and time value:

| Token | Description |
| --- | --- |
| `[%CurrentDateTime%]` | Current date and time |
| `[%BeginOfCurrentMinute%]` | Date and time at the beginning of the current minute |
| `[%BeginOfCurrentMinuteUTC%]` | Date and time at the beginning of the current minute in UTC|
| `[%EndOfCurrentMinute%]` | Date and time at the end of the current minute |
| `[%EndOfCurrentMinuteUTC%]` | Date and time at the end of the current minute in UTC|
| `[%BeginOfCurrentHour%]` | Date and time at the beginning of the current hour |
| `[%BeginOfCurrentHourUTC%]` | Date and time at the beginning of the current hour in UTC |
| `[%EndOfCurrentHour%]` | Date and time at the end of the current hour |
| `[%EndOfCurrentHourUTC%]` | Date and time at the end of the current hour in UTC|
| `[%BeginOfCurrentDay%]` | Date and time at the beginning of the current day |
| `[%BeginOfCurrentDayUTC%]` | Date and time at the beginning of the current day in UTC |
| `[%EndOfCurrentDay%]` | Date and time at the end of the current day |
| `[%EndOfCurrentDayUTC%]` | Date and time at the end of the current day in UTC|
| `[%BeginOfCurrentWeek%]` | Date and time at the beginning of the current week |
| `[%BeginOfCurrentWeekUTC%]` | Date and time at the beginning of the current week in UTC|
| `[%EndOfCurrentWeek%]` | Date and time at the end of the current week |
| `[%EndOfCurrentWeekUTC%]` | Date and time at the end of the current week in UTC|
| `[%BeginOfCurrentMonth%]` | Date and time at the beginning of the current month |
| `[%BeginOfCurrentMonthUTC%]` | Date and time at the beginning of the current month in UTC|
| `[%EndOfCurrentMonth%]` | Date and time at the end of the current month |
| `[%EndOfCurrentMonthUTC%]` | Date and time at the end of the current month in UTC|
| `[%BeginOfCurrentYear%]` | Date and time at the beginning of the current year |
| `[%BeginOfCurrentYearUTC%]` | Date and time at the beginning of the current year in UTC|
| `[%EndOfCurrentYear%]` | Date and time at the end of the current year |
| `[%EndOfCurrentYearUTC%]` | Date and time at the end of the current year in UTC |

The following tokens can be used to add or subtract a period of time from a date and time token value:

| Token | Description |
| --- | --- |
| `[%DayLength%]` | Length of one day (24 hour) |
| `[%HourLength%]` | Length of one hour |
| `[%MinuteLength%]` | Length of one minute |
| `[%SecondLength%]` | Length of one second |
| `[%WeekLength%]` | Length of one week (seven days) |
| `[%YearLength%]` | Length of one year |

These variables must be used as string values, placed between two quotes. Time related tokens combined with period related tokens must be placed within one string. See example 3.

{{% alert type="info" %}}

```java
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]']
```

This query returns only customers who have registered since the beginning of this week.

{{% /alert %}}{{% alert type="info" %}}

```java
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]' and DateRegistered < '[%EndOfCurrentWeek%]']
```

This query returns only customers who have registered this week.

{{% /alert %}}{{% alert type="info" %}}

```java
//Sales.Customer[DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
```

This query returns only customers who have registered in the past three years.

{{% /alert %}}{{% alert type="info" %}}

```java
//System.User[System.UserRoles = '[%UserRole_Administrator%]']
```

This query returns users with the role Administrator

{{% /alert %}}{{% alert type="warning" %}}

Because system variables are written as a string (between quotes) it is not possible to use parentheses to group expressions.

{{% /alert %}}
