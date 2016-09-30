---
title: "XPath Keywords and System Variables"
space: "Reference Guide 6"
parent: "XPath+Constraints"
---


In XPath, several keywords and system variables can be used called as a comparison.

## Keywords

*   `NULL`
*   `empty`

Either of these keywords can be used to check whether an attribute has a value (any value) or if it has been left empty.

<div class="alert alert-info">{% markdown %}

See the following query:

```java
//Sales.Customer[Name = NULL]
```

This query returns all customers whose name is not known to the system.

{% endmarkdown %}</div><div class="alert alert-warning">{% markdown %}

These keywords can only be used in conjunction with attributes. The existence of associations cannot be confirmed in this manner. Read [this page](XPath+Constraints) for more information on how to constrain on associations.

{% endmarkdown %}</div>

## System variables

System variables can be used to obtain system or date related values. The following tokens are available:

### Object related

| `[%CurrentUser%]` | GUID of the user currently logged on |
| --- | --- |
| `[%CurrentObject%]` | GUID of the active object (in the context) |

### Userroles

These will be created for each userrole in your project. Here is an example:

| `[%UserRole_Administrator%]` | The userrole Administrator |
| --- | --- |

### Time related

The following tokens can be used to obtain a date and time value:

| `[%CurrentDateTime%]` | Current date and time |
| --- | --- |
| `[%BeginOfCurrentDay%]` | Date and time at the beginning of the current day |
| `[%EndOfCurrentDay%]` | Date and time at the end of the current day |
| `[%BeginOfCurrentHour%]` | Date and time at the beginning of the current hour |
| `[%EndOfCurrentHour%]` | Date and time at the end of the current hour |
| `[%BeginOfCurrentMinute%]` | Date and time at the beginning of the current minute |
| `[%EndOfCurrentMinute%]` | Date and time at the end of the current minute |
| `[%BeginOfCurrentMonth%]` | Date and time at the beginning of the current month |
| `[%EndOfCurrentMonth%]` | Date and time at the end of the current month |
| `[%BeginOfCurrentWeek%]` | Date and time at the beginning of the current week |
| `[%EndOfCurrentWeek%]` | Date and time at the end of the current week |

The following tokens can be used to add or subtract a period of time from a date and time token value:

| `[%DayLength%]` | Length of one day (24 hour) |
| --- | --- |
| `[%HourLength%]` | Length of one hour |
| `[%MinuteLength%]` | Length of one minute |
| `[%SecondLength%]` | Length of one second |
| `[%WeekLength%]` | Length of one week (seven days) |
| `[%YearLength%]` | Length of one year |

These variables must be used as string values, placed between two quotes. Time related tokens combined with period related tokens must be placed within one string. See example 3.

<div class="alert alert-info">{% markdown %}

```java
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]']
```

This query returns only customers who have registered since the beginning of this week.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```java
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]' and DateRegistered < '[%EndOfCurrentWeek%]']
```

This query returns only customers who have registered this week.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```java
//Sales.Customer[DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
```

This query returns only customers who have registered in the past three years.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

```java
//System.User[System.UserRoles = '[%UserRole_Administrator%]']
```

This query returns users with the role Administrator

{% endmarkdown %}</div><div class="alert alert-warning">{% markdown %}

Because system variables are written as a string (between quotes) it is not possible to use parentheses to group expressions.

{% endmarkdown %}</div>
