---
title: "Data view"
parent: "data-widgets"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The data view is a central component in Mendix applications. It is the starting point for showing the contents of exactly one object. For example, if you want to show the details of a single customer, you can use a data view to do this. The data view typically contains input widgets like text boxes with labels. In more complex screens, a data view can contain tab controls per topic (address, payment information) and data views and data grids for related objects (order history, wish list).

{{% alert type="info" %}}

![](attachments/pages/data-view.png)

A more advanced data view with a tab control and a data grid inside.

{{% /alert %}}

## 2 Components

### 2.1 Data View Contents Area

The data view contents area is where all the layout and input widgets go. Often the contents area contains a table with two columns with labels on the left and input widgets on the right. Other layouts are possible, as you can see in the examples above.

### 2.2 Data View Footer

The footer of the data view is the section at the bottom of the data view that often contains buttons to confirm or cancel the page. However, arbitrary widgets are allowed. The footer will stick to the bottom if the data view is the only top-level widget.

## 3 Common Properties

{{% snippet file="refguide/Name+Property.md" %}}

{{% snippet file="refguide/Class+Property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

{{% snippet file="refguide/Tab+index+Property.md" %}}

## 3 General Properties

### 3.1 Form Orientation

With this property, you can specify the position of the input widget labels inside the data view. If the orientation is horizontal, the labels will be placed next to the input widgets. If the orientation is vertical, the labels will be placed above the input widgets.

Note that form groups are responsive and the labels may be placed above input widgets, even if the orientation is set to horizontal, depending on the viewport size. Also, note that a data view with a vertical orientation cannot be nested inside a data view with a horizontal orientation. In that case, the form groups will be rendered horizontally, regardless of the value of the orientation property.

_Default value:_ Horizontal

### 3.2 Label Width (Weight)

If the form orientation is set to horizontal, this property can be used to specify the width of the input widget labels inside the data view. The width is specified using column weights from the [Bootstrap grid system](http://getbootstrap.com/css/#grid). For more details, see [Layout Grid](layout-grid).

_Default value:_ 3

### 3.3 Show Footer

With this property, you can specify whether you want the footer of the data view to be visible. The footer of nested data views is invisible by default, regardless of the value of this property.

_Default value:_ True

### 3.4 Empty Entity Message

If this message is specified, a data view that receives no source data will show this message instead of its content. Otherwise, the data view will show its static content and disabled input widgets. This property is a translable text. For more details, see [Translatable Texts](translatable-texts).

There are a number of ways a data view can end up without source data. For instance, a data view with a **Listen to widget** data source will remain empty until an object is selected in the target grid. In this scenario, **Empty entity message** can be used to guide the user to select an item from the grid.

_Default value:_ empty

## 4 Editability Properties

### 4.1 Editable

The editable property indicates whether the data view as a whole is editable or not. If the data view is not editable, no widget inside the data view will be editable. On the other hand, if the data view is editable, each widget is determined to be editable based on its own editable property.

_Default value:_ True

### 4.2 Read-Only Style

This property determines how input widgets are rendered if read-only. 

| Value            | Description |
|------------------|-------------|
| Control          | The widget is displayed but disabled, so the value cannot be modified.
| Text             | The widget is replaced by a textual representation of the value.

*Default value:* Control

## 5 Data Source Properties

The data source determines which objects will be shown in the data view. For general information about data sources, see [Data Sources](data-sources).

### 5.1 Type

The data view supports the following types of data sources: context, microflow, and listen to widget.

### 5.2 Other Properties

See the corresponding data source for specific properties:

* [Context source](entity-path-source)
* [Microflow source](microflow-source)
* [Listen to widget source](listen-to-grid-source)

### 5.3 Use Schema

{{% alert type="info" %}}

This property has been deprecated in version 7.2.0 and is marked for removal in version 8.0.0.

{{% /alert %}}

Curently this has no effect.

## 6 Visibility Properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Simple.md" %}}

## 7 Related Content

* [Entities](entities)
* [Associations](associations)
