---
title: "9.14"
url: /releasenotes/sdk/metamodel-9.14/
weight: 86
---

## 9.14.0

**Release date: May 20, 2022**

### DomainModels

#### AssociationBase (Element)

* We introduced the `navigability` property for indicating in which direction (or directions) the association can be navigated.

### Microflows

#### GenerateJumpToOptionsAction (Element)

* We introduced this element.

### Rest

#### PublishedODataService (ModelUnit)

* We introduced the `contract` property, which is for the generated contract for this service.
* We deleted the `serviceFeed` property, which has been moved to `contract.metadata.serviceFeed.xml`.
* We deleted the `serviceFeedJson` property, which has been moved to `contract.metadata.serviceFeed.json`.
* We deleted the `metadata` property, which has been moved to `contract.metadata`.

#### PublishedRestResource (Element)

* We introduced the `readMode` property for the `ChangeMode` that defines the read functionality.
* We deleted the `queryMicroflow` and `countMicroflow` properties, which have been replaced by `readMode.`

#### ReadMode (Element)

* We introduced this element for details about read functionality.

#### ReadSource (Element)

* We introduced this element for the default read functionality that changes the source.

#### CallMicroflowToRead (Element)

* We introduced this element for calling a microflow that implements the read functionality.

#### ODataRemoteAssociationSource (Element)

* We introduced the `navigability2` property for describing the direction (or directions) in which the association can be traversed.
* We deleted the `navigability` property, which has been replaced by `navigability2`.

#### PublishedODataContract (Element)

* We introduced this element for the contract of a published OData service.

#### ServiceFeed (Element)

* We introduced this element for the service feed of a published OData service.

### Pages

#### TextArea (Element)

* We introduced the `submitBehaviour` property.
* We introduced the `submitOnInputDelay` property.
