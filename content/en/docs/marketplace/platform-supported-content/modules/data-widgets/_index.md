---
title: "Data Widgets"
url: /appstore/modules/data-widgets/
description: "Describes the configuration and usage of the Data Widgets module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

[Data Widgets](https://marketplace.mendix.com/link/component/116540) is a module containing widgets that show data in a specific structure.

This module contains the following widgets:

* [Data Grid 2](/appstore/modules/data-grid-2/)
* [Data Grid 2 Properties](/appstore/modules/data-grid-2-properties/)
* [Date Filter](/appstore/modules/datagrid-date-filter/)
* [Drop-Down Sort](/appstore/modules/gallery/#dropdown)
* [Drop-Down Filter](/appstore/modules/datagrid-dropdown-filter/)
* [Gallery](/appstore/modules/gallery/)
* [Number Filter](/appstore/modules/datagrid-number-filter/)
* [Selection Helper](/appstore/modules/selection-helper/)
* [Text Filter](/appstore/modules/datagrid-text-filter/)
* [Tree Node](/appstore/modules/tree-node/)

Data Widgets version 3.11.10 requires Studio Pro 10.24.0 or above.

## JavaScript Actions {#javascript-actions}

The module also contains the following JavaScript actions, which you can call from a nanoflow. Each action takes the name of the target widget, which you can find in the widget properties under **Common** > **Name**:

* `Reset_Filter` – Resets a single filter widget (Date Filter, Drop-Down Filter, Number Filter, or Text Filter) to its default value or to empty. For more information, see [Resetting Filters](/appstore/modules/data-grid-2/#resetting-filters).
* `Reset_All_Filters` – Resets all filter widgets of a Data Grid 2 or Gallery widget to their default values or to empty.
* `Set_Filter` – Sets the value of a single filter widget (Date Filter, Drop-Down Filter, Number Filter, or Text Filter). You can apply the default value of the filter, or pass a filter type, a string value (for the Drop-Down Filter and Text Filter), a number value (for the Number Filter), or one or two date and time values (for the Date Filter, where the second value is the end date of a range). For more information, see [Setting Filters](/appstore/modules/data-grid-2/#setting-filters).
* `Clear_Selection` – Clears the selection of a Data Grid 2 or Gallery widget. For more information, see [Clearing the Selection From a Nanoflow](/appstore/modules/data-grid-2/#clear-selection).
* `Export_To_Excel` – Exports the data of a Data Grid 2 widget to an Excel file. For more information, see [Export to Excel](/appstore/modules/data-grid-2/#export-to-excel).

## Migration

If you were previously using the Data Grid 2 module, you must follow these steps before updating it to the new [Data Widgets](https://marketplace.mendix.com/link/component/116540) module:

1. Rename the current **DataGrid** module (under **Marketplace** modules) to *DataWidgets* in Studio Pro.
1. Open the Marketplace and search for **Data Widgets**.
1. Download and replace the current (renamed) DataWidgets module.
