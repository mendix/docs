---
title: "Add Date Function Calls"
url: /refguide/add-date-function-calls/
weight: 110
---

## 1 Introduction

Add date function calls add a time period to a date and time and return the modified value. 

The first parameter can be an attribute of a domain model entity of type **Date and time**, a variable of type **Date and time**, or a **Date and time** value created using a [Date Creation](/refguide/date-creation/) function. The second parameter specifies the time period to be added. 

You can also subtract a time period from the specified date. For more information, see [Subtract Date Function Calls](/refguide/subtract-date-function-calls/).

## 2 addMilliseconds

The `addMilliseconds` function adds a specified number of milliseconds to a date.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |
| The number of milliseconds to be added | Integer       |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *milliseconds*. | Date and time |

### 2.3 Example

If you use the following input:

```java {linenos=false}
addMilliseconds(dateTime(2007, 1, 1, 1, 1, 1), 1400)
```

The output is:

```java {linenos=false}
"Mon Jan 01 01:01:02:400 CET 2007"
```

## 3 addSeconds

The `addSeconds` function adds a specified number of seconds to a date.

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value                             | Type          |
| --------------------------------- | ------------- |
| Initial date                      | Date and time |
| The number of seconds to be added | Integer       |

### 3.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *seconds*. | Date and time |

### 3.3 Example

If you use the following input:

```java {linenos=false}
addSeconds(dateTime(2007, 1, 1, 1, 1, 1), 2)
```

The output is:

```java {linenos=false}
"Mon Jan 01 01:01:03 CET 2007"
```

## 4 addMinutes

The `addMinutes` function adds a number of minutes to a date.

### 4.1 Input Parameters

The input parameters are described in the table below:

| Value                             | Type          |
| --------------------------------- | ------------- |
| Initial date                      | Date and time |
| The number of minutes to be added | Integer       |

### 4.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *minutes*. | Date and time |

### 4.3 Example

If you use the following input:

```java {linenos=false}
addMinutes(dateTime(2007, 1, 1, 1, 1, 1), 3)
```

The output is:

```java {linenos=false}
"Mon Jan 01 01:04:01 CET 2007"
```

## 5 addHours

The `addHours` function adds a number of hours to a date.

### 5.1 Input Parameters

The input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of hours to be added | Integer       |

### 5.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *hours*. | Date and time |

### 5.3 Example

If you use the following input: 

```java {linenos=false}
addHours(dateTime(2007, 1, 1, 1, 1, 1), 25)
```

The output is:

```java {linenos=false}
"Mon Jan 02 02:01:01 CET 2007"
```

## 6 addDays[UTC]

The `addDaysUTC` function adds a number of days to a date. `addDays` uses the server's calendar and `addDaysUTC` uses the UTC calendar.

### 6.1 Input Parameters

The input parameters are described in the table below:

| Value                          | Type          |
| ------------------------------ | ------------- |
| Initial date                   | Date and time |
| The number of days to be added | Integer       |

### 6.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *days*. | Date and time |

### 6.3 Example

If you use the following input: 

```java {linenos=false}
addDays(dateTime(2007, 1, 1, 1, 1, 1), 3)
```

The output is:

```java {linenos=false}
"Mon Jan 04 01:01:01 CET 2007"
```

## 7 addWeeks[UTC]

The `addWeeksUTC` function adds a number of weeks to a date using the UTC calendar as opposed to  `addWeeks` which uses the server's one. 

### 7.1 Input Parameters

The input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of weeks to be added | Integer       |

### 7.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *weeks*. | Date and time |

### 7.3 Example

If you use the following input: 

```java {linenos=false}
addWeeks(dateTime(2007, 1, 1, 1, 1, 1), 2)
```

The output is:

```java {linenos=false}
"Mon Jan 15 01:01:01 CET 2007"
```

## 8 addMonths[UTC]

The `addMonthsUTC` function adds a number of months to a date using the UTC calendar as opposed to  `addMonths` which uses the server's one.

### 8.1 Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| Initial date                     | Date and time |
| The number of months to be added | Integer       |

### 8.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *months*. | Date and time |

### 8.3 Example

If you use the following input: 

```java {linenos=false}
addMonths(dateTime(2007, 1, 1, 1, 1, 1), 13)
```

The output is:

```java {linenos=false}
"Mon Feb 01 01:01:01 CET 2008"
```

## 9 addQuarters[UTC]

The `addQuartersUTC` function adds a number of quarters to a date using the UTC calendar as opposed to  `addQuarters` which uses the server's one.

### 9.1 Input Parameters

The input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of years to be added | Integer       |

### 9.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *quarters*. | Date and time |

### 9.3 Example

If you use the following input: 

```java {linenos=false}
addQuarters(dateTime(2007, 1, 1, 1, 1, 1), 1)
```

The output is:

```java {linenos=false}
Mon Apr 01 01:01:01 CET 2007
```

## 10 addYears[UTC]

The `addYearsUTC` function adds a number of years to a date using the UTC calendar as opposed to  `addYears` which uses the server's one.

### 10.1 Input Parameters

The input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of years to be added | Integer       |

### 10.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and the specified number of *years*. | Date and time |

### 10.3 Example

If you use the following input: 

```java {linenos=false}
addYears(dateTime(2007, 1, 1, 1, 1, 1), 11)
```

The output is:

```java {linenos=false}
"Mon Jan 01 01:01:01 CET 2018"
```

## 11 Passing Values of the Long Type

It is possible to pass values of the Long type to different **Add date function** calls.

If you use the following input:

```java {linenos=false}
addSeconds(dateTime(1970, 1, 1, 0, 0, 0), (long)(2147483647 + 100))
```

The output is:

```java {linenos=false}
"Tue Jan 19 04:15:47 CET 2038"
```
