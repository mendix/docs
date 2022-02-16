---
title: "9.11"
parent: "metamodel-9"
---

## 9.11.0

### DomainModels

#### MappedValue (Element)
* We introduced the `creatableRuntime` property. 

#### RemoteAssociationSource (Element)
* We introduced the `creatableFromParentRuntime` property. 
* We introduced the `creatableFromChildRuntime` property. 

### Projects

#### Document (ModelUnit)
* We made the `excluded` property public, which means you can use this without first loading the unit.

### Settings

#### RuntimeSettings (Element)
* We introduced the `bcryptCost` property. 

### Rest

#### PublishedRestResource (Element)
* We deleted the `updatable` property. Info: "Replaced by updateMode"
* We deleted the `updateMicroflow` property. Info: "Replaced by updateMode"
* We deleted the `insertable` property. Info: "Replaced by insertMode"
* We deleted the `deletable` property. Info: "Replaced by deleteMode"
* We introduced the `updateMode` property. Info: "The ChangeMode that defines the update functionality"
* We introduced the `insertMode` property. Info: "The ChangeMode that defines the insert functionality"
* We introduced the `deleteMode` property. Info: "The ChangeMode that defines the delete functionality"

#### ChangeMode (Element)
* We introduced this element. Info: "Details about insert, update or delete functionality"

#### ChangeNotSupported (Element)
* We introduced this element. Info: "The insert, update or delete functionality is not supported for this resource"

#### ChangeSource (Element)
* We introduced this element. Info: "Default insert, update or delete functionality that changes the source"

#### CallMicroflowToChange (Element)
* We introduced this element. Info: "Call a microflow that implements the insert, update or delete functionality"

#### ODataRemoteEntitySource (Element)
* We introduced the `creatable` property. Info: "Can new objects be created?"
* We introduced the `deletable` property. Info: "Can existing objects be deleted?"

#### ODataRemoteAssociationSource (Element)
* We introduced the `creatableFromChild` property. Info: "When you create a child object, can you specify its associated parent?"
* We introduced the `creatableFromParent` property. Info: "When you create a parent object, can you specify its associated child?"

#### ODataMappedValue (Element)
* We introduced the `representsStream` property. Info: "Does the attribute represent the stream?"
* We introduced the `creatable` property. Info: "Can the attribute be sent when the object is new?"

### WebServices

#### DataMember (Element)
* We introduced the `isWritable` property. Info: "Can this member possibly be changed through the exposed service?"

### Pages

#### ScrollContainer (Element)
* We introduced the `nativeHideScrollbars` property. 

### Workflows

#### Workflow (ModelUnit)
* We deleted the `overviewPage` property. 
* We introduced the `adminPage` property. 

#### PageReference (Element)
* We introduced this element. 

#### PageParameterMapping (Element)
* We introduced this element. 

#### UserTask (Element)
* We deleted the `page` property. 
* We introduced the `taskPage` property. 
* We introduced the `autoAssignSingleTargetUser` property. 

This page has been generated automatically.
