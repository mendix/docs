---
title: "9.0"
url: /releasenotes/sdk/metamodel-9.0/
weight: 100
---

## 9.0.5

**Release date: March 26th, 2021**

### Constants

#### Constant (ModelUnit)

* We added the public `type` property.

### Microflows

#### JavaActionCallAction (Element)

* We intoduced the `queue` property.

#### WorkflowCallAction, SetTaskOutcomeAction, OpenUserTaskAction & OpenWorkflowAction (Elements)

* We removed the experimental status of these elements.

### Settings

#### ModelerSettings (Element)

* We introduced the `actionActivityDefaultColors` property.

#### WorkflowsProjectSettingsPart (Element)

* We removed the experimental status of this element.
* We introduced the `workflowEngineParallelism` and `defaultTaskParallelism` properties.
* We deleted the `enabled` property.

### Pages

#### OpenWorkflowClientAction (Element)

* We removed the experimental status of this element.
* We introduced the `defaultPage` property.

#### CallWorkflowClientAction, OpenUserTaskClientAction & SetTaskOutcomeClientAction (Element)

* We removed the experimental status of these elements.

### Workflows

#### Workflow (ModelUnit)

* We removed the experimental status of this model unit.

#### JumpToActivity, UserTaskEvent, NoEvent & MicroflowBasedEvent (Element)

* We introduced these elements.

#### WorkflowActivity (Element)

* We removed the experimental status of this element.
* We introduced the `name` property.

#### UserTask (Element)

* We removed the experimental status of this element.
* We introduced the `onCreatedEvent` property.

#### Flow, CallWorkflowActivity, ConditionOutcomeActivity, EndWorkflowActivity, ExclusiveSplitActivity, ParallelSplitActivity, CallMicroflowTask, MicroflowCallParameterMapping, UserSource, XPathBasedUserSource, Outcome, UserTaskOutcome, ParallelSplitOutcome, ConditionOutcome, BooleanConditionOutcome, EnumerationValueConditionOutcome, VoidConditionOutcome & MicroflowBasedUserSource (Elemenst)

* We removed the experimental status of these elements.

## 9.0.4

### Microflows

#### LoopSource, IterableList & WhileLoopCondition (Elements)

* We introduced these elements.

#### LoopedActivity (Element)

* We introduced the `loopSource` property.
* We deleted the `iteratedListVariableName` and `loopVariableName` properties.

## 9.0.3

### JavaActions

#### JavaAction (ModelUnit)

* We deleted the `useLegacyCodeGeneration` property. The option to make Java action parameter names unique in generated code is no longer supported.

### DataSets

#### JavaDataSetSource (Element)

* We deleted the `useLegacyCodeGeneration` property. The option to make Java action parameter names unique in generated code is no longer supported.

### Microflows

#### ExpressionListOperation, FilterByExpression & FindByExpression (Elements)

* We introduced these elements. 

### Navigation

#### NavigationProfile (Element)

* We introduced the `progressiveWebAppSettings` property.

### Workflows

#### UserTask (Element)

* We introduced the `allowedModuleRoles` and `allowedUserRoles` properties.

## 9.0.2

### DomainModels

#### CachedMappedValue (Element)

* We introduced this element.

### Microflows

#### Microflow (ModelUnit)

* We introduced the `workflowActionInfo` property.

#### WorkflowCallAction, SetTaskOutcomeAction, OpenUserTaskAction & OpenWorkflowAction (Element)

* We introduced these elements.

#### AppServiceCallAction & AppServiceCallParameterMapping (Elements)

* We deleted these elements.

### Settings

#### ConsumedAppService (ModelUnit)

* We deleted this model unit.

#### RuntimeSettings (Element)

* We deleted the `enforceDataStorageUniqueness` property.

### AppServices

#### AppServiceAction, AppServiceActionParameter, Msd, MsdAssociation, MsdAttribute, MsdDomainModel, MsdEntity, MsdEnumeration, MsdEnumerationContainer, MsdEnumerationValue, MsdMetadata, MsdMicroflow, MsdMicroflowParameter, MsdText & MsdVersion (Elements)

* We deleted these elements.

### WebServices

#### PublishedAppService (ModelUnit)

* We deleted this model unit.

#### DataAssociation (Element)

* We deleted the `associationByContract` property.

#### DataAttribute (Element)

* We deleted the `attributeByContract` property.

#### DataMember (Element)

* We deleted the `isLockedByContract`, `isOptionalByContract`, and `isNillableByContract`  properties.

#### PublishedOperation (Element)

* We deleted the `isLockedByContract`, `returnTypeNameByContract`, `returnTypeSpecificationByContract`, and `entityExposedNameByContract`  properties.

#### PublishedParameter (Element)

* We deleted the `isLockedByContract`, `parameterByContract`, `isOptionalByContract`, and `entityExposedItemNameByContract` properties.

#### VersionedService (Element)

* We deleted the `isLockedByContract`, `enumerationsByContract`, `appServiceState`, and `msdFileBase64` properties.

### Pages

#### TemplateFormBase (ModelUnit)

* We introduced the `templateCategory` and `templateCategoryWeight` properties. 

#### WorkflowTemplateType, UserTaskTemplateType, WorkflowOverviewTemplateType, CallWorkflowClientAction, OpenUserTaskClientAction, OpenWorkflowClientAction & SetTaskOutcomeClientAction (Elements)

* We introduced these elements.

### Workflows

#### Workflow (ModelUnit)

* We introduced this model unit.

#### Flow, WorkflowActivity, CallWorkflowActivity, ConditionOutcomeActivity, EndWorkflowActivity, ExclusiveSplitActivity, ParallelSplitActivity, CallMicroflowTask, MicroflowCallParameterMapping, UserTask, UserSource, XPathBasedUserSource, MicroflowBasedUserSource, Outcome, UserTaskOutcome, ParallelSplitOutcome, ConditionOutcome, BooleanConditionOutcome, EnumerationValueConditionOutcome & VoidConditionOutcome (Elements)

* We introduced these elements.

## 9.0.1

### DomainModels

#### EntityCapabilities, AttributeCapabilities & AssociationCapabilities (Elements)

* We deleted these elements.

#### Entity, Attribute & AssociationBase (Elements)

* We deleted the `capabilities` property.

### Settings

#### WebUIProjectSettingsPart (Element)

* We deleted the `themeConversionStatus` property.

### Pages

#### ActionButton (Element)

* We introduced the `ariaRole` property.

#### ClientTemplateParameter (Element)

* We introduced the `expression` property.

### Reports

#### ReportChart & ReportChartSeries (Elements)

* We deleted these elements.
