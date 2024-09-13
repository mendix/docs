---
title: "Format String"
deprecated: true
url: /appstore/widgets/format-string/
description: "Describes the configuration and usage of the Format String widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This widget is deprecated. For an alternative, see [Text](/refguide/text/) or [HTML Element](/appstore/widgets/htmlelement/) depending on your use case.
{{% /alert %}}

## Introduction

The [Format String](https://marketplace.mendix.com/link/component/264/) widget adds a user-defined string to your page, taking object attributes as input parameters.

### Typical Use Cases

Use this widget to display multiple attributes as a single string.

### Features

* Multiple attributes supported
* Retrieve attributes one-deep

### Limitations

* Setting the same attribute multiple times using different date/time formatting is not supported

## Properties

### Data Source Tab

The data source is used to add replacements for your display string. The values from the attributes will be used to replace placeholders.

When you create a new attribute via the **Edit Attributes Item** dialog box, you need to enter these properties:

* **Data source**
    * **Variable name**<a id="variable-name"></a> – identifies the attribute value; this name should be used in [Display string](#display-string) property
    * **Attribute**<a id="attribute"></a> – the value of this attribute will be used to replace `${your_Variable_Name}`, defined in the [Display string](#display-string) property
    * **Empty value replacement** – this string will be used when an attribute returns empty; note that this string is interpreted as HTML
* **Behavior**
    * **Date format** – shows the date and/or time according to your locale; **Relative** is time relative to the current date-time
    * **Date pattern** (optional) – the date pattern to override the date part according to dojo/date/locale (for more information, see [dojo/date/locale::format()](https://dojotoolkit.org/reference-guide/1.10/dojo/date/locale/format.html#id2))
    * **Time pattern** (optional) – the time pattern to override the time part according to dojo/date/locale (for more information, see [dojo/date/locale::format()](https://dojotoolkit.org/reference-guide/1.10/dojo/date/locale/format.html#id2))
    * **Render value as HTML** – escapes the string value when set to **No**
    * **Decimal precision** – the amount of decimals
    * **Group digits** – displays a numeric value with group digits

### Behavior Tab

* **On click** – the microflow to be invoked on click.
* **Stop propagation** – when enabled, the click action is stopped from being handled via prevention of the click event from going to other components (this can be useful when you do not want other actions like the selection in a list view to happen)
* **Display string**<a id="display-string"></a> – this string is the heart of the widget and is used as a template for the content
    * Use `${your_Variable_Name}` to have the attribute value inserted into this string
    * Note that except for the replacements, this string is interpreted as HTML
* **Class string** – use `${your_Variable_Name}` to have the attribute value used in the `className` of the widget (if you want to use multiple classes, make sure you separate them with spaces)
* **Translatable strings**<a id="translatable-strings"></a> – with this property, you can use translatable strings (instead of the internal language pack)
* **Locale selection** – when you use the internal language pack, only a few languages are supported – choose **Automatic** to let Dojo choose based on the application (with a fallback to **en-us**)

### Customization Tab

These are the values that you can change when you use [Translatable strings](#translatable-strings):

* **String value for second**
* **String value for seconds**
* **String value for minute**
* **String value for minutes**
* **String value for hour**
* **String value for hours**
* **String value for day**
* **String value for days**
* **String value for week**
* **String value for weeks**
* **String value for month**
* **String value for months**
* **String value for year**
* **String value for years**
* **String value for from now**
* **String value for ago**

{{% alert color="info" %}}
The widget has default values for **nl-nl**, **en-us**, and **en-gb**.
{{% /alert %}}

## Example Scenario

In this scenario, you have an attribute that contains a hyperlink to a website (for example, `https://mendix.com`). The attribute is called **Link**.

You want to show this link as a simple HTML link.

Here is how you do that:

1. Add **Link** as an [Attribute](#attribute) on the **Data Source** tab.
2. Enter *LinkVariable* for the [Variable name](#variable-name).
3. Set the [Display string](#display-string) to `<a href="${LinkVariable}" target="_blank">Link Text</a>` on the **Behavior** tab.
