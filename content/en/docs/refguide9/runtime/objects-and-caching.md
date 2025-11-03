---
title: "Objects and Caching"
url: /refguide9/objects-and-caching/
description: "Describes how objects interact with each other within a runtime request."
---

## Introduction

This page describes how objects get loaded from the database, in which cases objects are cached, when a cached object is retrieved, and what happens when an object gets changed and committed.

The term "object" refers to an instance of a Mendix entity.

## Object Caching

Mendix does not cache objects within Mendix Runtime over multiple requests. It does collect and keep a reference to objects changed within a request. In some retrieve actions, this object gets prevalence above the database, and in others it does not. This impacts the performance and the way the system works.

## Which Objects Are Tracked

Only non-persistable objects, new objects, and changed objects are tracked. This means that they are kept in memory for the duration of the request at runtime. When the request has finished, the object state is returned to the client, or it is discarded in the case of non-client actions. As soon as an object is committed it will no longer be tracked, except for non-persistable objects. The same applies for the rollback of objects.

Unchanged existing objects are not tracked in a request scope. They will get tracked only if they get changed!

{{% alert color="warning" %}}
The Mendix Runtime cannot return the object state to the client when the client does not have sufficient permissions to access that state. This means that if you trigger a microflow that changes but does not commit an object to which you have no read access, the change will be discarded at the end of the request.
{{% /alert %}}

## Scope of Tracking {#scope-tracking}

The objects are tracked in a request scope. A request scope is always smaller than a session scope and can be shared among contexts. When using the API `ISession.createContext()`, a new request scope is created along with the new context. When a context get cloned, the request scope is shared with the cloned context. Changes to the request scope are visible to all the cloned contexts.

## Actions

### Actions That Return Tracked Objects

Some actions will read an object from the request scope first. If it is not available there, they will be read from the database. These are the actions:

* Retrieve by path/retrieve by association (`Core.retrieveByPath([..])`)
* Retrieve by ID/retrieve by list of IDs (`Core.retrieveId([..])` and `Core.retrieveIdList([..])`)

This means that if the object to be retrieved is tracked by the request scope (as it is either changed, new, or non-persistable), then calling these actions/APIs will return the object from the request scope.

### Action That Will Never Return Tracked Objects

One action will always ignore the request scope and will always read objects from the database: retrieve by XPath (all variants).

This means that although the object might be tracked in the request scope as it is changed, a fresh copy of the object will be read from the database anyhow. Changes made to one of the copies of the same entity instance will not be visible on the other copies!

## Impact

### Impact of This Behavior on Your Solutions

If you have a few references to entity instances and you got these references via different ways, they might be copies of the same entity instance. Keep in mind that changes to one of the copies will not be reflected in the other copies. 

There is no clear way to identify this, so to ensure you have the latest version of the object, you should re-read the object as soon as you have committed changes to it to the database.

### Impact on Microflows

This behavior impacts microflows in a similar way. Therefore, the best practice here is to reload an object as soon as you have committed changes to another reference of (potentially) the same object.

### Impact of Using Non-Persistable Entities and Changed Entities in Microflows and Java Actions

When a user calls a microflow from the client, a copy of the state is sent with the request to the runtime. This copy stays at the runtime and is updated by the runtime during processing of this request. After the request has finished processing, it will return to the client, which will update its client state with the information returned by the response.

On the server side, this state can only be accessed by that request handling action. This means that it is no longer possible to query the state of a non-persistable entity when it is updated by another request, other than via the client (as the other request needed to return this non-persistable entity to the client, which in turn sends this with a subsequent request to the server). 

When a request triggers an asynchronous action on the runtime, it gets the state as it was from the moment it was initiated. You can only track the action by the client and get its updated state when the asynchronous action is finished if this action was asynchronously executed by the client. When the asynchronous action is triggered on the runtime using a Java Action, the state updates can not be tracked by the client (similar to refresh, datavalidation and other instructions).
