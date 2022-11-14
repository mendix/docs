---
title: "Columns (Document Template)"
url: /refguide8/columns-document-template/
tags: ["studio pro"]
aliases:
    - /refguide8/columns-(document-template).html
    - /refguide8/Columns+(document+template).html
    - /refguide8/columns-(document-template)
    - /refguide8/Columns+(document+template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/columns-document-template.pdf).
{{% /alert %}}

## 1 Appearance Properties

### 1.1 Caption

The caption of a column is the text that appears as a header above the rows. This is a translatable text. See [Internationalization](/refguide8/translatable-texts/).

### 1.2 Enumeration Format (Only for Attributes of the Enumeration Type)

A column can show its contexts as text (default) or as image.

| Value | Description |
| --- | --- |
| Text | Show the contents of the connected attribute as a text. |
| Image | Show the image of the enumeration value. |

### 1.3 Decimal Precision (Only for Decimal Attributes)

The precision of a value is defined by the number of digits that is used to express that value. This property indicates the number of decimal places (the number of digits following the decimal point).

Default: *2*

### 1.4 Group Digits (Only for Numeric Attributes)

For ease of reading, numbers with many digits before the decimal separator may be divided into groups using a delimiter. This property defines whether the end-user will see these groups, or not.

Default: *False*

### 1.5 Date Format (Only for Attributes of Type **Date and time**)

The date format determines whether the date part, the time part or both are shown. How the date and time parts are formatted depends on the localization of the user using the application.

These are the possible values:

* **Date** *(default)*
* **Time**
* **Date and time**
* **Custom** (see below for more details)

### 1.6 Custom Date Format (Only for Attributes of Type **Date and time**)

If you choose **Custom** as the date format (see above), this property determines how the attribute value is formatted. The custom date format is a string that allows for any combination of symbols found in the table below. Any punctuation will be rendered literally.

{{% snippet file="/static/_includes/refguide8/custom-date-format-tokens.md" %}}

## 2 Data Source Properties

### 2.1 Attribute (Path)

The attribute (path) property specifies the attribute whose value will be displayed in the column. It can be an attribute of the grid entity, or it can be an attribute of an associated entity. The path over which an associated object is accessed is referred to as an attribute path. The path can follow multiple associations of type reference, and at the end (optionally) one of type reference set. If you show a reference set in a column the values will be separated by a comma.
