---
title: "To float"
parent: "Microflow+Expressions"
space: "Reference Guide 5"
---


Converts a value of type Decimal to type Float.

<div class="alert alert-warning">{% markdown %}

The Float type is less precise than the Decimal type. This means that when converting values of type Decimal to type Float, you will lose precision for those values. Only use this function as a last resort, for example when you need to specify a Float value and you cannot change that type to Decimal.

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
