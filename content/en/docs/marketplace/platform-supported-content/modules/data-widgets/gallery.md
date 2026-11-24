---
title: "Gallery"
url: /appstore/modules/gallery/
description: "Describes the configuration and usage of the Gallery widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Gallery](https://marketplace.mendix.com/link/component/116540) widget, a replacement for both the template grid and list view, helps you build beautiful lists and grids for desktop, tablet, and mobile devices. Featuring the same filtering and sorting as seen in [Data Grid 2](/appstore/modules/data-grid-2/), the Gallery widget also provides options for varying columns per device type and gives you the power to create amazing grid and list experiences for every user.

Here is an example of a Gallery widget using a filter and a sort:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/gallery/example.png" alt="Example of gallery using filter and sort"   width="300"  class="no-border" >}}

## Configuration

Several options can be defined in the Gallery widget:

### Data Source

Data source specifies the source of the data being presented in the Gallery. You can select data from **Database** (optionally with an XPath constraint), **Association**, **Microflow**, or **Nanoflow**.

**Refresh time (in seconds)** sets the time the gallery waits between refreshing the data. Auto-refreshing is turned off when the value is 0. The default value is 0.

### Columns

The Gallery widget applies a different number of columns based on the device being used. You can set **Desktop columns**, **Tablet columns**, and **Phone columns**. Each value must be a number between 1 and 12. The default value is 1.

### Items

On the **Behavior** tab, you can define the properties related to the items being presented. **Page size**, **Pagination**, **Custom pagination**, **Show paging buttons**, **Show total count**, **Position of pagination**, **Load more caption**, and the dynamic pagination attributes are in the **Pagination** group. **Loading type** and **Show refresh indicator** are in the **Loading state** group. **Empty message** and **Dynamic item class** are in the **Appearance** group. **Custom item key** is in the **Advanced** group.

#### Page Size

Defines the amount of data shown for each page or the limit to be presented when using virtual scrolling. When **Pagination** is set to **Virtual scrolling** or **Load more**, this number defines how many items are added each time more data is loaded. The default value is 20.

#### Pagination

{{% alert color="info" %}}
The pagination status text and the screen reader labels of the paging buttons are currently written in English and cannot be translated. We are working to improve this in the future.
{{% /alert %}}

You can choose between paging buttons (buttons presented below or above the grid), virtual scrolling (a mechanism that automatically loads data when the user reaches the bottom of the scroll bar), or load more (a button that loads more items). The default value is **Paging buttons**.

#### Custom Pagination

When set to **Yes**, the built-in paging buttons are replaced with your own pagination. A second property, also named **Custom pagination**, then appears. It is a widget area where you place the widgets that make up the custom pagination. The default value is **No**. These properties are only shown when **Pagination** is set to **Paging buttons**.

#### Show Paging Buttons

This controls the visibility of the navigation buttons. When set to **Always** (default), the navigation buttons are always visible. When set to **Auto**, the navigation buttons are only visible when the number of items in the data source exceeds the page size. This property is only shown when **Pagination** is set to **Paging buttons**.

#### Show Total Count

When set to **Yes**, the pagination area shows the number of loaded items and the total number of items, such as "20 of 150". The default value is **No**. This property is only shown when **Pagination** is set to **Virtual scrolling** or **Load more**.

#### Position of Pagination

This option defines the position of the pagination relative to the grid items: **Below grid** (default), **Above grid**, or **Both**. It is available when **Pagination** is set to **Paging buttons**, or when **Pagination** is set to **Virtual scrolling** or **Load more** and **Show total count** is enabled. Custom pagination cannot be shown in both positions. When **Custom pagination** is set to **Yes** and this property is set to **Both**, Studio Pro shows a warning and the custom pagination is rendered below the gallery.

#### Load More Caption

This sets the caption of the button that loads more items. The default value is **Load More**. This property is only shown when **Pagination** is set to **Load more**.

#### Dynamic Pagination Attributes

The **Pagination** group also contains the following optional **Integer** attributes:

* **Page size attribute** – sets the page size dynamically; when this attribute is set, it is used as the page size instead of **Page size**
* **Page attribute** – sets the current page dynamically; the gallery also writes the current page back to this attribute when the user navigates between pages
* **Total count** – stores the current total number of items
* **Loaded items** – a read-only attribute that reflects the number of items currently loaded; this property is only shown when **Pagination** is set to **Virtual scrolling** or **Load more**

