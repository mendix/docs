---
title: "Combo Box"
url: /appstore/widgets/combobox/
description: "Describes the configuration and usage of the combo box widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Combo Box](https://marketplace.mendix.com/link/component/219304) widget displays a list of options that users can select from. This is useful in scenarios where end-users need to filter their data through choices, such as being able to select or de-select different countries from a list.

A typical combo box can look like this:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/combobox/combobox-demo.gif" width="300px" alt="Combo box example" class="no-border" >}}

### Features

* Supports different data sources:
    * Context:
        * Association
        * Enumeration
        * Boolean
    * Database lists
    * Static values
* Supports custom content rendering
* Supports custom footers
* Supports options filtering for quick selection

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Combo box properties consist of the following sections:

Properties:

* [General](#general)
* [Events](#events)
* [Accessibility](#accessibility)
* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

The following sections will describe the different available widget properties and how to configure the widget using them.

### General Tab {#general}

#### Data Source Tab

The **Source** option (required) is used is used to configure the datasource type for the widget. It supports the following data types via these properties:

* [Context](#context)
* [Database](#database)
* [Static](#static)

##### Context {#context}

When Context source is selected, the **Data source** section (required) configures the type of the context. It supports the following data types via these properties:

* [Association](/refguide/association-source/)
* [Enumeration](/refguide/enumerations/)
* [Boolean](/refguide/boolean-expressions/)

##### Database List {#database}

The database source type can be used to set the value of a string or integer attribute with options fetched from an attribute with the same type.

* **Selection type** – (available in 2.0 and above) determines how other [listen to widget](/refguide/listen-to-grid-source/) data sources perceive the data. This property can only be used with widgets using a [database data source](/refguide/database-source/).
    * **Single** – Allows only a single item to be selected from the options list.
    * **Multi** – Allows multiple items to be selected from the options list.
* **Caption** – Allows custom captions to be displayed on the options list.
* **Store value** (optional) – Determines where the selected value will be saved into.

##### Static Values {#static}

The static source type can be used to set the value of a string attribute with manually configured values.

#### General Tab

The **General** section allows you to configure general behavior and captions for the combo box. The following configurations are available:

* **Placeholder text** – captions that will be displayed when there is no data being selected
* **Filter type** – allows the user to type into the input and filter displayable options on the combo box
* **No options text** – captions that will be used when filter results are empty, or shown when there is no data displayed in the combo box's options
* **Clearable** – if enabled, this allows selected data to be cleared all at once
* **Custom content** – allows custom widgets to be displayed in the combo box instead of normal text values
* **Show footer** – if enabled, this allows custom widgets to be placed in a combo box's footer (as shown below). For example, you can include a link, button, or image in the footer. A popular choice is including a "new item" button in the footer:
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/combobox/show-footer.png" alt="Shows a footer which can house custom widgets." class="no-border" >}}

#### Multi Selection (Reference Set)

The **Multi selection (reference set)** section allows you to configure combo box behavior for reference set type datasource. The following configurations are available:

* **Selection Method** – configures the behavior for selecting options
    * **Checkbox** – displays a checkbox on the left side of each option. Selected items will be marked by check marks.
    * **Row click** – each selected item will be filtered out from the displayed options. Items can deselected by clicking the {{% icon name="remove" %}} on each of the displayed selected items.
* **Show selected item as** – you can choose to display selected item as labels with {{% icon name="remove" %}} buttons which allow those items to be deselected (shown at the top of this screenshot), or as simple comma-separated text (shown at the bottom): 

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/combobox/combobox-showselected.png" alt="Show selected item as list or labels examples" class="no-border" >}}
    {{% alert color="info" %}}The **Show selected item as** property is only available for the **Checkbox** selection method without custom content.{{% /alert %}}

* **Show Select All** – you can choose to enable a "Show select all" button that will be displayed on the top of the options list. It allows the end-user to click it and select or deselect all options at once:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/combobox/select-all.png" alt="Show select or unselect button header" class="no-border" >}}

#### Label

The **Label** section allows you to display labels for the combo box.

#### Conditional Visibility {#visibility}

For more information, see [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in *Properties Common in the Page Editor*.

#### Editability Tab {#editability}

For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*.

### Events Tab {#events}

The following configurations are available:

* **On change** – executes an action when the attribute value changes
* **On enter action** – executes an action when the user sets focus on the widget
* **On leave action** – executes an action when the user moves focus away from the widget

### Accessibility Tab {#accessibility}

The **Accessibility** tab allows you to configure settings for combo box accessibility features.

### Common Tab {#common}

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

## Styling

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}
