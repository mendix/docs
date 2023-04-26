---
title: "Report Date Parameter"
url: /refguide7/report-date-parameter/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---



With the report date parameter, the user can specify the DateTime parameter of the dataset, which is then used for filtering the data displayed in the [Report](/refguide7/report-widgets/).

In the report date parameter you can add [Date Range Fields](/refguide7/date-range-field/) to make it easier for an end user to select a data range. To do this, right-click the widget and choose **Add field** from the pop-up menu.

## General Properties

### Parameter

This refers to the dataset parameter, the value of which is restricted by this widget. The corresponding dataset must be used by one of the report widgets on the page.

### Fields Per Row

This property indicates how many date range fields can be placed beside each other in a row. There are always two rows available for data range fields.

### From Caption

This is the text that is displayed beside the place where the user can choose **from** which date/time occurrences should be shown in the report.

### To Caption

This is the text that is displayed beside the place where the user can choose **to** which date/time occurrences should be shown in the report.

### Show From/To

This is true if the **from** and **to** field results should be shown in the report.

This is false if the **from** and **to** field results should not be shown and the filter is thus determined by the date range fields in this date range selector.

### Min. Year

This is the minimum year that can be chosen in the date range field where the user can choose the year.

### Max. year

This is the maximum year that can be chosen in the date range field where the end user can choose the year.

## Common Properties

### Name, Class, Style

For details, see [Widget Properties](/refguide7/common-widget-properties/).
