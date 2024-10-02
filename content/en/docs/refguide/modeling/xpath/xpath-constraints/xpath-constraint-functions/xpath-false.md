---
title: "XPath false"
url: /refguide/xpath-false/
weight: 2
---

## Overview

The function `false()` returns the Boolean value `false`.

To use the values `true` or `false` in XPath queries, it is necessary to either use the `true()` and `false()` functions or to enclose the values in quotation marks.

## Example

This query returns all the customers who are not classified as gold customers:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [IsGoldCustomer = false()]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[IsGoldCustomer = false()]
    {{% /tab %}}
{{< /tabpane >}}
