---
title: "Numeric Formatting"
url: /refguide8/numeric-formatting/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/numeric-formatting.pdf).
{{% /alert %}}

## 1 Behavior in Your Mendix Application

A number will be translated into XML untouched, except that any trailing zeroes will be stripped and the representation will always be in non-scientific notation. The rounding mode used is configured in the [Project Settings](/refguide8/project-settings/).

## 2 XML Schema Facets

How numbers in XML should be represented can be specified in an XSD (or WSDL) by using schema facets.

Mendix currently supports `totalDigits` and `fractionDigits` for numeric elements:

* `totalDigits` -  defines the maximum number of digits in the number (excluding the dot and minus sign)
*  `fractionDigits` - defines the maximum number of digits after the decimal dot

This means that if a number is encountered that does not match the required output format,  it will be rounded it so it does match. If it is not possible to represent the number correctly by formatting the number, then it will simply be put in the XML as is. For example, an XSD specifies a maximum amount of digits of 3, but the number is 1000.

Mendix does not enforce compliance to these restrictions unless **Validate against WSDL** is enabled in web service calls or **Validate against schema** is enabled in XML export actions.

| Orginal Value | Total Digits | Fraction Digits | Formatted Value | Comment |
| --- | --- | --- | --- | --- |
| 20.0055 | 3 | Undefined | 20 |   |
| 20.0055 | Undefined | 3 | 20.006 |   |
| 0.0 | Undefined | Undefined | 0 |   |
| 110.9555 | 5 | 3 | 110.96 |   |
| -110.9555 | 5 | 3 | -110.96 |   |
| 0.0000001 | Undefined | 6 | 0 |   |
| 99.99 | 3 | Undefined | 100 |   |
| 99.99 | 2 | Undefined | 99.99 | Not possible to format correctly, so left untouched |
| 999.99 | 2 | 1 | 999.99 | Not possible to format correctly, so left untouched |
| 1.19E-17 | Undefined | Undefined | 0.0000000000000000119 |   |

