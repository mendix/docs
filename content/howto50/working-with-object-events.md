---
title: "Working With Object Events"
category: "Data Models"
---

When working with the Platform, objects are being created, removed, or reverted back to the original. Based on the state of the object and the 'Object Events' that are specified in the domain model, different actions are taken by the platform to guarantee data consistency. 

## 1. Preparation

None.

## 2\. Create

Everywhere where an object is initialized all events are always executed. The default new button, a create activity in a microflow, webservices, they will always follow the steps described in the image below.  

_Events:_ All before and after events are executed. If any of the afore create events return false an exception can be thrown. If an exception occurs during an event all changes are being reverted with the default error handling behavior. _
Database:_ There is no database communication happening during this event, not unless it is specified in a before or after create event. 
_Result:_  A new object is available after these triggers. The object will have the state 'Instantiated'. This is influences the behavior in the other object actions.

![](attachments/8785875/8946792.png)

## 3\. Commit

When an object is being committed through a default save button, a commit activity, or webservices, it will always trigger the commit events. The platform will also evaluate all associated objects. To guarantee data consistency the platform will also auto-commit associated objects.

An autocommit is an automatic commit from the platform. Which is done to keep the domain model in sync. If your application ends up having autocommitted objects then you have a modeling error. Since an association is also a member of an object, the association will be stored in the database as well.
That means if you create an OrderLine inside an Order, with OrderLine being the parent of the association. When you commit the OrderLine, the Order will be auto-committed.

If you end up with auto-commited objects, it is always because of a modeling error. At some point in time, an association was set to a new object and the associated object was committed. Thus committing all its associations as well to keep all data consistent.

_Events: _All before and after events are executed. If any of the before rollback events returns false an exception can be thrown. If an exception occurs during an event all applied changes are being reverted with the default error handling behavior. Changes made prior to the commit will be kept. 
_Database:_ There is an insert or update query executed. Depending on the object state, the platform will do an insert for objects with the state 'Instantiated', and an update for all other states.  
_Result:_  An object with the State: 'Instantiated' will be inserted into the database, an object with any other State will be updated.

![](attachments/8785875/8946795.png)

## 4\. Rollback

Pressing a cancel button or triggering a Rollback activity will initiate the Rollback events. These actions are not triggered in case of a rollback because of an error.

_Events: _All before and after events are executed. If any of the before rollback events returns false an exception can be thrown. If an exception occurs during an event, all applied changes are being reverted with the default error handling behavior. Changes made prior to the rollback will be kept. 
_Database:_ There is no database communication happening during this event, not unless it is specified in a before or after create event. 
_Result:_  An object with the State: 'Instantiated' will be removed, an object with any other State will be reverted back to the values it had during the last commit.

![](attachments/8785875/8946794.png)

## 5\. Delete

Pressing a delete button or triggering a Delete activity will initiate the Delete events. Also when an object is removed through the configured delete behavior it will execute all before and after events.

_Events: _All before and after events are executed. If any of the before delete events returns false an exception can be thrown. If an exception occurs during an event all applied changes are being reverted with the default error handling behavior. Changes made prior to the rollback will be kept. 
_Database:_ If an object has state 'Instantiated' there will be no database communication required. For any other status a delete query is executed in the database.  
_Result:_  The object will be removed from memory and if applicable from the database. All delete behavior for the associations is validated, and any associated objects are removed as well.

![](attachments/8785875/8946793.png)

## 6\. Related content

*   [Working with images and files](working-with-images-and-files)
*   [Creating a basic data layer](creating-a-basic-data-layer)
*   [Denormalize Data to Improve Performance](denormalize-data-to-improve-performance)
*   [Setting up data validation](setting-up-data-validation)
*   [Working With Object Events](working-with-object-events)
