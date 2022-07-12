---
title: "8.3"
url: /releasenotes/sdk/metamodel-8.3/
weight: 98
---

## 8.3.0

**Release date: October 25th, 2019**

### CodeActions

#### CodeAction (ModelUnit)

* We changed the default value of the `actionReturnType` property.

#### VoidType (Element)

* We introduced this element.

### DomainModels

#### AssociationBase (Element)

* We introduced the `remoteSourceDocument` property.

### Microflows

#### JavaActionCallAction & MicroflowCallAction (Elements)

* We introduced the `outputVariableNameRuntime` property.

### Rest

#### PublishedODataService & PublishedRestService (ModelUnits)

* We introduced the `authenticationTypesRuntime` property for **Authentication types supported by this service**.

#### RestOperationParameter (Element)

* We Introduced the `description` property for **A description of the parameter, to be used in documentation**.

### CustomWidgets

#### CustomWidgetType (Element)

* We introduced the `helpUrl` property.

#### WidgetValue (Element)

* We introduced the `dataSource` property.

### Pages

#### BuildingBlock (ModelUnit)

* We introduced the `platform` property.

#### DivContainer (Element)

* We introduced the `onClickAction` property.

#### ClientTemplate (Element)

* We introduced the `fallback` property.

#### LayoutGrid (Element)

* We changed the default value of the `rows` property.

#### LayoutGridColumn (Element)

* We introduced the `tabletWeight`, `phoneWeight`, and `verticalAlignment` properties.

#### LayoutGridRow (Element)

* We changed the default value of the `columns` property.
* We introduced the `verticalAlignment`, `horizontalAlignment`, and `spacingBetweenColumns` properties.
