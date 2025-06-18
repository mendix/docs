---
title: "11.0"
url: /releasenotes/sdk/metamodel-11.0/
weight: 78
---

## 11.0.0 Beta 2 

### Settings

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
* We introduced the `queryParameters` property. Info: "Query parameters."

#### QueryParameter (Element)
* We introduced this element. Info: "Query parameter name and value for REST operation."

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

### Workflows

#### Workflow (ModelUnit)
* We deleted the `workflowOnStateChangeEvent` property. 
* We deleted the `usertaskOnStateChangeEvent` property. 

