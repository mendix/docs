---
title: "8.16"
url: /releasenotes/sdk/metamodel-8.16/
weight: 85
---

## 8.16.0

**Release date: November 23, 2020** 

### Microflows

#### MicroflowCall (Element)

* We introduced the `queue` property.

### Rest

#### ODataRemoteEntitySource (Element)

* We introduced the `countable` property to answer: "Is the entity countable?"

#### ODataRemoteAssociationSource (Element)

* We introduced the `navigability` property to answer: "In which direction (or directions) can this association be traversed?"

#### ODataMappedValue (Element)

* We introduced the `filterable` property to answer: "Is the attribute filterable?"
* We introduced the `sortable` property to answer: "Is the attribute sortable?"

### WebServices

#### ServiceInfo (Element)

* We introduced the `usingAddressing` property for `WebServices` addressing.
