---
title: "Add Date Function Calls"
parent: "expressions"
tags: ["studio pro", "expressions", "add date function"]
---

## 1 Introduction

Add date function calls adds a time unit to a specific date and returns a modified value. 

The first input can be either a new **Date and time** (used in the examples below), a variable of type **Date and time**, or an attribute of a domain model entity of type **Date and time**.

## 2 addMilliseconds

The `addMilliseconds` function adds a specified number of milliseconds to a date.

### 2.1 Input Parameters

Input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |
| The number of milliseconds to be added | Integer       |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and *N milliseconds*. | Date and time |

### 2.3 Example

If you type in the following input:

```java
addMilliseconds(dateTime(2007, 1, 1, 1, 1, 1), 1400)

```

The output is:

```java
"Mon Jan 01 01:01:02:400 CET 2007"

```

## 3 addSeconds

The `addSeconds` function adds a specified number of seconds to a date.

### 3.1 Input Parameters

Input parameters are described in the table below:

| Value                             | Type          |
| --------------------------------- | ------------- |
| Initial date                      | Date and time |
| The number of seconds to be added | Integer       |

### 3.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and *N seconds*. | Date and time |

### 3.3 Example

If you type in the following input:

```java
addSeconds(dateTime(2007, 1, 1, 1, 1, 1), 2)

```

The output is:

```java
"Mon Jan 01 01:01:03 CET 2007"

```

## 4 addMinutes

The `addMinutes` function adds a number of minutes to a date.

### 4.1 Input Parameters

Input parameters are described in the table below:

| Value                             | Type          |
| --------------------------------- | ------------- |
| Initial date                      | Date and time |
| The number of minutes to be added | Integer       |

### 4.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and *N minutes*. | Date and time |

### 4.3 Example

If you type in the following input:

```java
addMinutes(dateTime(2007, 1, 1, 1, 1, 1), 3)

```

The output is:

```java
"Mon Jan 01 01:04:01 CET 2007"

```

## 5 addHours

The `addHours` function adds a number of hours to a date.

### 5.1 Input Parameters

Input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of hours to be added | Integer       |

### 5.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and *N hours*. | Date and time |

### 5.3 Example

If you type in the following input: 

```java
addHours(dateTime(2007, 1, 1, 1, 1, 1), 25)

```

The output is:

```java
"Mon Jan 02 02:01:01 CET 2007"

```

## 6 addDays[UTC]

The `addDaysUTC` function adds a number of days to a date. `addDays` uses the server's calendar and `addDaysUTC` uses the UTC calendar.

### 6.1 Input Parameters

Input parameters are described in the table below:

| Value                          | Type          |
| ------------------------------ | ------------- |
| Initial date                   | Date and time |
| The number of days to be added | Integer       |

### 6.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and *N days.* | Date and time |

### 6.3 Example

If you type in the following input: 

```java
addDays(dateTime(2007, 1, 1, 1, 1, 1), 3)

```

The output is:

```java
"Mon Jan 04 01:01:01 CET 2007"

```

## 7 addWeeks[UTC]

The `addWeeksUTC` function adds a number of weeks to a date using the UTC calendar as opposed to  `addWeeks` which uses the server's one. 

### 7.1 Input Parameters

Input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of weeks to be added | Integer       |

### 7.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and *N weeks.* | Date and time |

### 7.3 Example

If you type in the following input: 

```java
addWeeks(dateTime(2007, 1, 1, 1, 1, 1), 2)

```

The output is:

```java
"Mon Jan 15 01:01:01 CET 2007"

```

## 8 addMonths[UTC]

The `addMonthsUTC` function adds a number of months to a date using the UTC calendar as opposed to  `addMonths` which uses the server's one.

### 8.1 Input Parameters

Input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| Initial date                     | Date and time |
| The number of months to be added | Integer       |

### 8.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and *N months.* | Date and time |

### 8.3 Example

If you type in the following input: 

```java
addMonths(dateTime(2007, 1, 1, 1, 1, 1), 13)

```

The output is:

```java
"Mon Feb 01 01:01:01 CET 2008"

```

## 9 addYears[UTC]

The `addYearsUTC` function adds a number of years to a date using the UTC calendar as opposed to  `addYears` which uses the server's one.

### 9.1 Input Parameters

Input parameters are described in the table below:

| Value                           | Type          |
| ------------------------------- | ------------- |
| Initial date                    | Date and time |
| The number of years to be added | Integer       |

### 9.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the sum of the *initial date* and *N years.* | Date and time |

### 9.3 Example

If you type in the following input: 

```java
addYears(dateTime(2007, 1, 1, 1, 1, 1), 11)

```

The output is:

```java
"Mon Jan 01 01:01:01 CET 2018"

```

## 10 Passing Values of the Long Type

It is possible to pass values of the Long type to different **Add date function** calls:

If you type in the following input:

```java
addSeconds(dateTime(1970, 1, 1, 0, 0, 0), (long)(2147483647 + 100))
```

The output is:

```java
"Tue Jan 19 04:15:47 CET 2038"
```


