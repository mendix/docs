---
title: "9.21"
url: /releasenotes/sdk/metamodel-9.21/
weight: 79
---

## 9.21.0

**릴리스 날짜: 2022년 12월 13일**

### Microflows

#### LockWorkflowAction & UnlockWorkflowAction (Elements)

* 이 엘리먼트들을 도입하였습니다. 

### Rest

#### PublishedODataService (ModelUnit)

* `enumerations` 속성을 도입하였습니다. enumerations exposed in an OData service.

#### PublishedODataEnumeration (Element)

* 이 엘리먼트를 도입하였습니다. an enumeration published in an OData service.

#### PublishedODataEnumerationValue (Element)

* 이 엘리먼트를 도입하였습니다. an enumeration value published in an OData service.

#### ODataRemoteEntitySource (Element)

* `topSupported` property to support `$top query option?`.
* `skipSupported` property to support `$skip query option?`.

### WebServices

#### DataAttribute (Element)

* `enumerationAsString` 속성을 도입하였습니다. 이 속성은 OData services to indicate whether an enumeration should be published as a string (`true`) or an enumeration (`false`).

### Pages

#### SnippetParameter, SnippetParameterMapping & UserRoleSet (Elements)

* 이 엘리먼트들을 도입하였습니다. 

#### PageVariable & DataViewSource (Elements)

* `snippetParameter` 속성을 도입하였습니다. 

#### Snippet (ModelUnit)

* `parameters` 속성을 도입하였습니다. 
* `entity` 속성을 삭제하였습니다. Use the `parameters` property을(를) 사용하세요.

#### SnippetCall (Element)

* `parameterMappings` 속성을 도입하였습니다. 

#### RetrievalQuery (Element)

* `allowedUserRoleSets` 속성을 도입하였습니다. 
* `allowedUserRoles` 속성을 삭제하였습니다. 

#### RuntimeOperation (Element)

* `allowedUserRoleSets` 속성을 도입하였습니다. 
* `allowedUserRoles` 속성을 삭제하였습니다. 
