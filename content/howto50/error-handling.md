---
title: Error Handling
category: 'Logic & Business Rules'
---

When working with microflows it is important to realize that we always have transactions. These transactions help is in achieving the correct result, and in case something goes wrong they also help us to keep all information in our application consistent.

## Transactions keep your data consistent

Everything that happens in the platform happens in a transaction and, unless specified otherwise, everything is executed or nothing is executed. So if you don't specify any error handling and the microflow you are trying to execute gives an error, nothing will be executed. That means that all objects you create or changed are being reverted, you do net get the text feedback and the platform won't show the new page either. Either every single step in the microflow is successfully executed or nothing. That is the only way to keep a process and the data consistent.

## Transactions keep the changes isolated

While updating or creating your objects you do not want any of the users to see the temporary information. As you can imagine it could give a really weird impression to the other users if they see all temporary information or even empty records because some microflow hasn't finished executing yet. To ensure that every user or process can only see persisted data, all data changed in a transaction is only available within that specific transaction. Non of the changes made inside that microflow will be available outside the microflow, not even to the user that initiated the microflow. Only once the microflow has successfully completed all actions will the information be available to the whole application.

## Transactions prevent two processes from using the same object at the same time

When an object is updated, the platform will place a lock on that object for the duration of the transaction. That means that while the transaction is running, no other transactions are allowed to read or write in that same object. As soon as the transaction has finished, the lock will be released automatically and any waiting processes will continue normally. Please note that this isn't the same as preventing two users from editing the same object. It is still possible for two users to open the same object, and change it 10ms after each other. The the latest change will still be applied.

## Error Handling Components

| Type | Image | Description |
| --- | --- | --- |
| **Error Handling – Custom With Rollback** | ![](attachments/13566084/14385345.png) | Everything that happened up to the error will be reverted, and a new transaction will be initiated. Only the changes executed in the error handler flow will be executed.
| **Error Handling – Custom Without Rollback** | ![](attachments/13566084/14385344.png) | Any action taken inside the microflow can be reverted, but everything that happened before the error will be kept. The microflow will continue over the custom error handler flow.
| **Continue** | ![](attachments/13566084/14385357.png) | Any action taken inside the microflow can be reverted, but everything that happened before the error will be kept. The microflow will continue as if nothing happened. Avoid using this option – you should only use this in the more complicated combinations of multiple error handlers. You want to make sure that you at least log the error message. If it breaks, you need to know about it.
| **End Event** | ![](attachments/13566084/14385347.png) | |
| **Error End Event** | ![](attachments/13566084/14385346.png) | This re-throws the error to all parent microflows after executing the custom activities. The error handling on the activities calling this microflow determine how the transaction is processed further. |

Transactions

There are many different combinations of error handling and transactions we can configure. Below you'll find several If we take a look at all the different combinations of error handling and transactions that we can use. There are many more combinations possible, but this should give a clear indication of some of the possibilities. In order to help you understand how the different configurations will behave.

### Default Error Handling

With default error handling, there is always a transaction running. But since there is no custom error handling specified, the platform will create one transaction for all actions executed in the microflow. All subflows will be executed in the same transaction. The changed Order and Customer information is only available inside the transaction until the microflow transaction has completed.

![](attachments/13566084/14385348.png)

![](attachments/13566084/14385358.png)

### Error Handling - Custom With Rollback

Any sub microflow initiated with error handling set to 'Custom with Rollback', will NOT initiated a new transaction, the original transaction will be re-used in the subflow. Only in case an error occurs, the transaction will be completely reverted and a new transaction will be initiated so the custom error flow can continue using that new transaction.

![](attachments/13566084/14385353.png)

![](attachments/13566084/14385359.png)

![](attachments/13566084/14385354.png)

![](attachments/13566084/14385355.png)

![](attachments/13566084/14385356.png)

Because you are switching transactions it is not recommended to merge back to the original process, this will result in inconsistent data. If you use error handling with rollback in a subflow you should make sure that all parent flows are configured to use error handling continue, and preferable that you re-throw the exception after running your custom actions.

### Error Handling - Custom Without Rollback

A sub microflow with error handling set to 'Custom without Rollback', will always create a sub transaction. All actions within the parent microflow will be persisted, what happens inside the sub microflow is determined by the sub microflow. If no custom error handling is specified in the sub microflow only the changes in the sub microflow can be reverted in case of an error.

![](attachments/13566084/14385349.png) ![](attachments/13566084/14385360.png)

![](attachments/13566084/14385350.png) ![](attachments/13566084/14385351.png) ![](attachments/13566084/14385352.png)

