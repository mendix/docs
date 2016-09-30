---
title: "New button"
space: "Reference Guide 6"
parent: "Button+Widgets"
---


When the user presses a new button, the Mendix application will create a new object and open a page to edit the new object.

## Button properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Render+Mode+Property.md %}

{% snippet Button+Style+Property.md %}

## Common properties

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

{% snippet Tab+index+Property.md %}

## General properties

### Page

This property specifies the page that is opened when the end user presses this button. The end user can use this page to edit the newly created object before it is saved. This page should contain a data view connected to the same entity as this button.

See [Opening Pages](Opening+Pages).

### Entity

<div class="alert alert-info">{% markdown %}

Replaced by the property 'EntityPath' in Mendix 6.3.

{% endmarkdown %}</div>

This property specifies the entity of which an object will be created when the user presses the button.

### Entity (path)

<div class="alert alert-info">{% markdown %}

Added in Mendix 6.3.

{% endmarkdown %}</div>

Specifies which type of object will be created when the button is clicked. It is possible to create an object which has an association to an object in an enclosing data view or to the object passed as the caller of the page. The association will be set automatically when the new object is created. Only one to one or one to many associations are supported.

## Visibility properties

<div class="alert alert-info">{% markdown %}
Conditional visibility settings were added in version 5.10.0.
{% endmarkdown %}</div>

{% snippet Visibility+Property+With+Module+Roles+Extended.md %}
