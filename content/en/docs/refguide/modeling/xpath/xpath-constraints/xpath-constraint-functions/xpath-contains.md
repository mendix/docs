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