## Combinations of different types of Error Handling

Most of the time you will be using a single activity with custom error handling. However if you are developing more complicated processes where you are sending data outside of the application it is important to realize what happens in case of an error later in the process. For example you don't want to send out notifications about a status change, if an error occurs and therefore reverts the change.

Especially when interacting with other systems you need to think about how you want to process the errors. The best solution depends on the exact desire you have, do you want to continue, skip/revert the record you are working on, keep the changes you have made so far but stop the process. All of this can be done, as long as you know what you want to achieve. The instructions below will show you a couple of examples on how you can use the different combinations of error handling options.

### Rollback in parent flow, Rollback in subflow

| Color | Description |
| --- | --- |
| ![](attachments/13566084/orange.png) | *Initial transaction* – this transaction is initiated when the microflow started. Custom error handling with rollback does not initiate any transactions. Therefore, the microflow is executed, but all the actions in both the parent and the subflow will be reverted. None of the changes made anywhere in this transaction will be applied.
| ![](attachments/13566084/blue.png) | *Transaction initiated by custom with rollback activity* – after catching the exception, a new transaction is initiated to execute the remainder of the microflow activities.

![](attachments/13566084/14385361.png)

### Rollback in parent flow, Continue in subflow

| Color | Description |
| --- | --- |
![](attachments/13566084/orange.png) | _Initial transaction_ – this transaction is initiated when the microflow starts. This transaction will be completely reverted, because the subflow re-throws the exception. None of the changes made during this transaction will be persisted. (If the subflow wasn't rethrowing the exception, all changes except 'SendEmail' would have been persisted in the database.)
![](attachments/13566084/blue.png)   | _Transaction initiated by custom with rollback activity_ – after catching the exception, a new transaction is initiated to execute the remainder of the microflow activities.
![](attachments/13566084/green.png)  | _Transaction initiated by subflow_ – at the start of the subflow, a new transaction is initiated. Any changes made in this transaction will be reverted because the activities in the 'SendEmail' subflow use default error handling.

![](attachments/13566084/14385364.png)

### Continue in parent flow, Rollback in subflow

| Color | Description |
| --- | --- |
| ![](attachments/13566084/orange.png) | _Initial transaction_ – this transaction is initiated when the microflow starts. This transaction will complete successfully and any changes made during this transaction will be persisted. |
| ![](attachments/13566084/blue.png)   | _Transaction initiated by subflow_ – at the start of the subflow, a new transaction is initiated. All changes in this transaction will be reverted because of the custom error handler "with rollback." As a result, the change on the customer will not be applied. |
| ![](attachments/13566084/green.png)  | _Transaction initiated after the exception was caught by the error handler_ – when this transaction is initiated, after executing some actions, it will re-throw the original exception. These changes will be persisted because of the error handling on the initial sub-microflow call. |

![](attachments/13566084/14385362.png)

### Continue in parent flow, Continue in subflow

| Color | Description |
| --- | --- |
| ![](attachments/13566084/orange.png) | _Initial transaction_ – nothing will be reverted. The only difference compared to successful execution is that no e-mail will be sent, and the process will finish using the error flow instead of the normal process flow. |
| ![](attachments/13566084/blue.png)   | _Transaction initiated by subflow_ – at the start of the subflow, a new transaction is initiated. All the changes in this transaction will be kept, because the 'SendEmail' subflow is configured to continue without rollback. Even though the exception is re-thrown, the initial microflow call is configured for custom without rollback; therefore, none of the changes will be reverted. The process will just take the error flow instead of the default flow. |
| ![](attachments/13566084/green.png)  | _Transaction initiated by subflow_ – at the start of the subflow, a new transaction is initiated. Any changes made in this transaction will be reverted, because the activities in the 'SendEmail' subflow use default error handling. |

![](attachments/13566084/14385363.png)

## Best-practices

Always use a log activity to print the error message & stack trace! Never use the continue option, since that doesn't give you the option to print any info. The platform will just ignore the error. Always add custom error handling on integration or email activities Don't over-do it. You could specify a lot of complicated error handling combinations. This makes it much more difficult (and slower) for the platform to evaluate the microflow. And also makes it much more difficult to predict the exact behavior in case of an exception.

## Related articles

- [Defining access rules using XPath](defining-access-rules-using-xpath)
- [Triggering Logic using Microflows](triggering-logic-using-microflows)
- [Creating a Custom Save Button](creating-a-custom-save-button)
- [Extending Your Application with Custom Java](extending-your-application-with-custom-java)
- [Working With Lists in a Microflow](working-with-lists-in-a-microflow)
