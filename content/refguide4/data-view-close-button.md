---
title: "Data View Close Button"
parent: "data-view-control-bar"
---
The close button closes the form with the data view. This button can only be used in non-editable data views. In editable data views you use either save or cancel.

## Appearance Properties

### Caption

The text that appears on the button. This is a translatable text. See [Translatable Texts](translatable-texts).

### Image

An optional image that appears on the button.

### Class

The class property allows you to specify a cascading style sheet (CSS) class for the button. This class will be applied to the button in the browser and the button will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the button.

Note that the styling is applied in the following order:

1.  Default styling defined by the theme the project uses.
2.  The 'Class' property of the button.
3.  The 'Style' property of the button.

### Style

The style property allows you to specify additional CSS styling for the button. If a class is also specified, this styling is applied _after_ the class.

{{% alert type="info" %}}

font-size:40px;background-color:blue;color:orange;
This will result in a orange label with a font size of 40 pixels on a blue background.

{{% /alert %}}

## Behavior Properties

### Close button

This property indicates whether this button is the close button of the form. The close button is "clicked" when the user clicks the 'X' on the upper-right corner of a popup form.

_Default value:_ True

## Visibility Properties

### Visible

See [Button Properties](button-properties).
