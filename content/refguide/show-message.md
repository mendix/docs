---
title: "Show Message"
parent: "client-activities"
menu_order: 4
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

{{% alert type="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](offline-first#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 1 Introduction

With the show-message action you can show a blocking or non-blocking message to the user.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Type

Type defines the color scheme and icon of the message.

There are three message options:

* Information *(default)* 
* Warning
* Error 

### 2.2 Template

Template defines the text of the message. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera.

### 2.3 Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [expressions](expressions) resulting in a string.

{{% alert type="info" %}}

With parameters you can customize your message with data specific to the situation. For example, the message "An e-mail has been sent to customer {1}." with parameter `$customer/FullName` will show the full name of the customer to whom an e-mail has been sent.

{{% /alert %}}

### 2.4 Blocking

Blocking defines whether the message appears with a hover on top of the existing page(s).

| Option | Description |
| --- | --- |
| Yes *(default)* | The message appears in a pop-up in the center of the screen on a blocking overlay, rendering the background inaccessible until the pop-up is closed. |
| No | The message appears in a pop-up in the center of the screen but does not block the rest of the window, allowing the user to continue what they were doing with the pop-up open. |
