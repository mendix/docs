---
title: "Error Handling in Microflows"
url: /refguide/error-handling-in-microflows/
weight: 4
tags: ["error", "error handling", "rollback", "microflow", "logic"]
aliases:
    - /howto/logic-business-rules/set-up-error-handling.html
    - /howto/logic-business-rules/set-up-error-handling
#To update screenshots of these microflows in the Studios, use the Microflow Screenshots app.
---

## 1 Introduction

When working with microflows, it is important to realize that there are always transactions. These transactions help in achieving the correct result. They also keep all the information in our application consistent in case something goes wrong. 

This document tells you how errors can be handled in microflows, how error handling transactions work, and how different error handling options can be combined. It also provides information on how you can inspect errors using predefined error objects. 

## 2 Transactions

### 2.1 Transactions Keep Your Data Consistent

Everything that happens in the Mendix Runtime happens in a transaction. What is more, unless otherwise specified, everything is executed or nothing is executed. Accordingly, if you do not specify any error handling and the microflow you are trying to execute gives you an error, nothing will be executed. This means that all the objects you created or changed will be reverted, you will not get the text feedback, and the platform will not show the new page. Either every single step in the microflow is successfully executed or nothing is executed. That is the only way to keep processes and data consistent. 

### 2.2 Transactions Keep the Changes Isolated

While updating or creating your objects, you do not want users to see temporary information or empty records because a microflow has not finished executing yet. 

To ensure that every user or process can only see persisted data, all the data changed in a transaction is only available within that specific transaction. None of the changes made inside that microflow will be available outside the microflow, not even to the user that initiated the microflow. The information will only be available to the whole application once the microflow has successfully completed all the actions.

### 2.3 Transactions Prevent Two Processes from Using the Same Object at the Same Time

When an object is updated, the Mendix Runtime will place a lock on that object for the duration of the transaction. This means that while the transaction is running, no other transactions (even in the same session) are allowed to read or write that object. As soon as the transaction is finished, the lock will be released automatically and any waiting processes will continue normally.

{{% alert color="info" %}}
Note that this is not the same as preventing two users from editing the same object. It is still possible for two users to open the same object and change it 1 millisecond after each other. The latest change will still be applied.
{{% /alert %}}

## 3 Error Handling Options {#errorhandlers}

When an error occurs in a microflow, all changes that have been made to objects are rolled back and the microflow is aborted. Optionally, you can handle errors in the microflow itself by configuring different error handling settings. You can even inspect the details of the error by looking at the predefined objects `$latestError` and `$latestSoapFault`. The following table presents different options for custom error handling.

{{% alert color="info" %}}
If you specify a custom error handling flow, you should end it with an [end event](/refguide/end-event/). If you end the microflow with an [error event](/refguide/error-event/), the error will then be handled in the place the microflow was called from.
{{% /alert %}}

