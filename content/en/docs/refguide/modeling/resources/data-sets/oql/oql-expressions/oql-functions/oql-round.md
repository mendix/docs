---
title: "OQL ROUND"
url: /refguide/oql-round/
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

{{% alert color="info" %}}

If `numeric_expression` is `NULL` (empty), the function will return `NULL`.

{{% /alert %}}

### 2.2 length

`length` specifies the amount of decimals to which the expression must be rounded.
