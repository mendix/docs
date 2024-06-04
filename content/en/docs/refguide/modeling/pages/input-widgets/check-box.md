---
title: "Check Box"
url: /refguide/check-box/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **Check box** widget is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide/data-types/) *Boolean*. It displays a tick if the value is true and remain empty if it is false. 

{{% alert color="info" %}}In native mobile applications, the checkbox widget can be rendered as either a switch (default) or a checkbox. If checkbox, it displays a tick if the value is true and remains empty if it is false. If switch, it displays a track with right-positioned thumb button if the value is true and a left-positioned thumb button if it is false.{{% /alert %}}

A checkbox must be placed in a [data container](/refguide/data-widgets/) and displays an attribute of the object (or objects) retrieved by that container. The name of the attribute to be displayed is shown inside the checkbox widget, between square brackets, and colored blue.

For example, this checkbox allows you to see, and set, whether someone is subscribed to your newsletter.

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/check-box/check-box.png" class="no-border" >}}

## 2 Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Checkbox properties consist of the following sections:

Properties:

* [Data source](#data-source)
* [Label](#label)
* [Editability](#editability)
* [Visibility](#visibility)
* [Common](#common)
* [Events](#events)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

Miscellaneous:

* [Formatting](#formatting)

## 3 Properties

### 3.1 Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide/data-source-section-link.md" %}}

### 3.2 Label Section{#label}

{{% snippet file="/static/_includes/refguide/label-section-link.md" %}}

### 3.3 Editability Section{#editability}

{{% snippet file="/static/_includes/refguide/editability-section-link.md" %}}

### 3.4 Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

### 3.5 Common Section{#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 3.6 Events Section{#events}

#### 3.6.1 On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

#### 3.6.2 On Enter

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

#### 3.6.3 On Leave

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

## 4 Styling

### 4.1 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 4.2 Common Section{#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 5 Miscellaneous 

### 5.1 Formatting Section{#formatting}

The render mode property determines whether the widget renders as a switch or a checkbox.

## 6 Read More

* [Data View](/refguide/data-view/)
* [Attributes](/refguide/attributes/)
