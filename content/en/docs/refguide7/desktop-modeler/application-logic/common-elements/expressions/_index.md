---
title: "Expressions"
url: /refguide7/expressions/
aliases:
    - /refguide7/microflow-expressions.html
    - /refguide7/microflow-expressions
description: "Describes the expressions that can be used in Mendix for a variety of purposes (for example, to change a member of an object based on logic)."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

Expressions can for example be used to change a member of an object based on logic. Variables in the microflow can be called in an expression by inserting the name of the variable and adding a dollar sign. E.g. _$customer_ refers to the variable _customer_. Expressions can be used recursively, for example, _1 + 2 + 3_. Attributes and associations of object variables are accessed using a slash, for example, _$customer/Name_, _$customer/CRM.Customer_Order_.

To illustrate this imagine an object with variable name _package_ with two attributes: _weight_ (Float) and _shippingCosts _(Decimal). Rule: if the weight of a package is less than one kilogram there are no shipping costs. Otherwise the shipping costs are €5.00\. The expression for changing attribute _shippingCosts_ is: _if $package/weight < 1.00 then 0.00 else 5.00_.

An overview of the possibilities with expressions can be found below.

### [Unary Expressions](/refguide7/unary-expressions/):

* [Unary minus ( - )](/refguide7/unary-expressions/)

### [Arithmetic Expressions](/refguide7/arithmetic-expressions/):

* [Multiplication ( * )](/refguide7/arithmetic-expressions/)
* [Division ( div or : )](/refguide7/arithmetic-expressions/)
* [Modulo ( mod )](/refguide7/arithmetic-expressions/)
* [Addition ( + )](/refguide7/arithmetic-expressions/)
* [Subtraction ( - )](/refguide7/arithmetic-expressions/)

### [Relational Expressions](/refguide7/relational-expressions/):

* [Less than ( < )](/refguide7/relational-expressions/)
* [Greater than ( > )](/refguide7/relational-expressions/)
* [Less than or equal to ( <= )](/refguide7/relational-expressions/)
* [Greater than or equal to ( >= )](/refguide7/relational-expressions/)
* [Is equal to ( = )](/refguide7/relational-expressions/)
* [Is not equal to ( != )](/refguide7/relational-expressions/)

### [Special checks](/refguide7/special-checks/)

* [Checking for an empty object](/refguide7/special-checks/)
* [Checking for an empty object member](/refguide7/special-checks/)
* [`isNew`](/refguide7/special-checks/) - Checking whether an object is new

### [Boolean expressions](/refguide7/boolean-expressions/)

* [and](/refguide7/boolean-expressions/)
* [or](/refguide7/boolean-expressions/)
* [not](/refguide7/boolean-expressions/)

### [If expressions](/refguide7/if-expressions/)

### [Mathematical function calls](/refguide7/mathematical-function-calls/)

* [`max`](/refguide7/mathematical-function-calls/) - Maximum of a list of numbers
* [`min`](/refguide7/mathematical-function-calls/) - Minimum of a list of numbers
* [`round`](/refguide7/mathematical-function-calls/) - Rounding a floating-point number, optionally to a specified precision
* [`random`](/refguide7/mathematical-function-calls/) - Random number generation
* [`floor`](/refguide7/mathematical-function-calls/) - Rounding a floating-point number down
* [`ceil`](/refguide7/mathematical-function-calls/) - Rounding a floating-point number up
* [`pow`](/refguide7/mathematical-function-calls/) - Exponentiation
* [`abs`](/refguide7/mathematical-function-calls/) - Absolute value
* [`floatsEqual` `/ currenciesEqual`](/refguide7/mathematical-function-calls/) - Equality of floats/currencies for a certain precision (deprecated)

### [String function calls](/refguide7/string-function-calls/)

* [`toUpperCase`](/refguide7/string-function-calls/) - Convert string to uppercase
* [`toLowerCase`](/refguide7/string-function-calls/) - Convert string to lowercase
* [`length`](/refguide7/string-function-calls/) - String length
* [`substring`](/refguide7/string-function-calls/) - Get part of a string
* [`find`](/refguide7/string-function-calls/) - Get substring position
* [`findLast`](/refguide7/string-function-calls/) - Get last substring position
* [`contains`](/refguide7/string-function-calls/) - Contains substring
* [`startsWith`](/refguide7/string-function-calls/)  - Determine whether a string starts with the specified substring
* [`endsWith`](/refguide7/string-function-calls/)  - Determine whether a string ends with the specified substring
* [`trim`](/refguide7/string-function-calls/) - Remove leading and trailing whitespace
* [`isMatch`](/refguide7/string-function-calls/) - Match regular expression
* [`replaceAll`](/refguide7/string-function-calls/) - Replace occurrences of substring
* [`replaceFirst`](/refguide7/string-function-calls/) - Replace first occurrence of substring
* [String concatenation ( + )](/refguide7/string-function-calls/) - Concatenate strings
* [`urlEncode`](/refguide7/string-function-calls/) - Convert a string to be used in a URL
* [`urlDecode`](/refguide7/string-function-calls/) - Convert a string back from a URL

