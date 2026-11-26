---
title: "Snippet Call"
url: /refguide/snippet-call/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The **Snippet call** widget allows you to use a [snippet](/refguide/snippet/) on a [page](/refguide/page/), a [layout](/refguide/layout/), or another snippet:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/snippet-call/snippet-call-example.png" alt="Snippet Call Example" class="no-border" >}}

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Snippet call properties consist of the following sections:

Properties:

* [General](#general)
* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common)

## Properties

### General Section {#general}

#### Snippet

The **Snippet** property shows the name of the snippet that the snippet call will display.

#### Snippet Settings {#snippet-settings}

The **Snippet settings** property opens a dialog box that shows a list of parameters of the selected snippet and the arguments that will be passed to each of them. For more information, see [Passing Arguments](#passing-arguments).

### Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Passing Arguments {#passing-arguments}

An argument must be passed to every [snippet parameter](/refguide/snippet/#parameters) of the snippet that is called. The **Snippet settings** dialog box lists the parameters of the snippet with their **Name**, **Type**, and **Argument**. 

To configure the argument of a parameter, select the parameter and click **Edit parameter value**. In the subsequent dialog box, set **Type** to either **Variable** or **Expression**. This works the same for object and primitive parameters.

In the example below, the snippet has an object parameter **Order** and a primitive parameter **Amount** of type `Integer/Long`. Both parameters have an argument:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/snippet-call/snippet-arguments-mapping.png" alt="example of the snippet settings dialog box" width="500px" >}}

### Variable Arguments {#variable-arguments}

Variable arguments are used to pass a value from the context of the snippet call to the snippet. Do this by selecting from the available variables in the **Variable** dropdown. 

Only variables that match the data type of the snippet parameter are shown, for example a page parameter, a [variable](/refguide/page-properties/#variables) of the page, or an object from a surrounding data container. Variables that come from a data source, a selection, or the return value of an action cannot be passed.

In the example below, the argument for the parameter **Amount** is the variable **Amount**:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/snippet-call/snippet-argument-variable.png" alt="example of a variable argument" width="500px" >}}

### Expression-Based Arguments {#expression-based-arguments}

Expression-based arguments allow you to use functions and follow associations within the expression to set the argument value. The expression must return a value that matches the data type of the snippet parameter.

In the example below, the argument for the parameter **Amount** is the expression `$Amount * 2`, which multiplies the variable **Amount** that is available at the snippet call by 2:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/snippet-call/snippet-argument-expression.png" alt="example of an expression-based argument" width="500px" >}}

{{% alert color="info" %}}
Snippet parameters are always required. Unlike [page parameters](/refguide/page-parameter/#argument), they cannot be omitted and do not have a default value.
{{% /alert %}}

## Styling

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Performing Specific Actions

To perform actions on a snippet call, select it on a page and right-click it. The list of possible actions opens. While some actions from this list, such as **Select snippet**, are a quick way to set the properties, the following actions are specific actions that you can perform:

* **Show snippet** – opens a snippet selected for a snippet call
* **Inline snippet** – turns the snippet call into widgets that the selected snippet consists of

### Inline Snippet {#inline-snippet}

When you select **Inline snippet**, Studio Pro will analyze the snippet call to determine if it is safe to inline. If it is safe, the following will occur: 

* The snippet call will be replaced by the contents of the snippet
* All references to the snippet parameters will be rewritten to refer to the objects, variables, or expressions to which they are mapped in the **Snippet settings** of the snippet call 
* If the snippet has variables, they will be created on the page or snippet that contains the snippet call

This is basically the inverse operation of [Extract Snippet](/refguide/snippet/#extract-snippet). 

{{% alert color="info" %}}
After clicking **Inline snippet**, note that the snippet is not automatically deleted—even if the inlined snippet call was the last remaining usage of the snippet.
{{% /alert %}}

Not every snippet call can be inlined, because certain configurations cannot be represented correctly outside a snippet. Attempting to inline such a snippet call could result in a consistency error or produce inlined content which does not have the same behavior as the original snippet call. In this case, a warning dialog box is shown to ask whether you want to proceed:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/snippet-call/inline-snippet-warning-dialog.png" alt="Warning dialog for Inline snippet" width="600" class="no-border" >}}

## Limitations

The following are examples of configurations which cannot be correctly inlined:

* A Data view with a *Context* data source using an association of a snippet parameter (if that parameter has been mapped using an expression)
* An attribute widget (such as Text box) using an attribute of a snippet parameter (if that parameter has been mapped using an expression)

In such cases, the inlined content needs to be fixed manually by adding or removing a Data view (depending on the configuration) and reconfiguring the affected widgets to refer to the correct object again.

## Read More

* [Snippet](/refguide/snippet/)
* [Page](/refguide/page/)
* [Structure Widgets](/refguide/structure-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
