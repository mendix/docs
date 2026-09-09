---
title: "11.10"
url: /releasenotes/sdk/metamodel-11.10/
weight: 58
---

## 11.10.0

### Workflows

#### InterruptingNotificationEventSubProcessStartActivity (Element)

* We introduced this element. 

#### InterruptingNotificationEventSubProcessStartActivityTarget (Element)

* We introduced this element. 

### Rest

#### PublishedRestService (ModelUnit)

* We introduced the `publicDocumentation` property. Info: "Documentation for OpenAPI"

#### ConsumedODataService (ModelUnit)

* We deleted the `configurationMicroflow` property. Info: "Split into configurationEntityMicroflow and headerListMicroflow"
* We introduced the `headerListMicroflow` property. Info: "A microflow that returns a list of headers to be added to each request"
* We introduced the `configurationEntityMicroflow` property. Info: "A microflow that returns a system entity that configures the service"

### MessageDefinitions

#### MessageDefinition2 (ModelUnit)

* We introduced this model unit. 

### Mappings

#### MappingDocument (ModelUnit)

* We introduced the `messageDefinition2` property. Info: "Message definition document identifier"
