---
title: "Parsing & Formatting Decimal Function Calls"
parent: "expressions"
tags: ["studio pro", "expression", "parsing", "formatting"]
---

## 1 Introduction

This document describes parsing and formatting decimal function calls. For details on all the pattern possibilities, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html).

## 2 parseDecimal

Parses a string value to a decimal value. Takes optional parameters for the format and default values.

### 2.1 Input Parameters

Use the following input parameters:

* Value to parse

    Type: string
* Format for the input value based on the Java library `DecimalFormat` (for more information, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html))

    Type: string
* Default value (optional)

    Type: decimal or empty

### 2.2 Output

The output is a decimal value that matches the inputted string value. If the value cannot be parsed (meaning, it does not match the format parameter or contains illegal characters), the default value will be returned. If no default value is provided, an error occurs.

* `parseDecimal('3.45')` returns 3.45
* `parseDecimal('noDecimal', 5.05)` returns 5.05
* `parseDecimal('noDecimal', empty)` returns empty
* `parseDecimal('3,241.98', '#,###.##')` returns 3241.98

## 3 formatDecimal

Converts a decimal value to a string value according to a specified format.

### 3.1 Input Parameters

The functionality of formatDecimal depends on whether it is used in a microflow or a nanoflow.

#### 3.1.1 Input Parameters in Microflows

* Value to convert

    Type: decimal
* Format for the result based on the Java library `DecimalFormat` (for details, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html))

    Type: string
* Locale in which the results should be formatted (optional)

    For the supported values, see [forLanguageTag](https://docs.oracle.com/javase/8/docs/api/java/util/Locale.html#forLanguageTag-java.lang.String-). When omitted, the user configured locale is used.

    Type: string

#### 3.1.2 Input Parameters in Nanoflows

In nanoflows, this function only takes a single parameter:

* Value to convert

    Type: decimal

### 3.2 Output

A string representation of the decimal in the format specified by the `format` parameter. The type of the output is string.

#### 3.2.1 Microflow Examples

If you type in the following input:

```java
formatDecimal(1234.56, '#,###.#')
```

the output is (depending on the language settings):

```java
'1,234.5' or '1.234,5'
```

If you type in the following input:

```java
formatDecimal(1234.56, '¤ #,##0.00')
```

the output is (depending on language settings):

```java
'€ 1.234,50' or '$ 1,234.50'
```

If you type in the following input:

```java
formatDecimal(0.56, '% ##0')
```

the output is

```java
'% 56' 
```

#### 3.2.2 Nanoflow Examples

In a nanoflow, this will format the decimal using the format appropriate to the user's locale.
