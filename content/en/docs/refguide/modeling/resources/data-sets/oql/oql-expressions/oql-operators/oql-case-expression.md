---
title: "OQL Case Expression"
url: /refguide/oql-case-expression/
tags: ["studio pro"]
---

## 1 Description

The `CASE` expression is a conditional expression, similar to if/else statements in other programming languages. Each condition is an expression that returns a Boolean result. If the condition's result is true, the value of the `CASE` expression is the result that follows the condition, and the remainder of the `CASE` expression is not processed. If the condition's result is not true, any subsequent `WHEN` clauses are examined in the same manner. If no `WHEN` condition yields true, the value of the `CASE` expression is the result of the `ELSE` clause. If the `ELSE` clause is omitted and no condition is true, the result is null.

## 2 Usage

The `CASE` expression can be used in two ways – simple:

```sql
	CASE input_expression
	WHEN when_expression THEN result_expression [ ...n ]
	ELSE else_result_expression
	END
```

or extended:

```sql
	CASE
	WHEN boolean_expression THEN result_expression [ ...n ] 
	ELSE else_result_expression
	END
```

## 3 Syntax

### 3.1 input_expression

`input_expression` will be compared to `when_expression`. If  `input_expression` matches  `when_expression`, the result of the whole `CASE` expression will be `result_expression` given after `THEN`.

### 3.2 when_expression

`when_expression` will be compared to `input_expression`. When `input_expression` matches this `when_expression`, the result of the whole `CASE` expression will be `result_expression` given after `THEN`.

### 3.3 boolean_expression

`boolean_expression` must result in a Boolean value. When this expression returns true, the result of the whole `CASE` expression will be `result_expression` given after `THEN`.

### 3.4 result_expression

`result_expression` is the possible result of the whole `CASE` expression.

### 3.5 else_result_expression

`else_result_expression` is the result of the whole `CASE` expression, when no `result_expression` is possible.
