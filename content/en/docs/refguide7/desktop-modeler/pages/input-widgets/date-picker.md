---
title: "Date Picker"
url: /refguide7/date-picker/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A date picker is an [input widget](/refguide7/input-widgets/) that can be used to display and edit date/time attributes. It takes into account the language setting to display a localized calendar.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/date-picker/date-picker.png" >}}
This date picker allows the end-user to set the birth date of the customer.

{{% /alert %}}

## 2 General Properties

### 2.1 Date Format

The date format determines whether the date picker displays the date, time, date and time, or a custom variation of the linked attribute. This does not affect how data is stored; in all cases both a date and a time will be recorded. It merely affects how the data is displayed. How the date and/or time are formatted depends on the localization of the user viewing the data.

These are the possible values:

* **Date** (this is the default)
* **Time**
* **Date and time**
* **Custom** (see below for more details)

### 2.2 Custom Date Format

If you choose 'Custom' as the date format (see above) this property determines how the attribute value is formatted. The custom date format is a string that allows for any combination of symbols found in the table below. Any punctuation will be rendered literally.

{{% snippet file="/static/_includes/refguide7/Custom+Date+Format+Tokens.md" %}}

{{% alert color="info" %}}
Even though a date picker with a custom date format is editable (as of Mendix 7.21.0), the calendar drop-down button will not be shown if the custom format does not represent the full date (meaning, the year [`y`-`yyyy`], month [`M`-`MMMM`], or day of month [`d`-`dd`] tokens are missing in the custom format).
{{% /alert %}}

### 2.3 Placeholder Text

The placeholder text is shown if the date attribute is empty. It can be used to give the end user a hint as to the expected format. Note: placeholder texts will not work if a native date picker is available (for example, iOS and Android versions 4.0 and above).

## 3 Validation Properties

{{% snippet file="/static/_includes/refguide7/Widget+Validation.md" %}}

## 4 Data Source Properties

{{% snippet file="/static/_includes/refguide7/Attribute+Path+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Label+Property.md" %}}

## 5 Editability Properties

{{% snippet file="/static/_includes/refguide7/Editable+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Read+Only+Style.md" %}}

{{% snippet file="/static/_includes/refguide7/Condition+Property.md" %}}

## 6 Visibility Properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}

## 7 Events Properties

{{% snippet file="/static/_includes/refguide7/On+Change+Event.md" %}}

{{% snippet file="/static/_includes/refguide7/On+Enter+event.md" %}}

{{% snippet file="/static/_includes/refguide7/On+Leave+Event.md" %}}

## 8 Common Properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tab+index+Property.md" %}}

## 9 Read More

*   [Data View](/refguide7/data-view/)
*   [Attributes](/refguide7/attributes/)
