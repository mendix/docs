---
title: "Properties Common for Widgets"
parent: "pages"
menu_order: 120
tags: ["studio pro", "widget properties", "properties", "common", "widget"]
#Common Section and Visibility section anchors are used in links of common-section-link and visibility-section-link snippets. If moving or renaming them, do not forget to update snippets.
---

## 1 Introduction

These are properties that are shared by many widgets. For a complete list of properties, take a look at the relevant widget.

## 2 Behavior Section

### 2.1 Required 

This property indicates whether this widget must be filled in by the end-user or not. If set to true, this widget can not be left empty and a message will be shown if the end-user presses the *Save* button.

_Default value:_ False

### 2.2 Required Message 

This property determines the message that is shown to the end-user if the widget is empty and the *Required* property is set to true. This is a translatable text. For more information,  see [Translatable Texts](translatable-texts).

{{% alert type="info" %}}

For example, if an address field is required, the required message for the text box of the address could be something like "The address is required."

{{% /alert %}}

## 3 Common Section {#common-properties}

### 3.1 Name {#name}

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class `mx-name-{NAME}`, which can be useful for [Selenium testing](/howto7/integration/selenium-support).

### 3.2 Tab Index{#tab-index}

The tab index influences the order in which the end-user navigates through the page using the tab key. By default tab indices are zero and the tab order is determined automatically by the client system. A value of minus one (-1) means that the widget will be skipped when tabbing through the page.

_Default value:_ 0

{{% alert type="info" %}}Tab index is not supported on native mobile pages.{{% /alert %}}

### 3.3 Class {#class}

The class property allows you to specify one or more cascading style sheet (CSS) classes for the widget. The classes should be separated by a space. The classes will be applied to the widget in the browser and the widget will get the corresponding styling. The classes should be classes in the theme that is used in the project. It overrules the default styling of the widget.

Styling is applied in the following order:<br />
<br />
1) the default styling defined by the theme the project uses<br />
2) the `Class` property of the widget<br />
3) the `Style` property of the widget.

You can see which widgets in a page have styling applied via the class or style property by clicking the <strong>Show styles</strong> button.

![](attachments/common-widgets-properties/show-styles.png)

### 3.4 Style {#style}

The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied *after* the class. For example:<br />
<br />
<code>background-color:lightblue; color:red;</code><br />
<br />
will result in red text on a blue background:

![](attachments/common-widgets-properties/style-example.png)

You can see which widgets in a page have styling applied via the style or class property by clicking the <strong>Show styles</strong> button.

## 4 Data Source Section {#data-source}

### 4.1 Attribute (Path)

#### 4.1.1 Attribute Input Widgets

With the following widgets, the Attribute (Path) specifies the attribute which is being changed (or displayed) by the widget:

*   [Text Box](text-box)
*   [Text Area](text-area)
*   [Drop Down](drop-down)
*   [Check Box](check-box)
*   [Radio Buttons](radio-buttons)
*   [Date Picker](date-picker)

The attribute can be one of the following:

1. An attribute of the entity of the data view that contains the widget.

2. An attribute of an entity associated with the data view entity by following one or more associations of type reference through the domain model.

In the first case we say the widget is connected to an **attribute** and in the second case to an **attribute path**.

{{% alert type="info" %}}
In Mendix 8.0, an input widget connected to an **attribute path** must be read-only. Studio Pro will check this for you.

In Mendix 8.1 and above, you can edit attributes presented in input widgets over a path.
{{% /alert %}}

#### 4.1.2 Association Input Widgets

For widgets which manipulate associations, the Attribute (Path) specifies an attribute which is from an entity which is reachable from the current data view using an association. This applies to the following input widgets:

*   [**Reference Selector**](reference-selector)
*   [**Reference Set Selector**](reference-set-selector)
*   [**Input Reference Set Selector**](input-reference-set-selector)

For these widgets, only an **Attribute path** can be selected. In other words, the selected attribute must be from an entity associated with the data view entity by following an association, of the type which matches the widget, through the domain model.

{{% alert type="info" %}}
For these widgets you are selecting an association to another object. The attribute should therefore indicate uniquely to the end-user which object is being selected.
{{% /alert %}}

The attribute can be of one of the following [data types](data-types):

* Autonumber
* Date and Time
* Decimal
* Enumeration
* Integer
* Long
* String

## 5 Visibility Section {#visibility-properties}

### 5.1 Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met.