### [Date creation](/refguide7/date-creation/)

* [`dateTime`](/refguide7/date-creation/) - Creating a date value using the server's calendar
* [`dateTimeUTC`](/refguide7/date-creation/) - Creating a date value using the UTC calendar

### [Between date function calls](/refguide7/between-date-function-calls/)

* [`millisecondsBetween`](/refguide7/between-date-function-calls/) - Milliseconds between two dates
* [`secondsBetween`](/refguide7/between-date-function-calls/) - Seconds between two dates
* [`minutesBetween`](/refguide7/between-date-function-calls/) - Minutes between two dates
* [`hoursBetween`](/refguide7/between-date-function-calls/) - Hours between two dates
* [`daysBetween`](/refguide7/between-date-function-calls/) - Days between two dates
* [`weeksBetween`](/refguide7/between-date-function-calls/) - Weeks between two dates

### [Add date function calls](/refguide7/add-date-function-calls/)

* [`addMilliseconds`](/refguide7/add-date-function-calls/) - Add milliseconds to a date
* [`addSeconds`](/refguide7/add-date-function-calls/) - Add seconds to a date
* [`addMinutes`](/refguide7/add-date-function-calls/) - Add minutes to a date
* [`addHours`](/refguide7/add-date-function-calls/) - Add hours to a date
* [`addDays`](/refguide7/add-date-function-calls/) - Add days to a date
* [`addDaysUTC`](/refguide7/add-date-function-calls/) - Add days to a date using the UTC calendar
* [`addWeeks`](/refguide7/add-date-function-calls/) - Add weeks to a date
* [`addWeeksUTC`](/refguide7/add-date-function-calls/) - Add weeks to a date using the UTC calendar
* [`addMonths`](/refguide7/add-date-function-calls/) - Add months to a date
* [`addMonthsUTC`](/refguide7/add-date-function-calls/) - Add months to a date using the UTC calendar
* [`addYears`](/refguide7/add-date-function-calls/) - Add years to a date
* [`addYearsUTC`](/refguide7/add-date-function-calls/) - Add years to a date using the UTC calendar

### [Trim to date](/refguide7/trim-to-date/)

* [`trimToSeconds`](/refguide7/trim-to-date/) - Trim to seconds
* [`trimToMinutes`](/refguide7/trim-to-date/) - Trim to minutes
* [`trimToHours`](/refguide7/trim-to-date/) - Trim to hours
* [`trimToHoursUTC`](/refguide7/trim-to-date/) - Trim to hours using the UTC calendar
* [`trimToDays`](/refguide7/trim-to-date/) - Trim to days
* [`trimToDaysUTC`](/refguide7/trim-to-date/) - Trim to days using the UTC calendar
* [`trimToMonths`](/refguide7/trim-to-date/) - Trim to months
* [`trimToMonthsUTC`](/refguide7/trim-to-date/) - Trim to months using the UTC calendar
* [`trimToYears`](/refguide7/trim-to-date/) - Trim to years
* [`trimToYearsUTC`](/refguide7/trim-to-date/) - Trim to years using the UTC calendar

### [To string](/refguide7/to-string/)

### [To float](/refguide7/to-float/) (deprecated)

### [Parse integer](/refguide7/parse-integer/)

### [Parse/format float function calls](/refguide7/parse-and-format-float-function-calls/) (deprecated)

* [`parseFloat`](/refguide7/parse-and-format-float-function-calls/) - Convert a string to a float
* [`formatFloat`](/refguide7/parse-and-format-float-function-calls/) - Convert a float to a string

### [Parse/format decimal function calls](/refguide7/parse-and-format-decimal-function-calls/)

* [`parseDecimal`](/refguide7/parse-and-format-decimal-function-calls/)  - Convert a string to a decimal
* [`formatDecimal`](/refguide7/parse-and-format-decimal-function-calls/)  - Convert a decimal to a string

### [Parse/format date function calls](/refguide7/parse-and-format-date-function-calls/)

* [`parseDateTime[UTC]`](/refguide7/parse-and-format-date-function-calls/) - Convert a string to a date value
* [`formatDateTime[UTC]`](/refguide7/parse-and-format-date-function-calls/) - Convert a date value to a string
* [`formatTime[UTC]`](/refguide7/parse-and-format-date-function-calls/) - Convert the time part of a date value to a string
* [`formatDate[UTC]`](/refguide7/parse-and-format-date-function-calls/) - Convert the date part of a date value to a string

### [Enumerations in expressions](/refguide7/enumerations-in-expressions/)

* [`getCaption`](/refguide7/enumerations-in-expressions/) - Get caption of enumeration value in current language
* [`getKey`](/refguide7/enumerations-in-expressions/) - Get technical name of enumeration value
