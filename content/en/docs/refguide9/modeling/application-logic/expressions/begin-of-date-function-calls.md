---
title: "Begin-of Date Function Calls"
url: /refguide9/begin-of-date-function-calls/
weight: 95
description: Describes begin-of date function calls in Studio Pro expressions.
---

{{% alert color="info" %}}
This function is only available for Mendix Studio Pro 9.18.0 and above. 
{{% /alert %}}

## 1 Introduction

Begin-of date function calls calculate the beginning of the day, week, month, or year and return the value.

The first parameter can be an attribute of an entity of type **Date and time**, a variable of type **Date and time**, or a **Date and time** value created using a [Date Creation](/refguide9/date-creation/) function.

You can also calculate the end of a time period from the specified date. For more information, see [End-of Date Function Calls](/refguide9/end-of-date-function-calls/).

## 2 beginOfDay

The `beginOfDay` function calculates the beginning of the day compared to the initial date.

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

```java {linenos=false}
beginOfDay(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java {linenos=false}
"Wed Feb 07 00:00 CET 2007"
```

## 3 beginOfWeek

The `beginOfWeek` function calculates the beginning of the week compared to the initial date. The beginning and the end of the week are based on the user's locale. In the case of an anonymous user, the browser's locale is used instead.

### 3.1 Input Parameters

Input parameters are described in the table below:

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

```java {linenos=false}
beginOfWeek(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java {linenos=false}
"Sun Feb 04 00:00 CET 2007"
```

## 4 beginOfMonth

The `beginOfMonth` function calculates the beginning of the month compared to the initial date.

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

```java {linenos=false}
beginOfMonth(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java {linenos=false}
"Thu Feb 01 00:00 CET 2007"
```

## 5 beginOfYear

The `beginOfYear` function calculates the beginning of the year compared to the initial date.

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

```java {linenos=false}
beginOfYear(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java {linenos=false}
"Mon Jan 01 00:00 CET 2007"
```

## 6 Read More

* [Date Creation](/refguide9/date-creation/)
* [End-of Date Function Calls](/refguide9/end-of-date-function-calls/)
