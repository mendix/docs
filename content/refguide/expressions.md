---
title: "Expressions"
parent: "application-logic"
menu_order: 30
description: "Describes the expressions that can be used in Mendix for a variety of purposes (for example, to change a member of an object based on logic)."
tags: ["studio pro", "expressions", "microflow expressions"]
aliases:
    - /refguide/microflow-expressions.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Expressions change a value based on a function or combination of functions. 

Named items (for example, objects, lists, or variables) can be called in an expression by inserting the name of the item and adding a dollar sign (for example,  `$customer` could refer to an object named `customer`).

Attributes and associations of objects are accessed using a slash (for example, the **Name** attribute of the customer object is referred to as `$customer/Name`, and the **CRM.Customer_Order** association of the customer object is referred to as `$customer/CRM.Customer_Order`).

Attributes of associated objects can be accessed using multiple slashes (for example, the **Number** attribute of a single associated **CRM.Order** is referred to as `$customer/CRM.Customer_Order/CRM.Order/Number`).

You can combine functions in an expression. In this case, you can use brackets to determine the priority and associativity of calculations. For example, the **SellingPrice** is being calculated based on the default **Price** and **Discount** attributes:

```sql
$CurrentPrice/Price - (($CurrentPrice/Price **div** 100) * $OrderLine/Discount)
```

Arithmetic functions (subtraction, dividing, and multiplying) are being combined here.

### 1.1 Examples

For example, you have an object called **package** with two attributes: `weight` (decimal) and `shippingCosts` (decimal). If the weight of a package is less than one kilogram, there are no shipping costs. Otherwise, the shipping costs are €5.00. The expression for changing the `shippingCosts` attribute is:

