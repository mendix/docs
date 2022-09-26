---
title: "9.18"
parent: "metamodel-9"
---

## 9.18.0

### Microflows

#### MLModelCallAction (Element)
* We deleted the `modelCall` property. 
* We introduced the `mlMappingDocument` property. 
* We introduced the `inputVariableName` property. 

#### MLModelCall (Element)
* We deleted this element. 

#### MLModelCallParameterMapping (Element)
* We deleted this element. 

#### ShowPageAction (Element)
* We deleted the `passedObjectVariableName` property. Info: "Use property 'pageSettings' with property 'parameterMappings' instead"

### WebServices

#### DataAttribute (Element)
* We introduced the `filterable` property. Info: "(For OData services) can clients filter on this attribute?"
* We introduced the `sortable` property. Info: "(For OData services) can clients order by this attribute?"

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
* We deleted the `parameterExpression` property. 
* We introduced the `parameterMappings` property. 
* We introduced the `executeAsync` property. 

#### WorkflowCallParameterMapping (Element)
* We introduced this element. 

This page has been generated automatically.
