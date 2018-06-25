---
title: "Create Button"
parent: "button-widgets"
---

{{% alert type="info" %}}

This button was removed in Mendix 7.17. Use a normal [Action button](action-button) with "Create object" action instead.

{{% /alert %}}

When the user presses the **Create** button, the Mendix application will create a new object and open a page to edit the new object.

## Button Properties

{{% snippet file="refguide/Caption+Property.md" %}}

{{% snippet file="refguide/Tooltip+Property.md" %}}

{{% snippet file="refguide/Image+Property.md" %}}

{{% snippet file="refguide/Render+Mode+Property.md" %}}

{{% snippet file="refguide/Button+Style+Property.md" %}}

## Common Properties

{{% snippet file="refguide/Name+Property.md" %}}

{{% snippet file="refguide/Class+Property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

{{% snippet file="refguide/Tab+index+Property.md" %}}

## General Properties

### Page

This property specifies the page that is opened when the end user presses this button. The end user can use this page to edit the newly created object before it is saved. This page should contain a data view connected to the same entity as this button.

See [Opening Pages](opening-pages).

### Entity (Path)

Specifies which type of object will be created when the button is clicked. It is possible to create an object which has an association to an object in an enclosing data view or to the object passed as the page parameter. The association will be set automatically when the new object is created. Only one to one or one to many associations are supported.

## Visibility Properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Extended.md" %}}
