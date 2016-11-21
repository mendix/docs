---
title: "Microflow Expressions"
space: "Reference Guide 6"
parent: "microflows"
---


Expressions can for example be used to change a member of an object based on logic. Variables in the microflow can be called in an expression by inserting the name of the variable and adding a dollar sign. E.g. _$customer_ refers to the variable _customer_. Expressions can be used recursively, e.g., _1 + 2 + 3_. Attributes and associations of object variables are accessed using a slash, e.g., _$customer/Name_, _$customer/CRM.Customer_Order_.

To illustrate this imagine an object with variable name _package_ with two attributes: _weight_ (Float) and _shippingCosts _(Decimal). Rule: if the weight of a package is less than one kilogram there are no shipping costs. Otherwise the shipping costs are €5.00\. The expression for changing attribute _shippingCosts_ is: _if $package/weight < 1.00 then 0.00 else 5.00_.

An overview of the possibilities with expressions can be found below.

### [Unary Expressions](/refguide6/unary-expressions):

*   [Unary minus ( - )](/refguide6/unary-expressions)

### [Arithmetic Expressions](/refguide6/arithmetic-expressions):

*   [Multiplication ( * )](/refguide6/arithmetic-expressions)
*   [Division ( div or : )](/refguide6/arithmetic-expressions)
*   [Modulo ( mod )](/refguide6/arithmetic-expressions)
*   [Addition ( + )](/refguide6/arithmetic-expressions)
*   [Subtraction ( - )](/refguide6/arithmetic-expressions)

### [Relational Expressions](/refguide6/relational-expressions):

*   [Less than ( < )](/refguide6/relational-expressions)
*   [Greater than ( > )](/refguide6/relational-expressions)
*   [Less than or equal to ( <= )](/refguide6/relational-expressions)
*   [Greater than or equal to ( >= )](/refguide6/relational-expressions)
*   [Is equal to ( = )](/refguide6/relational-expressions)
*   [Is not equal to ( != )](/refguide6/relational-expressions)

### [Special checks](/refguide6/special-checks)

*   [Checking for an empty object](/refguide6/special-checks)
*   [Checking for an empty object member](/refguide6/special-checks)
*   [`isNew`](/refguide6/special-checks) - Checking whether an object is new

### [Boolean expressions](/refguide6/boolean-expressions)

*   [and](/refguide6/boolean-expressions)
*   [or](/refguide6/boolean-expressions)
*   [not](/refguide6/boolean-expressions)

### [If expressions](/refguide6/if-expressions)

### [Mathematical function calls](/refguide6/mathematical-function-calls)

*   [`max`](/refguide6/mathematical-function-calls) - Maximum of a list of numbers
*   [`min`](/refguide6/mathematical-function-calls) - Minimum of a list of numbers
*   [`round`](/refguide6/mathematical-function-calls) - Rounding a floating-point number, optionally to a specified precision
*   [`random`](/refguide6/mathematical-function-calls) - Random number generation
*   [`floor`](/refguide6/mathematical-function-calls) - Rounding a floating-point number down
*   [`ceil`](/refguide6/mathematical-function-calls) - Rounding a floating-point number up
*   [`pow`](/refguide6/mathematical-function-calls) - Exponentiation
*   [`abs`](/refguide6/mathematical-function-calls) - Absolute value
*   [`floatsEqual` `/ currenciesEqual`](/refguide6/mathematical-function-calls) - Equality of floats/currencies for a certain precision (deprecated)

### [String function calls](/refguide6/string-function-calls)

*   [`toUpperCase`](/refguide6/string-function-calls) - Convert string to uppercase
*   [`toLowerCase`](/refguide6/string-function-calls) - Convert string to lowercase
*   [`length`](/refguide6/string-function-calls) - String length
*   [`substring`](/refguide6/string-function-calls) - Get part of a string
*   [`find`](/refguide6/string-function-calls) - Get substring position
*   [`findLast`](/refguide6/string-function-calls) - Get last substring position
*   [`contains`](/refguide6/string-function-calls) - Contains substring
*   `[startsWith](/refguide6/string-function-calls)`  - Determine whether a string starts with the specified substring
*   `[endsWith](/refguide6/string-function-calls)`  - Determine whether a string ends with the specified substring
*   [`trim`](/refguide6/string-function-calls) - Remove leading and trailing whitespace
*   [`isMatch`](/refguide6/string-function-calls) - Match regular expression
*   [`replaceAll`](/refguide6/string-function-calls) - Replace occurences of substring
*   [`replaceFirst`](/refguide6/string-function-calls) - Replace first occurence of substring
*   [String concatenation ( + )](/refguide6/string-function-calls) - Concatenate strings

