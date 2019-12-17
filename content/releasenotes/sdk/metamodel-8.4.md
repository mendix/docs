---
title: "8.4"
parent: "metamodel"
#When updating, remember to update the Latest Mendix Releases file
---

These are the release notes for the [Mendix Metamodel](/apidocs-mxsdk/mxsdk/understanding-the-metamodel) version 8.4.

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

* We removed experimental status of these elements.

#### StringTemplateParameterValue (Element)

* We introduced this element.

#### ExpressionBasedCodeActionParameterValue (Element)

* We introduced the `valueExpression` property.

#### PushToClientAction (Element)

* We introduced this element.

### Nanoflows

#### NanoflowParameterValue (Element)

* We introduced this element.

### Rest

#### PublishedODataService (ModelUnit)

* We introduced the `summary` property as a one-line summary description of the service.
* We ntroduced the `description` property as a multi-line description of the service.

#### ConsumedODataService (ModelUnit)

* We introduced the `headersMicroflow` property as a microflow that provides headers to pass to the service.

### CustomWidgets

#### WidgetValueType (Element)

* We introduced tghe `dataSourceProperty` property.

### Navigation

#### NavigationDocument (ModelUnit)

* We deleted the `schemas` property.

### Pages

#### BuildingBlock (ModelUnit)

* We added the public `platform` property.

#### MicroflowParameterMapping (Element)

* We introduced the `variable` property,
* We deleted the `widget` property. Use the `variable` property instead.
* We deleted the `useAllPages` property. Use `variable` instead.

#### NanoflowParameterMapping (Element)

* We introduced the `variable` property.
* We deleted the `widget` property. Use `variable` instead.
* We deleted the `useAllPages` property. Use `variable` instead.

#### PageVariable (Element)

* We introduced this element.

#### Snippet (ModelUnit)

* We added the `type` property as public.

#### RetrievalSchema (Element)

* We deleted this element.

#### RetrievalQuery (Element)

* We ntroduced the `widgetName` and `usedAssociations` prorperties.
* We deleted the `schemaId` property.
