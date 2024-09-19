---
title: "XPath Constraints"
url: /refguide/xpath-constraints/
weight: 2
---

## Introduction

A constraint can be added to any XPath query to filter the data retrieved. It should always take the form of a valid [expression](/refguide/xpath-expressions/). This should consist of one or more entities, attributes, or associations combined with [operators](/refguide/xpath-operators/), [functions](/refguide/xpath-constraint-functions/), and [keywords or system variables](/refguide/xpath-keywords-and-system-variables/).

The syntax of XPath queries differs between Studio Pro and Java environments. In Studio Pro, you do not write complete queries, only the constraints. The entity is implicitly determined by the context. So, instead of `//Sales.Customer[Name='Jansen']`, you only need to write `[Name='Jansen']` in the context of a customer. In Java, you do need to write whole queries, including the double slashes (`//`) and the entity name.

{{% alert color="info" %}}
All the Studio Pro examples below assume that an entity `Sales.Customer` is selected for retrieval.
{{% /alert %}}

## Constraints in Studio Pro

### Using Visual Builder for XPath Constraints

In Studio Pro version 10.5, a new, visual, way of constructing XPath constraints was introduced. This is called **visual Builder for XPath constraints** (Builder). This was in beta in version 10.5 and released as GA in version 10.12.

{{% alert color="warning" %}}
Visual Builder for XPath constraints has a number of limitations which are listed in [Builder Limitations](#limitations).
{{% /alert %}}

You can use the Builder in all places where you can retrieve data from the database, for example a [Retrieve](/refguide/retrieve/) activity in a microflow or the [Data Source](/refguide/xpath-source/) of a widget. Select **(From) Database** and click **Edit…** next to **XPath constraint** to open a dialog box where you can build your constraint.

Ensure the **Builder** option is selected to use the Builder—this is the default from Mendix version 10.10. You can switch between the Builder and the XPath expression editor to view them in different ways. You can also set the Builder as the default in your [preferences](/refguide/preferences-dialog/#visual-builder).

#### Constructing an XPath Constraint

The entity you are retrieving from the database is already selected as the context and this is indicated in the dialog box as **Select records of {entity}**.

You then see a clause beginning **Where** where you can enter one or more conditions which are split into three parts:

1. Entity, attribute, or association.

    Click the down arrow (▼) and select from the list of options. You will only be shown options that fit the current context and are supported by visual Builder for XPath constraints.

2. Relational [operator](/refguide/xpath-operators/) or function.

    Click the down arrow (▼) and select from the list of supported options.

3. Condition.

    The value or values which you want to use to filter the data. This can be a string, which you enter without quotes, or a variable. If you click this field when it is empty, you can choose from variables which are available.

You can create additional rules by clicking **Add rule**.

When you have multiple rules you can choose whether to combine them with **And** or **Or** by clicking the down arrow (▼) next to the current selection.

You can create groups of rules which should be applied in combination. Click **Add group** to do this. This enables you to produce rules such as:

`[(Name = 'Thomson' and Sales.Customer_Address/Sales.Address/City = 'New York') or (Name = 'Thompson' and Sales.Customer_Address/Sales.Address/City = 'London')]`

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/thomson-and-thompson.png" class="no-border" >}}

You can change the order of rules, or move them from one group to another using the handles on each rule indicated by six dots (**⋮⋮**).

#### Builder Limitations {#limitations}

Visual Builder for XPath constraints cannot be used to make arbitrarily complex XPath expressions. Builder has the following limitations:

* It does not support all functions. It does support the following relational operators and functions:

    * is
    * is not
    * contains
    * does not contain
    * starts with
    * ends with

* It does not support the `id` attribute of entities
* It does not support nested expressions such as `[Sales.Customer_Address/Sales.Address[City = 'New York' or City = 'London']]`
* If an existing expression starts with a variable it cannot be displayed in the Builder (for example `[($CurrentAddress = Sales.Customer_Address)]`)—however you can still build the same expression in the Builder the other way around (so `[(Sales.Customer_Address = $CurrentAddress)]` can be built and displayed in the Builder)

If you try to use an unsupported feature you will be warned and can choose to edit your XPath expression in the expression editor.

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/advanced-features.png" >}}

### Writing XPath Expressions

In all versions of Mendix you can write XPath constraints using the syntax explained below. As you enter your XPath you will be given assistance to help you choose the correct entities, attributes, variables, and associations. You will also see if there are any syntax errors.

Depending on the version, you may have to use a different option to add your XPath constraint.

#### Mendix Version 10.5 and Above

For all places where you can retrieve data from the database, for example a [Retrieve](/refguide/retrieve/) activity in a microflow or the [Data Source](/refguide/xpath-source/) of a widget, you select **(From) Database** and you will always have the option to add an **XPath constraint** by clicking **Edit…** to open a dialog box where you can enter your constraint.

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/from-database-xpath-10-5.png" class="no-border" >}}

You can type your constraint by selecting the option **XPath expression**.

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/xpath-expression-10-5.png" class="no-border" >}}

#### Mendix Versions Below 10.5

For a **Retrieve** activity in a microflow, you choose **Source: From database** and you can enter your constraint under **XPath constraint**.

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/from-database-xpath-10-4.png" class="no-border" >}}

For a **Data Source** of a page widget such as a [Data Grid](/refguide/data-grid/), you choose **Type: XPath**. You will then see an **XPath** field and click **Edit…** to open a dialog box where you can enter your constraint.

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/data-source-xpath-10-4.png" class="no-border" >}}

## Constraints in Java

To apply XPath constraints in Java, you should use a complete XPath expression as described in [XPath](/refguide/xpath/). This includes the entity context plus your constraint expression and (optionally) an aggregate function and attribute to retrieve.

The XPath should be used in a [core.createXPathQuery](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#createXPathQuery(java.lang.String)) call. You can then call [XPathQueryBase.execute](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/datastorage/XPathQueryBase.html#execute(com.mendix.systemwideinterfaces.core.IContext)) which will return the list of objects filtered using the XPath you provided.

For example, to retrieve all customers named Jansen:

```java
public getCustomersNameJansen(IContext context, ICore core, int value) {
    List<IMendixObject> results = core.createXPathQuery("//Sales.Customer[Name='Jansen']")
        .execute(context);
    return results;
}
```

## Simple Constraints

The following example shows how you should perform an XPath query in Studio Pro. You **Select** the **Entity** `Sales.Customer` and then write the XPath constraint `[Name='Jansen']`:

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/XPath-constraint-example.png" alt="XPath constraint example in Studio Pro" width="400px" class="no-border" >}}

## Multiple Constraints

Multiple constraints can be added to a single query for all queries except where you are querying on the `id` (the unique identifier) of the object.

If you need to query on `id` (for example `[id = $currentuser]`) as part of multiple constraints, you can create an `and` constraint by using the first format shown in the [Constraint One `and` Constraint Two](#and) section: `[id = …][{additional constraint}]`.

### Constraint One `and` Constraint Two{#and}

There are two ways of combining constraints so that the result is a list of objects where both constraints are applied to the objects being retrieved.

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

It is also possible to combine constraints with an `and` [operator](/refguide/xpath-operators/). This query retrieves all customers whose names equal to Jansen *and* who live in Rotterdam:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = 'Jansen' and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name = 'Jansen' and Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

### Constraint One `or` Constraint Two

You can also use the `or` operator. This query retrieves all customers whose name is Jansen *or* who live in Rotterdam.

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = 'Jansen' or Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Name = 'Jansen' or Sales.Customer_Address/Sales.Address/City = 'Rotterdam']
    {{% /tab %}}
{{< /tabpane >}}

### Prioritizing Constraints

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

### Sub-constraints

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
    [Sales.Customer_Address/Sales.Address[City = 'New Amsterdam']/Sales.Address_Country/Sales.Country/Name = 'Guyana']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Sales.Customer[Sales.Customer_Address/Sales.Address[City = 'New Amsterdam']/Sales.Address_Country/Sales.Country/Name = 'Guyana']
    {{% /tab %}}
{{< /tabpane >}}

### Combining Paths

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
