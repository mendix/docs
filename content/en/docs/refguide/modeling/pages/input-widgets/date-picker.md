---
title: "Date Picker"
url: /refguide/date-picker/
weight: 60
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **date picker** is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide/data-types/) *Date and Time*. It uses the values set in the **Languages** tab of **App Settings** to display a correctly localized value to the end-user, using the **Language** object associated with the end-user.

A date picker must be placed in a [data widget](/refguide/data-widgets/) and displays an attribute of the object(s) retrieved by that widget. The name of the attribute to be displayed is shown inside the date picker, between square brackets, and colored blue.

For example, the following date picker allows the end-user to see, and set, the **LastContacted** date of a customer.

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/date-picker/date-picker.png" >}}

## 2 Properties

An example of date picker properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/date-picker/date-picker-properties.png"   width="250"  >}}

Date picker properties consist of the following sections:

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

#### 2.6.1 Date Format

The date format determines whether the date picker displays the attribute values as a date, time, date and time, or in a custom format.

The format chosen here does not affect how data is stored; in all cases both a date and a time will be recorded. It merely affects how the data is displayed. The date and/or time formats also depend on the localization (language) of the end-user viewing the data.

The possible values for date format are shown below:

* **Date** *(default)*
* **Time**
* **Date and time**
* **Custom** (see below for more details)

#### 2.6.2 Custom Date Format

If you choose **Custom** as the date format (see above), this property determines how the attribute value is formatted. The custom date format is a string that allows for any combination of symbols found in the table below. Any punctuation will be rendered literally.

{{% snippet file="/static/_includes/refguide/custom-date-format-tokens.md" %}}

{{% alert color="info" %}}
Even though a date picker with a custom date format is editable, the calendar drop-down button will only be shown if the custom format represents a full date (that is, the year [`y`-`yyyy`], month [`M`-`MMMM`], and day of month [`d`-`dd`] tokens are all present in the custom format).
{{% /alert %}}

#### 2.6.3 Placeholder Text

The placeholder text is shown if the date attribute is empty. It can be used to give the end-user a hint as to the expected format.

{{% alert color="warning" %}}
Placeholder text will not be displayed if a native date picker is available (that is, for iOS and Android versions 4.0 and above).
{{% /alert %}}

### 2.7 Label Section{#label}

{{% snippet file="/static/_includes/refguide/label-section-link.md" %}}

### 2.8 Validation Section{#validation}

{{% snippet file="/static/_includes/refguide/widget-validation-link.md" %}}

### 2.9 Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## 3 Read More

*   [Data View](/refguide/data-view/)
*   [Attributes](/refguide/attributes/)
