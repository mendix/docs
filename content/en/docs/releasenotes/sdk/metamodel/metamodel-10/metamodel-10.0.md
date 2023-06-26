---
title: "10.0"
url: /releasenotes/sdk/metamodel-10.0/
weight: 100
---

## 10.0.0

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








#### UrlSegment (Element)

* We introduced this element. 

#### ParameterAttributeUrlSegment (Element)

* We introduced this element. 

#### ParameterIdUrlSegment (Element)

* We introduced this element. 

#### StaticUrlSegment (Element)

* We introduced this element. 

#### EntityPathSource (Element)

* We introduced the `sourceVariable` property. 

#### RetrievalQueryParameter (Element)

* We deleted the `type` property. 
* We introduced the `types` property. 

### Reports

#### ReportParameter (Element)

* We deleted the `parameterTypeRuntime` property. 
* We deleted the `reportId` property. 

### Workflows

#### WaitForNotificationActivity (Element)

* We introduced this element. 

#### MajorityCompletionCriteria (Element)

* We introduced this element. 

#### ThresholdCompletionCriteria (Element)

* We introduced this element. 

#### WorkflowDefinitionSelection (Element)

* We introduced this element. 

#### WorkflowDefinitionNameSelection (Element)

* We introduced this element. 

#### WorkflowDefinitionObjectSelection (Element)
* We introduced this element. 

This page has been generated automatically.
