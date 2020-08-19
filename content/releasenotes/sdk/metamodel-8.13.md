# Metamodel Release Notes for version 8.13.0

## DomainModels

### Attribute (Element)


#### Property 'capabilities'
* Introduced; "What an attribute is capable of"

### AttributeCapabilities (Element)
* Introduced; "What an attribute is capable of"


## Projects

### Module (StructuralUnit)


#### Property 'appStorePackageId'
* Introduced; 

## Rest

### ConsumedODataService (ModelUnit)


#### Property 'versionApiMockResults'
* Introduced; "Mock results for the Version API"

## Pages

### TemplateType (Element)
* Introduced; 


### RegularPageTemplateType (Element)
* Introduced; 


### EditPageTemplateType (Element)
* Introduced; 


### SelectPageTemplateType (Element)
* Introduced; 


### PageTemplate (ModelUnit)


#### Property 'type'
* Deleted; "Use templateType instead"

#### Property 'templateType'
* Introduced; 

### TemplatePlaceholder (Element)
* Introduced; 


### Appearance (Element)


#### Property 'dynamicClasses'
* Introduced; 

### Grid (Element)


#### Property 'isPagingEnabled'
* Deleted; "Use property 'showPagingBar' instead"

#### Property 'showPagingBar'
* Introduced; 

### TabPage (Element)


#### Property 'badge'
* Introduced; 

### WorkflowTemplateType (Element)
* Introduced; 


### UserTaskTemplateType (Element)
* Introduced; 


### WorkflowOverviewTemplateType (Element)
* Introduced; 


### CallWorkflowClientAction (Element)
* Introduced; 


### OpenUserTaskClientAction (Element)
* Introduced; 


### OpenWorkflowClientAction (Element)
* Introduced; 


### SetTaskOutcomeClientAction (Element)
* Introduced; 


## Workflows

### Workflow (ModelUnit)


#### Property 'dueDate'
* Introduced; 

### EnumerationValueOutcomeValue (Element)
* Introduced; 


### BooleanOutcomeValue (Element)
* Introduced; 


### ExclusiveSplitActivity (Element)
* Introduced; 


### CallWorkflowActivity (Element)
* Introduced; 


### UserTask (Element)


#### Property 'page'
* Added public

#### Property 'dueDate'
* Introduced; 
