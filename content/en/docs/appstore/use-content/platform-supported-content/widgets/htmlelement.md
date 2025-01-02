---
title: "HTML Element"
url: /appstore/widgets/htmlelement/
description: "Describes the configuration and usage of the HTML Element widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [HTML Element](https://marketplace.mendix.com/link/component/204843) widget allows a developer to create custom HTML elements to build custom structures, visualizations, or interactions. The widget can also execute advanced text formatting, build custom UI components, and embed HTML.

The HTML Element widget contains settings to define the HTML tag, HTML attributes, events, and repeat elements. This widget can be nested and combined with other widgets.

### Features

Almost any arbitrary custom HTML configuration can be used with HTML Element. Here are some example outputs:

* Embedded video:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/htmlelement/sample-embedded-html.png" class="no-border" >}}

* Text formatting:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/htmlelement/sample-formatting-text.png" class="no-border" >}}

* Building a custom UI component:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/htmlelement/sample-custom-ui.png" class="no-border" >}}

* Custom-tailored HTML:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/htmlelement/sample-tailored-html.png" class="no-border" >}}

## Configuration

To configure this widget, follow these steps:

1. In Studio Pro, place the HTML Element widget where you want your custom HTML Element to be visible.
2. Double-click the HTML Element widget to open the **Edit HTML Element** dialog box.
3. Configure the widget using the properties described in the sections below.

### General Tab

#### HTML Element Section

* **Tag name** – sets the type of the element (such as div, span, or img). If you would like to add a custom name for the element, select **Use custom name** in the drop-down menu.
* **Repeat element**
    * **Yes** – if selected, repeats the element for each item in the data source assigned.
    * **No** (default) – if selected, the element is rendered once. 
* **Content**
    * **Container for widgets** (default) – if selected, the widget acts as a container for other widgets.
    * **HTML** – if selected, uses custom HTML markup as defined in the HTML settings. 
* **HTML** (Visible if **Content** option is set to **HTML**) – can be either an expression or a text template. This defines custom HTML markup for the widget, therefore the value should be valid HTML as it will be inserted as HTML element content.

#### HTML Attributes Section

* **Attributes** – sets the attributes to be assigned into the HTML element.

### Events Tab

{{% alert color="info" %}}For more information, see [Event Actions](/refguide/on-click-event/#actions) in *Properties Common in the Page Editor*.{{% /alert %}}

### Common Tab

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

{{% alert color="info" %}}For more information, see [Event Actions](/refguide/on-click-event/#actions) in *Properties Common in the Page Editor*.{{% /alert %}}

## Advanced Configuration

### HTML Sanitization

#### Sanitization Configuration

This setting stores the [DOMPurify](https://cure53.de/purify) library configuration in JSON. Use this setting to fine-tune how the sanitization process handles input HTML. You can block tags, whitelist dangerous tags and values, and more.

For example, here is a short config that disallows all `<style>`:

```json
{
  "FORBID_TAGS": [
    "style"
  ]
}
```

Visit the DOMPurify project [README](https://github.com/cure53/DOMPurify/blob/main/README.md) for more examples and available settings.

{{% alert color="warning" %}}
This setting requires advanced knowledge of XML/HTML to properly configure sanitization. Incorrect configuration can result in corrupted and malfunctioning widget content.
{{% /alert %}}

{{% alert color="info" %}}
Because this setting value should be a valid JSON, not all DOMPurify settings (such as functions, RegExps, and other complex types) are allowed.
{{% /alert %}}
