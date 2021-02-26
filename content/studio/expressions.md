---
title: "Expressions"
menu_order: 55
description: "Describes the microflow expressions available in Mendix Studio."
tags: ["studio", "microflow", "expressions", "expression", "set value", "variable"]
aliases:
    - /studio/microflows-expressions.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

Expressions changes a value based on a function or combination of functions. 

Named items in microflows and workflows (for example, objects, lists, or variables) can be called in an expression by inserting the name of the item and adding a dollar sign (for example,  `$customer` could refer to an object named `customer`).

Attributes and associations of objects are accessed using a slash (for example, the **Name** attribute of the customer object is referred to as `$customer/Name`).

You can combine functions in an expression. In this case, you can use brackets to determine the priority and associativity of calculations. For example, the **SellingPrice** is being calculated based on the default **Price** and **Discount** attributes:

```
$CurrentPrice/Price - (($CurrentPrice/Price **div** 100) * $OrderLine/Discount)
```

Arithmetic functions (subtraction, dividing, and multiplying) are being combined here.

You can use expressions for microflows and workflows and are usually used to configure a condition for a certain activity. Expressions can be used for the following activities in a microflow: 

*  End Event
*  [Decision](microflows-decision)
*  Create Object
*  Change Object
*  Create Variable 
*  Change Variable

You can use expression for the following elements in a workflow:

* [Decision](workflows-general-activities)
* **Due date** property of a [workflow](workflow-properties) and a [user task](user-task)

For more information on setting and changing values for microflow activities, see [Set & Change a Value for Different Activities in the Microflows](microflows-setting-and-changing-value).

## 2 Writing an Expression

You can use a list of suggestions to help you write an expression. Use <kbd>Ctrl</kbd> + <kbd>Space</kbd> shortcut to display this list. Suggestions can be divided into the following categories:

