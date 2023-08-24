---
title: "10.2"
parent: "metamodel-10"
---

## 10.2.0

### DomainModels

#### MaterializedRemoteEntitySource (Element)
* We deleted this element. 

#### CachedMappedValue (Element)
* We deleted this element. 

### Enumerations

#### Enumeration (ModelUnit)
* We introduced the `remoteSource` property. 

#### RemoteEnumerationSource (Element)
* We introduced this element. 

### Microflows

#### Microflow (ModelUnit)
* We introduced the `stableId` property. 

#### CallExternalAction (Element)
* We introduced the `parameterMappings` property. 
* We introduced the `variableName` property. 
* We introduced the `variableDataType` property. 
* We introduced the `variableDataTypeRuntime` property. 

#### ExternalActionParameterMapping (Element)
* We introduced this element. Info: "Maps an action parameter with its argument"

### Kafka

#### KafkaMappedValue (Element)
* We deleted this element. 

### Rest

#### PublishedODataMicroflow (Element)
* We introduced the `returnType` property. Info: "Return type of the microflow"
* We introduced the `returnTypeRuntime` property. Info: "Runtime return type of the microflow"

#### PublishedODataMicroflowParameter (Element)
* We deleted the `type` property. Info: "Replaced with dataType"
* We introduced the `dataType` property. Info: "Replacement of type"

#### ODataRemoteEnumerationSource (Element)
* We introduced this element. 

### Pages

#### DesignPropertyValue (Element)
* We deleted the `type` property. 
* We deleted the `stringValue` property. 
* We deleted the `booleanValue` property. 
* We introduced the `value` property. 

#### AbstractDesignPropertyValue (Element)
* We introduced this element. 

#### OptionDesignPropertyValue (Element)
* We introduced this element. 

#### ToggleDesignPropertyValue (Element)
* We introduced this element. 

#### CustomDesignPropertyValue (Element)
* We introduced this element. 

#### CompoundDesignPropertyValue (Element)
* We introduced this element. 

#### DataViewSource (Element)
* We deleted the `pageParameter` property. 
* We deleted the `snippetParameter` property. 

### Workflows

#### MultiInputCompletion (Element)
* We introduced the `awaitAllUsers` property. 

This page has been generated automatically.
