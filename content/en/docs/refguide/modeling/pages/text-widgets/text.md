---
title: "Text"
url: /refguide/text/
weight: 10
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


#### 3.1 Caption {#caption}

**Caption** defines the text that will be shown. It supports dynamic text using templating. The final text is determined by the given [**Template**](#caption-template), [**Parameters**](#caption-parameters), and [**Fallback Text**](#caption-fallback), which can be found in the 'Edit Caption' dialog box. The dialog box can be opened in two ways:

* From the properties sidebar: double-click the property (for example, "Caption") or click the "more" ellipsis (...)
* From the widget properties dialog box: click the **Edit ...** button next to the property's textbox

{{< figure src="/attachments/refguide/modeling/pages/text-widgets/text/caption-edit-button.png" alt="Opening Parameters" width="450" >}}

##### 3.1.1 Template {#caption-template}

The **Caption** can be made dynamic by placing placeholders in the **Template**. Placeholders must follow the format `{i}`, where _i_ is the **Index** of a specific parameter from the list of [parameters](#caption-parameters). Parameters can be referenced multiple times, and can be referenced out of order.

##### 3.1.2 Parameters {#caption-parameters}

Parameters define what data is inserted into the template and how it is formatted. Parameters can refer to object attributes or expressions. Editing parameters is done in the 'Edit Caption' dialog box.

Parameters have the following settings:

* **Index** – an identification number of a parameter 
* **Value** – an attribute or an expression value to be displayed
* **Format** – a format in which the value will be displayed (only for attributes)

{{< figure src="/attachments/refguide/modeling/pages/text-widgets/text/parameter-settings.png" alt="Parameter Settings" width="450" >}}

{{% alert color="info" %}}
You can use the formatter functions in the expression editor when using expressions. For more information, see [this list](/refguide/expressions/#expressions-formatter-functions).
{{% /alert %}}

###### 3.1.2.1 Adding New Parameters

To be able to use parameters, the Text widget must be in the context of an entity such as a [Data widget](/refguide/data-view), [Snippet parameter](http://localhost:1313/refguide/snippet/#parameters), or [Page parameter](/refguide/page-properties/#parameters). To use parameters, do the following:

1. Open the properties for the Text widget.
1. Click the **Edit ...** button of the PROPERTY_NAME to open its dialog box.
1. In the **Parameters** section, click **New**:

    {{< figure src="/attachments/refguide/modeling/pages/text-widgets/text/adding-parameter.png" alt="Adding New Parameter"  width="450" >}}

1. In the **Edit Template Parameter** dialog box, click **Select**, choose an attribute, and confirm your choice.
1. Edit the template and add a placeholder that matches the index of your parameter (for example `{1}`).

In the example below, the placeholder `{1}` corresponds to the **Title** attribute, `{2}` to **NrOfPages**, and `{3}` to **DatePublished**:

{{< figure src="/attachments/refguide/modeling/pages/text-widgets/text/parameters-example.png" alt="Parameter Example"  width="450" >}}


###### 3.1.2.2 Performing Other Actions on Parameters

In addition to adding new parameters, you can perform the following actions on parameters:

* **Delete** – to delete a parameter click **Delete** or press <kbd>Delete</kbd> on your keyboard
* **Edit** – double-click a parameter to edit it or click **Edit**
* **Move up** – to move a parameter up in the list of parameters and also to change its index, click **Move up**
* **Move down** – to move a parameter down in the list of parameters and also to change its index, click **Move down**

{{< figure src="/attachments/refguide/modeling/pages/text-widgets/text/parameter-actions.png" alt="Parameter Actions" width="450" >}}


##### 3.1.3 Fallback Text {#caption-fallback}

The fallback text is shown when the datasource of the **Parameters** is empty or unavailable. 

Empty attributes used as parameters do not cause the fallback text to be shown. Instead the template is rendered as normal and the placeholders for the empty parameters are substituted by empty strings. 

For example: The template `Hello, {1}!` with the fallback text _"Nobody to greet."_ would get rendered as follows:

| Scenario         | Rendered text      |
| ---------------- | ------------------ |
| Filled attribute | "Hello, World!"    |
| Empty attribute  | "Hello, !"         |
| Missing object   | "Nobody to greet." |

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
