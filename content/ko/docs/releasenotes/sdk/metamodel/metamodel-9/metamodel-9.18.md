---
title: "9.18"
url: /releasenotes/sdk/metamodel-9.18/
weight: 82
---

## 9.18.0

**릴리스 날짜: 2022년 9월 19일**

### Microflows

#### MLModelCallAction (Element)

* `mlMappingDocument` and `inputVariableName` 속성을 도입하였습니다.
* `modelCall` 속성을 삭제하였습니다. 

#### MLModelCall and MLModelCallParameterMapping (Elements)

* 이 엘리먼트들을 삭제하였습니다. 

#### ShowPageAction (Element)

* `passedObjectVariableName` 속성을 삭제하였습니다. Use the 'pageSettings' property with the 'parameterMappings' property을(를) 사용하세요.

### WebServices

#### DataAttribute (Element)

* `filterable` and `sortable` 속성을 도입하였습니다.

### Navigation

#### NativeNavigationProfile (Element)

* `encryptionDbEnabled` 속성을 도입하였습니다. 

### Pages

#### RuntimeOperation (Element)

* `allowedUserRoles` 속성을 도입하였습니다. 

### Workflows

#### Parameter (Element)

* `name` 속성을 도입하였습니다. 

#### CallWorkflowActivity (Element)

* `parameterMappings` and `executeAsync` 속성을 도입하였습니다.
* `parameterExpression` 속성을 삭제하였습니다. 

#### WorkflowCallParameterMapping (Element)

* 이 엘리먼트를 도입하였습니다. 
