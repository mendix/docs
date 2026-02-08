---
title: "8.9"
url: /releasenotes/sdk/metamodel-8.9/
weight: 92
---

## 8.9.0

**릴리스 날짜: 2020년 4월 30일**

### DomainModels

#### NoGeneralization (Element)

* `key` 속성을 도입하였습니다. remote key.

#### EntityKey (Element)

* 이 엘리먼트를 도입하였습니다. the (remote) key of an entity.

#### EntityKeyPart (Element)

* 이 엘리먼트를 도입하였습니다. a part of the (remote) key of an entity.

### Microflows

#### CloseFormAction (Element)

* `numberOfPages` 속성을 도입하였습니다.

#### WorkflowCallAction, SetWorkflowActivityOutcomeAction, and OpenUserTaskAction (Elements)

* 이 엘리먼트들을 도입하였습니다.

### Rest

#### ConsumedODataService (ModelUnit)

* 공개 `entities` 속성을 추가하였습니다.

#### ODataEntity (Element)

* 이 공개 엘리먼트를 추가하였습니다.
* `keyNames` 속성을 삭제하였습니다.
* `key` 속성을 도입하였습니다. key of the OData entity.

#### ODataKey (Element)

* 이 엘리먼트를 도입하였습니다. the key of an OData entity.

#### ODataKeyPart (Element)

* 이 엘리먼트를 도입하였습니다. a part of the key of an OData entity.

### Navigation

#### OfflineEntityConfig (Element)

* `downloadMode` 속성을 도입하였습니다.
* `shouldDownload` 속성을 삭제하였습니다.

### Pages

#### ClosePageClientAction (Element)

* `numberOfPages` 속성을 도입하였습니다.

### Workflows

#### Workflow (ModelUnit)

* `context` 속성을 삭제하였습니다.
* `contextEntity`, `title`, and `description` 속성을 도입하였습니다.
* 공개 `activities` 속성을 추가하였습니다.

#### WorkflowActivityOutcome (Element)

* 이 공개 엘리먼트를 추가하였습니다.
* 공개 `name` 속성을 추가하였습니다.

#### WorkflowActivity (Element)

* 이 공개 엘리먼트를 추가하였습니다.
* `name` 속성을 도입하였습니다.
* 공개 `possibleOutcomes` 속성을 추가하였습니다.

#### StartWorkflowActivity (Element)

* 이 공개 엘리먼트를 추가하였습니다.

#### EndWorkflowActivity (Element)

* 이 공개 엘리먼트를 추가하였습니다.

#### UserTask (Element)

* 이 공개 엘리먼트를 추가하였습니다.
* `taskCaption` and `taskDescription` 속성을 삭제하였습니다.
* `subject`, `description`, and `userRole` 속성을 도입하였습니다.
