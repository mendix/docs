---
title: "Parse and format decimal function calls"
parent: "microflow-expressions"
---


See [http://docs.oracle.com/javase/7/docs/api/java/text/DecimalFormat.html](http://docs.oracle.com/javase/7/docs/api/java/text/DecimalFormat.html) for all pattern possibilities.

## parseDecimal

Parses a String value to a Decimal value. Takes optional parameters for format and default value.

### Input parameters

*   value to parse
    Type: String
*   pattern to match on (optional)
    Type: String
*   default value (optional)
    Type: Decimal

### Output

A Decimal value that matches the input String value. If the value cannot be parsed (i.e. does not match the format parameter or contains illegal characters) the default value will be returned. If no default value was provided, an error occurs.

```java
parseDecimal('3.45')

```

returns:

```java
3.45

```

with default value:

```java
parseDecimal('noDecimal', 5.05)

```

returns:

```java
5.05

```

with format parameter:

```java
parseDecimal('$3.33', '$#.##')

```

returns:

```java
3.33

```

## formatDecimal

Converts a Decimal value to a String value, according to a specified format.

### Input parameters

*   value to convert
    Type: Decimal
*   format that the result should be in
    Type: String

### Output

A String representation of the Decimal, in the format specified by the 'format' parameter.
Type: String

```java
formatDecimal(1234.56, '#,###.#')

```

returns:

```java
'1,234.5'

```