| Type | Image | Description |
| --- | --- | --- |
| **Error handling – Custom with rollback** | {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/custom-with-rollback-option.png" width="700px">}} | Everything that happened up to the error will be rolled back in the database, and a new transaction will be initiated. It will neither change nor roll back the state of the objects that are still in memory. As a result of that, recommitting the same objects will not cause a change as the Mendix Runtime no longer knows which members are changed or whether the object was created or not. If you want to change the data in the database again, you should copy the changes into another/new version of the same object.|
| **Error handling – Custom without rollback** | {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/custom-without-rollback-option.png" >}} | Any action taken inside the microflow can be reverted, but everything that happened before the error will be kept. The microflow will continue over the custom error handler flow. The transaction in the database will not be rolled back, meaning that all successfully committed changes in objects within activities of the microflow preceding the current failing activity will stay in the database.|
| **Continue** | {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/continue-option.png" >}} | Any action taken inside the microflow can be reverted, but everything that happened before the error will be kept. The microflow will continue as if nothing happened.|

{{% alert color="warning" %}}
Normally you should avoid using the **Continue** option. You should only use this option in the more complicated combinations of multiple error handlers. When this option is used, make sure that you at least log the error message. By doing so, you will know what is going wrong when the microflow breaks.
{{% /alert %}}

An error handler can be set on a microflow activity, decision, or loop.

### 3.1 Error Handling on an Activity or a Decision

On an activity or decision, you have three options:

* **Rollback** (default)
* **Custom with rollback**
* **Custom without rollback**

For **Custom with rollback** and **Custom without rollback**, you can draw an additional flow from the microflow elements (activities or decisions) and mark this flow as the error handler flow. When selecting **Custom with rollback**, it will trigger this path when the error occurs and still roll back your objects afterwards. The **Custom without rollback** option does not roll back the objects. After you selected a flow as the error handler, it will show this as in the following image:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/error-event/custom-without-rollback-microflows.png" >}}

Unlike the [Rollback object](/refguide/rollback-object/) action, the **Rollback** option of an error event does not take into account whether an object has been committed. This means that even committed objects will be rolled back to the value they had when the microflow (or the microflow it was called from) began. The rollback also applies to any changes you made in [Event Handlers](/refguide/event-handlers/) such as **After Commit**.

The **Custom without rollback** option is only invoked when the action itself causes an error event, meaning you will still have access to any database objects you created or modified before the action which caused the error handler event. If you want to keep changes to objects of a persistable entity, you still need to commit them explicitly after a **Custom without rollback** error if they were not committed before the error occurred.

### 3.2 Error Handling on a Loop

On a loop, you get two options:

* **Rollback** (default)
* **Continue**

The **Continue** option means that when an error occurs, the loop will simply continue to the next iteration. It will show as a continue icon on the exit flow of the loop.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/error-event/error-event-loop.png" >}}

## 4 Error Handling Transactions

There are many different combinations of error handling and transactions that you can configure. The sections below present some possible combinations and help you understand how different configurations behave.

### 4.1 Default Error Handling

With default error handling, there is always a transaction running. But since there is no custom error handling specified, the Mendix Runtime will create one transaction for all the actions executed in the microflow. All sub-microflows will be executed in the same transaction. 

Take the following microflow as an example. The changed order and customer information (see the table below) is only available inside the transaction until the microflow transaction has completed.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/default-error-handling-microflow.png" width="200px">}}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/default-error-handling-diagram.png" width="550px">}}

The changed **Order** and **Customer** information:

| Order | | | Customer | |
| -- | -- | -- | -- | -- |
| ID | 1234 | | ID | 1234 |
| Date | 1/1/2018 | | Status | Gold |

### 4.2 Error Handling – Custom with Rollback

Any sub-microflow initiated with error handling set to **Custom with rollback** will NOT initiate a new transaction. The original transaction will be re-used in the sub-microflow. If an error occurs, the transaction will be completely reverted and a new transaction will be initiated so the custom error flow can continue using that new transaction. See the following example:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/custom-with-rollback-microflow.png" width="400px">}}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/custom-with-rollback-diagram.png" width="550px">}}

At status 1 in the above example:

| Order | | | Customer | |
| -- | -- | -- | -- | -- |
| ... | ... | | ID | 1234 |
| ... | ... | | Status | Silver |

At status 2 in the above example:

| Order | | | Customer | |
| -- | -- | -- | -- | -- |
| ID | 1234 | | ID | 1234 |
| Date | 1/1/2018 | | Status | Gold |

At status 3 in the above example:

| Order | | | Customer | |
| -- | -- | -- | -- | -- |
| ... | ... | | ID | 1234 |
| ... | ... | | Status | Silver |

Because you are switching transactions, merging back to the original process is not recommended, as this will result in inconsistent data. If you use error handling with rollback in a sub-microflow, you should make sure that all parent microflows are configured to use error handling continuously. It is preferable that you re-throw the exception after running your custom actions.

### 4.3 Error Handling – Custom without Rollback

A sub-microflow with error handling set to **Custom without rollback** will always create a sub-transaction. All actions within the parent microflow are persisted, and what happens inside the sub-microflow is determined by how the error is handled. If no custom error handling is specified inside the sub-microflow, the changes in the sub-microflow are reverted in case of an error. See the following example:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/custom-without-rollback-microflow.png" width="400px">}}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/custom-without-rollback-diagram.png" width="550px">}}

At status 1 in the above example:

| Order | | | Customer | |
| -- | -- | -- | -- | -- |
| ... | ... | | ID | 1234 |
| ... | ... | | Status | Silver |

At status 2 in the above example:

| Order | | | Customer | |
| -- | -- | -- | -- | -- |
| ID | 1234 | | ID | 1234 |
| Date | 1/1/2018 | | Status | Gold |

At status 3 in the above example:

| Order | | | Customer | |
| -- | -- | -- | -- | -- |
| ID | 1234 | | ID | 1234 |
| Date | 1/1/2018 | | Status | Silver |

## 5 Combinations of Different Types of Error Handling

