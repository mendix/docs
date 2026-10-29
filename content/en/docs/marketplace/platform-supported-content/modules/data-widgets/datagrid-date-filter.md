---
title: "Date Filter"
url: /appstore/modules/datagrid-date-filter/
description: "This document describes the properties of the Date Filter widget and their configurations."
---

## Introduction

This guide lists all the properties of the Date Filter widget used with the [Data Grid 2](/appstore/modules/data-grid-2/) widget. The Date Filter allows users to filter DateTime attributes using various date comparison criteria including range filtering.

For more information on using filter widgets, see [Data Grid 2](/appstore/modules/data-grid-2/#filters).

## Configuration

### General Tab

#### General

##### Filter Attributes

This provides flexibility in how the filter determines which data to filter. **Auto** mode automatically detects filterable attributes from the parent grid when placed in grid columns. **Custom** mode shows the **Attributes** property, where you select the attributes to filter on, including multiple attributes.

##### Datasource to Filter

This shows the data source that the filter is linked to. The filter is linked to the data source of the data widget it is placed in, and the attributes in **Attributes** are selected from this data source. This property is only shown when **Filter attributes** is set to **Custom**.

##### Attributes

This allows specification of multiple DateTime attributes that users can filter on. Each attribute in the list becomes a potential target for filtering operations, enabling sophisticated multi-attribute date search capabilities. Only DateTime attributes are supported for date filtering operations. This property is only shown when **Filter attributes** is set to **Custom**.

##### Default Value

This sets the initial date value that appears in the filter input when the page loads. This value is applied immediately when the widget initializes. The default value is an expression that returns a Date and time value, so it can be determined dynamically. This property is hidden when **Default filter** is set to **Between**.

##### Default Start Date

When **Default filter** is set to **Between**, this property defines the initial start date for the date range. This value works in conjunction with **Default end date** to establish a default date range when the widget loads. This property is only shown when **Default filter** is set to **Between**.

##### Default End Date

When **Default filter** is set to **Between**, this property defines the initial end date for the date range. This value works in conjunction with **Default start date** to establish a default date range when the widget loads. This property is only shown when **Default filter** is set to **Between**.

##### Default Filter

This determines the initial filter operation type when the widget loads. The default is **Equal**. Available options include the following:

* **Between**: matches records where the date falls within a specified range (requires both start and end dates)
* **Greater than**: matches records where the date is after the specified date
* **Greater than or equal**: matches records where the date is on or after the specified date
* **Equal**: matches records where the date exactly equals the specified date
* **Not equal**: matches records where the date does not equal the specified date
* **Smaller than**: matches records where the date is before the specified date
* **Smaller than or equal**: matches records where the date is on or before the specified date
* **Empty**: matches records where the date attribute has no value
* **Not empty**: matches records where the date attribute has any value

##### Placeholder

This displays hint text in the input field when no date is selected. It can help users understand the expected date format, or can provide guidance on date selection. Supports text templates for dynamic content and localization.

##### Adjustable by User

This controls whether users can change the filter operation type. When set to **Yes**, a drop-down button appears next to the date input allowing users to select different filter operations. When set to **No**, only the default filter operation is available and the drop-down button is hidden.

#### Configurations

##### Saved Attribute

This specifies an entity attribute used to store the last filter value for persistence. The attribute must be of type DateTime. When configured, the filter automatically saves its current value to this attribute when changes occur. The saved value is not applied to the widget automatically. To restore a previously saved value, use the same attribute in the **Default value** expression. This property is hidden when **Default filter** is set to **Between**.

##### Saved Start Date Attribute

This specifies an entity attribute used to store the start date when using the **Between** filter mode. The attribute must be of type DateTime. This works in conjunction with **Saved end date attribute** to persist date range selections. To restore a previously saved value, use the same attribute in the **Default start date** expression. This property is only shown when **Default filter** is set to **Between**.

##### Saved End Date Attribute

This specifies an entity attribute used to store the end date when using the **Between** filter mode. The attribute must be of type DateTime. This works in conjunction with **Saved start date attribute** to persist date range selections. To restore a previously saved value, use the same attribute in the **Default end date** expression. This property is only shown when **Default filter** is set to **Between**.

#### Events

##### On Change

This defines an action to be executed whenever the filter value or filter type changes. This event is triggered for every user interaction including date selection, changing filter operations, or clearing the filter. It can be used to trigger microflows, nanoflows, or other actions for custom business logic.

### Accessibility Tab

#### Screen Reader

##### Comparison Button Caption

This provides an accessible label for the filter type selection button. This label is announced by screen readers when users navigate to the drop-down menu that shows available filter operations. Employing this correctly is essential for users relying on assistive technology. This property is only shown when **Adjustable by user** is set to **Yes**.

##### Calendar Button Caption

This defines the accessible label for the calendar picker button that opens the date selection interface. Screen readers announce this label when users navigate to the button, helping them understand how to access the date picker functionality.

##### Input Caption

This defines the accessible label for the date input field. Screen readers announce this label when users focus on the input field. This property helps users understand that date input is expected, and may include format guidance or context-specific information.
