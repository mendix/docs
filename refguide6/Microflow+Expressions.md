---
title: "Microflow Expressions"
space: "Reference Guide 6"
parent: "Microflows"
---


Expressions can for example be used to change a member of an object based on logic. Variables in the microflow can be called in an expression by inserting the name of the variable and adding a dollar sign. E.g. _$customer_ refers to the variable _customer_. Expressions can be used recursively, e.g., _1 + 2 + 3_. Attributes and associations of object variables are accessed using a slash, e.g., _$customer/Name_, _$customer/CRM.Customer_Order_.

To illustrate this imagine an object with variable name _package_ with two attributes: _weight_ (Float) and _shippingCosts _(Decimal). Rule: if the weight of a package is less than one kilogram there are no shipping costs. Otherwise the shipping costs are €5.00\. The expression for changing attribute _shippingCosts_ is: _if $package/weight < 1.00 then 0.00 else 5.00_.

An overview of the possibilities with expressions can be found below.

### [Unary Expressions](Unary+expressions):

*   [Unary minus ( - )](Unary+expressions)

### [Arithmetic Expressions](Arithmetic+expressions):

*   [Multiplication ( * )](Arithmetic+expressions)
*   [Division ( div or : )](Arithmetic+expressions)
*   [Modulo ( mod )](Arithmetic+expressions)
*   [Addition ( + )](Arithmetic+expressions)
*   [Subtraction ( - )](Arithmetic+expressions)

### [Relational Expressions](Relational+expressions):

*   [Less than ( < )](Relational+expressions)
*   [Greater than ( > )](Relational+expressions)
*   [Less than or equal to ( <= )](Relational+expressions)
*   [Greater than or equal to ( >= )](Relational+expressions)
*   [Is equal to ( = )](Relational+expressions)
*   [Is not equal to ( != )](Relational+expressions)

### [Special checks](Special+checks)

*   [Checking for an empty object](Special+checks)
*   [Checking for an empty object member](Special+checks)
*   [`isNew`](Special+checks) - Checking whether an object is new

### [Boolean expressions](Boolean+expressions)

*   [and](Boolean+expressions)
*   [or
    ](Boolean+expressions)
*   [not](Boolean+expressions)

### [If expressions](If+expressions)

### [Mathematical function calls](Mathematical+function+calls)

*   [`max`](Mathematical+function+calls) - Maximum of a list of numbers
*   [`min`](Mathematical+function+calls) - Minimum of a list of numbers
*   [`round`](Mathematical+function+calls) - Rounding a floating-point number, optionally to a specified precision
*   [`random`](Mathematical+function+calls) - Random number generation
*   [`floor`](Mathematical+function+calls) - Rounding a floating-point number down
*   [`ceil`](Mathematical+function+calls) - Rounding a floating-point number up
*   [`pow`](Mathematical+function+calls) - Exponentiation
*   [`abs`](Mathematical+function+calls) - Absolute value
*   [`floatsEqual` `/ currenciesEqual`](Mathematical+function+calls) - Equality of floats/currencies for a certain precision (deprecated)

### [String function calls](String+function+calls)

*   [`toUpperCase`](String+function+calls) - Convert string to uppercase
*   [`toLowerCase`](String+function+calls) - Convert string to lowercase
*   [`length`](String+function+calls) - String length
*   [`substring`](String+function+calls) - Get part of a string
*   [`find`](String+function+calls) - Get substring position
*   [`findLast`](String+function+calls) - Get last substring position
*   [`contains`](String+function+calls) - Contains substring
*   `[startsWith](String+function+calls)`  - Determine whether a string starts with the specified substring
*   `[endsWith](String+function+calls)`  - Determine whether a string ends with the specified substring
*   [`trim`](String+function+calls) - Remove leading and trailing whitespace
*   [`isMatch`](String+function+calls) - Match regular expression
*   [`replaceAll`](String+function+calls) - Replace occurences of substring
*   [`replaceFirst`](String+function+calls) - Replace first occurence of substring
*   [String concatenation ( + )](String+function+calls) - Concatenate strings

