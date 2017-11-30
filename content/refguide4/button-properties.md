---
title: "Button Properties"
parent: "control-bar"
---
## Appearance Properties

### Image

This property indicates which image will be shown in front of the caption of the trigger.

### Caption

This property indicates what text will be shown on the button. This is a translatable text. See [Translatable Texts](translatable-texts).

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

### Default button

This property indicates whether this button is the default button of the grid or reference set selector. A grid or reference set selector can only have one default button. The default button is triggered when clicking or double clicking a row. Whether a click or a double click triggers it depends on the 'default button trigger' property of the [Data Grid](data-grid), [Template Grid](template-grid) or [Reference Set Selector](reference-set-selector).

The default button has a different background color so that you can easily spot it. In the screenshot below the Edit button is the default button.

![](attachments/819203/917896.png)

_Default value:_ False

## Visibility Properties

### Visible

Buttons can be shown or hidden based on certain conditions. See [Conditions](conditions).
