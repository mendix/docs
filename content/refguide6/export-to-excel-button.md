---
title: "Export to excel button"
parent: "control-bar"
---


This button allows end-users to export the contents of the grid or reference set selector to an excel file. Please note that constraints by use of search fields and sorting will also be exported.

The excel export function relies on a specific data retrieval method. As such, it is only available in list widgets that use the XPath data source. 

## Common properties

{{% snippet file="refguide6/Class+Property.md" %}}

{{% snippet file="refguide6/Style+Property.md" %}}

## General properties

{{% snippet file="refguide6/Caption+Property.md" %}}

{{% snippet file="refguide6/Tooltip+Property.md" %}}

{{% snippet file="refguide6/Image+Property.md" %}}

{{% snippet file="refguide6/Button+Style+Property.md" %}}

{{% snippet file="refguide6/Is+default+button+Property.md" %}}

### Maximum number of rows

Indicates the maximum number of rows that can be present in the datagrid when exporting. Useful to prevent users from exporting large quantities of data, potentially placing a heavy load on the server.

### Date export format

Defines how dates will be exported. When _Date value_ is selected, date values will be exported as real dates, so that it is possible to use Excel date functions like sorting. When _Text_ is selected, date values will be exported exactly as shown in the data grid.

_Default value:_ Date value

{{% alert type="warning" %}}

When choosing _Date value_, dates will be shown only in the time zone of your Windows account, because Excel does not support defining specific time zones.

{{% /alert %}}

## Visibility properties

{{% alert type="info" %}}
Conditional visibility settings were added in version 5.10.0.
{{% /alert %}}

{{% snippet file="refguide6/Visibility+Property+With+Module+Roles+Simple.md" %}}
