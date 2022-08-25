---
title: "Conditional Visibility Section"
url: /studio/page-editor-widgets-visibility-section/
description: "Describes the Conditional Visibility section in widgets properties in Mendix Studio."
weight: 30
tags: ["studio", "page editor", "widgets", "on click action", "events"]
---

## 1 Introduction 

The **Conditional Visibility** section in widget properties allows you to show a widget only when certain conditions are met. You can make widgets visible based on the following conditions:

* [Visibile based on data](#based-on-data)
* [Visible based on role](#role-based) 

For example, you have a web shop and you do not want to bother users with filling in the same address twice when the delivery address matches the billing address. You would like to show fields to fill the billing address in only when a user unchecks the **Billing address is the same as delivery address** option (which is checked by default). In this case you can make the billing address fields visible based on an *attribute value*: the field will be displayed only when the *BillingAddressSame* is unticked (set to *false*):

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/attribute-based-example.png" alt="Visibility Example" >}}

You can also show a widget to a certain *user role* only. For example, you can show a widget showing salary amounts only to Finance Managers. 

To see which widgets that have conditional visibility configured, click the eye icon is the **Show** option in the upper-left corner of a page:
{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/highlight-conditional-items.png" alt="Show Option" >}}

## 2 Conditional Visibility Properties

You can enable conditional visibility based on the outcome of the [dynamic data](#based-on-data) and/or a [user role](#role-based). Conditional visibility properties are described below. 

### 2.1 Visible Based on Data {#based-on-data}

**Visible Based on Data** allows you to show widgets based on the outcome of the dynamic data. For example, you would like to show a special offer price only for customers with the **Gold** grade: 

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/visible-based-on-data.jpg" alt="Visible Based on Data" >}}

### 2.2 Condition Based on {#condition}

The **Condition Based on** property is only shown when [Visible Based on Data](#based-on-data) is enabled. The following options are available:

* **Attribute** – Defines whether the condition is based on the attribute value. In this case the widget will be shown only when it matches a certain value of the selected attribute.
* **Expression** – Defines whether the condition is based on the expression. In this case the widget will be shown only when the expression returns the Boolean value `true`. For more information on expressions, see [Expressions](/studio/expressions/).

### 2.3 Attribute {#attribute}

This property is shown only when the expression the [Condition Based on](#condition) is set to **Attribute**. Allows you to select the attribute the condition will be based on. The attribute must be of the Boolean or enumeration type.

### 2.4 Attribute Values {#attribute-values}

This property is shown only when the attribute is selected for the [Attribute](#attribute) property. The **Attribute Values** property allows you to select certain attribute values.

If you would like to show a special offer price only for customers with the **Gold** grade, you need to select *Grade* in the **Attribute** property and *Gold* in as the **Attribute Value**:

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/attribute-based-visibility.png" alt="Attribute-Based Visibility" >}}

### 2.5 Expression

This property allows you to create an expression and is shown only when the expression the [Condition is Based on](#condition) is set to **Expression**. The expression should be of the Boolean type. For more information on how to create expressions, see [Expressions](/studio/expressions/).

### 2.7 Visible Based on Role {#role-based}

The widget can be made visible to users with a specific user role only. For example, in a taxi booking app, you would like to show a taxi driver rating to customers and administrators, but hide it from taxi drivers:

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/visible-based-on-role.jpg" alt="Visible Based on Role" >}}

{{% alert color="info" %}}

You can only configure role-based conditional visibility when security is enabled. For more information, see [Security, Roles & Permissions](/studio/settings-security/).

{{% /alert %}}

### 2.8 Roles

The **Roles** property is only shown when the [Visible Based on Role](#role-based) property is enabled and shows a list of roles available in your app. 

## 3 Performing Basic Functions

### 3.1 Configuring Visibility Based on Attribute Value

To configure visibility based on the attribute value, follow the steps below:

1. Select a widget you would like to make visible only for certain attribute values and go to its properties.

2. In **Conditional Visibility** section, toggle the **Visible Based on Data** property.

3. The **Condition Based on** is set to **Attribute** by default. Click the **Attribute** property: 

    {{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/attribute-based-property.png" >}}

4. In the **Select Attribute** dialog box, select an attribute of the Boolean or enumeration type and click **Select**.

5. The **Attribute Values** property is now displayed in properties. Untick the values that do not meet the conditions you would like to set:

    {{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/attribute-values.png"   width="300"  >}} 

Conditional visibility based on the attribute value is set for the widget.

### 3.2 Configuring Conditional Visibility Based on a Role

To configure role-based conditional visibility, do the following:

1. Select a widget you would like to make visible only for certain user roles and go to its properties.

2. In **Conditional Visibility** section, toggle the **Visible Based on Role** property.

3. A list of roles available in your app is displayed in the **Roles** property. Untick the roles who would like to hide the widget from:

    {{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-visibility-section/role-based-example.png" >}}    

Conditional visibility based on user roles is set for the widget.

## 4 Read More

* [Widgets](/studio/page-editor-widgets/)
* [Security, Roles & Permissions](/studio/settings-security/)
