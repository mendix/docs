---
title: "Mathematical Function Calls"
url: /refguide9/mathematical-function-calls/
weight: 70
---

## Introduction

Mathematical function calls include a limited number of mathematical operations on numbers, such as returning the largest value or rounding a number up. 

If you need more elaborate functions (such as the square root, sin, cos, tan, numberOfPermutations, factorial, or fibonacciNumber), then consider using the community-supported [Math](https://marketplace.mendix.com/link/component/112522/) module available in the Mendix Marketplace.

## max

Returns the largest value from the specified arguments.

### Input Parameters

The input parameters are described in the table below:

| Value              | Type                                   |
| ------------------ | -------------------------------------- |
| Two or more values | All numeric type (Integer/Long or Decimal) or all Date and time                          |

### Output

The output is described in the table below:

| Value                                           | Type                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| The largest value from the specified arguments. | If the arguments are of type Date and time, the result will also be of type Date and time. <br />If the arguments are numeric, the result will be of the most precise type. <br />For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal. |

### Example

If you use the following input:

```java
max(5, 1, 5, 6.7)
```

The output is a decimal:

```java
6.7
```

## min

Returns the smallest value from the specified arguments.

### Input Parameters

The input parameters are described in the table below:

| Value              | Type                                   |
| ------------------ | -------------------------------------- |
| Two or more values | All numeric type (Integer/Long or Decimal) or all Date and time                          |

### Output

The output is described in the table below:

| Value                                            | Type                                                         |
| ------------------------------------------------ | ------------------------------------------------------------ |
| The smallest value from the specified arguments. | If the arguments are of type Date and time, the result will also be of type Date and time. <br />If the arguments are numeric, the result will be of the most precise type. <br />For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal. |

### Example

If you use the following input:

```java
min(5, 1, 5, 6.7)
```

The output is a decimal:

```java
1
```

## round

Rounds a number to a certain precision.

### Input Parameters

The input parameters are described in the table below:

| Value                  | Type                  |
| ---------------------- | --------------------- |
| A number               | Integer/Long, Decimal |
| A precision (optional) | Integer/Long          |

### Output

In the [App Settings](/refguide9/app-settings/), your option for **Round numbers** can be set which determines how half numbers (0.5) are treated:

* For the **Half away from zero** option (also called "commercial rounding"), +2.5 becomes +3 and -1.5 becomes -2
* The **Half to the nearest even number** option (also called "bankers' rounding") is the default rounding mode used in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point "IEEE floating point") computing functions and operators; for example, +23.5 becomes +24, as does +24.5; and -22.5 becomes -22, as does -21.5

The second optional parameter determines the precision of the rounding. The default value is 0. The result will be of the most precise type possible. For a precision of 0, the result will be of integer/long type, and for all other precision values, the result will be of the decimal type.

### Example

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

## random

Generates a random number >= 0.0 and < 1.0

### Output

The output is described in the table below:

| Value                                                  | Type    |
| ------------------------------------------------------ | ------- |
| A random number of a decimal type between 0.0 and 1.0. | Decimal |

### Example

If you use the following input:

```java
random()
```

The output is:

```java
0.3
```

## floor

Rounds down to an integer (returns the largest integer which is less than or equal to the input).

### Input Parameters

The input parameters are described in the table below:

| Value    | Type                  |
| -------- | --------------------- |
| A number | Integer/Long, Decimal |

### Output

The output is described in the table below:

| Value                                                | Type    |
| ---------------------------------------------------- | ------- |
| The input value rounded down to the nearest integer. | Integer |

### Example

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

## ceil

Rounds up to an integer (returns the smallest integer which is greater than or equal to the input).

### Input Parameters

The input parameters are described in the table below:

| Value    | Type                  |
| -------- | --------------------- |
| A number | Integer/Long, Decimal |

### Output

The output is described in the table below:

| Value                                              | Type    |
| -------------------------------------------------- | ------- |
| The input value rounded up to the nearest integer. | Integer |

### Example

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

## pow {#pow}

Raises a number to a certain power.

### Input Parameters

The input parameters are described in the table below:

| Value    | Type                  |
| -------- | --------------------- |
| A number | Integer/Long, Decimal |
| A power  | Integer/Long, Decimal |

### Output

The output is described in the table below:

| Value                                | Type    |
| ------------------------------------ | ------- |
| The number to the power, as in, n^p. | Decimal |

### Example

If you use the following input:

```java
pow(2, 3)
```

The output is:

```java
8
```

Another example of an input is:

```java
pow(2.5, 3)
```

The output is:

```java
15.625
```

{{% alert color="info" %}}
Calculation of `pow` with a decimal power might be less accurate, as the standard Java/JavaScript libraries do not support these calculations with high precision. Use a specialized library in a custom Java/JavaScript action if high precision is required for this case.
{{% /alert %}}

## abs

Calculates the absolute value of a number (meaning, not negative).

### Input Parameters

The input parameters are described in the table below:

| Value    | Type                  |
| -------- | --------------------- |
| A number | Integer/Long, Decimal |

### Output

The output is described in the table below:

| Value                                                        | Type                    |
| ------------------------------------------------------------ | ----------------------- |
| The absolute value of the input, which is never negative. Corresponds to taking the square and then the positive square root. | Integer/Long or Decimal |

### Example

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

## sqrt

Calculates the square root of a number.

### Input Parameters

The input parameters are described in the table below:

| Value    | Type                  |
| -------- | --------------------- |
| A number | Integer/Long, Decimal |

{{% alert color="info" %}}
A negative input for sqrt results in an error.
{{% /alert %}}

### Output

The output is described in the table below:

| Value                                                        | Type                    |
| ------------------------------------------------------------ | ----------------------- |
| The square root of the input value | Decimal |

### Example

If you use the following input:

```java
sqrt(9)
```

The output is of type Decimal:

```java
3
```
