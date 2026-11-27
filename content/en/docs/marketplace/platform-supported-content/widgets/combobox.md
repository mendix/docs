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
* [Advanced](#advanced)
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

The database source type can be used to set the value of a String, Integer, Long, or Enumeration attribute with options fetched from an attribute with the same type.

* **Selectable objects** – Sets the data source that provides the options.
* **Selection type** (available in 2.0 and above) –  Determines how other [listen to widget](/refguide/listen-to-grid-source/) data sources perceive the data. This property can only be used with widgets using a [database data source](/refguide/database-source/).
    * **Single** – Allows only a single item to be selected from the options list.
    * **Multi** – Allows multiple items to be selected from the options list.
* **Caption** – Allows custom captions to be displayed on the options list. Set **Caption type** to **Attribute** (default) or **Expression**, and then set the **Caption**.
* **Store value** (optional) – Determines where the selected value will be saved into. These properties are only available when **Selection type** is set to **Single**.
    * **Target** – The String, Integer, Long, or Enumeration attribute that receives the selected value.
    * **Value** – The attribute of the selectable objects whose value is stored in **Target**. This property is available when **Target** is set.

##### Static Values {#static}

The static source type can be used to set the value of a String, Enumeration, Integer, Long, Boolean, Date and time, or Decimal attribute with manually configured values.

* **Attribute** – The attribute that receives the selected value.
* **Values** – The list of options. Each item has the following properties:
    * **Value** – The expression that sets the value to be stored in the attribute.
    * **Caption** – The caption to be shown for the option.
    * **Custom content** – The widgets to be shown for the option, when **Custom content** in the **General** section is not set to **No**.

#### General Tab

The **General** section allows you to configure general behavior and captions for the combo box. The following configurations are available:

* **Placeholder text** – Captions that will be displayed when there is no data being selected
* **No options text** – Captions that will be used when filter results are empty, or shown when there is no data displayed in the combo box's options
* **Clearable** (default: **Yes**) – If enabled, this allows selected data to be cleared all at once
* **Custom content** – Allows custom widgets to be displayed in the combo box instead of normal text values
    * **Yes** – Custom content is shown both in the options list and for the selected value.
    * **List items only** – Custom content is shown in the options list, and the selected value is shown as its caption.
    * **No** (default) – Captions are shown as text.
* **Show footer** (default: **No**) – If enabled, this allows custom widgets to be placed in a combo box's footer (as shown below). For example, you can include a link, button, or image in the footer. A popular choice is including a "new item" button in the footer:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/combobox/show-footer.png" alt="Shows a footer which can house custom widgets." class="no-border" >}}

#### Multi Selection (Reference Set)

The **Multi selection (reference set)** section allows you to configure combo box behavior for reference set type datasource. The following configurations are available:

* **Selection method** – Configures the behavior for selecting options.
    * **Checkbox** (default) – Displays a checkbox on the left side of each option. Selected items will be marked by check marks.
    * **Row click** – Each selected item will be filtered out from the displayed options. Items can deselected by clicking the {{% icon name="remove" %}} on each of the displayed selected items.
* **Show selected items as** – Allows you to display selected items as labels with {{% icon name="remove" %}} buttons which allow those items to be deselected (shown at the top of this screenshot), or display selected items as simple comma-separated text (shown at the bottom):

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/combobox/combobox-showselected.png" alt="Show selected item as list or labels examples" class="no-border" >}}

    {{% alert color="info" %}}The **Show selected items as** property (options: **Text** (default) and **Labels**) is only available for the **Checkbox** selection method without custom content.{{% /alert %}}

* **Show select all** (default: **No**) – Allows you to enable a select all button that will be displayed on the top of the options list. It allows the end-user to click it and select or deselect all options at once. The button is disabled when no options are available:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/combobox/select-all.png" alt="Show select or unselect button header" class="no-border" >}}

* **Caption for select all** (default: *Select all*) – Sets the caption of the select all button. This property is available when **Show select all** is set to **Yes**.

The properties in this section are only available when **Source** is set to **Context** and **Type** is set to **Association**.

#### Label

The **Label** section allows you to display labels for the combo box.

#### Conditional Visibility {#visibility}

For more information, see [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in *Properties Common in the Page Editor*.

#### Editability Tab {#editability}

For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*.

When the database source type is used without a **Target** attribute, the widget shows its own **Editable** property instead:

* **Default** (default) – The combo box is editable.
* **Never** – The combo box is always read-only.
* **Conditionally** – The combo box is editable when the **Condition** expression returns true.

{{% alert color="warning" %}}
In combo box version 2.9.0, an issue was fixed where the **Condition** expression was inverted. If you worked around this issue by inverting your expression, remove that workaround after upgrading.
{{% /alert %}}

* **Read-only style** – Determines how the combo box appears in read-only mode.
    * **Control** – Shows the combo box control in a read-only state.
    * **Content only** (default) – Shows only the selected value.

### Events Tab {#events}

The following configurations are available:

* **On change** – Executes an action when the attribute value changes. For the database source type, this property is only available when a **Target** attribute is set, and the action runs only when the selection changes (available in combo box version 2.8.0 and above).
* **On selection** – Executes an action when the selection of the widget changes or initializes. This property is only available for the database source type. In combo box versions below 2.8.0, this action was called **On change**.
* **On enter** – Executes an action when the user sets focus on the widget.
* **On leave** – Executes an action when the user moves focus away from the widget.
* **On filter input change** – Executes an action when the filter input value changes. The current filter text is passed to the action in the **Filter Input** String variable.

### Accessibility Tab {#accessibility}

The **Accessibility** tab allows you to configure settings for combo box accessibility features:

* **Accessibility**:
    * **Aria required** (default: *false*) – When set to *true*, assistive technologies will read out the field aloud. When set to *false* in the expression editor, assistive technologies will not read the field out.
* **Aria labels**:
    * **Aria label** (default: *Combo box*) – This sets the text label assistive technologies will read aloud. 
    * **Clear selection button** (default: *Clear selection*) – This clears all selected values.
    * **Remove value button** (default: *Remove value*) – This removes individual selected values when using labels with multi-selection.
* **Accessibility status message**: 
    * **Selected value** (default: *Selected value:*) – This sets the text announced before the currently selected values, for example, "Selected value: Avocado, Apple, Banana." The widget appends the selected values automatically, so you do not need to calculate them. 
    * **Options available** (default: *Number of options available:*) – This sets the text announced before the number of options currently available in the options menu, for example, "Number of options available: 1". The widget appends the number automatically, so you do not need to calculate it.
    * **Instructions** (default: *Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.*) – This sets the instructions to be read out after announcing the accessibility status. 

### Advanced Tab {#advanced}

The **Advanced** tab allows you to configure settings for features that is beyond the normal configurations.

* **Performance:**
    * **Lazy loading** (default: **Yes**) – This allows the user to configure when to load the combo box's options data. Set it to **Yes** to ensure that the data is not loaded until the user opens the options menu. This property is not available for the enumeration, Boolean, and static source types, or when **Caption type** is set to **Expression**.
    * **Loading type** – This allows the user to configure the loading animation of a combo box: **Spinner** (default) or **Skeleton**. This property is available when **Lazy loading** is set to **Yes**.
* **Multiple selection:**
    * **Selected items sorting** – This governs how items are sorted:
        * **Caption** – This sorts the selected items alphabetically by their caption.
        * **Default** (default) – This does not sort the selected items.
* **Filter**
    * **Filter type:**
        * **Contains (fuzzy)** (default) – This shows options whose captions contain the typed characters in the same order, even if they are not next to each other. When lazy loading is on and the options come from an association or a database, the data source filters the options instead, and **Contains (fuzzy)** works like **Contains (exact)**.
        * **Contains (exact)** – This shows options whose caption contains the typed text as one continuous string.
        * **Starts-with** – This shows options in which a word of the caption starts with the typed text.
        * **None** – This turns off filtering. Users cannot type in the input to search the options.
    * **Debounce interval** (ms) – This sets the debounce interval for each filter input change event.

{{% alert color="info" %}}
Lazy loading always fetches 100 data items for each request. Pagination is triggered when the user scrolls to the bottom of the options menu.
{{% /alert %}}

{{% alert color="warning" %}}
Using lazy loading with microflow or nanoflow data sources can result in performance issues if the microflow retrieves more than 100 items. Because of that, it is not currently recommended to use lazy loading with microflow or nanoflow data sources. This issue will be fixed in a future release.
{{% /alert %}}

{{% alert color="warning" %}}
Using a **caption type** expression disables lazy load due to a technical limitation on filtering the content. The workaround for this is to use **custom content**, and then choose **caption type** as the attribute.
{{% /alert %}}

* **Multiple selection**
    This setting is only applicable for combo boxes with multiple item selections.

    * **Selected items sorting** – Allows user to configure the sorting mechanism to display the selected items.
        * **Caption** - If selected, this settings displays selected items based on their captions, regardless of user's selected sequence.
        * **Default** - If selected, this settings does not do any sorting on the client side. Instead, it keeps the sorting from the saved values given from data source.
            If the target attribute value is set (that is, if the multiple selection is set to **association**) the data will already sorted based on values from the API and combo box will display it as it is. Otherwise, if there is no target attribute (that is, if the multiple selection is set to **database**) the selected items are displayed based on user's selected sequence.

* **Filter**
    * **Filter type** – Allows the user to type into the input and filter displayable options on the combo box.
    * **Debounce interval** – The debounce interval (default 200 ms) delays applying filters while the user types to reduce server requests and unnecessary filtering. It debounces both data source filter operations (lazy-loading database queries), and **On filter input change** event action triggers.

### Common Tab {#common}

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

## Styling

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}}

[Atlas Core](https://marketplace.mendix.com/link/component/117187) provides the following design properties for the combo box:

* **Hide background** – Removes the background of the combo box input (adds the `hide-bg` class).
* **Color** – Sets the text color of the combo box: **Header color**, **Detail color**, **Brand Primary**, **Default**, **Brand Success**, **Brand Warning**, **Brand Danger**, or **Contrast**.

### Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Limitations {#limitations}

### Editable Behavior Without a Store Value

When using a combo box inside a data view, the widget relies on a store value attribute to determine its editable state. If no store value attribute is configured, the **Editability** setting of the data view (set to **Never** or **Conditionally**) will not be applied to the combo box. This occurs because, without a target attribute, the combo box has no reference for whether it should be editable.

* **Workaround** – To ensure correct behavior, set the combo box's own **Editable** property (see [Editability](#editability)) to match the **Editability** setting of the data view.
