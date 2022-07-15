---
title: "Begin-of Date Function Calls"
url: /refguide/begin-of-date-function-calls/
tags: ["studio pro", "expressions", "begin-of date function"]
---

## 1 Introduction

Begin-of date function calls calculate the beginning of the day, week, month, or year and return the value.

The first parameter can be an attribute of a domain model entity of type **Date and time**, a variable of type **Date and time**, or a **Date and time** value created using a [Date Creation](/refguide/date-creation/) function.

You can also calculate the end of a time period from the specified date. For more information, see [End-of Date Function Calls](/refguide/end-of-date-function-calls/).

## 2 BeginOfDay

The `BeginOfDay` function calculates the beginning of the day compared to the inputted date.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the beginning of the day relative to the *initial date*. | Date and time |

### 2.3 Example

If you use the following input:

```java
BeginOfDay(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java
"Wed Feb 07 00:00 CET 2007"
```

## 3 BeginOfWeek

The `BeginOfWeek` function calculates the beginning of the week compared to the inputted date.

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### 3.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the beginning of the week relative to the *initial date*. | Date and time |

### 3.3 Example

If you use the following input:

```java
BeginOfWeek(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java
"Sun Feb 04 00:00 CET 2007"
```

## 4 BeginOfMonth

The `BeginOfMonth` function calculates the beginning of the month compared to the inputted date.

### 4.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### 4.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the beginning of the month relative to the *initial date*. | Date and time |

### 4.3 Example

If you use the following input:

```java
BeginOfMonth(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java
"Thu Feb 01 00:00 CET 2007"
```

## 5 BeginOfYear

The `BeginOfYear` function calculates the beginning of the year compared to the inputted date.

### 5.1 Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### 5.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the beginning of the year relative to the *initial date*. | Date and time |

### 5.3 Example

If you use the following input:

```java
BeginOfYear(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java
"Mon Jan 01 00:00 CET 2007"
```
