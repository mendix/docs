---
title: "Check box"
parent: "Input+Widgets"
space: "Reference Guide 5"
---


A check box is an [input widget](Input+Widgets) that can be used to display and edit boolean attributes. It will display a tick if the value is true and remain empty if it is false.

<div class="alert alert-info">{% markdown %}

![](attachments/4522261/14385223.png)

This checkbox might be used to indicate whether or not a user is a customer.

{% endmarkdown %}</div>

## Data source properties

### Attribute (path)

Many input widgets, like text boxes and drop-down widgets, can be connected to:

1.  an attribute of the entity of the data view that contains the widget
2.  an attribute of an entity associated with the data view entity by following one or more associations of type reference through the domain model.

In the first case we say the widget is connected to an attribute and in the second case to an attribute path.

<div class="alert alert-warning">{% markdown %}

An input widget connected to an attribute _path_ must be read-only. The Modeler will check this for you.

{% endmarkdown %}</div>

## Label properties

<div class="alert alert-info">{% markdown %}

Added in Mendix 5.18.0

{% endmarkdown %}</div>

A label can be used to described the purpose of the widget to the user. The label is shown next to the widget in the user interface. If a label is configured, the widget will be rendered in the browser wrapped in a form group. See [Bootstrap documentation](http://getbootstrap.com/css/#forms).

### Show label

This property determines whether the label is rendered and the widget is wrapped in a form group.

_Default value:_ No

### Label caption

This property is shown only when Show label is Yes. This property determines what text is rendered within a label.

## Editability properties

### Editable

The editable property indicates whether the end user will be able to change the value displayed by the widget.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Default</td><td class="confluenceTd">The value is editable if security allows it (i.e. if the user that is signed in has write rights to the selected attribute).<br class="atl-forced-newline"></td></tr><tr><td class="confluenceTd">Never<br class="atl-forced-newline"></td><td class="confluenceTd">The value is never editable.<br class="atl-forced-newline"></td></tr><tr><td class="confluenceTd">Conditional<br class="atl-forced-newline"></td><td class="confluenceTd">The value is editable if security allows it and the specified condition holds. (see below)<br class="atl-forced-newline"></td></tr></tbody></table>

_Default value:_ Default

### Condition

A widget can be made editable based on the value of an attribute of the enclosing data view. The attribute must be of type boolean or enumeration. For each value, you specify whether the widget is editable. Upon entering the page and upon changing the condition attribute the edit state of the widget will be updated.

Example: you don't have to ask for the marriage date if the end user indicates that he or she is not married.

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

## Events properties

### On change

The on-change property optionally specifies a microflow that will be executed when leaving the widget after the value has been changed.

### On change settings

The on change settings specify what parameters are passed to the microflow, whether a progress bar is shown and more.

See [Starting Microflows](Starting+Microflows).

### On enter

The on-enter property optionally specifies a microflow that will be executed when the widget is entered, either by using the tab key or by clicking it with the mouse.

### On enter settings

The on enter settings specify what parameters are passed to the microflow, whether a progress bar is shown and more.

See [Starting Microflows](Starting+Microflows).

### On leave

The on-leave property optionally specifies a microflow that will be executed when leaving the widget, either by using the tab key or by clicking another widget.

### On leave settings

The on leave settings specify what parameters are passed to the microflow, whether a progress bar is shown and more.

See [Starting Microflows](Starting+Microflows).

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

## Related articles

*   [Data view](Data+view)
*   [Attribute](Attributes)s
