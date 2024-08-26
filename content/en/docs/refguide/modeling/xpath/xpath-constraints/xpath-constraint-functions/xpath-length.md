---
title: "XPath length"
url: /refguide/xpath-length/
weight: 4
---

## Overview

The `length()` function returns the length of a string attribute or value.

## Example

This query returns all customers with a `FirstName` of 5 or more characters:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [length(FirstName) >= 5]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[length(FirstName) >= 5]
    {{% /tab %}}
{{< /tabpane >}}
