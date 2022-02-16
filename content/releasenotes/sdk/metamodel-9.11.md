---
title: "9.11"
parent: "metamodel-9"
---

## 9.11.0

**Release date: February 16th, 2022**

### DomainModels

#### MappedValue (Element)

* We introduced the `creatableRuntime` property. 

#### RemoteAssociationSource (Element)

* We introduced the `creatableFromParentRuntime` and `creatableFromChildRuntime` properties.

### Projects

#### Document (ModelUnit)

* We made the `excluded` property public, which means you can use this without first loading the unit.

### Settings

#### RuntimeSettings (Element)

* We introduced the `bcryptCost` property. 

### Rest

#### PublishedRestResource (Element)

* We introduced the `updateMode` property for the `ChangeMode` that defines the update functionality.
* We introduced the `insertMode` property for the `ChangeMode` that defines the insert functionality.
* We introduced the `deleteMode` property for the `ChangeMode` that defines the delete functionality.
* We deleted the `updatable` and `updateMicroflow` properties. This has been replaced by the `updateMode` property.
* We deleted the `insertable` property. This has been replaced by the `insertMode` property.
* We deleted the `deletable` property. This has been replaced by the `deleteMode` property.

#### ChangeMode (Element)

* We introduced this element for details about insert, update, or delete functionality.

#### ChangeNotSupported (Element)

* We introduced this element for the insert, update, or delete functionality that is not supported for this resource.

#### ChangeSource (Element)

* We introduced this element for the default insert, update, or delete functionality that changes the source,

#### CallMicroflowToChange (Element)

* We introduced this element for calling a microflow that implements the insert, update, or delete functionality.

#### ODataRemoteEntitySource (Element)

* We introduced the `creatable` property for answering whether new objects can be created.
* We introduced the `deletable` property for answering whether existing objects can be deleted.

#### ODataRemoteAssociationSource (Element)

* We introduced the `creatableFromChild` property for when you create a child object and need to answer whether you can specify its associated parent.
* We introduced the `creatableFromParent` property for when you create a parent object and need to answer whether you can specify its associated child.

#### ODataMappedValue (Element)

* We introduced the `representsStream` property for answering whether the attribute represents the stream.
* We introduced the `creatable` property for answering whether the attribute can be sent when the object is new.

### WebServices

#### DataMember (Element)

* We introduced the `isWritable` property for answering whether it is possible to change this member through the exposed service.

### Pages

#### ScrollContainer (Element)

* We introduced the `nativeHideScrollbars` property. 

### Workflows

#### Workflow (ModelUnit)

* We introduced the `adminPage` property.
* We deleted the `overviewPage` property. 

#### PageReference (Element)

* We introduced this element. 

#### PageParameterMapping (Element)

* We introduced this element. 

#### UserTask (Element)

* We introduced the `taskPage` and `autoAssignSingleTargetUser` properties. 
* We deleted the `page` property. 
