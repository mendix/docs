---
title: "Parse integer"
url: /refguide7/parse-integer/
---


Try to convert a string to a long integer.

## parseInteger

Take a string and try to parse it to a long integer.

### Input parameters

*   The string to parse
    Type: String
*   (Optional) Default value
    Type: Integer/Long

### Output

The long integer, if it is possible to parse it from the string. If it is not a valid parsable string, for example the string is not a number or the parsed value is too great to be assigned to a long integer, the default value will be returned. If no default value is provided, an error will occur.
Type: Integer/Long

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
