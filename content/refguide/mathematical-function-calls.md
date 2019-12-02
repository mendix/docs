---
title: "Mathematical Function Calls"
parent: "expressions"
tags: ["studio pro"]
---

## 1 max

Returns the largest value from the specified arguments.

### 1.1 Input Parameters

* Two or more values that are all either of type Date and time or of a numeric type (Integer/Long or Decimal).

### 1.2 Output

Returns the largest value from the specified arguments. If the arguments are of type Date and time, the result will also be of type Date and time. If the arguments are numeric, the result will be of the most precise type. For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal.

Type: Date and time, Integer/Long, or Decimal

```java
max(5, 1, 5, 6.7)
```

returns:

```java
6.7
```

of type "Decimal".

## 2 min

Returns the smallest value from the specified arguments.

### 2.1 Input

* Two or more values that are all either of type Date and time or of a numeric type (Integer/Long, Decimal).

### 2.2 Output

Returns the smallest value from the specified arguments. If the arguments are of type Date and time, the result will also be of type Date and time. If the arguments are numeric, the result will be of the most precise type. For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal.

Type: Date and time, Integer/Long, or Decimal

```java
min(5, 1, 5, 6.7)
```

returns:

```java
1
```

of type "Decimal"

## 3 round

Rounds a number to a certain precision.

### 3.1 Input

*   a number
    Type: Integer/Long, Decimal

*   a precision (optional) 
    Type: Integer/Long

### 3.2 Output

In the [Project Settings](project-settings), your option for **Round numbers** can be set which determines how half numbers (0.5) are treated:
*   For the **Half away from zero** option (also called "commercial rounding"), +2.5 becomes +3 and -1.5 becomes -2
*   The **Half to the nearest even number** option (also called "bankers' rounding") is the default rounding mode used in  [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point "IEEE floating point") computing functions and operators; for example, +23.5 becomes +24, as does +24.5; and -22.5 becomes -22, as does -21.5

The second optional parameter determines the precision of the rounding. The default value is 0. The result will be of the most precise type possible. For a precision of 0, the result will be of integer/long type, and for all other precision values, the result will be of the decimal type.

Type: Integer/Long or Decimal

```java
round(3.5)
```

returns:

```java
4
```

of type "Integer/Long"

and

```java
round(88.725,2)
```

returns:

```java
88.72
```

of type Decimal

## 4 random

Generates a random number >= 0.0 and < 1.0

### 4.1 Output

A random number between 0.0 and 1.0
Type: Decimal

```java
random()
```

## 5 floor

Rounds down to an integer (returns the largest integer which is less than or equal to the input).

### 5.1 Input

*   a number
    Type: Integer/Long, Decimal

### 5.2 Output

The input value rounded down to the nearest integer.

Type: Integer/Long

```java
floor(3.9)
```

returns:

```java
3
```

and

```java
floor(-1.2)
```

returns:

```java
-2
```

## 6 ceil

Rounds up to an integer (returns the smallest integer which is greater than or equal to the input).

### 6.1 Input

*   a number
    Type: Integer/Long, Decimal

### 6.2 Output

The input value rounded up to the nearest integer.

Type: Integer/Long

```java
ceil(3.2)
```

returns:

```java
4
```

and

```java
ceil(-1.9)
```

returns:

```java
-1
```

## 7 pow

Calculates the exponent of a number to a certain power.

### 7.1 Input

*   a number 
    Type: Integer/Long, Decimal
*   a power 
    Type: Integer/Long, Decimal

### 7.2 Output

The number to the power, as in, n^p. The result will be of the most precise type necessary.

Type: Integer/Long or Decimal

```java
pow(2, 3)
```

returns:

```java
8
```

of type "Integer/Long"

and

```java
pow(2.5, 3)
```

returns:

```java
15.625
```

of type "Decimal"

Calculation of 'pow' with a decimal exponent might be less accurate, as the standard Java libraries do not support these calculations with high precision. Use a specialized library in a custom Java action if high precision is required for this case.

## 8 abs

Calculates the absolute value of a number (ie not negative).

### 8.1 Input

*   a number
    Type: Integer/Long, Decimal

### 8.2 Output

The absolute value of the input, which is never negative. Corresponds to taking the square and then the positive square root.

Type: Integer/Long or Decimal

```java
abs(-5)
```

and

```java
abs(5)
```

both return:

```java
5
```
