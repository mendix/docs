---
title: "Expressions"
url: /refguide10/expressions/
weight: 30
description: "Describes the expressions that can be used in Mendix for a variety of purposes (for example, to change a member of an object based on logic)."
aliases:
    - /refguide10/microflow-expressions.html
    - /refguide10/microflow-expressions
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Expressions change a value based on a function or combination of functions. 

Named items (for example, objects, lists, or variables) can be called in an expression with a dollar sign followed by the name of the item (for example, `$customer` could refer to an object named `customer`). Expressions can also include Mendix system items which contain information about the current user session. See [System Items](#system-items), below.

Attributes and associations of objects are accessed using a slash (for example, the **Name** attribute of the customer object is referred to as `$customer/Name`, and the **CRM.Customer_Order** association of the customer object is referred to as `$customer/CRM.Customer_Order`).

Attributes of associated objects can be accessed using multiple slashes (for example, the **Number** attribute of a single associated **CRM.Order** is referred to as `$customer/CRM.Customer_Order/CRM.Order/Number`).

You can combine functions in an expression. In this case, you can use brackets to determine the priority and associativity of calculations. For example, the **SellingPrice** is being calculated based on the default **Price** and **Discount** attributes:

```java
$CurrentPrice/Price - (($CurrentPrice/Price **div** 100) * $OrderLine/Discount)
```

Arithmetic functions (subtraction, dividing, and multiplying) are being combined here.

### Examples

For example, you have an object called **package** with two attributes: `weight` (decimal) and `shippingCosts` (decimal). If the weight of a package is less than one kilogram, there are no shipping costs. Otherwise, the shipping costs are €5.00. The expression for changing the `shippingCosts` attribute is:

```java
if $package/weight < 1.00 then 0.00 else 5.00
```

{{% alert color="warning" %}}
When an object is empty, accessing an attribute is considered invalid. If part of an expression is invalid, it will cause an exception and the result will return `false`. The object's attribute cannot be accessed and the expression cannot be evaluated. This can be crucial when evaluating multiple statements within an expression. See the examples below for more information.
{{% /alert %}}

Evaluating the expression:

```java
$emptyObject/attribute != $validObject/attribute or $emptyObject = empty
```

will always return `false`, as long as `emptyObject` is empty. The second part of the statement never gets evaluated.

To have both checks evaluated, the order of statements needs to be reversed:

```java
$emptyObject = empty or $emptyObject/attribute != $validObject/attribute
```

This way the first statement gets evaluated.

### Regular Expressions

[Regular Expression](/refguide10/regular-expressions/) resource documents cannot be used in expressions. However, the format of regular expressions, sub-expressions, and quantifiers used in regular expression strings is the same as the ones described in the [Expression](/refguide10/regular-expressions/#expression) section of *Regular Expressions*.

## System Items {#system-items}

Mendix provides you with a number of system items which describe the current user's session. You can use these in the same way as any other named item.

### $currentUser

This is an object of type `System.User` which contains the attributes for the currently signed-in user.

{{% alert color="warning" %}}
For performance reasons, this information is cached. If you need the current value of attributes which might have changed during the session, you should retrieve the latest data from the database.
{{% /alert %}}

### $currentSession

This is an object of type `System.Session` which contains the attributes for the current user session.

{{% alert color="warning" %}}
For performance reasons, this information is cached. If you need the current value of attributes which might have changed during the session, you should retrieve the latest data from the database.
{{% /alert %}}

## Unary Expressions

* [Unary minus ( `-` )](/refguide10/unary-expressions/)

## Arithmetic Expressions

* [Multiplication ( `*` )](/refguide10/arithmetic-expressions/#multiplication)
* [Division ( `div` or `:` )](/refguide10/arithmetic-expressions/#division)
* [Modulo ( `mod` )](/refguide10/arithmetic-expressions/#modulo)
* [Addition ( `+` )](/refguide10/arithmetic-expressions/#addition)
* [Subtraction ( `-` )](/refguide10/arithmetic-expressions/#subtraction)

## Relational Expressions

* [Less than ( `<` )](/refguide10/relational-expressions/#less-than)
* [Greater than ( `>` )](/refguide10/relational-expressions/#greater-than)
* [Less than or equal to ( `<=` )](/refguide10/relational-expressions/#less-than-or-equal-to)
* [Greater than or equal to ( `>=` )](/refguide10/relational-expressions/#greater-than-or-equal-to)
* [Equal to ( `=` )](/refguide10/relational-expressions/#equal-to)
* [Not equal to ( `!=` )](/refguide10/relational-expressions/#not-equal-to)

## Special Checks

* [Checking for an empty object](/refguide10/special-checks/#empty-object)
* [Checking for an empty object member](/refguide10/special-checks/#empty-object-member)
* [Checking if an object is new (`isNew`)](/refguide10/special-checks/#new)
* [Checking if an object is synced (`isSynced`)](/refguide10/special-checks/#synced)
* [Checking if a synchronization is running (`isSyncing`)](/refguide10/special-checks/#is-syncing)

## Boolean Expressions

* [`and`](/refguide10/boolean-expressions/#and)
* [`or`](/refguide10/boolean-expressions/#or)
* [`not`](/refguide10/boolean-expressions/#not)

## If Expressions

* [`if`](/refguide10/if-expressions/) – performs a conditional action

## Mathematical Function Calls

* [`max`](/refguide10/mathematical-function-calls/#max) – the maximum of a list of numbers
* [`min`](/refguide10/mathematical-function-calls/#min) – the minimum of a list of numbers
* [`round`](/refguide10/mathematical-function-calls/#round) – the rounding of a floating-point number, optionally to a specified precision
* [`random`](/refguide10/mathematical-function-calls/#random) – random number generation
* [`floor`](/refguide10/mathematical-function-calls/#floor) – the rounding of a floating-point number down
* [`ceil`](/refguide10/mathematical-function-calls/#ceil) – the rounding of a floating-point number up
* [`pow`](/refguide10/mathematical-function-calls/#pow) – the exponentiation
* [`abs`](/refguide10/mathematical-function-calls/#abs) – the absolute value
* [`sqrt`](/refguide10/mathematical-function-calls/#sqrt) – the square root

## String Function Calls

* [`toLowerCase`](/refguide10/string-function-calls/#toLowerCase) – converts the string to lower-case
* [`toUpperCase`](/refguide10/string-function-calls/#toUpperCase) – converts the string to upper-case
* [`substring`](/refguide10/string-function-calls/#substring) – gets a part of a string
* [`find`](/refguide10/string-function-calls/#find) – gets a sub-string position
* [`findLast`](/refguide10/string-function-calls/#findLast) – gets the last sub-string position
* [`contains`](/refguide10/string-function-calls/#contains) – contains the sub-string
* [`startsWith`](/refguide10/string-function-calls/#startWith) – determines whether a string starts with the specified sub-string
* [`endsWith`](/refguide10/string-function-calls/#endWith) – determines whether a string ends with the specified sub-string
* [`trim`](/refguide10/string-function-calls/#trim) – removes the leading and trailing whitespace
* [`isMatch`](/refguide10/string-function-calls/#isMatch) – matches a regular expression
* [`replaceAll`](/refguide10/string-function-calls/#replaceAll) – replaces the occurrences of a sub-string
* [`replaceFirst`](/refguide10/string-function-calls/#replaceFirst) – replaces the first occurrence of a sub-string
* [String concatenation ( `+` )](/refguide10/string-function-calls/#string-concatenation) – concatenates strings
* [`urlEncode`](/refguide10/string-function-calls/#urlEncode) – converts a string to be used in a URL
* [`urlDecode`](/refguide10/string-function-calls/#urlDecode) – converts a string back from a URL

## Date Creation

* [`dateTime`](/refguide10/date-creation/) – creating a date value using the server's calendar
* [`dateTimeUTC`](/refguide10/date-creation/) – creating a date value using the UTC calendar

## Begin-of Date Function Calls

* [`BeginOfDay`](/refguide10/begin-of-date-function-calls/#beginOfDay) – calculates the beginning of the day compared to the initial date
* [`BeginOfWeek`](/refguide10/begin-of-date-function-calls/#beginOfWeek) – calculates the beginning of the week compared to the initial date
* [`BeginOfMonth`](/refguide10/begin-of-date-function-calls/#beginOfMonth) – calculates the beginning of the month compared to the initial date
* [`BeginOfYear`](/refguide10/begin-of-date-function-calls/#beginOfYear) – calculates the beginning of the year compared to the initial date

## End-of Date Function Calls

* [`EndOfDay`](/refguide10/end-of-date-function-calls/#endOfDay) – calculates the end of the day compared to the initial date
* [`EndOfWeek`](/refguide10/end-of-date-function-calls/#endOfWeek) – calculates the end of the week compared to the initial date
* [`EndOfMonth`](/refguide10/end-of-date-function-calls/#endOfMonth) – calculates the end of the month compared to the initial date
* [`EndOfYear`](/refguide10/end-of-date-function-calls/#endOfYear) – calculates the end of the year compared to the initial date

## Between Date Function Calls

* [`millisecondsBetween`](/refguide10/between-date-function-calls/#millisecondsBetween) – the milliseconds between two dates
* [`secondsBetween`](/refguide10/between-date-function-calls/#secondsBetween) – the seconds between two dates
* [`minutesBetween`](/refguide10/between-date-function-calls/#minutesBetween) – the minutes between two dates
* [`hoursBetween`](/refguide10/between-date-function-calls/#hoursBetween) – the hours between two dates
* [`daysBetween`](/refguide10/between-date-function-calls/#daysBetween) – the days between two dates
* [`weeksBetween`](/refguide10/between-date-function-calls/#weeksBetween) – the weeks between two dates
* [`calendarMonthsBetween`](/refguide10/between-date-function-calls/#calendarMonthsBetween) - the months between two dates
* [`calendarYearsBetween`](/refguide10/between-date-function-calls/#calendarYearsBetween) - the years between two dates

## Add Date Function Calls

* [`addMilliseconds`](/refguide10/add-date-function-calls/#addMilliseconds) – adds milliseconds to a date
* [`addSeconds`](/refguide10/add-date-function-calls/#addSeconds) – adds seconds to a date
* [`addMinutes`](/refguide10/add-date-function-calls/#addMinutes) – adds minutes to a date
* [`addHours`](/refguide10/add-date-function-calls/#addHours) – adds hours to a date
* [`addDays`](/refguide10/add-date-function-calls/#addDays) – adds days to a date
* [`addDaysUTC`](/refguide10/add-date-function-calls/#addDays) – adds days to a date using the UTC calendar
* [`addWeeks`](/refguide10/add-date-function-calls/#addWeeks) – adds weeks to a date
* [`addWeeksUTC`](/refguide10/add-date-function-calls/#addWeeks) – adds weeks to a date using the UTC calendar
* [`addMonths`](/refguide10/add-date-function-calls/#addMonths) – adds months to a date
* [`addMonthsUTC`](/refguide10/add-date-function-calls/#addMonths) – adds months to a date using the UTC calendar
* [`addQuarters`](/refguide10/add-date-function-calls/#addQuarters) – adds quarters to a date
* [`addQuartersUTC`](/refguide10/add-date-function-calls/#addQuarters) – adds quarters to a date using the UTC calendar
* [`addYears`](/refguide10/add-date-function-calls/#addYears) – adds years to a date
* [`addYearsUTC`](/refguide10/add-date-function-calls/#addYears) – adds years to a date using the UTC calendar

## Subtract Date Function Calls

* [`subtractMilliseconds`](/refguide10/subtract-date-function-calls/#subtractMilliseconds) – subtracts milliseconds from a date
* [`subtractSeconds`](/refguide10/subtract-date-function-calls/#subtractSeconds) – subtracts seconds from a date
* [`subtractMinutes`](/refguide10/subtract-date-function-calls/#subtractMinutes) – subtracts minutes from a date
* [`subtractHours`](/refguide10/subtract-date-function-calls/#subtractHours) – subtracts hours from a date
* [`subtractDays`](/refguide10/subtract-date-function-calls/#subtractDays) – subtracts days from a date
* [`subtractDaysUTC`](/refguide10/subtract-date-function-calls/#subtractDays) – subtracts days from a date using the UTC calendar
* [`subtractWeeks`](/refguide10/subtract-date-function-calls/#subtractWeeks) – subtracts weeks from a date
* [`subtractWeeksUTC`](/refguide10/subtract-date-function-calls/#subtractWeeks) – subtracts weeks from a date using the UTC calendar
* [`subtractMonths`](/refguide10/subtract-date-function-calls/#subtractMonths) – subtracts months from a date
* [`subtractMonthsUTC`](/refguide10/subtract-date-function-calls/#subtractMonths) – subtracts months from a date using the UTC calendar
* [`subtractQuarters`](/refguide10/subtract-date-function-calls/#subtractQuarters) – subtracts quarters from a date
* [`subtractQuartersUTC`](/refguide10/subtract-date-function-calls/#subtractQuarters) – subtracts quarters from a date using the UTC calendar
* [`subtractYears`](/refguide10/subtract-date-function-calls/#subtractYears) – subtracts years from a date
* [`subtractYearsUTC`](/refguide10/subtract-date-function-calls/#subtractYears) – subtracts years from a date using the UTC calendar

## Trim to Date

* [`trimToSeconds`](/refguide10/trim-to-date/#trimToSeconds) – trims to seconds
* [`trimToMinutes`](/refguide10/trim-to-date/#trimToMinutes) – trims to minutes
* [`trimToHours`](/refguide10/trim-to-date/#trimToHours) – trims to hours
* [`trimToHoursUTC`](/refguide10/trim-to-date/#trimToHours) – trims to hours using the UTC calendar
* [`trimToDays`](/refguide10/trim-to-date/#trimToDays) – trims to days
* [`trimToDaysUTC`](/refguide10/trim-to-date/#trimToDays) – trims to days using the UTC calendar
* [`trimToMonths`](/refguide10/trim-to-date/#trimToMonths) – trims to months
* [`trimToMonthsUTC`](/refguide10/trim-to-date/#trimToMonths) – trims to months using the UTC calendar
* [`trimToYears`](/refguide10/trim-to-date/#trimToYears) – trims to years
* [`trimToYearsUTC`](/refguide10/trim-to-date/#trimToYears) – trims to years using the UTC calendar

## To String

See [To String](/refguide10/to-string/) for details.

## Length

See [Length](/refguide10/length/) for details.

## Parse Integer

See [Parse Integer](/refguide10/parse-integer/) for details.

## Parse and Format Decimal Function Calls {#expressions-formatter-functions}

* [`parseDecimal`](/refguide10/parse-and-format-decimal-function-calls/#parseDecimal) – converts a string to a decimal
* [`formatDecimal`](/refguide10/parse-and-format-decimal-function-calls/#formatDecimal) – converts a decimal to a string

## Parse and Format Date Function Calls

* [`parseDateTime[UTC]`](/refguide10/parse-and-format-date-function-calls/#parseDateTime) – converts a string to a date value
* [`formatDateTime[UTC]`](/refguide10/parse-and-format-date-function-calls/#formatDateTime) – converts a date value to a string
* [`formatTime[UTC]`](/refguide10/parse-and-format-date-function-calls/#formatTime) – converts the time part of a date value to a string
* [`formatDate[UTC]`](/refguide10/parse-and-format-date-function-calls/#formatDate) – converts the date part of a date value to a string
* [`dateTimeToEpoch`](/refguide10/parse-and-format-date-function-calls/#dateTimeToEpoch) – converts a date to a long
* [`epochToDateTime`](/refguide10/parse-and-format-date-function-calls/#epochToDateTime) – converts a long to a date

## Enumerations in Expressions

* [`getCaption`](/refguide10/enumerations-in-expressions/#getCaption) – gets the caption of an enumeration value in current language
* [`getKey`](/refguide10/enumerations-in-expressions/#getKey) – gets the technical name of an enumeration value
