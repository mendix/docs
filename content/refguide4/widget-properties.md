---
title: "Widget Properties"
parent: "form-concepts"
---
Here we discuss properties that are shared by many widgets in the form builder. Note: not all widgets have all of these properties. Look at the widget you are interested in for a complete list of applicable properties.

## Behavior Properties

### Required (only in web forms)

This property indicates whether this widget must be filled in by the end user or not. If set to true, this widget can not be left empty and a message will be shown if the end user presses the 'Save' button.

_Default value:_ False

### Required message (only in web forms)

This property determines the message that is shown to the end user if the widget is empty and the 'Required' property is set to true. This is a translable text. See [Translatable Texts](translatable-texts).

{{% alert type="info" %}}

For example, if an address field is required, the required message for the text box of the address could be something like "The address is required."

{{% /alert %}}

## Common Properties

### Tab index (only in web forms)

The tab index influences the order in which the end user navigates through the form using the tab key. By default tab indices are zero and the tab order is determined automatically by the client system. A value of minus one (-1) means that the widget will be skipped when tabbing through the form.

_Default value:_ 0

### Name

The internal name of the widget. At the moment this property is only used for specifying the listen target of a data view. See [Data View](data-view).

### Class

The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget.

Note that the styling is applied in the following order:

1.  Default styling defined by the theme the project uses.
2.  The 'Class' property of the widget.
3.  The 'Style' property of the widget.

### Style

The style property allows you to specify additional CSS styling for the widget. If a class is also specified, this styling is applied _after_ the class.

{{% alert type="info" %}}

font-size:40px;background-color:blue;color:orange;
This will result in a orange label with a font size of 40 pixels on a blue background.

{{% /alert %}}

## Data Source Properties

### Attribute (path)

Many input widgets, like text boxes and drop-down widgets, can be connected to:

1.  an attribute of the entity of the data view that contains the widget
2.  an attribute of an entity associated with the data view entity by following one or more associations of type reference through the domain model.

In the first case we say the widget is connected to an attribute and in the second case to an attribute path.

{{% alert type="warning" %}}

An input widget connected to an attribute _path_ must be read-only. The Modeler will check this for you.

{{% /alert %}}

## Editability Properties

### Editable

The editable property indicates whether the end user will be able to change the value displayed by the widget.

| Value | Description |
| --- | --- |
| Default | The value is editable if security allows it (i.e. if the user that is signed in has write rights to the selected attribute). |
| Never | The value is never editable. |
| Conditional | The value is editable if security allows it and the specified condition holds. (see below) |

_Default value:_ Default

### Condition

A widget can be made editable based on the value of an attribute of the enclosing data view. The attribute must be of type boolean or enumeration. For each value, you specify whether the widget is editable. Upon entering the form and upon changing the condition attribute the edit state of the widget will be updated.

Example: you don't have to ask for the marriage date if the end user indicates that he or she is not married.
