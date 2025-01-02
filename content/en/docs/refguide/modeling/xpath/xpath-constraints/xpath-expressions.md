---
title: "XPath Expressions"
url: /refguide/xpath-expressions/
---

## Overview

Expressions are used within constraints to generate a value that is true.

There are three types of expressions usable for constraints:

* Comparisons with operators
* Functions
* Exist-expressions

## Comparisons

A comparison expression consists of two attributes or values separated by a comparison [operator](/refguide/xpath-operators/) like `=`, `<=`, or `>`.

### Examples

For example, the following query retrieves all customers whose name is "Jansen":

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = 'Jansen']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Name = 'Jansen']
    {{% /tab %}}
{{< /tabpane >}}

The following query retrieves all the orders for which the total price is less than 50.00 euros:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [TotalPrice < 50.00]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Order[TotalPrice < 50.00]
    {{% /tab %}}
{{< /tabpane >}}

The following query retrieves all customers who have at least one unpaid order:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/HasPaid = false()]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order/HasPaid = false()]
    {{% /tab %}}
{{< /tabpane >}}

The following query retrieves all customers with an order that has a status different from `Delivered`.
Note that it does not retrieve customers with no orders.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/Status != 'Delivered']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order/Status != 'Delivered']
    {{% /tab %}}
{{< /tabpane >}}

The following query retrieves all customers with an order that has a status that is empty.
As with the example above, it does not retrieve customers with no orders.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/Status = empty]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order/Status = empty]
    {{% /tab %}}
{{< /tabpane >}}

The following query retrieves all customers that do not have an order that has a status equal to `Delivered`.
Unlike the previous three queries, it also retrieves customers with no orders.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Sales.Customer_Order/Sales.Order/Status = 'Delivered')]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[not(Sales.Customer_Order/Sales.Order/Status = 'Delivered')]
    {{% /tab %}}
{{< /tabpane >}}

The following query retrieves all the customers who have the same name as the city they live in:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = City]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Name = City]
    {{% /tab %}}
{{< /tabpane >}}

The following query retrieves the customer who placed the order with the given unique identification number:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order = 124123512341]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order = 124123512341]
    {{% /tab %}}
{{< /tabpane >}}

The following query retrieves the same customer as the previous query:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order/ID = 124123512341]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order/ID = 124123512341]
    {{% /tab %}}
{{< /tabpane >}}

### Implicit type conversions

If two sides of a comparison (`=`, `!=`, `<`, `<=`, `>`, `>=`) have different types, one of the sides may be converted implicitly to the type of the other side.

If one of the sides is a plain value (a literal, a microflow variable or a [system variable](/refguide/xpath-keywords-and-system-variables/#system-variables)) and the other side is an attribute to be queried, the value is converted to the type of the attribute. For example, the line below will convert the string `'42'` to the number `42` before executing the query:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [TotalPrice >= '42']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Order[TotalPrice >= '42']
    {{% /tab %}}
{{< /tabpane >}}

Conversely, this line will convert the number `42` to the string `'42'` before executing the query:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [42 = Name]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[42 = Name]
    {{% /tab %}}
{{< /tabpane >}}

If both sides are plain values and have different types, one side will be converted to the type of the other. The type to convert to will be the one that occurs first in the following list:

1. Date and time
1. Boolean
1. Decimal
1. Integer/Long
1. String

For example, when comparing `[%CurrentDateTime%]` (Date and time) to `12345678` (Long), the Long will be converted to a Date and time.

Conversions work in the following way:

* An attempt to convert a Boolean to a Date and time will result in an error.
* A Decimal or Integer/Long is converted to a Date and time by interpreting it as the number of seconds since the Unix Epoch, January 1, 1970, 00:00 UTC.
* A String is converted to a Date and time by parsing it using the ISO 8601 format. If no time zone is specified, like in `2011-12-03T10:15:30`, the time zone of the session is used.
* A Decimal or Integer/Long is converted to a Boolean by converting any positive number as `true`, and any zero or negative number as `false`.
* A String is converted to a Boolean by comparing it to the string `'true'` in a case insensitive way.
* A String is converted to a Decimal or Integer/Long by parsing it as a number.

## Functions

For information on the available functions, see [XPath Constraint Functions](/refguide/xpath-constraint-functions/).

## Exist-Expressions {#exist}

The last type of expression is the exist-expression, which can be used to check whether a specific association is filled or not.

### Examples

This query retrieves all the customers who have placed at least one order:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Order/Sales.Order]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Sales.Customer_Order/Sales.Order]
    {{% /tab %}}
{{< /tabpane >}}

This query retrieves all the customers who have not placed any orders:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [not(Sales.Customer_Order/Sales.Order)]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[not(Sales.Customer_Order/Sales.Order)]
    {{% /tab %}}
{{< /tabpane >}}
