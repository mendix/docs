# Metamodel Release Notes for version 8.9.0

## DomainModels

### NoGeneralization (Element)


#### Property 'key'
* Introduced; "The remote key"

### EntityKey (Element)
* Introduced; "The (remote) key of an entity"

### EntityKeyPart (Element)
* Introduced; "A part of the (remote) key of an entity"

## Microflows

### CloseFormAction (Element)


#### Property 'numberOfPages'
* Introduced;

### WorkflowCallAction (Element)
* Introduced;

### SetWorkflowActivityOutcomeAction (Element)
* Introduced;

### OpenUserTaskAction (Element)
* Introduced;

## Rest

### ConsumedODataService (ModelUnit)


#### Property 'entities'
* Added public

### ODataEntity (Element)
* Added public

#### Property 'keyNames'
* Deleted;

#### Property 'key'
* Introduced; "The key of the OData entity"

### ODataKey (Element)
* Introduced; "The key of an OData entity"

### ODataKeyPart (Element)
* Introduced; "Part of the key of an OData entity"

## Navigation

### OfflineEntityConfig (Element)


#### Property 'downloadMode'
* Introduced;

#### Property 'shouldDownload'
* Deleted;

## Pages

### ClosePageClientAction (Element)


#### Property 'numberOfPages'
* Introduced;

## Workflows

### Workflow (ModelUnit)


#### Property 'context'
* Deleted;

#### Property 'contextEntity'
* Introduced;

#### Property 'activities'
* Added public

#### Property 'title'
* Introduced;

#### Property 'description'
* Introduced;

### WorkflowActivityOutcome (Element)
* Added public

#### Property 'name'
* Added public

### WorkflowActivity (Element)
* Added public

#### Property 'name'
* Introduced;

#### Property 'possibleOutcomes'
* Added public

### StartWorkflowActivity (Element)
* Added public

### EndWorkflowActivity (Element)
* Added public

### UserTask (Element)
* Added public

#### Property 'taskCaption'
* Deleted;

#### Property 'subject'
* Introduced;

#### Property 'taskDescription'
* Deleted;

#### Property 'description'
* Introduced;

#### Property 'userRole'
* Introduced;