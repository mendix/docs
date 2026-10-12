---
title: "Parse and Format Decimal Function Calls"
url: /refguide9/parse-and-format-decimal-function-calls/
weight: 150
---

## Introduction

This document describes parsing and formatting decimal function calls. For details on all the pattern possibilities, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html).

{{% alert color="warning" %}}
In nanoflows, it is not possible to use parsing and formatting decimal function calls with optional format string (for example, `'#,###.##'`) within a text parameter on a page. The text parameter works the same way as a nanoflow and is restricted to only using the format appropriate to the locale from the language of the current user in Mendix apps.
{{% /alert %}}

## parseDecimal

Parses a string value to a decimal value according to a specified format.

### Input Parameters

The functionality of `parseDecimal()` depends on whether it is used in a microflow or a nanoflow.

#### Input Parameters in Microflows

The input parameters in microflows are described in the table below:

| Value                                                        | Type             |
| ------------------------------------------------------------ | ---------------- |
| Value to parse                                               | String           |
| Format for the input value based on the Java library `DecimalFormat` (for more information, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html)) | String           |
| Default value **(optional)**                                 | Decimal or empty |

#### Input Parameters in Nanoflows

The input parameters in nanoflows are described in the table below:

| Value                                                        | Type             |
| ------------------------------------------------------------ | ---------------- |
| Value to parse                                               | String           |
| Default value **(optional)**                                 | Decimal or empty |

### Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| The output is a decimal value that matches the supplied string value. If the value cannot be parsed (meaning, it does not match the format parameter or contains illegal characters), the default value will be returned. If no default value is provided, an error occurs. | Decimal |

### Examples

The following examples apply to both microflows and nanoflows. They demonstrate which output you get depending on input parameters. 

* `parseDecimal('3.45')` returns `3.45`
* `parseDecimal('noDecimal', 5.05)` returns `5.05`
* `parseDecimal('noDecimal', empty)` returns `empty`

Given a variable that is empty:

* `parseDecimal($StringVariable)` will throw an error
* `parseDecimal($StringVariable, empty)` returns an empty; the resulting variable may throw an error when used as a decimal (like in the expression `'$var > 0'`) 
* `parseDecimal($StringVariable, 0)` returns `0`; the resulting variable will always be a decimal and never throw an exception

The following example only applies to microflows, given that in nanoflows, you cannot manually specify the format:

* `parseDecimal('3,241.98', '#,###.##')` returns `3241.98`

## formatDecimal

Converts a decimal value to a string value according to a specified format.

### Input Parameters

The functionality of `formatDecimal()` depends on whether it is used in a microflow or a nanoflow.

#### Input Parameters in Microflows

The input parameters in microflows are described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| Value to convert                                             | Decimal |
| Format for the result based on the Java library `DecimalFormat` (for details, see [Class DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html)) | String  |
| Locale in which the results should be formatted **(optional)**. For the more information on supported values, see [forLanguageTag](https://docs.oracle.com/javase/8/docs/api/java/util/Locale.html#forLanguageTag-java.lang.String-). When omitted, the user configured locale is used. | String  |

#### Input Parameters in Nanoflows

In nanoflows, this function only takes a single parameter described below:

| Value            | Type    |
| ---------------- | ------- |
| Value to convert | Decimal |

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A string representation of the decimal in the format specified by the `format` parameter. | String |

Note that the exact output may depend on the Java version and user locale, depending on the passed format.

### Microflow Examples

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

### Nanoflow Examples

In a nanoflow, this will format the decimal using the format appropriate to the locale from the language of the current user in Mendix apps.
