---
title: "Between Date Function Calls"
url: /refguide/between-date-function-calls/
weight: 100
---

## Introduction

Between date function calls calculate the absolute difference between two dates. The difference will always be zero or a positive number.

## millisecondsBetween

The `millisecondsBetween` function calculates the absolute difference between the input values in milliseconds.

### Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| The absolute difference between the two dates measured in milliseconds | Decimal |

### Example

If you use the following input:

```java {linenos=false}
millisecondsBetween(dateTime(2007, 1, 1, 1, 1, 1), dateTime(2007,1,1,1,1,3))
```

The output is:

```java {linenos=false}
2000
```

## secondsBetween

The `secondsBetween` function calculates the absolute difference between the input values in seconds.

### Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### Output

The output is described in the table below:

| Value                                                     | Type    |
| --------------------------------------------------------- | ------- |
| The absolute difference between the two dates measured in seconds. | Decimal |

### Example

If you use the following input:

```java {linenos=false}
secondsBetween(dateTime(2007, 1, 1, 1, 1, 1), dateTime(2007,1,1,1,2,3))
```

The output is:

```java {linenos=false}
62
```

## minutesBetween

The `minutesBetween` function calculates the absolute difference between the input values in minutes.

### Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### Output

The output is described in the table below:

| Value                                                     | Type    |
| --------------------------------------------------------- | ------- |
| The absolute difference between the two dates measured in minutes. | Decimal |

### Example

If you use the following input:

```java {linenos=false}
minutesBetween(dateTime(2007, 1, 1, 1, 2, 1), dateTime(2007,1,1,1,1,1))
```

The output is:

```java {linenos=false}
1
```

## hoursBetween

The `hoursBetween` function calculates the absolute difference between the input values in hours.

### Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### Output

The output is described in the table below:

| Value                                                   | Type    |
| ------------------------------------------------------- | ------- |
| The absolute difference between the two dates measured in hours. | Decimal |

### Example

If you use the following input:

```java {linenos=false}
hoursBetween(dateTime(2007, 1, 1, 3, 31, 1), dateTime(2007,1,1,1,1,1))
```

The output is:

```java {linenos=false}
2.5
```

## daysBetween

The `daysBetween` function calculates the absolute difference between the input values in days.

### Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### Output

The output is described in the table below:

| Value                                                        | Type             |
| ------------------------------------------------------------ | ---------------- |
| The absolute difference between the two dates as a Decimal measured in days. Time is taken into consideration, so comparing `date-x 0:00` with `date-x 06:00` will result in `0.25000000`. | Decimal |

### Example

If you use the following input:

```java {linenos=false}
daysBetween(dateTime(2007, 2, 13, 1, 1, 1), dateTime(2007,1,1,1,1,1))
```

The output is:

```java {linenos=false}
43
```

## weeksBetween

The `weeksBetween` function calculates the absolute difference between the input values in weeks.

### Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### Output

The output is described in the table below:

| Value                                                   | Type    |
| ------------------------------------------------------- | ------- |
| The absolute difference between the two dates measured in weeks. | Decimal |

### Example

If you use the following input:

```java {linenos=false}
weeksBetween(dateTime(2007, 1, 9, 1, 1, 1), dateTime(2007,1,1,1,1,1))
```

The output results in 8 days divided by 7 days in a week:

```java {linenos=false}
1.1428571428571428
```

## calendarMonthsBetween

The `calendarMonthsBetween` function calculates the absolute difference between the input values in months. Time will be ignored. The dates are assumed to be in the end-user's local time zone.

### Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### Output

The output is described in the table below:

| Value                                                    | Type            |
| -------------------------------------------------------- | --------------- |
| The absolute difference between the two dates measured in months. | Integer/Long    |

### Example

If you use the following input:

```java {linenos=false}
calendarMonthsBetween(dateTime(2007, 1, 1, 10, 1, 1), dateTime(2007, 8, 1, 1, 1, 1))
```

The output results in the amount of months between the two dates:

```java {linenos=false}
7
```

## calendarYearsBetween

The `calendarYearsBetween` function calculates the absolute difference between the input values in years. Time will be ignored. The dates are assumed to be in the end-user's local time zone.

### Input Parameters

The input parameters are described in the table below:

| Value       | Type          |
| ----------- | ------------- |
| First date  | Date and time |
| Second date | Date and time |

### Output

The output is described in the table below:

| Value                                                   | Type            |
| ------------------------------------------------------- | --------------- |
| The absolute difference between the two dates measured in years. | Integer/Long    |

### Example

If you use the following input:

```java {linenos=false}
calendarYearsBetween(dateTime(2007, 1, 1, 10, 1, 1), dateTime(2017, 1, 1, 1, 1, 1))
```

The output results in the amount of years between the two dates:

```java {linenos=false}
10
```
