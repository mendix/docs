---
title: "End-of Date Function Calls"
url: /refguide/begin-of-date-function-calls/
tags: ["studio pro", "expressions", "end-of date function"]
---

## 1 Introduction

End-of date function calls calculate the end of the day, week, month, or year and return the value.

The first parameter can be an attribute of a domain model entity of type **Date and time**, a variable of type **Date and time**, or a **Date and time** value created using a [Date Creation](/refguide/date-creation/) function.

You can also calculate the end of a time period from the specified date. For more information, see [Begin-of Date Function Calls](/refguide/begin-of-date-function-calls/).

## 2 EndOfDay

The `EndOfDay` function calculates the end of the day compared to the inputted date.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the end of the day relative to the *initial date*. | Date and time |

### 2.3 Example

```java
EndOfDay(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java
"Wed Feb 07 23:59 CET 2007"
```


## 3 EndOfWeek

The `EndOfWeek` function calculates the end of the week compared to the inputted date.

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### 3.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the end of the week relative to the *initial date*. | Date and time |

### 3.3 Example

```java
EndOfWeek(dateTime(2007, 2, 7, 1, 1, 1))
```

The output is:

```java
"Sat Feb 10 23:59 CET 2007"
```

## 4 EndOfMonth

The `EndOfMonth` function calculates the end of the month compared to the inputted date.

### 4.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### 4.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the end of the month relative to the *initial date*. | Date and time |

### 4.3 Example

```java
EndOfMonth(dateTime(2007, 2, 7, 1, 1, 1))
```

The output is:

```java
"Wed Feb 28 23:59 CET 2007"
```

## 5 EndOfYear

The `EndOfYear` function calculates the end of the year compared to the inputted date.

### 5.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### 5.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the end of the year relative to the *initial date*. | Date and time |

### 5.3 Example

```java
EndOfYear(dateTime(2007, 2, 7, 1, 1, 1))
```

The output is:

```java
"Mon Dec 31 23:59 CET 2007"
```
