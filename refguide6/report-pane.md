---
title: "Report Pane"
space: "Reference Guide 6"
parent: "report-widgets"
---

<div class="alert alert-info">{% markdown %}

This has been removed in version 6.10.0 as it is unnecessary.

{% endmarkdown %}</div>

Reports are defined in a report pane, which is inserted in a [page](/refguide6/pages).

A report pane has a bottom section and a top section, as described below.

## Bottom Section with reports

The reports ([report charts](/refguide6/report-chart) and/or [basic reports](/refguide6/basic-reports)) are defined in the bottom section of a report pane.

Each report retrieves its data from a [data set](/refguide6/data-sets).

## Top Section with parameter widgets

If a data set of a report has parameters, the values for those parameters are supplied by the parameter widgets ([drop downs](/refguide6/drop-down) and/or [date range selectors](/refguide6/date-range-selector)) in the top section of the report pane. Through these parameter widgets the end user can filter for which data reports should be displayed.

## Behavior Property

### Generate on load

If the top section contains parameter widgets, its generate on load property should be false, and it should also contain a [report button](/refguide6/report-button), through which the end user can retrieve the report(s) for the selected filters.

If the top section contains no parameter widgets, its generate on load property should be true.

## Common Properties

### Name, Class, Style

See [Widget Properties](/refguide6/common-widget-properties).
