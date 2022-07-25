---
title: "Input Elements"
url: /refguide/input-widgets/
weight: 30
description: "Widgets which can be added to pages to view and edit attributes of objects."
tags: ["studio pro", "input elements", "widget", "reference selector", "reference set", "association", "edit", "data input"]
---

## 1 Introduction

Input elements show data to the end-user and, optionally, allow them to edit the data.

Input elements need to be linked to an attribute of an entity in order to function. As such, they must be placed within a data widget containing by an object of that entity type.

For example, the input elements can be placed inside a [data view](/refguide/data-view/):

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/data-view.png" alt="Data view containing widgets" >}}

There are several different input elements, these are used for different [data types](/refguide/data-types/) and for different types of [association](/refguide/associations/). The input elements category contains the following widgets:

*   [Text Box](/refguide/text-box/) – displays and, optionally, allows the end-user to add or edit text data from a *numeric* or *string-like* attribute:

    {{< figure src="/attachments/refguide/modeling/pages/input-widgets/text-box.png" alt="Text box containing Name attribute" >}}

*   [Text Area](/refguide/text-area/) – displays and, optionally, allows the end-user to add or edit long text data from a *string* attribute:

    {{< figure src="/attachments/refguide/modeling/pages/input-widgets/text-area.png" alt="Text area containing notes attribute" >}}

*   [Drop-Down](/refguide/drop-down/) – shows the current value of and, optionally, allows end-users to pick an option from a list of options in an *enumeration* attribute:

    {{< figure src="/attachments/refguide/modeling/pages/input-widgets/drop-down.png" alt="Drop down containing region attribute" >}}

*   [Check Box](/refguide/check-box/) – shows the current value of and, optionally, allows end-users to set a *Boolean* attribute to `true` or `false`:

    {{< figure src="/attachments/refguide/modeling/pages/input-widgets/check-box.png" alt="Check box showing personal attribute" >}}

*   [Radio Buttons](/refguide/radio-buttons/) – shows the current value of and, optionally, allows end-users to pick an option from a list of options in an *enumeration* attribute or the value of a *Boolean* attribute:

    {{< figure src="/attachments/refguide/modeling/pages/input-widgets/radio-buttons.png" alt="Radio buttons showing the preferred contact time and personal attributes" >}}

*   [Date Picker](/refguide/date-picker/) – shows and, optionally, allows end-users to pick a *Date and time* attribute from a calendar:

    {{< figure src="/attachments/refguide/modeling/pages/input-widgets/date-picker.png" alt="Date picker showing the last contacted attribute" >}}

*   [Reference Selector](/refguide/reference-selector/) – shows and, optionally, allows end-users to select a *one-to-one* or *one-to-many* association using the value of a *string*, *numeric*, *enumeration*, or *Date and time* attribute on the associated object:

    {{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector.png" alt="Reference selector showing company name attribute of associated company" >}}

*   [Reference Set Selector](/refguide/reference-set-selector/) –  lists with one or more attributes and, optionally, allows the end-user to add and remove associated objects linked via a *many-to-many* association:

    {{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-set-selector.png" alt="Reference set selector showing details of associated products" >}}

*   [Input Reference Set Selector](/refguide/input-reference-set-selector/) – shows an attribute from and, optionally, allows the user to add and remove associated objects linked via a *many-to-many* association:

    {{< figure src="/attachments/refguide/modeling/pages/input-widgets/input-reference-set-selector.png" alt="Input reference set selector showing the name attribute of associated products" >}}

{{% alert color="info" %}}
For more information on data types, see [Data Types](/refguide/data-types/).

For more information on associations and their properties, see [Associations](/refguide/associations/).
{{% /alert %}}

## 2 Performing Basic Functions

{{% snippet file="/static/_includes/refguide/performing-basic-functions-widgets.md" %}}

## 3 Read More

* [Page](/refguide/page/)
* [Pages](/refguide/pages/)
* [Data Types](/refguide/data-types/)
* [Associations](/refguide/associations/)
  