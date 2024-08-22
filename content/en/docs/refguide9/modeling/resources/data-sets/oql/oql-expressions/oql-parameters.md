---
title: "OQL Parameters"
url: /refguide9/oql-parameters/
---

## Introduction

Currently, parameters are only supported within OQL queries defined in [datasets](/refguide9/data-sets/). To use a defined parameter in a query, use the `$` sign.

## Examples

Examples of correct parameter names are `$weight_range`, `$age`.

If a parameter value is not set in an OQL query, that part of the statement is ignored. For example, in the following query:

```sql
SELECT Name
FROM Module.Person
WHERE
    Age > $param 
    AND
    Active = true
```

If the value of `$param` is not provided, the query will be equivalent to:

```sql
SELECT Name
FROM Module.Person
WHERE
    Active = true
```

The example above is different from the case where the value of `$param` is provided, but is `NULL`. In that case, the query will be equivalent to:

```sql
SELECT Name
FROM Module.Person
WHERE
    Age > NULL
    AND
    Active = true
```
