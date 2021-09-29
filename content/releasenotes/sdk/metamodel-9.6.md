# Metamodel Release Notes for version 9.6.0

## CodeActions

### MicroflowActionInfo (Element)


#### Property 'imageData'
* Introduced; 

## DomainModels

### MappedValue (Element)


#### Property 'updatableRuntime'
* Introduced; 

### EntityRef (Element)
* Added public


### DirectEntityRef (Element)
* Added public


### IndirectEntityRef (Element)
* Added public

#### Property 'steps'
* Added public

### EntityRefStep (Element)
* Added public


### MemberRef (Element)
* Added public

#### Property 'entityRef'
* Added public

### AttributeRef (Element)
* Added public


### AssociationRef (Element)
* Added public


## Microflows

### SendExternalObject (Element)
* Introduced; 


## Settings

### RuntimeSettings (Element)


#### Property 'useSystemContextForBackgroundTasks'
* Introduced; 

## Rest

### ODataRemoteAssociationSource (Element)


#### Property 'updatableFromChild'
* Introduced; "When you have a child object, can you set its associated parent?"

#### Property 'updatableFromParent'
* Introduced; "When you have a parent object, can you set its associated child?"

### ODataMappedValue (Element)


#### Property 'updatable'
* Introduced; "Is the attribute updatable?"

## Workflows

### Workflow (ModelUnit)


#### Property 'contextEntity'
* Deleted; 

#### Property 'parameter'
* Introduced; 

#### Property 'workflowEntity'
* Introduced; 

#### Property 'allowedModuleRoles'
* Deleted; 

#### Property 'allowedUserRoles'
* Deleted; 

### Parameter (Element)
* Introduced; 


### CallWorkflowActivity (Element)


#### Property 'parameterExpression'
* Introduced; 

### UserTask (Element)


#### Property 'userTaskEntity'
* Introduced; 

#### Property 'allowedModuleRoles'
* Deleted; 

#### Property 'allowedUserRoles'
* Deleted; 
