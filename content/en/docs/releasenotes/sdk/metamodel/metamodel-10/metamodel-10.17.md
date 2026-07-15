---
title: "10.17"
url: /releasenotes/sdk/metamodel-10.17/
weight: 83
---

## 10.17.0

### Microflows

#### MicroflowParameterObject (Element)

* We introduced the `isRequired` property. 
* We introduced the `defaultValue` property. 

#### RestOperationCallAction (Element)

* We introduced the `baseUrlParameterMapping` property. Info: "To store parameter for base url."

#### RestParameterMapping (Element)

* We introduced this element. Info: "To configure body variable for REST Request."

### REST

#### ConsumedRestService (ModelUnit)

* We introduced the `baseUrlParameter` property. Info: "Base url parameter."

#### RestParameter (Element)

* We introduced this element. Info: "REST Document level parameter for base url."

### Pages

#### Page (ModelUnit)

* We introduced the `variables` property. 

#### PageVariable (Element)

* We introduced the `localVariable` property. 

#### LocalVariable (Element)

* We introduced this element. 

#### Snippet (ModelUnit)

* We introduced the `variables` property. 

#### BoundaryEvent (Element)

* We introduced the `isInterrupting` property. 
