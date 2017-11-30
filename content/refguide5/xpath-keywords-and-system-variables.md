---
title: "XPath Keywords and System Variables"
parent: "xpath-constraints"
---


In XPath, several keywords and system variables can be used called as a comparison.

## Keywords

*   `NULL`
*   `empty`

Either of these keywords can be used to check whether an attribute has a value (any value) or if it has been left empty.

See the following query:

```
//Sales.Customer[Name = NULL]
```

This query returns all customers whose name is not known to the system.

{{% alert type="warning" %}}

These keywords can only be used in conjunction with attributes. The existence of associations cannot be confirmed in this manner. Read [this page](xpath) for more information on how to constrain on associations.

{{% /alert %}}

## System variables

System variables can be used to obtain system or date related values. The following tokens are available:

Object related

<table><thead><tr><td class="confluenceTd"><code>[%CurrentUser%]</code></td><td class="confluenceTd">GUID of the user currently logged on</td></tr></thead><tbody><tr><td class="confluenceTd"><code>[%CurrentObject%]</code></td><td class="confluenceTd">GUID of the active object (in the context)</td></tr></tbody></table>

Userroles
These will be created for each userrole in your project. Here is an example:

<table><thead><tr><td class="confluenceTd"><code>[%UserRole_Administrator%]</code></td><td class="confluenceTd">The userrole Administrator</td></tr></thead><tbody></tbody></table>

Time related

<table><thead><tr><td class="confluenceTd"><code>[%CurrentDateTime%]</code></td><td class="confluenceTd">Current date and time</td></tr></thead><tbody><tr><td class="confluenceTd"><code>[%BeginOfCurrentDay%]</code></td><td class="confluenceTd">Date and time at the beginning of the current day</td></tr><tr><td class="confluenceTd"><code>[%EndOfCurrentDay%]</code></td><td class="confluenceTd">Date and time at the end of the current day</td></tr><tr><td class="confluenceTd"><code>[%BeginOfCurrentHour%]</code></td><td class="confluenceTd">Date and time at the beginning of the current hour</td></tr><tr><td class="confluenceTd"><code>[%EndOfCurrentHour%]</code></td><td class="confluenceTd">Date and time at the end of the current hour</td></tr><tr><td class="confluenceTd"><code>[%BeginOfCurrentMinute%]</code></td><td class="confluenceTd">Date and time at the beginning of the current minute</td></tr><tr><td class="confluenceTd"><code>[%EndOfCurrentMinute%]</code></td><td class="confluenceTd">Date and time at the end of the current minute</td></tr><tr><td class="confluenceTd"><code>[%BeginOfCurrentMonth%]</code></td><td class="confluenceTd">Date and time at the beginning of the current month</td></tr><tr><td class="confluenceTd"><code>[%EndOfCurrentMonth%]</code></td><td class="confluenceTd">Date and time at the end of the current month</td></tr><tr><td class="confluenceTd"><code>[%BeginOfCurrentWeek%]</code></td><td class="confluenceTd">Date and time at the beginning of the current week</td></tr><tr><td class="confluenceTd"><code>[%EndOfCurrentWeek%]</code></td><td class="confluenceTd">Date and time at the end of the current week</td></tr></tbody></table>

Period related (always use these tokens in combination with the tokens above)

<table><thead><tr><td class="confluenceTd"><code>[%DayLength%]</code></td><td class="confluenceTd">Length of one day (24 hour)</td></tr></thead><tbody><tr><td class="confluenceTd"><code>[%HourLength%]</code></td><td class="confluenceTd">Length of one hour</td></tr><tr><td class="confluenceTd"><code>[%MinuteLength%]</code></td><td class="confluenceTd">Length of one minute</td></tr><tr><td class="confluenceTd"><code>[%SecondLength%]</code></td><td class="confluenceTd">Length of one second</td></tr><tr><td class="confluenceTd"><code>[%WeekLength%]</code></td><td class="confluenceTd">Length of one week (seven days)</td></tr><tr><td class="confluenceTd"><code>[%YearLength%]</code></td><td class="confluenceTd">Length of one year</td></tr></tbody></table>

These variables must be used as string values, placed between two quotes. Time related tokens combined with period related tokens must be placed within one string. See example 3.

```
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]']
```

This query returns only customers who have registered since the beginning of this week.

```
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]' and DateRegistered < '[%EndOfCurrentWeek%]']
```

This query returns only customers who have registered this week.

```
//Sales.Customer[DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
```

This query returns only customers who have registered in the past three years.

```
//System.User[System.UserRoles = '[%UserRole_Administrator%]']
```

This query returns users with the role Administrator

Because system variables are written as a string (between quotes)it is not possible to use parentheses to group expressions.
