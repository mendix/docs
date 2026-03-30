---
title: "XPath ends-with"
linktitle: "ends-with"
url: /refguide/xpath-ends-with/
weight: 18
---

## Overview

The `ends-with()` function checks whether a string attribute ends with a specific string as a sub-string.

{{% alert color="info" %}}
String comparisons in XPath constraints are generally case-insensitive, but this can depend on the collation setting for some databases. See [Case-Sensitive Database Behavior](/refguide/case-sensitive-database-behavior/) for more information.
{{% /alert %}}

## Syntax

The syntax is as follows:

```
ends-with ( attribute, string_expression )
```

### attribute

`attribute` specifies the attribute to test. It must be of the **String** type.

### expression

`string_expression` specifies the value to test for being at the end of the attribute. It must be a string literal or a string parameter.

{{% alert color="info" %}}
If the `attribute` is an empty value or `NULL`, the function will always return `false`, independent of the value of `string_expression`.

If the `string_expression` is empty, it is treated as an empty string. The function is then equivalent to ```attribute != empty```.
{{% /alert %}}

## Example

This query returns all customers whose name ends with the sub-string `sen`:

{{< tabpane >}}
    {{% tab header="Environments:" disabled=true /%}}
    {{< tab header="Studio Pro" lang="StudioPro" >}}
        [ends-with(Name, 'sen')]
    {{% /tab %}}
    {{< tab header="Java" lang="JavaQuery" >}}
        //Sales.Customer[ends-with(Name, 'sen')]
    {{% /tab %}}
{{< /tabpane >}}

Customers with the name "Jansen" or "Isaacsen" will be returned, for example, because both names end with "sen."
