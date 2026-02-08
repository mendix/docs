---
title: "8.3"
url: /releasenotes/sdk/metamodel-8.3/
weight: 98
---

## 8.3.0

**릴리스 날짜: 2019년 10월 25일**

### CodeActions

#### CodeAction (ModelUnit)

* `actionReturnType` 속성의 기본값을 변경하였습니다.

#### VoidType (Element)

* 이 엘리먼트를 도입하였습니다.

### DomainModels

#### AssociationBase (Element)

* `remoteSourceDocument` 속성을 도입하였습니다.

### Microflows

#### JavaActionCallAction and MicroflowCallAction (Elements)

* `outputVariableNameRuntime` 속성을 도입하였습니다.

### Rest

#### PublishedODataService and PublishedRestService (ModelUnits)

* `authenticationTypesRuntime` 속성을 도입하였습니다. 이 속성은 **Authentication types supported by this service**.

#### RestOperationParameter (Element)

* `description` 속성을 도입하였습니다. **A description of the parameter, to be used in documentation**.

### CustomWidgets

#### CustomWidgetType (Element)

* `helpUrl` 속성을 도입하였습니다.

#### WidgetValue (Element)

* `dataSource` 속성을 도입하였습니다.

### Pages

#### BuildingBlock (ModelUnit)

* `platform` 속성을 도입하였습니다.

#### DivContainer (Element)

* `onClickAction` 속성을 도입하였습니다.

#### ClientTemplate (Element)

* `fallback` 속성을 도입하였습니다.

#### LayoutGrid (Element)

* `rows` 속성의 기본값을 변경하였습니다.

#### LayoutGridColumn (Element)

* `tabletWeight`, `phoneWeight`, and `verticalAlignment` 속성을 도입하였습니다.

#### LayoutGridRow (Element)

* `columns` 속성의 기본값을 변경하였습니다.
* `verticalAlignment`, `horizontalAlignment`, and `spacingBetweenColumns` 속성을 도입하였습니다.
