---
title: "Text"
url: /refguide/text/
weight: 10
tags: ["studio pro", "text", "text widget", "common widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The text widget displays a text which can optionally contain parameters. A parameter can be an attribute of a context object or an [expression](/refguide/expressions/) which also has access to the surrounding context objects and their attributes. When used with parameters, every parameter placeholder in the text (which may appear as {0}, {1}, or {2} for example) is replaced with the value of its corresponding attribute or expression. 

For example, if you want to build a page that shows some detailed information about books, you can configure a [data grid](/refguide/data-grid/) to retrieve the whole list of **Book** objects from the database. Then, you can place a text widget inside a [data view](/refguide/data-view/) that is configured to listen to this data grid (for more information, see [Listen to Widget Source](/refguide/listen-to-grid-source/)). Finally, you can add parameters for your text widget to display information about the selected book from the data grid.

{{< figure src="/attachments/refguide/modeling/pages/text-widgets/text/text.png" alt="Text Widget"  class="no-border" >}}

{{% alert color="info" %}}
If you start typing in any empty container, Studio Pro will automatically generate a text widget to display your text.
{{% /alert %}}

## 2 Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Text properties consist of the following sections:

Properties:

* [General](#general)
* [Visibility](#visibility)
* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

## 3 Properties

### 3.1 General Section {#general}

#### 3.1.1 Caption {#caption}

**Caption** defines a text that will be shown using a Text template. 

{{% snippet file="/static/_includes/refguide/text-template-link.md" %}}


#### 3.1.3 Render Mode

The render mode determines how the text will be displayed. 

| Value | Description  |
|-------|----------|
| Text  *(default)* | The text will be rendered inline with the previous/next texts on a page (`<span>` tag in HTML).  |
| Paragraph | The text will be rendered as a separate paragraph (`<p>` tag in HTML).  |
| Heading 1 - Heading 6 | The text will be rendered as a selected heading (for example, `<h1>` tag in HTML). **Heading 1** is the largest type of heading, **Heading 6** is the smallest one. |

### 3.2 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

### 3.3 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 4 Styling

### 4.2 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 4.3 Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 5 Read More

* [Page](/refguide/page/)
* [Text Widgets](/refguide/text-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
