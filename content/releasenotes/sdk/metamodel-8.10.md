---
title: "8.10"
parent: "metamodel-8"
---

## 8.10.0

**Release date: May 26th, 2020**

## DomainModels

### Entity (Element)


#### Property 'isRemote'
* Deleted; "Use property 'source' instead"

#### Property 'remoteSource'
* Deleted; "Use property 'source' instead"

#### Property 'remoteSourceDocument'
* Deleted; "Use property 'source' instead"

#### Property 'source'
* Introduced; "Replacement for remoteSource/remoteSourceDocument/isRemote properties"

### EntitySource (Element)
* Introduced; 


### RemoteEntitySource (Element)
* Introduced; 


### RemoteEntitySourceDocument (ModelUnit)


#### Property 'description'
* Introduced; "A multi-line description of the remote source"

#### Property 'catalogUrl'
* Introduced; "A url to a page that gives more information about the remote source"

#### Property 'icon'
* Introduced; "A custom icon of the source document"

### MappedValue (Element)
* Introduced; 


### AssociationBase (Element)


#### Property 'remoteSourceDocument'
* Deleted; "The information is now stored in ODataRemoteAssociationSource"

#### Property 'source'
* Introduced; 

### AssociationSource (Element)
* Introduced; 


### RemoteAssociationSource (Element)
* Introduced; 


## Microflows

### SynchronizeAction (Element)


#### Property 'type'
* Introduced; 

#### Property 'variableNames'
* Introduced; 

### WorkflowCallAction (Element)
* Introduced; 


### SetTaskOutcomeAction (Element)
* Introduced; 


### OpenUserTaskAction (Element)
* Introduced; 


## Rest

### ConsumedODataService (ModelUnit)


#### Property 'serviceName'
* Added public

#### Property '^version'
* Added public

### ODataRemoteEntitySource (Element)
* Introduced; "Indicates that this entity is from an OData source"


### ODataRemoteAssociationSource (Element)
* Introduced; "Indicates that this association is from an OData source"


### ODataMappedValue (Element)
* Introduced; "Indicates that the value of this attribute is from an OData source"


### ODataEntity (Element)


#### Property 'name'
* Added public

#### Property 'entity'
* Deleted; "No longer needed. Now Entity knows its Source."

### ODataNavigationProperty (Element)


#### Property 'association'
* Deleted; "Associations now know their remote names"

#### Property 'thisSideIsParent'
* Deleted; "No longer needed. Can be deduced in ODataRemoteAssociationSource"

### ODataAttribute (Element)


#### Property 'attribute'
* Deleted; "No longer needed. Now attributes know their remote name."

## Pages

### TextBox (Element)


#### Property 'autocomplete'
* Introduced; 

### TextArea (Element)


#### Property 'autocomplete'
* Introduced; 

### GroupBox (Element)


#### Property 'headerMode'
* Introduced; 

## Workflows

### Workflow (ModelUnit)
* Introduced; 


### WorkflowActivity (Element)
* Introduced; 


### Flow (Element)
* Introduced; 


### FlowValue (Element)
* Introduced; 


### NoValue (Element)
* Introduced; 


### TaskOutcomeValue (Element)
* Introduced; 


### StartWorkflowActivity (Element)
* Introduced; 


### EndWorkflowActivity (Element)
* Introduced; 


### WorkflowTask (Element)
* Introduced; 


### WorkflowTaskOutcome (Element)
* Introduced; 


### UserTask (Element)
* Introduced; 

