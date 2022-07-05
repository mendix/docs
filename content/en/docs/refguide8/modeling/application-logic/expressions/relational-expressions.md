---
title: "Relational Expressions"
url: /refguide8/relational-expressions/
weight: 30
description: "Describes relational expressions in Mendix."
tags: ["studio pro", "relational expression", "expressions"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/relational-expressions.pdf).
{{% /alert %}}

## 1 Introduction

Relational expressions allow users to compare values and to make changes and perform actions based upon that information. The return type of such expressions is always Boolean.

## 2 Less Than ( < )

This expression determines whether the first value is less than the second value.

### 2.1 Input Parameters

Possible values are described in the table below: 

| Value      | Type                            |
| ---------- | ------------------------------- |
| Two values | String                          |
| Two values | Numeric (Integer/Long, Decimal) |
| Two values | Date and time                   |

{{% alert color="info" %}}
The two values should be in the same category (for example, if one is numeric, the other should be numeric too).
{{% /alert %}}

### 2.2 Output

The output is described in the table below:

| Value              | Type    |
| ------------------ | ------- |
| `True` or `False`. | Boolean |

### 2.3 Example

If you use the following input:

```java
4<3
```

the output is:

```java
False
```
## 3 Greater Than ( > )

This expression determines whether the first value is greater than the second value.

### 3.2 Input Parameters

Possible values are described in the table below: 

| Value      | Type                            |
| ---------- | ------------------------------- |
| Two values | String                          |
| Two values | Numeric (Integer/Long, Decimal) |
| Two values | Date and time                   |

{{% alert color="info" %}}
The two values should be in the same category (for example, if one is numeric, the other should be numeric too).
{{% /alert %}}

### 3.3 Output

The output is described in the table below:

| Value              | Type    |
| ------------------ | ------- |
| `True` or `False`. | Boolean |

### 3.4 Example

If you use the following input:

```java
4>3
```

the output is:

```java
True
```
## 4 Less Than or Equal To ( <= )

This expression determines whether the first value is less than or equal to the second value.

### 4.1 Input Parameters

Possible values are described in the table below: 

| Value      | Type                            |
| ---------- | ------------------------------- |
| Two values | String                          |
| Two values | Numeric (Integer/Long, Decimal) |
| Two values | Date and time                   |

{{% alert color="info" %}}
The two values should be in the same category (for example, if one is numeric, the other should be numeric too).
{{% /alert %}}

### 4.2 Output

The output is described in the table below:

| Value              | Type    |
| ------------------ | ------- |
| `True` or `False`. | Boolean |

### 4.3 Examples

The examples below illustrate which value the expression returns:

* If you use the following input:

    ```java
    6<=3
    ```

    the output is:

    ```java
    False
    ```

* If you use the following input:

    ```java
    3<=3
    ```

    the output is:

    ```java
    True
    ```

## 5 Greater Than or Equal To ( >= )

Determines whether the first value is greater than or equal to the second.

### 5.1 Input Parameters

Possible values are described in the table below: 

| Value      | Type                            |
| ---------- | ------------------------------- |
| Two values | String                          |
| Two values | Numeric (Integer/Long, Decimal) |
| Two values | Date and time                   |

{{% alert color="info" %}}
The two values should be in the same category (for example, if one is numeric, the other should be numeric too).
{{% /alert %}}

### 5.2 Output

The output is described in the table below:

| Value              | Type    |
| ------------------ | ------- |
| `True` or `False`. | Boolean |

### 5.3 Example

If you use the following input:

```java
4>=3
```

the output is:

```java
True
```

## 6 Is Equal To ( = )

This expression determines whether the two values are equal.

### 6.1 Input Parameters

Possible values are described in the table below: 

| Value      | Type                                                         |
| ---------- | ------------------------------------------------------------ |
| Two values | String                                                       |
| Two values | Numeric (Integer/Long, Decimal)                              |
| Two values | Date and time                                                |
| Two values | Domain entity; equality is checked based on the ID of the object |

{{% alert color="info" %}}
The two values should be in the same category (for example, if one is numeric, the other should be numeric too).
{{% /alert %}}

### 6.2 Output

The output is described in the table below:

| Value              | Type    |
| ------------------ | ------- |
| `True` or `False`. | Boolean |

### 6.3 Examples

The examples below illustrate which value the expression returns:

* If you use the following input:

    ```java
    "mystring" = "myotherstring"
    ```

    the output is:

    ```java
    False
    ```

* If you use the following input:

    ```java
    dateTime(2007) = dateTime(2007)
    ```

    the output is:

    ```java
    True
    ```

## 7 Is Not Equal To ( != )

Determines whether the two values are not equal.

### 7.1 Input Parameters

The values be any of the following types, but the two values should be in the same category (for example, both numbers):

Possible values are described in the table below: 

| Value      | Type                                                      |
| ---------- | --------------------------------------------------------- |
| Two values | String                                                    |
| Two values | Numeric (Integer/Long, Decimal)                           |
| Two values | Date and time                                             |
| Two values | Object; equality is checked based on the ID of the object |

{{% alert color="info" %}}
The two values should be in the same category (for example, if one is numeric, the other should be numeric too).
{{% /alert %}}

### 7.2 Output 

The output is described in the table below:

| Value              | Type    |
| ------------------ | ------- |
| `True` or `False`. | Boolean |

### 7.3 Example

If you use the following input:

```java
"mystring" != "mystring"
```

the output is:

```java
False
```
