---
title: "Expressions"
parent: "common-elements"
description: "Describes the expressions that can be used in Mendix for a variety of purposes (for example, to change a member of an object based on logic)."
---

Expressions can for example be used to change a member of an object based on logic. Variables in the microflow can be called in an expression by inserting the name of the variable and adding a dollar sign. E.g. _$customer_ refers to the variable _customer_. Expressions can be used recursively, e.g., _1 + 2 + 3_. Attributes and associations of object variables are accessed using a slash, e.g., _$customer/Name_, _$customer/CRM.Customer_Order_.

To illustrate this imagine an object with variable name _package_ with two attributes: _weight_ (Float) and _shippingCosts _(Decimal). Rule: if the weight of a package is less than one kilogram there are no shipping costs. Otherwise the shipping costs are €5.00\. The expression for changing attribute _shippingCosts_ is: _if $package/weight < 1.00 then 0.00 else 5.00_.

An overview of the possibilities with expressions can be found below.

### [Unary Expressions](unary-expressions):

* [Unary minus ( - )](unary-expressions)

### [Arithmetic Expressions](arithmetic-expressions):

* [Multiplication ( * )](arithmetic-expressions)
* [Division ( div or : )](arithmetic-expressions)
* [Modulo ( mod )](arithmetic-expressions)
* [Addition ( + )](arithmetic-expressions)
* [Subtraction ( - )](arithmetic-expressions)

### [Relational Expressions](relational-expressions):

* [Less than ( < )](relational-expressions)
* [Greater than ( > )](relational-expressions)
* [Less than or equal to ( <= )](relational-expressions)
* [Greater than or equal to ( >= )](relational-expressions)
* [Is equal to ( = )](relational-expressions)
* [Is not equal to ( != )](relational-expressions)

### [Special checks](special-checks)

* [Checking for an empty object](special-checks)
* [Checking for an empty object member](special-checks)
* [`isNew`](special-checks) - Checking whether an object is new

### [Boolean expressions](boolean-expressions)

* [and](boolean-expressions)
* [or](boolean-expressions)
* [not](boolean-expressions)

### [If expressions](if-expressions)

### [Mathematical function calls](mathematical-function-calls)

* [`max`](mathematical-function-calls) - Maximum of a list of numbers
* [`min`](mathematical-function-calls) - Minimum of a list of numbers
* [`round`](mathematical-function-calls) - Rounding a floating-point number, optionally to a specified precision
* [`random`](mathematical-function-calls) - Random number generation
* [`floor`](mathematical-function-calls) - Rounding a floating-point number down
* [`ceil`](mathematical-function-calls) - Rounding a floating-point number up
* [`pow`](mathematical-function-calls) - Exponentiation
* [`abs`](mathematical-function-calls) - Absolute value
* [`floatsEqual` `/ currenciesEqual`](mathematical-function-calls) - Equality of floats/currencies for a certain precision (deprecated)

### [String function calls](string-function-calls)

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

### [Date creation](date-creation)

* [`dateTime`](date-creation) - Creating a date value using the server's calendar
* [`dateTimeUTC`](date-creation) - Creating a date value using the UTC calendar

### [Between date function calls](between-date-function-calls)

* [`millisecondsBetween`](between-date-function-calls) - Milliseconds between two dates
* [`secondsBetween`](between-date-function-calls) - Seconds between two dates
* [`minutesBetween`](between-date-function-calls) - Minutes between two dates
* [`hoursBetween`](between-date-function-calls) - Hours between two dates
* [`daysBetween`](between-date-function-calls) - Days between two dates
* [`weeksBetween`](between-date-function-calls) - Weeks between two dates

### [Add date function calls](add-date-function-calls)

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

### [Trim to date](trim-to-date)

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

### [To string](to-string)

### [To float](to-float) (deprecated)

### [Parse integer](parse-integer)

### [Parse/format float function calls](parse-and-format-float-function-calls) (deprecated)

* [`parseFloat`](parse-and-format-float-function-calls) - Convert a string to a float
* [`formatFloat`](parse-and-format-float-function-calls) - Convert a float to a string

### [Parse/format decimal function calls](parse-and-format-decimal-function-calls)

* [`parseDecimal`](parse-and-format-decimal-function-calls)  - Convert a string to a decimal
* [`formatDecimal`](parse-and-format-decimal-function-calls)  - Convert a decimal to a string

### [Parse/format date function calls](parse-and-format-date-function-calls)

* [`parseDateTime[UTC]`](parse-and-format-date-function-calls) - Convert a string to a date value
* [`formatDateTime[UTC]`](parse-and-format-date-function-calls) - Convert a date value to a string
* [`formatTime[UTC]`](parse-and-format-date-function-calls) - Convert the time part of a date value to a string
* [`formatDate[UTC]`](parse-and-format-date-function-calls) - Convert the date part of a date value to a string

### [Enumerations in microflow expressions](enumerations-in-microflow-expressions)

* [`getCaption`](enumerations-in-microflow-expressions) - Get caption of enumeration value in current language
* [`getKey`](enumerations-in-microflow-expressions) - Get technical name of enumeration value
