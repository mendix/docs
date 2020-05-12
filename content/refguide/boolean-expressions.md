---
title: "Boolean Expressions"
parent: "expressions"
tags: ["studio pro", "expression", "expressions", "Boolean"]
---

## 1 Introduction

Boolean expressions can be used to perform logical operations that is either true or false.

## 2 and

`and` operator checks two Boolean expressions and only returns `true` if both of the expressions are true.

### 2.1 Examples

The examples below illustrate which value the expression returns:

* If you type in the following input:

	```java
	(6 > 4) and (3 < 5)
	```

	The output is `true` because both of the expressions are `true`.

* If you type in the following input:

	```java
	('hello' = 'hallo') and (3 < 5)
	```

	The output is `false`, because only the second expression is `true`.

## 3 or

`or` operator combines two Boolean expressions, and returns `true` if at least one of the expressions is true.

### 3.1 Examples

Given a domain entity instance with name "$product" that has an integer attribute "price" with value "3" and another integer attribute "recommendedPrice" with value "2", the following expression:

```java
($product/price < $product/recommendedPrice : 2) or ($product/price > 0)
```

will return True because at least one of the expressions evaluates to True (the second one, to be precise). Note that the expression would still return True if both statements had been True.

The following example returns False, because both expressions evaluate to False:

```java
('hello' = 'nothello') or ('byebye' = 'stillnotbyebye')
```

## 4 not

`not` operator negates the specified Boolean expression.

### 4.1 Input

An expression of type Boolean.

### 4.2 Output

Returns the negation of the specified expression. If the expression evaluates to `true`, it returns `false`; and vice versa.

### 4.3 Examples

```java
not('hello' = 'hallo')

```

returns:

```java
true

```

and

```java
not(true)

```

returns:

```java
false

```


