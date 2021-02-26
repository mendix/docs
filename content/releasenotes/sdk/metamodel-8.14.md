---
title: "8.14"
parent: "metamodel-8"
---

## 8.14.0

**Release date: September 21st, 2020** 
 
### DomainModels

#### EntityCapabilities (Element)

* We added the public `countable` property.

### Rest

#### ConsumedODataService (ModelUnit)

* We introduced the `lastUpdated` property for when the OData service was last updated.
* We deleted the `versionApiMockResults` property. Use the real payload from the Version API instead.
* We deleted the `serviceId` property.

### Pages

#### PageClientAction (Element)

* We introduced the `numberOfPagesToClose2` property.
* We deleted the `numberOfPagesToClose` property. Use the `numberOfPagesToClose2` property instead.

#### ClosePageClientAction (Element)

* We introduced the `numberOfPagesToClose` property.
* We deleted the `numberOfPages` property. Use the `numberOfPagesToClose` property instead.

#### CreateObjectClientAction (Element)

* We introduced the `numberOfPagesToClose2` property.
* We deleted the `numberOfPagesToClose` property. Use the `numberOfPagesToClose2` property instead.