#### Loading Type

This sets the type of loading state. The options are **Spinner** (default) and **Skeleton**.

#### Show Refresh Indicator

When set to **Yes**, the gallery shows a progress bar on top of the gallery while the data is being reloaded. The default value is **No**.

#### Empty Message

When this option is defined as custom it will show a composable region. Here you can place widgets that will be presented when no items are available to be shown, as well as when the filter does not return any data:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/gallery/empty-message.png" alt="Example of empty message"   width="300"  class="no-border" >}}

#### Dynamic Item Class

The Gallery widget can dynamically apply a CSS class to a specific item. You can achieve this by adding an expression based on the item values (attributes), as in the example below.

This example checks the value of `CountryName` and, if the attribute is equal to `Spain`, applies the class `my-custom-class` to the items:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/gallery/dynamic-item-class.png" alt="Example of dynamic item class"   width="300"  class="no-border" >}}

#### Custom Item Key

This is an expression that returns a stable identifier for each item. Use it to maintain the scroll position during data refreshes when using view entities. When it is not set, the object ID is used.

### Events

The new Gallery widget can trigger some events while iterating with it.

#### On Click Trigger

This defines which interaction triggers the **On click action**: **Single click** (default) or **Double click**.

#### On Click Action

Triggers an action (such as a nanoflow, microflow, or Show page action) when the end-user clicks in one of the items. It also adds a pointer cursor to signal that it is clickable. This function also complies with accessibility features and can be reached using only the keyboard.

#### On Selection Change

Triggers an action when the selection changes. This property is only shown when **Selection** is set to **Single** or **Multi**.

### Personalization {#personalization}

On the **Personalization** tab, you can store the current filter and sort configuration of the gallery. In this way, if you re-open your page, the filters and sort order remain the same as in the previous state. The following properties are available:

* **Store filters** – When set to **Yes** (default), filter values are stored.
* **Store sort** – When set to **Yes** (default), the sort order is stored.
* **Store configuration in** – This sets where the configuration is stored: **Attribute** (default) or **Browser local storage**. Browser local storage is scoped to the browser profile, not to the Mendix user. This property is only shown when **Store filters** or **Store sort** is set to **Yes**.
* **Attribute** – This is the attribute in which the configuration is stored and from which it is loaded. Select a `String` attribute with `Unlimited` as its size. To select an attribute, surround the gallery with a data view. This property is only shown when **Store configuration in** is set to **Attribute**.
* **On change** – This is an action that is triggered when the configuration stored in **Attribute** changes. This property is only shown when **Store configuration in** is set to **Attribute**.

### Texts {#texts}

On the **Texts** tab, you can configure the following texts.

The **Aria labels** group contains the texts that assistive technology reads:

* **Filter section** – read upon reaching a filtering or sorting section
* **Empty message** – read upon reaching an empty message section
* **Content description** – read upon reaching the gallery
* **Item description** – read upon reaching each gallery item; this text template can use the attributes of the item

The **Captions** group contains the texts of the selection count:

* **Item count singular** – The default value is "%d item selected". It must include `%d` to denote the position of the number.
* **Item count plural** – The default value is "%d items selected". It must include `%d` to denote the position of the number.
* **Clear selection label** – This sets the label of the button that clears the selection. The default value is "Clear selection". This property is only shown when **Selection** is set to **Multi**.

## Filtering

{{% alert color="info" %}}
Starting with [Data Widgets](/appstore/modules/data-widgets/) 3.0.0, filtering is configured in the filter widgets. When you update the module, existing grid-wide filtering configurations are automatically converted to the new setup.
{{% /alert %}}

To filter the gallery items, place filter widgets in the gallery's filters placeholder. The gallery does not have its own filtering configuration. Instead, configure the filter widgets themselves. Filter widgets placed in the filters placeholder are linked to the gallery automatically. To choose which attributes a filter applies to, set the filter widget to custom mode and select the attributes.

