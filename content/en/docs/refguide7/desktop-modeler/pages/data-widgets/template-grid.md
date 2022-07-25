---
title: "Template Grid"
url: /refguide7/template-grid/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

The template grid shows a list of objects in a tile view. For example, a template grid can show a list of products. Using controls provided by the template grid you can browse, search and manipulate those objects. The template grid has a lot in common with the data grid. The main difference is that the objects are shown in templates (a sort of small data view) instead of rows.

Like data grid rows, single tiles do not have their content updated. For example, a data view inside a tile is not updated via the **Refresh in client** setting in a microflow action. Refreshing the template grid entity refreshes the whole grid.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/data-widgets/template-grid/template-grid.png" >}}

A template grid showing employees with their profile picture.

{{% /alert %}}

## Common properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tab+index+Property.md" %}}

## Components

### Control bar

See [Control Bar](/refguide7/control-bar/).

### Search bar (for data source type 'Database' and 'XPath')

See [Search Bar](/refguide7/search-bar/).

### Sort bar (for data source type 'Database' and 'XPath')

See [Sort Bar](/refguide7/sort-bar/).

## General properties

### Show control bar

This property indicates whether the control bar will be visible in the end user interface. The control bar also includes the paging buttons.

{{% alert color="warning" %}}

Even if the control bar is invisible there can still be a default button that is triggered by (double) clicking a row. See the property 'Default button trigger' and [grid buttons](/refguide7/control-bar/) for more information.

{{% /alert %}}

_Default value:_ True

### Show paging buttons

This property indicates with the buttons to page through the information in the grid are visible. Only hide these buttons if you are sure that there will never be more objects than the number of rows of the grid. Note that hiding the control bar also hides the paging buttons.

_Default value:_ True

### Number of rows

With this property you can change the number of rows of templates that will be shown on one page.

_Default value:_ 3

### Number of columns

With this property you can change the number of templates that will be shown next to each other in one row.

_Default value:_ 2

### Style template

The style template property allows you to choose from three different styling of the template grid. These stylings depend on your theme package.

### Selection mode

The selection mode determines whether and how the user can select items in the grid.

| Value | Description |
| --- | --- |
| No selection | The user cannot select items. |
| Single selection | The user can select a single item by clicking on it. Clicking another item will make that item the selection. |
| Single selection and maintain | The user can select one item at a time by clicking on it. Users cannot deselect an item. By default the first item will be selected and removing a selected item will autoselect a subsequent item. |
| Multi-selection | The user can select multiple items by clicking the first one and holding the 'Ctrl' key while clicking on other items. Simply clicking an item will deselect all items and make the clicked item the selection. |
| Simple multi-selection | The user can select multiple items by simply clicking on them. |

_Default value:_ Single selection

### Select first

This property indicates whether the first item will be selected initially. This is especially useful if there is a data view listening to this grid.

_Default value:_ False

### Default button trigger

The default button can be triggered by a single or a double click a row.

| Value | Description |
| --- | --- |
| Single click | A single click triggers the default button. This cannot be used in combination with allowing the user to select rows. |
| Double click | A double click triggers the default button. |

_Default value:_ Double click

### Refresh time (in seconds)

If the refresh time is non-zero, the template grid will refresh its contents every given number of seconds. For example, a task list could be refreshed every minute so that you know when new tasks arrive. By default the refresh time is zero and this means that the grid will not automatically refresh itself.

_Default value:_ 0

## Data source properties

The data source determines which objects will be shown in the template grid. For general information about data sources, see [Data Sources](/refguide7/data-sources/).

### Type

The template grid supports the following types of data sources: Database Source, Association Source, Microflow Source. The database source retrieves objects from the database and supports searching and sorting. The association source follows an association from the enclosing data view to get to the objects. Finally, the microflow source calculates the list of objects by executing a microflow.

### Other properties

See the corresponding data source for its properties:

*   [Database source](/refguide7/database-source/)
*   [XPath source](/refguide7/xpath-source/)
*   [Microflow source](/refguide7/microflow-source/)
*   [Association source](/refguide7/association-source/)

## Visibility properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}
