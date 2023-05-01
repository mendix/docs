---
title: "Create Button"
url: /refguide7/new-button/
---

{{% alert color="info" %}}

This button was removed in Mendix 7.17. Use a normal [Action button](/refguide7/action-button/) with the **Create object** action instead.

{{% /alert %}}

When the user presses the **Create** button, the Mendix application will create a new object and open a page to edit the new object.

## Button Properties

{{% snippet file="/static/_includes/refguide7/Caption+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tooltip+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Image+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Render+Mode+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Button+Style+Property.md" %}}

## Common Properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tab+index+Property.md" %}}

## General Properties

### Page

This property specifies the page that is opened when the end user presses this button. The end user can use this page to edit the newly created object before it is saved. This page should contain a data view connected to the same entity as this button.

See [Opening Pages](/refguide7/opening-pages/).

### Entity (Path)

Specifies which type of object will be created when the button is clicked. It is possible to create an object which has an association to an object in an enclosing data view or to the object passed as the page parameter. The association will be set automatically when the new object is created. Only one to one or one to many associations are supported.

## Visibility Properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Extended.md" %}}
