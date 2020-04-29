---
title: "8.9"
parent: "metamodel-8"
---

## 8.9.0

**Release date: April 29th, 2020**

## DomainModels

### NoGeneralization (Element)

* We introduced the `key` property for the remote key.

### EntityKey (Element)

* We introduced this element for the (remote) key of an entity.

### EntityKeyPart (Element)

* We introduced this element for a part of the (remote) key of an entity.

## Microflows

### CloseFormAction (Element)

* We introduced the `numberOfPages` property.

### WorkflowCallAction, SetWorkflowActivityOutcomeAction & OpenUserTaskAction (Elements)

* We introduced these elements.

## Rest

### ConsumedODataService (ModelUnit)

* We added the public `entities` property.

### ODataEntity (Element)

* We added this public element.
* We deleted the `keyNames` property.
* We introduced the `key` property for the key of the OData entity.

### ODataKey (Element)

* We introduced this element for the key of an OData entity.

### ODataKeyPart (Element)

* We introduced this element for a part of the key of an OData entity.

## Navigation

### OfflineEntityConfig (Element)

* We introduced the `downloadMode` property.
* We deleted the `shouldDownload` property.

## Pages

### ClosePageClientAction (Element)

* We introduced the `numberOfPages` property.

## Workflows

### Workflow (ModelUnit)

* We deleted the `context` property.
* We introduced the `contextEntity`, `title`, and `description` properties.
* We added the public `activities` property.

### WorkflowActivityOutcome (Element)

* We added this public element.
* We added the public `name` property.

### WorkflowActivity (Element)

* We added this public element.
* We introduced the `name` property.
* We added the public `possibleOutcomes` property.

### StartWorkflowActivity (Element)

* We added this public element.

### EndWorkflowActivity (Element)

* We added this public element.

### UserTask (Element)

* We added this public element.
* We deleted the `taskCaption` and `taskDescription` properties.
* We introduced the `subject`, `description`, and `userRole` properties.
