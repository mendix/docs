---
title: "Date Picker"
url: /refguide10/date-picker/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A **date picker** is used to display and, optionally, allow the end-user to edit the value of an attribute or a variable of [data type](/refguide10/data-types/) *Date and Time*. It uses the values set in the **Languages** tab of **App Settings** to display a correctly localized value to the end-user, using the **Language** object associated with the end-user.

A date picker must be placed within a data context to display or edit the intended value:

* A [data container](/refguide10/data-widgets/) widget containing an object
* A snippet containing one or more [parameters](/refguide10/page-properties/#parameters)
* A page or a snippet containing one or more [variables](/refguide10/page-properties/#variables)

The name of the configured value is shown inside the date picker widget, between square brackets, and colored blue.

For example, the following date picker allows the end-user to see, and set, the **LastContacted** date of a customer.

{{< figure src="/attachments/refguide10/modeling/pages/input-widgets/date-picker/date-picker.png" class="no-border" >}}

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Date picker properties consist of the following sections:

Properties:

* [General](#general)
* [Data Source](#data-source)
* [Label](#label)
* [Editability](#editability)
* [Visibility](#visibility)
* [Validation](#validation)
* [Accessibility](#accessibility)
* [Common](#common)
* [Events](#events)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

## Properties

### General Section{#general}

#### Date Format

The date format determines whether the date picker displays the values as a date, time, date and time, or in a custom format.

The format chosen here does not affect how data is stored; in all cases both a date and a time will be recorded. It merely affects how the data is displayed. The date and/or time formats also depend on the localization (language) of the end-user viewing the data.

The possible values for date format are shown below:

* **Date** *(default)*
* **Time**
* **Date and time**
* **Custom** (see below for more details)

#### Custom Date Format

If you choose **Custom** as the date format (see above), this property determines how the value is formatted. The custom date format is a string that allows for any combination of symbols found in the table below. Any punctuation will be rendered literally.

{{% alert color="info" %}}
When using `yyyy` custom format and typing `yy` in the date picker widget, the century guessing by proximity follows the rule of **50/50**. Specifically, it adjusts dates to be within 50 years before and 50 years after the time the date format instance is created:

* `24` {{< icon name="arrow-narrow-right" >}} `2024`
* `75` {{< icon name="arrow-narrow-right" >}} `1975`
{{% /alert %}}

{{% snippet file="/static/_includes/refguide10/custom-date-format-tokens.md" %}}

{{% alert color="info" %}}
Even though a date picker with a custom date format is editable, the calendar drop-down button will only be shown if the custom format represents a full date (that is, the year [`y`-`yyyy`], month [`M`-`MMMM`], and day of month [`d`-`dd`] tokens are all present in the custom format).
{{% /alert %}}

#### Placeholder Text

The placeholder text is shown if the date value is empty. It can be used to give the end-user a hint as to the expected format.

{{% alert color="warning" %}}
Placeholder text will not be displayed if a native date picker is available (that is, for iOS and Android versions 4.0 and above).
{{% /alert %}}

### Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide10/data-source-section-link.md" %}}

### Label Section{#label}

{{% snippet file="/static/_includes/refguide10/label-section-link.md" %}}

### Editability Section{#editability}

{{% snippet file="/static/_includes/refguide10/editability-section-link.md" %}}

### Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide10/visibility-section-link.md" %}}

### Validation Section{#validation}

{{% snippet file="/static/_includes/refguide10/widget-validation-link.md" %}}

### Accessibility Section{#accessibility}

#### Aria Required

In a text area widget, when **Aria required** is set to **Yes** then assistive technologies will read out the field that is required. When set to **No** then assistive technologies will not read the field out.

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

## Read More

* [Data View](/refguide10/data-view/)
* [Attributes](/refguide10/attributes/)
* [Variables](/refguide10/page-properties/#variables)
