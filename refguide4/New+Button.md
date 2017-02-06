---
title: "New Button"
category: "refguide4"
space: "Reference Guide 4"
---
The new button allows the end-user to create new objects in a grid or reference set selector.

<div class="alert alert-info">{% markdown %}

In version 4 the behavior of the New Button was changed, so that pressing the button does not immediately insert the object in the database. When converting to version 4, existing new buttons are converted to persistent new buttons, which have the same behavior as new buttons from version 3\. This conversion is done to preserve 100% backward compability. The persistent new button is deprecated and there will be a warning for it in the error list. Right-clicking the warning allows you to find all occurrences and to convert them to the 4 new button.

{% endmarkdown %}</div>

## Appearance Properties

### Image

See [Button Properties](Button+Properties).

### Caption

See [Button Properties](Button+Properties).

### Class

See [Button Properties](Button+Properties)

### Style

See [Button Properties](Button+Properties)

## Behavior Properties

### Edit location

| Value | Description |
| --- | --- |
| Inline at top | The new instance is added directly at the top of the grid or reference set selector and can be edited inline. |
| Inline at bottom | The new instance is added directly at the bottom of the grid or reference set selector and can be edited inline. |
| In a form | The new instance is added and can be edit in a form. The form in which this instance is being edited can be set with the form property |

_Default value:_ In a form

### Form

This property is relevant if the edit location is set to 'In a form' and it indicates the form that is shown to end-user when he or she clicks this button. This form should contain a data view connected to the same entity as the grid or reference set selector.

### Form settings

The form settings specify how the form is opened. See [Opening Forms](Opening+Forms).

### Default button

See [Button Properties](Button+Properties).

## Data Source Properties

### Entity

This property determines of which entity this button should create an instance. If the entity that is connected to the grid or reference set selector has no specializations, the form builder will automatically set this property for you. Otherwise, you will have to select one of the specializations yourself.

<div class="alert alert-info">{% markdown %}

Let us say you have an entity Vehicle and two specializations, namely Bicycle and Car. In a grid on Vehicle you have to specify for the New button whether a Vehicle, a Bicycle or a Car will be created. You can even have three new buttons, one for each possibility.

{% endmarkdown %}</div>

## Visibility Properties

### Visible

See [Button Properties](Button+Properties).