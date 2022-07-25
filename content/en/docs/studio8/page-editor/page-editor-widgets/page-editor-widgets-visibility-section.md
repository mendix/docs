---
title: "Conditional Visibility Section"
url: /studio8/page-editor-widgets-visibility-section/
description: "Describes the Conditional Visibility section in widgets properties in Mendix Studio."
weight: 30
tags: ["studio", "page editor", "widgets", "on click action", "events"]
---

## 1 Introduction 

The **Conditional Visibility** section in widget properties allows you to show a widget only when certain conditions are met. You can make widgets visible based on the following conditions:

* [An attribute value of a widget](#attribute-based)
* [User roles in your app](#role-based) 

For example, you have a web shop and you do not want to bother users with filling in the same address twice when the delivery address matches the billing address. You would like to show fields to fill the billing address in only when a user unchecks the **Billing address is the same as delivery address** option (which is checked by default). In this case you can make the billing address fields visible based on an *attribute value*: the field will be displayed only when the *BillingAddressSame* is unticked (set to *false*):

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/attribute-based-example.png" >}}

You can also show a widget to a certain *user role* only. For example, you can show a widget showing salary amounts only to Finance Managers. 

To see which widgets that have conditional visibility configured, click the eye icon is the **Show** option in the upper-left corner of a page:
{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/highlight-conditional-items.png" >}}

## 2 Conditional Visibility Properties

You can enable conditional visibility based on the selected attribute value and/or a user role. Conditional visibility properties are described below. 

### 2.1 Attribute-Based {#attribute-based}

**Attribute-Based** visibility allows you to show widgets only when they match a certain value of the selected attribute. 

{{% alert color="info" %}}

The attribute must be of the Boolean or enumeration type. 

{{% /alert %}}

{{% alert color="info" %}}

You can only configure attribute-based conditional visibility when a widget is placed in a data container: a data view or a list view.

{{% /alert %}}

### 2.2 Attribute Values

This property is shown only when an attribute in the [Attribute-Based](#attribute-based) property is selected. The **Attribute Values** property allows you to select certain attribute values.

For example, you would like to show a special offer price only for customers with the **Gold** grade. Select *Grade* in the **Attribute-Based** property and *Gold* in as the **Attribute Value**:

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/attribute-based-visibility.png"   width="300"  >}}

### 2.3 Role-Based {#role-based}

The widget can be made visible to a specific of the user roles available in your app. When enabled, this setting will render the widget visible to all users that are linked to one of the selected user roles.

{{% alert color="info" %}}

You can only configure role-based conditional visibility when security is enabled. For more information, see [Security, Roles & Permissions](/studio8/settings-security/).

{{% /alert %}}

### 2.4 Roles

The **Roles** property is only shown when the [Role-Based](#role-based) property is enabled and shows a list of roles available in your app. Select the roles that you would like to make a widget visible for. For example, in a taxi booking app, you would like to show a taxi driver rating to customers and administrators, but hide it from taxi drivers:

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/role-based-visbility.png"   width="300"  >}}

## 3 Performing Basic Functions

### 3.1 Configuring Attribute-Based Conditional Visibility

To configure attribute-based visibility, do the following:

1. Select a widget you would like to make visible only for certain attribute values and go to its properties.

2. In **Conditional Visibility** section, click the **Attribute-Based** property:

    {{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/attribute-based-property.png"   width="300"  >}}

3. In the **Select Attribute** dialog box, select an attribute of the Boolean or enumeration type and click **Select**.

4. The **Attribute Values** property is now displayed in properties. Untick the values that does not meet the conditions you would like to set:

    {{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/attribute-values.png"   width="300"  >}} 

Attribute-based conditional visibility is set for the widget.

### 3.2 Disabling Attribute-Based Conditional Visibility

To disable attribute-based visibility, follow the steps below:

1. Select a widget you would like to disable attribute-based visibility and go to its properties.

2. In **Conditional Visibility** section, click the **Attribute-Based** property.

3. In the **Select Attribute** dialog box, click **Clear**:

    {{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/clear-attribute-based-visibility.png"   width="400"  >}}

The attribute-based conditional visibility is cleared for the widget. 

### 3.3 Configuring Role-Based Conditional Visibility

To configure role-based conditional visibility, do the following:

1. Select a widget you would like to make visible only for certain user roles and go to its properties.

2. In **Conditional Visibility** section, toggle the **Role-Based** property.

3. A list of roles available in your app is displayed in the **Roles** property. Untick the roles who would like to hide the widget from:

    {{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/role-based-example.png"   width="300"  >}} 
    

Role-based conditional visibility is set for the widget.

### 3.4 Disabling Role-Based Conditional Visibility

To disable role-based conditional visibility, follow the steps below:

1. Select a widget you would like to disable role-based visibility and go to its properties.
2. In **Conditional Visibility** section, disable the **Role-Based** property.

Role-based conditional visibility is disabled for the widget.

## 4 Read More

* [Widgets](/studio8/page-editor-widgets/)
* [Security, Roles & Permissions](/studio8/settings-security/)
