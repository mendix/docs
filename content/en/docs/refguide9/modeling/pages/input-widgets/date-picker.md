---
title: "Date Picker"
url: /refguide9/date-picker/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A **date picker** is used to display and, optionally, allow the end-user to edit the value of an attribute of [data type](/refguide9/data-types/) *Date and Time*. It uses the values set in the **Languages** tab of **App Settings** to display a correctly localized value to the end-user, using the **Language** object associated with the end-user.

A date picker must be placed in a [data container](/refguide9/data-widgets/) and displays an attribute of the object(s) retrieved by that container. The name of the attribute to be displayed is shown inside the date picker, between square brackets, and colored blue.

For example, the following date picker allows the end-user to see, and set, the **LastContacted** date of a customer.

{{< figure src="/attachments/refguide9/modeling/pages/input-widgets/date-picker/date-picker.png" class="no-border" >}}

## Properties

An example of date picker properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/input-widgets/date-picker/date-picker-properties.png"   width="250"  class="no-border" >}}

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

### Common Section{#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide9/data-source-section-link.md" %}}

### Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}} 

### Editability Section{#editability}

{{% snippet file="/static/_includes/refguide9/editability-section-link.md" %}}

### Events Section{#events}

#### On Change{#on-change}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

#### On Enter

The on-enter property specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

#### On Leave

The on-leave property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget.

This differs from the [On change](#on-change) property in that the event will always be triggered, even if the value has not been changed.

{{% snippet file="/static/_includes/refguide9/events-section-link.md" %}}

### General Section{#general}

#### Date Format

The date format determines whether the date picker displays the attribute values as a date, time, date and time, or in a custom format.

The format chosen here does not affect how data is stored; in all cases both a date and a time will be recorded. It merely affects how the data is displayed. The date and/or time formats also depend on the localization (language) of the end-user viewing the data.

The possible values for date format are shown below:

* **Date** *(default)*
* **Time**
* **Date and time**
* **Custom** (see below for more details)

#### Custom Date Format

If you choose **Custom** as the date format (see above), this property determines how the attribute value is formatted. The custom date format is a string that allows for any combination of symbols found in the table below. Any punctuation will be rendered literally.

{{% alert color="info" %}}
When using `yyyy` custom format and typing `yy` in the date picker widget, the century guessing by proximity follows the rule of **50/50**. Specifically, it adjusts dates to be within 50 years before and 50 years after the time the date format instance is created:

* `24` {{< icon name="arrow-narrow-right" >}} `2024`
* `75` {{< icon name="arrow-narrow-right" >}} `1975`
{{% /alert %}}

{{% snippet file="/static/_includes/refguide9/custom-date-format-tokens.md" %}}

{{% alert color="info" %}}
Even though a date picker with a custom date format is editable, the calendar drop-down button will only be shown if the custom format represents a full date (that is, the year [`y`-`yyyy`], month [`M`-`MMMM`], and day of month [`d`-`dd`] tokens are all present in the custom format).
{{% /alert %}}

#### Placeholder Text

The placeholder text is shown if the date attribute is empty. It can be used to give the end-user a hint as to the expected format.

{{% alert color="warning" %}}
Placeholder text will not be displayed if a native date picker is available (that is, for iOS and Android versions 4.0 and above).
{{% /alert %}}

### Label Section{#label}

{{% snippet file="/static/_includes/refguide9/label-section-link.md" %}}

### Validation Section{#validation}

{{% snippet file="/static/_includes/refguide9/widget-validation-link.md" %}}

### Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide9/visibility-section-link.md" %}}

## Read More

* [Data View](/refguide9/data-view/)
* [Attributes](/refguide9/attributes/)
