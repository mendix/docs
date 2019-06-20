---
title: "Expressions"
parent: "application-logic"
menu_order: 100
description: "Describes the expressions that can be used in Mendix for a variety of purposes (for example, to change a member of an object based on logic)."
tags: ["studio pro", "expressions", "microflow expressions"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Expressions can for example be used to change a member of an object based on logic. Variables in the microflow can be called in an expression by inserting the name of the variable and adding a dollar sign (for example,  `$customer` refers to the variable `customer`). Expressions can be used recursively (for example, `1 + 2 + 3`). Attributes and associations of object variables are accessed using a slash (for example, `$customer/Name`, `$customer/CRM.Customer_Order`).

To illustrate this imagine an object with variable name _package_ with two attributes: `weight` (Decimal) and `shippingCosts` (Decimal). Rule: if the weight of a package is less than one kilogram there are no shipping costs. Otherwise the shipping costs are €5.00\. The expression for changing attribute `shippingCosts` is: `if $package/weight < 1.00 then 0.00 else 5.00`.

An overview of the possibilities with expressions can be found below.

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
* [`isNew`](special-checks) - Checking whether an object is new

## 6 Boolean Expressions

* [and](boolean-expressions)
* [or](boolean-expressions)
* [not](boolean-expressions)

## 7 If Expressions

* [if](if-expressions) - perform a conditional action

## 8 Mathematical Function Calls

* [`max`](mathematical-function-calls) - Maximum of a list of numbers
* [`min`](mathematical-function-calls) - Minimum of a list of numbers
* [`round`](mathematical-function-calls) - Rounding a floating-point number, optionally to a specified precision
* [`random`](mathematical-function-calls) - Random number generation
* [`floor`](mathematical-function-calls) - Rounding a floating-point number down
* [`ceil`](mathematical-function-calls) - Rounding a floating-point number up
* [`pow`](mathematical-function-calls) - Exponentiation
* [`abs`](mathematical-function-calls) - Absolute value

## 9 String Function Calls

* [`toUpperCase`](string-function-calls) - Convert string to uppercase
* [`toLowerCase`](string-function-calls) - Convert string to lowercase
* [`length`](string-function-calls) - String length
* [`substring`](string-function-calls) - Get part of a string
* [`find`](string-function-calls) - Get substring position
* [`findLast`](string-function-calls) - Get last substring position
* [`contains`](string-function-calls) - Contains substring
* [`startsWith`](string-function-calls)  - Determine whether a string starts with the specified substring
* [`endsWith`](string-function-calls)  - Determine whether a string ends with the specified substring
* [`trim`](string-function-calls) - Remove leading and trailing whitespace
* [`isMatch`](string-function-calls) - Match regular expression
* [`replaceAll`](string-function-calls) - Replace occurences of substring
* [`replaceFirst`](string-function-calls) - Replace first occurence of substring
* [String concatenation ( + )](string-function-calls) - Concatenate strings
* [`urlEncode`](string-function-calls) - Convert a string to be used in a URL
* [`urlDecode`](string-function-calls) - Convert a string back from a URL

## 10 [Date Creation

* [`dateTime`](date-creation) - Creating a date value using the server's calendar
* [`dateTimeUTC`](date-creation) - Creating a date value using the UTC calendar

## 11 Between Date Function Calls

* [`millisecondsBetween`](between-date-function-calls) - Milliseconds between two dates
* [`secondsBetween`](between-date-function-calls) - Seconds between two dates
* [`minutesBetween`](between-date-function-calls) - Minutes between two dates
* [`hoursBetween`](between-date-function-calls) - Hours between two dates
* [`daysBetween`](between-date-function-calls) - Days between two dates
* [`weeksBetween`](between-date-function-calls) - Weeks between two dates

## 12 Add Date Function Calls

* [`addMilliseconds`](add-date-function-calls) - Add milliseconds to a date
* [`addSeconds`](add-date-function-calls) - Add seconds to a date
* [`addMinutes`](add-date-function-calls) - Add minutes to a date
* [`addHours`](add-date-function-calls) - Add hours to a date
* [`addDays`](add-date-function-calls) - Add days to a date
* [`addDaysUTC`](add-date-function-calls) - Add days to a date using the UTC calendar
* [`addWeeks`](add-date-function-calls) - Add weeks to a date
* [`addWeeksUTC`](add-date-function-calls) - Add weeks to a date using the UTC calendar
* [`addMonths`](add-date-function-calls) - Add months to a date
* [`addMonthsUTC`](add-date-function-calls) - Add months to a date using the UTC calendar
* [`addYears`](add-date-function-calls) - Add years to a date
* [`addYearsUTC`](add-date-function-calls) - Add years to a date using the UTC calendar

## 13 Trim to Date

* [`trimToSeconds`](trim-to-date) - Trim to seconds
* [`trimToMinutes`](trim-to-date) - Trim to minutes
* [`trimToHours`](trim-to-date) - Trim to hours
* [`trimToHoursUTC`](trim-to-date) - Trim to hours using the UTC calendar
* [`trimToDays`](trim-to-date) - Trim to days
* [`trimToDaysUTC`](trim-to-date) - Trim to days using the UTC calendar
* [`trimToMonths`](trim-to-date) - Trim to months
* [`trimToMonthsUTC`](trim-to-date) - Trim to months using the UTC calendar
* [`trimToYears`](trim-to-date) - Trim to years
* [`trimToYearsUTC`](trim-to-date) - Trim to years using the UTC calendar

## 14 To String

## 15 Parse Integer

## 16 Parse/Format Decimal Function Calls

* [`parseDecimal`](parse-and-format-decimal-function-calls)  - Convert a string to a decimal
* [`formatDecimal`](parse-and-format-decimal-function-calls)  - Convert a decimal to a string

## 17 Parse/Format Date Function Calls

* [`parseDateTime[UTC]`](parse-and-format-date-function-calls) - Convert a string to a date value
* [`formatDateTime[UTC]`](parse-and-format-date-function-calls) - Convert a date value to a string
* [`formatTime[UTC]`](parse-and-format-date-function-calls) - Convert the time part of a date value to a string
* [`formatDate[UTC]`](parse-and-format-date-function-calls) - Convert the date part of a date value to a string

## 18 Enumerations in Expressions

* [`getCaption`](enumerations-in-expressions) - Get caption of enumeration value in current language
* [`getKey`](enumerations-in-expressions) - Get technical name of enumeration value
