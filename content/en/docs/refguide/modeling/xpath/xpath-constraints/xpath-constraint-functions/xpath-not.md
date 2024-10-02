---
title: "XPath not"
url: /refguide/xpath-not/
weight: 3
---

## Overview

The `not()` function inverts the meaning (and as such; the result) of the argument.

{{% alert color="info" %}}
The `not()` function can have different results from an inverse comparison (for example, `!=` as the negative of `=`). See the examples below for more explanation.
{{% /alert %}}

## Examples

This query returns all customers whose names are *not* equal to "Jansen":

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Name = 'Jansen')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[not(Name = 'Jansen')]
    {{% /tab %}}
{{< /tabpane >}}

In this case, the above query returns the same result as the following query:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name != 'Jansen']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name != 'Jansen']
    {{% /tab %}}
{{< /tabpane >}}

The following query returns all the customers who have not placed at least one order:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Sales.Customer_Order/Sales.Order)]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
    {{% /tab %}}
{{< /tabpane >}}

The following query returns all the customers who have placed *no* orders with a `TotalPrice` of *more than* 30,000, including those who have not placed any orders at all:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Sales.Customer_Order/Sales.Order/TotalPrice > 30000)]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[not(Sales.Customer_Order/Sales.Order/TotalPrice > 30000)]
    {{% /tab %}}
{{< /tabpane >}}

The query above does not return the same result as the one below, which returns all the customers who have placed *at least one* order with a `TotalPrice` of *less than* 30,000, regardless of the number of orders they have placed worth more than 30,000:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/TotalPrice <= 30000]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Sales.Customer_Order/Sales.Order/TotalPrice <= 30000]
    {{% /tab %}}
{{< /tabpane >}}

For example, if a customer has placed two orders—one for 15,000 and one for 35,000—this query will return this customer, while the *not* query will not. Customers who have not placed any orders will not be returned by this query.
