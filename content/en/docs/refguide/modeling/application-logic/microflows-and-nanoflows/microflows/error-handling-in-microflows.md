---
title: "Error Handling in Microflows"
url: /refguide/error-handling-in-microflows/
weight: 4
tags: ["error", "error handling", "rollback", "microflow", "logic"]
aliases:
    - /howto/logic-business-rules/set-up-error-handling.html
    - /howto/logic-business-rules/set-up-error-handling
---

## 1 Introduction

In a [microflow](/refguide/microflows/), microflow elements ([activities](/refguide/activities/), [decisions](/refguide/decisions/), or [loops](/refguide/loop/)) can sometimes fail and produce an error. If you do nothing, Mendix will report the error with a system error message and roll back all the changes. However, you can also change this behavior and handle errors yourself.

This document introduces different error handling options in microflows and explains how they work using simple examples. An example of how combined custom error handling works is also given in [An Example of Combined Error Handling](#example).

This document also presents information on how you can inspect errors using predefined error objects and the best practices for working with error handling in microflows.

## 2 Error Handling Options {#errorhandlers}

There are four error handling options:

* **Rollback** (default)
* **Custom with rollback**
* **Custom without rollback**
* **Continue**

Except for the **Rollback** option, which is the default, the other three are all custom error handling options. For **Custom with rollback** and **Custom without rollback**, you can create an additional flow from the microflow elements (activities or decisions) and mark this flow as an error handling flow. You can end this flow with an [error event](/refguide/error-event/) or an [end event](/refguide/end-event/). Hence, we introduce these two custom error handling options based on what event terminates the error handling flow.

{{% alert color="info" %}}
In the error handling flow, you can include activities that update the database. Custom error handling does not affect newly created objects there, but if you want to update the status of an existing object that was created outside of this flow and that was rolled back because of custom error handling, then an error will occur.

You can also include decisions in the error handling flow based on what you want. It is recommended to put a [Log message activity](/refguide/log-message/) in the error handling flow to log the error and present a custom error message to the end-user.
{{% /alert %}}

It is important to know that when a microflow is started by an end-user (for example, by clicking a button), a savepoint is always created at the very beginning of the microflow. This is the case for **Microflow 1** in all the following examples. Knowing how savepoints are created and function is key to understanding how error handling works.

In the following subsections, we introduce the functionality of each error handling option using simple examples.

### 2.1 Error Handling  - Default

In this example, the error handling in **Microflow 2** is the default: **Rollback**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/default-roll-back.png" width="600px" >}}

When **Microflow 1** starts with a button click, a savepoint is created at the very beginning of **Microflow 1**. When an error occurs in **Microflow 2**,  the default error handling is to roll back all changes to the state of this savepoint (so all changes are reverted), the microflow is aborted, the error is logged, and a system error message is shown to the end-user.

### 2.2 Error Handling - Custom with Rollback

#### 2.2.1 Error Handling Which Ends with an Error Event

In this example, the error handling in **Microflow 2** is set to **Custom with rollback** and the error handling flow ends with an error event.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/with-roll-back-error-event.png" width="600px" >}}

When **Microflow 1** starts with a button click, a savepoint is created at the very beginning of **Microflow 1**. When an error occurs in **Microflow 2**, everything rolls back to the state of this savepoint because the error handling is set to **Custom with rollback**. Hence, changes made in ****Create Order**** and in **Create Customer** are both reverted. The error is logged using a custom error message. After that, the error event throws an error to terminate **Microflow 2**, and **Microflow 1** will terminate because there is no custom error handing there.

#### 2.2.2 Error Handling Which Ends with an End Event

In this example, the error handling in **Microflow 2** is set to **Custom with rollback** and the error handling flow ends with an end event.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/with-roll-back-end-event.png" width="600px" >}}

When **Microflow 1** starts with a button click, a savepoint is created at the very beginning of **Microflow 1**. When an error occurs in **Microflow 2**, everything rolls back to the state of this savepoint because the error handling is set to **Custom with rollback**. Hence, changes made in **Create Order** and in **Create Customer** are both reverted. The error is logged using a custom error message.

### 2.3 Error Handling - Custom without Rollback

#### 2.3.1 Error Handling Which Ends with an Error Event

In this example, the error handling in **Microflow 2** is set to **Custom without rollback** and the error handling flow ends with an error event.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/without-roll-back-error-event.png" width="600px" >}}

When **Microflow 1** starts with a button click, a savepoint is created at the very beginning of **Microflow 1**. Another savepoint is created right before **GenerateError** because the error handling is set to **Custom without rollback**. When an error occurs in **Microflow 2**, changes made in **Create Order** are at this moment still kept because of the savepoint right before **GenerateError**. The error is logged using a custom error message. After that, the error event throws an error to terminate **Microflow 2** and rolls back everything to the state of savepoint which is at the very beginning of **Microflow 1**. Hence, changes made in **Create Customer** and in **Create Order** are both reverted.

{{% alert color="info" %}}
Using custom error handling without rollback and ending the error handling flow with an error event here makes it possible to create a custom log message with details about the **NewOrder** (if you used error handling with rollback, this information would not be available). However, after logging this message, everything will still be rolled back.  
{{% /alert %}}

#### 2.3.2 Error Handling Which Ends with an End Event

In this example, the error handling in **Microflow 2** is set to **Custom without rollback** and the error handling flow ends with an end event.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/without-roll-back-end-event.png" width="600px" >}}

When **Microflow 1** starts with a button click, a savepoint is created at the very beginning of **Microflow 1**. Another savepoint is created right before **GenerateError** because the error handling is set to **Custom without rollback**. When an error occurs in **Microflow 2**, changes made in **Create Order** are kept because of the savepoint right before **GenerateError**. A custom error is logged using a **Log message** activity. **Microflow 1** does not receive the error and continues to its end. Changes made in **Create Customer** are kept.

### 2.4 Error Handling – Continue

The **Continue** option can only be set on a microflow call or on a loop.

In this example, the error handling in **Microflow 2** is set to **Continue**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/continue.png" width="600px" >}}

When **Microflow 1** starts with a button click, a savepoint is created at the very beginning of **Microflow 1**. Another savepoint is created right before **GenerateError** because the error handling is set to **Continue**. When the error in **Microflow 2** occurs, the microflow continues as if nothing happened. Changes made in **Create Customer** and **Create Order** are both kept. No error message is logged and no message is displayed to the end-user.

{{% alert color="warning" %}}
You should be very careful with using the **Continue** option since it can make it very difficult to understand when something goes wrong. Where possible, try to use **Custom without rollback** instead and log the error message.
{{% /alert %}}

## 3 An Example of Combined Error Handling {#example}

In this example, the error handling on the **GenerateError** activity in **Microflow 2** and on the call of **Microflow 2** are both set to **Custom without rollback**. The error handling flow in **Microflow 2** ends with an error event. 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/combination-without-roll-back-error-event.png" width="600px" >}}

There are three savepoints. When **Microflow 1** starts with a button click, a savepoint is created at the very beginning of **Microflow 1**. Another savepoint is created right before the call of **Microflow 2**, and the third savepoint is created right before **GenerateError** - this is because the error handling on the **GenerateError** activity in **Microflow 2** and on the call of **Microflow 2** are both set to **Custom without rollback**.

When an error occurs in **Microflow 2**, changes made in **Create Order** are at this moment saved because of the savepoint right before **GenerateError**. The error is logged using a custom error message. After that, the error event throws an error to terminate **Microflow 2** and rolls back everything inside **Microflow 2** to the state of **savepoint 2**, (at this moment, what was saved in **Create Order** is now rolled back). The custom error handling in **Microflow 1** that applies to the call of **Microflow 2** causes the error handling flow in **Microflow 1** to be followed and terminates **Microflow 1** with an end event. Changes made in **Create Customer** are hence kept.

## 4 Inspecting Errors

When an error occurs inside a microflow, a Java exception is raised that contains information about the error that occurred. Inside a custom error handler (as in, after an error handling flow), you can inspect the type of this Java exception as well as several other properties. Every microflow contains two predefined error objects, `$latestError` and `$latestSoapFault`. `$latestError` is an object of entity **System.Error**, while `$latestSoapFault` is an object of entity **System.SoapFault**, which is a specialization of **System.Error**.

In a custom error handler that is executed after an error occurs, `$latestError` is set to an object containing information about the error that occurred. If the error is a SOAP fault (an error that occurs as a result of a web service call), `$latestSoapFault` is set to an object that contains more specific information about the SOAP fault. Otherwise, `$latestSoapFault` is `empty`.

{{% alert color="info" %}}
You can determine whether an error was a SOAP fault by checking `$latestSoapFault` for `empty`.
{{% /alert %}}

The following table shows the attributes of **System.Error** and **System.SoapFault**.

| Entity | Attribute | Type | Description |
| --- | --- | --- | --- |
| System.Error | ErrorType | String | The Java exception type of the error that occurred. |
| System.Error | Message | String | The message of the Java exception. |
| System.Error | Stacktrace | String | The stacktrace of the Java exception. |
| System.SoapFault | Code | String | The code element of the SOAP fault. |
| System.SoapFault | Reason | String | The reason element of the SOAP fault. |
| System.SoapFault | Node | String | The node element of the SOAP fault. |
| System.SoapFault | Role | String | The role element of the SOAP fault. |
| System.SoapFault | Detail | String | The detail element of the SOAP fault. |

For more information, see [SOAP Fault](http://www.w3.org/TR/soap12-part1/#soapfault).

{{% alert color="warning" %}}
In microflows that apply entity access, it is not possible to inspect the attributes of error objects for security reasons. You can pass the error object to a sub-microflow that does not apply entity access and inspect the attributes there.
{{% /alert %}}

## 5 Best Practices

Consider the following best practices for error handling:

* Always use a log activity to print the error message and stack trace.
* Where possible, avoid using the **Continue** option and use **Custom without rollback** instead.
* Do not overdo it – you can specify a lot of complicated error handling combinations, but this makes it more difficult (and slower) for the Mendix Runtime to evaluate the microflow, and it also makes it more difficult to predict the exact behavior in case of an exception.

## 6 Read More

* [Error Handling in Nanoflows](/refguide/error-handling-in-nanoflows/)
