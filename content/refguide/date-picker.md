---
title: "Date Picker"
parent: "input-widgets"
---

## Introduction

A date picker is an [input widget](input-widgets) that can be used to display and edit date/time attributes. It takes into account the language setting to display a localized calendar.

{{% alert type="info" %}}

![](attachments/16713882/16844001.png)
This date picker allows the end-user to set the birth date of the customer.

{{% /alert %}}

## General Properties

### Date Format

The date format determines whether the date picker displays the date, time, date and time, or a custom variation of the linked attribute. This does not affect how data is stored; in all cases both a date and a time will be recorded. It merely affects how the data is displayed. How the date and/or time are formatted depend on the localization of the user viewing the data.

These are the possible values:
* **Date** (this is the default)
* **Time**
* **Date and time**
* **Custom** (see below for more deteails)

### Custom Date Format

If you choose **Custom** as the date format, this property determines how the attribute value is formatted. The custom date format is a string that allows for any combination of symbols found in the table below. Any punctuation will be rendered literally.

| Symbol | Number of Symbols | Example | Example Result | Description |
| --- | --- | --- | --- | --- |
| G | 1 | G | AD | Era |
| y | 1–n | y | 2010 | Year |
| M | 1–2 | MM | 09 | Month (number) |
| M | 3 | MMM | Sept | Month (abbreviation) |
| M | 4 | MMMM | September | Month (full) |
| w | 1–2 | w | 12 | Week of year |
| d | 1–2 | dd | 08 | Day (of month) |
| D | 1–3 | DD | 083 | Day (of year) |
| a | 1 | a |AM | AM or PM |
| h | 1–2 | h | 11 | Hour (1-12) |
| H | 1–2 | HH | 09 | Hour (0-23) |
| k | 1–2 | k | 11 | Hour (1-24) |
| K | 1–2 | KK | 05 | Hour (0-11) |
| m | 1–2 | m | 59 | Minute |
| s | 1–2 | ss | 06 | Second |
| S | 1–3 | S | 153 | Milliseconds  |
| E | 1–3 | E | Thu | Day of week (abbreviation) |
| E | 4 | EEEE | Thursday | Day of week (full) |
| z | 1–3 | z | PST | Time zone (initialism) |
| z | 4 | zzzz | Pacific Standard Time | Time zone (full) |
| Z | 4 | ZZZZ | GMT-04:0 0 | Time zone offset |

{{% alert type="info" %}}

These are some examples:

| Format | Example Output |
| --- | --- |
| `EEEE d MMMM yyy G, h:mm a ss's` | Tuesday 29 March 2011 AD, 1:37 PM 48s |
| `h:mm a` | 1:37 PM |
| `yyy D KK:mm` | 2011 88 01:26 |
| `EEEE MMMM d yyy` | Tuesday March 29 2011 |
| `EEE, MMM dd, ''yy` | Wed, Jul 04, '01 |

{{% /alert %}}

### Placeholder Text

The placeholder text is shown if the date attribute is empty. It can be used to give the end user a hint as to the expected format. Note: placeholder texts will not work if a native date picker is available (e.g. iOS and Android versions 4.0 and higher).

{{% snippet file="refguide/Required+Property.md" %}}

{{% snippet file="refguide/Required+message+Property.md" %}}

## Data Source Properties

{{% snippet file="refguide/Attribute+Path+Property.md" %}}

{{% snippet file="refguide/Label+Property.md" %}}

## Editability Properties

{{% snippet file="refguide/Editable+Property.md" %}}

{{% snippet file="refguide/Read+Only+Style.md" %}}

{{% snippet file="refguide/Condition+Property.md" %}}

## Visibility Properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Simple.md" %}}

## Events Properties

{{% snippet file="refguide/On+Change+Event.md" %}}

{{% snippet file="refguide/On+Enter+event.md" %}}

{{% snippet file="refguide/On+Leave+Event.md" %}}

## Common Properties

{{% snippet file="refguide/Name+Property.md" %}}

{{% snippet file="refguide/Class+Property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

{{% snippet file="refguide/Tab+index+Property.md" %}}

## Related Content

*   [Data View](data-view)
*   [Attributes](attributes)
