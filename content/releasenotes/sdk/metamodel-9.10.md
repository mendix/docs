---
title: "9.10"
parent: "metamodel-9"
---

## 9.10.0

### CodeActions

#### MicroflowActionInfo (Element)
* We deleted the `icon` property. 
* We introduced the `iconData` property. 
* We introduced the `iconDataDark` property. 
* We introduced the `imageDataDark` property. 

### JavaScriptActions

#### JavaScriptAction (ModelUnit)
* We introduced the `platform` property. 

### DomainModels

#### DomainModel (ModelUnit)
* We made the `documentation` property public, which means you can use this without first loading the unit.

#### Entity (Element)
* We made the `location` property public, which means you can use this without first loading the unit.
* We made the `documentation` property public, which means you can use this without first loading the unit.

#### Attribute (Element)
* We made the `documentation` property public, which means you can use this without first loading the unit.

#### AssociationBase (Element)
* We made the `documentation` property public, which means you can use this without first loading the unit.

### Microflows

#### JavaActionCallAction (Element)
* We introduced the `queueSettings` property. 
* We deleted the `queue` property. 

#### MicroflowCall (Element)
* We introduced the `queueSettings` property. 
* We deleted the `queue` property. 

#### MLModelCallAction (Element)
* We introduced this element. 

#### MLModelCall (Element)
* We introduced this element. 

#### MLModelCallParameterMapping (Element)
* We introduced this element. 

### Projects

#### Document (ModelUnit)
* We made the `documentation` property public, which means you can use this without first loading the unit.

### Queues

#### QueueSettings (Element)
* We introduced this element. 

#### QueueRetry (Element)
* We introduced this element. 

#### QueueFixedRetry (Element)
* We introduced this element. 

#### QueueExponentialRetry (Element)
* We introduced this element. 

### Settings

#### JarDeploymentSettings (Element)
* We introduced this element. 

#### JarLocationBase (Element)
* We introduced this element. 

#### UserLibJarLocation (Element)
* We introduced this element. 

#### ProtectedModuleJarLocation (Element)
* We introduced this element. 

#### WebUIProjectSettingsPart (Element)
* We introduced the `useOptimizedClient` property. 

### Rest

#### PublishedRestResource (Element)
* We introduced the `insertable` property. 
* We introduced the `deletable` property. 

### CustomWidgets

#### WidgetValueType (Element)
* We introduced the `universeDataSourceProperty` property. 

### Workflows

#### Workflow (ModelUnit)
* We deleted the `workflowType` property. 

#### Parameter (Element)
* We deleted the `entityRef` property. 
* We deleted the `parameterAssociation` property. 
* We deleted the `parameterEntity` property. 
* We introduced the `entity` property. 

#### WorkflowType (Element)
* We deleted this element. 

#### UserTask (Element)
* We deleted the `userTaskEntity` property. 

#### EmptyUserSource (Element)
* We introduced this element. 

This page has been generated automatically.
