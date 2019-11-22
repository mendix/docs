---
title: "8.4"
parent: "metamodel"
#When updating, remember to update the Latest Mendix Releases file
---

These are the release notes for the [Mendix Metamodel](/apidocs-mxsdk/mxsdk/understanding-the-metamodel) version 8.4.

## 8.4.0

**Release date: November 22nd, 2019**

## CodeActions

### StringTemplateParameterType (Element)

* Introduced.

## JavaScriptActions

### NanoflowJavaScriptActionParameterType (Element)

* Introduced.

## Microflows

### JavaActionParameterMapping (Element)

#### Property 'argumentRuntime'

* Deleted.

### JavaScriptActionCallAction (Element)

* Removed experimental status.

### JavaScriptActionParameterMapping (Element)

* Removed experimental status.

### StringTemplateParameterValue (Element)

* Introduced.

### ExpressionBasedCodeActionParameterValue (Element)

#### Property 'valueExpression'

* Introduced.

### PushToClientAction (Element)

* Introduced.

## Nanoflows

### NanoflowParameterValue (Element)

* Introduced.

## Rest

### PublishedODataService (ModelUnit)

#### Property 'summary'

* Introduced as a one-line summary description of the service.

#### Property 'description'

* Introduced as a multi-line description of the service.

### ConsumedODataService (ModelUnit)

#### Property 'headersMicroflow'

* Introduced as a microflow that provides headers to pass to the service.

## CustomWidgets

### WidgetValueType (Element)

#### Property 'dataSourceProperty'

* Introduced.

## Navigation

### NavigationDocument (ModelUnit)

#### Property 'schemas'

* Deleted.

## Pages

### BuildingBlock (ModelUnit)

#### Property 'platform'

* Added public.

### MicroflowParameterMapping (Element)

#### Property 'variable'

* Introduced.

#### Property 'widget'

* Deleted. Use variable instead (see above).

#### Property 'useAllPages'

* Deleted. Use variable instead (see above).

### NanoflowParameterMapping (Element)

#### Property 'variable'

* Introduced.

#### Property 'widget'

* Deleted. Use variable instead (see above).

#### Property 'useAllPages'

* Deleted. Use variable instead (see above).

### PageVariable (Element)

* Introduced.

### Snippet (ModelUnit)

#### Property 'type'

* Added as public.

### RetrievalSchema (Element)

* Deleted.

### RetrievalQuery (Element)

#### Property 'widgetName'

* Introduced.

#### Property 'usedAssociations'

* Introduced.

#### Property 'schemaId'

* Deleted.
