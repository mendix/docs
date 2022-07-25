---
title: "Input Elements"
url: /studio/page-editor-widgets-input-elements/
description: "Describes input elements in Mendix Studio."
weight: 20
tags: ["studio", "page editor", "input elements", "input widgets", "widgets"]
---

## 1 Introduction 

**Input Elements** are [widgets](/studio/page-editor-widgets/) in Mendix Studio that are typically used to allow end-users enter or edit data. For example, a text box below allows users to fill in their full names:

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-input-elements/text-box-example.png"   width="350"  >}}

**Input Elements** can only function inside a data container (a data view, a list view, or a data grid). You can either place widget in an existing data container; or click **Wrap with a new data view** in **Properties** to create a data view and place an input element inside it automatically. 

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-input-elements/wrap-in-data-view.png" >}}

## 2 Input Elements Overview

You can find the description of input elements available in Studio in the table below:

| Input Element | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Text Box      | A text box is used to allow end-users to enter, edit, and display a text. For example, end-users will be able to enter their names. |
| Text Area     | A text area is used to enter, edit, and display a long text that can take several lines, for example, the description of a product. |
| Date Picker   | A date picker is used to allow end-users select a date in a calendar, for example, when selecting a day for a delivery. |
| Drop-Down     | A drop-down widget is used to allow end-users pick an option from the preset list of options. For example, users can select a color of a product.<br />You can also use this widget to display and select associations. You need a many-to-one association in the domain model (for more information, see [Associations](/studio/domain-models-association-properties/)). For example, if a customer has several addresses, the user can select a delivery address from them. In this example, several addresses can be associated with one customer (many-to-one association). |
| Check Box     | A check box widget is used to allow users to mark a value as true or false. For example, users can tick a box to sign up for the newsletter. |
| Radio Buttons | Radio buttons are used to allow users select the option from a number of preset ones. For example, users can select from several possible locations for picking an order up. |

{{% alert color="info" %}}

