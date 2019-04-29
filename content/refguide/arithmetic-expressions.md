---
title: "Arithmetic Expressions"
parent: "expressions"
---

## 1 Introduction

A number of arithmetic expressions are supported, all of which work on numeric types (Integer/Long, and Decimal).

## 2 Multiplication

Multiplies two numbers.

### 2.1 Input parameters

*   First number
    Type: Integer/Long, Decimal
*   Second number
    Type: Integer/Long, Decimal

### 2.2 Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

## 3 Division

Divides two numbers. You can use either the `div` or colon ( : ) syntax, as can be seen below in the examples. The colon ( : ) syntax is inspired by the divide symbol `÷`. We cannot use the more conventional slash ( / ) syntax because that would conflict with the slash we use for separating objects and members.

### 3.1 Input Parameters

*   First number
    Type: Integer/Long, Decimal
*   Second number
    Type: Integer/Long, Decimal

### 3.2 Output

If any of the two inputs is of type Decimal, the result is of type Decimal.

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

## 4 Modulo

Calculates the remainder of the division of one number by another. In other words, m modulo n corresponds to: m = p + k*n, where p is the result of the operation m modulo n.

### 4.1 Input parameters

*   First number
    Type: Integer/Long, Decimal
*   Second number
    Type: Integer/Long, Decimal

### 4.2 Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

```java
23 mod 5
```

results in an Integer/Long with value

```java
3
```
## 5 Addition

Adds two numbers.

{{% alert type="info" %}}

See [String function calls](string-function-calls) for more information.

{{% /alert %}}

### 5.1 Input Parameters

*   First number
    Type: Integer/Long, Decimal
*   Second number
    Type: Integer/Long, Decimal

### 5.2 Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

```java
-3 + 4
```

results in an Integer/Long with value

```java
1
```

## 6 Subtraction

Subtracts the second input from the first.

### 6.1 Input Parameters

*   First number
    Type: Integer/Long, Decimal
*   Second number
    Type: Integer/Long, Decimal

### 6.2 Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If any of the two inputs is of type Decimal, the result is of type Decimal.

```java
5 - 4
```

results in an Integer/Long with value

```java
1
```
