---
title: "Mathematical function calls"
category: "refguide5"
space: "Reference Guide 5"
---


## max

Returns the largest value from the specified arguments.

### Input parameters

*   Two or more values that are all either of type Date and time or of a numeric type (Integer/Long, Float or Decimal).

### Output

Returns the largest value from the specified arguments. If the arguments are of type Date and time, the result will also be of type Date and time. If the arguments are numeric, the result will be of the most precise type. For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal.

Type: Integer/Long or Decimal

<div class="alert alert-info">{% markdown %}

```java
max(5, 1, 5, 6.7)

```

returns:

```java
6.7

```

of type "Decimal".

{% endmarkdown %}</div>

## min

Returns the smallest value from the specified arguments.

### Input

Two or more values that are all either of type Date and time or of a numeric type (Integer/Long, Float or Decimal).

### Output

Returns the smallest value from the specified arguments. If the arguments are of type Date and time, the result will also be of type Date and time. If the arguments are numeric, the result will be of the most precise type. For example, if both an Integer/Long and a Decimal argument are specified, the result will be of type Decimal.

Type: Integer/Long or Decimal

<div class="alert alert-info">{% markdown %}

```java
min(5, 1, 5, 6.7)

```

returns:

```java
1

```

of type "Decimal".

{% endmarkdown %}</div>

## round

Rounds a number to a certain precision.

### Input

*   a number
    Type: Integer/Long, Float or Decimal

*   a precision (optional) 
    Type: Integer/Long

### Output

Rounds using "half to even" rounding (also called bankers' rounding). This is the default rounding mode used in  [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point "IEEE floating point")  computing functions and operators. For example, +23.5 becomes +23, as does +22.5; while −23.5 becomes −23, as does −22.5. The second optional parameter determines the precision of the rounding, the default value is 0. The result will be of the most precise type possible. For a precision of 0 the result will be of type Integer/Long and for all other precision values of type Decimal.

Type: Integer/Long or Decimal

<div class="alert alert-info">{% markdown %}

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

of type "Decimal"

{% endmarkdown %}</div>

## random

Generates a random number >= 0.0 and < 1.0

### Output

A random number between 0.0 and 1.0
Type: Decimal

<div class="alert alert-info">{% markdown %}

```java
random()

```

{% endmarkdown %}</div>

## floor

Rounds down to an integer (everything after the decimal point is ignored).

### Input

*   a number
    Type: Integer/Long, Float or Decimal

### Output

The input value rounded down to the nearest integer.

Type: Integer/Long

<div class="alert alert-info">{% markdown %}

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

{% endmarkdown %}</div>

## ceil

Rounds up to an integer (everything after the decimal point is rounded up).

### Input

*   a number
    Type: Integer/Long, Float or Decimal

### Output

The input value rounded down to the nearest integer.

Type: Integer/Long

<div class="alert alert-info">{% markdown %}

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

{% endmarkdown %}</div>

## pow

Calculates the exponent of a number to a certain power.

### Input

*   a number 
    Type: Integer/Long, Float or Decimal
*   a power 
    Type: Integer/Long, Float or Decimal

### Output

The number to the power, i.e. n^p. The result will be of the most precise type necessary.

Type: Integer/Long or Decimal

<div class="alert alert-info">{% markdown %}

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

{% endmarkdown %}</div><div class="alert alert-warning">{% markdown %}

Calculation of 'pow' with a decimal exponent might be less accurate, as the standard Java libraries do not support these calculations with high precision. Use a specialized library in a custom Java action if high precision is required for this case.

{% endmarkdown %}</div>

## abs

Calculates the absolute value of a number (ie not negative).

### Input

*   a number
    Type: Integer/Long, Float or Decimal

### Output

The absolute value of the input, which is never negative. Corresponds to taking the square and then the square root.

Type: Integer/Long or Decimal

<div class="alert alert-info">{% markdown %}

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

{% endmarkdown %}</div>

## floatsEqual

### Input

*   a number 
    Type: Integer/Long or Float
*   another number 
    Type: Integer/Long or Float
*   a precision
    Type: Integer/Long

### Output

Compares the two numbers to decimal point p, which is equal to Precision.

Type: Boolean

<div class="alert alert-info">{% markdown %}

```java
floatsEqual(0.51, 0.50, 1)

```

returns:

```java
true

```

and

```java
floatsEqual(0.51, 0.50, 2)

```

returns:

```java
false

```

{% endmarkdown %}</div>

## currenciesEqual

See floatsEqual.

<div class="alert alert-warning">{% markdown %}

The currenciesEqual function is a synonym for floatsEqual. However, we recommend the use of the high-precision Decimal type to represent money. Equality of Decimal numbers can be determined with the = operator.

{% endmarkdown %}</div>