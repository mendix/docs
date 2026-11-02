---
title: "XPath contains"
linktitle: "contains"
url: /refguide/xpath-contains/
weight: 16
---

## Overview

The `contains()` function tests whether a string attribute contains a specific string as a sub-string.

{{% alert color="info" %}}
String comparisons in XPath constraints are generally case-insensitive, but this can depend on the collation setting for some databases. See [Case-Sensitive Database Behavior](/refguide/case-sensitive-database-behavior/) for more information.
{{% /alert %}}

## Syntax

The syntax is as follows:

```
contains ( attribute, string_expression )
```

### attribute

`attribute` specifies the attribute to test. It must be of the **String** type.

### expression

`string_expression` specifies the value to test for being contained in the attribute. It can be a string literal or a string parameter.

{{% alert color="info" %}}
If the `attribute` is an empty value or `NULL`, the function will always return `false`, independent of the value of `string_expression`.

If the `string_expression` is empty, it is treated as an empty string. The function is then equivalent to ```attribute != empty```.
{{% /alert %}}

## Example

This query returns all the customers from which the name contains the string `an`:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [contains(Name, 'an')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[contains(Name, 'an')]
    {{% /tab %}}
{{< /tabpane >}}

Customers with the name "Andy" or "Jan" will be returned, for example, because "an" is part of those names.
