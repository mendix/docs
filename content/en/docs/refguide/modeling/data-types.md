---
title: "Data Types"
url: /refguide/data-types/
weight: 60
description: "Presents an overview of the data types that Studio Pro supports."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Throughout Studio Pro the same set of data types are used. The exception is the type of [attributes](/refguide/attributes/), which is more specific with regard to storage in the database. In general, an attribute type maps to the data type with the same name. The exceptions are mentioned in the table below.

## Data Types Supported {#supported-data-types}

Mendix supports the following data types:

| Name | Description | Examples |
| --- | --- | --- |
| Boolean | A truth value. | `true` and `false` |
| Binary | Binary data such as files and images. |   |
| Date and time | A point in time consisting of a date and a time component accurate up to milliseconds. | Thursday, 12 February 2015, 14:50:36 |
| Decimal | A high-precision fractional number. The Decimal type can be used for high-precision calculations. Use this type to represent amounts of money for example. A Decimal can have up to 20 digits before the decimal point, and, from Mendix 11.6.0, is configurable between 8 up to 18 after. In versions below 11.6, a Decimal can only have up to 8 digits after the decimal point. | 3.14, 738000000000.00000001 |
| Enumeration | One of the values of the given [enumeration](/refguide/enumerations/). | Red, Green, Blue; Todo, Running, Done |
| <a id="integer-long"></a>Integer/Long | A whole number between -(2^63) and 2^63 - 1. The attribute types AutoNumber, Integer and Long map to this data type. | -42, 0, 123 |
| List | A list of objects of a specific [entity](/refguide/entities/). |   |
| Nothing | No value. Can only be used as the return type of a [microflow](/refguide/microflows/). |   |
| Object | A single object of a specific [entity](/refguide/entities/). |   |
| String | A piece of text that can contain letters, numbers, spaces and other characters. The attribute types **String** and **Hashed string** both map to this data type. | 'Hello World!'; 'Desiderius Erasmus' |

If you want to change data from one type to another (for example, to display a number as part of a message in a text box) you will usually need to use an expression to do this. See [Expressions](/refguide/expressions/) for more information on what is available.

An exception is converting an Integer/Long to a Decimal, where conversion is done implicitly if you provide an Integer/Long where a Decimal is expected.

## Configurable Decimal Scale {#configurable-decimal-scale}

{{% alert color="info" %}}
Decimal scale is configurable in Mendix version 11.6.0 and above.
{{% /alert %}}

As mentioned above, the scale of a decimal is configurable between the values of 8 and 18, where precision will always be scale + 20.  The setting under `App Settings` will apply to the entire application.

{{< figure src="/attachments/refguide/modeling/data-types/decimal-scale-setting.png" >}}

When you adjust the scale of a decimal precision, you will also need to adjust usages of the decimal in frontend elements such as datagrids to respond to the changes.  By default, frontend components format decimals with a fixed scale of 2.  When specifying `fixed` formatting, the UI will display the value rounded or padded to fit into the fixed format.  For example, `1.2345` will result in `1.23` when selecting 2 and `1.23450` when selecting 5.  When `Auto` formatting is specified, the UI will display the value as it is stored.

{{< figure src="/attachments/refguide/modeling/data-types/decimal-scale-formatting.png" >}}
