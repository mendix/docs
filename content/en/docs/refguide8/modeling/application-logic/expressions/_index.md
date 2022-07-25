---
title: "Expressions"
url: /refguide8/expressions/
weight: 100
description: "Describes the expressions that can be used in Mendix for a variety of purposes (for example, to change a member of an object based on logic)."
tags: ["studio pro", "expressions", "microflow expressions"]
aliases:
    - /refguide8/microflow-expressions.html
    - /refguide8/microflow-expressions
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/expressions.pdf).
{{% /alert %}}

## 1 Introduction

Expressions changes a value based on a function or combination of functions. 

Named items in the microflow (for example, objects, lists, or variables) can be called in an expression by inserting the name of the item and adding a dollar sign (for example,  `$customer` could refer to an object named `customer`).

Attributes and associations of objects are accessed using a slash (for example, the **Name** attribute of the customer object is referred to as `$customer/Name`, and the **CRM.Customer_Order** association of the customer object is referred to as `$customer/CRM.Customer_Order`).

Starting from Studio Pro [8.10.0](/releasenotes/studio-pro/8.10/#8100), attributes of associated objects can be accessed using multiple slashes (for example, the **Number** attribute of a single associated **CRM.Order** is referred to as `$customer/CRM.Customer_Order/CRM.Order/Number`).

You can combine functions in an expression. In this case, you can use brackets to determine the priority and associativity of calculations. For example, the **SellingPrice** is being calculated based on the default **Price** and **Discount** attributes:

```
$CurrentPrice/Price - (($CurrentPrice/Price **div** 100) * $OrderLine/Discount)
```

Arithmetic functions (subtraction, dividing, and multiplying) are being combined here.

### 1.1 Example

For example, you have an object called **package** with two attributes: `weight` (decimal) and `shippingCosts` (decimal). If the weight of a package is less than one kilogram, there are no shipping costs. Otherwise, the shipping costs are €5.00. The expression for changing the `shippingCosts` attribute is:

```
if $package/weight < 1.00 then 0.00 else 5.00`
```

### 1.2 Regular Expressions

[Regular Expression](/refguide8/regular-expressions/) resource documents cannot be used in expressions. However, the format of regular expressions, sub-expressions, and quantifiers used in regular expression strings is the same as the ones described in the [Expression](/refguide8/regular-expressions/#expression) section of *Regular Expressions*.

## 2 Unary Expressions

* [Unary minus ( - )](/refguide8/unary-expressions/)

## 3 Arithmetic Expressions

* [Multiplication ( * )](/refguide8/arithmetic-expressions/)
* [Division ( div or : )](/refguide8/arithmetic-expressions/)
* [Modulo ( mod )](/refguide8/arithmetic-expressions/)
* [Addition ( + )](/refguide8/arithmetic-expressions/)
* [Subtraction ( - )](/refguide8/arithmetic-expressions/)

## 4 Relational Expressions

* [Less than ( < )](/refguide8/relational-expressions/)
* [Greater than ( > )](/refguide8/relational-expressions/)
* [Less than or equal to ( <= )](/refguide8/relational-expressions/)
* [Greater than or equal to ( >= )](/refguide8/relational-expressions/)
* [Is equal to ( = )](/refguide8/relational-expressions/)
* [Is not equal to ( != )](/refguide8/relational-expressions/)

## 5 Special Checks

* [Checking for an empty object](/refguide8/special-checks/)
* [Checking for an empty object member](/refguide8/special-checks/)
* [`isNew`](/refguide8/special-checks/) – checks whether an object is new

## 6 Boolean Expressions

* [and](/refguide8/boolean-expressions/)
* [or](/refguide8/boolean-expressions/)
* [not](/refguide8/boolean-expressions/)

## 7 If Expressions

* [if](/refguide8/if-expressions/) – performs a conditional action

## 8 Mathematical Function Calls

* [`max`](/refguide8/mathematical-function-calls/) – the maximum of a list of numbers
* [`min`](/refguide8/mathematical-function-calls/) – the minimum of a list of numbers
* [`round`](/refguide8/mathematical-function-calls/) – the rounding of a floating-point number, optionally to a specified precision
* [`random`](/refguide8/mathematical-function-calls/) – random number generation
* [`floor`](/refguide8/mathematical-function-calls/) – the rounding of a floating-point number down
* [`ceil`](/refguide8/mathematical-function-calls/) – the rounding of a floating-point number up
* [`pow`](/refguide8/mathematical-function-calls/) – the exponentiation
* [`abs`](/refguide8/mathematical-function-calls/) – the absolute value

## 9 String Function Calls

* [`toUpperCase`](/refguide8/string-function-calls/) – converts the string to upper-case
* [`toLowerCase`](/refguide8/string-function-calls/) – converts the string to lower-case
* [`length`](/refguide8/string-function-calls/) – the string length
* [`substring`](/refguide8/string-function-calls/) – gets a part of a string
* [`find`](/refguide8/string-function-calls/) – gets a sub-string position
* [`findLast`](/refguide8/string-function-calls/) – gets the last sub-string position
* [`contains`](/refguide8/string-function-calls/) – contains the sub-string
* [`startsWith`](/refguide8/string-function-calls/)  – determines whether a string starts with the specified sub-string
* [`endsWith`](/refguide8/string-function-calls/) – determines whether a string ends with the specified sub-string
* [`trim`](/refguide8/string-function-calls/) – removes the leading and trailing whitespace
* [`isMatch`](/refguide8/string-function-calls/) – matches a regular expression
* [`replaceAll`](/refguide8/string-function-calls/) – replaces the occurrences of a sub-string
* [`replaceFirst`](/refguide8/string-function-calls/) – replaces the first occurrence of a sub-string
* [`String concatenation ( + )`](/refguide8/string-function-calls/) – concatenates strings
* [`urlEncode`](/refguide8/string-function-calls/) – converts a string to be used in a URL
* [`urlDecode`](/refguide8/string-function-calls/) – converts a string back from a URL

## 10 Date Creation

* [`dateTime`](/refguide8/date-creation/) – creating a date value using the server's calendar
* [`dateTimeUTC`](/refguide8/date-creation/) – creating a date value using the UTC calendar

## 11 Between Date Function Calls

* [`millisecondsBetween`](/refguide8/between-date-function-calls/) – the milliseconds between two dates
* [`secondsBetween`](/refguide8/between-date-function-calls/) – the seconds between two dates
* [`minutesBetween`](/refguide8/between-date-function-calls/) – the minutes between two dates
* [`hoursBetween`](/refguide8/between-date-function-calls/) – the hours between two dates
* [`daysBetween`](/refguide8/between-date-function-calls/) – the days between two dates
* [`weeksBetween`](/refguide8/between-date-function-calls/) – the weeks between two dates
* [`calendarMonthsBetween`](/refguide8/between-date-function-calls/) - the months between two dates
* [`calendarYearsBetween`](/refguide8/between-date-function-calls/) - the years between two dates

## 12 Add Date Function Calls

* [`addMilliseconds`](/refguide8/add-date-function-calls/) – adds milliseconds to a date
* [`addSeconds`](/refguide8/add-date-function-calls/) – adds seconds to a date
* [`addMinutes`](/refguide8/add-date-function-calls/) – adds minutes to a date
* [`addHours`](/refguide8/add-date-function-calls/) – adds hours to a date
* [`addDays`](/refguide8/add-date-function-calls/) – adds days to a date
* [`addDaysUTC`](/refguide8/add-date-function-calls/) – adds days to a date using the UTC calendar
* [`addWeeks`](/refguide8/add-date-function-calls/) – adds weeks to a date
* [`addWeeksUTC`](/refguide8/add-date-function-calls/) – adds weeks to a date using the UTC calendar
* [`addMonths`](/refguide8/add-date-function-calls/) – adds months to a date
* [`addMonthsUTC`](/refguide8/add-date-function-calls/) – adds months to a date using the UTC calendar
* [`addYears`](/refguide8/add-date-function-calls/) – adds years to a date
* [`addYearsUTC`](/refguide8/add-date-function-calls/) – adds years to a date using the UTC calendar

## 13 Trim to Date

* [`trimToSeconds`](/refguide8/trim-to-date/) – trims to seconds
* [`trimToMinutes`](/refguide8/trim-to-date/) – trims to minutes
* [`trimToHours`](/refguide8/trim-to-date/) – trims to hours
* [`trimToHoursUTC`](/refguide8/trim-to-date/) – trims to hours using the UTC calendar
* [`trimToDays`](/refguide8/trim-to-date/) – trims to days
* [`trimToDaysUTC`](/refguide8/trim-to-date/) – trims to days using the UTC calendar
* [`trimToMonths`](/refguide8/trim-to-date/) – trims to months
* [`trimToMonthsUTC`](/refguide8/trim-to-date/) – trims to months using the UTC calendar
* [`trimToYears`](/refguide8/trim-to-date/) – trims to years
* [`trimToYearsUTC`](/refguide8/trim-to-date/) – trims to years using the UTC calendar

## 14 To String

See [To String](/refguide8/to-string/) for details.

## 15 Parse Integer

See [Parse Integer](/refguide8/parse-integer/) for details.

## 16 Parse & Format Decimal Function Calls

* [`parseDecimal`](/refguide8/parse-and-format-decimal-function-calls/) – converts a string to a decimal
* [`formatDecimal`](/refguide8/parse-and-format-decimal-function-calls/) – converts a decimal to a string

## 17 Parse & Format Date Function Calls

* [`parseDateTime[UTC]`](/refguide8/parse-and-format-date-function-calls/) – converts a string to a date value
* [`formatDateTime[UTC]`](/refguide8/parse-and-format-date-function-calls/) – converts a date value to a string
* [`formatTime[UTC]`](/refguide8/parse-and-format-date-function-calls/) – converts the time part of a date value to a string
* [`formatDate[UTC]`](/refguide8/parse-and-format-date-function-calls/) – converts the date part of a date value to a string
* [`dateTimeToEpoch`](/refguide8/parse-and-format-date-function-calls/) – converts a date to a long
* [`epochToDateTime`](/refguide8/parse-and-format-date-function-calls/) – converts a long to a date

## 18 Enumerations in Expressions

* [`getCaption`](/refguide8/enumerations-in-expressions/) – gets the caption of an enumeration value in current language
* [`getKey`](/refguide8/enumerations-in-expressions/) – gets the technical name of an enumeration value
