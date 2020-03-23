---
title: "Error Event"
parent: "events"
menu_order: 3
tags: ["studio pro", "error event", "event"]
---

{{% alert type="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

An error event defines where a microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not. This event throws the error again, so the caller of the microflow can catch them. All database actions within the current transaction will be rolled back. For more information on error handlers and their settings, see the [Error Handlers](microflows#errorhandlers) section in *Microflows*. 

Link an error event and an activity which has an error handlers set on it with a [sequence flow](sequence-flow).

{{% alert type="warning" %}}

You can only use an error event if an error is in scope: Studio Pro does not accept it if you connect the normal execution flow to an error event, because there would not be an error to pass back to the caller.

{{% /alert %}}

In this example, an error occurs while committing an object to the database. It is caught, and the flow continues to the error event where the error is passed back to the caller of the microflow. So you can implement your error handling on multiple levels.

![](attachments/events/error-event.png)

{{% alert type="info" %}}

When adding an error event, you need to add an [error handler](microflows#errorhandlers) to an activity before the error event, and select **Set as error handler** for the sequence flow.

{{% /alert %}}