---
title: "Between date function calls"
parent: "microflow-expressions"
---
Functions for calculating the differences between two dates.

## millisecondsBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Float/Currency, measured in milliseconds.

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

Returns the difference between the two dates, as a Float/Currency, measured in seconds.

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

Returns the difference between the two dates, as a Float/Currency, measured in minutes.

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

Returns the difference between the two dates, as a Float/Currency, measured in hours.

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

Returns the difference between the two dates, as a Float/Currency, measured in days.

```java
daysBetween(dateTime(2007, 2, 13, 1, 1, 1), dateTime(2007,1,1,1,1,1))

```

results in

```java
32.5

```

## weeksBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Float/Currency, measured in weeks.

```java
weeksBetween(dateTime(2007, 1, 9, 1, 1, 1), dateTime(2007,1,1,1,1,1))

```

results in 8 days divided by 7 days in a week:

```java
1.1428571428571428

```