Most of the time, you will be using a single activity with custom error handling. However, if you are developing more complicated processes where you are sending data outside of the application, it is important to realize what happens when an error occurs later in the process. For example, you do not want to send out notifications about a status change if an error occurs and therefore reverts the change.

Especially when interacting with other systems, you need to think about how you want to process the errors. The best solution depends on what you want to do: continue, skip/revert the record you are working on, or keep the changes you have made so far but stop the process. Any of these options can be done as long as you know what you want to achieve. The instructions below will show you a couple of examples of how you can combine different error handling options. 

### 5.1 Rollback in the Parent Microflow, Rollback in the Sub-Microflow

| Color | Description |
| --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/orange.png" >}} | Initial transaction – this transaction is initiated when the microflow starts. Custom error handling with rollback does not initiate any transactions. Therefore, the microflow is executed, but all the actions in both the parent and the sub-microflow will be reverted. None of the changes made anywhere in this transaction will be applied. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/blue.png" >}} | Transaction initiated by **Custom with rollback** activity – after catching the exception, a new transaction is initiated to execute the remaining microflow activities. |

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/rollback-and-rollback.png" width="550px">}}

### 5.2 Rollback in the Parent Microflow, Continuing in the Sub-Microflow

| Color | Description |
| --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/orange.png" >}} | Initial transaction – this transaction is initiated when the microflow starts. This transaction will be completely reverted because the sub-microflow re-throws the exception. None of the changes made during this transaction are persisted. (If the sub-microflow does not re-throw the exception, all changes except **SendEmail** are persisted in the database.) |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/blue.png" >}} | Transaction initiated by **Custom with rollback** activity – after catching the exception, a new transaction is initiated to execute the remaining microflow activities. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/green.png" >}} | Transaction initiated by sub-microflow – at the start of the sub-microflow, a new transaction is initiated. Any changes made in this transaction will be reverted because the activities in the **SendEmail** sub-microflow use default error handling. |

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/rollback-and-continue.png" width="550px">}}

### 5.3 Continuing in the Parent Microflow, Rollback in the Sub-Microflow

| Color | Description |
| --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/orange.png" >}} | Initial transaction – this transaction is initiated when the microflow starts. This transaction will complete successfully and any changes made during this transaction are persisted. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/blue.png" >}} | Transaction initiated by sub-microflow – at the start of the sub-microflow, a new transaction is initiated. All changes in this transaction will be reverted because of the custom error handler with rollback. As a result, the change on the customer will not be applied. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/green.png" >}} | Transaction initiated after the exception was caught by the error handler – when this transaction is initiated, after executing some actions, it will re-throw the original exception. These changes are persisted because of the error handling on the initial sub-microflow call. |

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/continue-and-rollback.png" width="550px">}}

### 5.4 Continuing in the Parent Microflow, Continuing in the Sub-Microflow

| Color | Description |
| --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/orange.png" >}} | Initial transaction – nothing will be reverted. The only difference compared to successful execution is that no email will be sent, and the process will finish using the error flow instead of the normal process flow.
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/blue.png" >}}  | Transaction initiated by sub-microflow – at the start of the sub-microflow, a new transaction is initiated. All the changes in this transaction will be kept because the **SendEmail** sub-microflow is configured to continue without rollback. Even though the exception is re-thrown, the initial microflow call is configured for custom without rollback; therefore, none of the changes will be reverted. The process will just take the error flow instead of the default flow.
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/green.png" >}} | Transaction initiated by sub-microflow – at the start of the sub-microflow, a new transaction is initiated. Any changes made in this transaction will be reverted because the activities in the **SendEmail** sub-microflow use default error handling.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-handling-in-microflows/continue-and-continue.png" width="550px">}}

## 6 Inspecting Errors

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

## 7 Best Practices

Consider the following best practices for error handling:

* Always use a log activity to print the error message and stack trace.
* Never use the **Continue** option, since that does not give you the option to print any information (the Mendix Runtime will just ignore the error).
* Always add custom error handling on integration or email activities.
* Do not overdo it – you can specify a lot of complicated error handling combinations, but this makes it more difficult (and slower) for the Mendix Runtime to evaluate the microflow, and it also makes it more difficult to predict the exact behavior in case of an exception.

## 8 Read More

* [Optimize Microflow Aggregates](/howto/logic-business-rules/optimizing-microflow-aggregates/)
* [Extract and Use Sub-Microflows](/howto/logic-business-rules/extract-and-use-sub-microflows/)
* [Error Handling in Nanoflows](/refguide/error-handling-in-nanoflows/)