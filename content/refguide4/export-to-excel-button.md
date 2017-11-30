---
title: "Export To Excel Button"
parent: "control-bar"
---
This button allows end-users to export the contents of the grid or reference set selector to an excel file. Please note that constraints by use of search fields and sorting will also be exported.

## Appearance Properties

### Image

See [Button Properties](button-properties)

### Caption

See [Button Properties](button-properties)

### Class

See [Button Properties](button-properties)

### Style

See [Button Properties](button-properties)

## Behavior Properties

### Maximum number of rows

Indicates the maximum number of rows that can be present in the datagrid when exporting. Useful to prevent users from exporting large quantities of data, potentially placing a heavy load on the server.

### Date export format

_Since:_ Mendix 4.8

Defines how dates will be exported. When _Date value_ is selected, date values will be exported as real dates, so that it is possible to use Excel date functions like sorting. When _Text_ is selected, date values will be exported exactly as shown in the data grid.

_Default value:_ Date value

{{% alert type="warning" %}}

When choosing _Date value_, dates will be shown only in the time zone of your Windows account, because Excel does not support defining specific time zones.

{{% /alert %}}

### Default button

See [Button Properties](button-properties)

## Visibility Properties

### Visible

See [Button Properties](button-properties).
