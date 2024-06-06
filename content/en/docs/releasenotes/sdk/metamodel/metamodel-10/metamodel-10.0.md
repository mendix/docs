---
title: "10.0"
url: /releasenotes/sdk/metamodel-10.0/
weight: 100
---

## 10.0.0 GA

**Release date: June 19, 2023**

### Microflows

#### AggregateListAction (Element)

* We introduced the `expression`, `useExpression`, `reduceReturnDataType`, and `reduceInitialValueExpression` properties.

#### RestOperationCallAction (Element)

* We introduced this element for calling a REST operation action.

#### ClearFromClientAction, NotifyWorkflowAction (Elements)

* We introduced these elements. 

#### LockWorkflowAction (Element)

* We introduced the `workflowSelection` property.
* We deleted the `workflow` property. 

#### UnlockWorkflowAction (Element)

* We introduced the `workflowSelection` property.
* We deleted the `workflow` property. 

### Projects

#### ModuleSettings (ModelUnit)

* We introduced the `solutionIdentifier`, `jarDependencies`, and `basedOnVersion` properties.

### Settings

#### RuntimeSettings (Element)

* We changed the default value of the `bcryptCost` property.

#### WebUIProjectSettingsPart (Element)

* We deleted the `enableDownloadResources` property. 

### DatabaseConnector

#### ConnectionString (Element)

* We introduced this element for using a text to define the connection string.

#### ConnectionParts (Element)

* We introduced this element for using parts to define the connection string.

### Rest

#### PublishedODataMicroflow (Element)

* We introduced the `parameters` property for the parameters of the microflow.

#### PublishedODataMicroflowParameter (Element)

* We introduced this element for a microflow parameter published in an OData service.

#### ConsumedODataService (ModelUnit)

* We introduced this model unit.

### CustomWidgets

#### CustomWidgetType (Element)

* We deleted the `phoneGapEnabled` property. 

### Navigation

#### NavigationDocument (ModelUnit)

* We deleted the `reports` and `reportParameters` properties.

### Pages

#### Page (ModelUnit)

* We introduced the `urlSegments` property.

#### UrlSegment, ParameterAttributeUrlSegment, ParameterIdUrlSegment, StaticUrlSegment (Elements)

* We introduced these elements.

#### EntityPathSource (Element)

* We introduced the `sourceVariable` property. 

#### RetrievalQueryParameter (Element)

* We introduced the `types` property.
* We deleted the `type` property. 

### Reports

#### ReportParameter (Element)

* We deleted the `parameterTypeRuntime` and `reportId` properties.

### Workflows

#### WaitForNotificationActivity, MajorityCompletionCriteria, ThresholdCompletionCriteria, WorkflowDefinitionSelection, WorkflowDefinitionNameSelection, WorkflowDefinitionObjectSelection (Elements)

* We introduced these elements.
