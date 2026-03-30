---
title: "Input Elements"
url: /refguide10/input-widgets/
weight: 30
description: "Widgets which can be added to pages to view and edit attributes of objects."
---

## Introduction

Input elements show data to the end-user and, optionally, allow them to edit the data.

In order to function, input elements need to be linked to a value, either a variable inside a page or snippet or an attribute of an entity. As such, they must be placed within a data context:

* A [data container](/refguide10/data-widgets/) widget containing an object
* A snippet containing one or more [parameters](/refguide10/page-properties/#parameters)
* A page or a snippet containing one or more [variables](/refguide10/page-properties/#variables)

For example, the input elements can be placed inside a [data view](/refguide10/data-view/):

{{< figure src="/attachments/refguide10/modeling/pages/input-widgets/data-view.png" alt="Data view containing widgets" class="no-border" >}}

There are several different input elements, these are used for different [data types](/refguide10/data-types/) and for different types of [association](/refguide10/associations/). The input elements category contains the following widgets:

* [Text Box](/refguide10/text-box/) – displays and, optionally, allows the end-user to add or edit text data from a *numeric* or *string-like* value:

    {{< figure src="/attachments/refguide10/modeling/pages/input-widgets/text-box.png" alt="Text box containing Name attribute" class="no-border" >}}

* [Text Area](/refguide10/text-area/) – displays and, optionally, allows the end-user to add or edit long text data from a *string* value:

    {{< figure src="/attachments/refguide10/modeling/pages/input-widgets/text-area.png" alt="Text area containing notes attribute" class="no-border" >}}

* [Drop-Down](/refguide10/drop-down/) – shows the current value of and, optionally, allows end-users to pick an option from a list of options in an *enumeration* value:

    {{< figure src="/attachments/refguide10/modeling/pages/input-widgets/drop-down.png" alt="Drop down containing region attribute" class="no-border" >}}

* [Checkbox](/refguide10/check-box/) – shows the current value of and, optionally, allows end-users to set a *Boolean* value to `true` or `false`:

    {{< figure src="/attachments/refguide10/modeling/pages/input-widgets/check-box.png" alt="Checkbox showing personal attribute" class="no-border" >}}

* [Radio Buttons](/refguide10/radio-buttons/) – shows the current value of and, optionally, allows end-users to pick an option from a list of options in an *enumeration* or *Boolean* value:

    {{< figure src="/attachments/refguide10/modeling/pages/input-widgets/radio-buttons.png" alt="Radio buttons showing the preferred contact time and personal attributes" class="no-border" >}}

* [Date Picker](/refguide10/date-picker/) – shows and, optionally, allows end-users to pick a *Date and time* value from a calendar:

    {{< figure src="/attachments/refguide10/modeling/pages/input-widgets/date-picker.png" alt="Date picker showing the last contacted attribute" class="no-border" >}}

* [Reference Selector](/refguide10/reference-selector/) – shows and, optionally, allows end-users to select a *one-to-one* or *one-to-many* association using the value of a *string*, *numeric*, *enumeration*, or *Date and time* attribute on the associated object:

    {{< figure src="/attachments/refguide10/modeling/pages/input-widgets/reference-selector.png" alt="Reference selector showing company name attribute of associated company" class="no-border" >}}

* [Reference Set Selector](/refguide10/reference-set-selector/) – lists with one or more attributes and, optionally, allows the end-user to add and remove associated objects linked via a *many-to-many* association:

    {{< figure src="/attachments/refguide10/modeling/pages/input-widgets/reference-set-selector.png" alt="Reference set selector showing details of associated products" class="no-border" >}}

* [Input Reference Set Selector](/refguide10/input-reference-set-selector/) – shows an attribute from and, optionally, allows the user to add and remove associated objects linked via a *many-to-many* association:

    {{< figure src="/attachments/refguide10/modeling/pages/input-widgets/input-reference-set-selector.png" alt="Input reference set selector showing the name attribute of associated products" class="no-border" >}}

{{% alert color="info" %}}
For more information on data types, see [Data Types](/refguide10/data-types/).

For more information on associations and their properties, see [Associations](/refguide10/associations/).

Input widgets that work with associations, namely Reference Selector, Reference Set Selector and Input Reference Set Selector, can't be configured with variables.
{{% /alert %}}

## Performing Basic Functions

{{% snippet file="/static/_includes/refguide10/performing-basic-functions-widgets.md" %}}

## Read More

* [Page](/refguide10/page/)
* [Pages](/refguide10/pages/)
* [Data Types](/refguide10/data-types/)
* [Associations](/refguide10/associations/)
* [Variables](/refguide10/page-properties/#variables)
  