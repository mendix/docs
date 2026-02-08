---
title: "9.19"
url: /releasenotes/sdk/metamodel-9.19/
weight: 81
---

## 9.19.0

**릴리스 날짜: 2022년 10월 19일**

### Microflows

#### CallExternalAction (Element)

* 이 엘리먼트를 도입하였습니다. calling an OData action.

#### SetTaskOutcomeAction (Element)

* `outcomeValue` 속성을 도입하였습니다. 
* `outcome` 속성을 삭제하였습니다. 

#### OpenUserTaskAction (Element)

* `assignOnOpen` and `openWhenAssigned`  속성을 도입하였습니다. 

### Rest

#### PublishedODataService (ModelUnit)

* `microflows` 속성을 도입하였습니다. microflows exposed in this service.

#### CallMicroflowToRead (Element)

* `microflow` 속성을 선택 사항으로 변경하였습니다.
* `microflowRuntime` 속성을 도입하였습니다. Mendix Runtime 속성을 도입하였습니다. microflow.

#### QueryOptions (Element)

* `topSupported` 속성을 도입하였습니다. ndicating whether this resource supports the `$top` parameter.
* `skipSupported` 속성을 도입하였습니다. ndicating whether this resource supports the `$skip` parameter.

#### PublishedODataMicroflow (Element)

* 이 엘리먼트를 도입하였습니다. a microflow published in an OData service.

### Pages

#### SetTaskOutcomeClientAction (Element)

* `outcomeValue` 속성을 도입하였습니다.
* `outcome` 속성을 삭제하였습니다.

### Workflows

#### UserTaskOutcome (Element)

* `value` 속성을 도입하였습니다. 
* `name` and `caption` 속성을 삭제하였습니다.
