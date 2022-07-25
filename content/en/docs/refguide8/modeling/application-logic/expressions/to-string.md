---
title: "To String"
url: /refguide8/to-string/
weight: 130
tags: ["studio pro", "to string", "expression", "expressions"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/to-string.pdf).
{{% /alert %}}

## 1 Intriduction

Basic functions to convert values of various data types to string.

## 2 toString

Converts the specified value to a string representation.

If you need full control over the output format, consider using the data type specific format functions. For example, for decimal, use [formatDecimal](/refguide8/parse-and-format-decimal-function-calls/).

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                                         | Type                                                         |
| --------------------------------------------- | ------------------------------------------------------------ |
| A value that should be converted to a string. | Integer/Long, Decimal, Date and time, Boolean and Enumeration.<br />In case of enumeration, the expression returns the key of the enumeration value, not the caption. More information, see [Enumerations in expressions](/refguide8/enumerations-in-expressions/). |

### 2.2 Example

If you use the following input:

```java
toString(1.4)
```

The output is:

```java
'1.4'
```

If you type in an input with a Date and time type:

```java
toString(dateTime(2007))
```

The output is:

```java
'Mon Jan 01 00:00:00 CET 2007'
```

If you type in an input with a Boolean:

```java
toString(true)
```

The output is:

```java
'true'
```