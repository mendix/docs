---
title: "Expressions"
url: /refguide9/expressions/
weight: 30
description: "Describes the expressions that can be used in Mendix for a variety of purposes (for example, to change a member of an object based on logic)."
aliases:
    - /refguide9/microflow-expressions.html
    - /refguide9/microflow-expressions
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Expressions change a value based on a function or combination of functions. 

Named items (for example, objects, lists, or variables) can be called in an expression by inserting the name of the item and adding a dollar sign (for example, `$customer` could refer to an object named `customer`). Expressions can also include Mendix system items which contain information about the current user session. See [System Items](#system-items), below.

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
if $package/weight < 1.00 then 0.00 else 5.00`
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

[Regular Expression](/refguide9/regular-expressions/) resource documents cannot be used in expressions. However, the format of regular expressions, sub-expressions, and quantifiers used in regular expression strings is the same as the ones described in the [Expression](/refguide9/regular-expressions/#expression) section of *Regular Expressions*.

## System Items{#system-items}

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

* [Unary minus ( - )](/refguide9/unary-expressions/)

## Arithmetic Expressions

* [Multiplication ( * )](/refguide9/arithmetic-expressions/)
* [Division ( div or : )](/refguide9/arithmetic-expressions/)
* [Modulo ( mod )](/refguide9/arithmetic-expressions/)
* [Addition ( + )](/refguide9/arithmetic-expressions/)
* [Subtraction ( - )](/refguide9/arithmetic-expressions/)

## Relational Expressions

* [Less than ( < )](/refguide9/relational-expressions/)
* [Greater than ( > )](/refguide9/relational-expressions/)
* [Less than or equal to ( <= )](/refguide9/relational-expressions/)
* [Greater than or equal to ( >= )](/refguide9/relational-expressions/)
* [Is equal to ( = )](/refguide9/relational-expressions/)
* [Is not equal to ( != )](/refguide9/relational-expressions/)

## Special Checks

* [Checking for an empty object](/refguide9/special-checks/)
* [Checking for an empty object member](/refguide9/special-checks/)
* [`isNew`](/refguide9/special-checks/) – checks whether an object is new

## Boolean Expressions

* [and](/refguide9/boolean-expressions/)
* [or](/refguide9/boolean-expressions/)
* [not](/refguide9/boolean-expressions/)

## If Expressions

* [if](/refguide9/if-expressions/) – performs a conditional action

## Mathematical Function Calls

* [`max`](/refguide9/mathematical-function-calls/) – the maximum of a list of numbers
* [`min`](/refguide9/mathematical-function-calls/) – the minimum of a list of numbers
* [`round`](/refguide9/mathematical-function-calls/) – the rounding of a floating-point number, optionally to a specified precision
* [`random`](/refguide9/mathematical-function-calls/) – random number generation
* [`floor`](/refguide9/mathematical-function-calls/) – the rounding of a floating-point number down
* [`ceil`](/refguide9/mathematical-function-calls/) – the rounding of a floating-point number up
* [`pow`](/refguide9/mathematical-function-calls/) – the exponentiation
* [`abs`](/refguide9/mathematical-function-calls/) – the absolute value

## String Function Calls

* [`toUpperCase`](/refguide9/string-function-calls/) – converts the string to upper-case
* [`toLowerCase`](/refguide9/string-function-calls/) – converts the string to lower-case
* [`length`](/refguide9/string-function-calls/) – the string length
* [`substring`](/refguide9/string-function-calls/) – gets a part of a string
* [`find`](/refguide9/string-function-calls/) – gets a sub-string position
* [`findLast`](/refguide9/string-function-calls/) – gets the last sub-string position
* [`contains`](/refguide9/string-function-calls/) – contains the sub-string
* [`startsWith`](/refguide9/string-function-calls/) – determines whether a string starts with the specified sub-string
* [`endsWith`](/refguide9/string-function-calls/) – determines whether a string ends with the specified sub-string
* [`trim`](/refguide9/string-function-calls/) – removes the leading and trailing whitespace
* [`isMatch`](/refguide9/string-function-calls/) – matches a regular expression
* [`replaceAll`](/refguide9/string-function-calls/) – replaces the occurrences of a sub-string
* [`replaceFirst`](/refguide9/string-function-calls/) – replaces the first occurrence of a sub-string
* [`String concatenation ( + )`](/refguide9/string-function-calls/) – concatenates strings
* [`urlEncode`](/refguide9/string-function-calls/) – converts a string to be used in a URL
* [`urlDecode`](/refguide9/string-function-calls/) – converts a string back from a URL

## Date Creation

* [`dateTime`](/refguide9/date-creation/) – creating a date value using the server's calendar
* [`dateTimeUTC`](/refguide9/date-creation/) – creating a date value using the UTC calendar

## Begin-of Date Function Calls

* [`BeginOfDay`](/refguide9/begin-of-date-function-calls/) – calculates the beginning of the day compared to the initial date
* [`BeginOfWeek`](/refguide9/begin-of-date-function-calls/) – calculates the beginning of the week compared to the initial date
* [`BeginOfMonth`](/refguide9/begin-of-date-function-calls/) – calculates the beginning of the month compared to the initial date
* [`BeginOfYear`](/refguide9/begin-of-date-function-calls/) – calculates the beginning of the year compared to the initial date

## End-of Date Function Calls

* [`EndOfDay`](/refguide9/end-of-date-function-calls/) – calculates the end of the day compared to the initial date
* [`EndOfWeek`](/refguide9/end-of-date-function-calls/) – calculates the end of the week compared to the initial date
* [`EndOfMonth`](/refguide9/end-of-date-function-calls/) – calculates the end of the month compared to the initial date
* [`EndOfYear`](/refguide9/end-of-date-function-calls/) – calculates the end of the year compared to the initial date

## Between Date Function Calls

* [`millisecondsBetween`](/refguide9/between-date-function-calls/) – the milliseconds between two dates
* [`secondsBetween`](/refguide9/between-date-function-calls/) – the seconds between two dates
* [`minutesBetween`](/refguide9/between-date-function-calls/) – the minutes between two dates
* [`hoursBetween`](/refguide9/between-date-function-calls/) – the hours between two dates
* [`daysBetween`](/refguide9/between-date-function-calls/) – the days between two dates
* [`weeksBetween`](/refguide9/between-date-function-calls/) – the weeks between two dates
* [`calendarMonthsBetween`](/refguide9/between-date-function-calls/) - the months between two dates
* [`calendarYearsBetween`](/refguide9/between-date-function-calls/) - the years between two dates

## Add Date Function Calls

* [`addMilliseconds`](/refguide9/add-date-function-calls/) – adds milliseconds to a date
* [`addSeconds`](/refguide9/add-date-function-calls/) – adds seconds to a date
* [`addMinutes`](/refguide9/add-date-function-calls/) – adds minutes to a date
* [`addHours`](/refguide9/add-date-function-calls/) – adds hours to a date
* [`addDays`](/refguide9/add-date-function-calls/) – adds days to a date
* [`addDaysUTC`](/refguide9/add-date-function-calls/) – adds days to a date using the UTC calendar
* [`addWeeks`](/refguide9/add-date-function-calls/) – adds weeks to a date
* [`addWeeksUTC`](/refguide9/add-date-function-calls/) – adds weeks to a date using the UTC calendar
* [`addMonths`](/refguide9/add-date-function-calls/) – adds months to a date
* [`addMonthsUTC`](/refguide9/add-date-function-calls/) – adds months to a date using the UTC calendar
* [`addQuarters`](/refguide9/add-date-function-calls/) – adds quarters to a date
* [`addQuartersUTC`](/refguide9/add-date-function-calls/) – adds quarters to a date using the UTC calendar
* [`addYears`](/refguide9/add-date-function-calls/) – adds years to a date
* [`addYearsUTC`](/refguide9/add-date-function-calls/) – adds years to a date using the UTC calendar

## Subtract Date Function Calls

* [`subtractMilliseconds`](/refguide9/subtract-date-function-calls/) – subtracts milliseconds from a date
* [`subtractSeconds`](/refguide9/subtract-date-function-calls/) – subtracts seconds from a date
* [`subtractMinutes`](/refguide9/subtract-date-function-calls/) – subtracts minutes from a date
* [`subtractHours`](/refguide9/subtract-date-function-calls/) – subtracts hours from a date
* [`subtractDays`](/refguide9/subtract-date-function-calls/) – subtracts days from a date
* [`subtractDaysUTC`](/refguide9/subtract-date-function-calls/) – subtracts days from a date using the UTC calendar
* [`subtractWeeks`](/refguide9/subtract-date-function-calls/) – subtracts weeks from a date
* [`subtractWeeksUTC`](/refguide9/subtract-date-function-calls/) – subtracts weeks from a date using the UTC calendar
* [`subtractMonths`](/refguide9/subtract-date-function-calls/) – subtracts months from a date
* [`subtractMonthsUTC`](/refguide9/subtract-date-function-calls/) – subtracts months from a date using the UTC calendar
* [`subtractQuarters`](/refguide9/subtract-date-function-calls/) – subtracts quarters from a date
* [`subtractQuartersUTC`](/refguide9/subtract-date-function-calls/) – subtracts quarters from a date using the UTC calendar
* [`subtractYears`](/refguide9/subtract-date-function-calls/) – subtracts years from a date
* [`subtractYearsUTC`](/refguide9/subtract-date-function-calls/) – subtracts years from a date using the UTC calendar

## Trim to Date

* [`trimToSeconds`](/refguide9/trim-to-date/) – trims to seconds
* [`trimToMinutes`](/refguide9/trim-to-date/) – trims to minutes
* [`trimToHours`](/refguide9/trim-to-date/) – trims to hours
* [`trimToHoursUTC`](/refguide9/trim-to-date/) – trims to hours using the UTC calendar
* [`trimToDays`](/refguide9/trim-to-date/) – trims to days
* [`trimToDaysUTC`](/refguide9/trim-to-date/) – trims to days using the UTC calendar
* [`trimToMonths`](/refguide9/trim-to-date/) – trims to months
* [`trimToMonthsUTC`](/refguide9/trim-to-date/) – trims to months using the UTC calendar
* [`trimToYears`](/refguide9/trim-to-date/) – trims to years
* [`trimToYearsUTC`](/refguide9/trim-to-date/) – trims to years using the UTC calendar

## To String

See [To String](/refguide9/to-string/) for details.

## Parse Integer

See [Parse Integer](/refguide9/parse-integer/) for details.

## Parse & Format Decimal Function Calls {#expressions-formatter-functions}

* [`parseDecimal`](/refguide9/parse-and-format-decimal-function-calls/) – converts a string to a decimal
* [`formatDecimal`](/refguide9/parse-and-format-decimal-function-calls/) – converts a decimal to a string

## Parse & Format Date Function Calls

* [`parseDateTime[UTC]`](/refguide9/parse-and-format-date-function-calls/) – converts a string to a date value
* [`formatDateTime[UTC]`](/refguide9/parse-and-format-date-function-calls/) – converts a date value to a string
* [`formatTime[UTC]`](/refguide9/parse-and-format-date-function-calls/) – converts the time part of a date value to a string
* [`formatDate[UTC]`](/refguide9/parse-and-format-date-function-calls/) – converts the date part of a date value to a string
* [`dateTimeToEpoch`](/refguide9/parse-and-format-date-function-calls/) – converts a date to a long
* [`epochToDateTime`](/refguide9/parse-and-format-date-function-calls/) – converts a long to a date

## Enumerations in Expressions

* [`getCaption`](/refguide9/enumerations-in-expressions/) – gets the caption of an enumeration value in current language
* [`getKey`](/refguide9/enumerations-in-expressions/) – gets the technical name of an enumeration value
