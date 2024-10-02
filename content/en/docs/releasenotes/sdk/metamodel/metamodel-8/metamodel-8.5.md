---
title: "8.5"
url: /releasenotes/sdk/metamodel-8.5/
weight: 96
---

## 8.5.0

**Release date: December 13, 2019**

### CodeActions

#### StringTemplateParameterType (Element)

* We removed the experimental status of this element.

### Microflows

#### StringTemplateParameterValue (Element)

* We removed the experimental status of this element.

#### WebServiceCallAction (Element)

* We changed the default value of the `useRequestTimeOut`, `timeOutModel`, and `timeOutExpression` properties.

#### RestCallAction (Element)

* We changed the default value of the `useRequestTimeOut`, `timeOutModel`, and `timeOutExpression` properties.

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

#### CustomWidgetDatabaseSource and CustomWidgetXPathSource (Elements)

* We introduced these elements.

### Pages

#### NativeLayoutContent (Element)

* We introduced the `layoutType`, `sidebar`, and `sidebarWidgets` properties.
