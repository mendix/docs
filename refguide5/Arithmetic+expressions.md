---
title: "Arithmetic expressions"
category: "refguide5"
space: "Reference Guide 5"
---


A number of arithmetic expressions are supported, all of which work on numeric types (Integer/Long, Float and Decimal).

## Multiplication

Multiplies two numbers.

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

if any of the two inputs is of type Float and they're both not of type Decimal, the result is of type Float.

<div class="alert alert-info">{% markdown %}

```java
3 * 4

```

results in

```java
12

```

{% endmarkdown %}</div>

## Division

Divides two numbers. You can use either the `div` or colon ( : ) syntax, as can be seen below in the examples. The colon ( : ) syntax is inspired by the divide symbol `÷`. We cannot use the more conventional slash ( / ) syntax because that would conflict with the slash we use for separating objects and members.

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If any of the two inputs is of type Decimal, the result is of type Decimal. Otherwise the result is of type Float.

<div class="alert alert-info">{% markdown %}

"div" syntax:

```java
3 div 5

```

results in

```java
0.6

```

":" syntax:

```java
12 : 3

```

results in

```java
4.0

```

{% endmarkdown %}</div>

## Modulo

Calculates the remainder of the division of one number by another. In other words, m modulo n corresponds to: m = p + k*n, where p is the result of the operation m modulo n.

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

if any of the two inputs is of type Float and they're both not of type Decimal, the result is of type Float.

<div class="alert alert-info">{% markdown %}

```java
23 mod 5

```

results in an Integer/Long with value

```java
3

```

Alternatively,

```java
23 mod 5.6

```

results in a Float with value

```java
0.6

```

{% endmarkdown %}</div>

## Addition

Adds two numbers.

<div class="alert alert-info">{% markdown %}

See [String function calls](String+function+calls) for more information.

{% endmarkdown %}</div>

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

if any of the two inputs is of type Float and they're both not of type Decimal, the result is of type Float.

<div class="alert alert-info">{% markdown %}

```java
-3 + 4

```

results in an Integer/Long with value

```java
1

```

```java
4.5 + 3

```

results in a Float with value

```java
7.5

```

{% endmarkdown %}</div>

## Subtraction

Subtracts the second input from the first.

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

if any of the two inputs is of type Float and they're both not of type Decimal, the result is of type Float.

<div class="alert alert-info">{% markdown %}

```java
5 - 4

```

results in an Integer/Long with value

```java
1

```

```java
34.4 - 3.1

```

results in a Float with value

```java
31.3

```

{% endmarkdown %}</div>