---
title: "Snippet Call"
url: /refguide/snippet-call/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The **Snippet call** widget allows you to use a [snippet](/refguide/snippet/) on a [page](/refguide/page/), a [layout](/refguide/layout/), or another snippet:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/snippet-call/snippet-call-example.png" alt="Snippet Call Example" class="no-border" >}}

## 2 Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Snippet call properties consist of the following sections:

Properties:

* [General](#general)
* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common)

## 3 Properties

### 3.1 General Section {#general}

#### 3.1.1 Snippet

The **Snippet** property shows the name of the snippet that the snippet call will display.

#### 3.1.2 Snippet Settings {#snippet-settings}

The **Snippet settings** property opens a dialog box that shows a list of parameters of the selected snippet and the objects that will be passed to each of them.

### 3.2 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 4 Styling

### 4.1 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 4.2 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 5 Performing Specific Actions

To perform actions on a snippet call, select it on a page and right-click it. The list of possible actions opens. While some actions from this list, such as **Select snippet**, are a quick way to set the properties, the following actions are specific actions that you can perform:

* **Show snippet** – opens a snippet selected for a snippet call
* **Inline snippet** – turns the snippet call into widgets that the selected snippet consists of

### 5.1 Inline Snippet {#inline-snippet}

When you select **Inline snippet**, Studio Pro will analyze the snippet call to determine if it is safe to inline. If it is safe, the following will occur: 

* The snippet call will be replaced by the contents of the snippet
* All references to the snippet parameters will be rewritten to refer to the objects to which they are mapped in the **Snippet settings** of the snippet call 

This is basically the inverse operation of [Extract Snippet](/refguide/snippet/#extract-snippet). 

{{% alert color="info" %}}
After clicking **Inline snippet**, note that the snippet is not automatically deleted — even if the inlined snippet call was the last remaining usage of the snippet.
{{% /alert %}}

Not every snippet call can be inlined, because certain configurations cannot be represented correctly outside a snippet. Attempting to inline such a snippet call could result in a consistency error or produce inlined content which does not have the same behavior as the original snippet call. In this case, a warning dialog box is shown to ask whether you want to proceed:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/snippet-call/inline-snippet-warning-dialog.png" alt="Warning dialog for Inline snippet" width="600" class="no-border" >}}

## 6 Limitations

The following are examples of configurations which cannot be correctly inlined:

* A Data view with a *Context* data source using an association of a snippet parameter (if that parameter has been mapped to an object which is not the directly surrounding object of the snippet call)
* An attribute widget (such as Text box) using an attribute of a snippet parameter (if that parameter has been mapped to a page parameter in the snippet call)

In such cases, the inlined content needs to be fixed manually by adding or removing a Data view (depending on the configuration) and reconfiguring the affected widgets to refer to the correct object again.

## 7 Read More

* [Snippet](/refguide/snippet/)
* [Page](/refguide/page/)
* [Structure Widgets](/refguide/structure-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