### [Date creation](Date+creation)

*   [`dateTime`](Date+creation) - Creating a date value using the server's calendar
*   [`dateTimeUTC`](Date+creation) - Creating a date value using the UTC calendar

### [Between date function calls](Between+date+function+calls)

*   [`millisecondsBetween`](Between+date+function+calls) - Milliseconds between two dates
*   [`secondsBetween`](Between+date+function+calls) - Seconds between two dates
*   [`minutesBetween`](Between+date+function+calls) - Minutes between two dates
*   [`hoursBetween`](Between+date+function+calls) - Hours between two dates
*   [`daysBetween`](Between+date+function+calls) - Days between two dates
*   [`weeksBetween`](Between+date+function+calls) - Weeks between two dates

### [Add date function calls](Add+date+function+calls)

*   [`addMilliseconds`](Add+date+function+calls) - Add milliseconds to a date
*   [`addSeconds`](Add+date+function+calls) - Add seconds to a date
*   [`addMinutes`](Add+date+function+calls) - Add minutes to a date
*   [`addHours`](Add+date+function+calls) - Add hours to a date
*   [`addDays`](Add+date+function+calls) - Add days to a date
*   [`addDaysUTC`](Add+date+function+calls) - Add days to a date using the UTC calendar
*   [`addWeeks`](Add+date+function+calls) - Add weeks to a date
*   [`addWeeksUTC`](Add+date+function+calls) - Add weeks to a date using the UTC calendar
*   [`addMonths`](Add+date+function+calls) - Add months to a date
*   [`addMonthsUTC`](Add+date+function+calls) - Add months to a date using the UTC calendar
*   [`addYears`](Add+date+function+calls) - Add years to a date
*   [`addYearsUTC`](Add+date+function+calls) - Add years to a date using the UTC calendar

### [Trim to date](Trim+to+date)

*   [`trimToSeconds`](Trim+to+date) - Trim to seconds
*   [`trimToMinutes`](Trim+to+date) - Trim to minutes
*   [`trimToHours`](Trim+to+date) - Trim to hours
*   [`trimToHoursUTC`](Trim+to+date) - Trim to hours using the UTC calendar
*   [`trimToDays`](Trim+to+date) - Trim to days
*   [`trimToDaysUTC`](Trim+to+date) - Trim to days using the UTC calendar
*   [`trimToMonths`](Trim+to+date) - Trim to months
*   [`trimToMonthsUTC`](Trim+to+date) - Trim to months using the UTC calendar
*   [`trimToYears`](Trim+to+date) - Trim to years
*   [`trimToYearsUTC`](Trim+to+date) - Trim to years using the UTC calendar

### [To string](To+string)

### [To float](To+float) (deprecated)

### [Parse integer](Parse+integer)

### [Parse/format float function calls](Parse+and+format+float+function+calls) (deprecated)

*   [`parseFloat`](Parse+and+format+float+function+calls) - Convert a string to a float
*   [`formatFloat`](Parse+and+format+float+function+calls) - Convert a float to a string

### [Parse/format decimal function calls](Parse+and+format+decimal+function+calls)

*   [`parseDecimal`](Parse+and+format+decimal+function+calls)  - Convert a string to a decimal
*   [`formatDecimal`](Parse+and+format+decimal+function+calls)  - Convert a decimal to a string

### [Parse/format date function calls](Parse+and+format+date+function+calls)

*   [`parseDateTime[UTC]`](Parse+and+format+date+function+calls) - Convert a string to a date value
*   [`formatDateTime[UTC]`](Parse+and+format+date+function+calls) - Convert a date value to a string
*   [`formatTime[UTC]`](Parse+and+format+date+function+calls) - Convert the time part of a date value to a string
*   [`formatDate[UTC]`](Parse+and+format+date+function+calls) - Convert the date part of a date value to a string

### [Enumerations in microflow expressions](Enumerations+in+microflow+expressions)

*   [`getCaption`](Enumerations+in+microflow+expressions) - Get caption of enumeration value in current language
*   [`getKey`](Enumerations+in+microflow+expressions) - Get technical name of enumeration value
