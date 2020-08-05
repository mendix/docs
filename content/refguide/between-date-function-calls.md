---
title: "Between Date Function Calls"
parent: "expressions"
tags: ["studio pro"]
---

## 1 Introduction

Between date function calls calculate the differences between two dates.

## 2 millisecondsBetween

The `millisecondsBetween` function calculates the difference between the input values in milliseconds.

### 2.1 Input Parameters

Use the following input parameters:

*   First date
    Type: Date and time
*   Second date
    Type: Date and time

### 2.2 Output

The expression will return the difference between the two dates, as a Decimal, measured in milliseconds.

### 2.3 Example

If you type in the following input:

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

Use the following input parameters:

*   First date
    Type: Date and time
*   Second date
    Type: Date and time

### 3.2 Output

The expression will return difference between the two dates, as a Decimal, measured in seconds.

### 3.3 Example

If you type in the following input:

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

Use the following input parameters:

*   First date
    Type: Date and time
*   Second date
    Type: Date and time

### 4.2 Output

The expression will return the difference between the two dates, as a Decimal, measured in minutes.

### 4.3 Example

If you type in the following input:

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

Use the following input parameters:

*   First date
    Type: Date and time
*   Second date
    Type: Date and time

### 5.2 Output

The expression will return the difference between the two dates, as a Decimal, measured in hours.

### 5.3 Example

If you type in the following input:

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

Use the following input parameters:

*   First date
    Type: Date and time
*   Second date
    Type: Date and time

### 6.2 Output

The expression will return the difference between the two dates as a positive Decimal measured in days. Time is taken into consideration, so comparing `date-x 0:00` with `date-x 06:00` will result in `0.25000000`.

### 6.3 Example

If you type in the following input:

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

Use the following input parameters:

*   First date
    Type: Date and time
*   Second date
    Type: Date and time

### 7.2 Output

The expression will return the difference between the two dates, as a Decimal, measured in weeks.

### 7.3 Example

If you type in the following input:

```java
weeksBetween(dateTime(2007, 1, 9, 1, 1, 1), dateTime(2007,1,1,1,1,1))
```

The output results in 8 days divided by 7 days in a week:

```java
1.1428571428571428
```
