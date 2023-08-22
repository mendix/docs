---
title: "XPath Constraints"
url: /refguide/xpath-constraints/
weight: 2
tags: ["studio pro"]
---

## 1 Introduction

{{% alert color="warning" %}}
The syntax of XPath queries differs between Studio Pro and Java environments. In Studio Pro, you do not write complete queries, only the constraints. The entity is implicitly determined by the context. So, instead of `//Sales.Customer[Name='Jansen']`, you only need to write `[Name='Jansen']` in the context of a customer. In Java, you do need to write whole queries, including the double slashes (`//`) and the entity name.
{{% /alert %}}

A constraint can be added to any XPath query to filter the data retrieved. It should always take the form of a valid [expression](/refguide/xpath-expressions/). This should consist of one or more variables combined with [operators](/refguide/xpath-operators/), [functions](/refguide/xpath-constraint-functions/), [keywords or system variables](/refguide/xpath-keywords-and-system-variables/).

The following example shows how you should perform an XPath query in Studio Pro. You **Select** the entity `Sales.Customer` and then write the XPath constraint `[Name='Jansen']`:

{{< figure src="/attachments/refguide/modeling/xpath/XPath-constraint-example.png" alt="XPath constraint example in Studio Pro" width="400px" >}}

Multiple constraints can be added to a single query, this is true for all queries with the exception of the `id` query. This is most commonly done by the simple expedient of opening a new set of brackets after closing the first.

## 2 Examples

{{% alert color="info" %}}

For all the XPath constraints examples given for Studio Pro, it is assumed that you have already selected the relevant entity as the context of the XPath constraints before you type in the constraints. For all the examples given in Java environment, whole XPath queries are presented, including the double slashes (`//`) and the entity name.

{{% /alert %}}

This query retrieves all customers whose name is equal to Jansen and who live in Rotterdam:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name='Jansen'][Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name = 'Jansen'][Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

It is also possible to combine constraints with an `and` or `or` [operator](/refguide/xpath-operators/). This query retrieves all customers whose names equal to Jansen *and* who live in Rotterdam:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = 'Jansen' and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name = 'Jansen' and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

This query retrieves all customers whose name is Jansen or who live in Rotterdam.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = 'Jansen' or Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name = 'Jansen' or Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

With parentheses, constraints can be grouped to define priorities. This query retrieves all customers who are not only named "Jansen" or "Smit," but also live in Rotterdam:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [( Name = 'Jansen' or Name = 'Smit' ) and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[( Name = 'Jansen' or Name = 'Smit' ) and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

In some cases, it might also be useful define sub-constraints to restrict the data that is being constrained. This is easily achieved by adding a sub-constraint within the brackets of the original constraint. Do not confuse this with two separate constraints, as the sub-constraint only applies to the meta-constraint, not the actual query. As such, the brackets are not opened and closed one after the other; the sub-constraint should be entirely within the meta-constraint. In sufficiently complicated queries, this can result in confusion regarding where one constraint ends and the other begins. Make sure you keep careful track of bracket sets to prevent this from happening.

This query retrieves all users that have the role Administrator:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [id = '[%UserRole_Administrator%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.User[id = '[%UserRole_Administrator%]']
    {{% /tab %}}
{{< /tabpane >}}

This query retrieves all customers who live in Rotterdam or Losdun:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Address/Sales.Address[City = 'Rotterdam' or City = 'Losdun']]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Sales.Customer_Address/Sales.Address[City = 'Rotterdam' or City = 'Losdun']]
    {{% /tab %}}
{{< /tabpane >}}

This query retrieves all customers who live in New Amsterdam, Guyana (as opposed to those that live in, for example, New Amsterdam, Indiana):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Address/Sales.Address[City = 'New Amsterdam']/Sales.Adress_Country/Sales.Country/Name = 'Guyana']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Sales.Customer_Address/Sales.Address[City = 'New Amsterdam']/Sales.Adress_Country/Sales.Country/Name = 'Guyana']
    {{% /tab %}}
{{< /tabpane >}}

Avoid the use of the same path more than once in a single constraint. For example, the example on Rotterdam and Losdun could also be established like this:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Sales.Customer_Address/Sales.Address/City = 'Rotterdam' or Sales.Customer_Address/Sales.Address/City = 'Losdun']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Sales.Customer_Address/Sales.Address/City = 'Rotterdam' or Sales.Customer_Address/Sales.Address/City = 'Losdun']
    {{% /tab %}}
{{< /tabpane >}}

However, this query is executed inefficiently and will thus significantly slow down the query process.