### [Date creation](/refguide6/date-creation)

*   [`dateTime`](/refguide6/date-creation) - Creating a date value using the server's calendar
*   [`dateTimeUTC`](/refguide6/date-creation) - Creating a date value using the UTC calendar

### [Between date function calls](/refguide6/between-date-function-calls)

*   [`millisecondsBetween`](/refguide6/between-date-function-calls) - Milliseconds between two dates
*   [`secondsBetween`](/refguide6/between-date-function-calls) - Seconds between two dates
*   [`minutesBetween`](/refguide6/between-date-function-calls) - Minutes between two dates
*   [`hoursBetween`](/refguide6/between-date-function-calls) - Hours between two dates
*   [`daysBetween`](/refguide6/between-date-function-calls) - Days between two dates
*   [`weeksBetween`](/refguide6/between-date-function-calls) - Weeks between two dates

### [Add date function calls](/refguide6/add-date-function-calls)

*   [`addMilliseconds`](/refguide6/add-date-function-calls) - Add milliseconds to a date
*   [`addSeconds`](/refguide6/add-date-function-calls) - Add seconds to a date
*   [`addMinutes`](/refguide6/add-date-function-calls) - Add minutes to a date
*   [`addHours`](/refguide6/add-date-function-calls) - Add hours to a date
*   [`addDays`](/refguide6/add-date-function-calls) - Add days to a date
*   [`addDaysUTC`](/refguide6/add-date-function-calls) - Add days to a date using the UTC calendar
*   [`addWeeks`](/refguide6/add-date-function-calls) - Add weeks to a date
*   [`addWeeksUTC`](/refguide6/add-date-function-calls) - Add weeks to a date using the UTC calendar
*   [`addMonths`](/refguide6/add-date-function-calls) - Add months to a date
*   [`addMonthsUTC`](/refguide6/add-date-function-calls) - Add months to a date using the UTC calendar
*   [`addYears`](/refguide6/add-date-function-calls) - Add years to a date
*   [`addYearsUTC`](/refguide6/add-date-function-calls) - Add years to a date using the UTC calendar

### [Trim to date](/refguide6/trim-to-date)

*   [`trimToSeconds`](/refguide6/trim-to-date) - Trim to seconds
*   [`trimToMinutes`](/refguide6/trim-to-date) - Trim to minutes
*   [`trimToHours`](/refguide6/trim-to-date) - Trim to hours
*   [`trimToHoursUTC`](/refguide6/trim-to-date) - Trim to hours using the UTC calendar
*   [`trimToDays`](/refguide6/trim-to-date) - Trim to days
*   [`trimToDaysUTC`](/refguide6/trim-to-date) - Trim to days using the UTC calendar
*   [`trimToMonths`](/refguide6/trim-to-date) - Trim to months
*   [`trimToMonthsUTC`](/refguide6/trim-to-date) - Trim to months using the UTC calendar
*   [`trimToYears`](/refguide6/trim-to-date) - Trim to years
*   [`trimToYearsUTC`](/refguide6/trim-to-date) - Trim to years using the UTC calendar

### [To string](/refguide6/to-string)

### [To float](/refguide6/to-float) (deprecated)

### [Parse integer](/refguide6/parse-integer)

### [Parse/format float function calls](/refguide6/parse-and-format-float-function-calls) (deprecated)

*   [`parseFloat`](/refguide6/parse-and-format-float-function-calls) - Convert a string to a float
*   [`formatFloat`](/refguide6/parse-and-format-float-function-calls) - Convert a float to a string

### [Parse/format decimal function calls](/refguide6/parse-and-format-decimal-function-calls)

*   [`parseDecimal`](/refguide6/parse-and-format-decimal-function-calls)  - Convert a string to a decimal
*   [`formatDecimal`](/refguide6/parse-and-format-decimal-function-calls)  - Convert a decimal to a string

### [Parse/format date function calls](/refguide6/parse-and-format-date-function-calls)

*   [`parseDateTime[UTC]`](parse-and-format-date-function-calls) - Convert a string to a date value
*   [`formatDateTime[UTC]`](parse-and-format-date-function-calls) - Convert a date value to a string
*   [`formatTime[UTC]`](parse-and-format-date-function-calls) - Convert the time part of a date value to a string
*   [`formatDate[UTC]`](parse-and-format-date-function-calls) - Convert the date part of a date value to a string

### [Enumerations in microflow expressions](/refguide6/enumerations-in-microflow-expressions)

*   [`getCaption`](/refguide6/enumerations-in-microflow-expressions) - Get caption of enumeration value in current language
*   [`getKey`](/refguide6/enumerations-in-microflow-expressions) - Get technical name of enumeration value
