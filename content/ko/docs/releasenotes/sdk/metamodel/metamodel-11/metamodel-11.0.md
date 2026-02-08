---
title: "11.0"
url: /releasenotes/sdk/metamodel-11.0/
weight: 78
---

## 11.0.0

### Microflows

#### RestOperationCallAction (Element)

* `queryParameterMappings` 속성을 도입하였습니다. Info: "To store query parameters custom value for each REST operation call action".
* `queryParameterMappingsRuntime` 속성을 도입하였습니다. Info: "To configure the query parameters relevant for runtime."

#### QueryParameterMapping (Element)

* 이 엘리먼트를 도입하였습니다. Info: "To store the custom query parameter value."

### Projects

#### Module (StructuralUnit)

* `appStorePackageId` 속성을 삭제하였습니다. 
* `appStorePackageIdString` 속성을 도입하였습니다. 

### Settings

#### IntegrationProjectSettingsPart (Element)

* `obsoleteEnableUrlEncoding` 속성을 삭제하였습니다. Info: "Encoding full url is no longer supported."

#### WebUIProjectSettingsPart (Element)

* `useOptimizedClient` 속성의 기본값을 변경하였습니다.

#### WorkflowsProjectSettingsPart (Element)

* `workflowOnStateChangeEvent` 속성을 삭제하였습니다. 
* `usertaskOnStateChangeEvent` 속성을 삭제하였습니다. 

### DatabaseConnector

#### QueryParameter (Element)

* `tableMapping` 속성을 도입하였습니다. Info: "Table mapping for a parameter to support REF CURSOR, custom types."

### Rest

#### RestOperation (Element)

* `queryParameters` 속성을 도입하였습니다. Info: "Query parameters for the HTTP request."

#### QueryParameter (Element)

* 이 엘리먼트를 도입하였습니다. Info: "Store name and value for query in REST operation."

#### QueryParameterUsage (Element)

* 이 엘리먼트를 도입하였습니다. Info: "Required query parameter usage."

#### RequiredQueryParameterUsage (Element)

* 이 엘리먼트를 도입하였습니다. Info: "Required query parameter usage."

#### OptionalQueryParameterUsage (Element)

* 이 엘리먼트를 도입하였습니다. Info: "Optional query parameter usage."

#### JsonBody (Element)

* 이 엘리먼트를 도입하였습니다. Info: "JSON version of the request body."

### Navigation

#### NativeNavigationProfile (Element)

* `networkTimeoutMs` 속성을 도입하였습니다. 

### Pages

#### PageVariable (Element)

* `subKey` 속성을 도입하였습니다. 

### Workflows

#### Workflow (ModelUnit)

* `workflowOnStateChangeEvent` 속성을 삭제하였습니다. 
* `usertaskOnStateChangeEvent` 속성을 삭제하였습니다. 
