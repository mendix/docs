---
title: "9.0"
parent: "metamodel-9"
---

## 9.0.5

**Release date: March 26th, 2021**

### Constants

#### Constant (ModelUnit)


##### Property 'type'
* Added public

### Microflows

#### JavaActionCallAction (Element)


##### Property 'queue'
* Introduced; 

#### WorkflowCallAction (Element)
* Removed experimental


#### SetTaskOutcomeAction (Element)
* Removed experimental


#### OpenUserTaskAction (Element)
* Removed experimental


#### OpenWorkflowAction (Element)
* Removed experimental


### Settings

#### ModelerSettings (Element)


##### Property 'actionActivityDefaultColors'


#### WorkflowsProjectSettingsPart (Element)
* Removed experimental

##### Property 'enabled'
* Deleted; 

##### Property 'workflowEngineParallelism'
* Introduced; 

##### Property 'defaultTaskParallelism'
* Introduced; 

### Pages

#### CallWorkflowClientAction (Element)
* Removed experimental


#### OpenUserTaskClientAction (Element)
* Removed experimental


#### OpenWorkflowClientAction (Element)
* Removed experimental

##### Property 'defaultPage'
* Introduced; 

#### SetTaskOutcomeClientAction (Element)
* Removed experimental


### Workflows

#### Workflow (ModelUnit)
* Removed experimental


#### Flow (Element)
* Removed experimental


#### WorkflowActivity (Element)
* Removed experimental

##### Property 'name'
* Introduced; 

#### CallWorkflowActivity (Element)
* Removed experimental


#### ConditionOutcomeActivity (Element)
* Removed experimental


#### EndWorkflowActivity (Element)
* Removed experimental


#### JumpToActivity (Element)
* Introduced; 


#### ExclusiveSplitActivity (Element)
* Removed experimental


#### ParallelSplitActivity (Element)
* Removed experimental


#### CallMicroflowTask (Element)
* Removed experimental


#### MicroflowCallParameterMapping (Element)
* Removed experimental


#### UserTaskEvent (Element)
* Introduced; 


#### NoEvent (Element)
* Introduced; 


#### MicroflowBasedEvent (Element)
* Introduced; 


#### UserTask (Element)
* Removed experimental

##### Property 'onCreatedEvent'
* Introduced; 

#### UserSource (Element)
* Removed experimental


#### XPathBasedUserSource (Element)
* Removed experimental


#### MicroflowBasedUserSource (Element)
* Removed experimental

##### Property 'parameterMappings'
* Introduced; 

#### Outcome (Element)
* Removed experimental


#### UserTaskOutcome (Element)
* Removed experimental


#### ParallelSplitOutcome (Element)
* Removed experimental


#### ConditionOutcome (Element)
* Removed experimental


#### BooleanConditionOutcome (Element)
* Removed experimental


#### EnumerationValueConditionOutcome (Element)
* Removed experimental


#### VoidConditionOutcome (Element)
* Removed experimental


## 9.0.4

## Microflows

### LoopSource (Element)
* Introduced; 


#### LoopedActivity (Element)


##### Property 'iteratedListVariableName'
* Deleted; 

##### Property 'loopVariableName'
* Deleted; 

##### Property 'loopSource'
* Introduced; 

#### IterableList (Element)
* Introduced; 


#### WhileLoopCondition (Element)
* Introduced; 

## 9.0.3

### JavaActions

#### JavaAction (ModelUnit)


##### Property 'useLegacyCodeGeneration'
* Deleted; "The option to make Java action parameter names unique in generated code is no longer supported"

### DataSets

#### JavaDataSetSource (Element)


##### Property 'useLegacyCodeGeneration'
* Deleted; "The option to make Java action parameter names unique in generated code is no longer supported"

### Microflows

#### ExpressionListOperation (Element)
* Introduced; 


#### FilterByExpression (Element)
* Introduced; 


#### FindByExpression (Element)
* Introduced; 


### Navigation

#### NavigationProfile (Element)


##### Property 'progressiveWebAppSettings'
* Introduced; 

### Workflows

#### UserTask (Element)


##### Property 'allowedModuleRoles'
* Introduced; 

##### Property 'allowedUserRoles'
* Introduced; 

## 9.0.2

### DomainModels

#### CachedMappedValue (Element)
* Introduced; 


### Microflows

#### Microflow (ModelUnit)


##### Property 'workflowActionInfo'
* Introduced; 

#### AppServiceCallAction (Element)
* Deleted; 


#### AppServiceCallParameterMapping (Element)
* Deleted; 


#### WorkflowCallAction (Element)
* Introduced; 


#### SetTaskOutcomeAction (Element)
* Introduced; 


#### OpenUserTaskAction (Element)
* Introduced; 


#### OpenWorkflowAction (Element)
* Introduced; 


### Settings

#### RuntimeSettings (Element)


##### Property 'enforceDataStorageUniqueness'
* Deleted; 

### AppServices

#### AppServiceAction (Element)
* Deleted; 


