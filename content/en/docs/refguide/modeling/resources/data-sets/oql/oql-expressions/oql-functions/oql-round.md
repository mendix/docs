---
title: "OQL ROUND"
url: /refguide/oql-round/
---

## Description

The `ROUND` function rounds a given numeric expression.

## Syntax

The syntax is as follows:

```sql
ROUND ( numeric_expression , length )
```

### numeric_expression

`numeric_expression` specifies the expression which must be rounded. This expression must be a numeric expression.

{{% alert color="info" %}}

If `numeric_expression` is `NULL` (empty), the function will return `NULL`.

{{% /alert %}}

### length

`length` specifies the amount of decimals to which the expression must be rounded.
