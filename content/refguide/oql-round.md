---
title: "OQL ROUND"
parent: "oql-functions"
tags: ["studio pro"]
---

## 1 Description

The `ROUND` function rounds a given numeric expression.

## 2 Syntax

The syntax is as follows:

```sql
ROUND ( numeric_expression , length )
```

### 2.1 numeric_expression

`numeric_expression` specifies the expression which must be rounded. This expression must be a numeric expression.

### 2.2 length

`length` specifies the amount of decimals to which the expression must be rounded.

## 3 Empty numeric_expression throws an error 

When you pass a numeric variable as numeric_expression, then round($MyVar, 12) will throw an error if $MyVar is empty.
