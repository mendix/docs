---
title: "Data grid"
url: /refguide7/data-grid/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

The data grid shows a list of objects in a grid. For example, a data grid can show all the orders a customer has placed. Using controls provided by the data grid you can browse, search and edit those objects.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/data-widgets/data-grid/data-grid.png" >}}
A data grid showing accounts.

{{% /alert %}}

## Common Properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tab+index+Property.md" %}}

### General Properties

#### Show Control Bar Buttons

This property indicates whether the control bar buttons will be visible in the end user interface.

{{% alert color="warning" %}}

Even if the control bar buttons are invisible, there can still be a default button that is triggered by (double) clicking a row. For more information, see the property [Default Button Trigger](#dbt) and [Data Grid Buttons](/refguide7/control-bar/).

{{% /alert %}}

_Default value:_ True

#### Show Paging Buttons

This property indicates with the buttons to page through the information in the grid are visible. Only hide these buttons if you are sure that there will never be more objects than the number of rows of the grid.

_Default value:_ True

{{% snippet file="/static/_includes/refguide7/Column+Width+Properties.md" %}}

#### Number of Rows

With this property you can change the number of rows that will be shown in one page. See also the property 'Show empty rows'.

_Default value:_ 20

#### Show Empty Rows

If you choose to show empty rows there will always be the grid will always show the same number of rows (see 'Number of rows') even if there are less objects to show on the page.

_Default value:_ False

#### Selection Mode

The selection mode determines whether and how the user can select items in the grid.

| Value | Description |
| --- | --- |
| No selection | The user cannot select items. |
| Single selection | The user can select a single item by clicking on it. Clicking another item will make that item the selection. |
| Single selection and maintain | The user can select one item at a time by clicking on it. Users cannot deselect an item. By default the first item will be selected and removing a selected item will autoselect a subsequent item. |
| Multi-selection | The user can select multiple items by clicking the first one and holding the 'Ctrl' key while clicking on other items. Simply clicking an item will deselect all items and make the clicked item the selection. |
| Simple multi-selection | The user can select multiple items by simply clicking on them. This was the default multi-selection behavior prior to version 3.1.0. |

_Default value:_ Single selection

#### Select First

This property indicates whether the first item will be selected initially. This is especially useful if there is a data view listening to this grid.

_Default value:_ False

#### Default Button Trigger{#dbt}

The default button can be triggered by a single or a double click a row.

| Value | Description |
| --- | --- |
| Single click | A single click triggers the default button. This cannot be used in combination with allowing the user to select rows. |
| Double click | A double click triggers the default button. |

_Default value:_ Double click

#### Refresh Time (in Seconds)

If the refresh time is non-zero, the data grid will refresh its contents every given number of seconds. For example, a task list could be refreshed every minute so that you know when new tasks arrive. By default the refresh time is zero and this means that the grid will not automatically refresh itself.

_Default value:_ 0

#### Tooltip Page

A tooltip page is a page that appears when you hover your mouse over a row. The tooltip page should consist of a data view on the same entity as the data grid. Besides creating and connecting a tooltip page you also have to specify on which columns the tooltip will appear. See the property 'Show tooltip' of [data grid columns](/refguide7/columns/).

### Data Source Properties

The data source determines which objects will be shown in the data grid. For general information about data sources, see [Data Sources](/refguide7/data-sources/).

#### Type

The data grid supports the following types of data sources: [Database Source](/refguide7/database-source/), [XPath Source](/refguide7/xpath-source/), [Association Source](/refguide7/association-source/), [Microflow Source](/refguide7/microflow-source/). The database and XPath sources retrieve objects from the database and supports searching and sorting. The database source can also be used in [offline](/refguide7/offline/) applications. The association source follows an association from the enclosing data view to get to the objects. Finally, the microflow source calculates the list of objects by executing a microflow.

#### Other Properties

See the corresponding data source for its properties:

*   [Database source](/refguide7/database-source/)
*   [XPath source](/refguide7/xpath-source/)
*   [Microflow source](/refguide7/microflow-source/)
*   [Association source](/refguide7/association-source/)

### Visibility Properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}

## Components

### Columns

#### Common Properties

#### Class Property

The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget.

{{% alert color="warning" %}}

Note that the styling is applied in the following order:

1.  Default styling defined by the theme the project uses.
2.  The 'Class' property of the widget.
3.  The 'Style' property of the widget.

{{% /alert %}}

#### Style Property

The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied _after_ the class.

{{% alert color="info" %}}

background-color:blue;
This will result in a blue background

{{% /alert %}}

#### Data Source Properties

##### Attribute (path)

The attribute (path) property specifies the attribute's value that will be displayed in this column. It can be an attribute of the grid entity, or it can be an attribute of an associated entity, in which case we speak of an attribute path. The path can follow multiple associations of type reference, and at the end (optionally) one of type reference set. If you show a reference set in a column the values will be separated by a comma.

#### Formatting Properties

##### Enumeration Format (Only for Attributes of Type Enumeration)

A column connected to an attribute of type enumeration can show its contexts as text (default) or as image.

| Value | Description |
| --- | --- |
| Text | Show the caption text of the enumeration. |
| Image | Show the image of the enumeration value. |

##### Decimal Precision (Only for Decimal Attributes)

The precision of a value is defined the number of digits that is used to express that value. This property indicates the number of decimal places (the number of digits following the decimal point).

_Default value:_ 2

##### Group Digits (Only for Numeric Attributes)

For ease of reading, numbers with many digits before the decimal separator may be divided into groups using a delimiter. This property defines whether the end user will see these groups, or not.

_Default value:_ False

##### Date Format (Only for Attributes of Type DateTime)

The date format determines whether the date part, the time part or both are shown. How the date and time parts are formatted depends on the localization of the user using the application.

Possible values: 'Date', 'Time', 'Date and time' and 'Custom'.

_Default value:_ Date

If you choose 'Custom' as the date format (see above) the custom date format determines the way date and/or time are formatted. The custom date format is a string that follows the rules in this table,

| Symbol | No. | Example | Description |
| --- | --- | --- | --- |
| G | 1 | AD | Era |
| y | 1..n | 2010 | Year |
| M | 1..2 | 09 | Month |
| M | 3 | Sept |
| M | 4 | September |
| w | 1..2 | 27 | Week of Year |
| D | 1..3 | 93 | Day of Year |
| a | 1 | AM | AM or PM |
| h | 1..2 | 11 | Hour (1-12) |
| H | 1..2 | 13 | Hour (0-23) |
| k | 1..2 | 10 | Hour (1-24) |
| K | 1..2 | 0 | Hour (0-11) |
| m | 1..2 | 59 | Minute, use one or two for zero padding |
| s | 1..2 | 12 | Second, use one or two for zero padding |

{{% alert color="info" %}}

| Format | Example output |
| --- | --- |
| `EEEE d MMMM yyy G, h:mm a ss's` | Tuesday 29 March 2011 AD, 1:37 PM 48s |
| `h:mm a` | 1:37 PM |
| `yyy D KK:mm` | 2011 88 01:26 |
| `EEEE MMMM d yyy` | Tuesday March 29 2011 |
| `EEE, MMM d, ''yy` | Wed, Jul 4, '01 |

{{% /alert %}}

#### General Properties

##### Caption

The caption of a column is the text that appears as a header above the rows. This is a translatable text. See [Translatable Texts](/refguide7/translatable-texts/).

##### Editable

The editable property indicates whether the values of the column will be editable inline, as in, without opening a page with a data view. In-line editing allows the data grid to behave like you would expect from a spreadsheet application.

##### Aggregate Function

The values in a column can be aggregated in several ways. The aggregate function determines the way in which the values are aggregated. The aggregate will be shown at the bottom of the column that precedes by the aggregate caption (see below).

| Value | Description |
| --- | --- |
| None | Do not aggregate the values in the column. |
| Average | Show the average of the values. |
| Minimum | Show the smallest value. |
| Maximum | Show the largest value. |
| Sum | Show the sum of the values. |
| Count | Show the count of the values. |

{{% alert color="warning" %}}

Note that all objects will be taken into account, and not just the ones on the current page.

{{% /alert %}}

##### Aggregate Caption

The aggregate caption is the text that appears in front of the computed value. This is a translatable text. See [Translatable Texts](/refguide7/translatable-texts/).

{{% alert color="info" %}}

'Total' could be an aggregate caption for a column that shows the sum of the values.

{{% /alert %}}

##### Show Tooltip

This property determines whether the tooltip page is shown as the mouse is hovered over this column. The tooltip page can be configured on the data grid.

_Default value:_ False

### Control Bar

The control bar of the template grid, data grid, and reference set selector allows you to manipulate the objects displayed by means of buttons. By default, both grids will be created with a new, edit, and delete button in the control bar. The control bar can also include a number of selection options and spreadsheet export buttons, as well as microflow buttons for custom actions.

See [Control Bar](/refguide7/control-bar/).

### Search Bar (for the Database and XPath Data Source Types)

The search bar contains search fields that allow the end-user to quickly find the information he or she needs.

See [Search Bar](/refguide7/search-bar/).

### Sort Bar (for the Database and XPath Data Source Types)

The sort bar contains a number of sort items. Each sort item specifies what attribute to sort on and in what direction (ascending or descending). First the contents of the grid will be sorted on the first item; if two rows are the same with respect to this sort item the second item will be used et cetera. For example, if you have sort items for name and age and two people have the same name they will be sorted on their age.

See [Sort Bar](/refguide7/sort-bar/).
