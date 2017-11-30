---
title: "Data view"
parent: "data-widgets"
---


The data view is a central component in Mendix applications. It is the starting point for showing the contents of exactly one object. If, for example, you want to show details of a single customer you would use a data view to do this. The data view typically contains input widgets like text boxes with labels. In more complex screens, a data view can contain tab controls per topic (address, payment information) and data views and data grids for related objects (order history, wish list).

{{% alert type="info" %}}

![](attachments/4522281/14385322.png)
A more advanced data view with a tab control and a data grid inside.

{{% /alert %}}

## Components

### Data view contents area

The data view contents area is the place where all the layout and input widgets go. Often the contents area contains a table with two columns with labels on the left and input widgets on the right. Other layouts are possible as you can see in the examples above.

### Data view control bar

The control bar of the data view is the bar with buttons at the bottom of the component. By default, it contains a Save and a Cancel button but the bar can be customized. A read-only data view would typically provide only a Close button. You can add buttons with custom behavior through the use of a microflow button.

See [Data view control bar](data-view-control-bar) for a description of the buttons and their properties.

## Common properties

### Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class '`mx-name-{NAME}`', which can be useful for [Selenium testing](/howto50/selenium-support).

### Class

The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget.

{{% alert type="warning" %}}

Note that the styling is applied in the following order:

1.  Default styling defined by the theme the project uses.
2.  The 'Class' property of the widget.
3.  The 'Style' property of the widget.

{{% /alert %}}

### Style

The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied _after_ the class.

{{% alert type="info" %}}

background-color:blue;
This will result in a blue background

{{% /alert %}}

### Tab index

The tab index influences the order in which the end user navigates through the page using the tab key. By default tab indices are zero and the tab order is determined automatically by the client system. A value of minus one (-1) means that the widget will be skipped when tabbing through the page.

_Default value:_ 0

## General properties

### Editable

The editable property indicates whether the data view as a whole is editable or not. If the data view is not editable, no widget inside the data view will be editable. On the other hand, if the data view is editable, each widget can be editable or not based on its own editable property.

_Default value:_ True

### Form orientation

With this property you can specify the position of labels of input widgets inside the data view. If the orientation is horizontal labels will be placed next to input widgets. If the orientation is vertical labels will be placed above input widgets.

Note that form groups are responsive and the labels may be placed above input widgets even if the orientation is set to horizontal, depending on the viewport size. Also note that a data view with orientation vertical can not be nested inside a data view with orientation horizontal. In that case form groups will be rendered horizontally regardless of the value of the orientation property.

_Default value:_ Horizontal

### Label width (weight)

If the form orientation is set to horizontal this property can be used to specify the width of labels of input widgets inside the data view. The width is specified using column weights from the [Bootstrap grid system](http://getbootstrap.com#grid) (see [Layout Grid](layout-grid)).

_Default value:_ 3

### Close on Save/Cancel

Using this property you can specify whether you want the current page to be closed when the Save or Cancel button is clicked. After closing the current page, the client will return to the previous screen. This property only has effect for data views that are shown in the content pane (as opposed to in a popup).

For example, you have a data grid with customers and the edit button of the grid directs you to a data view in content showing the details of one customer. After clicking Save or Cancel you want the application to return to the page of the grid. In this case you want the property 'Close on Save/Cancel' to be true.

_Default value_: True

### Show control bar

With this property you can specify whether you want the control bar of the data view to be visible. The control bar of nested data views is invisible by default regardless of the value of this property.

_Default value:_ True

### Empty entity message

{{% alert type="info" %}}
This property was added in version 5.10.  
{{% /alert %}}

If this message is specified, a data view that receives no source data will show this message instead of its content. Otherwise, the data view will show its static content and disabled input widgets. This property is a translable text. See [Translatable Texts](translatable-texts).

There are number of ways a data view can end up without source data. For instance, a data view with a 'Listen to widget' data source will remain empty until an object is selected in the target grid. In this scenario, 'Empty entity message' can be used to guide the user to select an item from the grid.

_Default value:_ empty

{{% alert type="info" %}}

The next two screenshots demonstrate the behavior of an empty data view with and without an empty entity message:

<table><thead><tr><th class="confluenceTh"></th><th class="confluenceTh"></th></tr></thead><tbody></tbody></table>
{{% /alert %}}

## Data source properties

The data source determines which objects will be shown in the data view.

### Type

The data view supports the following types of data sources:

*   Entity (Path),
*   Microflow
*   Listen to widget

### Entity (Path) (only for data source type "Entity (Path)")

The entity (path) property specifies the entity that will be shown in the data view. For a top-level data view it is simply an entity. In this case the caller of the page supplies the object that will be shown. A nested data view has an entity **path** that follows associations from the enclosing data view.

### Microflow (only for data source type "Microflow")

The microflow property specifies a microflow is executed when that data view is opened. The microflow returns the object that will be shown in the data view. Only a nested data view can have a microflow. The microflow gets the object of the containing data view as a parameter and returns an object of the type of the entity of its own the data view.

### Microflow settings (only for data source type "Microflow")

The microflow settings specify which parameters to pass to the microflow. See [Starting Microflows](starting-microflows).

### Listen target (only for data source type "Listen to widget")

{{% alert type="info" %}}
The option to select list views as listen targets was added in version 5.10. 
{{% /alert %}}

This property specifies the template grid, data grid, reference set selector or list view that the data view listens to. Whenever an item is selected in the designated widget, the data view displays data corresponding to that item.

All available widgets are listed in the resulting drop-down based on their 'name' property. Data view can only listen to widgets placed on the same page or inside the same snippet.

{{% alert type="info" %}}

A common use case of 'Listen to widget' data source is a page with a data grid showing orders and a data view showing detailed information about the order in the same page.

{{% /alert %}}

### Use schema

This defines whether only the required attributes and associations for the object(s) are retrieved. This can sometimes improve your performance but it can also reduce performance because the objects can not be cached entirely. If you have custom widgets in your page and they need access to other attributes or associations, or if your next page contains other attributes or associations of the same object(s) you should not enable this. This is why the default value is false.

## Visibility properties

{{% alert type="info" %}}
Conditional visibility settings were added to the data view in version 5.10.0.
{{% /alert %}}

### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met. 

## Attribute Condition

### Attribute

When checked, this setting hides the widget unless a particular attribute has a certain value. Only boolean and enumeration attributes can be assigned to this purpose.

A practical example would be a web shop in which the user must submit both billing and delivery information. In this case you might not wish to bother the user with a second set of address input fields unless he or she indicates that the billing and delivery address are not the same. You can accomplish this by making the delivery address fields conditionally visible based on the boolean attribute SameBillingAndDeliveryAddress.

### Module roles

The widget can be made visible to a subset of the user roles available in your application. When activated, this setting will render the widget invisible to all users that are not linked to one of the selected user roles. Please note that this does not override project security. Any restrictions due to microflow, form, or entity access will remain in effect.

## Related Articles

*   [Entities](entities)
*   [Associations](associations)
