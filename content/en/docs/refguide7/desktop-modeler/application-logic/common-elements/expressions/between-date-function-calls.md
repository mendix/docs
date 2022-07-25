---
title: "Between Date Function Calls"
url: /refguide7/between-date-function-calls/
---

Functions for calculating the differences between two dates.

## millisecondsBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Decimal, measured in milliseconds.

For example:

```java
millisecondsBetween(dateTime(2007, 1, 1, 1, 1, 1), dateTime(2007,1,1,1,1,3))
```

results in

```java
2000
```

## secondsBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Decimal, measured in seconds.

For example:

```java
secondsBetween(dateTime(2007, 1, 1, 1, 1, 1), dateTime(2007,1,1,1,2,3))
```

results in

```java
62
```

## minutesBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Decimal, measured in minutes.

For example:

```java
minutesBetween(dateTime(2007, 1, 1, 1, 2, 1), dateTime(2007,1,1,1,1,1))
```

results in

```java
1
```

## hoursBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Decimal, measured in hours.

For example:

```java
hoursBetween(dateTime(2007, 1, 1, 3, 31, 1), dateTime(2007,1,1,1,1,1))
```

results in

```java
2.5
```

## daysBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates as a positive Decimal measured in days. Time is taken into consideration, so comparing `date-x 0:00` with `date-x 06:00` will result in `0.25000000`.

For example:

```java
daysBetween(dateTime(2007, 2, 13, 1, 1, 1), dateTime(2007,1,1,1,1,1))
```

results in

```java
43
```

## weeksBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Decimal, measured in weeks.

For example:

```java
weeksBetween(dateTime(2007, 1, 9, 1, 1, 1), dateTime(2007,1,1,1,1,1))
```

results in 8 days divided by 7 days in a week:

```java
1.1428571428571428
```
