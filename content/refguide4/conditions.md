---
title: "Conditions"
parent: "form-concepts"
---
In forms certain elements can be shown or hidden or made editable or read-only based on the value of an attribute and/or the roles of the user that is signed in. Using this feature you can reuse one form for different purposes. For example, a form can hide tab pages for people who have no rights to view or edit the information in those tab pages.

The following elements support conditional visibility or editability:

*   [Table Row](table-row) supports conditional visibility
*   [Tab Page](tab-page) supports conditional visibility
*   Input widgets ([Text box](text-box), [Reference Selector](reference-selector) etc.) support conditional editability
*   [Grid control bar buttons](control-bar), [data view control bar buttons](data-view-control-bar) and [microflow triggers](microflow-trigger).

There are three kinds of conditions:

*   The value of an attribute of the enclosing data view. The attribute must be of type boolean or enumeration. For each value you specify whether the element is visible/editable. Upon entering the form and upon changing the condition attribute the conditions will be applied.
*   Module roles. For each module you specify whether the element is visible or not.
*   Ignore security. Buttons are automatically hidden if security would prevent the user from executing the action. You can ignore this and show the button anyway. This is useful for application with anonymous users. Clicking a button for which you do not have the rights will then trigger a sign in form.

Module role conditions can only be used for visibility of table rows and tab pages. They cannot be used to make an input widget read-only or to hide buttons. To make an input widget conditionally editable based on roles, use security to give roles read/write access to attributes. For example, by not giving a role write access to an attribute the corresponding input widget will automatically turn read-only (i.e. not editable). To hide a button based on roles configure security of the underlying form or action. For example, by not giving a role create access 'New' buttons will be hidden.

## Attribute

### Make element conditionally visible/editable based on attribute value

By checking this box the visibility or editability becomes conditional based on the attribute that is selected.

{{% alert type="info" %}}

Let us say you have a boolean indicating whether a person wants to receive e-mail. You can create a check box to edit the value of this boolean. The row that asks for an e-mail address can be shown only if the check box is checked.

{{% /alert %}}

### Attribute

This is the attribute on which the conditions are based. The attribute must be of type boolean or enumeration.

### Conditions

For each value of the attribute you can specify whether the element is editable/visible.

## Modules roles (only for table rows and tab pages)

### Make tab page/table row conditionally visible based on module roles

By checking this box the visibility becomes conditional based on the module roles of the user that is signed in.

{{% alert type="info" %}}

Let us say you have a form that has a tab page containing current orders of a customer and a tab page containing an order history. You can hide the order history tab for certain roles so that you only need to build one form for different kinds of users.

{{% /alert %}}

### Conditions

For each module role you can specify whether the table row or tab page is visible or not.

{{% alert type="warning" %}}

Do not rely on hiding tab pages and table rows for security! Also use domain model security to give roles appropriate access to data.

{{% /alert %}}

## Ignore security (only for buttons)

### Show the button even if security says it should be hidden

Buttons are automatically hidden if security would prevent the user from executing the action. You can ignore this and show the button anyway. This is useful for application with anonymous users. Clicking a button for which you do not have the rights will then trigger a sign in form. In the table below you can see what rights you need to have for the button to be visible in the normal case.

| Button type | Necessary rights |
| --- | --- |
| Microflow button | Execute the microflow. |
| New button | Create objects and open the form. |
| Edit button | Open the form. |
| Delete button | Delete objects. |

The visibility settings are visualized on the button.

| Icon | Meaning |
| --- | --- |
| None | The visibility follows the default rules: buttons are hidden if security dictates this. |
| ![](attachments/4194423/4325428.png) | The button is visible even if security settings would normally hide it. It can still be conditionally visible based on an attribute. This is not visualized separatedly. |
| ![](attachments/4194423/4325430.png) | The button's visibility is based on the value of an attribute. |
