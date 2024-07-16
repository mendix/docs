---
title: "Gallery"
url: /appstore/modules/gallery/
description: "Describes the configuration and usage of the Gallery widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Gallery](https://marketplace.mendix.com/link/component/116540) widget, a replacement for both the template grid and list view, helps you build beautiful lists and grids for desktop, tablet, and mobile devices. Featuring the same filtering and sorting as seen in [Data Grid 2](https://marketplace.mendix.com/link/component/116540), the Gallery widget also provides options for varying columns per device type and gives you the power to create amazing grid and list experiences for every user.

Here is an example of a Gallery widget using filters:

{{< figure src="/attachments/appstore/use-content/modules/data-widgets/gallery/example.png" alt="Example of gallery using filter and sort"   width="300"  class="no-border" >}}

### 1.2 Advanced Options

The gallery has an option to enable advanced options. When this option is toggled on, it enables numerous features to customize your gallery:

* Pagination type
* Pagination position
* Empty list option
* Dynamic item class
* Filtering
* Sorting

## 2 Configuration

Several options can be defined in the Gallery widget:

### 2.1 Data Source

Data source specifies the source of the data being presented in the Gallery. You can select data from **Database**, **Association**, **Microflow**, **Nanoflow**, or **Xpath**.

### 2.2 Columns

We provide a mechanism that automatically applies a different number of columns based on the device being used. In the Gallery widget, you can select columns for **Desktops**, **Tablets**, or **Phone/Mobile**.

### 2.3 Items

In the items group you can define the properties related to the items being presented.

#### 2.3.1 Page size

Defines the amount of data shown for each page or the limit to be presented when using virtual scrolling.

#### 2.3.2 Pagination

{{% alert color="info" %}}
This widget does not support [system texts](/refguide/system-texts/), meaning is not possible to translate its content to another language.
{{% /alert %}}

You can choose between paging buttons (button being presented below or above the grid) or virtual scrolling (mechanism that automatically loads data when the users reaches the bottom of the scroll bar).

#### 2.3.3 Position of Paging Buttons

This option is only available when `Pagination` is marked as `Paging buttons` and defines its position relative to the grid items.

#### 2.3.4 Empty Message

When this option is defined as custom it will show a composable region. Here you can place widgets that will be presented when no items are available to be shown, as well as when the filter does not return any data:

{{< figure src="/attachments/appstore/use-content/modules/data-widgets/gallery/empty-message.png" alt="Example of empty message"   width="300"  class="no-border" >}}

#### 2.3.5 Dynamic Item Class

In the new Gallery widget we offer an option to dynamically apply a CSS class to a specific item. You can achieve this by adding an expression based on the item values (attributes) like the example below.

In this example we check the value of `CountryName`, then if the attribute is equal to `Spain` apply the class `.my-custom-class` to the items:

{{< figure src="/attachments/appstore/use-content/modules/data-widgets/gallery/dynamic-item-class.png" alt="Example of dynamic item class"   width="300"  class="no-border" >}}

### 2.4 Events

The new Gallery widget can trigger some events while iterating with it.

#### 2.4.1 On Click Action

Triggers an action (such as a nanoflow, microflow, or Show page action) when the end-user clicks in one of the items. It also adds a pointer cursor to signal that it is clickable. This function also complies with accessibility features and can be reached using only the keyboard.

## 3 Filtering

{{< figure src="/attachments/appstore/use-content/modules/data-widgets/gallery/filtering.gif" alt="Example of filtering"   width="300"  class="no-border" >}}

In order to enable filtering within the gallery items you need to select the desired attributes to be filtered in the **Filtering** tab. You can select attributes of the following types:

* Autonumber
* Boolean
* Date & time
* Decimal
* Enumeration
* Hashed string
* Integer
* Long
* String

The attributes selected here will be used for the matching filter placed inside the composable region. When using multiple attributes, the filters will automatically select the matching attributes and then compose the desired filter value in an `OR expression`. Make sure you just have one filter widget for each type, for example `Text Filter` and `Number Filter`.

{{% alert color="info" %}}
If a filter is being used and its type does not match with any selected attribute it will throw an error requesting you to select the correct filter widget.
{{% /alert %}}

