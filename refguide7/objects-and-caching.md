---
title: "Mendix Objects and Caching"
space: "Mendix 7 Reference Guide"
category: "Runtime"
description: "This page describes how the objects interact with eachother within a runtime request"
tags: "runtime, MendixObject, caching, context, session, request, microflow"
---
This page describes how objects get loaded from the database, in which cases they are cached, when the cached object is retrieved and what happens when an object gets changed and committed. The term object here, refers to an instance of a Mendix entity.

## Object Caching
Mendix does not cache objects within the Mendix Business Server over multiple requests. It does collect and keep a reference to objects changed within a request. In some retrieve actions, this object gets prevalence above the database, in others not. This impacts performance and the way the system works.

### Which objects are tracked
Only Non-Persistable objects, new objects and changed objects are tracked. That means that they are kept in memory for the duration of the request at the runtime. When the request has finished the object state is returned to the client, or discarded in case of non-client actions. As soon as an object gets committed, it will no longer be tracked, except for Non-Persistable objects. The same applies for rollback of objects.

Unchanged, existing objects are not tracked in a request scope. They will get tracked only if they get changed!

### Scope of tracking
The objects are tracked in a request scope. A request scope is always smaller than a session scope and can be shared among contexts. When using the API `ISession.createContext()` a new request scope is created along with the new context. When a context get cloned, the request scope is shared with the cloned context. Changes to the request scope are visible to all the cloned contexts.

### Actions that return tracked objects
Some actions will read an object from the request scope first. If it is not available there, they will be read from the database. Those actions are:
 * Retrieve by path/Retrieve by association (`Core.retrieveByPath([..])`)
 * Retrieve by ID / Retrieve by list of ID's (`Core.retrieveId([..])` and `Core.retrieveIdList([..])`)

This means that if the object to be retrieved is tracked by the request scope (as it is either changed, new or non-persistable), then calling this actions / API's, will return you the object from the request scope.

### Actions that will never return tracked objects
Some actions will always ignore the request scope and will always read objects from the database. Those actions are:
 * Retrieve by XPath (all variants)

This means that although the object might be tracked in the request scope as it is changed, a fresh copy of the object will be read from the database anyhow. Changes made to one of the copies of the same entity instance, will not be visible on the other copies!

### Impact of this behavior on your solutions
If you have a few references to entity instances and you got these references via different ways, it might be copies of the same entity instance. You need to keep in mind that changes to one of the copies, will not be reflected in the other copies. There is no clear way to identify that. So to ensure you have the latest version of the object, you should re-read the object as soon as you have committed changes to it to the database.

### Impact on microflows
This behavior impacts microflows in a similar way. Therefore, the best practice here is to reload an object as soon as you committed changes to another reference of (potentially) the same object.
