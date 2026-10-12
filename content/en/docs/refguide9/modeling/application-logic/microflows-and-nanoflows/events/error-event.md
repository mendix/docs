---
title: "Error Event"
url: /refguide9/error-event/
weight: 3
---

{{% alert color="info" %}}
This event can only be used in **Microflows**.
{{% /alert %}}

## Introduction

An error event defines where a microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not. This event throws the error again, so the caller of the microflow can catch them. You can control whether all database actions within the current transaction will be rolled back using error handling settings (for more information, see [Error Handling in Microflows](/refguide9/error-handling-in-microflows/)).

{{% alert color="warning" %}}
You can only use an error event if an error is in scope: Studio Pro does not accept it if you connect the normal execution flow to an error event, because there would not be an error to pass back to the caller.
{{% /alert %}}

In this example, an error occurs while committing an object to the database. It is caught, and the flow continues to the error event where the error is passed back to the caller of the microflow. So you can implement your error handling on multiple levels.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/events/error-event/error-event.png" class="no-border" >}}

{{% alert color="info" %}}
When adding an error event, you need to add an [error handler](/refguide9/error-handling-in-microflows/#errorhandlers) for an activity before the error event. Link an error event and an activity which has an error handlers set on it with a [sequence flow](/refguide9/sequence-flow/) and select **Set as error handler** for the sequence flow.
{{% /alert %}}

## Read More

* [Error Handling in Microflows](/refguide9/error-handling-in-microflows/)
* [Error Handling in Nanoflows](/refguide9/error-handling-in-nanoflows/)
