---
title: "Between date function calls"
category: "refguide4"
space: "Reference Guide 4"
---
Functions for calculating the differences between two dates.

## millisecondsBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Float/Currency, measured in milliseconds.

<div class="alert alert-info">{% markdown %}

```java
millisecondsBetween(dateTime(2007, 1, 1, 1, 1, 1), dateTime(2007,1,1,1,1,3))

```

results in

```java
2000

```

{% endmarkdown %}</div>

## secondsBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Float/Currency, measured in seconds.

<div class="alert alert-info">{% markdown %}

```java
secondsBetween(dateTime(2007, 1, 1, 1, 1, 1), dateTime(2007,1,1,1,2,3))

```

results in

```java
62

```

{% endmarkdown %}</div>

## minutesBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Float/Currency, measured in minutes.

<div class="alert alert-info">{% markdown %}

```java
minutesBetween(dateTime(2007, 1, 1, 1, 2, 1), dateTime(2007,1,1,1,1,1))

```

results in

```java
1

```

{% endmarkdown %}</div>

## hoursBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Float/Currency, measured in hours.

<div class="alert alert-info">{% markdown %}

```java
hoursBetween(dateTime(2007, 1, 1, 3, 31, 1), dateTime(2007,1,1,1,1,1))

```

results in

```java
2.5

```

{% endmarkdown %}</div>

## daysBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Float/Currency, measured in days.

<div class="alert alert-info">{% markdown %}

```java
daysBetween(dateTime(2007, 2, 13, 1, 1, 1), dateTime(2007,1,1,1,1,1))

```

results in

```java
32.5

```

{% endmarkdown %}</div>

## weeksBetween

*   First date
    Type: DateTime
*   Second date
    Type: DateTime

### Output

Returns the difference between the two dates, as a Float/Currency, measured in weeks.

<div class="alert alert-info">{% markdown %}

```java
weeksBetween(dateTime(2007, 1, 9, 1, 1, 1), dateTime(2007,1,1,1,1,1))

```

results in 8 days divided by 7 days in a week:

```java
1.1428571428571428

```

{% endmarkdown %}</div>