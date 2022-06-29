---
title: "Mathematical Function Calls"
url: /refguide8/mathematical-function-calls/
weight: 70
tags: ["studio pro", "mathematical function call", "mathematical function", "expressions"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/mathematical-function-calls.pdf).
{{% /alert %}}

## 1 Introduction

Mathematical function calls include a limited number of mathematical operations on numbers, such as returning the largest value or rounding a number up. 

If you need more elaborate functions (such as the square root, sin, cos, tan, numberOfPermutations, factorial, or fibonacciNumber), then consider using the community-supported [Math](https://marketplace.mendix.com/link/component/112522/) module available in the Mendix Marketplace.

## 2 max

Returns the largest value from the specified arguments.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value              | Type                                   |
| ------------------ | -------------------------------------- |
| Two or more values | All numeric type (Integer/Long or Decimal) or all Date and time                          |

### 2.2 Output

The output is described in the table below:

| Value                                           | Type                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| The largest value from the specified arguments. | If the arguments are of type Date and time, the result will also be of type Date and time. <br />If the arguments are numeric, the result will be of the most precise type. <br />For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal. |

### 2.3 Example

If you use the following input:

```java
max(5, 1, 5, 6.7)
```

The output is a decimal:

```java
6.7
```

## 3 min

Returns the smallest value from the specified arguments.

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value              | Type                                   |
| ------------------ | -------------------------------------- |
| Two or more values | All numeric type (Integer/Long or Decimal) or all Date and time                          |

### 3.2 Output

The output is described in the table below:

| Value                                            | Type                                                         |
| ------------------------------------------------ | ------------------------------------------------------------ |
| The smallest value from the specified arguments. | If the arguments are of type Date and time, the result will also be of type Date and time. <br />If the arguments are numeric, the result will be of the most precise type. <br />For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal. |

### 3.3 Example

If you use the following input:

```java
min(5, 1, 5, 6.7)
```

The output is a decimal:

```java
1
```

## 4 round

Rounds a number to a certain precision.

### 4.1 Input Parameters

The input parameters are described in the table below:

| Value                  | Type                  |
| ---------------------- | --------------------- |
| A number               | Integer/Long, Decimal |
| A precision (optional) | Integer/Long          |

### 4.2 Output

In the [Project Settings](/refguide8/project-settings/), your option for **Round numbers** can be set which determines how half numbers (0.5) are treated:
*   For the **Half away from zero** option (also called "commercial rounding"), +2.5 becomes +3 and -1.5 becomes -2
*   The **Half to the nearest even number** option (also called "bankers' rounding") is the default rounding mode used in [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point "IEEE floating point") computing functions and operators; for example, +23.5 becomes +24, as does +24.5; and -22.5 becomes -22, as does -21.5

The second optional parameter determines the precision of the rounding. The default value is 0. The result will be of the most precise type possible. For a precision of 0, the result will be of integer/long type, and for all other precision values, the result will be of the decimal type.

### 4.3 Example

If you use the following input:

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

The output is described in the table below:

| Value                                                  | Type    |
| ------------------------------------------------------ | ------- |
| A random number of a decimal type between 0.0 and 1.0. | Decimal |

### 5.2 Example

If you use the following input:

```java
random()
```

The output is:

```java
0.3
```

## 6 floor

Rounds down to an integer (returns the largest integer which is less than or equal to the input).

### 6.1 Input Parameters

The input parameters are described in the table below:

| Value    | Type                  |
| -------- | --------------------- |
| A number | Integer/Long, Decimal |

### 6.2 Output

The output is described in the table below:

| Value                                                | Type    |
| ---------------------------------------------------- | ------- |
| The input value rounded down to the nearest integer. | Integer |

### 6.3 Example

If you use the following input:

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

### 7.1 Input Parameters

The input parameters are described in the table below:

| Value    | Type                  |
| -------- | --------------------- |
| A number | Integer/Long, Decimal |

### 7.2 Output

The output is described in the table below:

| Value                                              | Type    |
| -------------------------------------------------- | ------- |
| The input value rounded up to the nearest integer. | Integer |

### 7.3 Example

If you use the following input:

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

Raises a number to a certain power.

### 8.1 Input Parameters

The input parameters are described in the table below:

| Value    | Type                  |
| -------- | --------------------- |
| A number | Integer/Long, Decimal |
| A power  | Integer/Long, Decimal |

### 8.2 Output

The output is described in the table below:

| Value                                                        | Type                    |
| ------------------------------------------------------------ | ----------------------- |
| The number to the power, as in, n^p. The result will be of the most precise type necessary. | Integer/Long or Decimal |

### 8.3 Example

If you use the following input:

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

Calculation of 'pow' with a decimal power might be less accurate, as the standard Java libraries do not support these calculations with high precision. Use a specialized library in a custom Java action if high precision is required for this case.

### 8.4 (square) root

To get the square root of a decimal, use 0.5 as the second parameter:

* `pow(16, 0.5)` results in `4`


Or, use a division for a specific root:

* `pow(27, 1:3)` results in `3`

* `pow(16, 1:4)` results in `2`

## 9 abs

Calculates the absolute value of a number (meaning, not negative).

### 9.1 Input Parameters

The input parameters are described in the table below:

| Value    | Type                  |
| -------- | --------------------- |
| A number | Integer/Long, Decimal |

### 9.2 Output

The output is described in the table below:

| Value                                                        | Type                    |
| ------------------------------------------------------------ | ----------------------- |
| The absolute value of the input, which is never negative. Corresponds to taking the square and then the positive square root. | Integer/Long or Decimal |

### 9.3 Example

If you type in the negative value as an input:

```java
abs(-5)
```

Or, if you type in the positive value: 

```java
abs(5)
```

The output in both cases is:

```java
5
```
