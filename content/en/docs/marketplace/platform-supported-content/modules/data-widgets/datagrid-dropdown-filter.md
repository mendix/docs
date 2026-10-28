---
title: "Drop-Down Filter"
url: /appstore/modules/datagrid-dropdown-filter/
description: "This document describes the properties of the Drop-Down Filter widget and their configurations."
---

## Introduction

This guide lists all the properties of the Drop-Down Filter widget used with the [Data Grid 2](/appstore/modules/data-grid-2/) widget. The drop-down filter allows users to filter enumeration values, Boolean attributes, or associations through a drop-down list with advanced features like multi-select and search capabilities.

For more information on using filter widgets, see [Data Grid 2](/appstore/modules/data-grid-2/#filters).

## Configuration

### General Tab

#### Data Source

##### Filter By

This determines the type of filtering the drop-down filter performs:

* **Attribute**: filters based on entity attributes (enumerations, Booleans)
* **Association**: filters based on entity associations and references

##### Datasource to Filter

This shows the data source that the filter is linked to and that is used to configure the filter. When **Filter by** is set to **Attribute**, this property is only shown if **Attribute config** is set to **Custom**.

##### Attribute Config

This determines how the filter finds the attribute to filter on. This property is only available when **Filter by** is set to **Attribute**:

* **Auto**: uses the attribute of the Data grid column that the filter is placed in. This option works only when the widget is placed in a Data grid column.
* **Custom**: lets you select the attribute to filter on in the **Attribute** property.

##### Attribute

This specifies the target attribute for filtering. This property is only shown when **Filter by** is set to **Attribute** and **Attribute config** is set to **Custom**. Supported attribute types include the following:

* **Enum**: enumeration attributes with predefined values
* **Boolean**: true/false attributes

##### Automatic Options

When set to **Yes**, the drop-down list shows options based on the enumeration values and captions, or on the Boolean values. When set to **No**, custom options must be manually configured in the **Options** list. This property is only available when **Filter by** is set to **Attribute**.

##### Options

This allows manual specification of drop-down options. This property is only shown when **Filter by** is set to **Attribute** and **Automatic options** is set to **No**. Each option contains the following:

* **Caption**: display text shown to users
* **Value**: an expression that returns the value used for filtering; for an enumeration, it must match the enumeration value exactly

##### Entity

This defines the association that is used for filtering. Supports both **Reference** and **ReferenceSet** association types. This property is only shown, and required, when **Filter by** is set to **Association**.

##### Selectable Objects

This defines the data source that provides the list of objects available for selection. This data source should return all possible objects that could be associated with the filtered entity. The drop-down filter displays these objects as selectable options. This property is only available when **Filter by** is set to **Association**.

##### Caption Source

This determines how the caption of each option is defined when **Filter by** is set to **Association**:

* **Attribute**: uses a string attribute of the selectable objects
* **Expression**: uses an expression that returns a string

##### Caption

This specifies the text that is displayed for each option in the drop-down filter. When **Caption source** is set to **Attribute**, select a string attribute from the entity of the **Selectable objects** data source. When **Caption source** is set to **Expression**, define an expression that returns a string.

##### Search Attribute

This specifies the string attribute of the selectable objects that is used to search options. This property is only shown when **Caption source** is set to **Expression** and **Filterable** is set to **Yes**, and is required in that case. When **Caption source** is set to **Attribute**, the search uses the **Caption** attribute.

##### Use Lazy Load

This controls when drop-down filter options are loaded. When set to **No** (recommended), options are loaded immediately providing better personalization support and value restoration. When set to **Yes**, options are loaded on demand when the drop-down filter is first opened, improving initial page load performance but limiting personalization capabilities. This property is only available when **Filter by** is set to **Association**.

#### General

##### Default Value

This sets the initial value that is selected in the drop-down filter when the page loads. The expression returns a String. To select multiple options, separate the values with commas; when **Multiselect** is set to **No**, only the first value is used. For attribute filtering, each value must match an enumeration value, a Boolean value (`true` or `false`), or the **Value** of a custom option. For association filtering, each value must be the object ID of one of the selectable objects. The empty option caption is shown by default, or when the configured default value matches none of the options.

##### Filterable

When set to **Yes**, this adds a search input to the drop-down list allowing users to quickly find options by typing. This is especially useful for drop-down lists with many options.

##### Multiselect

This enables selection of multiple options simultaneously. When enabled, users can select multiple enumeration values, Boolean states, or associated entities. The filter matches records that contain any of the selected values.

##### Empty Option Caption

This defines the text displayed for the **empty** or **no selection** option. This option allows users to clear the filter. The default value is "None". This property is only shown when both **Filterable** and **Multiselect** are set to **No**.

##### Clearable

When set to **Yes**, this adds a clear button that allows users to quickly remove their current selection. This provides an easy way to reset the filter without having to manually deselect options. This property is hidden when **Filterable** is set to **Yes**, because a filterable drop-down filter is always clearable.

##### Show Selected Items As

This controls how selected options are displayed. This property is only shown when both **Filterable** and **Multiselect** are set to **Yes**:

* **Text**: shows selected items as comma-separated text
* **Labels**: shows selected items as individual removable labels

##### Selection Method

This determines how users can select options. This property is only shown when **Filterable** and **Multiselect** are set to **Yes** and **Show selected items as** is set to **Labels**:

* **Checkbox**: adds checkboxes next to each option for explicit selection
* **Row click**: allows selection by clicking anywhere on the option row

#### Configurations

##### Saved Attribute

This specifies an entity attribute used to store the last filter value for persistence. The attribute must be of type String. When configured, the filter automatically saves its current selection to this attribute when changes occur. Note that associations are not supported for saved attributes.

#### Events

##### On Change

This defines an action to be executed whenever the filter selection changes. This event is triggered when users select or deselect options, clear the filter, or change the selection in any way. Can be used to trigger microflows, nanoflows, or other actions for custom business logic.

### Advanced Tab

#### Accessibility

##### Input Caption

This defines the accessible label for the drop-down input element. Screen readers announce this label when users focus on the drop-down filter. Employing this correctly is essential for users relying on assistive technology.

#### Texts

##### Empty Selection Caption

This defines the text shown when no options are selected, for example, "Select color" or "No options are selected". The default value is "Select".

##### Filter Input Placeholder

This defines the placeholder text of the search input, for example, "Type to search". The default value is "Search". This property is only shown when **Filterable** is set to **Yes**.
