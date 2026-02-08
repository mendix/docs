---
title: "10.12"
url: /releasenotes/sdk/metamodel-10.12/
weight: 88
---

## 10.12.0

### DomainModels

#### Index (Element)

* `includeInOffline` 속성을 도입하였습니다. 

### Enumerations

#### EnumerationValue (Element)

* `remoteValue` 속성을 도입하였습니다. 

#### RemoteEnumerationValue (Element)

* 이 엘리먼트를 도입하였습니다. 

### Microflows

#### MicroflowBase (ModelUnit)

* `returnVariableName` 속성을 도입하였습니다. 

#### CallExternalAction (Element)

* `includedAssociations` 속성을 도입하였습니다. 

### Projects

#### JarDependency (Element)

* 이 엘리먼트를 도입하였습니다.
* `exclusions` 속성을 도입하였습니다. 

#### JarDependencyExclusion (Element)

* 이 엘리먼트를 도입하였습니다. 

### DatabaseConnector

#### DatabaseConnection (ModelUnit)

* `additionalProperties` 속성을 도입하였습니다. 

#### DatabaseQuery (Element)

* `tableMapping` 속성을 삭제하였습니다. Info: "moved to tableMappings"
* `tableMappings` 속성을 도입하였습니다. 
* `queryType` 속성을 도입하였습니다. 

#### QueryParameter (Element)

* `databaseParameterName` 속성을 도입하였습니다. 
* `emptyValueBecomesNull` 속성을 도입하였습니다. 

#### AdditionalProperty (Element)

* 이 엘리먼트를 도입하였습니다. 

#### AdditionalPropertyValue (Element)

* 이 엘리먼트를 도입하였습니다. 

#### ValueAsString (Element)

* 이 엘리먼트를 도입하였습니다. 

#### ValueAsConstant (Element)

* 이 엘리먼트를 도입하였습니다. 

### ODataPublish

#### PublishedODataService2 (ModelUnit)

* `supportsGraphQL` 속성을 도입하였습니다. 

#### PublishedAttribute (Element)

* `stringAsGuid` 속성을 도입하였습니다. 

### Rest

#### ConsumedODataService (ModelUnit)

* `headersMicroflow` 속성을 삭제하였습니다. Info: "Replaced by configurationMicroflow"
* `configurationMicroflow` 속성을 도입하였습니다. Info: "Replaces headersMicroflow"

#### ODataRemoteEnumerationValue (Element)

* 이 엘리먼트를 도입하였습니다. 

### Workflows

#### UserTask (Element)

* 이 엘리먼트를 삭제하였습니다. Info: "replaced with the abstract class UserTaskBase"

#### UserTaskActivity (Element)

* 이 엘리먼트를 도입하였습니다. Info: "new User tasks abstract parent class"

#### SingleUserTaskActivity (Element)

* 이 엘리먼트를 도입하였습니다. 

#### MultiUserTaskActivity (Element)

* 이 엘리먼트를 도입하였습니다. 

#### UserTaskCompletion (Element)

* 이 엘리먼트를 삭제하였습니다. Info: "this value became part of the MultiUserTask class"

#### SingleInputCompletion (Element)

* 이 엘리먼트를 삭제하였습니다. Info: "not used anymore since now we have SingleUserTask and MultiUserTask classes"

#### MultiInputCompletion (Element)

* 이 엘리먼트를 삭제하였습니다. Info: "not used anymore since now we have SingleUserTask and MultiUserTask classes"
