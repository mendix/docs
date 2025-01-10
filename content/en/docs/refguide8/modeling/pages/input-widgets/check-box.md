---
title: "Check Box"
url: /refguide8/check-box/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A **Check box** widget is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide8/data-types/) *Boolean*. It displays a tick if the value is true and remain empty if it is false.

{{% alert color="info" %}}In native mobile applications, the checkbox widget is rendered as a toggle.{{% /alert %}}

A checkbox must be placed in a [data widget](/refguide8/data-widgets/) and displays an attribute of the object(s) retrieved by that widget. The name of the attribute to be displayed is shown inside the checkbox widget, between square brackets, and colored blue.

For example, this checkbox allows you to see, and set, whether someone is subscribed to your newsletter.

{{< figure src="/attachments/refguide8/modeling/pages/input-widgets/check-box/check-box.png" class="no-border" >}}

## Properties

An example of checkbox properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/input-widgets/check-box/check-box-properties.png"   width="250"  class="no-border" >}}

Checkbox properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [Editability](#editability)
* [Events](#events)
* [Label](#label)
* [Visibility](#visibility)

### Common Section{#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide8/data-source-section-link.md" %}}

### Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### Editability Section{#editability}

{{% snippet file="/static/_includes/refguide8/editability-section-link.md" %}}

### Events Section{#events}

#### On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="/static/_includes/refguide8/events-section-link.md" %}}

#### On Enter

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="/static/_includes/refguide8/events-section-link.md" %}}

#### On Leave

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide8/events-section-link.md" %}}

### Label Section{#label}

{{% snippet file="/static/_includes/refguide8/label-section-link.md" %}}

### Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## Read More

* [Data View](/refguide8/data-view/)
* [Attributes](/refguide8/attributes/)
