---
title: "Reporting"
parent: "web-forms"
---
With reporting you can create reports over the database data. Reporting is used for creating aggregated information, e.g. total sales per customer.

The difference between a datagrid and a report matrix is that the data shown in the report matrix is not stored in the database. Each time a report is created the data is retrieved from the database. The user can define a wide variety of data sets over the data presented in the report pane. Like for example aggregations, filters, etc.

A report is defined in a [report pane](report-pane), which is inserted in a [form](forms).

The top section of the report pane can contain parameter widgets ([drop downs](drop-down) and/or [date range selectors](date-range-selector)) through which the end user can filter the displayed data, and a [report button](report-button) through which the end user can start the reporting.

The bottom section of the report pane should contain one or more [report charts](report-chart) (to show data graphically) and/or [basic reports](basic-reports) (to show data in matrices) which define the reports themselves.
