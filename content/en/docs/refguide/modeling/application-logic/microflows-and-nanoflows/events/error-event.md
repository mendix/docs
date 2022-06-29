---
title: "Error Event"
url: /refguide/error-event/
weight: 3
tags: ["studio pro", "error event", "event"]
---

{{% alert color="info" %}}
This event can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

An error event defines where a microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not. This event throws the error again, so the caller of the microflow can catch them. You can control whether all database actions within the current transaction will be rolled back.

For more information on error handlers and their settings in microflows, see the [Error Handlers](#errorhandlers) subsection of [Handling Errors in Microflows](#errors-in-microflows), below. More information on error handlers and their settings in nanoflows is in the [Error Handlers](#errorhandlers-nano) subsection of [Handling Errors in Nanoflows](#errors-in-nanoflows), below.

Link an error event and an activity which has an error handlers set on it with a [sequence flow](/refguide/sequence-flow/).

{{% alert color="warning" %}}
You can only use an error event if an error is in scope: Studio Pro does not accept it if you connect the normal execution flow to an error event, because there would not be an error to pass back to the caller.
{{% /alert %}}

In this example, an error occurs while committing an object to the database. It is caught, and the flow continues to the error event where the error is passed back to the caller of the microflow. So you can implement your error handling on multiple levels.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/error-event/error-event.png" >}}

{{% alert color="info" %}}
When adding an error event, you need to add an [error handler](#errorhandlers) for an activity before the error event, and select **Set as error handler** for the sequence flow.
{{% /alert %}}

## 2 Handling Errors in Microflows{#errors-in-microflows}

When an error occurs in a microflow, all changes that have been made to objects are rolled back and the microflow is aborted. Optionally, you can [handle errors](/howto/logic-business-rules/set-up-error-handling/) in the microflow itself by configuring different error handling settings. You can even inspect the details of the error by looking at the predefined objects `$latestError` and `$latestSoapFault`.

### 2.1 Error Handlers {#errorhandlers}

An error handler can be set on a microflow activity, decision, or loop.

On an activity or decision, you have three options:

*   **Rollback** (default)
*   **Custom with rollback**
*   **Custom without rollback**

For the latter two options you can draw an additional flow from the block and mark this flow as the error handler flow. When selecting 'Custom with rollback' it will trigger this path when the error occurs and still rollback your objects afterwards. The 'Custom without rollback' option does not rollback the objects. After you selected a flow as the error handler it will show this as in the following image.

Unlike the [Rollback object](/refguide/rollback-object/) action, the rollback option of an error event does not take into account whether an object has been committed. This means that even committed objects will be rolled back to the value they had when the microflow (or the microflow it was called from) began. The rollback also applies to any changes you made in [Event Handlers](/refguide/event-handlers/) such as *after commit*.

The **Custom without rollback** option is only invoked when the action itself causes an error event, meaning you will still have access to any database objects you created or modified before the action which caused the error handler event. If you want to keep changes to objects of a persistable entity, you still need to commit them explicitly after a **Custom without rollback** error if they weren't committed before the error occurred.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/error-event/custom-without-rollback-microflows.png" >}}

On a loop you get two options:

*   Rollback (default)
*   Continue

The continue option means that when an error occurs, the loop will simply continue to the next iteration. It will show as a continue icon on the exit flow of the loop.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/error-event/error-event-loop.png" >}}

### 2.2 Inspecting Errors

When an error occurs inside a microflow, under the hood a Java exception is raised that contains information about the error that occurred. Inside a custom error handler (as in, after an error handling flow), you can inspect the type of this Java exception as well as several other properties. Every microflow contains two predefined error objects, `$latestError` and `$latestSoapFault`. `$latestError` is an object of entity System.Error, while `$latestSoapFault` is an object of entity System.SoapFault, which is a specialization of System.Error.

In a custom error handler that is executed after an error occurs, `$latestError` is set to an object containing information about the error that occurred. If the error is a SOAP fault (an error that occurs as a result of a web service call), `$latestSoapFault` is set to an object that contains more specific information about the SOAP fault. Otherwise, `$latestSoapFault` is `empty`.

{{% alert color="info" %}}
You can determine whether an error was a SOAP fault by checking `$latestSoapFault` for `empty`.
{{% /alert %}}

The following table shows the attributes of System.Error and System.SoapFault.

| Entity | Attribute | Type | Description |
| --- | --- | --- | --- |
| System.Error | ErrorType | String | The Java exception type of the error that occurred. |
| System.Error | Message | String | The message of the Java exception. |
| System.Error | Stacktrace | String | The stacktrace of the Java exception. |
| System.SoapFault | Code | String | The Code element of the SOAP fault. |
| System.SoapFault | Reason | String | The Reason element of the SOAP fault. |
| System.SoapFault | Node | String | The Node element of the SOAP fault. |
| System.SoapFault | Role | String | The Role element of the SOAP fault. |
| System.SoapFault | Detail | String | The Detail element of the SOAP fault. |

Click [here](http://www.w3.org/TR/soap12-part1/#soapfault) for more information on SOAP faults.

{{% alert color="warning" %}}
In microflows that apply entity access, it is not possible to inspect the attributes of error objects for security reasons. You can pass the error object to a sub-microflow that does not apply entity access and inspect the attributes there.
{{% /alert %}}

## 3 Handling Errors in Nanoflows{#errors-in-nanoflows}

When an error occurs in a nanoflow, the changes that were made to objects are not rolled back and the nanoflow is aborted. Optionally, you can handle errors in the nanoflow itself by configuring an error handler. You can inspect the details of the error by looking at the `$latestError` predefined variable.

### 3.1 Error Handlers {#errorhandlers-nano}

Error handlers are supported on all nanoflow elements except for gateways and loops. There are two error handler options:

*  **Abort** (which is the default)
*  **Custom without rollback**

With the **Custom without rollback** option, you can draw an additional flow from the block and then mark this flow as the error handler flow. The **Custom without rollback** option does not roll back the objects. After you select a flow as the error handler it will appear this way:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/error-event/custom-without-rollback-nanoflows.png" alt="selected error handler" >}}

### 3.2 Error Inspection

In a custom error handler executed after an error occurs, the `$latestError` variable is set to the message of the error information. The `$latestError` variable type is `String`, unlike in [microflows](/refguide/microflows/) where errors' type is the `System.Error` entity.

The `$latestSoapFault` variable is not available in nanoflows.
