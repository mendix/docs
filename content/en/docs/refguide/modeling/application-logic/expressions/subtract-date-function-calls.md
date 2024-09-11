---
title: "Subtract Date Function Calls"
url: /refguide/subtract-date-function-calls/
weight: 115
---

## Introduction

Subtract date function calls subtract a time period from a date and time and return the modified value. 

The first parameter can be an attribute of a domain model entity of type **Date and time**, a variable of type **Date and time**, or a **Date and time** value created using a [Date Creation](/refguide/date-creation/) function. The second parameter specifies the time period to be subtracted. It is also possible to pass values of the Long type to different **Subtract date function** calls.

You can also add a time period to the specified date. For more information, see [Add Date Function Calls](/refguide/add-date-function-calls/).

## subtractMilliseconds

The `subtractMilliseconds` function subtracts a specified number of milliseconds from a date.

### Input Parameters

The input parameters are described in the table below:

| Value                                       | Type          |
| ------------------------------------------- | ------------- |
| Initial date                                | Date and time |
| The number of milliseconds to be subtracted | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A date and time value that is the result of subtraction of the specified number of *milliseconds* from the *initial date*. | Date and time |

### Example

If you use the following input:

```java
subtractMilliseconds(dateTime(2007, 1, 1, 1, 1, 1), 1000)
```

The output is:

```java
Mon Jan 01 01:01:00 CET 2007
```

## subtractSeconds

The `subtractSeconds` function subtracts a specified number of seconds from a date.

### Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |
| The number of seconds to be subtracted | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A date and time value that is the result of subtraction of the specified number of *seconds* from the *initial date*. | Date and time |

### Example

If you use the following input:

```java
subtractSeconds(dateTime(2007, 1, 1, 1, 1, 1), 30)
```

The output is:

```java
Mon Jan 01 01:00:30 CET 2007
```

## subtractMinutes

The `subtractMinutes` function subtracts a number of minutes from a date.

### Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |
| The number of minutes to be subtracted | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A date and time value that is the result of subtraction of the specified number of *minutes* from the *initial date*. | Date and time |

### Example

If you use the following input:

```java
subtractMinutes(dateTime(2007, 1, 1, 1, 1, 1), 30)
```

The output is:

```java
Mon Jan 01 00:30:01 CET 2007
```

## subtractHours

The `subtractHours` function subtracts a number of hours from a date.

### Input Parameters

The input parameters are described in the table below:

| Value                                | Type          |
| ------------------------------------ | ------------- |
| Initial date                         | Date and time |
| The number of hours to be subtracted | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A date and time value that is the result of subtraction of the specified number of *hours* from the *initial date*. | Date and time |

### Example

If you use the following input: 

```java
subtractHours(dateTime(2007, 1, 1, 1, 1, 1), 1)
```

The output is:

```java
Mon Jan 01 00:01:01 CET 2007
```

## subtractDays[UTC]

The `subtractDaysUTC` function subtracts a number of days from a date. `subtractDays` uses the server's calendar and `subtractDaysUTC` uses the UTC calendar.

### Input Parameters

The input parameters are described in the table below:

| Value                               | Type          |
| ----------------------------------- | ------------- |
| Initial date                        | Date and time |
| The number of days to be subtracted | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A date and time value that is the result of subtraction of the specified number of *days* from the *initial date*. | Date and time |

### Example

If you use the following input: 

```java
subtractDays(dateTime(2007, 1, 5, 1, 1, 1), 5)
```

The output is:

```java
Mon Jan 01 01:01:01 CET 2007
```

## subtractWeeks[UTC]

The `subtractWeeksUTC` function subtracts a number of weeks from a date using the UTC calendar as opposed to  `subtractWeeks` which uses the server's one. 

### Input Parameters

The input parameters are described in the table below:

| Value                                | Type          |
| ------------------------------------ | ------------- |
| Initial date                         | Date and time |
| The number of weeks to be subtracted | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A date and time value that is the result of subtraction of the specified number of *weeks* from the *initial date*. | Date and time |

### Example

If you use the following input: 

```java
subtractWeeks(dateTime(2007, 1, 15, 1, 1, 1), 2)
```

The output is:

```java
Mon Jan 01 01:01:01 CET 2007
```

## subtractMonths[UTC]

The `subtractMonthsUTC` function subtracts a number of months from a date using the UTC calendar as opposed to  `subtractMonths` which uses the server's one.

### Input Parameters

The input parameters are described in the table below:

| Value                                 | Type          |
| ------------------------------------- | ------------- |
| Initial date                          | Date and time |
| The number of months to be subtracted | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A date and time value that is the result of subtraction of the specified number of *months* from the *initial date*. | Date and time |

### Example

If you use the following input: 

```java
subtractMonths(dateTime(2007, 3, 1, 1, 1, 1), 2)
```

The output is:

```java
Mon Jan 01 01:01:01 CET 2007
```

## subtractQuarters[UTC]

The `subtractQuartersUTC` function subtracts a number of quarters from a date using the UTC calendar as opposed to  `subtractQuarters` which uses the server's one.

### Input Parameters

The input parameters are described in the table below:

| Value                                | Type          |
| ------------------------------------ | ------------- |
| Initial date                         | Date and time |
| The number of years to be subtracted | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A date and time value that is the result of subtraction of the specified number of *quarters* from the *initial date*. | Date and time |

### Example

If you use the following input: 

```java
Input: subtractQuarters(dateTime(2007, 4, 1, 1, 1, 1), 1)
```

The output is:

```java
Mon Jan 01 01:01:01 CET 2007
```

## subtractYears[UTC]

The `subtractYearsUTC` function subtracts a number of years from a date using the UTC calendar as opposed to  `subtractYears` which uses the server's one.

### Input Parameters

The input parameters are described in the table below:

| Value                                | Type          |
| ------------------------------------ | ------------- |
| Initial date                         | Date and time |
| The number of years to be subtracted | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A date and time value that is the result of subtraction of the specified number of *years* from the *initial date*. | Date and time |

### Example

If you use the following input: 

```java
Input: subtractYears(dateTime(2007, 1, 1, 1, 1, 1), 1)
```

The output is:

```java
Mon Jan 01 01:01:01 CET 2006
```
