---
title: "Expressions"
url: /studio/expressions/
weight: 55
description: "Describes the microflow expressions available in Mendix Studio."
tags: ["studio", "microflow", "expressions", "expression", "set value", "variable"]
aliases:
    - /studio/microflows-expressions.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

Expressions changes a value based on a function or combination of functions. 

You can use expressions for workflows, pages, and microflows. The expressions are usually used to configure a condition for a certain activity or property, for example, a condition for a decision in a microflow or a workflow. 

You can use expressions for the following elements in a workflow:

* [Decision](/studio/workflows-general-activities/)
* **Due date** property of a [workflow](/studio/workflow-properties/) and a [user task](/studio/workflows-user-task/)

Expressions can be used in the following properties on a page:

* Conditional editability of a widget
* Conditional visibility of a widget
* **Content** property of a [text widget](/studio/page-editor-widgets-text/)

Expressions can be used for the following activities in a microflow: 

*  Change Object
*  Change Variable
*  Create Object
*  Create Variable
*  [Decision](/studio/microflows-decision/)
*  End Event

For more information on setting and changing values for microflow activities, see [Set & Change a Value for Different Activities in the Microflows](/studio/microflows-setting-and-changing-value/).

## 2 Writing an Expression

Named items in microflows and workflows (for example, objects, lists, or variables) can be called in an expression by inserting the name of the item and adding a dollar sign (for example,  `$Customer` could refer to an object named `Customer`).

Attributes and associations of objects are accessed using a slash (for example, the **Name** attribute of the customer object is referred to as `$Customer/Name`).

You can use brackets to determine the priority and associativity of calculations. For example, the **SellingPrice** is being calculated based on the default **Price** and **Discount** attributes:

```
$CurrentPrice/Price - (($CurrentPrice/Price div 100) * $OrderLine/Discount)
```

Arithmetic functions (subtraction, dividing, and multiplying) are being combined here.

You cannot type plain text in an expression, text needs the be written with single quotation marks (`'`) around it. For example, if you would like to return a string `Mendix`, you need to write it as `'Mendix'`.

You can use a list of suggestions to help you write an expression. Use <kbd>Ctrl</kbd> + <kbd>Space</kbd> shortcut to display this list. Suggestions can be divided into the following categories:

