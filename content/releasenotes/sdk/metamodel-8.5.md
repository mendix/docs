---
title: "8.5"
parent: "metamodel"
#When updating, remember to update the Latest Mendix Releases file
---

These are the release notes for the [Mendix Metamodel](/apidocs-mxsdk/mxsdk/understanding-the-metamodel) version 8.5.

## 8.5.0

**Release date: December 13th, 2019**

## CodeActions

### StringTemplateParameterType (Element)

* Removed experimental.

## Microflows

### StringTemplateParameterValue (Element)

* Removed experimental.

### WebServiceCallAction (Element)

#### Property 'useRequestTimeOut'

* Default value changed.

#### Property 'timeOutModel'

* Default value changed.

#### Property 'timeOutExpression'

* Default value changed.

### RestCallAction (Element)

#### Property 'useRequestTimeOut'

* Default value changed.

#### Property 'timeOutModel'

* Default value changed.

#### Property 'timeOutExpression'

* Default value changed.

## Projects

### Module (StructuralUnit)

#### Property 'isReusableComponent'

* Introduced.

## Rest

### ConsumedODataService (ModelUnit)

#### Property 'timeoutModel'

* Introduced – a timeout for http requests.

#### Property 'timeoutExpression'

* Introduced – a timeout for http requests.

## WebServices

### DataAssociation (Element)

#### Property 'summary'

* Introduced – a short summary of the association that is being exposed.

#### Property 'description'

* Introduced – a long description of the association that is being exposed.

### DataAttribute (Element)

#### Property 'summary'

* Introduced – a short summary of the attribute that is being exposed.

#### Property 'description'

* Introduced – a long description of the attribute that is being exposed.

### SystemIdDataAttribute (Element)

#### Property 'summary'

* Introduced – a short summary of the system id that is being exposed.

#### Property 'description'

* Introduced – a long description of the system id that is being exposed.

## CustomWidgets

### CustomWidgetDatabaseSource (Element)

* Introduced.

### CustomWidgetXPathSource (Element)

* Introduced.

## Pages

### NativeLayoutContent (Element)

#### Property 'layoutType'

* Introduced.

#### Property 'sidebar'

* Introduced.

#### Property 'sidebarWidgets'

* Introduced.
