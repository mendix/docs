---
title: "9.14"
url: /releasenotes/sdk/metamodel-9.14/
weight: 86
---

## 9.14.0

**Release date: May 20th, 2022**

### DomainModels

#### AssociationBase (Element)

* We introduced the `navigability` property. Info: "Indicates in which direction(s) the association can be navigated"

### Microflows

#### GenerateJumpToOptionsAction (Element)

* We introduced this element. 

### Rest

#### PublishedODataService (ModelUnit)

* We deleted the `serviceFeed` property. Info: "Moved to contract.metadata.serviceFeed.xml"
* We deleted the `serviceFeedJson` property. Info: "Moved to contract.metadata.serviceFeed.json"
* We deleted the `metadata` property. Info: "Moved to contract.metadata"
* We introduced the `contract` property. Info: "The generated contract for this service"

#### PublishedRestResource (Element)

* We introduced the `readMode` property. Info: "The ChangeMode that defines the read functionality"
* We deleted the `queryMicroflow` property. Info: "Replaced by readMode"
* We deleted the `countMicroflow` property. Info: "Replaced by readMode"

#### ReadMode (Element)

* We introduced this element. Info: "Details about read functionality"

#### ReadSource (Element)

* We introduced this element. Info: "Default read functionality that changes the source"

#### CallMicroflowToRead (Element)

* We introduced this element. Info: "Call a microflow that implements the read functionality"

#### ODataRemoteAssociationSource (Element)

* We deleted the `navigability` property. Info: "Replaced by navigability2"
* We introduced the `navigability2` property. Info: "In which direction(s) can this association be traversed?"

#### PublishedODataContract (Element)

* We introduced this element. Info: "The contract of a published OData service"

#### ServiceFeed (Element)

* We introduced this element. Info: "The service feed of a published OData service"

### Pages

#### TextArea (Element)

* We introduced the `submitBehaviour` property. 
* We introduced the `submitOnInputDelay` property. 
