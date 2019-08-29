---
title: "Export to CSV Button"
parent: "control-bar"
menu_order: 90
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


This button allows end-users to export the contents of the grid or reference set selector to a CSV file. Please note that constraints by use of search fields and sorting will also be exported.

The csv export function relies on a specific data retrieval method. As such, it is only available in list widgets that use the XPath data source. 

## Common properties

{{% snippet file="refguide/class-property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

## Formatting properties

### Decimal separator

The string used to separate the fractional part from the whole part in Decimal values.

_Default value:_ .

### Group separator

The string used to separate groups of digits in large numbers.

_Default value:_ ,

### Delimiter

The string used to delimit values in the resulting CSV file.

_Default value:_ ;

## General properties

{{% snippet file="refguide/caption-property.md" %}}

{{% snippet file="refguide/Tooltip+Property.md" %}}

{{% snippet file="refguide/image-property.md" %}}

{{% snippet file="refguide/button-style-property.md" %}}

{{% snippet file="refguide/is-default-button-property.md" %}}

### Maximum number of rows

Indicates the maximum number of rows that can be present in the datagrid when exporting. Useful to prevent users from exporting large quantities of data, potentially placing a heavy load on the server.

### Generate Excel seperator hint

If true, adds an extra line to the CSV file header that informs Excel what the seperator character is. This solves compatibility issues with Excel and localization.

### Use grid date format

If true, the date format of the column is used, otherwise a format that is recognized by Excel as a date is used (yyyy-MM-dd).

## Visibility properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Simple.md" %}}
