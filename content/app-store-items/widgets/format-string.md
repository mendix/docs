---
title: "Format String"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Format String](https://appstore.home.mendix.com/link/app/264/) widget adds a user-defined string to your page, taking object attributes as input parameters.

The typical usage scenario is displaying multiple attributes as a single string.

### 1.1 Features

* Multiple attributes supported
* Retreive attributes one-deep
  
### 1.2 Limitations

* Setting the same attribute multiple times using different date/time formatting is not supported

## 2 Properties

### 2.1 Data Source Tab

The data source is used to add replacements for your display string. The values from the attributes will be used to replace placeholders.

When you create a new attribute via the **Edit Attributes Item** dialog box, you need to enter these properties:

* **Data source** tab
	* **Variable name** – identifies the attribute value; this name should be used in [Display string](#display-string) property
	* **Attribute** –  the value of this attribute will be used to replace `${your_Variable_Name}`, defined in the [Display string](#display-string) property
	* **Empty value replacement** – this string will be used when an attribute returns empty; note that this string is interpreted as HTML
* **Behavior** tab
	* **Date format** – shows the date and/or time according to your locale; **Relative** is time relative to the current date-time
	* **Date pattern** (optional) – the date pattern to override the date part according to dojo/date/locale (for more information, see [dojo/date/locale::format()](https://dojotoolkit.org/reference-guide/1.10/dojo/date/locale/format.html#id2))
	* **Time pattern** (optional) – the time pattern to override the time part according to dojo/date/locale (for more information, see [dojo/date/locale::format()](https://dojotoolkit.org/reference-guide/1.10/dojo/date/locale/format.html#id2))
	* **Render value as HTML** – escapes the string value when set to **No**
	* **Decimal precision** – the amount of decimals
	* **Group digits** – displays a numeric value with group digits

### 2.2 Behavior Tab

* **On click** – microflow to be invoked on click.
* **Stop propagation** – Stop handling click action, prevent click event to go to other components. This can be useful when you don't want other actions (like selection in a listview) to happen
* **Display string** {#display-string} – This string is the heart of the FormatString. It will be used as a template for the content. Use ${your_Variable_Name} to have the attribute value inserted in this string. Note that this string, except for the replacements, is interpreted as HTML.
* **Class string** – Use ${your_Variable_Name} to have the attribute value used in the className of the widget. See 'Display string'. If you want to use multiple classes, make sure you separate them with spaces.
* **Translatable strings** – Use translatable strings (instead of internal language pack)
* **Locale selection** – When you use the internal language pack, only a few languages are supported. Choose 'automatic' to let Dojo choose based on the application (with a fallback to 'en-us')

### 2.3 Customization

These are the values that you can change when you use 'Translatable Strings'. Note that the widget has default values for 'nl-nl', 'en-us' and 'en-gb'.

* String value for second
* String value for seconds
* String value for minute
* String value for minutes
* String value for hour
* String value for hours
* String value for day
* String value for days
* String value for week
* String value for weeks
* String value for month
* String value for months
* String value for year
* String value for years
* String value for from now
* String value for ago

## 3 Example usage

Let's say you have an attribute that contains a hyperlink to a website (eg http://mendix.com). The attribute is called Link

You want to show a link, it has to be a plain link. A simple HTML link

Here is how you do that:

* Add an attribute at 'Data Source'. Select the attribute Link
* Set the variable name to LinkVariable
* In Behavior is set the Display string to `<a href="${LinkVariable}" target="_blank">Link Text</a>`
