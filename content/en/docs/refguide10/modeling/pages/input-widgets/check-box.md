---
title: "Check Box"
url: /refguide10/check-box/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A **Check box** widget is used to display and, optionally, allow the end-user to edit the value of an attribute or variable of [data type](/refguide10/data-types/) *Boolean*. It displays a tick if the value is true and remain empty if it is false. 

{{% alert color="info" %}}In native mobile applications, the checkbox widget can be rendered as either a switch (default) or a checkbox. If checkbox, it displays a tick if the value is true and remains empty if it is false. If switch, it displays a track with right-positioned thumb button if the value is true and a left-positioned thumb button if it is false.{{% /alert %}}

A checkbox must be placed within a data context to display or edit the intended value:

* A [data container](/refguide10/data-widgets/) widget containing an object
* A snippet containing one or more [parameters](/refguide10/page-properties/#parameters)
* A page or a snippet containing one or more [variables](/refguide10/page-properties/#variables)

The name of the configured value is shown inside the checkbox widget, between square brackets, and colored blue.

For example, this checkbox allows you to see, and set, whether someone is subscribed to your newsletter.

{{< figure src="/attachments/refguide10/modeling/pages/input-widgets/check-box/check-box.png" class="no-border" >}}

## Properties Pane

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

## Properties

### Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide10/data-source-section-link.md" %}}

### Label Section{#label}

{{% snippet file="/static/_includes/refguide10/label-section-link.md" %}}

### Editability Section{#editability}

{{% snippet file="/static/_includes/refguide10/editability-section-link.md" %}}

### Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide10/visibility-section-link.md" %}}

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

## Miscellaneous 

### Formatting Section{#formatting}

The render mode property determines whether the widget renders as a switch or a checkbox.

## Read More

* [Data View](/refguide10/data-view/)
* [Attributes](/refguide10/attributes/)
* [Variables](/refguide10/page-properties/#variables)
