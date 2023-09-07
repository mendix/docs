---
title: "10.2"
url: /releasenotes/sdk/metamodel-10.2/
weight: 98
---

## 10.2.0

**Release date: August 25, 2023**

### DomainModels

#### MaterializedRemoteEntitySource, CachedMappedValue (Elements)

* We deleted these elements.  

### Enumerations

#### Enumeration (ModelUnit)

* We introduced the `remoteSource` property. 

#### RemoteEnumerationSource (Element)

* We introduced this element. 

### Microflows

#### Microflow (ModelUnit)

* We introduced the `stableId` property. 

#### CallExternalAction (Element)

* We introduced the `parameterMappings`, `variableName`, `variableDataType`, and `variableDataTypeRuntime` properties. 

#### ExternalActionParameterMapping (Element)

* We introduced this element for mapping an action parameter with its argument.

### Kafka

#### KafkaMappedValue (Element)

* We deleted this element. 

### Rest

#### PublishedODataMicroflow (Element)

* We introduced the `returnType` property for the return type of the microflow.
* We introduced the `returnTypeRuntime` property for the Mendix Runtime return type of the microflow.

#### PublishedODataMicroflowParameter (Element)

* We introduced the `dataType` property.
* We deleted the `type` property, which has been replaced with `dataType`.

#### ODataRemoteEnumerationSource (Element)

* We introduced this element. 

### Pages

#### DesignPropertyValue (Element)

* We introduced the `value` property. 
* We deleted the `type`, `stringValue`, and `booleanValue` properties.

#### AbstractDesignPropertyValue, OptionDesignPropertyValue, ToggleDesignPropertyValue, CustomDesignPropertyValue, CompoundDesignPropertyValue (Elements)

* We introduced these elements. 

#### DataViewSource (Element)

* We deleted the `pageParameter` and `snippetParameter` properties. 

### Workflows

#### MultiInputCompletion (Element)

* We introduced the `awaitAllUsers` property. 
