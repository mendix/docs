---
title: "Parse and format float function calls"
parent: "microflow-expressions"
---
See [http://java.sun.com/javase/6/docs/api/java/text/DecimalFormat.html](http://java.sun.com/javase/6/docs/api/java/text/DecimalFormat.html) for all pattern possibilities.

## parseFloat

Parses a string to a float. Takes optional parameters for format and default value.

### Input parameters

*   value to parse
    Type: String
*   pattern to match on
    Type: String
*   default value
    Type: Float

### Output

A float that matches the input string. If the float cannot be parsed (ie does not match the format parameter or contains illegal characters) the default value will be returned.
If no default value was provided, an exception is thrown.

```java
parseFloat('3.45')

```

returns:

```java
3.45

```

with default value:

```java
parseFloat('noFloat',5.05)

```

returns:

```java
5.05

```

with format parameter:

```java
parseFloat('3.33', '#,##')

```

returns:

```java
3.33

```

## formatFloat

Converts float to a string, according to a specified format.

### Input parameters

*   value to convert
    Type: Float
*   format that the result should be in
    Type: String

### Output

A string representation of the float, in the format specified by the 'format' parameter.
Type: String

```java
formatFloat(3.33, '#,##')

```

returns:

```java
'3.33'

```