{{% todo %}}[Investigate the difference between DEFAULT and ALWAYS - If a widget is inside an invisible widget, you cannot make it display by choosing ALWAYS?]{{% /todo %}}

#### 5.1.1 Context

The widget can be made visible only if the object of the data view that contains the widget satisfies the specified criteria.

A practical example would be a web shop in which the user must submit both billing and delivery information. In this case, you might not wish to bother the user with a second set of address input fields unless they indicate that the billing address and delivery address are not the same. You can accomplish this by making the delivery address fields conditionally visible based on the Boolean attribute `SameBillingAndDeliveryAddress`.

##### Based on Attribute Value {#visibility-based-on-attribute-value}

When selected, this shows the widget while a particular attribute has a certain value. Only Boolean and enumeration attributes can be used for this purpose.

##### Based on Expression {#visibility-based-on-expression}

When selected, this shows the widget while a provided [expression](expressions) evaluates to true. The object of the containing data view is available inside an expression as a `$currentObject` variable. In Mendix 8.1 and above, the expression can access objects of all the data containers enclosing that data container widget. These objects are available under the name of the widget they originate from (for example, `$dataView1`).

Note that the expression is evaluated in the browser, and hence, we advise against using "secret" values (like access keys) in it. In particular, we disallow usages of [constants](constants). Also, client-side expressions currently do not support all the functions that are available in the microflows. Please refer to an autocomplete list to know what functions are supported in your version.

#### 5.2.1 Module Roles

The widget can be made visible to a subset of the user roles available in your application. When activated, this setting will render the widget invisible to all users that are not linked to one of the selected user roles.

## 6 Editability Section{#editability}

### 6.1 Editable

The editable property indicates whether the end-user will be able to change the value displayed by the widget.

| Value       | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Default     | The value is editable if security allows it (as in, if the user that is signed in has write rights to the selected attribute). |
| Never       | The value is never editable.                                 |
| Conditional | The value is editable if the specified condition holds. (see below) |

*Default value*: Default

### 6.2 Condition

The widget can be made editable only if the object of the data view that contains the widget satisfies the specified criteria.

For example, imagine you are creating a personal details form in which the end-user must enter their marital status. In this case, you might wish to disable the input of a marriage date until the end-user indicates that they are married.

#### 6.2.1 Based on Attribute Value

When selected, this enables the widget while a particular attribute has a certain value. Only Boolean and enumeration attributes can be used for this purpose.

#### 6.2.2 Based on Expression

When selected, this enables the widget while a provided [expression](expressions) evaluates to true. The object of the containing data view is available inside an expression as a `$currentObject` variable.

Note that the expression is evaluated in the browser, and hence, we advise against using "secret" values (like access keys) in it. In particular, we disallow usages of [constants](constants). Also, client-side expressions currently do not support all the functions that are available in the microflows. Please refer to an autocomplete list to know what functions are supported in your version.

### 6.2.3 Read-Only Style

This property determines how the widget is rendered if it is read-only. 

| Value                       | Description |
|-----------------------------|-------------|
| Based on data view          | Set to `Control` or `Text` by the containing data view. *(Default value for widgets inside a data view)*
| Not enclosed by a data view | Defaults to `Text`. *(Default value for widgets outside a data view)*
| Inherited from snippet call | Set to `Control` or `Text` by the containing data view of the snippet call, or `Text` when the snippet call is not enclosed by a data view. *(Default value for widgets outside a data view inside a snippet)*
| Control                     | Widget is displayed but disabled so the value cannot be modified.
| Text                        | Widget is replaced by a textual representation of the value.

{{% alert type="info" %}}Read-only style is not supported on native mobile pages.{{% /alert %}}

## 7 Label Section {#label}

A label can be used to described the purpose of the widget to the user. The label is shown next to the widget in the user interface. If a label is configured, the widget will be rendered in the browser wrapped in a form group. See [Bootstrap documentation](http://getbootstrap.com/css/#forms).

### 7.1 Show Label

This property determines whether the label is rendered and the widget is wrapped in a form group.

_Default value:_ No

### 7.2 Label Caption

This property is shown only when Show label is Yes. This property determines what text is rendered within a label.

#### 7.2.1 Text Template

The template for the label can contain parameters that are written as a number between braces (for example, `{1}`). The first parameter has the number `1`, the second `2`, etc. Note that to use template parameters, the widget must be placed in the context of an entity (for example, inside a data view or list view).

#### 7.2.2 Parameters

For each parameter in the template, you define an attribute of the context entity or a referred entity, of which the value will be inserted at the position of the parameter.