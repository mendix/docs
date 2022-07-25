---
title: "Arithmetic Expressions"
url: /refguide8/arithmetic-expressions/
weight: 20
tags: ["studio pro", "expressions", "arithmetic expressions"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/arithmetic-expressions.pdf).
{{% /alert %}}

## 1 Introduction

This document describes the arithmetic operators which are supported in expressions. These all work on numeric data types (Integer/Long and Decimal).

## 2 Multiplication

Multiplies two numbers.

### 2.1 Input parameters

The input parameters are described in the table below:

| Value         | Type                  |
| ------------- | --------------------- |
| First number  | Integer/Long, Decimal |
| Second number | Integer/Long, Decimal |

### 2.2 Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If either of the two inputs is of type Decimal, the result is of type Decimal.

### 2.3 Example

If you use the following input:


```java
2*3
```
The output is:

```java
6
```

## 3 Division

Divides two numbers. You can use either the `div` or colon ( ``:`` ) syntax, as can be seen below in the examples. The colon ( ``:`` ) syntax is inspired by the divide symbol `÷`. We cannot use the more conventional slash ( / ) syntax because that would conflict with the slash which is used for separating objects and members.

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value         | Type                  |
| ------------- | --------------------- |
| First number  | Integer/Long, Decimal |
| Second number | Integer/Long, Decimal |

### 3.2 Output

If either of the two inputs is of type Decimal, the result is of type Decimal.

### 3.3 Example

Find the example of usages below:

* The `div` syntax example: if you use the following input:

  ```java
  3 div 5
  ```

  The output is:

  ```java
  0.6
  ```

* `:` syntax example: if you use the following input:

  ```java
  12 : 3
  ```

  The output is:

  ```java
  4.0
  ```

### 3.4 Remarks

The result of a division is only an approximation if it has an infinite decimal expansion. The two examples below illustrate this approximation: 

* If you use the following input:

    ```java
    3 : 7
    ```
    
    the output is:
    
    ```java
    0.4285714285714285714285714285714286
    ```
    
    If you continue a calculation with the results of a division, the results might be unexpected. The following input:
    
    ```java
    (3 : 7) * 7
    ```
    
    results in the output below:
    
    ```java
    3.0000000000000000000000000000000002
    ```

* If you use the following input:

    ```java
    ceil((3 : 7) * 7)
    ```

    the output is:

    ```java
    4
    ```

Therefore, it is recommended to do division operations last.

## 4 Modulo

Calculates the remainder of the division of one number by another. In other words, `m` modulo `n` corresponds to: `m = p + k*n`, where `p` is the result of the operation `m` modulo `n`.

### 4.1 Input Parameters

The input parameters are described in the table below:

| Value         | Type                  |
| ------------- | --------------------- |
| First number  | Integer/Long, Decimal |
| Second number | Integer/Long, Decimal |

### 4.2 Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If either of the two inputs is of type Decimal, the result is of type Decimal.

### 4.3 Example

If you use the following input:

```java
23 mod 5
```

the output is:

```java
3
```
## 5 Addition

Adds two numbers.

For the use of the addition symbol for string concatenation, see [String function calls](/refguide8/string-function-calls/).

### 5.1 Input Parameters

The input parameters are described in the table below:

| Value         | Type                  |
| ------------- | --------------------- |
| First number  | Integer/Long, Decimal |
| Second number | Integer/Long, Decimal |

### 5.2 Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If either of the two inputs is of type Decimal, the result is of type Decimal.

### 5.3 Example

If you use the following input:

```java
-3 + 4
```

the output is:

```java
1
```

## 6 Subtraction

Subtracts the second input from the first.

### 6.1 Input Parameters

The input parameters are described in the table below:

| Value         | Type                  |
| ------------- | --------------------- |
| First number  | Integer/Long, Decimal |
| Second number | Integer/Long, Decimal |

### 6.2 Output

If the two inputs are both of type Integer/Long, the result is of type Integer/Long.

If either of the two inputs is of type Decimal, the result is of type Decimal.

### 6.3 Example

If you use the following input:

```java
5 - 4
```

the output is:

```java
1
```
