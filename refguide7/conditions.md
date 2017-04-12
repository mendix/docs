---
title: "Conditions"
space: "Mendix 7 Reference Guide"
parent: "page-concepts"
---


In pages certain elements can be shown or hidden or made editable or read-only based on the value of an attribute and/or the roles of the user that is signed in. Using this feature you can reuse one page for different purposes. For example, a page can hide tab pages for people who have no rights to view or edit the information in those tab pages.

The following elements support conditional visibility or editability:

*   All widgets support conditional visibility
*   [Grid control bar buttons](control-bar) supports conditional visibility
*   [Table row](table-row), [tab page](tab-page), and [layout grid row](layout-grid) supports conditional visibility
*   Input widgets ([Text box](text-box), [Reference selector](reference-selector) etc.) support conditional editability

There are three kinds of conditions:

*   The value of an attribute of the enclosing data container. The attribute must be of type boolean or enumeration. For each value you specify whether the element is visible/editable. Upon entering the page and upon changing the condition attribute the conditions will be applied.
*   Based on an [expression](microflow-expressions). The expression must evaluate to a value of type boolean. The element is visible/editable when the expression evaluates to `true`.
*   Module roles. For each module you specify whether the element is visible or not.
*   Ignore security. Buttons are automatically hidden if security would prevent the user from executing the action. You can ignore this and show the button anyway. This is useful for application with anonymous users. Clicking a button for which you do not have the rights will then trigger a sign in page.

Module role conditions can only be used for visibility of table rows and tab pages. They cannot be used to make an input widget read-only or to hide buttons. To make an input widget conditionally editable based on roles, use security to give roles read/write access to attributes. For example, by not giving a role write access to an attribute the corresponding input widget will automatically turn read-only (i.e. not editable). To hide a button based on roles configure security of the underlying page or action. For example, by not giving a role create access 'New' buttons will be hidden.

## Context

### Show/enable element based on attribute value

By selecting this option the visibility or editability becomes conditional based on the value of the attribute that is selected.

<div class="alert alert-info">{% markdown %}

Let us say you have a boolean indicating whether a person wants to receive e-mail. You can create a check box to edit the value of this boolean. The row that asks for an e-mail address can be shown only if the check box is checked.

{% endmarkdown %}</div>

#### Attribute

This is the attribute on which the conditions are based. The attribute must be of type boolean or enumeration.

#### Conditions

For each value of the attribute you can specify whether the element is editable/visible.

### Show/enable element based on expression

By selecting this option the visibility or editability becomes conditional based on whether the enetered [expression](microflow-expressions) evaluates to `true` or `false`.

The expression result must be of type boolean. The expression might use the obejct of the enclosing data container available as a `$currentObject` variable.

Note that the expression is evaluated in the browser, and hence, we advise against using "secret" values (like access keys) in it. In particular, we disallow usages of [constants](constants). Also, client-side expressions currently do not support all the functions that are available in the microflows. Please refer to an autocomplete list to know what functions are supported in your version.

## Modules roles

### Show/enable element for selected module roles

By selecting this option the visibility or editability becomes conditional based on the module roles of the user that is signed in.

<div class="alert alert-info">{% markdown %}

Let us say you have a page that has a tab page containing current orders of a customer and a tab page containing an order history. You can hide the order history tab for certain roles so that you only need to build one page for different kinds of users.

{% endmarkdown %}</div>

#### Conditions

For each module role you can specify whether the table row or tab page is visible or not.

<div class="alert alert-warning">{% markdown %}

Do not rely on hiding tab pages and table rows for security! Also use domain model security to give roles appropriate access to data.

{% endmarkdown %}</div>

### Show/enable element for all module roles (only for some widgets)

Widgets triggering actions, e.g. action buttons, are automatically hidden if security would prevent the user from executing the action. You can overwrite this rule and show the widget anyway. This is useful for application with anonymous users. Clicking a button for which you do not have the rights will then trigger a sign in page. In the table below you can see what rights you need to have for the action to be accessible in the normal case.

| Action/widget type | Necessary rights |
| --- | --- |
| Call microflow action | Execute the microflow. |
| Show page action | Open the page. |
| Create button | Create objects and open the page. |
| Edit button | Open the page. |
| Delete button | Delete objects. |
