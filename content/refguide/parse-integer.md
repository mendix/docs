---
title: "Parse integer"
parent: "microflow-expressions"
---


Try to convert a string to an integer.

## parseInteger

Take a string and try to parse it to an integer.

### Input parameters

*   The string to parse
    Type: String
*   (Optional) Default value
    Type: Integer

### Output

The integer, if it's possible to parse it from the string. If it's not a valid parsable string, the default value will be returned. If no default value is provided, an error will occur.
Type: Integer

```java
parseInteger('42')
```

returns:

```java
42
```

with default value:

```java
parseInteger('not_an_integer', 42)
```

returns:

```java
42
```
