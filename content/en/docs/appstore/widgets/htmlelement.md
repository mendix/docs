---
title: "HTML Element"
url: /appstore/widgets/htmlelement/
category: "Widgets"
description: "Describes the configuration and usage of the HTML Element widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "htmlelement", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [HTML Element](https://marketplace.mendix.com/link/component/204843) widget allows a developer to create custom HTML elements to build custom structures, visualizations, or interactions. The widget can also execute advanced text formatting, build custom UI components, and embed HTML.

The HTML Element widget contains settings to define the HTML tag, HTML attributes, events, and repeat elements. This widget can be nested and combined with other widgets.

### 1.1 Features

Almost any arbitrary custom HTML configuration can be used with HTML Element. Here are some example outputs:

* Embedded video:

    {{< figure src="/attachments/appstore/widgets/htmlelement/sample-embedded-html.png" >}}

* Text formatting:

    {{< figure src="/attachments/appstore/widgets/htmlelement/sample-formatting-text.png" >}}

* Building a custom UI component:

    {{< figure src="/attachments/appstore/widgets/htmlelement/sample-custom-ui.png" >}}

* Custom-tailored HTML:

    {{< figure src="/attachments/appstore/widgets/htmlelement/sample-tailored-html.png" >}}

## 2 Configuration

To configure this widget, follow these steps:

1. In Studio Pro, place the HTML Element widget where you want your custom HTML Element to be visible.
2. Double-click the HTML Element widget to open the **Edit HTML Element** dialog box.
3. Configure the widget using the properties described in the sections below.

### 2.1 General Tab

#### 2.1.1 HTML Element Section

* **Tag name** – sets the type of the element (such as div, span, or img). If you would like to add a custom name for the element, select **Use custom name** in the drop-down menu.
* **Repeat element**
    * **Yes** – if selected, repeats the element for each item in the data source assigned.
    * **No** (default) – if selected, the element is rendered once. 
* **Content**
    * **Container for widgets** (default) – if selected, the widget acts as a container for other widgets.
    * **HTML** – if selected, uses custom HTML markup as defined in the HTML settings. 
* **HTML** (Visible if **Content** option is set to **HTML**) – can be either an expression or a text template. This defines custom HTML markup for the widget, therefore the value should be valid HTML as it will be inserted as HTML element content.

#### 2.1.2 HTML Attributes Section

* **Attributes** – sets the attributes to be assigned into the HTML element.

### 2.2 Events Tab

{{% alert color="info" %}}For more information, see [Event Actions](/refguide/on-click-event/#actions) in *Properties Common in the Page Editor*.{{% /alert %}}

### 2.3 Common Tab

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.


{{% alert color="info" %}}For more information, see [Event Actions](/refguide/on-click-event/#actions) in *Properties Common in the Page Editor*.{{% /alert %}}