---
title: "Date Range Field"
url: /refguide7/date-range-field/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


A date range field can be placed inside a date range selector to enable the end user to select a period in a date range. The begin and end of the selected period are stored in the from and to field of the date range selector.

## Appearance Property

### Label

The value of the label property is the text that's displayed beside the date range field.

## Behavior Property

### Type

The type determines the way in which the end user can select a range.

| Type | Behavior |
| --- | --- |
| Year | The parameter is in the year that's chosen by the end user in this date range field. |
| Month | The parameter is in the month that's chosen by the end user in this date range field. |
| Week | The parameter is in the week that's chosen by the end user in this date range field. |
| Period | A date range field of type period lets the end user choose one of the following periods: last week, this week, next week, last month, this month, next month, last quarter, this quarter, next quarter. |
| Quarter | The parameter is in the quarter that's chosen by the end user in this date range field. |
