---
title: "XPath true"
url: /refguide/xpath-true/
weight: 1
---

## Overview

The function `true()` returns the Boolean value `true`.

To use the values `true` or `false` in XPath queries, it is necessary to either call `true()` or `false()` functions, or to enclose the values in quotation marks.

## Example

This query returns all the customers who are classified as "gold customers":

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [IsGoldCustomer = true()]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[IsGoldCustomer = true()]
    {{% /tab %}}
{{< /tabpane >}}
