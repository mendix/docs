---
title: "Input Widgets"
parent: "pages"
menu_order: 30
description: "Widgets which can be added to pages to view and edit attributes of objects."
tags: ["studio pro", "input widgets", "widget", "reference selector", "reference set", "association", "edit", "data input"]
---

## 1 Introduction

Input widgets show data to the end-user and, optionally, allow them to edit the data.

Input widgets need to be linked to an attribute of an entity in order to function. As such, they must be placed within a data widget containing by an object of that entity type.

For example, the input widgets can be placed inside a [data view](data-view):

![Data view containing widgets](attachments/input-widgets/data-view.png)

There are several different input widgets, these are used for different [data types](data-types) and for different types of [association](associations). The input widgets category contains the following widgets:

*   [Text Box](text-box) – displays and, optionally, allows the end-user to add or edit text data from a *numeric* or *string-like* attribute:

    ![Text box containing Name attribute](attachments/input-widgets/text-box.png)

*   [Text Area](text-area) – displays and, optionally, allows the end-user to add or edit long text data from a *string* attribute:

    ![Text area containing notes attribute](attachments/input-widgets/text-area.png)

*   [Drop-Down](drop-down) – shows the current value of and, optionally, allows end-users to pick an option from a list of options in an *enumeration* attribute:

    ![Drop down containing region attribute](attachments/input-widgets/drop-down.png)

*   [Check Box](check-box) – shows the current value of and, optionally, allows end-users to set a *Boolean* attribute to `true` or `false`:

    ![Check box showing personal attribute](attachments/input-widgets/check-box.png)

*   [Radio Buttons](radio-buttons) – shows the current value of and, optionally, allows end-users to pick an option from a list of options in an *enumeration* attribute or the value of a *Boolean* attribute:

    ![Radio buttons showing the preferred contact time and personal attributes](attachments/input-widgets/radio-buttons.png)

*   [Date Picker](date-picker) – shows and, optionally, allows end-users to pick a *Date and time* attribute from a calendar:

    ![Date picker showing the last contacted attribute](attachments/input-widgets/date-picker.png)

*   [Reference Selector](reference-selector) – shows and, optionally, allows end-users to select a *one-to-one* or *one-to-many* association using the value of a *string*, *numeric*, *enumeration*, or *Date and time* attribute on the associated object:

    ![Reference selector showing company name attribute of associated company](attachments/input-widgets/reference-selector.png)

*   [Reference Set Selector](reference-set-selector) –  lists with one or more attributes and, optionally, allows the end-user to add and remove associated objects linked via a *many-to-many* association:

    ![Reference set selector showing details of associated products](attachments/input-widgets/reference-set-selector.png)

*   [Input Reference Set Selector](input-reference-set-selector) – shows an attribute from and, optionally, allows the user to add and remove associated objects linked via a *many-to-many* association:

    ![Input reference set selector showing the name attribute of associated products](attachments/input-widgets/input-reference-set-selector.png)

{{% alert type="info" %}}
For more information on data types, see [Data Types](data-types).

For more information on associations and their properties, see [Associations](associations).
{{% /alert %}}

## 2 Performing Basic Functions

{{% snippet file="refguide/performing-basic-functions-widgets.md" %}}

## 3 Read More

* [Page](page)
* [Pages](pages)
* [Data Types](data-types)
* [Associations](associations)
  