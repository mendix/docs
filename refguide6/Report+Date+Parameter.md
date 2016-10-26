---
title: "Date Range Selector"
space: "Reference Guide 6"
parent: "Report+Widgets"
---

<div class="alert alert-info">{% markdown %}

Introduced in version 6.10.0.

{% endmarkdown %}</div>

With a report date parameter the end user can specify a DateTime parameter of the data set, which is then used for filtering data displayed in the [report](Report+Widgets).

In the report date parameter you can add [date range fields](Date+Range+Field) to make it easier for an end user to select a data range. (This can be done by right clicking the widget and choosing add field from the popup menu.)

## General properties

### Parameter

Refers to the data set parameter of which the value is restricted by this widget. Corresponding data set must be used by one of the report widgets on the page.

### Fields per row

This property indicates how many date range fields can be placed beside each other in a row. (There are always two rows available for data range fields.)

### From caption

Text that's displayed beside the place where an end user can choose **from** which date/time occurrences should be shown in the report.

### To caption

Text that's displayed beside the place where an end user can choose **to** which date/time occurrences should be shown in the report.

### Show from/to

True if fields in which the user can fill in from and to when results should be shown in the report.

False if these fields are not shown, and the filter is thus determined by the date range fields in this date range selector.

### Min. year

Minimum year which can be chosen in a date range field in which the end user can choose a year.

### Max. year

Maximum year which can be chosen in a date range field in which the end user can choose a year.

## Common Properties

### Name, Class, Style

See [Widget Properties](Common+Widget+Properties).
