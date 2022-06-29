---
title: "Drop-Down"
url: /refguide/drop-down/
weight: 30
tags: ["Drop-down", "input", "page", "widget", "enumeration", "studio pro"]
aliases:
    - /refguide/drop-down-widget.html
    - /refguide/drop-down-widget
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **drop-down** is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide/data-types/) *enumeration*.

A drop-down must be placed in a [data widget](/refguide/data-widgets/) and displays an attribute of the object(s) retrieved by that widget. The name of the attribute to be displayed is shown inside the drop-down, between square brackets, and colored blue.

{{% alert color="info" %}}
A drop-down should not be confused with a [reference selector](/refguide/reference-selector/), which is used to select an [association](/refguide/associations/) to another object.
{{% /alert %}}

For example, the following drop-down allows the end-user to see, and set, the **Region** to which a customer is allocated. The possible values for **Region** are held in an enumeration.

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/drop-down/drop-down.png" >}}

## 2 Properties

An example of drop-down properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/drop-down/drop-down-properties.png"   width="300"  >}}

Drop-down properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [Editability](#editability)
* [Events](#events)
* [General](#general)
* [Label](#label)
* [Validation](#validation)
* [Visibility](#visibility)

### 2.1 Common Section{#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 2.2 Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide/data-source-section-link.md" %}}

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 2.4 Editability Section{#editability}

{{% snippet file="/static/_includes/refguide/editability-section-link.md" %}}

### 2.5 Events Section{#events}

#### 2.5.1 On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

#### 2.5.2 On Enter

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

#### 2.5.3 On Leave

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

### 2.6 General Section{#general}

#### 2.6.1 Empty Option Caption

Empty option caption is the text that is shown for the empty option in the drop-down shown to the end-user. This is a translatable text. For more details, see [Language Menu](/refguide/translatable-texts/).

Adding a caption for the empty option improves the user experience of your application. It also helps end-users using a screen-reader to operate the application easily.

For example, the drop-down that allows the end-user to select the region allocated to a customer, where the possible values for **Region** are held in an enumeration, could have the caption `Select a region`.

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/drop-down/select-a-region.png" >}}

### 2.7 Label Section{#label}

{{% snippet file="/static/_includes/refguide/label-section-link.md" %}}

### 2.8 Validation Section{#validation}

{{% snippet file="/static/_includes/refguide/widget-validation-link.md" %}}

### 2.9 Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## 3 Read More

*   [Data View](/refguide/data-view/)
*   [Attributes](/refguide/attributes/)
