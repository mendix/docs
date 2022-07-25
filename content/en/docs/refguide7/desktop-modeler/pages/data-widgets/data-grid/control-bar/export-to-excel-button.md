---
title: "Export to excel button"
url: /refguide7/export-to-excel-button/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


This button allows end-users to export the contents of the grid or reference set selector to an excel file. Please note that constraints by use of search fields and sorting will also be exported.

The excel export function relies on a specific data retrieval method. As such, it is only available in list widgets that use the XPath data source. 

## Common properties

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

## General properties

{{% snippet file="/static/_includes/refguide7/Caption+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tooltip+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Image+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Button+Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Is+default+button+Property.md" %}}

### Maximum number of rows

Indicates the maximum number of rows that can be present in the datagrid when exporting. Useful to prevent users from exporting large quantities of data, potentially placing a heavy load on the server.

### Date export format

Defines how dates will be exported. When _Date value_ is selected, date values will be exported as real dates, so that it is possible to use Excel date functions like sorting. When _Text_ is selected, date values will be exported exactly as shown in the data grid.

_Default value:_ Date value

{{% alert color="warning" %}}

When choosing _Date value_, dates will be shown only in the time zone of your Windows account, because Excel does not support defining specific time zones.

{{% /alert %}}

## Visibility properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}
