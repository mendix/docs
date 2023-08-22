---
title: "Between Date Function Calls"
url: /refguide8/between-date-function-calls/
weight: 100
tags: ["studio pro", "between date function calls", "expression", "expressions"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/between-date-function-calls.pdf).
{{% /alert %}}

## 1 Introduction

Between date function calls calculate the differences between two dates.

For a deep-dive look into working with DateTime functions, check out this video:

{{< vidyard "Cjy2qSeKcGhcuKEmkKesp2" >}}

## 2 millisecondsBetween

The `millisecondsBetween` function calculates the difference between the input values in milliseconds.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| The difference between the two dates measured in milliseconds | Decimal |

### 2.3 Example

If you use the following input:

```java
millisecondsBetween(dateTime(2007, 1, 1, 1, 1, 1), dateTime(2007,1,1,1,1,3))
```

The output is:

```java
2000
```

## 3 secondsBetween

The `secondsBetween` function calculates the difference between the input values in seconds.

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### 3.2 Output

The output is described in the table below:

| Value                                                     | Type    |
| --------------------------------------------------------- | ------- |
| The difference between the two dates measured in seconds. | Decimal |

### 3.3 Example

If you use the following input:

```java
secondsBetween(dateTime(2007, 1, 1, 1, 1, 1), dateTime(2007,1,1,1,2,3))
```

The output is:

```java
62
```

## 4 minutesBetween

The `minutesBetween` function calculates the difference between the input values in minutes.

### 4.1 Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### 4.2 Output

The output is described in the table below:

| Value                                                     | Type    |
| --------------------------------------------------------- | ------- |
| The difference between the two dates measured in minutes. | Decimal |

### 4.3 Example

If you use the following input:

```java
minutesBetween(dateTime(2007, 1, 1, 1, 2, 1), dateTime(2007,1,1,1,1,1))
```

The output is:

```java
1
```

## 5 hoursBetween

The `hoursBetween` function calculates the difference between the input values in hours.

### 5.1 Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### 5.2 Output

The output is described in the table below:

| Value                                                   | Type    |
| ------------------------------------------------------- | ------- |
| The difference between the two dates measured in hours. | Decimal |

### 5.3 Example

If you use the following input:

```java
hoursBetween(dateTime(2007, 1, 1, 3, 31, 1), dateTime(2007,1,1,1,1,1))
```

The output is:

```java
2.5
```

## 6 daysBetween

The `daysBetween` function calculates the difference between the input values in days.

### 6.1 Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### 6.2 Output

The output is described in the table below:

| Value                                                        | Type             |
| ------------------------------------------------------------ | ---------------- |
| The difference between the two dates as a positive Decimal measured in days. Time is taken into consideration, so comparing `date-x 0:00` with `date-x 06:00` will result in `0.25000000`. | Positive decimal |

### 6.3 Example

If you use the following input:

```java
daysBetween(dateTime(2007, 2, 13, 1, 1, 1), dateTime(2007,1,1,1,1,1))
```

The output is:

```java
43
```

## 7 weeksBetween

The `weeksBetween` function calculates the difference between the input values in weeks.

### 7.1 Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### 7.2 Output

The output is described in the table below:

| Value                                                   | Type    |
| ------------------------------------------------------- | ------- |
| The difference between the two dates measured in weeks. | Decimal |

### 7.3 Example

If you use the following input:

```java
weeksBetween(dateTime(2007, 1, 9, 1, 1, 1), dateTime(2007,1,1,1,1,1))
```

The output results in 8 days divided by 7 days in a week:

```java
1.1428571428571428
```

## 8 calendarMonthsBetween

{{% alert color="warning" %}}This expression is only available in Mendix versions 8.15 and above.{{% /alert %}}

The `calendarMonthsBetween` function calculates the difference between the input values in months. Time will be ignored. The dates are assumed to be in the end-user's local time zone.

### 8.1 Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### 8.2 Output

The output is described in the table below:

| Value                                                    | Type            |
| -------------------------------------------------------- | --------------- |
| The difference between the two dates measured in months. | Integer/Long    |

### 8.3 Example

If you use the following input:

```java
calendarMonthsBetween(dateTime(2007, 1, 1, 10, 1, 1), dateTime(2007, 8, 1, 1, 1, 1))
```

The output results in the amount of months between the two dates:

```java
7
```

## 9 calendarYearsBetween

{{% alert color="warning" %}}This expression is only available in Mendix versions 8.15 and above.{{% /alert %}}

The `calendarYearsBetween` function calculates the difference between the input values in years. Time will be ignored. The dates are assumed to be in the end-user's local time zone.

### 9.1 Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### 9.2 Output

The output is described in the table below:

| Value                                                   | Type            |
| ------------------------------------------------------- | --------------- |
| The difference between the two dates measured in years. | Integer/Long    |

### 9.3 Example

If you use the following input:

```java
calendarYearsBetween(dateTime(2007, 1, 1, 10, 1, 1), dateTime(2017, 1, 1, 1, 1, 1))
```

The output results in the amount of years between the two dates:

```java
10
```
