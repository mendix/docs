---
title: "Basic Reports"
space: "Reference Guide 6"
parent: "Report+Widgets"
---
<div class="alert alert-info">{% markdown %}

Added in version 6.10.0.

{% endmarkdown %}</div>

A report grid shows the reported data in a grid.

## Data source properties

### Data set

The data set determines which data will be show in the report grid.

## General properties

### Use paging

If the expected quantity of data is too large to be displayed at once, use paging should be true, so that the data is distributed over different pages.

### Page size

If Use paging is true, this property indicates the number of occurrences that's displayed on one page.

### Zoom

The zoom property can refer to a form. When the end user double clicks an occurrence in the report, that form is displayed.

If the other form contains a report, the columns of the current report can be mapped to the parameters of the report in the other form.

### Column widths

The widths of the columns are expressed as a percentage of the total width of the basic report. You can edit this property by dragging the border between the columns.

### Show export button

If this property is true, a button 'Export to Excel' is available for the end users on the report grid.

### Generate report on page load

If this property is false, report grid will not show it's data until the end user presses the [report button](Report+Button). This is especially useful if report uses parameters that should be specified by the end user. 

## Common Properties

### Name, Class, Style

See [Widget Properties](Common+Widget+Properties).
