---
title: "Drop Down"
parent: "input-widgets"
menu_order: 30
tags: ["Drop-down", "input", "page", "widget", "enumeration", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **drop down** is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](data-types) *enumeration*.

A drop down must be placed in a [data widget](data-widgets) and displays an attribute of the object(s) retrieved by that widget. The name of the attribute to be displayed is shown inside the drop down, between square brackets, and colored blue.

{{% alert type="info" %}}
A drop down should not be confused with a [reference selector](reference-selector), which is used to select an [association](associations) to another object.
{{% /alert %}}

For example, the following drop down allows the end-user to see, and set, the **Region** to which a customer is allocated.

![](attachments/drop-down/drop-down.png)

## 2 Properties

An example of drop down properties is represented in the image below:

{{% image_container width="250" %}}![](attachments/drop-down/drop-down-properties.png)
{{% /image_container %}}

Text box properties consist of the following sections:

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

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 Data Source Section{#data-source}

{{% snippet file="refguide/attribute-path-property.md" %}}

### 2.3 Design Properties Section{#design-properties}

### 2.4 Editability Section{#editability}

{{% snippet file="refguide/editable-property.md" %}}

{{% snippet file="refguide/read-only-style.md" %}}

{{% snippet file="refguide/condition-property.md" %}}

### 2.5 Events Section{#events}

{{% snippet file="refguide/on-change-event.md" %}}

{{% snippet file="refguide/on-enter-event.md" %}}

{{% snippet file="refguide/on-leave-event.md" %}}

### 2.6 General Section{#general}

#### 2.6.1 Empty Option Caption

Empty option caption is the text that is shown for the empty option in the drop-down shown to the end-user. This is a translatable text. For more details, see [Translatable Texts](translatable-texts).

Adding a caption for the empty option improves the user experience of your application. It also helps end-users using a screen-reader to operate the application easily.

For example, the drop-down that allows the end-user to select the region allocated to a customer could have a caption `Select a region`.

![](attachments/drop-down/select-a-region.png)

### 2.7 Label Section{#label}

{{% snippet file="refguide/label-property.md" %}}

### 2.8 Validation Section{#validation}

{{% snippet file="refguide/widget-validation.md" %}}

### 2.9 Visibility Section{#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## Read More

*   [Data View](data-view)
*   [Attributes](attributes)
