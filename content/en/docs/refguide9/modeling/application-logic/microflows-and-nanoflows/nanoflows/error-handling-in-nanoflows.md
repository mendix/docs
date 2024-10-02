---
title: "Error Handling in Nanoflows"
url: /refguide9/error-handling-in-nanoflows/
weight: 30
---

## Introduction

When an error occurs in a nanoflow, the changes that were made to objects are not rolled back and the nanoflow is aborted. Optionally, you can handle errors in the nanoflow itself by configuring an error handler. You can inspect the details of the error by looking at the `$latestError` predefined variable.

## Error Handlers {#errorhandlers-nano}

Error handlers are supported on all nanoflow elements except for gateways and loops. There are two error handler options:

* **Abort** (which is the default)
* **Custom without rollback**

With the **Custom without rollback** option, you can draw an additional flow from the supported nanoflow elements (activities, decisions, etc.) and then mark this flow as the error handler flow. The **Custom without rollback** option does not roll back the objects. After you select a flow as the error handler, it will appear this way:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/events/error-event/custom-without-rollback-nanoflows.png" alt="selected error handler" class="no-border" >}}

## Error Inspection

In a custom error handler executed after an error occurs, the `$latestError` variable is set to show error message. The `$latestError` variable type is **String**, unlike in [microflows](/refguide9/microflows/) where `$latestError` is an object of entity type **System.Error**.

The `$latestSoapFault` variable is not available in nanoflows.

## Read More

* [Error Handling in Microflows](/refguide9/error-handling-in-microflows/)
