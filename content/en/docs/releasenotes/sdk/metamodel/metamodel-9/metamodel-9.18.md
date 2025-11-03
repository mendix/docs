---
title: "9.18"
url: /releasenotes/sdk/metamodel-9.18/
weight: 82
---

## 9.18.0

**Release date: September 19, 2022**

### Microflows

#### MLModelCallAction (Element)

* We introduced the `mlMappingDocument` and `inputVariableName` properties.
* We deleted the `modelCall` property. 

#### MLModelCall and MLModelCallParameterMapping (Elements)

* We deleted these elements. 

#### ShowPageAction (Element)

* We deleted the `passedObjectVariableName` property. Use the 'pageSettings' property with the 'parameterMappings' property instead.

### WebServices

#### DataAttribute (Element)

* We introduced the `filterable` and `sortable` properties.

### Navigation

#### NativeNavigationProfile (Element)

* We introduced the `encryptionDbEnabled` property. 

### Pages

#### RuntimeOperation (Element)

* We introduced the `allowedUserRoles` property. 

### Workflows

#### Parameter (Element)

* We introduced the `name` property. 

#### CallWorkflowActivity (Element)

* We introduced the `parameterMappings` and `executeAsync` properties.
* We deleted the `parameterExpression` property. 

#### WorkflowCallParameterMapping (Element)

* We introduced this element. 
