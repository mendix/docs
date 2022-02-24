---
title: "9.10"
parent: "metamodel-9"
---

## 9.10.0

**Release date: January 14th, 2022**

### CodeActions

#### MicroflowActionInfo (Element)

* We introduced the `iconData`, `iconDataDark`, and `imageDataDark` properties.
* We deleted the `icon` property. 

### JavaScriptActions

#### JavaScriptAction (ModelUnit)

* We introduced the `platform` property. 

### DomainModels

#### DomainModel (ModelUnit)

* We made the `documentation` property public, which means you can use this without first loading the unit.

#### Entity (Element)

* We made the `location` and `documentation` properties public, which means you can use these without first loading the unit.

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

#### MLModelCallAction, MLModelCall & MLModelCallParameterMapping (Elements)

* We introduced these elements.

### Projects

#### Document (ModelUnit)

* We made the `documentation` property public, which means you can use this without first loading the unit.

### Queues

#### QueueSettings, QueueRetry, QueueFixedRetry & QueueExponentialRetry (Elements)

* We introduced these elements. 

### Settings

#### WebUIProjectSettingsPart (Element)

* We introduced the `useOptimizedClient` property.

#### JarDeploymentSettings, JarLocationBase, UserLibJarLocation & ProtectedModuleJarLocation (Elements)

* We introduced these elements.

### Rest

#### PublishedRestResource (Element)

* We introduced the `insertable` and `deletable` properties.

### CustomWidgets

#### WidgetValueType (Element)

* We introduced the `universeDataSourceProperty` property. 

### Workflows

#### Parameter (Element)

* We introduced the `entity` property. 
* We deleted the `entityRef`, `parameterAssociation`, and `parameterEntity` properties.

#### Workflow (ModelUnit)

* We deleted the `workflowType` property. 

#### UserTask (Element)

* We deleted the `userTaskEntity` property. 

#### EmptyUserSource (Element)

* We introduced this element. 

#### WorkflowType (Element)

* We deleted this element. 
