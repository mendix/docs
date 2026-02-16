---
title: "Dropdown Filter"
url: /appstore/modules/datagrid-dropdown-filter/
description: "This document describes the properties of the Dropdown Filter widget and their configurations."
---

## Introduction

This guide lists all the properties of the Dropdown Filter widget used with the [Data Grid 2](/appstore/modules/data-grid-2/) widget. The dropdown filter allows users to filter enumeration values, Boolean attributes, or association attributes through a dropdown selection interface with advanced features like multi-select and search capabilities.

For more information on using filter widgets, see [Data Grid 2](/appstore/modules/data-grid-2/#filters).

## Configuration

### General Tab

#### Data Source Section

##### Filter By

Determines the type of filtering the dropdown filter will perform:

* **Attribute**: filters based on entity attributes (enumerations, Booleans)
* **Association**: filters based on entity associations and references

##### Data Source of Widget

This setting is displaying what data sourced is currently used to configure the filter.

#### Attribute Type Configuration

##### Attribute Config

Provides flexibility in how the filter determines which data to filter. **Auto** mode automatically detects filterable attributes from the parent grid when placed in grid columns. **Custom** mode allows manual specification of target data source and attributes for more complex filtering scenarios.

##### Attribute

Specifies the target attribute for filtering when using attribute-based filtering. Supported attribute types include the following:

* **Enum**: enumeration attributes with predefined values
* **Boolean**: true/false attributes

##### Automatic Options

When set to **Yes**, the dropdown automatically populates with all available values from the enumeration or Boolean attribute. When set to **No**, custom options must be manually configured in the **Options** list.

##### Options

Allows manual specification of dropdown options when Automatic Options is disabled. Each option contains the following:

* **Caption**: display text shown to users
* **Value**: actual value used for filtering

#### Association Type Configuration

##### Entity

Defines the entity that will be used for filtering over association. Supports both **Reference** and **ReferenceSet** association types. This property is required when **Filter By** is set to **Association**.

##### Selectable Objects

Defines the data source that provides the list of entities available for selection. This data source should return all possible entities that could be associated with the parent entity. The dropdown filter will display these entities as selectable options.

##### Caption

Specifies the attribute from the selectable objects that will be displayed as the option text in the dropdown filter. Must be a string attribute from the entity defined in the **Selectable Objects** data source.

##### Use Lazy Load

Controls when dropdown filter options are loaded. When set to **No** (recommended), options are loaded immediately providing better personalization support and value restoration. When set to **Yes**, options are loaded on demand when the dropdown filter is first opened, improving initial page load performance but limiting personalization capabilities.

#### General Configuration

##### Default Value

Sets the initial value that is selected in the dropdown filter when the page loads. For association filtering, this should match one of the available entity values. For attribute filtering, this should match one of the enumeration or Boolean values.

##### Filterable

When set to **Yes**, adds a search input to the dropdown allowing users to quickly find options by typing. This is especially useful for dropdowns with many options. The search functionality works on the display captions.

##### Multiselect

Enables selection of multiple options simultaneously. When enabled, users can select multiple enumeration values, Boolean states, or associated entities. The filter will match records that contain any of the selected values.

##### Empty Option Caption

Defines the text displayed for the "empty" or "no selection" option. This option allows users to clear the filter.

##### Clearable

When set to **Yes**, adds a clear button that allows users to quickly remove their current selection. This provides an easy way to reset the filter without having to manually deselect options.

##### Show Selected Items As

Controls how selected options are displayed when multiselect is enabled:

* **Text**: shows selected items as comma-separated text
* **Labels**: shows selected items as individual removable labels/tags

##### Selection Method

Determines how users can select options in multiselect mode:

* **Checkbox**: adds checkboxes next to each option for explicit selection
* **Row Click**: allows selection by clicking anywhere on the option row

### Configurations

#### Saved Attribute

Specifies an entity attribute used to store the last filter value for persistence. The attribute must be of type string. When configured, the filter automatically saves its current selection to this attribute when changes occur. Note that associations are not supported for saved attributes.

### Events

#### On Change

Defines an action to be executed whenever the filter selection changes. This event is triggered when users select or deselect options, clear the filter, or change the selection in any way. Can be used to trigger microflows, nanoflows, or other actions for custom business logic.

### Accessibility

#### Input Caption

Defines the accessible label for the dropdown input element. Screen readers announce this label when users focus on the dropdown. Employing this correctly is essential for users relying on assistive technology.
