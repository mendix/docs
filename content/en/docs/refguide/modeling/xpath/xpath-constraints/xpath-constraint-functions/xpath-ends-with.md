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
