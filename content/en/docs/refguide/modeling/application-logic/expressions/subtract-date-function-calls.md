---
title: "Subtract Date Function Calls"
url: /refguide/subtract-date-function-calls/
parent: "expressions"
weight: 115
tags: ["studio pro", "expressions", "subtract date function"]
---

## 1 Introduction

Add date function calls add a time period to a date and time and return the modified value. 

The first parameter can be an attribute of a domain model entity of type **Date and time**, a variable of type **Date and time**, or a **Date and time** value created using a [Date Creation](/refguide/date-creation/) function.

The second parameter specifies the time period to be added - you can use a negative time period to subtract it from the specified date.

## 2 subtractMilliseconds

The `subtractMilliseconds` function subtracts a specified number of milliseconds to a date.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                                       | Type          |
| ------------------------------------------- | ------------- |
| Initial date                                | Date and time |
| The number of milliseconds to be subtracted | Integer       |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *milliseconds*. | Date and time |

### 2.3 Example

If you use the following input:

```java
addMilliseconds(dateTime(2007, 1, 1, 1, 1, 1), 1400)
```

The output is:

```java
"Mon Jan 01 01:01:02:400 CET 2007"
```

## 3 subtractSeconds

The `subtractSeconds` function subtracts a specified number of seconds to a date.

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |
| The number of seconds to be subtracted | Integer       |

### 3.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *seconds*. | Date and time |

### 3.3 Example

If you use the following input:

```java
subtractSeconds(dateTime(2007, 1, 1, 1, 1, 1), 2)
```

The output is:

```java
"Mon Jan 01 01:01:03 CET 2007"
```

## 4 subtractMinutes

The `subtractMinutes` function subtracts a number of minutes to a date.

### 4.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |
| The number of minutes to be subtracted | Integer       |

### 4.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *minutes*. | Date and time |

### 4.3 Example

If you use the following input:

```java
addMinutes(dateTime(2007, 1, 1, 1, 1, 1), 3)
```

The output is:

```java
"Mon Jan 01 01:04:01 CET 2007"
```

## 5 subtractHours

The `subtractHours` function subtracts a number of hours to a date.

### 5.1 Input Parameters

The input parameters are described in the table below:

| Value                                | Type          |
| ------------------------------------ | ------------- |
| Initial date                         | Date and time |
| The number of hours to be subtracted | Integer       |

### 5.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *hours*. | Date and time |

### 5.3 Example

If you use the following input: 

```java
addHours(dateTime(2007, 1, 1, 1, 1, 1), 25)
```

The output is:

```java
"Mon Jan 02 02:01:01 CET 2007"
```

## 6 subtractDays[UTC]

The `subtractDaysUTC` function subtracts a number of days to a date. `subtractDays` uses the server's calendar and `subtractDaysUTC` uses the UTC calendar.

### 6.1 Input Parameters

The input parameters are described in the table below:

| Value                               | Type          |
| ----------------------------------- | ------------- |
| Initial date                        | Date and time |
| The number of days to be subtracted | Integer       |

### 6.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *days*. | Date and time |

### 6.3 Example

If you use the following input: 

```java
addDays(dateTime(2007, 1, 1, 1, 1, 1), 3)
```

The output is:

```java
"Mon Jan 04 01:01:01 CET 2007"
```

## 7 subtractWeeks[UTC]

The `subtractWeeksUTC` function subtracts a number of weeks to a date using the UTC calendar as opposed to  `subtractWeeks` which uses the server's one. 

### 7.1 Input Parameters

The input parameters are described in the table below:

| Value                                | Type          |
| ------------------------------------ | ------------- |
| Initial date                         | Date and time |
| The number of weeks to be subtracted | Integer       |

### 7.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *weeks*. | Date and time |

### 7.3 Example

If you use the following input: 

```java
addWeeks(dateTime(2007, 1, 1, 1, 1, 1), 2)
```

The output is:

```java
"Mon Jan 15 01:01:01 CET 2007"
```

## 8 subtractMonths[UTC]

The `subtractMonthsUTC` function subtracts a number of months to a date using the UTC calendar as opposed to  `subtractMonths` which uses the server's one.

### 8.1 Input Parameters

The input parameters are described in the table below:

| Value                                 | Type          |
| ------------------------------------- | ------------- |
| Initial date                          | Date and time |
| The number of months to be subtracted | Integer       |

### 8.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *months*. | Date and time |

### 8.3 Example

If you use the following input: 

```java
addMonths(dateTime(2007, 1, 1, 1, 1, 1), 13)
```

The output is:

```java
"Mon Feb 01 01:01:01 CET 2008"
```

## 9 subtractQuarters

### 9.1 Input Parameters

### 9.2 Output

### 9.3 Example

If you use the following input: 

The output is:

## 10 subtractQuarters[UTC]

The `subtractQuartersUTC` function subtracts a number of quarters to a date using the UTC calendar as opposed to  `subtractQuarters` which uses the server's one.

### 10.1 Input Parameters

The input parameters are described in the table below:

| Value                                | Type          |
| ------------------------------------ | ------------- |
| Initial date                         | Date and time |
| The number of years to be subtracted | Integer       |

### 10.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *quarters*. | Date and time |

### 10.3 Example

If you use the following input: 

The output is:

## 11 subtractYears[UTC]

The `subtractYearsUTC` function subtracts a number of years to a date using the UTC calendar as opposed to  `subtractYears` which uses the server's one.

### 11.1 Input Parameters

The input parameters are described in the table below:

| Value                                | Type          |
| ------------------------------------ | ------------- |
| Initial date                         | Date and time |
| The number of years to be subtracted | Integer       |

### 11.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *years*. | Date and time |

### 11.3 Example

If you use the following input: 

```java
addYears(dateTime(2007, 1, 1, 1, 1, 1), 11)
```

The output is:

```java
"Mon Jan 01 01:01:01 CET 2018"
```

