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

## 2 Installation

Import the widget to your project and add the Format String to a dataview on a page. Configure the properties to determine how the widget will behave in your application.
Features and limitations

    Supports multiple attributes
    Attributes can be retrieved one-deep
    Setting the same attribute multiple times using different date/time formatting is not supported.

Properties
Data source

The Data Source is used to add replacements for your Display string. The values from the attributes will be used to replace placeholders. See below for an example.
Property 	Description
Variable name 	Identifies the attribute value, this name should be used in 'Display string' property.
Attribute 	Value of this attribute will be used to replace ${your_Variable_Name}, defined in 'Display string' property
Empty value replacement 	This string will be used when an attribute returns empty. Note that this string is interpreted as HTML.
Date format 	Shows date and/or time according to locale of user. Relative is time relative to current datetime. (E.g. 3 hours from now)
Date pattern 	Optional, date pattern to override date part according to dojo/date/locale. See Dojo documentation
Time pattern 	Optional, time pattern to override time part according to dojo/date/locale. See Dojo documentation
Render value as HTML 	Escapes string value when set to false
Decimal precision 	Amount of decimals
Group digits 	Displays a numeric value with group digits
Behavior
Property 	Description
On click 	Microflow to be invoked on click.
Stop propagation 	Stop handling click action, prevent click event to go to other components. This can be useful when you don't want other actions (like selection in a listview) to happen
Display string 	This string is the heart of the FormatString. It will be used as a template for the content. Use ${your_Variable_Name} to have the attribute value inserted in this string. Note that this string, except for the replacements, is interpreted as HTML.
Class string 	Use ${your_Variable_Name} to have the attribute value used in the className of the widget. See 'Display string'. If you want to use multiple classes, make sure you separate them with spaces.
Translatable strings 	Use translatable strings (instead of internal language pack)
Locale selection 	When you use the internal language pack, only a few languages are supported. Choose 'automatic' to let Dojo choose based on the application (with a fallback to 'en-us')
Customization

These are the values that you can change when you use 'Translatable Strings'. Note that the widget has default values for 'nl-nl', 'en-us' and 'en-gb'.

    String value for second
    String value for seconds
    String value for minute
    String value for minutes
    String value for hour
    String value for hours
    String value for day
    String value for days
    String value for week
    String value for weeks
    String value for month
    String value for months
    String value for year
    String value for years
    String value for from now
    String value for ago

Example usage

    Let's say you have an attribute that contains a hyperlink to a website (eg http://mendix.com). The attribute is called Link
    You want to show a link, it has to be a plain link. A simple HTML link

Here is how you do that:

    Add an attribute at 'Data Source'. Select the attribute Link
    Set the variable name to LinkVariable
    In Behavior is set the Display string to:

    <a href="${LinkVariable}" target="_blank">Link Text</a>


