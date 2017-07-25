---
title: "Arithmetic expressions"
parent: "microflow-expressions"
---
A number of arithmetic expressions are supported. All of these statements work on any numeric type; integer, float, autonumber, currency and long.

## Multiplication

Multiplies two numbers.

### Input parameters

*   First number
    Type: integer, float, autonumber, currency or long
*   Second number
    Type: integer, float, autonumber, currency or long

### Output

If the two inputs were both of type Integer or Autonumber, the result is of type Integer.
If the two inputs were any other types of numbers, the operation returns a Float/Currency.

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
    Type: integer, float, autonumber, currency or long
*   Second number
    Type: integer, float, autonumber, currency or long

### Output

The first number divided by the second.
Type: Float/Currency

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

Calculates the remainder of division of one number by another. In other words, m modulo n corresponds to: m = p + k*n, where p is the result of the operation m modulo n.

### Input parameters

*   First number
    Type: integer, float, autonumber, currency or long
*   Second number
    Type: integer, float, autonumber, currency or long

### Output

If the two inputs were both of type Integer or Autonumber, the result is of type Integer.
If the two inputs were any other types of numbers, the operation returns a Float/Currency.

{{% alert type="info" %}}

```java
23 mod 5

```

results in an Integer with value

```java
3

```

Alternatively,

```java
23 mod 5.6

```

results in a Float/Currency with value

```java
0.6

```

{{% /alert %}}

## Addition

Adds two numbers.

### Input parameters

*   First number
    Type: integer, float, autonumber, currency or long
*   Second number
    Type: integer, float, autonumber, currency or long

### Output

If the two inputs were of type Integer or Autonumber, the result is of type Integer.
Any other combination of inputs results in a Float/Currency.

```java
-3 + 4

```

results in an Integer with value

```java
1

```

```java
4.5 + 3

```

results in a Float/Currency with value

```java
7.5

```

## Subtraction

Subtracts the second input from the first.

### Input parameters

*   First number
    Type: integer, float, autonumber, currency or long
*   Second number
    Type: integer, float, autonumber, currency or long

### Output

If the two inputs were of type Integer or Autonumber, the result is of type Integer.
Any other combination of inputs results in a Float/Currency.

```java
5 - 4

```

results in an Integer with value

```java
1

```

```java
34.4 - 3.1

```

results in a Float/Currency with value

```java
31.3

```

