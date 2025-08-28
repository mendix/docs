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

#### Filter Attributes

Provides flexibility in how the filter determines which data to filter. **Auto** mode automatically detects filterable attributes from the parent grid when placed in grid columns. **Custom** mode allows manual specification of target data source and attributes for more complex filtering scenarios including multi-attribute support and cross-entity filtering.

#### Data Source to Filter

Specifies the target data source that the filter should operate on when using custom mode. Creates a direct reference to the specified data source object, providing access to entity metadata and enabling real-time synchronization with data source state changes. This property is required when **Filter Attributes** is set to **Custom**.

#### Attributes

Allows specification of multiple DateTime attributes that users can filter on. Each attribute in the list becomes a potential target for filtering operations, enabling sophisticated multi-attribute date search capabilities. Only DateTime attributes are supported for date filtering operations.

#### Default Value

Sets the initial date value that appears in the filter input when the page loads. This value is applied immediately when the widget initializes. The default value respects expression-based configurations and can be dynamically determined based on business logic.

#### Default Start Date

When the default filter is set to **Between**, this property defines the initial start date for the date range. This value works in conjunction with the **Default End Date** to establish a default date range when the widget loads.

#### Default End Date

When the default filter is set to **Between**, this property defines the initial end date for the date range. This value works in conjunction with the **Default Start Date** to establish a default date range when the widget loads.

#### Default Filter

Determines the initial filter operation type when the widget loads. Available options include the following:

* **Between**: matches records where the date falls within a specified range (requires both start and end dates)
* **Greater than**: matches records where the date is after the specified date
* **Greater than or equal**: matches records where the date is on or after the specified date
* **Equal**: matches records where the date exactly equals the specified date
* **Not equal**: matches records where the date does not equal the specified date
* **Smaller than**: matches records where the date is before the specified date
* **Smaller than or equal**: matches records where the date is on or before the specified date
* **Empty**: matches records where the date attribute has no value
* **Not empty**: matches records where the date attribute has any value

#### Placeholder

Displays hint text in the input field when no date is selected. It can help users understand the expected date format, or can provide guidance on date selection. Supports text templates for dynamic content and localization.

#### Adjustable by User

Controls whether users can change the filter operation type. When set to **Yes**, a dropdown button appears next to the date input allowing users to select different filter operations. When set to **No**, only the default filter operation is available and the dropdown is hidden.

### Configurations

#### Saved Attribute

Specifies an entity attribute used to store the last filter value for persistence. The attribute must be of type DateTime. When configured, the filter automatically saves its current value to this attribute when changes occur. To restore previously saved values, configure the same attribute as the **Default Value**.

#### Saved Start Date Attribute

Specifies an entity attribute used to store the start date when using the **Between** filter mode. The attribute must be of type DateTime. This works in conjunction with the **Saved End Date Attribute** to persist date range selections across user sessions.

#### Saved End Date Attribute

Specifies an entity attribute used to store the end date when using **Between** filter mode. The attribute must be of type DateTime. This works in conjunction with the **Saved Start Date Attribute** to persist date range selections across user sessions.

### Events

#### On Change

Defines an action to be executed whenever the filter value or filter type changes. This event is triggered for every user interaction including date selection, changing filter operations, or clearing the filter. It can be used to trigger microflows, nanoflows, or other actions for custom business logic.

### Accessibility

#### Comparison Button Caption

Provides an accessible label for the filter type selection button. This label is announced by screen readers when users navigate to the drop-down menu that shows available filter operations. Employing this correctly is essential for users relying on assistive technology.

#### Calendar Button Caption

Defines the accessible label for the calendar picker button that opens the date selection interface. Screen readers announce this label when users navigate to the button, helping them understand how to access the date picker functionality.

#### Input Caption

Defines the accessible label for the date input field. Screen readers announce this label when users focus on the input field. This property users understand that date input is expected, and may include format guidance or context-specific information.
