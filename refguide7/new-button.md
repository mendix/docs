---
title: "Create Button"
space: "Mendix 7 Reference Guide"
parent: "button-widgets"
---

When the user presses the **Create** button, the Mendix application will create a new object and open a page to edit the new object.

## Button Properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Render+Mode+Property.md %}

{% snippet Button+Style+Property.md %}

## Common Properties

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

{% snippet Tab+index+Property.md %}

## General Properties

### Page

This property specifies the page that is opened when the end user presses this button. The end user can use this page to edit the newly created object before it is saved. This page should contain a data view connected to the same entity as this button.

See [Opening Pages](opening-pages).

### Entity (Path)

Specifies which type of object will be created when the button is clicked. It is possible to create an object which has an association to an object in an enclosing data view or to the object passed as the caller of the page. The association will be set automatically when the new object is created. Only one to one or one to many associations are supported.

## Visibility Properties

{% snippet Visibility+Property+With+Module+Roles+Extended.md %}
