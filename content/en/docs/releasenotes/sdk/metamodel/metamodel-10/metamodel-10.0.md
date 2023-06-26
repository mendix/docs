---
title: "10.0"
parent: "metamodel-10"
---

## 10.0.0

### Microflows

#### AggregateListAction (Element)
* We introduced the `expression` property. 
* We introduced the `useExpression` property. 
* We introduced the `reduceReturnDataType` property. 
* We introduced the `reduceInitialValueExpression` property. 

#### RestOperationCallAction (Element)
* We introduced this element. Info: "Calling a REST operation action"

#### ClearFromClientAction (Element)
* We introduced this element. 

#### LockWorkflowAction (Element)
* We deleted the `workflow` property. 
* We introduced the `workflowSelection` property. 

#### UnlockWorkflowAction (Element)
* We deleted the `workflow` property. 
* We introduced the `workflowSelection` property. 

#### NotifyWorkflowAction (Element)
* We introduced this element. 

### Projects

#### ModuleSettings (ModelUnit)
* We introduced the `solutionIdentifier` property. 
* We introduced the `jarDependencies` property. 
* We introduced the `basedOnVersion` property. 

### Settings

#### RuntimeSettings (Element)
* We changed the default value of the `bcryptCost` property.

#### WebUIProjectSettingsPart (Element)
* We deleted the `enableDownloadResources` property. 

### DatabaseConnector

#### ConnectionString (Element)
* We introduced this element. Info: "Using a text to define the connection string"

#### ConnectionParts (Element)
* We introduced this element. Info: "Using parts to define the connection string"

### Rest

#### PublishedODataMicroflow (Element)
* We introduced the `parameters` property. Info: "The parameters of this microflow"

#### PublishedODataMicroflowParameter (Element)
* We introduced this element. Info: "A microflow parameter published in an OData service"

#### ConsumedODataService (ModelUnit)
* We introduced this modelunit.

### CustomWidgets

#### CustomWidgetType (Element)
* We deleted the `phoneGapEnabled` property. 

### Navigation

#### NavigationDocument (ModelUnit)
* We deleted the `reports` property. 
* We deleted the `reportParameters` property. 

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
