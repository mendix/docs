---
title: "New button"
parent: "button-widgets"
---


When the user presses a new button, the Mendix application will create a new object and open a page to edit the new object.

## Button properties

{{% snippet file="refguide6/Caption+Property.md" %}}

{{% snippet file="refguide6/Tooltip+Property.md" %}}

{{% snippet file="refguide6/Image+Property.md" %}}

{{% snippet file="refguide6/Render+Mode+Property.md" %}}

{{% snippet file="refguide6/Button+Style+Property.md" %}}

## Common properties

{{% snippet file="refguide6/Name+Property.md" %}}

{{% snippet file="refguide6/Class+Property.md" %}}

{{% snippet file="refguide6/Style+Property.md" %}}

{{% snippet file="refguide6/Tab+index+Property.md" %}}

## General properties

### Page

This property specifies the page that is opened when the end user presses this button. The end user can use this page to edit the newly created object before it is saved. This page should contain a data view connected to the same entity as this button.

See [Opening Pages](opening-pages).

### Entity

{{% alert type="info" %}}

Replaced by the property 'EntityPath' in Mendix 6.3.

{{% /alert %}}

This property specifies the entity of which an object will be created when the user presses the button.

### Entity (path)

{{% alert type="info" %}}

Added in Mendix 6.3.

{{% /alert %}}

Specifies which type of object will be created when the button is clicked. It is possible to create an object which has an association to an object in an enclosing data view or to the object passed as the caller of the page. The association will be set automatically when the new object is created. Only one to one or one to many associations are supported.

## Visibility properties

{{% alert type="info" %}}
Conditional visibility settings were added in version 5.10.0.
{{% /alert %}}

{{% snippet file="refguide6/Visibility+Property+With+Module+Roles+Extended.md" %}}
