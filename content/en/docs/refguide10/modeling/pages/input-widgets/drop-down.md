---
title: "Drop-Down"
url: /refguide10/drop-down/
weight: 30
aliases:
    - /refguide10/drop-down-widget.html
    - /refguide10/drop-down-widget
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
The drop-down widget is not compatible with the modern version of the Mendix React Client. Depending on your app version, you may wish to convert the widget to a combo box widget using the context menu in Studio Pro. 

For more information on converting a drop-down widget into its more modern combo box counterpart, see the Mendix React Client's [Migration Guide](/refguide10/mendix-client/react/#migration-guide).
{{% /alert %}}

## Introduction

A **drop-down** is used to display and, optionally, allow the end-user to edit the value of an attribute or variable of [data type](/refguide10/data-types/) *enumeration*.

A drop-down must be placed within a data context to display or edit the intended value:

* A [data container](/refguide10/data-widgets/) widget containing an object
* A snippet containing one or more [parameters](/refguide10/page-properties/#parameters)
* A page or a snippet containing one or more [variables](/refguide10/page-properties/#variables)

The name of the configured value is shown inside the drop-down widget, between square brackets, and colored blue.

{{% alert color="info" %}}
A drop-down should not be confused with a [reference selector](/refguide10/reference-selector/), which is used to select an [association](/refguide10/associations/) to another object.
{{% /alert %}}

For example, the following drop-down allows the end-user to see, and set, the **Region** to which a customer is allocated. The possible values for **Region** are held in an enumeration.

{{< figure src="/attachments/refguide10/modeling/pages/input-widgets/drop-down/drop-down.png" class="no-border" >}}

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Drop-down properties consist of the following sections:

Properties:

* [General](#general)
* [Data source](#data-source)
* [Label](#label)
* [Editability](#editability)
* [Visibility](#visibility)
* [Validation](#validation)
* [Accessibility](#accessibility)
* [Common](#common)
* [Events](#events)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

## Properties

### General Section{#general}

#### Empty Option Caption

Empty option caption is the text that is shown for the empty option in the drop-down shown to the end-user. This is a translatable text. For more details, see [Language Menu](/refguide10/translatable-texts/).

Adding a caption for the empty option improves the user experience of your application. It also helps end-users using a screen-reader to operate the application easily.

For example, the drop-down that allows the end-user to select the region allocated to a customer, where the possible values for **Region** are held in an enumeration, could have the caption `Select a region`.

{{< figure src="/attachments/refguide10/modeling/pages/input-widgets/drop-down/select-a-region.png" class="no-border" >}}

### Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide10/data-source-section-link.md" %}}

### Label Section{#label}

{{% snippet file="/static/_includes/refguide10/label-section-link.md" %}}

### Editability Section{#editability}

{{% snippet file="/static/_includes/refguide10/editability-section-link.md" %}}

### Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide10/visibility-section-link.md" %}}

### Validation Section{#validation}

{{% snippet file="/static/_includes/refguide10/widget-validation-link.md" %}}

### Accessibility Section{#accessibility}

#### Aria Required

In a text area widget, when **Aria required** is set to **Yes** then assistive technologies will read out the field that is required. When set to **No** then assistive technologies will not read the field out.

### Common Section{#common}

{{% snippet file="/static/_includes/refguide10/common-section-link.md" %}}

### Events Section{#events}

#### On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="/static/_includes/refguide10/events-section-link.md" %}}

#### On Enter

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="/static/_includes/refguide10/events-section-link.md" %}}

#### On Leave

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide10/events-section-link.md" %}}

## Styling

### Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide10/design-section-link.md" %}} 

### Common Section{#common-styling}

{{% snippet file="/static/_includes/refguide10/common-section-link.md" %}}

## Read More

* [Data View](/refguide10/data-view/)
* [Attributes](/refguide10/attributes/)
* [Variables](/refguide10/page-properties/#variables)
