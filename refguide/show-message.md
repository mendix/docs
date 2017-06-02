---
title: "Show Message"
space: "Mendix 7 Reference Guide"
parent: "client-activities"
---


With the show-message action you can show a blocking or non-blocking message to the user.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Action Properties

### Type

Type defines the color scheme and icon of the message.

| Option | Description |
| --- | --- |
| Information | Message is shown with a blue frame ([]) and an information icon. |
| Warning | Message is shown with a yellow frame ([]) and a warning icon. |
| Error | Message is shown with a red frame ([]) and an error icon. |

_Default value:_ Information

### Template

Template defines the text of the message. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera.

### Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [microflow expressions](microflow-expressions) resulting in a string.

<div class="alert alert-success">{% markdown %}

With parameters you can customize your message with data specific to the situation. For example, the message "An e-mail has been sent to customer {1}." with parameter `$customer/FullName` will show the full name of the customer to whom an e-mail has been sent.

{% endmarkdown %}</div>

### Blocking

Blocking defines whether the message appears with a hover on top of the existing form(s).

| Option | Description |
| --- | --- |
| Yes | The message appears in a pop-up in the center of the screen on a blocking overlay, rendering the background inaccessible until the pop-up is closed. |
| No | The message appears in a pop-up in the center of the screen but does not block the rest of the window, allowing the user to continue what they were doing with the pop-up open. |

_Default value:_ Yes
