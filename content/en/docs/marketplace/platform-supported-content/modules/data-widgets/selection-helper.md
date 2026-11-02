---
title: "Selection Helper"
url: /appstore/modules/selection-helper/
description: "Describes the configuration and usage of the Selection Helper widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Selection Helper](https://marketplace.mendix.com/link/component/116540) widget provides bulk-selection controls for data widgets, enabling users to quickly select or deselect all items on the current page when multi-selection is enabled. It works with both Gallery and Data Grid 2 widgets.

{{% alert color="info" %}}
The Selection Helper currently only selects and deselects items on the current page. When **Keep selection** is set to **Yes** on the data widget, items on other pages are not affected.
{{% /alert %}}

Here is an example of a Selection Helper widget in a Gallery:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/selection-helper/example-selection-helper.png" alt="Example of Selection Helper in a Gallery widget" width="400" class="no-border" >}}

## Prerequisites

Before using the Selection Helper widget, ensure the following:

* **For Gallery** – Gallery widget is configured with Selection set to Multi.
* **For Data Grid 2** – Data Grid 2 is configured with Selection set to Multi.

The Selection Helper must be placed inside the data widget's **Filters placeholder** area. For specific guidance, see the subsections below.

### For Gallery Widgets

1. Go to your Gallery widget.
1. Add the Selection Helper widget to the **Filters placeholder** area.
1. Configure the Selection Helper properties as needed.

### For Data Grid 2 Widgets

1. Go to your Data Grid 2 widget.
1. Add the Selection Helper widget to the **Filters placeholder** area.
1. Configure the Selection Helper properties as needed.

## Properties

### Style

Controls how the selection control appears to users:

* **Check box** (default) – Displays a standard checkbox that reflects the current selection state.
* **Custom** – Allows you to define custom widgets for different selection states.

#### Custom Style

Available when **Style** is set to **Custom**. Defines custom widgets that display based on the current selection state:

* **None selected** – Widget displayed when no items are currently selected. Usually contains **Select all** controls or empty state indicators.
* **Some selected** – Widget displayed when some (but not all) items are selected. Often used to show **Select all** controls or partial selection indicators.
* **All selected** – Widget displayed when all items on the current page are selected. Typically used to show **Clear selection** controls or indicators.

Here is an example of a **Selection Helper** widget with a custom style configured:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/selection-helper/style-custom-selection-helper.png" alt="Example of Selection Helper with custom style configured" width="400" class="no-border" >}}

#### Selection States and Behavior

The Selection Helper automatically manages three distinct selection states:

| State | Checkbox Appearance  | Click Behavior            | Use Case                                  |
| ----- | -------------------- | ------------------------- | ----------------------------------------- |
| None  | Unchecked            | Selects all items on the current page | Starting state, no selections made        |
| Some  | Indeterminate (dash) | Selects all items on the current page | Partial selection, complete the selection |
| All   | Checked              | Deselects all items on the current page | Full selection, allow deselection         |

### Check Box Caption

Available when **Style** is set to **Check box**.

Provides an optional text label displayed next to the checkbox. Use this to provide context about the selection action, such as **Select all items** or **Toggle selection**.

### State Synchronization

The Selection Helper maintains real-time synchronization with the parent data widget:

* Changes made through the Selection Helper immediately reflect in individual row and item selections
* Individual row and item selection changes update the Selection Helper state accordingly
* Selection state persists across pagination when **Keep selection** is enabled in the data widget

## Integration with Data Widgets

### Compatible Selection Methods

The **Selection Helper** works with both **Gallery** and **Data Grid 2** selection methods:

* **Gallery**: Users can select via item clicks and the Selection Helper
* **Data Grid 2**: Users can select via both individual checkboxes and row clicks, and the Selection Helper

## Common Use Cases

### Gallery Bulk Selection

Place a Selection Helper with default checkbox style in the Gallery's filters placeholder for simple select-all functionality in grid or list layouts.

### Data Grid 2 Bulk Selection

Use the Selection Helper in the Data Grid 2 filters placeholder for tabular data bulk operations.

### Custom Bulk Operations Interface

Use custom style to integrate with your app's design system across both Gallery and Data Grid 2.

### Administrative Data Management

Combine with action buttons that enable or disable based on selection state for both grid and list interfaces.
