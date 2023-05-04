---
title: "Check Box"
url: /refguide9/check-box/
weight: 40
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **Check box** widget is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide9/data-types/) *Boolean*. It displays a tick if the value is true and remain empty if it is false. 

{{% alert color="info" %}}In native mobile applications, the checkbox widget can be rendered as either a switch (default) or a checkbox. If checkbox, it displays a tick if the value is true and remains empty if it is false. If switch, it displays a track with right-positioned thumb button if the value is true and a left-positioned thumb button if it is false.{{% /alert %}}

A checkbox must be placed in a [data container](/refguide9/data-widgets/) and displays an attribute of the object(s) retrieved by that container. The name of the attribute to be displayed is shown inside the checkbox widget, between square brackets, and colored blue.

For example, this checkbox allows you to see, and set, whether someone is subscribed to your newsletter.

{{< figure src="/attachments/refguide9/modeling/pages/input-widgets/check-box/check-box.png" >}}

## 2 Properties

An example of checkbox properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/input-widgets/check-box/check-box-properties.png"   width="250"  >}}

Checkbox properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [Editability](#editability)
* [Events](#events)
* [Formatting](#formatting)
* [Label](#label)
* [Visibility](#visibility)

### 2.1 Common Section{#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### 2.2 Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide9/data-source-section-link.md" %}}

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}} 

### 2.4 Editability Section{#editability}

{{% snippet file="/static/_includes/refguide9/editability-section-link.md" %}}

### 2.5 Events Section{#events}

#### 2.5.1 On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

#### 2.5.2 On Enter

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

#### 2.5.3 On Leave

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

### 2.6 Formatting Section{#formatting}

The render mode property determines whether the widget renders as a switch or a checkbox.

### 2.7 Label Section{#label}

{{% snippet file="/static/_includes/refguide9/label-section-link.md" %}}

### 2.8 Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide9/visibility-section-link.md" %}}

## 3 Read More

* [Data View](/refguide9/data-view/)
* [Attributes](/refguide9/attributes/)
