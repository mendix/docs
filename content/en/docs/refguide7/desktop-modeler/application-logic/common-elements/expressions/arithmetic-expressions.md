---
title: "Arithmetic expressions"
url: /refguide7/arithmetic-expressions/
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

```java
3 * 4
```

results in

```java
12
```

## Division

Divides two numbers. You can use either the `div` or colon ( : ) syntax, as can be seen below in the examples. The colon ( : ) syntax is inspired by the divide symbol `÷`. We cannot use the more conventional slash ( / ) syntax because that would conflict with the slash we use for separating objects and members.

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If any of the two inputs is of type Decimal, the result is of type Decimal. Otherwise the result is of type Float.

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

## Addition

Adds two numbers.

{{% alert color="info" %}}

See [String function calls](/refguide7/string-function-calls/) for more information.

{{% /alert %}}

### Input parameters

*   First number
    Type: Integer/Long, Float or Decimal
*   Second number
    Type: Integer/Long, Float or Decimal

### Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

if any of the two inputs is of type Float and they're both not of type Decimal, the result is of type Float.

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
