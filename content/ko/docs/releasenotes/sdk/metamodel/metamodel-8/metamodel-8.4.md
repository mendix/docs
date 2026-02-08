---
title: "8.4"
url: /releasenotes/sdk/metamodel-8.4/
weight: 97
---

## 8.4.0

**릴리스 날짜: 2019년 11월 22일**

### CodeActions

#### StringTemplateParameterType (Element)

* 이 엘리먼트를 도입하였습니다.

### JavaScriptActions

#### NanoflowJavaScriptActionParameterType (Element)

* 이 엘리먼트를 도입하였습니다.

### Microflows

#### JavaActionParameterMapping (Element)

* `argumentRuntime` 속성을 삭제하였습니다.

#### JavaScriptActionCallAction and JavaScriptActionParameterMapping (Elements)

* 이 엘리먼트들의 실험적 상태를 제거하였습니다.

#### StringTemplateParameterValue and PushToClientAction (Elements)

* 이 엘리먼트들을 도입하였습니다.

#### ExpressionBasedCodeActionParameterValue (Element)

* `valueExpression` 속성을 도입하였습니다.

### Nanoflows

#### NanoflowParameterValue (Element)

* 이 엘리먼트를 도입하였습니다.

### Rest

#### PublishedODataService (ModelUnit)

* `summary` 속성을 도입하였습니다. one-line summary description of the service.
* `description` 속성을 도입하였습니다. multi-line description of the service.

#### ConsumedODataService (ModelUnit)

* `headersMicroflow` 속성을 도입하였습니다. microflow that provides headers to pass to the service.

### CustomWidgets

#### WidgetValueType (Element)

* `dataSourceProperty` 속성을 도입하였습니다.

### Navigation

#### NavigationDocument (ModelUnit)

* `schemas` 속성을 삭제하였습니다.

### Pages

#### BuildingBlock (ModelUnit)

* 공개 `platform` 속성을 추가하였습니다.

#### MicroflowParameterMapping and NanoflowParameterMapping (Elements)

* `variable` 속성을 도입하였습니다.
* `widget` 속성을 삭제하였습니다. Use the `variable` property을(를) 사용하세요.
* `useAllPages` 속성을 삭제하였습니다. Use `variable`을(를) 사용하세요.

#### PageVariable (Element)

* 이 엘리먼트를 도입하였습니다.

#### Snippet (ModelUnit)

* 공개 `type` 속성을 추가하였습니다.

#### RetrievalSchema (Element)

* 이 엘리먼트를 삭제하였습니다.

#### RetrievalQuery (Element)

* `widgetName` and `usedAssociations` 속성을 도입하였습니다.
* `schemaId` 속성을 삭제하였습니다.
