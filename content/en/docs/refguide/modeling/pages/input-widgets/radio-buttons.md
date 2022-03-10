---
title: "Radio Buttons"
url: /refguide/radio-buttons/
parent: "input-widgets"
menu_order: 50
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert type="warning" %}}The radio buttons widget is not supported on native mobile pages.{{% /alert %}}

**Radio Buttons** are used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide/data-types/) *Boolean* or *Enumeration*.

When the page is displayed to the end-user, all the possible values are listed, with a filled-in circle next to the selected value and an empty circle next to the unselected value(s). Only one value can be chosen – choosing another value deselects the current value. For example:

![](/attachments/refguide/modeling/pages/input-widgets/radio-buttons/radio-buttons-displayed.png)

Radio buttons must be placed in a [data widget](/refguide/data-widgets/) and display an attribute of the object(s) retrieved by that widget. The name of the attribute to be displayed is shown inside the radio button widget, between square brackets, and colored blue.

For example, the following image contains two sets of radio buttons.  The first allows the end-user to see, and set, the value of an enumeration identifying the preferred time to contact this person (**PreferredContact**). The second allows the end-user to see, and set, a Boolean indicating whether this is a **Personal** contact.

![](/attachments/refguide/modeling/pages/input-widgets/radio-buttons/radio-buttons.png)

## 2 Properties

An example of radio button properties is represented in the image below:

{{% image_container width="250" %}}![](/attachments/refguide/modeling/pages/input-widgets/radio-buttons/radio-buttons-properties.png)
{{% /image_container %}}

Radio button properties consist of the following sections:

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

{{% snippet file="refguide/data-source-section-link.md" %}}

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="refguide/design-section-link.md" %}} 

### 2.4 Editability Section{#editability}

{{% snippet file="refguide/editability-section-link.md" %}}

### 2.5 Events Section{#events}

#### 2.5.1 On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="refguide/events-section-link.md" %}}

#### 2.5.2 On Enter

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="refguide/events-section-link.md" %}}

#### 2.5.3 On Leave

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="refguide/events-section-link.md" %}}

### 2.6 General Section{#general}

#### 2.6.1 Orientation

This property defines whether the radio buttons are rendered as a **Horizontal** or **Vertical** list.

Default: *Horizontal*

### 2.7 Label Section{#label}

{{% snippet file="refguide/label-section-link.md" %}}

### 2.8 Validation Section{#validation}

{{% snippet file="refguide/widget-validation-link.md" %}}

### 2.9 Visibility Section{#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Read More

*   [Data view](/refguide/data-view/)
*   [Attributes](/refguide/attributes/)
