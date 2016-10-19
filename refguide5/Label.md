---
title: "Label"
parent: "Common+Widgets"
space: "Reference Guide 5"
---


A label shows static text, which intent is to describe the purpose of a specific widget to the user.

<div class="alert alert-info">{% markdown %}

![](attachments/4522280/4751438.jpg)
A label placed in a cell with render mode header.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

For input widgets it is recommended to use the more powerful label property to describe their purpose. For more information

 [label property](Text+box#label-properties) to describe their purpose.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

The [text widget](Text) is a more correct way to show text to the user. It also provides more features, e.g. text templates, and generates semantically correct HTML.

{% endmarkdown %}</div>

## General properties

### Caption

<div class="alert alert-info">{% markdown %}

Changed in Mendix 5.19: button captions are based on templates with parameters that will be replaced by attribute values.

{% endmarkdown %}</div>

The caption defines the text that will be shown. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera. Note that to use template parameters the widget must be placed in a context of an entity, e.g. inside a [data view](Data+view) or [list view](List+view). The parameters will be replaced by the values of the attributes.

_Before 5.19:_

This property indicates what text will be shown on this widget or part of the widget. This is a translatable text. See [Translatable Texts](Translatable+Texts).

### Render mode

<div class="alert alert-info">{% markdown %}
Added in Mendix 5.4, removed in Mendix 5.19\. All labels rendered as a heading were converted to a [text widget](Text).
{% endmarkdown %}</div>

The render mode determines what the label will look like in the web browser.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Normal</td><td class="confluenceTd">The label will have a simple rendering (&lt;label&gt; tag in HTML)</td></tr><tr><td class="confluenceTd">Heading 1</td><td class="confluenceTd">The label will be rendered as a large heading (&lt;h1&gt; tag in HTML)</td></tr><tr><td class="confluenceTd">...</td><td class="confluenceTd">...</td></tr><tr><td class="confluenceTd">Heading 6</td><td class="confluenceTd">The label will be rendered as a small heading (&lt;h6&gt; tag in HTML)</td></tr></tbody></table>

_Default value:_ Normal

## Visibility properties

<div class="alert alert-info">{% markdown %}
Conditional visibility settings were added in version 5.10.0.
{% endmarkdown %}</div>

### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met. 

## Attribute Condition

### Attribute

When checked, this setting hides the widget unless a particular attribute has a certain value. Only boolean and enumeration attributes can be assigned to this purpose.

A practical example would be a web shop in which the user must submit both billing and delivery information. In this case you might not wish to bother the user with a second set of address input fields unless he or she indicates that the billing and delivery address are not the same. You can accomplish this by making the delivery address fields conditionally visible based on the boolean attribute SameBillingAndDeliveryAddress.

### Module roles

The widget can be made visible to a subset of the user roles available in your application. When activated, this setting will render the widget invisible to all users that are not linked to one of the selected user roles. Please note that this does not override project security. Any restrictions due to microflow, form, or entity access will remain in effect.

## Common properties

### Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class '`mx-name-{NAME}`', which can be useful for [Selenium testing](/howto50/Selenium+Support).

### Class

The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget.

<div class="alert alert-warning">{% markdown %}

Note that the styling is applied in the following order:

1.  Default styling defined by the theme the project uses.
2.  The 'Class' property of the widget.
3.  The 'Style' property of the widget.

{% endmarkdown %}</div>

### Style

The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied _after_ the class.

<div class="alert alert-info">{% markdown %}

background-color:blue;
This will result in a blue background

{% endmarkdown %}</div>
