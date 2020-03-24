---
title: "Object Activities"
parent: "activities"
menu_order: 10
tags: ["studio pro", "microflow", "object"]
#To update screenshots of these microflows in Studio Pro, use the Microflow Screenshots app project.
---

## 1 Introduction

When working with the Mendix Platform, objects are created, removed, or reverted back to the original. Based on the state of the object and the object events that are specified in the domain model, different actions are taken by the platform to guarantee data consistency. 

## 2 Cast

For more information, see [Cast Object](cast-object).

## 3 Change

For more information, see [Change Object](change-object).

## 4 Commit

When an object is committed through a default Save button, a commit activity, or web services, it will always trigger the commit events. The platform will also evaluate all associated objects. To guarantee data consistency, the platform may also autocommit associated objects.

An autocommit is an automatic commit from the platform, which is done to keep the domain model in sync. If your application ends up having autocommitted objects, then you will have a modeling error. Since an association is also a member of an object, the association will be stored in the database as well. This means that if you create an order line inside an order and the order line is the parent of the association, when you commit the order line, the order will be autocommitted.

{{% alert type="warning" %}}
An autocommit is not the same as an explicit commit!

If a rollback is triggered for any reason (for example, if the user session is terminated by the user closing the browser), then autocommitted objects will be deleted from the database. See [Persistability](/refguide/persistability) for more information about how Mendix handles persistable objects.
{{% /alert %}}

If you end up with autocommitted objects, it is always because of a modeling error. At some point in time, an association was set to a new object, the associated object was committed, and all of its associations were committed as well to keep all the data consistent.

For both explicitly committed and autocommitted objects, the following will occur:

* Events: all before and after events are executed, and if any before-rollback event returns false, an exception can be thrown
	* If an exception occurs during an event, all the applied changes are reverted with the default error handling behavior
	* Changes made prior to the commit will be kept
* Database: there is an insert or update query executed
	* Depending on the object state, the platform will do an insert for objects with the state **Instantiated** and an update for all other states
* Result: an object with the state Instantiated will be inserted into the database, and an object with any other state will be updated

![](attachments/object-activities/18582172.png)

For more information, see [Commit Object(s)](committing-objects).

## 5 Create

Wherever an object is initialized, all the events are always executed. The default **Create** button, a create activity in a microflow, and web services will always follow the steps described in the image below.

* Events: all before and after events are executed, and if any before-create event returns false, an exception can be thrown
	* If an exception occurs during an event, all the changes are reverted with the default error handling behavior
* Database: there is no database communication happening during this event unless it is specified in a before- or after-create event
* Result: a new object is available after these triggers
	* The object will have the **Instantiated** state
	* This influences the behavior in the other object actions

![](attachments/object-activities/18582173.png)

For more information, see [Create Object](create-object).

## 6 Delete

Clicking a Delete button or triggering a delete activity will initiate the delete events. In addition, when an object is removed through the configured delete behavior, it will execute all before and after events.

* Events: all before and after events are executed, and if any before-delete event returns false, an exception can be thrown
	* If an exception occurs during an event, all the applied changes are reverted with the default error handling behavior
	* Changes made prior to the rollback will be kept 
* Database: if an object has the state **Instantiated**, there will be no database communication required
	* For any other status, a delete query is executed in the database
* Result: the object will be removed from memory and if applicable from the database
	* All delete behavior for the associations is validated, and any associated objects are removed as well

![](attachments/object-activities/18582171.png)

For more information, see [Delete Object(s)](deleting-objects).

## 7 Retrieve

For more information, see [Retrieve](retrieve).

## 8 Rollback

Pressing a Cancel button or triggering a rollback activity will initiate the rollback events. These actions are not triggered in the case of a rollback because of an error.

* Events: all before and after events are executed, and if any before-rollback event returns false, an exception can be thrown
	* If an exception occurs during an event, all the applied changes are reverted with the default error handling behavior
	* Changes made prior to the rollback will be kept
* Database: there is no database communication happening during this event unless it is specified in a before- or after-create event
* Result: an object with the state **Instantiated** will be removed, and an object with any other state will be reverted back to the values it had during the last commit

![](attachments/object-activities/18582170.png)

For more information, see [Rollback Object](rollback-object).
