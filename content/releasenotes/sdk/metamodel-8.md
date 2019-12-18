---
title: "8"
parent: "metamodel"
#When updating, remember to update the Latest Mendix Releases file
---

These are the release notes for the [Mendix Metamodel](/apidocs-mxsdk/mxsdk/understanding-the-metamodel) version 8.

## 8.5.0

**Release date: December 13th, 2019**

### CodeActions

#### StringTemplateParameterType (Element)

* We removed the experimental status of this element.

### Microflows

#### StringTemplateParameterValue (Element)

* We removed the experimental status of this element.

#### WebServiceCallAction (Element)

* We changed the default value of  the `useRequestTimeOut`, `timeOutModel`, and `timeOutExpression` properties.

#### RestCallAction (Element)

* We changed the default value of  the `useRequestTimeOut`, `timeOutModel`, and `timeOutExpression` properties.

### Projects

#### Module (StructuralUnit)

* We introduced the `isReusableComponent` property.

### Rest

#### ConsumedODataService (ModelUnit)

* We introduced the `timeoutModel` property for a timeout for HTTP requests.
* We introduced the `timeoutExpression` property for a timeout for HTTP requests.

### WebServices

#### DataAssociation (Element)

* We introduced the `summary` property as a short summary of the association that is being exposed.
* We introduced the `description` property as a long description of the association that is being exposed.

#### DataAttribute (Element)

* We introduced the `summary` property as a short summary of the attribute that is being exposed.
* We introduced the `description` property as a long description of the attribute that is being exposed.

#### SystemIdDataAttribute (Element)

* We introduced the `summary` property as a short summary of the system ID that is being exposed.
* We introduced the `description` property as a long description of the system ID that is being exposed.

### CustomWidgets

#### CustomWidgetDatabaseSource & CustomWidgetXPathSource (Elements)

* We introduced these elements.

### Pages

#### NativeLayoutContent (Element)

* We introduced the `layoutType`, `sidebar`, and `sidebarWidgets` properties.

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

* We added the `type` property as public.

#### RetrievalSchema (Element)

* We deleted this element.

#### RetrievalQuery (Element)

* We introduced the `widgetName` and `usedAssociations` properties.
* We deleted the `schemaId` property.

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

## 8.2.0

**Release date: September 25th, 2019**

### Constants

#### Constant (ModelUnit)

* We introduced the `exposedToClient` property.

### DomainModels

#### Entity (Element)

* We made the `isRemote` property public.
* We introduced the `remoteSourceDocument` (experimental) property, which indicates the source document of the remote entity.

#### NoGeneralization (Element)

We made the following properties public:

* `hasChangedDate`
* `hasCreatedDate`
* `hasOwner`
* `hasChangedBy`

#### RemoteEntitySourceDocument (ModelUnit)

* We introduced this experimental property, which indicates a source document of a remote entity.

### CustomWidgets

#### WidgetValue (Element)

* We introduced the `widgets` property.

### Pages

#### NativeLayoutContent (Element)

* We introduced the `showBottomBar` property.

## 8.1.0

**Release date: August 29th, 2019**

### CustomWidgets

#### CustomWidget (Element)

We introduced the following properties:

* `labelTemplate`
* `conditionalEditabilitySettings`
* `editable`
* `conditionalVisibilitySettings`

#### WidgetObject (Element)

We deleted the `labelTemplate` property and moved it to the `CustomWidget` element (see above).
