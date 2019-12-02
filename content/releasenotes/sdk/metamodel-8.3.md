---
title: "8.3"
parent: "metamodel"
#When updating, remember to update the Latest Mendix Releases file
---

These are the release notes for the [Mendix Metamodel](/apidocs-mxsdk/mxsdk/understanding-the-metamodel) version 8.3.

## 8.3.0

**Release date: October 25th, 2019**

## CodeActions

### CodeAction (ModelUnit)

#### Property 'actionReturnType'

* Changed the default value.

### VoidType (Element)

* Introduced.

## DomainModels

### AssociationBase (Element)

#### Property 'remoteSourceDocument'

* Introduced.

## Microflows

### JavaActionCallAction (Element)

#### Property 'outputVariableNameRuntime'

* Introduced.

### MicroflowCallAction (Element)

#### Property 'outputVariableNameRuntime'

* Introduced.

## Rest

### PublishedODataService (ModelUnit)

#### Property 'authenticationTypesRuntime'

* Introduced for **Authentication types supported by this service**.

### PublishedRestService (ModelUnit)

#### Property 'authenticationTypesRuntime'

* Introduced for **Authentication types supported by this service**.

### RestOperationParameter (Element)

#### Property 'description'

* Introduced for **A description of the parameter, to be used in documentation**.

## CustomWidgets

### CustomWidgetType (Element)

#### Property 'helpUrl'

* Introduced.

### WidgetValue (Element)

#### Property 'dataSource'

* Introduced.

## Pages

### BuildingBlock (ModelUnit)

#### Property 'platform'

* Introduced.

### DivContainer (Element)

#### Property 'onClickAction'

* Introduced.

### ClientTemplate (Element)

#### Property 'fallback'

* Introduced.

### LayoutGrid (Element)

#### Property 'rows'

* Changed the default value.

### LayoutGridColumn (Element)

#### Property 'tabletWeight'

* Introduced.

#### Property 'phoneWeight'

* Introduced.

#### Property 'verticalAlignment'

* Introduced.

### LayoutGridRow (Element)

#### Property 'columns'

* Changed the default value.

#### Property 'verticalAlignment'

* Introduced.

#### Property 'horizontalAlignment'

* Introduced.

#### Property 'spacingBetweenColumns'

* Introduced.
