---
title: "XPath starts-with"
url: /refguide/xpath-starts-with/
weight: 17
---

## Overview

The `starts-with()` function tests whether a string attribute starts with a specific string (case-insensitive) as a sub-string.

## Example

This query returns all the customers from which the name starts with the string "Jans":

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [starts-with(Name, 'Jans')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[starts-with(Name, 'Jans')]
    {{% /tab %}}
{{< /tabpane >}}

Customers with the name "Jansen" will be returned, for example, because the name starts with "Jans."
