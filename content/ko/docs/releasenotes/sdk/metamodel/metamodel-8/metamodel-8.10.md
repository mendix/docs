---
title: "8.10"
url: /releasenotes/sdk/metamodel-8.10/
weight: 91
---

## 8.10.0

**릴리스 날짜: 2020년 5월 26일**

### DomainModels

#### Entity (Element)

* `source` 속성을 도입하였습니다. replacement for the `remoteSource`, `remoteSourceDocument`, and `isRemote` 속성을 도입하였습니다.
* `remoteSource`, `remoteSourceDocument`, and `isRemote` 속성을 삭제하였습니다. 

#### AssociationBase (Element)

* `source` 속성을 도입하였습니다.
* `remoteSourceDocument` 속성을 삭제하였습니다. This information is now stored in `ODataRemoteAssociationSource`.

#### EntitySource, RemoteEntitySource, MappedValue, AssociationSource, and RemoteAssociationSource (Elements)

* 이 엘리먼트들을 도입하였습니다.

#### RemoteEntitySourceDocument (ModelUnit)

* 이 모델 유닛을 도입하였습니다.
* `description` 속성을 도입하였습니다. multi-line description of the remote source.
* `catalogUrl` 속성을 도입하였습니다. URL to a page that gives more information about the remote source.
* `icon` 속성을 도입하였습니다. custom icon of the source document.

### Microflows

#### SynchronizeAction (Element)

* `type` and `variableNames` 속성을 도입하였습니다.

#### WorkflowCallAction, SetTaskOutcomeAction, and OpenUserTaskAction (Element)

* 이 엘리먼트들을 도입하였습니다.

### Rest

#### ConsumedODataService (ModelUnit)

* 공개 `serviceName` and `^version` properties.

#### ODataRemoteEntitySource (Element)

* We introduced this element, which indicates that this entity is from an OData source.

#### ODataRemoteAssociationSource (Element)

* We introduced this element, which indicates that this association is from an OData source.

#### ODataMappedValue (Element)

* We introduced this element, which indicates that the value of this attribute is from an OData source.

#### ODataEntity (Element)

* 공개 `name` 속성을 추가하였습니다.
* `entity` property, which is no longer needed, because now an entity knows its source.

#### ODataNavigationProperty (Element)

* `association` property, because associations now know their remote names.
* `thisSideIsParent` property, which is no longer needed, as this can be deduced in `ODataRemoteAssociationSource`.

#### ODataAttribute (Element)

* `attribute` property, which is no longer needed, because now attributes know their remote name.

### Pages

#### TextBox and TextArea (Elements)

* `autocomplete` 속성을 도입하였습니다.

#### GroupBox (Element)

* `headerMode` 속성을 도입하였습니다.

### Workflows

#### WorkflowActivity, Flow, FlowValue, NoValue TaskOutcomeValue, StartWorkflowActivity, EndWorkflowActivity, WorkflowTask, WorkflowTaskOutcome, and UserTask (Elements)

* 이 엘리먼트들을 도입하였습니다.

#### Workflow (ModelUnit)

* 이 모델 유닛을 도입하였습니다.
