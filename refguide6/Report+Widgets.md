---
title: "Report Widgets"
parent: "Pages"
---
With reporting you can create reports over the database data. Reporting is used for creating aggregated information, e.g. total sales per customer.

The difference between a data grid and a basic report is that the data shown in the basic report is not stored in the database. Each time a report is created the data is retrieved from the database. The user can define a wide variety of data sets over the data presented in the report pane. Like for example aggregations, filters, etc.

A report is defined in a [report pane](Report+Pane), which is inserted in a [page](Page).

The top section of the report pane can contain parameter widgets ([drop downs](Drop+Down) and/or [date range selectors](Date+Range+Selector)) through which the end user can filter the displayed data, and a [report button](Report+Button) through which the end user can start the reporting.

The bottom section of the report pane should contain one or more [report charts](Report+Chart) (to show data graphically) and/or [basic reports](Basic+Reports) (to show data in matrices) which define the reports themselves.
