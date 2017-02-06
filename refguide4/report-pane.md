---
title: "Report Pane"
category: "refguide4"
space: "Reference Guide 4"
---
Reports are defined in a report pane, which is inserted in a [form](https://world.mendix.com/display/refguide3/Forms).

A report pane has a bottom section and a top section, as described below.

## Bottom Section with reports

The reports ([report charts](https://world.mendix.com/display/refguide3/Report+Chart) and/or [basic reports](https://world.mendix.com/display/refguide3/Basic+Reports)) are defined in the bottom section of a report pane.

Each report retrieves its data from a [data set](https://world.mendix.com/display/refguide3/Data+Sets).

## Top Section with parameter widgets

If a data set of a report has parameters, the values for those parameters are supplied by the parameter widgets ([drop downs](https://world.mendix.com/display/refguide3/Drop+Down) and/or [date range selectors](https://world.mendix.com/display/refguide3/Date+Range+Selector)) in the top section of the report pane. Through these parameter widgets the end user can filter for which data reports should be displayed.

## Behavior Property

### Generate on load

If the top section contains parameter widgets, its generate on load property should be false, and it should also contain a [report button](https://world.mendix.com/display/refguide3/Report+Button), through which the end user can retrieve the report(s) for the selected filters.

If the top section contains no parameter widgets, its generate on load property should be true.

## Common Properties

### Name

See [Widget Properties](https://world.mendix.com/display/refguide3/Widget+Properties#WidgetProperties-CommonProperties).

### Class

See [Widget Properties](https://world.mendix.com/display/refguide3/Widget+Properties#WidgetProperties-CommonProperties).

### Style

See [Widget Properties](https://world.mendix.com/display/refguide3/Widget+Properties#WidgetProperties-CommonProperties).

## Related Articles

*   [How To: Connect parameter widgets to a data set](https://world.mendix.com/display/howto25/Connect+parameter+widgets+to+a+data+set)