Apart from the standard input elements, you can also [download widgets from the Mendix Marketplace](https://marketplace.mendix.com/) to your app. For more information, see the [Widgets by Origin](/studio/page-editor-widgets/#widgets-by-origin) section in *Widgets*.

{{% /alert %}}

## 3 Properties

All input elements properties consist of the following sections:

* [Type](#type)
* [Data source](#input-elements-data-source)
* [General](#input-elements-general)
* [Input Validation](#validation)
* [Conditional Visibility](#visibility)
* [Design](#input-elements-design)

A date picker has a specific [Format](#format) section.

### 3.1 Type Option {#type}

{{% alert color="info" %}}
This option is only available for **Text Box**, **Text Area**, **Radio Buttons**, **Check Box**, and **Drop-Down** widgets.
{{% /alert %}}

The **Type** option allows you to quickly change the type of one input element to a similar one: you can change a **Text Box** to a **Text Area** and vice versa, and change **Radio Buttons** to a **Check Box** or a **Drop-Down** and vice versa:

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-input-elements/input-widget-type.jpg" alt="Type Option" >}}

### 3.2 Data Source Section {#input-elements-data-source}

**Input Elements** need to be linked to an attribute to show data and to allow end-users to edit it. Different input elements require different [types of attributes](/studio/domain-models-attributes/). You can find the correspondence between the input elements and attribute types in the table below:

| Input Element      | Allowed Attribute Type                                       |
| ------------------ | ------------------------------------------------------------ |
| Text Box           | String, Autonumber, Decimal, Hashed String, Integer, Long    |
| Text Area          | String                                                       |
| Date Picker        | Date and Time                                                |
| Drop-Down          | Enumeration, Associations                                    |
| Reference Selector | Autonumber, Date and Time, Decimal, Enumeration, Integer, Long, String |
| Check Box          | Boolean                                                      |
| Radio Buttons      | Boolean, Enumeration                                         |

### 3.3 General Section {#input-elements-general}

The **General** section has common properties for every input element, but may also contain specific ones. 

#### 3.3.1 Show Label {#show-label}

Enable this property if you want to show a label (name) of a widget to the end-user. *This property is enabled by default.*

#### 3.3.2 Label

This property only appears if **Show Label** is enabled. Specify the name that will be displayed to end-users. When you select an attribute, the name of the attribute is shown in the label in braces. This means that instead of a static text, the value of the attribute is displayed to end-users.

#### 3.3.3 Editability {#editability}

Editability indicates whether the end-user will be able to change the value displayed by the widget. Possible values are the following: 

* **Editable** – The value displayed by the widget is editable.

* **Read-Only** – The value is in read-only mode.

* **Conditional** – The widget is editable only if specified conditions are met based on an attribute value or based on an expression. 

	{{% alert color="info" %}} If an attribute set for the widget's data source is of the AutoNumber type, the widget is set into read-only mode by default and the **Editability** setting itself is disabled, because attributes of this type are generated automatically.{{%/alert %}}


##### 3.3.3.1 Condition Based on {#condition}

The **Condition Based on** property is only shown when [Conditional Editability](#editability) is selected. The following options are available:

* **Attribute** – Defines whether the condition is based on the attribute value. In this case the widget will be editable only when it matches a certain value of the selected attribute. The attribute must be of the Boolean or enumeration type. 
* **Expression** – Defines whether the condition is based on the expression. In this case the widget will be editable only when the expression returns the Boolean value `true`. For more information on expressions, see [Expressions](/studio/expressions/).

##### 3.3.3.2 Attribute {#attribute}

This property is shown only when the expression the [Condition Based on](#condition) is set to **Attribute**. Allows you to select the attribute the condition will be based on. The attribute must be of the Boolean or enumeration type.

##### 3.3.3.3 Attribute Values {#attribute-values}

This property is shown only when the attribute is selected for the [Attribute](#condition) property. The **Attribute Values** property allows you to select certain attribute values.

For example, you would like to make the **City** field editable only when users fill the **Country** field in, because you can deliver your products to a limited number of countries. So, you need to select *Country* in the **Attribute** property and *Netherlands*, *Belgium*, *Germany*, *France* in the **Attribute Value** property.

##### 3.3.3.4 Expression

This property allows you to create an expression and shown only when the expression the [Condition Based on](#condition) is set to **Expression**. The expression should be of the Boolean type. For more information on how to create expressions, see [Expressions](/studio/expressions/).

#### 3.3.4 Specific Properties

Specific properties of the input elements are described in the table below:

| Input Element | Property           | Description                                                  |
| ------------- | ------------------ | ------------------------------------------------------------ |
| Text Area     | Grow Automatically | When enabled, the text area grows automatically depending on the amount if text filled out in it. <br />*This property is disabled by default.* |
| Text Area     | Number of Lines    | This property is only displayed when the **Grow Automatically** option is disabled.  The number of lines determine how many lines the text area shows at the same time. If the text in the text area contains more lines you will have to use a scrollbar to see it all. <br />Default value for the **Number of Lines** option: 5 |
| Radio Buttons | Orientation        | This property defines whether the radio buttons are displayed in your app horizontally or vertically. <br />Default value for **Orientation**: Horizontal. |

### 3.4 Format Section {#format}

The **Format** section is specific for the **Date Picker** widget only. 

 The **Format** section properties are described in the table below:

| Property       | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| Type           | Determines the way date and/or time is displayed to users. Possible values of this property are the following ones: <ul><li>**Date** – users can view or edit a date only</li>**Time** – users can view or edit time only<li></li><li>**Date & Time** – users can view or edit date and time</li><li>**Custom** – custom date and time format, can be configured in Studio Pro only</li></ul><br />Default value for **Type**: Date |
| Format Example | Displays an example of the selected format type.             |

### 3.5 Input Validation Section {#validation}

In **Input Validation**, you can specify whether the widget's value should be validated. You can set a validation type for an input widget and specify an end-user message in case validation fails. For example, you can mark the **Full name** field as required for new customers and you can add a message saying: "Please specify your name to proceed".

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-input-elements/Validation-type-required.png"   width="350"  >}}


The **Input Validation** section properties are described in the table below:

| Property                                 | Description                                                  |
| ---------------------------------------- | ------------------------------------------------------------ |
| Validation Type                          | This property indicates whether a value filled in a widget should be validated. Possible options are the following:<br /><ul><li>**None** – a value is not required, the widget can be left empty</li><li>**Required** – the widget cannot be empty, end-users need to fill a value in it</li><li>**Custom** – can be set only in Studio Pro. However, if a custom validation has been set in Studio Pro, you can specify or change a [message](#validation-message) for the custom validation</li></ul> |
| <a name="validation-message"></a>Message | A message that is shown to end-users when **Validation Type** is **Required** or **Custom** and when the validation has failed. |

### 3.6 Conditional Visibility Section {#visibility}

{{% snippet file="/static/_includes/studio/visibility-section-link.md" %}}

### 3.7 Design Section {#input-elements-design}

For information on the **Design** section and its properties, see [Design Section](/studio/page-editor-widgets-design-section/).

## 4 Read More

* [Pages](/studio/page-editor/) 
* [Widgets](/studio/page-editor-widgets/)
