---
title: "10.12"
url: /releasenotes/sdk/metamodel-10.12/
weight: 88
---

## 10.12.0

### DomainModels

#### Index (Element)

* We introduced the `includeInOffline` property. 

### Enumerations

#### EnumerationValue (Element)

* We introduced the `remoteValue` property. 

#### RemoteEnumerationValue (Element)

* We introduced this element. 

### Microflows

#### MicroflowBase (ModelUnit)

* We introduced the `returnVariableName` property. 

#### CallExternalAction (Element)

* We introduced the `includedAssociations` property. 

### Projects

#### JarDependency (Element)

* We introduced this element.
* We introduced the `exclusions` property. 

#### JarDependencyExclusion (Element)

* We introduced this element. 

### DatabaseConnector

#### DatabaseConnection (ModelUnit)

* We introduced the `additionalProperties` property. 

#### DatabaseQuery (Element)

* We deleted the `tableMapping` property. Info: "moved to tableMappings"
* We introduced the `tableMappings` property. 
* We introduced the `queryType` property. 

#### QueryParameter (Element)

* We introduced the `databaseParameterName` property. 
* We introduced the `emptyValueBecomesNull` property. 

#### AdditionalProperty (Element)

* We introduced this element. 

#### AdditionalPropertyValue (Element)

* We introduced this element. 

#### ValueAsString (Element)

* We introduced this element. 

#### ValueAsConstant (Element)

* We introduced this element. 

### ODataPublish

#### PublishedODataService2 (ModelUnit)

* We introduced the `supportsGraphQL` property. 

#### PublishedAttribute (Element)

* We introduced the `stringAsGuid` property. 

### Rest

#### ConsumedODataService (ModelUnit)

* We deleted the `headersMicroflow` property. Info: "Replaced by configurationMicroflow"
* We introduced the `configurationMicroflow` property. Info: "Replaces headersMicroflow"

#### ODataRemoteEnumerationValue (Element)

* We introduced this element. 

### Workflows

#### UserTask (Element)

* We deleted this element. Info: "replaced with the abstract class UserTaskBase"

#### UserTaskActivity (Element)

* We introduced this element. Info: "new User tasks abstract parent class"

#### SingleUserTaskActivity (Element)

* We introduced this element. 

#### MultiUserTaskActivity (Element)

* We introduced this element. 

#### UserTaskCompletion (Element)

* We deleted this element. Info: "this value became part of the MultiUserTask class"

#### SingleInputCompletion (Element)

* We deleted this element. Info: "not used anymore since now we have SingleUserTask and MultiUserTask classes"

#### MultiInputCompletion (Element)

* We deleted this element. Info: "not used anymore since now we have SingleUserTask and MultiUserTask classes"
