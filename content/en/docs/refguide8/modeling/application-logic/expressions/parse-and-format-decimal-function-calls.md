---
title: "Parse & Format Decimal Function Calls"
url: /refguide8/parse-and-format-decimal-function-calls/
weight: 150
tags: ["studio pro", "expression", "parsing", "formatting"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/parse-and-format-decimal-function-calls.pdf).
{{% /alert %}}

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
