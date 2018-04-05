---
title: "To float"
parent: "expressions"
---


Converts a value of type Decimal to type Float.

{{% alert type="warning" %}}

This function is deprecated together with the Float type. Use the high-precision Decimal type instead.

{{% /alert %}}

## toFloat

Converts the specified Decimal value to a value of type Float.

### Input parameters

*   A Decimal value that should be converted to a Float value.

```java
toFloat(parseDecimal('123.456'))
```

returns:

```java
123.456
```
