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

| Option | Icon | Description |
| --- | --- | --- |
| Information | ![](attachments/819203/918106.gif) | Message is shown with a blue frame ([]) and an information icon. |
| Warning | ![](attachments/819203/918105.gif) | Message is shown with a yellow frame ([]) and a warning icon. |
| Error | ![](attachments/819203/918107.gif) | Message is shown with a red frame ([]) and an error icon. |

_Default value:_ Information

### Template

Template defines the text of the message. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera.

### Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [microflow expressions](microflow-expressions) resulting in a string.

{{% alert type="success" %}}

With parameters you can customize your message with data specific to the situation. For example, the message "An e-mail has been sent to customer {1}." with parameter `$customer/FullName` will show the full name of the customer to whom an e-mail has been sent.

{{% /alert %}}

### Blocking

Blocking defines whether the message appears with a hover on top of the existing form(s).

| Option | Description |
| --- | --- |
| True | The message appears in the center of the screen and you have to click it away before continuing in the application. |
| False | The message appears in the bottom left corner and you can continue working in the application. |

_Default value:_ True