#### AppServiceActionParameter (Element)
* Deleted; 


#### ConsumedAppService (ModelUnit)
* Deleted; 


#### Msd (Element)
* Deleted; 


#### MsdAssociation (Element)
* Deleted; 


#### MsdAttribute (Element)
* Deleted; 


#### MsdDomainModel (Element)
* Deleted; 


#### MsdEntity (Element)
* Deleted; 


#### MsdEnumeration (Element)
* Deleted; 


#### MsdEnumerationContainer (Element)
* Deleted; 


#### MsdEnumerationValue (Element)
* Deleted; 


#### MsdMetadata (Element)
* Deleted; 


#### MsdMicroflow (Element)
* Deleted; 


#### MsdMicroflowParameter (Element)
* Deleted; 


#### MsdText (Element)
* Deleted; 


#### MsdVersion (Element)
* Deleted; 


### WebServices

#### DataAssociation (Element)


##### Property 'associationByContract'
* Deleted; 

#### DataAttribute (Element)


##### Property 'attributeByContract'
* Deleted; 

#### DataMember (Element)


##### Property 'isLockedByContract'
* Deleted; 

##### Property 'isOptionalByContract'
* Deleted; 

##### Property 'isNillableByContract'
* Deleted; 

#### PublishedAppService (ModelUnit)
* Deleted; 


#### PublishedOperation (Element)


##### Property 'isLockedByContract'
* Deleted; 

##### Property 'returnTypeNameByContract'
* Deleted; 

##### Property 'returnTypeSpecificationByContract'
* Deleted; 

##### Property 'entityExposedNameByContract'
* Deleted; 

#### PublishedParameter (Element)


##### Property 'isLockedByContract'
* Deleted; 

##### Property 'parameterByContract'
* Deleted; 

##### Property 'isOptionalByContract'
* Deleted; 

##### Property 'entityExposedItemNameByContract'
* Deleted; 

#### VersionedService (Element)


##### Property 'isLockedByContract'
* Deleted; 

##### Property 'enumerationsByContract'
* Deleted; 

##### Property 'appServiceState'
* Deleted; 

##### Property 'msdFileBase64'
* Deleted; 

### Pages

#### TemplateFormBase (ModelUnit)


##### Property 'templateCategory'
* Introduced; 

##### Property 'templateCategoryWeight'
* Introduced; 

#### WorkflowTemplateType (Element)
* Introduced; 


#### UserTaskTemplateType (Element)
* Introduced; 


#### WorkflowOverviewTemplateType (Element)
* Introduced; 


#### CallWorkflowClientAction (Element)
* Introduced; 


#### OpenUserTaskClientAction (Element)
* Introduced; 


#### OpenWorkflowClientAction (Element)
* Introduced; 


#### SetTaskOutcomeClientAction (Element)
* Introduced; 


### Workflows

#### Workflow (ModelUnit)
* Introduced; 


#### Flow (Element)
* Introduced; 


#### WorkflowActivity (Element)
* Introduced; 


#### CallWorkflowActivity (Element)
* Introduced; 


#### ConditionOutcomeActivity (Element)
* Introduced; 


#### EndWorkflowActivity (Element)
* Introduced; 


#### ExclusiveSplitActivity (Element)
* Introduced; 


#### ParallelSplitActivity (Element)
* Introduced; 


#### CallMicroflowTask (Element)
* Introduced; 


#### MicroflowCallParameterMapping (Element)
* Introduced; 


#### UserTask (Element)
* Introduced; 


#### UserSource (Element)
* Introduced; 


#### XPathBasedUserSource (Element)
* Introduced; 


#### MicroflowBasedUserSource (Element)
* Introduced; 


#### Outcome (Element)
* Introduced; 


#### UserTaskOutcome (Element)
* Introduced; 


#### ParallelSplitOutcome (Element)
* Introduced; 


#### ConditionOutcome (Element)
* Introduced; 


#### BooleanConditionOutcome (Element)
* Introduced; 


#### EnumerationValueConditionOutcome (Element)
* Introduced; 


#### VoidConditionOutcome (Element)
* Introduced; 

## Metamodel Release Notes for version 9.0.1

### DomainModels

#### Entity (Element)


##### Property 'capabilities'
* Deleted; 

#### EntityCapabilities (Element)
* Deleted; 


#### Attribute (Element)


##### Property 'capabilities'
* Deleted; 

#### AttributeCapabilities (Element)
* Deleted; 


#### AssociationBase (Element)


##### Property 'capabilities'
* Deleted; 

#### AssociationCapabilities (Element)
* Deleted; 


### Settings

#### WebUIProjectSettingsPart (Element)


##### Property 'themeConversionStatus'
* Deleted; 

### Pages

#### ActionButton (Element)


##### Property 'ariaRole'
* Introduced; 

#### ClientTemplateParameter (Element)


##### Property 'expression'
* Introduced; 

### Reports

#### ReportChart (Element)
* Deleted; 


#### ReportChartSeries (Element)
* Deleted; 
