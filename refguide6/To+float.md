---
title: "To float"
parent: "Microflow+Expressions"
---


Converts a value of type Decimal to type Float.

<div class="alert alert-warning">{% markdown %}

This function is deprecated together with the Float type. Use the high-precision Decimal type instead.

{% endmarkdown %}</div>

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
