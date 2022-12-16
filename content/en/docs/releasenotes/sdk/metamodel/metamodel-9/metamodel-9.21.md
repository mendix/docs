---
title: "9.21"
url: /releasenotes/sdk/metamodel-9.21/
weight: 79
---

## 9.21.0

**Release date: December 13th, 2022**

### Microflows

#### LockWorkflowAction & UnlockWorkflowAction (Elements)

* We introduced these elements. 

### Rest

#### PublishedODataService (ModelUnit)

* We introduced the `enumerations` property for the enumerations exposed in an OData service.

#### PublishedODataEnumeration (Element)

* We introduced this element for an enumeration published in an OData service.

#### PublishedODataEnumerationValue (Element)

* We introduced this element for an enumeration value published in an OData service.

#### ODataRemoteEntitySource (Element)

* We introduced the `topSupported` property to support `$top query option?`.
* We introduced the `skipSupported` property to support `$skip query option?`.

### WebServices

#### DataAttribute (Element)

* We introduced the `enumerationAsString` property for OData services to indicate whether an enumeration should be published as a string (`true`) or an enumeration (`false`).

### Pages

#### PageVariable & DataViewSource (Elements)

* We introduced the `snippetParameter` property. 

#### Snippet (ModelUnit)

* We introduced the `parameters` property. 
* We deleted the `entity` property. Use the 'parameters' property instead.

#### SnippetParameter (Element)

* We introduced this element. 

#### SnippetCall (Element)

* We introduced the `parameterMappings` property. 

#### SnippetParameterMapping (Element)

* We introduced this element. 

#### RetrievalQuery (Element)

* We introduced the `allowedUserRoleSets` property. 
* We deleted the `allowedUserRoles` property. 

#### UserRoleSet (Element)

* We introduced this element. 

#### RuntimeOperation (Element)

* We introduced the `allowedUserRoleSets` property. 
* We deleted the `allowedUserRoles` property. 
