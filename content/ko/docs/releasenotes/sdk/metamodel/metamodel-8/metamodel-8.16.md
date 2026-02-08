---
title: "8.16"
url: /releasenotes/sdk/metamodel-8.16/
weight: 85
---

## 8.16.0

**릴리스 날짜: 2020년 11월 23일** 

### Microflows

#### MicroflowCall (Element)

* `queue` 속성을 도입하였습니다.

### Rest

#### ODataRemoteEntitySource (Element)

* `countable` property to answer: "Is the entity countable?"

#### ODataRemoteAssociationSource (Element)

* `navigability` property to answer: "In which direction (or directions) can this association be traversed?"

#### ODataMappedValue (Element)

* `filterable` property to answer: "Is the attribute filterable?"
* `sortable` property to answer: "Is the attribute sortable?"

### WebServices

#### ServiceInfo (Element)

* `usingAddressing` 속성을 도입하였습니다. 이 속성은 `WebServices` addressing.
