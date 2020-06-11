---
title: "Mathematical Function Calls"
parent: "expressions"
tags: ["studio pro", "mathematical function call", "mathematical function", "expressions"]
---

## 1 Introduction

Mathematical function calls include various mathematical operations with numbers, such as returning the largest value or rounding a number up. 

## 2 max

Returns the largest value from the specified arguments.

### 2.1 Input Parameters

Use the following input parameters:

* Two or more values 

  Type: all values should be either of type Date and time or of a numeric type (Integer/Long or Decimal)

### 2.2 Output

Returns the largest value from the specified arguments. If the arguments are of type Date and time, the result will also be of type Date and time. If the arguments are numeric, the result will be of the most precise type. For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal.

### 2.3 Example

If you type in the following input:

```java
max(5, 1, 5, 6.7)
```

The output is a decimal:

```java
6.7
```

## 3 min

Returns the smallest value from the specified arguments.

### 3.1 Input

Use the following input parameters:

* Two or more values

  Type: all values should be either of type Date and time or of a numeric type (Integer/Long, Decimal)

### 3.2 Output

Returns the smallest value from the specified arguments. If the arguments are of type Date and time, the result will also be of type Date and time. If the arguments are numeric, the result will be of the most precise type. For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal.

### 3.3 Example

If you type in the following input:

```java
min(5, 1, 5, 6.7)
```

The output is a decimal:

```java
1
```

## 4 round

Rounds a number to a certain precision.

### 4.1 Input

Use the following input parameters:

*   a number
    Type: Integer/Long, Decimal

*   a precision (optional) 
    Type: Integer/Long

### 4.2 Output

In the [Project Settings](project-settings), your option for **Round numbers** can be set which determines how half numbers (0.5) are treated:
*   For the **Half away from zero** option (also called "commercial rounding"), +2.5 becomes +3 and -1.5 becomes -2
*   The **Half to the nearest even number** option (also called "bankers' rounding") is the default rounding mode used in [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point "IEEE floating point") computing functions and operators; for example, +23.5 becomes +24, as does +24.5; and -22.5 becomes -22, as does -21.5

The second optional parameter determines the precision of the rounding. The default value is 0. The result will be of the most precise type possible. For a precision of 0, the result will be of integer/long type, and for all other precision values, the result will be of the decimal type.

### 4.3 Example

If you type in the following input:

```java
round(3.5)
```

The output is of type Integer/Long:

```java
4
```

Another example of an input is:

```java
round(88.725,2)
```

The output is a decimal:

```java
88.72
```

## 5 random

Generates a random number >= 0.0 and < 1.0

### 5.1 Output

The output is a random number of a decimal type between 0.0 and 1.0

### 5.2 Example

If you type in the following input:

```java
random()
```

The output is:

```java
0.3
```


## 6 floor

Rounds down to an integer (returns the largest integer which is less than or equal to the input).

### 6.1 Input

Use the following input parameters:

*   a number
    Type: Integer/Long, Decimal

### 6.2 Output

The input value rounded down to the nearest integer.

### 6.3 Example

If you type in the following input:

```java
floor(3.9)
```

The output is:

```java
3
```

Another example of an input is:

```java
floor(-1.2)
```

The output is:

```java
-2
```

## 7 ceil

Rounds up to an integer (returns the smallest integer which is greater than or equal to the input).

### 7.1 Input

Use the following input parameters:

*   a number
    Type: Integer/Long, Decimal

### 7.2 Output

The input value rounded up to the nearest integer.

### 7.3 Example

If you type in the following input:

```java
ceil(3.2)
```

The output is:

```java
4
```

Another example of an input is:

```java
ceil(-1.9)
```

The output is:

```java
-1
```

## 8 pow

Calculates the exponent of a number to a certain power.

### 8.1 Input

Use the following input parameters:

*   a number 
    Type: Integer/Long, Decimal
*   a power 
    Type: Integer/Long, Decimal

### 8.2 Output

The number to the power, as in, n^p. The result will be of the most precise type necessary.

Type: Integer/Long or Decimal

### 8.3 Example

If you type in the following input:

```java
pow(2, 3)
```

The output is of type Integer/Long:

```java
8
```

Another example of an input is:

```java
pow(2.5, 3)
```

The output is of type Decimal:

```java
15.625
```

Calculation of 'pow' with a decimal exponent might be less accurate, as the standard Java libraries do not support these calculations with high precision. Use a specialized library in a custom Java action if high precision is required for this case.

## 9 abs

Calculates the absolute value of a number (ie not negative).

### 9.1 Input

Use the following input parameters:

*   a number
    Type: Integer/Long, Decimal

### 9.2 Output

The absolute value of the input, which is never negative. Corresponds to taking the square and then the positive square root.

Type: Integer/Long or Decimal

### 9.3 Example

If you type in the negative value as an input:

```java
abs(-5)
```

or if you type in the positive value: 

```java
abs(5)
```

The output in both cases is:

```java
5
```
