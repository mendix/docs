---
title: "Set Up Error Handling"
url: /howto8/logic-business-rules/set-up-error-handling/
weight: 8
#To update screenshots of these microflows in , use the Microflow Screenshots app.
---

## Introduction

When working with microflows, it is important to realize that there are always transactions. These transactions help in achieving the correct result, and in case something goes wrong, they also help us to keep all the information in our application consistent. 

This how-to teaches you how to do the following:

* Set up the various error handling components

## Transactions

### Transactions Keep Your Data Consistent

Everything that happens in the platform happens in a transaction. What is more, unless otherwise specified, everything is executed, or nothing is executed. Accordingly, if you don't specify any error handling and the microflow you are trying to execute gives you an error, nothing will be executed. That means that all the objects you created or changed will be reverted, you will not get the text feedback, and the platform will not show the new page. Either every single step in the microflow is successfully executed, or nothing is executed. That is the only way to keep processes and data consistent. 

### Transactions Keep the Changes Isolated

While updating or creating your objects, you do not want users to see temporary information or empty records because a microflow hasn't finished executing yet. 

To ensure that every user or process can only see persisted data, all the data changed in a transaction is only available within that specific transaction. None of the changes made inside that microflow will be available outside the microflow, not even to the user that initiated the microflow. The information will only be available to the whole application once the microflow has successfully completed all the actions.

### Transactions Prevent Two processes from Using the Same Object at the Same Time

When an object is updated, the platform will place a lock on that object for the duration of the transaction. That means that while the transaction is running, no other transactions are allowed to read or write in that same object. As soon as the transaction has finished, the lock will be released automatically and any waiting processes will continue normally.

Please note that this isn't the same as preventing two users from editing the same object. It is still possible for two users to open the same object and change it 1 milliseconds after each other. The latest change will still be applied.

## Error Handling Components

