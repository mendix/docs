---
title: "10.4"
url: /releasenotes/sdk/metamodel-10.4/
weight: 96
---

## 10.4.0

**Release date: October 26, 2023**

### DomainModels

#### MappedValue (Element)

* We introduced the `defaultValueDesignTime` and `defaultValueRuntime` properties.
* We deleted the `defaultValue` property. 

### Microflows

#### GetWorkflowActivityRecordsAction and GetWorkflowsAction (Elements)

* We introduced these elements.

### Mappings

#### MappingDocument (ModelUnit)

* We introduced the `supportedContentTypesRuntime` property for storing the content types supported by the mapping.

### ODataPublish

#### PublishedODataService2 (ModelUnit)

* We introduced this model unit. 

#### Various Introduced Elements 

* We introduced the `EntityType`, `EntitySet`, `ChangeMode`, `ChangeNotSupported`, `ChangeSource`, `CallMicroflowToChange`, `ReadMode`, `ReadSource`, `CallMicroflowToRead`, `QueryOptions`, `PublishedMicroflow`, `PublishedMicroflowParameter`, `PublishedEnumeration`, `PublishedEnumerationValue`, `PublishedContract`, `ServiceFeed`, `PublishedMember`, `PublishedId`, `PublishedAttribute`, and `PublishedAssociationEnd` elements.

### Rest

#### ODataRemoteEntitySource (Element)

* We introduced the `createChangeLocally` property for creating and changing even when the service will not accept changes.

#### PublishedODataService (ModelUnit)

* We deleted this model unit.

#### Various Deleted Elements

* We deleted the `PublishedRestResource`, `ChangeMode`, `ChangeNotSupported`, `ChangeSource`, `CallMicroflowToChange`, `ReadMode`, `ReadSource`, `CallMicroflowToRead`, `QueryOptions`, `PublishedODataMicroflow`, `PublishedODataMicroflowParameter`, `PublishedODataEnumeration`, `PublishedODataEnumerationValue`, `PublishedODataContract`, and `ServiceFeed` elements.

### Pages

#### DeleteClientAction (Element)

* We introduced the `sourceVariable` property. 
