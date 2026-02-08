---
title: "Radio Buttons"
url: /refguide8/radio-buttons/
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

{{% alert color="warning" %}}The radio buttons widget is not supported on native mobile pages.{{% /alert %}}

**Radio Buttons** are used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide8/data-types/) *Boolean* or *Enumeration*.

When the page is displayed to the end-user, all the possible values are listed, with a filled-in circle next to the selected value and an empty circle next to the unselected value(s). Only one value can be chosen – choosing another value deselects the current value. For example:

{{< figure src="/attachments/refguide8/modeling/pages/input-widgets/radio-buttons/radio-buttons-displayed.png" class="no-border" >}}

Radio buttons must be placed in a [data widget](/refguide8/data-widgets/) and display an attribute of the object(s) retrieved by that widget. The name of the attribute to be displayed is shown inside the radio button widget, between square brackets, and colored blue.

For example, the following image contains two sets of radio buttons.  The first allows the end-user to see, and set, the value of an enumeration identifying the preferred time to contact this person (**PreferredContact**). The second allows the end-user to see, and set, a Boolean indicating whether this is a **Personal** contact.

{{< figure src="/attachments/refguide8/modeling/pages/input-widgets/radio-buttons/radio-buttons.png" class="no-border" >}}

## 속성

An example of radio button properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/input-widgets/radio-buttons/radio-buttons-properties.png"   width="250"  class="no-border" >}}

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

### Common 섹션{#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 데이터 Source Section{#data-source}

{{% snippet file="/static/_includes/refguide8/data-source-section-link.md" %}}

### Design Properties 섹션{#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### Editability 섹션{#editability}

{{% snippet file="/static/_includes/refguide8/editability-section-link.md" %}}

### 이벤트 Section{#events}

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

### General 섹션{#general}

#### Orientation

This property defines whether the radio buttons are rendered as a **Horizontal** or **Vertical** list.

Default: *Horizontal*

### Label 섹션{#label}

{{% snippet file="/static/_includes/refguide8/label-section-link.md" %}}

### Validation 섹션{#validation}

{{% snippet file="/static/_includes/refguide8/widget-validation-link.md" %}}

### Visibility 섹션{#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## 추가 참조

* [Data view](/refguide8/data-view/)
* [Attributes](/refguide8/attributes/)
