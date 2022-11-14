---
title: "Input Element Widgets"
url: /studio7/page-editor-widgets-input-elements/
description: "Describes input widgets in Mendix Studio."
weight: 20
tags: ["studio", "page editor", "input widgets", "widgets"]
---

## 1 Introduction 

**Input Elements** are [widgets](/studio7/page-editor-widgets/) in Mendix Studio that are typically used to allow end-users enter or edit data.  

**Input Elements** can only function inside a data container (a list view or a data view). You can either place widget in an existing data container; or click **Wrap with a new data view** in **Properties** to create a data view automatically and place an input element inside it. 

{{< figure src="/attachments/studio7/page-editor/page-editor-widgets/page-editor-widgets-input-elements/wrap-in-data-view.png"   width="350"  >}}

## 2 Input Elements Overview

You can find the description of input elements available in Studio in the table below:

| Input Element | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Text Box      | A text box is used to allow end-users to enter, edit, and display a text. For example, end-users will be able to enter their names. |
| Text Area     | A text area is used to enter, edit, and display a long text that can take several lines, for example, the description of a product. |
| Date Picker   | A date picker is used to allow end-users select a date in a calendar, for example, when selecting a day for a delivery. |
| Drop Down     | A drop-down widget is used to allow end-users pick an option from the preset list of options. For example, users can select a color of a product.<br />You can also use this widget to display and select associations. You need a many-to-one association in the domain model (for more information, see [Association Properties](/studio7/domain-models-association-properties/)). For example, if a customer has several addresses, the user can select a delivery address from them. In this example, several addresses can be associated with one customer (many-to-one association). |
| Check Box     | A check box widget is used to allow users to mark a value as true or false. For example, users can tick a box to sign up for the newsletter. |
| Radio Buttons | Radio buttons are used to allow users select the option from a number of preset ones. For example, users can select from several possible locations for picking an order up. |

{{% alert color="info" %}}

Apart from the standard input widgets, you can also [download widgets from the Mendix Marketplace](https://marketplace.mendix.com/) to your app. For more information, see section [4 Widgets by Origin](/studio7/page-editor-widgets/#widgets-by-origin) in *Widgets*.

{{% /alert %}}

## 3 Properties

Input elements properties consist of the following sections:

* [Data source](#input-elements-design)
* [General](#input-elements-general)
* [Design](#input-elements-design)

### 3.1 Data Source {#input-elements-design}

**Input Elements** need to be linked to an attribute to show data and to allow end-users to edit it. Different input elements require different [types of attributes](/studio7/domain-models-attributes/). You can find the correspondence between the input elements and attribute types in the table below:

| Input Element      | Allowed Attribute Type                                       |
| ------------------ | ------------------------------------------------------------ |
| Text Box           | String, Autonumber, Decimal, Hashed String, Integer, Long    |
| Text Area          | String                                                       |
| Date Picker        | Date and Time                                                |
| Drop Down          | Enumeration, Associations                                    |
| Reference Selector | Autonumber, Date and Time, Decimal, Enumeration, Integer, Long, String |
| Check Box          | Boolean                                                      |
| Radio Buttons      | Boolean, Enumeration                                         |

### 3.2 General Section {#input-elements-general}

The **General** section has common properties for every input element, but may also contain specific ones. 

#### 3.2.1 Common Properties

Common properties of input elements are described in the table below:

| Property    | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Show Label  | Enable this property if you want to show a label (name) of a widget to the end-user. <br />*This property is enabled by default.* |
| Label       | This property only appears if **Show Label** is enabled. Specify the name that will be displayed to the end-users. When you select an attribute, the name of the attribute is filled out as a label. |
| Editability | Editability indicates whether the end-user will be able to change the value displayed by the widget. Possible values are the following: <ul><li>Editable – the value displayed by the widget is editable</li><li>Read-only – the value is in read-only mode</li><li>Conditional – the widget is editable only if specified conditions are met (this option can be configured in Studio Pro only)</li></ul>{{% alert color="info" %}}If an attribute set for the widget's data source is of the AutoNumber type, the widget is set into read-only mode by default and the **Editability** setting itself is disabled, because attributes of this type are generated automatically.<br />{{%/alert %}} |

#### 3.2.2 Specific Properties

Specific properties of the input elements are described in the table below:

| Input Element | Property           | Description                                                  |
| ------------- | ------------------ | ------------------------------------------------------------ |
| Text Area     | Grow Automatically | When enabled, the text area grows automatically depending on the amount if text filled out in it. <br />*This property is disabled by default.* |
| Text Area     | Number of Lines    | This property is only displayed when the **Grow Automatically** option is disabled.  The number of lines determine how many lines the text area shows at the same time. If the text in the text area contains more lines you will have to use a scrollbar to see it all. <br />Default value for the **Number of Lines** option: 5 |
| Radio Buttons | Orientation        | This property defines whether the radio buttons are displayed in your app horizontally or vertically. <br />Default value for **Orientation**: Horizontal. |

## 4 Input Validation Section

In **Input Validation**, you can specify whether the widget's value should be validated. You can set a validation type for an input widget and specify an end-user message in case validation fails. For example, you can mark the **Full name** field as required for new customers and you can add a message saying: "Please specify your name to proceed".

{{< figure src="/attachments/studio7/page-editor/page-editor-widgets/page-editor-widgets-input-elements/Validation-type-required.png" >}}

The **Input Validation** section properties are described in the table below:

| Property                                 | Description                                                  |
| ---------------------------------------- | ------------------------------------------------------------ |
| Validation Type                          | This property indicates whether a value filled in a widget should be validated. Possible options are the following:<br /><ul><li>**None** – a value is not required, the widget can be left empty</li><li>**Required** – the widget cannot be empty, end-users need to fill a value in it</li><li>**Custom** – can be set only in Studio Pro. However, if a custom validation has been set in Studio Pro, you can specify or change a [message](#validation-message) for the custom validation</li></ul> |
| <a name="validation-message"></a>Message | A message that is shown to end-users when **Validation Type** is **Required** or **Custom** and when the validation has failed. |

## 5 Design Section {#input-elements-design}

For information on the **Design** section and its properties, see [Design Section in Widgets](/studio7/page-editor-widgets-design-section/).

## 6 Read More

* [Pages](/studio7/page-editor/) 
* [Widgets](/studio7/page-editor-widgets/)
