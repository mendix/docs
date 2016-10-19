---
title: "Link button"
parent: "Button+Widgets"
space: "Reference Guide 5"
---


Pressing a link button can trigger a variety of actions, some of which are specific to mobile devices.

## Button properties

### Caption

<div class="alert alert-info">{% markdown %}

Changed in Mendix 5.19: button captions are based on templates with parameters that will be replaced by attribute values.

{% endmarkdown %}</div>

The caption defines the text that will be shown. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera. Note that to use template parameters the widget must be placed in a context of an entity, e.g. inside a [data view](Data+view) or [list view](List+view). The parameters will be replaced by the values of the attributes.

_Before 5.19:_

The caption can be set to either a literal value, or an attribute value. A literal caption specifies a translatable text. See [Translatable Texts](Translatable+Texts). An attribute caption specifies a path to an attribute. The path starts at the entity of the entity widget in which this widget is contained.

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

### Render mode

This property indicates how the button is rendered.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Button</td><td class="confluenceTd">The trigger is rendered as a button.</td></tr><tr><td class="confluenceTd">Link</td><td class="confluenceTd">The trigger is rendered as a hyperlink.</td></tr></tbody></table>

_Default value:_ Button

### Button Style

<div class="alert alert-info">{% markdown %}

Added in Mendix 5.18.

{% endmarkdown %}</div>

This property applies a predefined styling to the button.

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

### Tab index

The tab index influences the order in which the end user navigates through the page using the tab key. By default tab indices are zero and the tab order is determined automatically by the client system. A value of minus one (-1) means that the widget will be skipped when tabbing through the page.

_Default value:_ 0

## General properties

### Link type

This specifies the type of action triggered when pressing the button. The following table shows the options.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Web</td><td class="confluenceTd">Navigate to a web site URL.</td></tr><tr><td class="confluenceTd">Email</td><td class="confluenceTd">Compose an e-mail.</td></tr><tr><td class="confluenceTd">Call</td><td class="confluenceTd">Start a phone call.</td></tr><tr><td class="confluenceTd">Text</td><td class="confluenceTd">Send a text message.</td></tr></tbody></table>

_Default value:_ Web

### Address

The address property is used differently depending on the chosen link type. It is used either as a URL (Web), as an email address (Email), or as a phone number (Call/Text).

The address can be set to either a literal value, or an attribute value.

### Address value

If a literal value is chosen for the address, you can enter the value here.

### Address attribute

If an attribute is chosen for the address, you can select the attribute here. An address attribute specifies a path to an attribute. The path starts at the entity of the data view in which the link button is contained.

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