An example of filtering configuration:

{{< figure src="/attachments/appstore/use-content/modules/data-widgets/gallery/filtering.png" alt="Example of filtering configuration"   width="300"  class="no-border" >}}

An example of text filter being used in the composable region combined with a drop-down sort:

{{< figure src="/attachments/appstore/use-content/modules/data-widgets/gallery/filter-region.png" alt="Example of filtering composable region"   width="300"  class="no-border" >}}

For more information about filters, see the [Filters](/appstore/modules/data-grid-2/#filters) section of *Data Grid 2*.

## 4 Sorting

{{< figure src="/attachments/appstore/use-content/modules/data-widgets/gallery/sorting.gif" alt="Example of sorting"   width="300"  class="no-border" >}}

In the new Gallery widget it is possible to add sorting widgets to the composable region and use them based on the configurations available in the **Sorting** tab. In order to make the attributes available for the sorting widgets, you must select an attribute and define the name it will show via the sort button.

{{% alert color="info" %}}
If you have a sorting applied in the datasource of the gallery it will pre-select the value in the drop-down filter if it matches the selection made in the configurations and override the filter selected in the datasource in case you have more options defined.
{{% /alert %}}

{{< figure src="/attachments/appstore/use-content/modules/data-widgets/gallery/sorting.png" alt="Example of sorting configuration"   width="300"  class="no-border" >}}

### 4.1 Drop-Down Sort {#dropdown}

The Drop-Down Sort widget is a widget you can use in combination with the Gallery widget. The Drop-Down Sort widget just needs to be placed inside a composable region of the Gallery widget after defining the sorting attributes in the Gallery widget's **Sorting** tab.

The Drop-Down Sort widget has two options you can set:

* Empty option caption: value to be used when no value is selected
* Screen reader caption: value to be announced by screen readers when using assistive technology

## 5 Keyboard Navigation and Selection

In the Gallery widget it is possible to navigate and select items using  the keyboard. Keyboard navigation can increase user speed, as well as makes the widget more accessible.

To improve user experience, it is possible to detect which item has keyboard focus. Visually, you can see which item has keyboard focus by spotting the thin blue border.

You can also see when an item is selected: an item with a light gray background is selected.

For the keyboard navigation and keyboard selection to work, the user must open the **General** tab and then set the **Selection** property to one of the following:

* **Single**: enables keyboard navigation with just single selection
* **Multi**: to enable keyboard navigation with multi-selection

### 5.1 Keyboard Navigation

Using the keyboard arrow keys (<kbd>{↑}</kbd>, <kbd>{↓}</kbd>, <kbd>{←}</kbd>, <kbd>{→}</kbd>) the user can navigate between the items displayed in the Gallery. Also, the user can use special keyboard keys like <kbd>{Home}</kbd>, <kbd>{End}</kbd>, <kbd>{Pageup}</kbd>, and <kbd>{Pagedown}</kbd>.

With the keyboard, the user can press <kbd>{tab}</kbd> and navigate between elements to reach the Gallery items.

### 5.2 Keyboard Selection

Keyboard selection, which differs from navigation, simulates the click of the mouse on an item. Thus, after navigating to a desired item, the user can press <kbd>{Shift}</kbd> +<kbd>{Space}</kbd> and the item will be selected.

### 5.3 Keyboard Multi-Selection

To further improve the user experience, it is also possible to select many items only using the keyboard. To achieve this, the user can hold <kbd>{Shift}</kbd> on the first item and navigate with arrow key to the last item they want to select. By doing this, all the items between the first and last selected will also be selected.

### 5.4 Accessibility

Employing keyboard navigation is an effective way of ensuring users who cannot use a mouse can still interact with the Gallery widget.

## 6 Troubleshooting

The new Gallery widget uses [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) as its base for styling. If you need to combine rows or columns you can achieve this using the following helper classes in the `Dynamic item class`:

* `widget-gallery-column-span-1` until `widget-gallery-column-span-12`: these classes merge column spaces, pushing items to a new row when the selected amount is reached for each platform
* `widget-gallery-row-span-1` until `widget-gallery-row-span-12`: these classes merge row spaces, pushing items into new columns or rows when needed
