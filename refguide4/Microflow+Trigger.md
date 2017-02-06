---
title: "Microflow Trigger"
category: "refguide4"
space: "Reference Guide 4"
---
A microflow trigger can be used to create a button that starts a microflow on a form.

<div class="alert alert-info">{% markdown %}

![](attachments/819203/917520.png)
This microflow trigger retrieves an address that belongs to the given zip code.

{% endmarkdown %}</div>

A microflow trigger must always be placed in a table cell. If a microflow trigger is placed within a data view the connected microflow will receive the entity that is connected to the data view as an input parameter.

## Appearance Properties

### Caption

The text displayed on the trigger. This is a translatable text. See [Translatable Texts](Translatable+Texts).

### Render as

This property indicates how the trigger is rendered.

| Value | Description |
| --- | --- |
| Button | The trigger is rendered as a button. |
| Link | The trigger is rendered as a hyperlink. |

_Default value:_ Button

### Image

This property indicates the image that will be shown in front of the caption of the trigger.

## Common Properties

### Tab index

See [Widget Properties](Widget+Properties).

### Name

See [Widget Properties](Widget+Properties).

### Class

See [Widget Properties](Widget+Properties).

### Style

See [Widget Properties](Widget+Properties).

## Events

### On click

This property specifies the microflow that is triggered when the end user clicks on this trigger.

### On click settings

The on click settings specify what parameters will be passed to the microflow, whether to show a progress bar or not, and more.

See [Starting Microflows](Starting+Microflows).

## Visibility Properties

### Visible

A microflow trigger can be shown or hidden based on certain conditions. See [Conditions](Conditions).

## Related Articles

*   [Data View](Data+View)
*   [Microflows](Microflows)
*   [How To: Configure a microflow trigger](https://world.mendix.com/display/howto25/Configure+a+microflow+trigger)