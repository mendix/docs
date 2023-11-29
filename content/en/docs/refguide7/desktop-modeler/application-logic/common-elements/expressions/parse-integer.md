---
title: "Parse integer"
url: /refguide7/parse-integer/
---


Try to convert a string to a value that is of data type [Integer/Long](/refguide7/data-types/#integer-long).

## parseInteger

Take a string and try to parse it to an Integer/Long.

### Input parameters

* The string to parse
    Type: String
* (Optional) Default value
    Type: Integer/Long

### Output

 An Integer/Long if it is possible to parse it from the string. 
 
 If the string cannot be parsed to an Integer/Long, for example, if the string is not a number or if the parsed value is not within [the range of the valid values for an Integer/Long](/refguide7/data-types/#integer-long), the default value will be returned. If no default value is provided, an error will occur.

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
