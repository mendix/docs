---
title: "Boolean Expressions"
url: /refguide8/boolean-expressions/
weight: 50
tags: ["studio pro", "expression", "expressions", "Boolean"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/boolean-expressions.pdf).
{{% /alert %}}

## 1 Introduction

Boolean expressions can be used to perform logical operations that return either true or false.

## 2 and

The `and` operator checks two Boolean expressions and only returns `true` if both of the expressions are true.

### 2.1 Examples

The examples below illustrate which value the expression returns:

* If you use the following input:

    ```java
    (6 > 4) and (3 < 5)
    ```

    The output is `true` because both of the expressions are `true`.

* If you use the following input:

    ```java
    ('hello' = 'hallo') and (3 < 5)
    ```

    The output is `false`, because only the second expression is `true`.

## 3 or

The `or` operator combines two Boolean expressions, and returns `true` if at least one of the expressions is true.

### 3.1 Examples

The examples below illustrate which value the expression returns:

* You have a entity called *product* that has the *price* attribute of the integer type. The *price* attribute equals 3, and you have another attribute called *recommendedPrice* that equals 2. 

    If you use the following input:

    ```java
    ($product/price < $product/recommendedPrice : 2) or ($product/price     > 0)
    ```

    The expression will return `true` because at least one of the     expressions is true (the second one). Note that the expression would     still return `true` if both statements had been true.

* If you use the following input: 

    ```java
    ('hello' = 'nothello') or ('byebye' = 'stillnotbyebye')
    ```

    The expression will return `false`, because both expressions are false.

## 4 not

The `not` operator negates the specified Boolean expression.

### 4.1 Input

An expression of type Boolean.

### 4.2 Output

Returns the negation of the specified expression. If the expression evaluates to `true`, it returns `false`; and vice versa.

### 4.3 Examples

The examples below illustrate which value the expression returns:

* If you use the following input:

    ```java
    not('hello' = 'hallo')
    ```

    The expression will return `true` .


* If you use the following input:

    ```java
    not(true)
    ```

    The expression will return `false` .