* **Suggestions from your microflow** – variables or attributes that you have created or retrieved in your microflow
* **Enumeration values** – values of [enumeration type of attributes](domain-models-enumeration) that can be used in an expression
* **Keywords** – key phrases or words that you can use in an expression
* **Booleans** – true or false expressions
* **Operators** – code elements that perform logical or mathematical operations. You can use Boolean or relational expressions (for more information, see the [Expression Types](#expression-types) section below)
* **Empty** – a value that can be used to check if a variable is empty

If an error appears in the expression, error messages with explanations will be displayed. 

{{% image_container width="350" %}}![](attachments/expressions/expression-error.png)
{{% /image_container %}}

### 2.3  Expression Examples

Below are two examples that illustrate how expressions can be used. 

#### 2.3.1 Example 1

You have a [Decision](microflows-decision) and you want to write an expression that checks whether the customer grade is gold and the price of the order is more than 100 (you can configure a discount after the **Decision** that is allowed if this expression is true):

![](attachments/expressions/example-decision.png) 

The expression will look the following way:

![](attachments/expressions/expression-decision.png)

#### 2.3.2 Example 2

You add a [Decision](microflows-decision) to check if an object (in the example below the object is *Customer*) exists. And you also check if the Customer's name matches a particular one (in the example below Customer's name is *Mendix*). The expression will look the following way:

![](attachments/expressions/customer-empty-and-name-example.png)

## 3 Expression Types {#expression-types}

A list of the operators you can use in expressions in Studio can be found below:

### 3.1 Unary Expressions

* [Unary minus ( - )](/refguide/unary-expressions)

### 3.2 Arithmetic Expressions

* [Multiplication ( * )](/refguide/arithmetic-expressions)
* [Division ( div or : )](/refguide/arithmetic-expressions)
* [Modulo ( mod )](/refguide/arithmetic-expressions)
* [Addition ( + )](/refguide/arithmetic-expressions)
* [Subtraction ( - )](/refguide/arithmetic-expressions)

### 3.3 Relational Expressions

* [Less than ( < )](/refguide/relational-expressions)
* [Greater than ( > )](/refguide/relational-expressions)
* [Less than or equal to ( <= )](/refguide/relational-expressions)
* [Greater than or equal to ( >= )](/refguide/relational-expressions)
* [Is equal to ( = )](/refguide/relational-expressions)
* [Is not equal to ( != )](/refguide/relational-expressions)

### 3.4 Special Checks

* [Checking for an empty object](/refguide/special-checks)
* [Checking for an empty object member](/refguide/special-checks)
* [`isNew`](/refguide/special-checks) – checks whether an object is new

### 3.5 Boolean Expressions

* [and](/refguide/boolean-expressions)
* [or](/refguide/boolean-expressions)
* [not](/refguide/boolean-expressions)

### 3.6 If Expressions

* [if](/refguide/if-expressions) – performs a conditional action

### 3.7 Mathematical Function Calls

* [`max`](/refguide/mathematical-function-calls) – the maximum of a list of numbers
* [`min`](/refguide/mathematical-function-calls) – the minimum of a list of numbers
* [`round`](/refguide/mathematical-function-calls) – the rounding of a floating-point number, optionally to a specified precision
* [`random`](/refguide/mathematical-function-calls) – random number generation
* [`floor`](/refguide/mathematical-function-calls) – the rounding of a floating-point number down
* [`ceil`](/refguide/mathematical-function-calls) – the rounding of a floating-point number up
* [`pow`](/refguide/mathematical-function-calls) – the exponentiation
* [`abs`](/refguide/mathematical-function-calls) – the absolute value

### 3.8 String Function Calls

* [`toUpperCase`](/refguide/string-function-calls) – converts the string to upper-case
* [`toLowerCase`](/refguide/string-function-calls) – converts the string to lower-case
* [`length`](/refguide/string-function-calls) – the string length
* [`substring`](/refguide/string-function-calls) – gets a part of a string
* [`find`](/refguide/string-function-calls) – gets a sub-string position
* [`findLast`](/refguide/string-function-calls) – gets the last sub-string position
* [`contains`](/refguide/string-function-calls) – contains the sub-string
* [`startsWith`](/refguide/string-function-calls)  – determines whether a string starts with the specified sub-string
* [`endsWith`](/refguide/string-function-calls) – determines whether a string ends with the specified sub-string
* [`trim`](/refguide/string-function-calls) – removes the leading and trailing whitespace
* [`isMatch`](/refguide/string-function-calls) – matches a regular expression
* [`replaceAll`](/refguide/string-function-calls) – replaces the occurrences of a sub-string
* [`replaceFirst`](/refguide/string-function-calls) – replaces the first occurrence of a sub-string
* [`String concatenation ( + )`](/refguide/string-function-calls) – concatenates strings
* [`urlEncode`](/refguide/string-function-calls) – converts a string to be used in a URL
* [`urlDecode`](/refguide/string-function-calls) – converts a string back from a URL

### 3.9 Date Creation

* [`dateTime`](/refguide/date-creation) – creating a date value using the server's calendar
* [`dateTimeUTC`](/refguide/date-creation) – creating a date value using the UTC calendar

### 3.10 Between Date Function Calls

* [`millisecondsBetween`](/refguide/between-date-function-calls) – the milliseconds between two dates
* [`secondsBetween`](/refguide/between-date-function-calls) – the seconds between two dates
* [`minutesBetween`](/refguide/between-date-function-calls) – the minutes between two dates
* [`hoursBetween`](/refguide/between-date-function-calls) – the hours between two dates
* [`daysBetween`](/refguide/between-date-function-calls) – the days between two dates
* [`weeksBetween`](/refguide/between-date-function-calls) – the weeks between two dates
* [`calendarMonthsBetween`](/refguide/between-date-function-calls) - the months between two dates
* [`calendarYearsBetween`](/refguide/between-date-function-calls) - the years between two dates

### 3.11 Add Date Function Calls

* [`addMilliseconds`](/refguide/add-date-function-calls) – adds milliseconds to a date
* [`addSeconds`](/refguide/add-date-function-calls) – adds seconds to a date
* [`addMinutes`](/refguide/add-date-function-calls) – adds minutes to a date
* [`addHours`](/refguide/add-date-function-calls) – adds hours to a date
* [`addDays`](/refguide/add-date-function-calls) – adds days to a date
* [`addDaysUTC`](/refguide/add-date-function-calls) – adds days to a date using the UTC calendar
* [`addWeeks`](/refguide/add-date-function-calls) – adds weeks to a date
* [`addWeeksUTC`](/refguide/add-date-function-calls) – adds weeks to a date using the UTC calendar
* [`addMonths`](/refguide/add-date-function-calls) – adds months to a date
* [`addMonthsUTC`](/refguide/add-date-function-calls) – adds months to a date using the UTC calendar
* [`addYears`](/refguide/add-date-function-calls) – adds years to a date
* [`addYearsUTC`](/refguide/add-date-function-calls) – adds years to a date using the UTC calendar

### 3.12 Trim to Date

* [`trimToSeconds`](/refguide/trim-to-date) – trims to seconds
* [`trimToMinutes`](/refguide/trim-to-date) – trims to minutes
* [`trimToHours`](/refguide/trim-to-date) – trims to hours
* [`trimToHoursUTC`](/refguide/trim-to-date) – trims to hours using the UTC calendar
* [`trimToDays`](/refguide/trim-to-date) – trims to days
* [`trimToDaysUTC`](/refguide/trim-to-date) – trims to days using the UTC calendar
* [`trimToMonths`](/refguide/trim-to-date) – trims to months
* [`trimToMonthsUTC`](/refguide/trim-to-date) – trims to months using the UTC calendar
* [`trimToYears`](/refguide/trim-to-date) – trims to years
* [`trimToYearsUTC`](/refguide/trim-to-date) – trims to years using the UTC calendar

### 3.13 To String

See [To String](/refguide/to-string) for details.

### 3.14 Parse Integer

See [Parse Integer](/refguide/parse-integer) for details.

### 3.15 Parse & Format Decimal Function Calls

* [`parseDecimal`](/refguide/parse-and-format-decimal-function-calls) – converts a string to a decimal
* [`formatDecimal`](/refguide/parse-and-format-decimal-function-calls) – converts a decimal to a string

### 3.16 Parse & Format Date Function Calls

* [`parseDateTime[UTC]`](/refguide/parse-and-format-date-function-calls) – converts a string to a date value
* [`formatDateTime[UTC]`](/refguide/parse-and-format-date-function-calls) – converts a date value to a string
* [`formatTime[UTC]`](/refguide/parse-and-format-date-function-calls) – converts the time part of a date value to a string
* [`formatDate[UTC]`](/refguide/parse-and-format-date-function-calls) – converts the date part of a date value to a string
* [`dateTimeToEpoch`](/refguide/parse-and-format-date-function-calls) – converts a date to a long
* [`epochToDateTime`](/refguide/parse-and-format-date-function-calls) – converts a long to a date

### 3.17 Enumerations in Expressions

* [`getCaption`](/refguide/enumerations-in-expressions) – gets the caption of an enumeration value in current language
* [`getKey`](/refguide/enumerations-in-expressions) – gets the technical name of an enumeration value

## 4 Read More

* [Microflows](microflows)
* [Workflows](workflows)
* [Set & Change a Value for Different Activities in the Microflows](microflows-setting-and-changing-value)
* [Expressions](/refguide/expressions)