| Type | Image | Description |
| --- | --- | --- |
| **Error Handling – Custom With Rollback** | {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580964.png" class="no-border" >}} | Everything that happened up to the error will be rolled back in the database, and a new transaction will be initiated. It will neither change nor roll back the state of the objects that are still in memory. As a result of that, recommitting the same objects will not cause a change as the runtime no longer knows which members are changed or whether the object was created or not. If you want to change the data in the database again you should copy the changes into another/new version of the same object.|
| **Error Handling – Custom Without Rollback** | {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580965.png" class="no-border" >}} | Any action taken inside the microflow can be reverted, but everything that happened before the error will be kept. The microflow will continue over the custom error handler flow. The transaction in the database will not be rolled back, meaning that all successfully committed changes in objects within activities of the microflow preceding the current failing activity will stay in the database.|
| **Continue** | {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580952.png" class="no-border" >}} | Any action taken inside the microflow can be reverted, but everything that happened before the error will be kept. The microflow will continue as if nothing happened. Avoid using this option – you should only use this in the more complicated combinations of multiple error handlers. You want to make sure that you at least log the error message. If it breaks, you need to know about it.|
| **End Event** | {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580962.png" class="no-border" >}} | This is the end of the microflow transaction and all actions are executed at the end of the main microflow.|
| **Error End Event** | {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580963.png" class="no-border" >}} | This re-throws the error to all parent microflows after executing the custom activities. For more details, see [Error Event](/refguide8/error-event/) in the *Studio Pro Guide*.|

## Error Handling Transactions

There are many different combinations of error handling and transactions that you can configure, and below you will find the descriptions of several combinations. These sections should present some of the possibilities and help you understand how the different configurations behave.

### Default Error Handling

With default error handling, there is always a transaction running. But since there is no custom error handling specified, the platform will create one transaction for all the actions executed in the microflow. All subflows will be executed in the same transaction. The changed order and customer information is only available inside the transaction until the microflow transaction has completed.

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580961.png" class="no-border" >}}

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580951.png" class="no-border" >}}

| Order        |          |
| ------------ | -------- |
| ID           | 1234     |
| Date         | 1/1/2018 |

| Customer |      |
| -------- | ---- |
| ID       | 1234 |
| Status   | Gold |

### Error Handling – Custom with Rollback

Any submicroflow initiated with error handling set to **Custom with Rollback** will NOT initiate a new transaction. The original transaction will be re-used in the subflow. If an error occurs, the transaction will be completely reverted and a new transaction will be initiated so the custom error flow can continue using that new transaction.

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580956.png" class="no-border" >}}

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580950.png" class="no-border" >}}

**For 1:**

| Order        |        |
| ------------ | ------ |
| ...          |        |
| ...          |        |

| Customer     |        |
| ------------ | ------ |
| ID           |  1234  |
| Status       |  Silver|

**For 2:**

| Order        |          |
| ------------ | -------- |
| ID           | 1234     |
| Date         | 1/1/2018 |

| Customer     |          |
| ------------ | -------- |
| ID           | 1234     |
| Status       | Gold     |

**For 3:**

| Order        |          |
| ------------ | -------- |
| ID           | 1234     |
| Date         | 1/1/2018 |

| Customer     |        |
| ------------ | ------ |
| ID           | 1234   |
| Status       | Silver |

Because you are switching transactions, merging back to the original process is not recommended, as this will result in inconsistent data. If you use error handling with rollback in a subflow, you should make sure that all parent microflows are configured to use error handling continuously. It is preferable that you re-throw the exception after running your custom actions.

### Error Handling – Custom without Rollback

A submicroflow with error handling set to **Custom without Rollback** will always create a sub-transaction. All actions within the parent microflow will be persisted, and what happens inside the sub-microflow is determined by the sub-microflow. If no custom error handling is specified in the submicroflow, only the changes in the submicroflow can be reverted in case of an error. 

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580960.png" class="no-border" >}}

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580949.png" class="no-border" >}}

**For 1:**

| Order        |        |
| ------------ | ------ |
| ...          |        |
| ...          |        |

| Customer     |        |
| ------------ | ------ |
| ID           |  1234  |
| Status       |  Silver|

**For 2:**

| Order        |          |
| ------------ | -------- |
| ID           | 1234     |
| Date         | 1/1/2018 |

| Customer     |          |
| ------------ | -------- |
| ID           | 1234     |
| Status       | Gold     |

**For 3:**

| Order        |        |
| ------------ | ------ |
| ...          |        |
| ...          |        |

| Customer     |        |
| ------------ | ------ |
| ID           | 1234   |
| Status       | Silver |

## Combinations of Different Types of Error Handling

Most of the time you will be using a single activity with custom error handling. However, if you are developing more complicated processes where you are sending data outside of the application, it is important to realize what happens when an error occurs later in the process. For example, you don't want to send out notifications about a status change if an error occurs and therefore reverts the change.

Especially when interacting with other systems, you need to think about how you want to process the errors. The best solution depends on what you want to do: continue, skip/revert the record you are working on, or keep the changes you have made so far but stop the process. All of these options can be done as long as you know what you want to achieve. The instructions below will show you a couple of examples of how you can use different combinations of the error handling options. 

### Rollback in the Parent Flow, Rollback in the Subflow

| Color | Description |
| --- | --- |
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/orange.png" class="no-border" >}} | *Initial transaction* – this transaction is initiated when the microflow started. Custom error handling with rollback does not initiate any transactions. Therefore, the microflow is executed, but all the actions in both the parent and the subflow will be reverted. None of the changes made anywhere in this transaction will be applied. |
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/blue.png" class="no-border" >}} | *Transaction initiated by custom with rollback activity* – after catching the exception, a new transaction is initiated to execute the remainder of the microflow activities. |

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580948.png" class="no-border" >}}

### Rollback in the Parent Flow, Continuing in the Subflow

| Color | Description |
| --- | --- |
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/orange.png" class="no-border" >}} | *Initial transaction* – this transaction is initiated when the microflow starts. This transaction will be completely reverted, because the subflow re-throws the exception. None of the changes made during this transaction will be persisted. (If the subflow wasn't rethrowing the exception, all changes except 'SendEmail' would have been persisted in the database.) |
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/blue.png" class="no-border" >}} | *Transaction initiated by custom with rollback activity* – after catching the exception, a new transaction is initiated to execute the remainder of the microflow activities. |
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/green.png" class="no-border" >}} | *Transaction initiated by subflow* – at the start of the subflow, a new transaction is initiated. Any changes made in this transaction will be reverted because the activities in the 'SendEmail' subflow use default error handling. |

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580945.png" class="no-border" >}}

### Continuing in the Parent Flow, Rollback in the Subflow

| Color | Description |
| --- | --- |
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/orange.png" class="no-border" >}} | *Initial transaction* – this transaction is initiated when the microflow starts. This transaction will complete successfully and any changes made during this transaction will be persisted. |
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/blue.png" class="no-border" >}} | *Transaction initiated by subflow* – at the start of the subflow, a new transaction is initiated. All changes in this transaction will be reverted because of the custom error handler "with rollback." As a result, the change on the customer will not be applied. |
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/green.png" class="no-border" >}} | *Transaction initiated after the exception was caught by the error handler* – when this transaction is initiated, after executing some actions, it will re-throw the original exception. These changes will be persisted because of the error handling on the initial sub-microflow call. |

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580947.png" class="no-border" >}}

### Continuing in the Parent Flow, Continuing in the Subflow

| Color | Description |
| --- | --- |
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/orange.png" class="no-border" >}} | *Initial transaction* – nothing will be reverted. The only difference compared to successful execution is that no email will be sent, and the process will finish using the error flow instead of the normal process flow.
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/blue.png" class="no-border" >}}  | *Transaction initiated by subflow* – at the start of the subflow, a new transaction is initiated. All the changes in this transaction will be kept, because the 'SendEmail' subflow is configured to continue without rollback. Even though the exception is re-thrown, the initial microflow call is configured for custom without rollback; therefore, none of the changes will be reverted. The process will just take the error flow instead of the default flow.
| {{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/green.png" class="no-border" >}} | *Transaction initiated by subflow* – at the start of the subflow, a new transaction is initiated. Any changes made in this transaction will be reverted, because the activities in the 'SendEmail' subflow use default error handling.

{{< figure src="/attachments/howto8/logic-business-rules/set-up-error-handling/18580946.png" class="no-border" >}}

## Best Practices

Consider the following best practices for error handling:

* Always use a log activity to print the error message and stack trace
* Never use the continue option, since that doesn't give you the option to print any info (the platform will just ignore the error)
* Always add custom error handling on integration or email activities
* Don’t over-do it – you can specify a lot of complicated error handling combinations, but this makes it more difficult (and slower) for the platform to evaluate the microflow, and it also makes it more difficult to predict the exact behavior in case of an exception

## Read More

* [Define Access Rules Using XPath](/howto8/logic-business-rules/define-access-rules-using-xpath/)
* [Create a Custom Save Button](/howto8/logic-business-rules/create-a-custom-save-button/)
* [Extend Your Application with Custom Java](/howto8/logic-business-rules/extending-your-application-with-custom-java/)
* [Work with Lists in a Microflow](/howto8/logic-business-rules/working-with-lists-in-a-microflow/)
* [Optimize Retrieve Activities](/howto8/logic-business-rules/optimizing-retrieve-activities/)
* [Optimize Microflow Aggregates](/howto8/logic-business-rules/optimizing-microflow-aggregates/)
* [Extract and Use Submicroflows](/howto8/logic-business-rules/extract-and-use-sub-microflows/)
