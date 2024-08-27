---
title: "Boolean Expressions"
url: /refguide/boolean-expressions/
weight: 50
---

## Introduction

Boolean expressions can be used to perform logical operations that return either true or false.

## and

The `and` operator checks two Boolean expressions and only returns `true` if both of the expressions are true.

### Examples

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

## or

The `or` operator combines two Boolean expressions, and returns `true` if at least one of the expressions is true.

### Examples

The examples below illustrate which value the expression returns:

* You have an entity called *product* that has the *price* attribute of the integer type. The *price* attribute equals 3, and you have another attribute called *recommendedPrice* that equals 2. 

    If you use the following input:

    ```java
    ($product/price < $product/recommendedPrice : 2) or ($product/price > 0)
    ```

    The expression will return `true` because at least one of the expressions is true (the second one). Note that the expression would still return `true` if both statements had been true.

* If you use the following input: 

    ```java
    ('hello' = 'nothello') or ('byebye' = 'stillnotbyebye')
    ```

    The expression will return `false`, because both expressions are false.

## not

The `not` operator negates the specified Boolean expression.

### Input

An expression of type Boolean.

### Output

Returns the negation of the specified expression. If the expression evaluates to `true`, it returns `false`; and vice versa.

### Examples

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
