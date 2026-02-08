---
title: "9.6"
url: /releasenotes/sdk/metamodel-9.6/
weight: 94
---

## 9.6.0

**릴리스 날짜: 2021년 9월 17일**

### CodeActions

#### MicroflowActionInfo (Element)

* `imageData` 속성을 도입하였습니다.

### DomainModels

#### MappedValue (Element)

* `updatableRuntime` 속성을 도입하였습니다.

#### IndirectEntityRef (Element)

* 이 엘리먼트를 공개하였습니다. 이는 유닛을 먼저 로드하지 않고도 사용할 수 있음을 의미합니다.
* `steps` 속성을 공개하였습니다.

#### MemberRef (Element)

* 이 엘리먼트를 공개하였습니다. 이는 유닛을 먼저 로드하지 않고도 사용할 수 있음을 의미합니다.
* `entityRef` 속성을 공개하였습니다.

#### EntityRef, DirectEntityRef, EntityRefStep, AttributeRef, and AssociationRef (Element)

* 이 엘리먼트들을 공개하였습니다. 이는 유닛을 먼저 로드하지 않고도 사용할 수 있음을 의미합니다.

### Microflows

#### SendExternalObject (Element)

* 이 엘리먼트를 도입하였습니다.

### Settings

#### RuntimeSettings (Element)

* `useSystemContextForBackgroundTasks` 속성을 도입하였습니다.

### Rest

#### ODataRemoteAssociationSource (Element)

* `updatableFromChild` 속성을 도입하였습니다. When you have a child object, use this to identify that you can set its associated parent.
* `updatableFromParent` 속성을 도입하였습니다. When you have a parent object, use this to identify that you can set its associated child.

#### ODataMappedValue (Element)

* `updatable` 속성을 도입하였습니다. Use this to identify that the attribute is updatable.

### Workflows

#### Workflow (ModelUnit)

* `parameter` and `workflowEntity` 속성을 도입하였습니다. 
* `contextEntity`, `allowedModuleRoles`, and `allowedUserRoles` 속성을 삭제하였습니다.

#### Parameter (Element)

* 이 엘리먼트를 도입하였습니다.

#### CallWorkflowActivity (Element)

* `parameterExpression` 속성을 도입하였습니다.

#### UserTask (Element)

* `userTaskEntity` 속성을 도입하였습니다.
* `allowedModuleRoles` and `allowedUserRoles` 속성을 삭제하였습니다.
