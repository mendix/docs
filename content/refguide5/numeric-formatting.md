---
title: "Numeric formatting"
parent: "consumed-web-services"
---
## Behavior in your Mendix application

A number will be translated into XML untouched, except that any trailing zeroes will be stripped and the representation will always be in non-scientific notation. The used rounding mode is configured in the [Project Settings](project-settings).

## XML Schema facets

How numbers in XML should be represented can be specified in an XSD (or WSDL) by using schema facets.

We currently support _totalDigits_ and _fractionDigits_ for numeric elements.

*   totalDigits: defines the maximum number of digits in the number (excluding the dot and minus sign)
*   fractionDigits: defines the maximum number of digits after the decimal dot

This means that if we encounter a number that does not match the required output format, we will round it so it does match. If it is not possible to represent the number correctly by formatting the number then it will simply be put in the XML as is. Example: An XSD specifies a maximum amount of digits of 3 but the number is 1000.

Mendix does not enforce compliance to these restrictions unless 'validate against wsdl' is enabled in web service calls, or 'validate against schema' is enabled in XML Export actions.

<table><thead><tr><th class="confluenceTh">Orginal value</th><th colspan="1" class="confluenceTh">Total digits</th><th class="confluenceTh">Fraction digits</th><th colspan="1" class="confluenceTh">Formatted value</th><th colspan="1" class="confluenceTh">Comment</th></tr></thead><tbody><tr><td class="confluenceTd">20.0055</td><td colspan="1" class="confluenceTd">3</td><td class="confluenceTd">undefined</td><td colspan="1" class="confluenceTd">20</td><td colspan="1" class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">20.0055</td><td colspan="1" class="confluenceTd">undefined</td><td class="confluenceTd">3</td><td colspan="1" class="confluenceTd">20.006</td><td colspan="1" class="confluenceTd">&nbsp;</td></tr><tr><td colspan="1" class="confluenceTd">0.0</td><td colspan="1" class="confluenceTd">undefined</td><td colspan="1" class="confluenceTd">undefined</td><td colspan="1" class="confluenceTd">0</td><td colspan="1" class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">110.9555</td><td colspan="1" class="confluenceTd">5</td><td class="confluenceTd">3</td><td colspan="1" class="confluenceTd">110.96</td><td colspan="1" class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">-110.9555</td><td colspan="1" class="confluenceTd">5</td><td class="confluenceTd">3</td><td colspan="1" class="confluenceTd">-110.96</td><td colspan="1" class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd">0.0000001</td><td colspan="1" class="confluenceTd">undefined</td><td class="confluenceTd">6</td><td colspan="1" class="confluenceTd">0</td><td colspan="1" class="confluenceTd">&nbsp;</td></tr><tr><td colspan="1" class="confluenceTd">99.99</td><td colspan="1" class="confluenceTd">3</td><td colspan="1" class="confluenceTd">undefined</td><td colspan="1" class="confluenceTd">100</td><td colspan="1" class="confluenceTd">&nbsp;</td></tr><tr><td colspan="1" class="confluenceTd">99.99</td><td colspan="1" class="confluenceTd">2</td><td colspan="1" class="confluenceTd">undefined</td><td colspan="1" class="confluenceTd">99.99</td><td colspan="1" class="confluenceTd">Not possible to format correctly, so left untouched.</td></tr><tr><td colspan="1" class="confluenceTd">999.99</td><td colspan="1" class="confluenceTd">2</td><td colspan="1" class="confluenceTd">1</td><td colspan="1" class="confluenceTd">999.99</td><td colspan="1" class="confluenceTd">Not possible to format correctly, so left untouched.</td></tr><tr><td colspan="1" class="confluenceTd">1.19E-17</td><td colspan="1" class="confluenceTd">undefined</td><td colspan="1" class="confluenceTd">undefined</td><td colspan="1" class="confluenceTd">0.0000000000000000119</td><td colspan="1" class="confluenceTd">&nbsp;</td></tr></tbody></table>

## Known issue

There is currently a limitation on the way Float values are rendered to XML, when the XML schema requires a xsd:decimal.

If, in a web service call action, you pass a Float parameter with a large number of fraction digits using a simple or advanced parameter mapping, a higher number of digits is preserved than when using a Domain-to-XML mapping for the same purpose.
