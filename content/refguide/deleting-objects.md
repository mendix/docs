---
title: "Delete Object(s)"
parent: "object-activities"
menu_order: 5
tags: ["studio pro"]
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

Delete object can be used to delete one or more objects.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 Object or List

The name of the object or list of objects that will be deleted. If you choose a list, all objects in that list will be deleted.

## 3 Action Properties

### 3.1 Refresh in Client

If the microflow is called from the client, the deletion is not reflected in the client if **Refresh in client** is set to *No*. If set to *Yes*, the deletion is reflected across the client, which includes reloading relevant [data sources](data-sources).

{{% alert type="info" %}}
Deletions are always reflected in the client. [Data sources](data-sources) are only reloaded if **Refresh in client** is set to *Yes*.
{{% /alert %}}

{{% alert type="warning" %}}
When inside a microflow that is called from an offline, native, or hybrid app, the **Refresh in client** option is ignored and functions as if it was set to **No**. For more information, see the [Microflows](offline-first#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

Default: *No*

## 4 What Happens During a Delete?

Clicking a Delete button or triggering a delete activity will initiate the delete events. In addition, when an object is removed through the configured delete behavior, it will execute all before and after events.

* Events: all before and after events are executed, and if any before-delete event returns false, an exception can be thrown
	* If an exception occurs during an event, all the applied changes are reverted with the default error handling behavior
	* Changes made prior to the rollback will be kept 
* Database: if an object has the state **Instantiated**, there will be no database communication required
	* For any other status, a delete query is executed in the database
* Result: the object will be removed from memory and if applicable from the database
	* All delete behavior for the associations is validated, and any associated objects are removed as well

![](attachments/object-activities/18582171.png)
