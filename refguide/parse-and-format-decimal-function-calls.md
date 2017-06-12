---
title: "Parsing and Formatting Decimal Function Calls"
space: "Mendix 7 Reference Guide"
parent: "microflow-expressions"
---

For details on all the pattern possibilities, see [Class DecimalFormat](http://docs.oracle.com/javase/7/docs/api/java/text/DecimalFormat.html).

## parseDecimal

Parses a string value to a decimal value. Takes optional parameters for the format and default values.

### Input Parameters

* Value to parse
    * Type: string
* Pattern to match (optional)
    * Type: string
* Default value (optional)
    * Type: decimal

### Output

A decimal value that matches the inputted string value. If the value cannot be parsed (meaning, it does not match the format parameter or contains illegal characters), the default value will be returned. If no default value was provided, an error occurs.

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

Converts a decimal value to a string value according to a specified format.

### Input Parameters

* Value to convert
    * Type: decimal
* Format for the result based on the Java library `DecimalFormat` (for details, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html))
    * Type: string
* Locale in which the results should be formated (optional)
   * For the supported values, see [forLanguageTag](https://docs.oracle.com/javase/8/docs/api/java/util/Locale.html#forLanguageTag-java.lang.String-)
   * When omitted, the user configured locale is used
   * Supported from Mendix 7.3
   * Type: string

### Output

A string representation of the decimal in the format specified by the `format` parameter.

* Type: string

```java
formatDecimal(1234.56, '#,###.#')
```

returns (depending on the language settings):

```java
'1,234.5' or '1.234,5'
```

```java
formatDecimal(1234.56, '¤ #,##0.00')
```

returns (depending on language settings):

```java
'€ 1.234,50' or '$ 1,234.50'
```

```java
formatDecimal(0.56, '% ##0')
```

returns:

```java
'% 56' 
```
