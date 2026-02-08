---
title: "9.7"
url: /releasenotes/sdk/metamodel-9.7/
weight: 93
---

## 9.7.0

**릴리스 날짜: 2021년 10월 18일**

### DomainModels

#### RemoteAssociationSource (Element)

* `updatableFromParentRuntime` 속성을 도입하였습니다. 
* `updatableFromChildRuntime` 속성을 도입하였습니다. 

### Microflows

#### SendExternalObject (Element)

* `refreshInClient` property to check whether the user wants to refresh the data in the client.

#### MeterAction, GaugeMeterAction, CounterMeterAction, IncrementCounterMeterAction, MeterTagMapping (Elements)

* 이 엘리먼트들을 도입하였습니다.

### Security

#### PasswordPolicySettings (Element)

* `minimumLength` 속성의 기본값을 변경하였습니다.

### Pages

#### PageSettings (Element)

* `parameterMappings` 속성을 도입하였습니다. 

#### PageParameterMapping (Element)

* 이 엘리먼트를 도입하였습니다. 

### Workflows

#### Workflow (ModelUnit)

* `workflowType` 속성을 도입하였습니다. 
* `workflowEntity` 속성을 삭제하였습니다. 

#### WorkflowType (Element)

* 이 엘리먼트를 도입하였습니다. 
