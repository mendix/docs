---
title: "Reporting"
category: "refguide4"
space: "Reference Guide 4"
---
With reporting you can create reports over the database data. Reporting is used for creating aggregated information, e.g. total sales per customer.

The difference between a datagrid and a report matrix is that the data shown in the report matrix is not stored in the database. Each time a report is created the data is retrieved from the database. The user can define a wide variety of data sets over the data presented in the report pane. Like for example aggregations, filters, etc.

A report is defined in a [report pane](https://world.mendix.com/display/refguide3/Report+Pane), which is inserted in a [form](https://world.mendix.com/display/refguide3/Forms).

The top section of the report pane can contain parameter widgets ([drop downs](https://world.mendix.com/display/refguide3/Drop+Down) and/or [date range selectors](https://world.mendix.com/display/refguide3/Date+Range+Selector)) through which the end user can filter the displayed data, and a [report button](https://world.mendix.com/display/refguide3/Report+Button) through which the end user can start the reporting.

The bottom section of the report pane should contain one or more [report charts](https://world.mendix.com/display/refguide3/Report+Chart) (to show data graphically) and/or [basic reports](https://world.mendix.com/display/refguide3/Basic+Reports) (to show data in matrices) which define the reports themselves.

## Related Articles

*   [How To: Create a report and add widgets to it](https://world.mendix.com/display/howto25/Create+a+report+and+add+widgets+to+it)