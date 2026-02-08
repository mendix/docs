---
title: "9.11"
url: /releasenotes/sdk/metamodel-9.11/
weight: 89
---

## 9.11.0

**릴리스 날짜: 2022년 2월 16일**

### DomainModels

#### MappedValue (Element)

* `creatableRuntime` 속성을 도입하였습니다. 

#### RemoteAssociationSource (Element)

* `creatableFromParentRuntime` and `creatableFromChildRuntime` 속성을 도입하였습니다.

### Projects

#### Document (ModelUnit)

* `excluded` 속성을 공개하였습니다. 이는 유닛을 먼저 로드하지 않고도 사용할 수 있음을 의미합니다.

### Settings

#### RuntimeSettings (Element)

* `bcryptCost` 속성을 도입하였습니다. 

### Rest

#### PublishedRestResource (Element)

* `updateMode` 속성을 도입하였습니다. `ChangeMode` that defines the update functionality.
* `insertMode` 속성을 도입하였습니다. `ChangeMode` that defines the insert functionality.
* `deleteMode` 속성을 도입하였습니다. `ChangeMode` that defines the delete functionality.
* ``updatable` and `updateMicroflow` properties. This has been replaced by the `updateMode` 속성을 삭제하였습니다.
* `insertable` property. This has been replaced by the `insertMode` 속성을 삭제하였습니다.
* `deletable` property. This has been replaced by the `deleteMode`` 속성을 삭제하였습니다.

#### ChangeMode (Element)

* 이 엘리먼트를 도입하였습니다. details about insert, update, or delete functionality.

#### ChangeNotSupported (Element)

* 이 엘리먼트를 도입하였습니다. the insert, update, or delete functionality that is not supported for this resource.

#### ChangeSource (Element)

* 이 엘리먼트를 도입하였습니다. the default insert, update, or delete functionality that changes the source,

#### CallMicroflowToChange (Element)

* 이 엘리먼트를 도입하였습니다. calling a microflow that implements the insert, update, or delete functionality.

#### ODataRemoteEntitySource (Element)

* `creatable` 속성을 도입하였습니다. nswering whether new objects can be created.
* `deletable` 속성을 도입하였습니다. nswering whether existing objects can be deleted.

#### ODataRemoteAssociationSource (Element)

* `creatableFromChild` 속성을 도입하였습니다. hen you create a child object and need to answer whether you can specify its associated parent.
* `creatableFromParent` 속성을 도입하였습니다. hen you create a parent object and need to answer whether you can specify its associated child.

#### ODataMappedValue (Element)

* `representsStream` 속성을 도입하였습니다. nswering whether the attribute represents the stream.
* `creatable` 속성을 도입하였습니다. nswering whether the attribute can be sent when the object is new.

### WebServices

#### DataMember (Element)

* `isWritable` 속성을 도입하였습니다. nswering whether it is possible to change this member through the exposed service.

### Pages

#### ScrollContainer (Element)

* `nativeHideScrollbars` 속성을 도입하였습니다. 

### Workflows

#### Workflow (ModelUnit)

* `adminPage` 속성을 도입하였습니다.
* `overviewPage` 속성을 삭제하였습니다. 

#### PageReference and PageParameterMapping (Elements)

* 이 엘리먼트들을 도입하였습니다. 

#### UserTask (Element)

* `taskPage` and `autoAssignSingleTargetUser` 속성을 도입하였습니다. 
* `page` 속성을 삭제하였습니다. 
