---
title: "Numeric formatting"
url: /refguide7/numeric-formatting/
---
## Behavior in your Mendix application

A number will be translated into XML untouched, except that any trailing zeroes will be stripped and the representation will always be in non-scientific notation. The used rounding mode is configured in the [Project Settings](/refguide7/project-settings/).

## XML Schema facets

How numbers in XML should be represented can be specified in an XSD (or WSDL) by using schema facets.

We currently support _totalDigits_ and _fractionDigits_ for numeric elements.

*   totalDigits: defines the maximum number of digits in the number (excluding the dot and minus sign)
*   fractionDigits: defines the maximum number of digits after the decimal dot

This means that if we encounter a number that does not match the required output format, we will round it so it does match. If it is not possible to represent the number correctly by formatting the number then it will simply be put in the XML as is. Example: An XSD specifies a maximum amount of digits of 3 but the number is 1000.

Mendix does not enforce compliance to these restrictions unless 'validate against wsdl' is enabled in web service calls, or 'validate against schema' is enabled in XML Export actions.

| Orginal value | Total digits | Fraction digits | Formatted value | Comment |
| --- | --- | --- | --- | --- |
| 20.0055 | 3 | undefined | 20 |   |
| 20.0055 | undefined | 3 | 20.006 |   |
| 0.0 | undefined | undefined | 0 |   |
| 110.9555 | 5 | 3 | 110.96 |   |
| -110.9555 | 5 | 3 | -110.96 |   |
| 0.0000001 | undefined | 6 | 0 |   |
| 99.99 | 3 | undefined | 100 |   |
| 99.99 | 2 | undefined | 99.99 | Not possible to format correctly, so left untouched. |
| 999.99 | 2 | 1 | 999.99 | Not possible to format correctly, so left untouched. |
| 1.19E-17 | undefined | undefined | 0.0000000000000000119 |   |

## Known issue

There is currently a limitation on the way Float values are rendered to XML, when the XML schema requires a xsd:decimal.

If, in a web service call action, you pass a Float parameter with a large number of fraction digits using a simple or advanced parameter mapping, a higher number of digits is preserved than when using an Export Mapping for the same purpose.
