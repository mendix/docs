---
title: "8.14"
url: /releasenotes/sdk/metamodel-8.14/
weight: 87
---

## 8.14.0

**릴리스 날짜: 2020년 9월 21일** 
 
### DomainModels

#### EntityCapabilities (Element)

* 공개 `countable` 속성을 추가하였습니다.

### Rest

#### ConsumedODataService (ModelUnit)

* `lastUpdated` 속성을 도입하였습니다. hen the OData service was last updated.
* `versionApiMockResults` 속성을 삭제하였습니다. Use the real payload from the Version API을(를) 사용하세요.
* `serviceId` 속성을 삭제하였습니다.

### Pages

#### PageClientAction (Element)

* `numberOfPagesToClose2` 속성을 도입하였습니다.
* `numberOfPagesToClose` 속성을 삭제하였습니다. Use the `numberOfPagesToClose2` property을(를) 사용하세요.

#### ClosePageClientAction (Element)

* `numberOfPagesToClose` 속성을 도입하였습니다.
* `numberOfPages` 속성을 삭제하였습니다. Use the `numberOfPagesToClose` property을(를) 사용하세요.

#### CreateObjectClientAction (Element)

* `numberOfPagesToClose2` 속성을 도입하였습니다.
* `numberOfPagesToClose` 속성을 삭제하였습니다. Use the `numberOfPagesToClose2` property을(를) 사용하세요.
