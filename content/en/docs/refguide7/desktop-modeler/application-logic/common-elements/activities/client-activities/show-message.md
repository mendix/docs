---
title: "Show Message"
url: /refguide7/show-message/
aliases:
    - /refguide7/Show+Message.html
    - /refguide7/Show+Message
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

With the show-message action you can show a blocking or non-blocking message to the user.

{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Type

Type defines the color scheme and icon of the message.

There are three message options:

* Information
* Warning
* Error 

_Default value:_ Information

### 2.2 Template

Template defines the text of the message. The template can contain parameters that are written as a number between braces, for example, {1}. The first parameter has number 1, the second 2 etcetera.

### 2.3 Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [expressions](/refguide7/expressions/) resulting in a string.

{{% alert color="success" %}}

With parameters you can customize your message with data specific to the situation. For example, the message "An e-mail has been sent to customer {1}." with parameter `$customer/FullName` will show the full name of the customer to whom an e-mail has been sent.

{{% /alert %}}

### 2.4 Blocking

Blocking defines whether the message appears with a hover on top of the existing form(s).

| Option | Description |
| --- | --- |
| Yes | The message appears in a pop-up in the center of the screen on a blocking overlay, rendering the background inaccessible until the pop-up is closed. |
| No | The message appears in a pop-up in the center of the screen but does not block the rest of the window, allowing the user to continue what they were doing with the pop-up open. |

_Default value:_ Yes
