---
title: "Check Box"
url: /refguide8/check-box/
weight: 40
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/check-box.pdf).
{{% /alert %}}

## 1 Introduction

A **check box** is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide8/data-types/) *Boolean*. It displays a tick if the value is true and remain empty if it is false.

{{% alert color="info" %}}In native mobile applications, the check box widget is rendered as a toggle.{{% /alert %}}

A check box must be placed in a [data widget](/refguide8/data-widgets/) and displays an attribute of the object(s) retrieved by that widget. The name of the attribute to be displayed is shown inside the check box widget, between square brackets, and colored blue.

For example, this check box allows you to see, and set, whether someone is subscribed to your newsletter.

{{< figure src="/attachments/refguide8/modeling/pages/input-widgets/check-box/check-box.png" >}}

## 2 Properties

An example of check box properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/input-widgets/check-box/check-box-properties.png"   width="250"  >}}

Check box properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [Editability](#editability)
* [Events](#events)
* [Label](#label)
* [Visibility](#visibility)

### 2.1 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 2.2 Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide8/data-source-section-link.md" %}}

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### 2.4 Editability Section{#editability}

{{% snippet file="/static/_includes/refguide8/editability-section-link.md" %}}

### 2.5 Events Section{#events}

#### 2.5.1 On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="/static/_includes/refguide8/events-section-link.md" %}}

#### 2.5.2 On Enter

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="/static/_includes/refguide8/events-section-link.md" %}}

#### 2.5.3 On Leave

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide8/events-section-link.md" %}}

### 2.6 Label Section{#label}

{{% snippet file="/static/_includes/refguide8/label-section-link.md" %}}

### 2.7 Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## 3 Read More

*   [Data view](/refguide8/data-view/)
*   [Attributes](/refguide8/attributes/)
