---
title: "Export to CSV button"
parent: "control-bar"
---


This button allows end-users to export the contents of the grid or reference set selector to a CSV file. Please note that constraints by use of search fields and sorting will also be exported.

The csv export function relies on a specific data retrieval method. As such, it is only available in list widgets that use the XPath data source. 

## Common properties

{{% snippet file="refguide6/Class+Property.md" %}}

{{% snippet file="refguide6/Style+Property.md" %}}

## Formatting properties

### Decimal separator

The string used to separate the fractional part from the whole part in Float, Currency and Decimal values.

_Default value:_ .

### Group separator

The string used to separate groups of digits in large numbers.

_Default value:_ ,

### Delimiter

The string used to delimit values in the resulting CSV file.

_Default value:_ ;

## General properties

{{% snippet file="refguide6/Caption+Property.md" %}}

{{% snippet file="refguide6/Tooltip+Property.md" %}}

{{% snippet file="refguide6/Image+Property.md" %}}

{{% snippet file="refguide6/Button+Style+Property.md" %}}

{{% snippet file="refguide6/Is+default+button+Property.md" %}}

### Maximum number of rows

Indicates the maximum number of rows that can be present in the datagrid when exporting. Useful to prevent users from exporting large quantities of data, potentially placing a heavy load on the server.

### Generate Excel seperator hint

If true, adds an extra line to the CSV file header that informs Excel what the seperator character is. This solves compatibility issues with Excel and localization.

### Use grid date format

If true, the date format of the column is used, otherwise a format that is recognized by Excel as a date is used (yyyy-MM-dd).

## Visibility properties

{{% alert type="info" %}}
Conditional visibility settings were added in version 5.10.0.
{{% /alert %}}

{{% snippet file="refguide6/Visibility+Property+With+Module+Roles+Simple.md" %}}