```sql
if $package/weight < 1.00 then 0.00 else 5.00`
```

{{% alert type="warning" %}}
When an object is empty, accessing an attribute is considered invalid. If part of an expression is invalid, it will cause an exception and the result will return `false`. The object's attribute cannot be accessed and the expression cannot be evaluated. This can be crucial when evaluating multiple statements within an expression. See the examples below for more information.
{{% /alert %}}

Evaluating the expression:

```sql
$emptyObject/attribute != $validObject/attribute or $emptyObject = empty
```

will always return `false`, as long as `emptyObject` is empty. The second part of the statement never gets evaluated.

To have both checks evaluated, the order of statements needs to be reversed:

```sql
$emptyObject = empty or $emptyObject/attribute != $validObject/attribute
```

This way the first statement gets evaluated.

### 1.2 Regular Expressions

[Regular Expression](regular-expressions) resource documents cannot be used in expressions. However, the format of regular expressions, sub-expressions, and quantifiers used in regular expression strings is the same as the ones described in the [Expression](regular-expressions#expression) section of *Regular Expressions*.

## 2 Unary Expressions

* [Unary minus ( - )](unary-expressions)

## 3 Arithmetic Expressions

* [Multiplication ( * )](arithmetic-expressions)
* [Division ( div or : )](arithmetic-expressions)
* [Modulo ( mod )](arithmetic-expressions)
* [Addition ( + )](arithmetic-expressions)
* [Subtraction ( - )](arithmetic-expressions)

## 4 Relational Expressions

* [Less than ( < )](relational-expressions)
* [Greater than ( > )](relational-expressions)
* [Less than or equal to ( <= )](relational-expressions)
* [Greater than or equal to ( >= )](relational-expressions)
* [Is equal to ( = )](relational-expressions)
* [Is not equal to ( != )](relational-expressions)

## 5 Special Checks

* [Checking for an empty object](special-checks)
* [Checking for an empty object member](special-checks)
* [`isNew`](special-checks) – checks whether an object is new

## 6 Boolean Expressions

* [and](boolean-expressions)
* [or](boolean-expressions)
* [not](boolean-expressions)

## 7 If Expressions

* [if](if-expressions) – performs a conditional action

## 8 Mathematical Function Calls

* [`max`](mathematical-function-calls) – the maximum of a list of numbers
* [`min`](mathematical-function-calls) – the minimum of a list of numbers
* [`round`](mathematical-function-calls) – the rounding of a floating-point number, optionally to a specified precision
* [`random`](mathematical-function-calls) – random number generation
* [`floor`](mathematical-function-calls) – the rounding of a floating-point number down
* [`ceil`](mathematical-function-calls) – the rounding of a floating-point number up
* [`pow`](mathematical-function-calls) – the exponentiation
* [`abs`](mathematical-function-calls) – the absolute value

## 9 String Function Calls

* [`toUpperCase`](string-function-calls) – converts the string to upper-case
* [`toLowerCase`](string-function-calls) – converts the string to lower-case
* [`length`](string-function-calls) – the string length
* [`substring`](string-function-calls) – gets a part of a string
* [`find`](string-function-calls) – gets a sub-string position
* [`findLast`](string-function-calls) – gets the last sub-string position
* [`contains`](string-function-calls) – contains the sub-string
* [`startsWith`](string-function-calls)  – determines whether a string starts with the specified sub-string
* [`endsWith`](string-function-calls) – determines whether a string ends with the specified sub-string
* [`trim`](string-function-calls) – removes the leading and trailing whitespace
* [`isMatch`](string-function-calls) – matches a regular expression
* [`replaceAll`](string-function-calls) – replaces the occurrences of a sub-string
* [`replaceFirst`](string-function-calls) – replaces the first occurrence of a sub-string
* [`String concatenation ( + )`](string-function-calls) – concatenates strings
* [`urlEncode`](string-function-calls) – converts a string to be used in a URL
* [`urlDecode`](string-function-calls) – converts a string back from a URL

## 10 Date Creation

* [`dateTime`](date-creation) – creating a date value using the server's calendar
* [`dateTimeUTC`](date-creation) – creating a date value using the UTC calendar

## 11 Between Date Function Calls

* [`millisecondsBetween`](between-date-function-calls) – the milliseconds between two dates
* [`secondsBetween`](between-date-function-calls) – the seconds between two dates
* [`minutesBetween`](between-date-function-calls) – the minutes between two dates
* [`hoursBetween`](between-date-function-calls) – the hours between two dates
* [`daysBetween`](between-date-function-calls) – the days between two dates
* [`weeksBetween`](between-date-function-calls) – the weeks between two dates
* [`calendarMonthsBetween`](between-date-function-calls) - the months between two dates
* [`calendarYearsBetween`](between-date-function-calls) - the years between two dates

## 12 Add Date Function Calls

* [`addMilliseconds`](add-date-function-calls) – adds milliseconds to a date
* [`addSeconds`](add-date-function-calls) – adds seconds to a date
* [`addMinutes`](add-date-function-calls) – adds minutes to a date
* [`addHours`](add-date-function-calls) – adds hours to a date
* [`addDays`](add-date-function-calls) – adds days to a date
* [`addDaysUTC`](add-date-function-calls) – adds days to a date using the UTC calendar
* [`addWeeks`](add-date-function-calls) – adds weeks to a date
* [`addWeeksUTC`](add-date-function-calls) – adds weeks to a date using the UTC calendar
* [`addMonths`](add-date-function-calls) – adds months to a date
* [`addMonthsUTC`](add-date-function-calls) – adds months to a date using the UTC calendar
* [`addYears`](add-date-function-calls) – adds years to a date
* [`addYearsUTC`](add-date-function-calls) – adds years to a date using the UTC calendar

## 13 Trim to Date

* [`trimToSeconds`](trim-to-date) – trims to seconds
* [`trimToMinutes`](trim-to-date) – trims to minutes
* [`trimToHours`](trim-to-date) – trims to hours
* [`trimToHoursUTC`](trim-to-date) – trims to hours using the UTC calendar
* [`trimToDays`](trim-to-date) – trims to days
* [`trimToDaysUTC`](trim-to-date) – trims to days using the UTC calendar
* [`trimToMonths`](trim-to-date) – trims to months
* [`trimToMonthsUTC`](trim-to-date) – trims to months using the UTC calendar
* [`trimToYears`](trim-to-date) – trims to years
* [`trimToYearsUTC`](trim-to-date) – trims to years using the UTC calendar

## 14 To String

See [To String](to-string) for details.

## 15 Parse Integer

See [Parse Integer](parse-integer) for details.

## 16 Parse & Format Decimal Function Calls

* [`parseDecimal`](parse-and-format-decimal-function-calls) – converts a string to a decimal
* [`formatDecimal`](parse-and-format-decimal-function-calls) – converts a decimal to a string

## 17 Parse & Format Date Function Calls

* [`parseDateTime[UTC]`](parse-and-format-date-function-calls) – converts a string to a date value
* [`formatDateTime[UTC]`](parse-and-format-date-function-calls) – converts a date value to a string
* [`formatTime[UTC]`](parse-and-format-date-function-calls) – converts the time part of a date value to a string
* [`formatDate[UTC]`](parse-and-format-date-function-calls) – converts the date part of a date value to a string
* [`dateTimeToEpoch`](parse-and-format-date-function-calls) – converts a date to a long
* [`epochToDateTime`](parse-and-format-date-function-calls) – converts a long to a date

## 18 Enumerations in Expressions

* [`getCaption`](enumerations-in-expressions) – gets the caption of an enumeration value in current language
* [`getKey`](enumerations-in-expressions) – gets the technical name of an enumeration value
