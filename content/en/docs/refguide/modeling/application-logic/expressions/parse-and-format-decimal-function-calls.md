---
title: "Parse & Format Decimal Function Calls"
url: /refguide/parse-and-format-decimal-function-calls/
weight: 150
tags: ["studio pro", "expression", "parsing", "formatting"]
---

## 1 Introduction

This document describes parsing and formatting decimal function calls. For details on all the pattern possibilities, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html).

## 2 parseDecimal

Parses a string value to a decimal value. Takes optional parameters for the format and default values.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                                                        | Type             |
| ------------------------------------------------------------ | ---------------- |
| Value to parse                                               | String           |
| Format for the input value based on the Java library `DecimalFormat` (for more information, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html)) | String           |
| Default value **(optional)**                                 | Decimal or empty |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| The output is a decimal value that matches the supplied string value. If the value cannot be parsed (meaning, it does not match the format parameter or contains illegal characters), the default value will be returned. If no default value is provided, an error occurs. | Decimal |

### 2.3 Example

The following examples demonstrate which output you get depending on input parameters:

* `parseDecimal('3.45')` returns `3.45`
* `parseDecimal('noDecimal', 5.05)` returns `5.05`
* `parseDecimal('noDecimal', empty)` returns `empty`
* `parseDecimal('3,241.98', '#,###.##')` returns `3241.98`

Given a variable that is empty:

* `parseDecimal($StringVariable)` will throw an error
* `parseDecimal($StringVariable, empty)` returns an empty; the resulting variable may throw an error when used as a decimal (like in the expression `'$var > 0'`) 
* `parseDecimal($StringVariable, 0)` returns `0`; the resulting variable will always be a decimal and never throw an exception

## 3 formatDecimal

Converts a decimal value to a string value according to a specified format.

### 3.1 Input Parameters

The functionality of formatDecimal depends on whether it is used in a microflow or a nanoflow.

#### 3.1.1 Input Parameters in Microflows

The input parameters are described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| Value to convert                                             | Decimal |
| Format for the result based on the Java library `DecimalFormat` (for details, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html)) | String  |
| Locale in which the results should be formatted **(optional)**. For the more information on supported values, see [forLanguageTag](https://docs.oracle.com/javase/8/docs/api/java/util/Locale.html#forLanguageTag-java.lang.String-). When omitted, the user configured locale is used. | String  |

#### 3.1.2 Input Parameters in Nanoflows

In nanoflows, this function only takes a single parameter described below:

| Value            | Type    |
| ---------------- | ------- |
| Value to convert | Decimal |

{{% alert color="warning" %}}
It is not possible to use `formatDecimal()` with the optional format string (for example, `'#.00'`) within a text parameter on a page. The text parameter works the same way as a nanoflow and is restricted to only using the system locale to specify the decimal format.
{{% /alert %}}

### 3.2 Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A string representation of the decimal in the format specified by the `format` parameter. | String |

### 3.3 Microflow Examples

The examples below illustrate which value the expression returns:

* If you use the following input:

    ```java
    formatDecimal(1234.56, '#,###.#')
    ```

    the output is (depending on the language settings):

    ```java
    '1,234.5' or '1.234,5'
    ```

* If you use the following input:

    ```java
    formatDecimal(1234.56, '¤ #,##0.00')
    ```

    the output is (depending on language settings):

    ```java
    '€ 1.234,50' or '$ 1,234.50'
    ```

* If you use the following input:

    ```java
    formatDecimal(0.56, '% ##0')
    ```

    the output is

    ```java
    '% 56' 
    ```

### 3.4 Nanoflow Examples

In a nanoflow, this will format the decimal using the format appropriate to the user's locale.
