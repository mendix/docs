---
title: "10.4"
url: /releasenotes/sdk/metamodel-10.4/
weight: 96
---

## 10.4.0

**릴리스 날짜: 2023년 10월 26일**

### DomainModels

#### MappedValue (Element)

* `defaultValueDesignTime` and `defaultValueRuntime` 속성을 도입하였습니다.
* `defaultValue` 속성을 삭제하였습니다. 

### Microflows

#### GetWorkflowActivityRecordsAction and GetWorkflowsAction (Elements)

* 이 엘리먼트들을 도입하였습니다.

### Mappings

#### MappingDocument (ModelUnit)

* `supportedContentTypesRuntime` 속성을 도입하였습니다. toring the content types supported by the mapping.

### ODataPublish

#### PublishedODataService2 (ModelUnit)

* 이 모델 유닛을 도입하였습니다. 

#### Various Introduced Elements 

* We introduced the `EntityType`, `EntitySet`, `ChangeMode`, `ChangeNotSupported`, `ChangeSource`, `CallMicroflowToChange`, `ReadMode`, `ReadSource`, `CallMicroflowToRead`, `QueryOptions`, `PublishedMicroflow`, `PublishedMicroflowParameter`, `PublishedEnumeration`, `PublishedEnumerationValue`, `PublishedContract`, `ServiceFeed`, `PublishedMember`, `PublishedId`, `PublishedAttribute`, and `PublishedAssociationEnd` elements.

### Rest

#### ODataRemoteEntitySource (Element)

* `createChangeLocally` 속성을 도입하였습니다. reating and changing even when the service will not accept changes.

#### PublishedODataService (ModelUnit)

* 이 모델 유닛을 삭제하였습니다.

#### Various Deleted Elements

* We deleted the `PublishedRestResource`, `ChangeMode`, `ChangeNotSupported`, `ChangeSource`, `CallMicroflowToChange`, `ReadMode`, `ReadSource`, `CallMicroflowToRead`, `QueryOptions`, `PublishedODataMicroflow`, `PublishedODataMicroflowParameter`, `PublishedODataEnumeration`, `PublishedODataEnumerationValue`, `PublishedODataContract`, and `ServiceFeed` elements.

### Pages

#### DeleteClientAction (Element)

* `sourceVariable` 속성을 도입하였습니다. 
