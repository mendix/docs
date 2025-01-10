---
title: "Text"
url: /refguide9/text/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The text widget displays a text which can optionally contain parameters. A parameter can be an attribute of a context object or an [expression](/refguide9/expressions/) which also has access to the surrounding context objects and their attributes. When used with parameters, every parameter placeholder in the text (which may appear as {0}, {1}, or {2} for example) is replaced with the value of its corresponding attribute or expression. 

For example, if you want to build a page that shows some detailed information about books, you can configure a [data grid](/refguide9/data-grid/) to retrieve the whole list of **Book** objects from the database. Then, you can place a text widget inside a [data view](/refguide9/data-view/) that is configured to listen to this data grid (for more information, see [Listen to Widget Source](/refguide9/listen-to-grid-source/). Finally, you can add parameters for your text widget to display information about the selected book from the data grid.

{{< figure src="/attachments/refguide9/modeling/pages/text-widgets/text/text.png" alt="Text Widget"  class="no-border" >}}

{{% alert color="info" %}}
If you start typing in any empty container, Studio Pro will automatically generate a text widget to display your text.
{{% /alert %}}

## Properties

An example of text properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/text-widgets/text/text-properties.png" alt="Text Properties" width="200" class="no-border" >}}

Text properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}} 

### General Section {#general}

#### Caption {#caption}

**Caption** defines a text that will be shown. The caption can contain parameters that are written between braces, for example, {1}.  

For more information on using parameters, see the [Parameters](#parameters) section below. 

#### Parameters {#parameters}

Parameters are attributes or expressions whose values will be displayed as part of the text defined in the **Caption** setting. To view **Parameters**, do one of the following:

* Double-click the **Caption** setting in properties
* Double-click the text widget on the page and click **Edit** in the **General** section > **Caption**:

    {{< figure src="/attachments/refguide9/modeling/pages/text-widgets/text/caption-edit-button.png" alt="Opening Parameters"   width="450" class="no-border" >}} 

Parameters have the following settings:

* **Index** – an identification number of a parameter 
* **Value** – an attribute or an expression value to be displayed
* **Format** – a format in which the value will be displayed (only for attributes)

    {{< figure src="/attachments/refguide9/modeling/pages/text-widgets/text/parameter-settings.png" alt="Parameter Settings"   width="450" class="no-border" >}}

{{% alert color="info" %}}
You can use the formatter functions in the expression editor when using expressions. For more information, see [this list](/refguide9/expressions/#expressions-formatter-functions).
{{% /alert %}}

##### Adding New Parameters

To use parameters, do the following:

1. Place the **Text** widget in a context of an entity, as in, inside a [data container](/refguide9/data-widgets/).
2. Double-click the **Caption** setting in the text widget properties.
3. In the **Edit Caption** dialog box > **Parameters** section click **New**:

    {{< figure src="/attachments/refguide9/modeling/pages/text-widgets/text/adding-parameter.png" alt="Adding New Parameter"   width="450" class="no-border" >}}

4. In the **Edit Template Parameter** dialog box, click **Select**, choose an attribute and confirm your choice.
5. In the **Caption** setting, write the text you would like to display and type the **Index** of the parameter you would like to include within braces. In the example below, to include the title of the book, amount of pages it has and the year it was published, you need to use indexes {1} for the *Title* attribute, {2} for the *NrOfPages* attribute and {3} for the *DatePublished* attribute:  

    {{< figure src="/attachments/refguide9/modeling/pages/text-widgets/text/parameters-example.png" alt="Parameter Example"   width="450" class="no-border" >}}

6. In the **Fallback text** setting, write the text you would like to display when no context object is available from the surrounding data widget:

    {{< figure src="/attachments/refguide9/modeling/pages/text-widgets/text/fallback-text-example.png" alt="Fallback Text Example"   width="450" class="no-border" >}}

##### Performing Other Actions on Parameters

In addition to adding new parameters, you can perform the following actions on parameters:

* **Delete** – to delete a parameter click Delete or press <kbd>Delete</kbd> on your keyboard
* **Edit** – double-click a parameter to edit it or click Edit
* **Move up** – to move a parameter up in the list of parameters and also to change its index, click **Move up**
* **Move down** – to move a parameter down in the list of parameters and also to change its index, click **Move down**

    {{< figure src="/attachments/refguide9/modeling/pages/text-widgets/text/parameter-actions.png" alt="Parameter Actions"   width="450" class="no-border" >}}

#### Render Mode

The render mode determines how the text will be displayed. 

| Value | Description  |
|-------|----------|
| Text  *(default)* | The text will be rendered inline with the previous/next texts on a page (`<span>` tag in HTML).  |
| Paragraph | The text will be rendered as a separate paragraph (`<p>` tag in HTML).  |
| Heading 1 - Heading 6 | The text will be rendered as a selected heading (for example, `<h1>` tag in HTML). **Heading 1** is the largest type of heading, **Heading 6** is the smallest one. |

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide9/visibility-section-link.md" %}}

## Read More

* [Page](/refguide9/page/)
* [Text Widgets](/refguide9/text-widgets/)
* [Properties Common in the Page Editor](/refguide9/common-widget-properties/)
