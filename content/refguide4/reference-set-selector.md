---
title: "Reference Set Selector"
parent: "web-forms"
---
The reference set selector allows you to set an association of type reference set by selecting objects. For example, if customers can belong to several groups, a reference set selector can be used to select the groups the customer belongs to. This requires that there is an association from customer to group of type reference set in the domain model.

{{% alert type="info" %}}

![](attachments/819203/917936.png)
In this data view on customer you can select multiple groups using the reference set selector.

![](attachments/819203/917934.png)
In the domain model there is an association of type reference set from customer to group.

{{% /alert %}}

The reference set selector looks a lot like a [data grid](data-grid) and consequently shares many properties with the data grid. Main differences are that the reference set selector lacks a search bar and that it has different buttons by default (Add, Remove).

The 'Add and Remove' buttons mean something else than the 'New and Delete' buttons that are used by default in the data grid:

*   The Add button adds a reference to an existing object. The New button, on the other hand, creates a new object and does not add references. (the [context mechanism](context-mechanism) may automatically set references but that is a story for another time)

*   The Delete button actually deletes an object for good, whereas the Remove button simply removes the reference to the object and leaves the object itself intact.

## Components

### Control bar

See [Control Bar](control-bar).

### Sort bar

See [Sort Bar](sort-bar).

### Columns

See [Columns](columns) for more information.

## Appearance Properties

### Show control bar

This property indicates whether the control bar will be visible in the end user interface. The control bar also includes the paging buttons.

{{% alert type="warning" %}}

Even if the control bar is invisible there can still be a default button that is triggered by (double) clicking on a row. See the property 'Default button trigger' and [control bar](control-bar) for more information.

{{% /alert %}}

_Default value:_ True

### Show paging buttons

This property indicates whether the buttons to page through the information in the grid are visible or not. Only hide these buttons if you are sure that there will never be more objects than the number of rows of the grid. Note that hiding the control bar also hides the paging buttons.

_Default value:_ True

### Column weights

The column weights are percentages separated by semi-colons. They determine the widths of the columns. The weights have to add up to 100\. An alternative way of changing the widths of columns is by dragging the separating line between columns.

{{% alert type="info" %}}

In the screenshot above the column weights are 63;37.

{{% /alert %}}

### Number of rows

With this property you can change the number of rows that will be shown in one page. See also the property 'Show empty rows'.

_Default value:_ 5

### Show empty rows

If you choose to show empty rows there will always be the grid that shows the same number of rows (see 'Number of rows') even if there are fewer objects to show on the page.

_Default value:_ False

## Behavior Properties

### Selection mode

The selection mode determines whether and how the user can select items in the grid.

| Value | Description |
| --- | --- |
| No selection | The user cannot select items. |
| Single selection | The user can select a single item by clicking on it. Clicking another item will make that item the selection. |
| Multi-selection | The user can select multiple items by clicking the first one and holding the 'Ctrl' key while clicking on other items. Simply clicking an item will deselect all items and make the clicked item the selection. |
| Simple multi-selection | The user can select multiple items by simply clicking on them. This was the default multi-selection behavior prior to version 3.1.0\. |

_Default value:_ Single selection

### Allow selection

{{% alert type="info" %}}

As of version 3.1.0, the 'Allow selection' and 'Allow multi-select' properties have been consolidated into the new property 'Selection mode'.

{{% /alert %}}

If selection is allowed the user can select rows of the grid by clicking on them. If the default button trigger is single click, selection cannot be allowed at the same time.

_Default value:_ True

### Allow multi-select

{{% alert type="info" %}}

As of version 3.1.0, the 'Allow selection' and 'Allow multi-select' properties have been consolidated into the new property 'Selection mode'.

{{% /alert %}}

If multi-select is allowed, the user can select multiple rows of the grid by clicking on them. This property only has meaning if selection is allowed.

_Default value:_ False

### Default button trigger

The default button can be triggered by a single or a double click on a row.

| Value | Description |
| --- | --- |
| Single click | A single click triggers the default button. This cannot be used in combination with allowing the user to select rows. |
| Double click | A double click triggers the default button. |

_Default value:_ Double click

### Tooltip form

A tooltip form is a form that appears when you hover your mouse over a row. The tooltip form should consist of a data view on the same entity as the data grid. On top of creating, and connecting, a tooltip form you also have to specify on which columns the tooltip will appear. See the property 'Show tooltip' of [data grid columns](columns).

## Common Properties

### Tab index

See [Widget Properties](widget-properties).

### Name

See [Widget Properties](widget-properties).

### Class

See [Widget Properties](widget-properties).

### Style

See [Widget Properties](widget-properties).

## Data Source Properties

### Entity path

The entity path of a reference set selector is a path following one association of type 'reference set' from the entity of the containing data view to the entity on the other side of that association. In the example above the association Customer_Group from Customer to Group is followed and the path is: Customer_Group/Group.

{{% alert type="warning" %}}

With the reference selector you are editing an association of type reference set (Customer_Group). Adding, and removing, objects using the selector will only add and remove references to those objects; the objects themselves are unchanged.

{{% /alert %}}

## Deprecated properties

### User restriction

See [Deprecated Properties](reference-selector) of the reference selector.

## Events

### On change

See [Widget Events](widget-events).

### On change settings.

See [Widget Events](widget-events).

## Selectable Objects Properties

The selectable objects are determined in the same way as in the reference selector. See the [selectable objects properties](reference-selector) of the reference selector for more information. Note that you cannot use a microflow in a reference set selector.

### XPath constraint

See [Selectable Objects Properties](reference-selector) of the reference selector.

### Constrained by

See [Selectable Objects Properties](reference-selector) of the reference selector.

### Apply context

See [Selectable Objects Properties](reference-selector) of the reference selector.

### Remove from context

See [Selectable Objects Properties](reference-selector) of the reference selector.

## Related Articles

*   [Data View](data-view)
*   [Entities](entities)
*   [Associations](associations)
