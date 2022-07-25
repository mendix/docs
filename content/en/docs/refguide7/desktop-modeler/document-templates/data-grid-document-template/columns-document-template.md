---
title: "Columns (Document Template)"
url: /refguide7/columns-document-template/
aliases:
    - /refguide7/Columns+(document+template).html
    - /refguide7/columns-(document-template).html
    - /refguide7/Columns+(document+template)
    - /refguide7/columns-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


## Appearance Properties

### Caption

The caption of a column is the text that appears as a header above the rows. This is a translatable text. See [Internationalization](/refguide7/translatable-texts/).

### Enumeration Format (Only for Attributes of the Enumeration Type)

A column can show its contexts as text (default) or as image.

| Value | Description |
| --- | --- |
| Text | Show the contents of the connected attribute as a text. |
| Image | Show the image of the enumeration value. |

### Decimal Precision (Only for Decimal Attributes)

The precision of a value is defined by the number of digits that is used to express that value. This property indicates the number of decimal places (the number of digits following the decimal point).

_Default value:_ 2

### Group Digits (Only for Numeric Attributes)

For ease of reading, numbers with many digits before the decimal separator may be divided into groups using a delimiter. This property defines whether the end user will see these groups, or not.

_Default value:_ False

### Date Format (Only for Attributes of the DateTime Type)

The date format determines whether the date part, the time part or both are shown. How the date and time parts are formatted depends on the localization of the user using the application. Alternatively, as of version 2.5.3 you can completely customize the format of the date and/or time by supplying a date format string.

Possible values: 'Date', 'Time', 'Date and time' and in 2.5.3 'Custom'.

_Default value:_ Date

### Custom Date Format (Only for Attributes of the DateTime Type)

If you choose 'Custom' as the date format (see above) the custom date format determines the way date and/or time are formatted. The custom date format is a string that follows the rules described in
[http://download.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html](http://download.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html).

{{% alert color="info" %}}

The custom date format
`EEE, MMM d, yy`
results in the following text
`Wed, Jul 4, 01`

{{% /alert %}}

## Data Source Properties

### Attribute (Path)

The attribute (path) property specifies the attribute whose value will be displayed in the column. It can be an attribute of the grid entity, or it can be an attribute of an associated entity. The path over which an associated object is accessed is referred to as an attribute path. The path can follow multiple associations of type reference, and at the end (optionally) one of type reference set. If you show a reference set in a column the values will be separated by a comma.
