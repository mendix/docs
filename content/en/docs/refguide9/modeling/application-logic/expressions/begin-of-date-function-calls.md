---
title: "Begin-of Date Function Calls"
url: /refguide9/begin-of-date-function-calls/
weight: 95
description: Describes begin-of date function calls in Studio Pro expressions.
---

{{% alert color="info" %}}
This function is only available for Mendix Studio Pro 9.18.0 and above. 
{{% /alert %}}

## Introduction

Begin-of date function calls calculate the beginning of the day, week, month, or year and return the value.

The first parameter can be an attribute of an entity of type **Date and time**, a variable of type **Date and time**, or a **Date and time** value created using a [Date Creation](/refguide9/date-creation/) function.

You can also calculate the end of a time period from the specified date. For more information, see [End-of Date Function Calls](/refguide9/end-of-date-function-calls/).

## beginOfDay

The `beginOfDay` function calculates the beginning of the day compared to the initial date.

### Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the beginning of the day relative to the *initial date*. | Date and time |

### Example

If you use the following input:

```java
beginOfDay(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java
"Wed Feb 07 00:00 CET 2007"
```

## beginOfWeek

The `beginOfWeek` function calculates the beginning of the week compared to the initial date. The beginning and the end of the week are based on the user's locale. In the case of an anonymous user, the browser's locale is used instead.

### Input Parameters

Input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the beginning of the week relative to the *initial date*. | Date and time |

### Example

If you use the following input:

```java
beginOfWeek(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java
"Sun Feb 04 00:00 CET 2007"
```

## beginOfMonth

The `beginOfMonth` function calculates the beginning of the month compared to the initial date.

### Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the beginning of the month relative to the *initial date*. | Date and time |

### Example

If you use the following input:

```java
beginOfMonth(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java
"Thu Feb 01 00:00 CET 2007"
```

## beginOfYear

The `beginOfYear` function calculates the beginning of the year compared to the initial date.

### Input Parameters

The input parameters are described in the table below:

| Value                                  | Type          |
| -------------------------------------- | ------------- |
| Initial date                           | Date and time |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| A Date and time value that is the beginning of the year relative to the *initial date*. | Date and time |

### Example

If you use the following input:

```java
beginOfYear(dateTime(2007, 2, 7, 1, 1))
```

The output is:

```java
"Mon Jan 01 00:00 CET 2007"
```

## Read More

* [Date Creation](/refguide9/date-creation/)
* [End-of Date Function Calls](/refguide9/end-of-date-function-calls/)
