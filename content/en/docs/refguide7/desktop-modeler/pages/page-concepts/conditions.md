---
title: "Conditions"
url: /refguide7/conditions/
---

## 1 Overview

In pages, certain elements can be shown, hidden, made editable, or made read-only based on the value of an attribute and/or the roles of the user that is signed in. Using this feature, you can reuse one page for different purposes. For example, a page can hide tab pages for users  who have no rights to view or edit the information in those tab pages.

The following elements support conditional visibility:

* All the widgets
* [Grid control bar buttons](/refguide7/control-bar/)
* [Table rows](/refguide7/table-row/), [tab pages](/refguide7/tab-page/), and [layout grid rows](/refguide7/layout-grid/)

The following elements support conditional editability:

* Input widgets ([text box](/refguide7/text-box/), [reference selector](/refguide7/reference-selector/), etc.)

There are four kinds of conditions:

* The value of an attribute of the enclosing data container
  * The attribute must be of type Boolean or enumeration
  * For each value, you specify whether the element is visible/editable
  * Upon entering the page and changing the condition attribute, the conditions will be applied
* A condition based on an [expression](/refguide7/expressions/)
 * The expression must evaluate to a value of the Boolean type
  * The element is visible/editable when the expression evaluates to `true`
* Module roles
 * For each module you specify whether the element is visible or not.
* Ignoring security
 * Buttons are automatically hidden if security prevents the user from executing the action
 * You can ignore this and show the button anyway. This is useful for application with anonymous users. Clicking a button for which you do not have the rights will then trigger a sign in page.

Module role conditions can only be used for the visibility of table rows and tab pages. They cannot be used to make an input widget read-only or to hide buttons. To make an input widget conditionally editable based on roles, use security to give roles read and write access to attributes. For example, by not giving a role write access to an attribute, the corresponding input widget will automatically turn read-only (as in, not editable). To hide a button based on roles, configure the security of the underlying page or action (for example, by not giving a role create access, **New** buttons will be hidden).

## 2 Context

### 2.1 Show/Enable Element Based on Attribute Value

By selecting this option, visibility or editability becomes conditional based on the value of the attribute that is selected.

For example, if you have a Boolean indicating whether a user wants to receive email, you can create a check box to edit the value of this Boolean. The row that asks for an email address can be shown only if the check box is checked.

#### 2.1.1 Attribute

This is the attribute on which the conditions are based. The attribute must be of the Boolean or Enumeration type.

#### 2.1.2 Conditions

For each value of the attribute, you can specify whether the element is editable or visible.

### 2.2 Show/Enable Element Based on Expression

By selecting this option, visibility or editability becomes conditional based on whether the entered [microflow expression](/refguide7/expressions/) evaluates to `true` or `false`.

The expression result must be of the Boolean type. The expression can use the obejct of the enclosing data container available as a `$currentObject` variable.

{{% alert color="warning" %}}

The expression is evaluated in the browser, so we advise against using "secret" values (like access keys) in it. In particular, we disallow usages of [constants](/refguide7/constants/). Also, client-side expressions currently do not support all the functions that are available in the microflows. Please refer to an autocomplete list to know what functions are supported in your version.

{{% /alert %}}

## 3 Modules Roles

### 3.1 Show/Enable Element for Selected Module Roles

By selecting this option, visibility or editability becomes conditional based on the module roles of the user who is signed in.

For example, if you have a page that has a tab page containing the current orders of a customer and a tab page containing an order history, you can hide the order history tab for certain roles so that you only need to build one page for different kinds of users.

#### 3.1.1 Conditions

For each module role, you can specify whether the table row or tab page is visible or not.

{{% alert color="warning" %}}

Do not rely on hiding tab pages and table rows for security! Also, use domain model security to give roles the appropriate access to data.

{{% /alert %}}

### 3.2 Show/Enable Element for All Module Roles (for Some Widgets)

Widgets triggering actions (for example, action buttons) are automatically hidden if security prevents the user from executing the action. You can overwrite this rule and show the widget anyway, which is useful for an app that has anonymous users. Clicking a button for which you do not have the rights will then trigger a sign-in page.

In this table, you can see what rights you need to have for the action to be accessible in the normal case:

| Action/Widget Type | Necessary Rights |
| --- | --- |
| Call microflow action | Execute the microflow. |
| Show page action | Open the page. |
| Create button | Create objects and open the page. |
| Edit button | Open the page. |
| Delete button | Delete objects. |

