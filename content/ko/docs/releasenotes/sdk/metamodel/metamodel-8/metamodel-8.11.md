---
title: "8.11"
url: /releasenotes/sdk/metamodel-8.11/
weight: 90
---

## 8.11.0

**릴리스 날짜: 2020년 6월 30일**

### DomainModels

#### RemoteEntitySourceDocument (ModelUnit)

* 이 모델 유닛을 도입하였습니다.
* 공개 `icon` 속성을 추가하였습니다.

#### AssociationBase (Element)

* `capabilities` 속성을 도입하였습니다. hat an association is capable of.

#### AssociationCapabilities (Element)

* 이 엘리먼트를 도입하였습니다. what an association is capable of.

### Microflows

#### CloseFormAction (Element)

* `numberOfPagesToClose` 속성을 도입하였습니다.
* `numberOfPages` 속성을 삭제하였습니다.

#### ShowPageAction (Element)

* `numberOfPagesToClose` 속성을 도입하였습니다.

### Settings

#### WorkflowsProjectSettingsPart (Element)

* `userEntity` 속성을 도입하였습니다.

### Rest

#### ConsumedODataService (ModelUnit)

* `applicationId` 속성을 도입하였습니다. application ID of the published service that is being consumed.
* `entities` 속성을 삭제하였습니다. All information is now in the sources.

#### ODataRemoteEntitySource (Element) {#odataremoteentitysource}

* `entitySet` 속성을 도입하였습니다. entity set.
* `key` 속성을 도입하였습니다. entity's key.

#### ODataEntity (Element)

* 이 엘리먼트를 삭제하였습니다. The [ODataRemoteEntitySource](#odataremoteentitysource) element is now used instead.

#### ODataNavigationProperty (Element)

* 이 엘리먼트를 삭제하였습니다. The `ODataRemoteAssociationSource` element is used instead.

#### ODataAttribute (Element)

* 이 엘리먼트를 삭제하였습니다. The `ODataMappedValue` element is used instead.

### Pages

#### PageClientAction (Element)

* `numberOfPagesToClose` 속성을 도입하였습니다.

#### CreateObjectClientAction (Element)

* `numberOfPagesToClose` 속성을 도입하였습니다.

#### RetrievalQuery (Element)

* `usedAttributes` 속성을 도입하였습니다.

### Workflows

#### Workflow (ModelUnit)

* `subject` and `overviewPage` 속성을 도입하였습니다.

#### WorkflowTaskOutcome (Element)

* `caption` 속성을 도입하였습니다.

#### UserTask (Element)

* `userSource` 속성을 도입하였습니다.
* `userRole` 속성을 삭제하였습니다.

#### CallMicroflowTask, UserSource, and XPathBasedUserSource (Elements)

* 이 엘리먼트들을 도입하였습니다.
