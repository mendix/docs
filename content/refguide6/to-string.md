---
title: "To string"
parent: "microflow-expressions"
---


Basic functions to convert values of various data types to string.

## toString

Converts the specified value to a string representation.

### Input parameters

A value that should be converted to a String. Supported [types](data-types): Integer/Long, Decimal, Float (deprecated), DateTime and Enumeration. In case of Enumeration, returns the key of the enumeration value, not the caption. See also [Enumerations in microflow expressions](enumerations-in-microflow-expressions).

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
