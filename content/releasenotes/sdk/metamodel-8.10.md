---
title: "8.10"
parent: "metamodel-8"
---

## 8.10.0

**Release date: May 26th, 2020**

### DomainModels

#### Entity (Element)

* We introduced the `source` property as a replacement for the `remoteSource`, `remoteSourceDocument`, and `isRemote` properties.
* We deleted the `remoteSource`, `remoteSourceDocument`, and `isRemote` properties. 

#### AssociationBase (Element)

* We introduced the `source` property.
* We deleted the `remoteSourceDocument` property. This information is now stored in `ODataRemoteAssociationSource`.

#### EntitySource, RemoteEntitySource, MappedValue, AssociationSource & RemoteAssociationSource (Elements)

* We introduced these elements.

#### RemoteEntitySourceDocument (ModelUnit)

* We introduced this model unit.
* We introduced the `description` property for a multi-line description of the remote source.
* We introduced the  `catalogUrl` property for the URL to a page that gives more information about the remote source.
* We introduced the `icon` property for a custom icon of the source document.

### Microflows

#### SynchronizeAction (Element)

* We introduced the `type` and `variableNames` properties.

#### WorkflowCallAction, SetTaskOutcomeAction & OpenUserTaskAction (Element)

* We introduced these elements.

### Rest

#### ConsumedODataService (ModelUnit)

* We added the public `serviceName` and `^version` properties.

#### ODataRemoteEntitySource (Element)

* We introduced this element, which indicates that this entity is from an OData source.

#### ODataRemoteAssociationSource (Element)

* We introduced this element, which indicates that this association is from an OData source.

#### ODataMappedValue (Element)

* We introduced this element, which indicates that the value of this attribute is from an OData source.

#### ODataEntity (Element)

* We added the public `name` property.
* We deleted the `entity` property, which is no longer needed, because now an entity knows its source.

#### ODataNavigationProperty (Element)

* We deleted the `association` property, because associations now know their remote names.
* We deleted the `thisSideIsParent` property, which is no longer needed, as this can be deduced in `ODataRemoteAssociationSource`.

#### ODataAttribute (Element)

* We deleted the `attribute` property, which is no longer needed, because now attributes know their remote name.

### Pages

#### TextBox & TextArea (Elements)

* We introduced the `autocomplete` property.

#### GroupBox (Element)

* We introduced the `headerMode` property.

### Workflows

#### WorkflowActivity, Flow, FlowValue, NoValue TaskOutcomeValue, StartWorkflowActivity, EndWorkflowActivity, WorkflowTask, WorkflowTaskOutcome & UserTask (Elements)

* We introduced these elements.

#### Workflow (ModelUnit)

* We introduced this model unit.
