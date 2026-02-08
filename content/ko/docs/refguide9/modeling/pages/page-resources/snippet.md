---
title: "Snippet"
url: /refguide9/snippet/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Snippets define reusable interface parts. They can be used on [pages](/refguide9/page/), [layouts](/refguide9/layout/) and even other snippets. By using snippets, you can make changes in fewer places when you modify the interface. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. If you change something in the snippet, that change will show up in both places.

There are two ways to create a snippet:

* You can add a new empty snippet (see [Page Resources](/refguide9/page-resources/)).
* You can extract a snippet from a widget on an existing document (see [Extract Snippet](#extract-snippet)).

A snippet expects zero or more parameters. To change the parameters of the snippet, click the **Parameters** button in the top bar. This opens a dialog box which allows you to add, modify, and remove parameters. The **Parameters** button shows the current number of parameters in its caption, while its tooltip shows the name and type of each parameter. For more information about snippet parameters, see the [Parameters](#parameters) section in snippet properties.

In the example below, the snippet defines a single parameter with name **Order** and type **MyFirstModule.Order**.

{{< figure src="/attachments/refguide9/modeling/pages/page-resources/snippet/snippet.png" alt="Example of a snippet"   width="400"  class="no-border" >}}

## Properties

An example of snippet properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/page-resources/snippet/snippet-properties.png" alt="Example of the snippet properties pane"   width="250"  class="no-border" >}}

Snippet properties consist of the following sections:

* [Common](#common)
* [Data](#data)
* [Designer](#designer)
* [General](#general)

### Common Section{#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### Data Section{#data}

#### Parameters{#parameters}

**Snippet Parameters** works the same way as [Page Parameter](/refguide9/page-properties/#parameters) with the difference that a snippet's parameter can be accessed at the top level, for example when creating expressions or selecting attributes.

### Designer Section{#designer}

#### Canvas Width

**Canvas width** defines the width in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the width of the page in the actual application.

Default value: *800*

#### Canvas Height

**Canvas height** defines the preferred minimum height in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the height of the page in the actual application.

Default value: *600*

### General Properties{#general}

#### Platform

The values for the platform property are:

* Web *(default)* – these snippets are used for pages which are going to be displayed in a browser or hybrid mobile app
* Native – these snippets are used for pages which are going to be displayed in a native mobile app

## Extract Snippet{#extract-snippet}

To extract a snippet from an existing widget, right-click the widget and select **Extract snippet**:

{{< figure src="/attachments/refguide9/modeling/pages/page-resources/snippet/extract-snippet-contextmenu.png" alt="Example of a widget about to be extracted to a snippet" width="800" class="no-border" >}}

To determine which snippet parameters are needed, Studio Pro analyzes which objects from the surrounding widgets are used inside the selected widget. There are various ways a widget can refer to a surrounding object:

* The selected attribute of an attribute widget (such as Text box)
* The parameters of a text template
* Conditional visibility and editability
* Expressions for dynamic classes
* XPath constraints using variables (for example `$dataView3`)
* Entity widgets (such as Data view) with a data source which follows an association
* Data views using a page parameter or snippet parameter as a *Context* data source
* Parameter mappings for actions and snippet calls

After selecting **Extract snippet**, a dialog box shows an overview of the snippet parameters required for the extracted widget. You can also enter the new snippet's **Name** here:

{{< figure src="/attachments/refguide9/modeling/pages/page-resources/snippet/extract-snippet-dialog.png" alt="Example of the Extract Snippet dialog" width="640" class="no-border" >}}

The table showing the snippet parameters has the following columns:

* **Name** — the suggested name for the snippet parameter.
* **Type** — the type of the snippet parameter.
* **Substitute for** — the elements in the original document for which the snippet parameter is substituted in the extracted snippet.

The names of the snippet parameters can be changed only if they are unique and not already used in the extracted content. The order of the parameters can also be changed.

Clicking **OK** will create the new snippet and replace the extracted widget in the original document with a snippet call. The **Snippet settings** of the call are automatically configured to pass the correct object to each snippet parameter. In the extracted snippet, references to the original objects are rewritten to refer to a snippet parameter instead. For example, a conditional visibility expression could be rewritten as shown in the following side-by-side comparison:

{{< figure src="/attachments/refguide9/modeling/pages/page-resources/snippet/extract-snippet-expression-rewrite.png" alt="Example of an expression rewritten by Extract snippet" width="580" class="no-border" >}}

{{% alert color="info" %}}
Not every widget can be successfully extracted to a snippet if the result requires multiple snippet parameters. For example, a Data view with an *Association* data source must be surrounded by a single context object, which is not the case in a snippet with multiple parameters. 

This can be fixed after the extraction by manually wrapping the widget in a Data view with a *Context* data source pointing to the correct snippet parameter.
{{% /alert %}}

## Read More

* [Snippet Call](/refguide9/snippet-call/)
