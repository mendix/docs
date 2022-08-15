---
title: "Dynamic Label (Document Template)"
url: /refguide8/dynamic-label-document-template/
tags: ["studio pro"]
aliases:
    - /refguide8/Dynamic+label+(document+template).html
    - /refguide8/dynamic-label-(document-template).html
    - /refguide8/Dynamic+label+(document+template)
    - /refguide8/dynamic-label-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/dynamic-label-document-template.pdf).
{{% /alert %}}

## 1 Introduction

A dynamic label is used for the same kind of attributes as a text box from the page editor. It can be used to display a text value.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918131.png" >}}

A dynamic label linking to a customer name.

{{% /alert %}}

## 2 Appearance Properties

### 2.1 Style

For details, see [Style](/refguide8/style/).

### 2.2 Render XHTML

If you set the property 'Render XHTML' to true, the attribute connected to this label is assumed to contain XHTML and will be rendered as such. This is useful when you want to incorporate rich text in a document template. This property can only be true for attributes of type String.

The contents MUST be valid XHTML to render without errors.

Default: *False*

### 2.3 Decimal Precision (Only for Decimal Attributes)

The precision of a value is defined by the number of digits that is used to express that value. This property indicates the number of decimal places (the number of digits following the decimal point) that will be rendered in the widget.

Default: *2*

### 2.4 Group Digits (Only for Numeric Attributes)

For ease of reading, numbers with many digits in front of the decimal separator may be divided into groups using a delimiter. This property defines whether the end-user will see these groups, or not.

Default: *False*

### 2.5 Date Format (Only for Attributes of Type **Date and time**)

The date format determines whether the date part, the time part or both are shown. How the date and time parts are formatted depends on the localization of the user using the application.

These are the possible values:

* **Date** *(default)*
* **Time**
* **Date and time**
* **Custom** (see below for more details)

### 2.6 Custom Date Format (Only for Attributes of Type **Date and time**)

If you choose **Custom** as the date format (see above), this property determines how the attribute value is formatted. The custom date format is a string that allows for any combination of symbols found in the table below. Any punctuation will be rendered literally.

{{% snippet file="/static/_includes/refguide8/custom-date-format-tokens.md" %}}

## 3 Common Properties

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}

## 4 Data Source Properties

### 4.1 Attribute (Path)

The attribute (path) property specifies which attribute will be shown in the dynamic label.
