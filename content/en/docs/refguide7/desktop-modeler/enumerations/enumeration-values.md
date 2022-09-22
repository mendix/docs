---
title: "Enumeration Values"
url: /refguide7/enumeration-values/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

An [enumeration](/refguide7/enumerations/) has one or more enumeration values. Each value represents one of the options.

## Properties

{{% alert color="info" %}}

The name of an enumeration value must be a technical name without spaces and special characters. On the other hand, the caption of an enumeration value can any character. For example, an enumeration value can have 'InProgress' as its name and 'In progress' as its caption.

{{% /alert %}}

### Caption

The caption of an enumeration value is the text that the end user sees for this enumeration value. This is a translatable text. See [Translatable Texts](/refguide7/translatable-texts/).

### Name

The name of an enumeration value is the technical name of the value which is used to refer to the enumeration value in your model.

{{% alert color="warning" %}}

The name of an enumeration value is also used to store the enumeration value in the data database. That is why changing the Name of an enumeration value is not allowed; it would invalidate the data in your database. The caption, however, can be changed without problems and this is the text that the end user gets to see.

{{% /alert %}}

## Image

The image of an enumeration value is used when the values for an attribute (of which the type is the enumeration) are displayed in a data grid column of which the enumeration format is 'Image'. See the documentation on [data grid columns](/refguide7/columns/).
