---
title: "9.14"
url: /releasenotes/sdk/metamodel-9.14/
weight: 86
---

## 9.14.0

**릴리스 날짜: 2022년 5월 20일**

### DomainModels

#### AssociationBase (Element)

* `navigability` 속성을 도입하였습니다. ndicating in which direction (or directions) the association can be navigated.

### Microflows

#### GenerateJumpToOptionsAction (Element)

* 이 엘리먼트를 도입하였습니다.

### Rest

#### PublishedODataService (ModelUnit)

* `contract` property, which is for the generated contract for this service.
* `serviceFeed` property, which has been moved to `contract.metadata.serviceFeed.xml`.
* `serviceFeedJson` property, which has been moved to `contract.metadata.serviceFeed.json`.
* `metadata` property, which has been moved to `contract.metadata`.

#### PublishedRestResource (Element)

* `readMode` 속성을 도입하였습니다. `ChangeMode` that defines the read functionality.
* `queryMicroflow` and `countMicroflow` properties, which have been replaced by `readMode.`

#### ReadMode (Element)

* 이 엘리먼트를 도입하였습니다. details about read functionality.

#### ReadSource (Element)

* 이 엘리먼트를 도입하였습니다. the default read functionality that changes the source.

#### CallMicroflowToRead (Element)

* 이 엘리먼트를 도입하였습니다. calling a microflow that implements the read functionality.

#### ODataRemoteAssociationSource (Element)

* `navigability2` 속성을 도입하였습니다. escribing the direction (or directions) in which the association can be traversed.
* `navigability` property, which has been replaced by `navigability2`.

#### PublishedODataContract (Element)

* 이 엘리먼트를 도입하였습니다. the contract of a published OData service.

#### ServiceFeed (Element)

* 이 엘리먼트를 도입하였습니다. the service feed of a published OData service.

### Pages

#### TextArea (Element)

* `submitBehaviour` 속성을 도입하였습니다.
* `submitOnInputDelay` 속성을 도입하였습니다.
