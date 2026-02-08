---
title: "10.2"
url: /releasenotes/sdk/metamodel-10.2/
weight: 98
---

## 10.2.0

**릴리스 날짜: 2023년 8월 25일**

### DomainModels

#### MaterializedRemoteEntitySource, CachedMappedValue (Elements)

* 이 엘리먼트들을 삭제하였습니다.  

### Enumerations

#### Enumeration (ModelUnit)

* `remoteSource` 속성을 도입하였습니다. 

#### RemoteEnumerationSource (Element)

* 이 엘리먼트를 도입하였습니다. 

### Microflows

#### Microflow (ModelUnit)

* `stableId` 속성을 도입하였습니다. 

#### CallExternalAction (Element)

* `parameterMappings`, `variableName`, `variableDataType`, and `variableDataTypeRuntime` 속성을 도입하였습니다. 

#### ExternalActionParameterMapping (Element)

* 이 엘리먼트를 도입하였습니다. mapping an action parameter with its argument.

### Kafka

#### KafkaMappedValue (Element)

* 이 엘리먼트를 삭제하였습니다. 

### Rest

#### PublishedODataMicroflow (Element)

* `returnType` 속성을 도입하였습니다. return type of the microflow.
* `returnTypeRuntime` 속성을 도입하였습니다. Mendix Runtime return type of the microflow.

#### PublishedODataMicroflowParameter (Element)

* `dataType` 속성을 도입하였습니다.
* `type` property, which has been replaced with `dataType`.

#### ODataRemoteEnumerationSource (Element)

* 이 엘리먼트를 도입하였습니다. 

### Pages

#### DesignPropertyValue (Element)

* `value` 속성을 도입하였습니다. 
* `type`, `stringValue`, and `booleanValue` 속성을 삭제하였습니다.

#### AbstractDesignPropertyValue, OptionDesignPropertyValue, ToggleDesignPropertyValue, CustomDesignPropertyValue, CompoundDesignPropertyValue (Elements)

* 이 엘리먼트들을 도입하였습니다. 

#### DataViewSource (Element)

* `pageParameter` and `snippetParameter` 속성을 삭제하였습니다. 

### Workflows

#### MultiInputCompletion (Element)

* `awaitAllUsers` 속성을 도입하였습니다. 