For more information, see the [Filters](/appstore/modules/data-grid-2/#filters) section of *Data Grid 2* and the documentation for each filter widget:

* [Text Filter](/appstore/modules/datagrid-text-filter/)
* [Number Filter](/appstore/modules/datagrid-number-filter/)
* [Date Filter](/appstore/modules/datagrid-date-filter/)
* [Drop-Down Filter](/appstore/modules/datagrid-dropdown-filter/)

## Sorting

To sort the gallery items, place a [Drop-Down Sort](#dropdown) widget in the gallery's filters placeholder. If you place it outside the filters placeholder, the widget shows an error that it is out of context. The gallery does not have its own sorting configuration. Instead, you select the attributes that end-users can sort by in the Drop-Down Sort widget.

{{% alert color="info" %}}
If the data source of the gallery has a sort order, the Drop-Down Sort widget pre-selects it when it matches one of the attributes configured in the widget. When end-users select a different option, it overrides the sort order of the data source.
{{% /alert %}}

### Drop-Down Sort {#dropdown}

The Drop-Down Sort widget lets end-users choose the attribute and direction to sort the gallery items by. Place it inside the filters placeholder of the Gallery widget and configure these properties:

* **Datasource to sort**: the data source of the gallery, linked automatically when the widget is placed in the filters placeholder
* **Attributes**: the attributes that end-users can sort by; for each attribute, set the **Caption** shown in the drop-down; supported attribute types are AutoNumber, Boolean, Date and time, Decimal, Enumeration, Integer, Long, and String
* **Empty option caption**: the text shown when no sort option is selected
* **Sort order button caption** and **Input caption**: the text announced by screen readers when using assistive technology

## Selection

Enabling **Selection** allows users to select gallery items via clicking. Selection is disabled by default and can be activated by changing the **Selection** setting on the **Behavior** tab from **None** to either **Single** or **Multi**.

The Gallery widget keeps selected items in memory and supports selection persistence across page navigation when the **Keep selection** option is enabled. This allows users to maintain their selections while browsing through paginated data or navigating between different pages in your application. See [Keep Selection](#keep-selection) for more information about managing selection persistence and its limitations.

### Selection Property

The **Selection** property determines what type of selection is available to users:

* **None**: Selection is disabled. Users cannot select gallery items.
* **Single**: Users can select only one item at a time. Selecting a new item automatically deselects the previously selected item.
* **Multi**: Users can select multiple items simultaneously using various interaction methods.

When **Selection** is enabled, the Gallery automatically provides visual feedback to indicate selected items and supports keyboard navigation for accessibility.

### Auto Select First Item

When set to **Yes**, the first item is selected automatically. This property is only shown when **Selection** is set to **Single** or **Multi**. The default value is **No**.

### Toggle on Click

This defines the selection behavior when an item is clicked. When set to **Yes**, clicking an item toggles its selection and keeps the other selected items. When set to **No** (default), clicking an item selects that item and clears the rest of the selection. This property is only shown when **Selection** is set to **Single** or **Multi**.

### Selection and Click Actions Constraint

{{% alert color="info" %}}
It is not possible to use both selection and onClick actions simultaneously when the **On click trigger** is set to **Single click**. This constraint prevents ambiguous user interactions where a single click could both select an item and trigger an action.
{{% /alert %}}

#### Supported Combinations

| Selection Mode | On Click Trigger | Selection Method | Click Action                                  | Supported |
| -------------- | ---------------- | ---------------- | --------------------------------------------- | --------- |
| None           | Single click     | N/A              | ✓ Click triggers action                       | ✓ Yes     |
| None           | Double click     | N/A              | ✓ Double-click triggers action                | ✓ Yes     |
| Single/Multi   | Single click     | Item click       | ✗ Ambiguous interaction                       | ✗ No  |
| Single/Multi   | Double click     | Item click       | ✓ Click selects, double-click triggers action | ✓ Yes     |

#### Error Prevention

If you attempt to configure both selection (Single or Multi) and an onClick action with **Single click** trigger, the Gallery will display a design-time error:

> The item click action is ambiguous. Change "On click trigger" to "Double click" or set "Selection" to "None".

#### Recommended Approach

For galleries that need both selection and click actions:

1. Set **On click trigger** to **Double click**.
1. Configure your desired selection mode (**Single** or **Multi**).
1. Users can then select items with single clicks and trigger actions with double clicks.

### Selection with Action Buttons in the Filters Placeholder

Gallery selection works seamlessly with action buttons and other widgets placed in the gallery's filters placeholder. This pattern enables powerful bulk operation workflows.

#### Selection Helper Integration

Place a **Selection Helper** widget in the gallery's filters placeholder to provide bulk selection controls:

* **Select All**: Select all items on the current page
* **Clear Selection**: Deselect all items on the current page
* **Selection Status**: Visual indicator of the selection state of the current page (all, some, or none selected)

The Selection Helper only acts on the items on the current page. When **Keep selection** is set to **Yes**, items selected on other pages stay selected.

#### Selection Count Display

When **Selection** is set to **Multi**, use the **Show selection count** property to set where the number of selected items is displayed (default: **Bottom**):

* **Top**: Shows count above the gallery items
* **Bottom**: Shows count below the gallery items
* **Off**: Hides the selection count

The selection count automatically updates as users select or deselect items and includes a "Clear selection" button for easy deselection.

#### Event Handling

Use the **On selection change** action to trigger custom logic when selection changes:

* Update UI elements based on selection state
* Enable/disable action buttons
* Load additional data for selected items
* Validate selection before allowing operations

### Keep Selection

If this setting is enabled, then selected items persist across page navigation, data refreshes, filtering, and sorting operations. This setting is only available when **Selection** is set to **Multi**. By default, Keep selection is disabled and the selection is cleared when the items are not in the current set of datasource items. When enabled, selected items remain selected until manually cleared by the user or through a nanoflow action.

{{% alert color="warning" %}}
Keep Selection cannot be used with non-persistable entities (NPEs) or view entities, as their IDs change on refresh.
{{% /alert %}}

## Keyboard Navigation and Selection

In the Gallery widget it is possible to navigate and select items using the keyboard. Keyboard navigation can increase user speed, as well as makes the widget more accessible.

To improve user experience, it is possible to detect which item has keyboard focus. Visually, you can see which item has keyboard focus by spotting the thin blue border.

You can also see when an item is selected: an item with a light brand primary background is selected.

For the keyboard navigation and keyboard selection to work, you must open the **Behavior** tab and then set the **Selection** property to one of the following:

* **Single**: enables keyboard navigation with just single selection
* **Multi**: to enable keyboard navigation with multi-selection

### Keyboard Navigation

Using the keyboard arrow keys (<kbd>↑</kbd>, <kbd>↓</kbd>, <kbd>←</kbd>, <kbd>→</kbd>) the user can navigate between the items displayed in the Gallery. Also, the user can use special keyboard keys like <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Page&nbsp;up</kbd>, and <kbd>Page&nbsp;down</kbd>.

With the keyboard, the user can press <kbd>Tab</kbd> and navigate between elements to reach the Gallery items.

### Keyboard Selection

Keyboard selection, which differs from navigation, simulates the click of the mouse on an item. Thus, after navigating to a desired item, the user can press <kbd>Shift</kbd> + <kbd>Space</kbd> and the item will be selected.

### Keyboard Multi-Selection

To further improve the user experience, it is also possible to select many items only using the keyboard. To achieve this, the user can hold <kbd>Shift</kbd> on the first item and navigate with arrow key to the last item they want to select. By doing this, all the items between the first and last selected will also be selected.

### Accessibility

Employing keyboard navigation is an effective way of ensuring users who cannot use a mouse can still interact with the Gallery widget.

## Styling

The [Data Widgets](/appstore/modules/data-widgets/) module ships the following design properties for the Gallery widget:

* **Borders** – Adds a separator to the items: **Both**, **Vertical**, **Horizontal**, or **Horizontal divider**.
* **Hover** – Highlights an item when hovering over it. This is only useful when the item is clickable.
* **Striped** – Adds alternating background colors to items.
* **Grid spacing** – Changes the gap between grid items: **None**, **Small**, **Medium**, or **Large**.
* **Pagination** – Aligns the pagination controls above and below the gallery: **Left**, **Center**, or **Right**. The selection count and the load more button move aside so both stay visible on the same row.
* **Disable selection highlight** – Disables the standard styles for highlighting selected items.

## Troubleshooting

The new Gallery widget uses [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) as its base for styling. If you need to combine rows or columns you can achieve this using the following helper classes in the `Dynamic item class`:

* `widget-gallery-column-span-1` until `widget-gallery-column-span-12`: these classes merge column spaces, pushing items to a new row when the selected amount is reached for each platform
* `widget-gallery-row-span-1` until `widget-gallery-row-span-12`: these classes merge row spaces, pushing items into new columns or rows when needed
