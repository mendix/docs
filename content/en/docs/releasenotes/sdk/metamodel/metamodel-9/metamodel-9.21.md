---
title: "9.21"
parent: "metamodel-9"
---

## 9.21.0

### Microflows

#### LockWorkflowAction (Element)
* We introduced this element. 

#### UnlockWorkflowAction (Element)
* We introduced this element. 

### Rest

#### PublishedODataService (ModelUnit)
* We introduced the `enumerations` property. Info: "The enumerations exposed in this service"

#### PublishedODataEnumeration (Element)
* We introduced this element. Info: "An enumeration published in an OData service"

#### PublishedODataEnumerationValue (Element)
* We introduced this element. Info: "An enumeration value published in an OData service"

#### ODataRemoteEntitySource (Element)
* We introduced the `topSupported` property. Info: "Supports the $top query option?"
* We introduced the `skipSupported` property. Info: "Supports the $skip query option?"

### WebServices

#### DataAttribute (Element)
* We introduced the `enumerationAsString` property. Info: "(For OData services) indicates whether an enumeration should be published as a string (true) or an enumeration (false)"

### Pages

#### PageVariable (Element)
* We introduced the `snippetParameter` property. 

#### DataViewSource (Element)
* We introduced the `snippetParameter` property. 

#### Snippet (ModelUnit)
* We deleted the `entity` property. Info: "Use property 'parameters' instead"
* We introduced the `parameters` property. 

#### SnippetParameter (Element)
* We introduced this element. 

#### SnippetCall (Element)
* We introduced the `parameterMappings` property. 

#### SnippetParameterMapping (Element)
* We introduced this element. 

#### RetrievalQuery (Element)
* We deleted the `allowedUserRoles` property. 
* We introduced the `allowedUserRoleSets` property. 

#### UserRoleSet (Element)
* We introduced this element. 

#### RuntimeOperation (Element)
* We deleted the `allowedUserRoles` property. 
* We introduced the `allowedUserRoleSets` property. 

This page has been generated automatically.
