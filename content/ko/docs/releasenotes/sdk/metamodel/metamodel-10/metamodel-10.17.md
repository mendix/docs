---
title: "10.17"
url: /releasenotes/sdk/metamodel-10.17/
weight: 83
---

## 10.17.0

### Microflows

#### MicroflowParameterObject (Element)

* `isRequired` 속성을 도입하였습니다. 
* `defaultValue` 속성을 도입하였습니다. 

#### RestOperationCallAction (Element)

* `baseUrlParameterMapping` 속성을 도입하였습니다. Info: "To store parameter for base url."

#### RestParameterMapping (Element)

* 이 엘리먼트를 도입하였습니다. Info: "To configure body variable for REST Request."

### REST

#### ConsumedRestService (ModelUnit)

* `baseUrlParameter` 속성을 도입하였습니다. Info: "Base url parameter."

#### RestParameter (Element)

* 이 엘리먼트를 도입하였습니다. Info: "REST Document level parameter for base url."

### Pages

#### Page (ModelUnit)

* `variables` 속성을 도입하였습니다. 

#### PageVariable (Element)

* `localVariable` 속성을 도입하였습니다. 

#### LocalVariable (Element)

* 이 엘리먼트를 도입하였습니다. 

#### Snippet (ModelUnit)

* `variables` 속성을 도입하였습니다. 

#### BoundaryEvent (Element)

* `isInterrupting` 속성을 도입하였습니다. 
