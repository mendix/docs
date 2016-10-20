---
title: "Report Pane"
parent: "Report+Widgets"
space: "Reference Guide 5"
---


Reports are defined in a report pane, which is inserted in a [page](Pages).

A report pane has a bottom section and a top section, as described below.

## Bottom Section with reports

The reports ([report charts](Report+Chart) and/or [basic reports](Basic+Reports)) are defined in the bottom section of a report pane.

Each report retrieves its data from a [data set](Data+Sets).

## Top Section with parameter widgets

If a data set of a report has parameters, the values for those parameters are supplied by the parameter widgets ([drop downs](Drop+down) and/or [date range selectors](Date+Range+Selector)) in the top section of the report pane. Through these parameter widgets the end user can filter for which data reports should be displayed.

## Behavior Property

### Generate on load

If the top section contains parameter widgets, its generate on load property should be false, and it should also contain a [report button](Report+Button), through which the end user can retrieve the report(s) for the selected filters.

If the top section contains no parameter widgets, its generate on load property should be true.

## Common Properties

### Name, Class, Style

See [Widget Properties](Common+Widget+Properties).