* **Variables and their attributes** – variables or attributes that are available in a current microflow, on a page, or in a workflow
* **Enumeration values** – values of [enumeration type of attributes](/studio/domain-models-enumeration/) that can be used in an expression
* **Functions** – operations you can use in an expression (for more information, see the [Expression Types](#expression-types) section below)
* **Keywords** – key phrases or words that you can use in an expression (for example, `empty` – a value that can be used to check if a variable is empty)
* **Booleans** – true or false keywords
* **Operators** – code elements that perform logical or mathematical operations; you can use Boolean or relational expressions (for more information, see the [Expression Types](#expression-types) section below)

If there is an errors in the expression, the place where the error is, is highlighted red and an error message is shown when you hover over it.  In some cases there are quick fixes available to quickly solve the issue.

{{< figure src="/attachments/studio/expressions/expression-error.png" >}}


### 2.3  Expression Examples

Examples that illustrate how expressions can be used are described below. 

#### 2.3.1 Example 1

You have a [Decision](/studio/microflows-decision/) in a microflow and you would like to write an expression that checks whether the customer grade is gold and the price of the order is more than 100 (you can configure a discount after the **Decision** that is allowed if this expression is true):

{{< figure src="/attachments/studio/expressions/example-decision.png" >}} 

The expression will look the following way:

{{< figure src="/attachments/studio/expressions/expression-decision.png" >}}

#### 2.3.2 Example 2

You add a [Decision](/studio/microflows-decision/) to a microflow to check if an object (in the example below the object is *Customer*) exists. And you also check if the Customer's name matches a particular one (in the example below Customer's name is *Mendix*). The expression will look the following way:

{{< figure src="/attachments/studio/expressions/customer-empty-and-name-example.png" >}}

#### 2.3.3 Example 3

You have a [user task](/studio/workflows-user-task/) in a workflow and would like to add a **Due Date** as a reminder that the user task should be done by the day after tomorrow. You can write the following expression for it:

{{< figure src="/attachments/studio/expressions/user-task-due-date.png" alt="User Task Expression" >}}

## 3 Expression Types {#expression-types}

The list of expressions that are used in Studio the most is represented below. For the full list of available expressions, see [Expressions](/refguide/expressions/) in the *Studio Pro Guide*.

### 3.1 Unary Expressions

* [Unary minus ( - )](/refguide/unary-expressions/)

### 3.2 Arithmetic Expressions

* [Multiplication ( * )](/refguide/arithmetic-expressions/)
* [Division ( div or : )](/refguide/arithmetic-expressions/)
* [Modulo ( mod )](/refguide/arithmetic-expressions/)
* [Addition ( + )](/refguide/arithmetic-expressions/)
* [Subtraction ( - )](/refguide/arithmetic-expressions/)

### 3.3 Relational Expressions

* [Less than ( < )](/refguide/relational-expressions/)
* [Greater than ( > )](/refguide/relational-expressions/)
* [Less than or equal to ( <= )](/refguide/relational-expressions/)
* [Greater than or equal to ( >= )](/refguide/relational-expressions/)
* [Is equal to ( = )](/refguide/relational-expressions/)
* [Is not equal to ( != )](/refguide/relational-expressions/)

### 3.5 Boolean Expressions

* [and](/refguide/boolean-expressions/)
* [or](/refguide/boolean-expressions/)
* [not](/refguide/boolean-expressions/)

### 3.6 Mathematical Function Calls

* [`max`](/refguide/mathematical-function-calls/) – the maximum of a list of numbers
* [`min`](/refguide/mathematical-function-calls/) – the minimum of a list of numbers
* [`round`](/refguide/mathematical-function-calls/) – rounds a number to a certain precision
* [`random`](/refguide/mathematical-function-calls/) – random number generation
* [`floor`](/refguide/mathematical-function-calls/) – the rounding of a floating-point number down
* [`ceil`](/refguide/mathematical-function-calls/) – the rounding of a floating-point number up
* [`pow`](/refguide/mathematical-function-calls/) – the exponentiation
* [`abs`](/refguide/mathematical-function-calls/) – the absolute value

### 3.7 String Function Calls

* [`toUpperCase`](/refguide/string-function-calls/) – converts the string to upper-case
* [`toLowerCase`](/refguide/string-function-calls/) – converts the string to lower-case
* [`length`](/refguide/string-function-calls/) – the string length
* [`substring`](/refguide/string-function-calls/) – gets a part of a string
* [`find`](/refguide/string-function-calls/) – gets a sub-string position
* [`findLast`](/refguide/string-function-calls/) – gets the last sub-string position
* [`contains`](/refguide/string-function-calls/) – contains the sub-string
* [`startsWith`](/refguide/string-function-calls/)  – determines whether a string starts with the specified sub-string
* [`endsWith`](/refguide/string-function-calls/) – determines whether a string ends with the specified sub-string
* [`trim`](/refguide/string-function-calls/) – removes the leading and trailing whitespace
* [`replaceAll`](/refguide/string-function-calls/) – replaces the occurrences of a sub-string
* [`replaceFirst`](/refguide/string-function-calls/) – replaces the first occurrence of a sub-string
* [`String concatenation ( + )`](/refguide/string-function-calls/) – concatenates strings

### 3.8 Date Creation

* [`dateTime`](/refguide/date-creation/) – creating a date value using the server's calendar

### 3.9 Between Date Function Calls

* [`millisecondsBetween`](/refguide/between-date-function-calls/) – the milliseconds between two dates
* [`secondsBetween`](/refguide/between-date-function-calls/) – the seconds between two dates
* [`minutesBetween`](/refguide/between-date-function-calls/) – the minutes between two dates
* [`hoursBetween`](/refguide/between-date-function-calls/) – the hours between two dates
* [`daysBetween`](/refguide/between-date-function-calls/) – the days between two dates
* [`weeksBetween`](/refguide/between-date-function-calls/) – the weeks between two dates
* [`calendarMonthsBetween`](/refguide/between-date-function-calls/) - the months between two dates
* [`calendarYearsBetween`](/refguide/between-date-function-calls/) - the years between two dates

### 3.10 Add Date Function Calls

* [`addMilliseconds`](/refguide/add-date-function-calls/) – adds milliseconds to a date
* [`addSeconds`](/refguide/add-date-function-calls/) – adds seconds to a date
* [`addMinutes`](/refguide/add-date-function-calls/) – adds minutes to a date
* [`addHours`](/refguide/add-date-function-calls/) – adds hours to a date
* [`addDays`](/refguide/add-date-function-calls/) – adds days to a date
* [`addWeeks`](/refguide/add-date-function-calls/) – adds weeks to a date
* [`addMonths`](/refguide/add-date-function-calls/) – adds months to a date
* [`addYears`](/refguide/add-date-function-calls/) – adds years to a date

### 3.11 Parse & Format Decimal Function Calls

* [`formatDecimal`](/refguide/parse-and-format-decimal-function-calls/) – converts a decimal to a string 

## 4 Read More

* [Microflows](/studio/microflows/)
* [Workflows](/studio/workflows/)
* [Set & Change a Value for Different Activities in the Microflows](/studio/microflows-setting-and-changing-value/)
* [Expressions](/refguide/expressions/)
