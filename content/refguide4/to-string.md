---
title: "To string"
parent: "microflow-expressions"
---
Basic functions to convert from various datatypes to string.

## toString

Converts the base type to a string representation.

### Input parameters

*   A value that should be converted to a String
    Type: Numerical (Integer, Float, Currency, Autonumber) or DateTime

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
