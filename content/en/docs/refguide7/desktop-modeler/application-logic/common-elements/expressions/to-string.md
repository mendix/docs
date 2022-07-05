---
title: "To string"
url: /refguide7/to-string/
---


Basic functions to convert values of various data types to string.

## toString

Converts the specified value to a string representation.

If you need full control over the output format, consider using the data type specific format functions. For example, for decimal, use [formatDecimal](/refguide7/parse-and-format-decimal-function-calls/).

### Input Parameters

A value that should be converted to a String. Supported [types](/refguide7/data-types/): Integer/Long, Decimal, Float (deprecated), DateTime and Enumeration. In case of Enumeration, returns the key of the enumeration value, not the caption. See also [Enumerations in expressions](/refguide7/enumerations-in-expressions/).

```java
toString(1.4)
```

returns:

```java
'1.4'
```

with a DateTime:

```java
toString(dateTime(2007))
```

returns:

```java
'Mon Jan 01 00:00:00 CET 2007'
```
