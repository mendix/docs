---
title: "8.4"
parent: "metamodel-8"
---

## 8.4.0

**Release date: November 22nd, 2019**

### CodeActions

#### StringTemplateParameterType (Element)

* We introduced this element.

### JavaScriptActions

#### NanoflowJavaScriptActionParameterType (Element)

* We introduced this element.

### Microflows

#### JavaActionParameterMapping (Element)

* We deleted the `argumentRuntime` property.

#### JavaScriptActionCallAction & JavaScriptActionParameterMapping (Elements)

* We removed the experimental status of these elements.

#### StringTemplateParameterValue & PushToClientAction (Elements)

* We introduced these elements.

#### ExpressionBasedCodeActionParameterValue (Element)

* We introduced the `valueExpression` property.

### Nanoflows

#### NanoflowParameterValue (Element)

* We introduced this element.

### Rest

#### PublishedODataService (ModelUnit)

* We introduced the `summary` property as a one-line summary description of the service.
* We introduced the `description` property as a multi-line description of the service.

#### ConsumedODataService (ModelUnit)

* We introduced the `headersMicroflow` property as a microflow that provides headers to pass to the service.

### CustomWidgets

#### WidgetValueType (Element)

* We introduced the `dataSourceProperty` property.

### Navigation

#### NavigationDocument (ModelUnit)

* We deleted the `schemas` property.

### Pages

#### BuildingBlock (ModelUnit)

* We added the public `platform` property.

#### MicroflowParameterMapping & NanoflowParameterMapping (Elements)

* We introduced the `variable` property.
* We deleted the `widget` property. Use the `variable` property instead.
* We deleted the `useAllPages` property. Use `variable` instead.

#### PageVariable (Element)

* We introduced this element.

#### Snippet (ModelUnit)

* We added the public `type` property.

#### RetrievalSchema (Element)

* We deleted this element.

#### RetrievalQuery (Element)

* We introduced the `widgetName` and `usedAssociations` properties.
* We deleted the `schemaId` property.
