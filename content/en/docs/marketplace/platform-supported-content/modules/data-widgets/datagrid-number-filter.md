---
title: "Number Filter"
url: /appstore/modules/datagrid-number-filter/
description: "This document describes the properties of the Number Filter widget and their configurations."
---

## Introduction

This guide lists all the properties of the Number Filter widget used with the [Data Grid 2](/appstore/modules/data-grid-2/) widget. The number filter allows users to filter numeric attributes including autonumber, decimal, integer, and long data types using various numerical comparison criteria.

For more information on using filter widgets, see [Data Grid 2](/appstore/modules/data-grid-2/#filters).

## Configuration

### General Tab

#### General

##### Filter Attributes

Determines which attributes the filter applies to. The default is **Auto**. The options are the following:

* **Auto** – This uses the attribute of the Data Grid 2 column that the filter is placed in. This option works only when the filter is placed in a column.
* **Custom** – This shows the **Attributes** property, where you select one or more attributes to filter on. Use this option when the filter is placed outside a column, such as in the filters placeholder of Data Grid 2 or Gallery.

##### Datasource to Filter {#data-source-to-filter}

Shows the data source that the filter is linked to. The filter is linked to the data source of the data widget it is placed in, and the attributes in **Attributes** are selected from this data source. This property is only shown when **Filter attributes** is set to **Custom**.

##### Attributes

Allows specification of multiple numeric attributes that users can filter on. Each attribute in the list becomes a potential target for filtering operations, enabling multi-attribute numerical search. This property is only visible when **Filter attributes** is set to **Custom**. Each item in the list has one **Attribute** property, which supports the following attribute types:

* **AutoNumber**: system-generated sequential numbers
* **Decimal**: decimal numbers with fractional parts
* **Integer**: whole numbers within integer range
* **Long**: large whole numbers within long range

##### Default Value

Sets the initial numeric value that appears in the filter input when the page loads. This value is applied immediately when the widget initializes. The default value is an expression that returns a Decimal value, so it can be dynamically determined. The value must be compatible with the target attribute's data type.

##### Default Filter

Determines the initial filter operation type when the widget loads. The default is **Equal**. Available options include the following:

* **Greater than**: matches records where the numeric value is greater than the specified number
* **Greater than or equal**: matches records where the numeric value is greater than or equal to the specified number
* **Equal**: matches records where the numeric value exactly equals the specified number
* **Not equal**: matches records where the numeric value does not equal the specified number
* **Smaller than**: matches records where the numeric value is smaller than the specified number
* **Smaller than or equal**: matches records where the numeric value is smaller than or equal to the specified number
* **Empty**: matches records where the numeric attribute has no value
* **Not empty**: matches records where the numeric attribute has any value

##### Placeholder

Displays hint text in the input field when no value is entered. Helps users understand what type of numeric input is expected. Can include format guidance (for example, "Enter amount in dollars") or range information. Supports text templates for dynamic content and localization.

##### Adjustable by User

Controls whether users can change the filter operation type. When set to **Yes** (default), a drop-down button appears next to the input allowing users to select different filter operations. When set to **No**, only the default filter operation is available and the drop-down button is hidden.

#### On Change Behavior

##### Apply After (ms)

Specifies the delay in milliseconds before filter changes are applied to the grid. This debouncing mechanism prevents excessive server requests while users are typing numeric values. The default value of 500 ms provides a good balance between responsiveness and performance. Lower values provide faster feedback but may impact performance with large datasets.

#### Configurations

##### Saved Attribute

Specifies an entity attribute used to store the last filter value for persistence. The attribute must be of a compatible numeric type (AutoNumber, Decimal, Integer, or Long). When configured, the filter automatically saves its current value to this attribute when changes occur. The saved value is not applied to the widget automatically. To restore a previously saved value, use the same attribute in the **Default value** expression.

#### Events

##### On Change

Defines an action to be executed whenever the filter value or filter type changes. This event is triggered for every user interaction including typing, selecting different filter operations, or clearing the filter. Can be used to trigger microflows, nanoflows, or other actions for custom business logic.

### Accessibility Tab {#accessibility}

#### Screen Reader

##### Comparison Button Caption

Provides an accessible label for the filter type selection button. This label is announced by screen readers when users navigate to the drop-down menu that shows available filter operations. Employing this correctly is essential for users relying on assistive technology. This property is only shown when **Adjustable by user** is set to **Yes**.

##### Input Caption

Defines the accessible label for the numeric input field. Screen readers announce this label when users focus on the input field. Supports localization with built-in translations for English, German, and Dutch (the English default is "Search"). Can be customized to provide context-specific information about the expected numeric format or range.
