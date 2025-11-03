---
title: "Add Date Function Calls"
url: /refguide8/add-date-function-calls/
weight: 110
---

## Introduction

Add date function calls add a time period to a date and time and return the modified value. 

The first parameter can be an attribute of a domain model entity of type **Date and time**, a variable of type **Date and time**, or a **Date and time** value created using a [Date Creation](/refguide8/date-creation/) function.

The second parameter specifies the time period to be added - you can use a negative time period to subtract it from the specified date.

## addMilliseconds

The `addMilliseconds` function adds a specified number of milliseconds to a date.

### Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |
| The number of milliseconds to be added | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *milliseconds*. | Date and time |

### Example

If you use the following input:

```java
addMilliseconds(dateTime(2007, 1, 1, 1, 1, 1), 1400)
```

The output is:

```java
"Mon Jan 01 01:01:02:400 CET 2007"
```

## addSeconds

The `addSeconds` function adds a specified number of seconds to a date.

### Input Parameters

The input parameters are described in the table below:

| Value                             | Type          |
| --------------------------------- | ------------- |
| Initial date                      | Date and time |
| The number of seconds to be added | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *seconds*. | Date and time |

### Example

If you use the following input:

```java
addSeconds(dateTime(2007, 1, 1, 1, 1, 1), 2)
```

The output is:

```java
"Mon Jan 01 01:01:03 CET 2007"
```

## addMinutes

The `addMinutes` function adds a number of minutes to a date.

### Input Parameters

The input parameters are described in the table below:

| Value                             | Type          |
| --------------------------------- | ------------- |
| Initial date                      | Date and time |
| The number of minutes to be added | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *minutes*. | Date and time |

### Example

If you use the following input:

```java
addMinutes(dateTime(2007, 1, 1, 1, 1, 1), 3)
```

The output is:

```java
"Mon Jan 01 01:04:01 CET 2007"
```

## addHours

The `addHours` function adds a number of hours to a date.

### Input Parameters

The input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of hours to be added | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *hours*. | Date and time |

### Example

If you use the following input: 

```java
addHours(dateTime(2007, 1, 1, 1, 1, 1), 25)
```

The output is:

```java
"Mon Jan 02 02:01:01 CET 2007"
```

## addDays[UTC]

The `addDaysUTC` function adds a number of days to a date. `addDays` uses the server's calendar and `addDaysUTC` uses the UTC calendar.

### Input Parameters

The input parameters are described in the table below:

| Value                          | Type          |
| ------------------------------ | ------------- |
| Initial date                   | Date and time |
| The number of days to be added | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *days*. | Date and time |

### Example

If you use the following input: 

```java
addDays(dateTime(2007, 1, 1, 1, 1, 1), 3)
```

The output is:

```java
"Mon Jan 04 01:01:01 CET 2007"
```

## addWeeks[UTC]

The `addWeeksUTC` function adds a number of weeks to a date using the UTC calendar as opposed to `addWeeks` which uses the server's one. 

### Input Parameters

The input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of weeks to be added | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *weeks*. | Date and time |

### Example

If you use the following input: 

```java
addWeeks(dateTime(2007, 1, 1, 1, 1, 1), 2)
```

The output is:

```java
"Mon Jan 15 01:01:01 CET 2007"
```

## addMonths[UTC]

The `addMonthsUTC` function adds a number of months to a date using the UTC calendar as opposed to `addMonths` which uses the server's one.

### Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| Initial date                     | Date and time |
| The number of months to be added | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *months*. | Date and time |

### Example

If you use the following input: 

```java
addMonths(dateTime(2007, 1, 1, 1, 1, 1), 13)
```

The output is:

```java
"Mon Feb 01 01:01:01 CET 2008"
```

## addYears[UTC]

The `addYearsUTC` function adds a number of years to a date using the UTC calendar as opposed to `addYears` which uses the server's one.

### Input Parameters

The input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of years to be added | Integer       |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *years*. | Date and time |

### Example

If you use the following input: 

```java
addYears(dateTime(2007, 1, 1, 1, 1, 1), 11)
```

The output is:

```java
"Mon Jan 01 01:01:01 CET 2018"
```

## Passing Values of the Long Type

It is possible to pass values of the Long type to different **Add date function** calls:

If you use the following input:

```java
addSeconds(dateTime(1970, 1, 1, 0, 0, 0), (long)(2147483647 + 100))
```

The output is:

```java
"Tue Jan 19 04:15:47 CET 2038"
```
