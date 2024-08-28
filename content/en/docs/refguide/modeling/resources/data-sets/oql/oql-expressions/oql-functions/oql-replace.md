---
title: "OQL REPLACE"
url: /refguide/oql-replace/
---

## Description

The `REPLACE` function replaces all occurrences of a specified string value with another string value. The function supports limited and unlimited strings. Arguments of other types are not supported.

## Syntax

The syntax is as follows:

```sql
REPLACE ( expression, pattern, replacement )
```

`expression` specifies the string to be searched.

`pattern` specifies the pattern to search for. In the function output, all occurrences of the pattern will be replaced with the value of `replacement`.

`replacement` specifies the string to replace the pattern.

## Database-specific limitations

The behavior of the `REPLACE` function relies on underlying database implementation, which may vary by database vendor. For most supported databases, default behavior of `REPLACE` is case-sensitive. That means that `REPLACE('ABC abc', 'abc', 'xyz')` results in `'ABC xyz'`. In some configurations, the behavior is case-insensitive. For example, for SQL Server, case sensitivity of `REPLACE` depends on used collation.
