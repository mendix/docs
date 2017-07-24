---
title: "Export To CSV Button"
parent: "control-bar"
---
This button allows end-users to export the contents of the grid or reference set selector to a CSV file. Please note that constraints by use of search fields and sorting will also be exported.

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

### Use grid date format

If true, the date format of the column is used, otherwise a format that is recognized by Excel as a date is used (yyyy-MM-dd).

{{% alert type="info" %}}

The date format of the columns is used to determine whether only the date, only the time or both date and time should be exported in this Excel compatible format.

{{% /alert %}}

### Generate Excel seperator hint

If true, adds an extra line to the CSV file header that informs Excel what the seperator character is. This solves compatibility issues with Excel and localization.

### Default button

See [Button Properties](button-properties)

## Formatting Properties

### Decimal separator

The string used to separate the fractional part from the whole part in Float and Currency values.

_Default value:_ .

### Group separator

The string used to separate groups of digits in large numbers.

_Default value:_ ,

### Delimiter

The string used to delimit values in the resulting CSV file.

_Default value:_ ;

## Visibility Properties

### Visible

See [Button Properties](button-properties).
