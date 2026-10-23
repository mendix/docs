---
title: "11.0"
url: /releasenotes/sdk/metamodel-11.0/
weight: 78
---

## 11.0.0

### Microflows

#### RestOperationCallAction (Element)

* We introduced the `queryParameterMappings` property. Info: "To store query parameters custom value for each REST operation call action".
* We introduced the `queryParameterMappingsRuntime` property. Info: "To configure the query parameters relevant for runtime."

#### QueryParameterMapping (Element)

* We introduced this element. Info: "To store the custom query parameter value."

### Projects

#### Module (StructuralUnit)

* We deleted the `appStorePackageId` property. 
* We introduced the `appStorePackageIdString` property. 

### Settings

#### IntegrationProjectSettingsPart (Element)

* We deleted the `obsoleteEnableUrlEncoding` property. Info: "Encoding full url is no longer supported."

#### WebUIProjectSettingsPart (Element)

* We changed the default value of the `useOptimizedClient` property.

#### WorkflowsProjectSettingsPart (Element)

* We deleted the `workflowOnStateChangeEvent` property. 
* We deleted the `usertaskOnStateChangeEvent` property. 

### DatabaseConnector

#### QueryParameter (Element)

* We introduced the `tableMapping` property. Info: "Table mapping for a parameter to support REF CURSOR, custom types."

### Rest

#### RestOperation (Element)

* We introduced the `queryParameters` property. Info: "Query parameters for the HTTP request."

#### QueryParameter (Element)

* We introduced this element. Info: "Store name and value for query in REST operation."

#### QueryParameterUsage (Element)

* We introduced this element. Info: "Required query parameter usage."

#### RequiredQueryParameterUsage (Element)

* We introduced this element. Info: "Required query parameter usage."

#### OptionalQueryParameterUsage (Element)

* We introduced this element. Info: "Optional query parameter usage."

#### JsonBody (Element)

* We introduced this element. Info: "JSON version of the request body."

### Navigation

#### NativeNavigationProfile (Element)

* We introduced the `networkTimeoutMs` property. 

### Pages

#### PageVariable (Element)

* We introduced the `subKey` property. 

### Workflows

#### Workflow (ModelUnit)

* We deleted the `workflowOnStateChangeEvent` property. 
* We deleted the `usertaskOnStateChangeEvent` property. 
