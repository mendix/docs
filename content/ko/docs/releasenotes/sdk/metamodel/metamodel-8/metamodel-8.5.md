---
title: "8.5"
url: /releasenotes/sdk/metamodel-8.5/
weight: 96
---

## 8.5.0

**릴리스 날짜: 2019년 12월 13일**

### CodeActions

#### StringTemplateParameterType (Element)

* 이 엘리먼트의 실험적 상태를 제거하였습니다.

### Microflows

#### StringTemplateParameterValue (Element)

* 이 엘리먼트의 실험적 상태를 제거하였습니다.

#### WebServiceCallAction (Element)

* `useRequestTimeOut`, `timeOutModel`, and `timeOutExpression` 속성의 기본값을 변경하였습니다.

#### RestCallAction (Element)

* `useRequestTimeOut`, `timeOutModel`, and `timeOutExpression` 속성의 기본값을 변경하였습니다.

### Projects

#### Module (StructuralUnit)

* `isReusableComponent` 속성을 도입하였습니다.

### Rest

#### ConsumedODataService (ModelUnit)

* `timeoutModel` 속성을 도입하였습니다. timeout for HTTP requests.
* `timeoutExpression` 속성을 도입하였습니다. timeout for HTTP requests.

### WebServices

#### DataAssociation (Element)

* `summary` 속성을 도입하였습니다. short summary of the association that is being exposed.
* `description` 속성을 도입하였습니다. long description of the association that is being exposed.

#### DataAttribute (Element)

* `summary` 속성을 도입하였습니다. short summary of the attribute that is being exposed.
* `description` 속성을 도입하였습니다. long description of the attribute that is being exposed.

#### SystemIdDataAttribute (Element)

* `summary` 속성을 도입하였습니다. short summary of the system ID that is being exposed.
* `description` 속성을 도입하였습니다. long description of the system ID that is being exposed.

### CustomWidgets

#### CustomWidgetDatabaseSource and CustomWidgetXPathSource (Elements)

* 이 엘리먼트들을 도입하였습니다.

### Pages

#### NativeLayoutContent (Element)

* `layoutType`, `sidebar`, and `sidebarWidgets` 속성을 도입하였습니다.
