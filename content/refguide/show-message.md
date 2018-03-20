---
title: "Show Message"
parent: "client-activities"
---


With the show-message action you can show a blocking or non-blocking message to the user.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Type

Type defines the color scheme and icon of the message.

There are three message options:

* Information
* Warning
* Error 

_Default value:_ Information

### Template

Template defines the text of the message. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera.

### Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [microflow expressions](expressions) resulting in a string.

{{% alert type="success" %}}

With parameters you can customize your message with data specific to the situation. For example, the message "An e-mail has been sent to customer {1}." with parameter `$customer/FullName` will show the full name of the customer to whom an e-mail has been sent.

{{% /alert %}}

### Blocking

Blocking defines whether the message appears with a hover on top of the existing form(s).

| Option | Description |
| --- | --- |
| Yes | The message appears in a pop-up in the center of the screen on a blocking overlay, rendering the background inaccessible until the pop-up is closed. |
| No | The message appears in a pop-up in the center of the screen but does not block the rest of the window, allowing the user to continue what they were doing with the pop-up open. |

_Default value:_ Yes
