---
title: "Grid action button"
parent: "Control+Bar"
space: "Reference Guide 5"
---


<div class="alert alert-info">{% markdown %}

Added in Mendix 5.17\. It replaced the microflow button.

{% endmarkdown %}</div>

An action button can call a microflow, open a page or do nothing. 

Common properties

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

## Events

### On click

This property specifies what action is executed when the element is clicked. There are three options:

<table><thead><tr><th class="confluenceTh">Action</th><th colspan="1" class="confluenceTh">Effect</th></tr></thead><tbody><tr><td class="confluenceTd">Call a microflow</td><td colspan="1" class="confluenceTd">The specified microflow is executed.</td></tr><tr><td class="confluenceTd">Open a page</td><td colspan="1" class="confluenceTd">The specified page is opened.</td></tr><tr><td colspan="1" class="confluenceTd">Do nothing</td><td colspan="1" class="confluenceTd">Nothing happens. This is useful for setting up a page without defining the underlying functionality yet.</td></tr></tbody></table>

_Default value:_ Do nothing

### Page (only for "Open a page")

The [page](Page) that should be opened.

See [Opening Pages](Opening+Pages).

### Microflow (only for "Call a microflow")

The [microflow](Microflow) that should be executed.

### Microflow settings (only for "Call a microflow")

The microflow settings specify what parameters will be passed to the microflow, whether to show a progress bar or not, and more.

See [Starting Microflows](Starting+Microflows).

## General properties

### Caption

<div class="alert alert-info">{% markdown %}

Changed in Mendix 5.19: button captions are based on templates with parameters that will be replaced by attribute values.

{% endmarkdown %}</div>

The caption defines the text that will be shown. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera. Note that to use template parameters the widget must be placed in a context of an entity, e.g. inside a [data view](Data+view) or [list view](List+view). The parameters will be replaced by the values of the attributes.

_Before 5.19:_

This property indicates what text will be shown on this widget or part of the widget. This is a translatable text. See [Translatable Texts](Translatable+Texts).

### Tooltip

<div class="alert alert-info">{% markdown %}

Added in Mendix 5.8.0.

{% endmarkdown %}</div>

The tooltip property determines the text you will see in the tooltip that appears when you hover over the button. The tooltip text is translatable. See [Translatable Texts](Translatable+Texts). If the tooltip is not specified, no tooltip will be shown when hovering over the button.

### Image

<div class="alert alert-info">{% markdown %}

Replaced by the property 'Icon' in Mendix 5.16.

{% endmarkdown %}</div>

This property indicates which image will be shown in front of the caption of the button.

### Icon

<div class="alert alert-info">{% markdown %}

Added in Mendix 5.16.

{% endmarkdown %}</div>

The icon property determines the icon that will be shown in front of the caption of the button. There are three options: no icon, a glyph icon or a (bitmap) image. Glyph icons come from the Bootstrap Halflings collection. The advantages of a glyph icon over a bitmap image are that glyphs are scalable, look sharp on high-resolution screens and their color can be changed by changing the font color. The advantage of an image icon is that it can have multiple colors.

### Button Style

<div class="alert alert-info">{% markdown %}

Added in Mendix 5.18.

{% endmarkdown %}</div>

This property applies a predefined styling to the button.

### Is default button

This property indicates whether this button is the default button of the grid or reference set selector. A grid or reference set selector can only have one default button. The default button is triggered when clicking or double clicking a row. Whether a click or a double click triggers it depends on the 'default button trigger' property of the [Data grid](Data+grid), [Template grid](Template+grid) or [Reference set selector](Reference+set+selector).

<div class="alert alert-info">{% markdown %}

The default button is marked with a "(default)" suffix in the Modeler, so that you can easily spot it. In the screenshot below the Edit button is the default button and the Delete button has a button style 'Warning'.
![](attachments/4522312/14385317.png)

{% endmarkdown %}</div>

_Default value:_ False

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

Module role conditional visibility is split into three subcategories.

<table><thead><tr><th class="confluenceTh">Setting</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">for applicable roles</td><td class="confluenceTd">All access determined by page and microflow access is maintained. For instance; if the user does not have access to the microflow triggered by a certain microflow button, that button will remain hidden from that user.</td></tr><tr><td class="confluenceTd">for all roles</td><td class="confluenceTd">This setting overrides the setting above, rendering the element visible to all users, regardless of security settings. Note that this does not provide the user access to the restricted data, it merely unveils the element. In the example above, the microflow button would become visible, but clicking it would still result in a log-in page or error.&nbsp;</td></tr><tr><td class="confluenceTd">for selected roles</td><td class="confluenceTd">The widget can be made visible to a subset of the user roles available in your application. When activated, this setting will render the widget invisible to all users that are not linked to one of the selected user roles. Please note that this does not override project security. Any restrictions due to microflow, form, or entity access will remain in effect.</td></tr></tbody></table>
