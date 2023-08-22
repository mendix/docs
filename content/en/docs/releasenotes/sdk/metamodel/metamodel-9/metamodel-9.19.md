---
title: "9.19"
url: /releasenotes/sdk/metamodel-9.19/
weight: 81
---

## 9.19.0

**Release date: October 19, 2022**

### Microflows

#### CallExternalAction (Element)

* We introduced this element for calling an OData action.

#### SetTaskOutcomeAction (Element)

* We introduced the `outcomeValue` property. 
* We deleted the `outcome` property. 

#### OpenUserTaskAction (Element)

* We introduced the `assignOnOpen` and `openWhenAssigned`  properties. 

### Rest

#### PublishedODataService (ModelUnit)

* We introduced the `microflows` property for the microflows exposed in this service.

#### CallMicroflowToRead (Element)

* We made the `microflow` property optional.
* We introduced the `microflowRuntime` property for the Mendix Runtime property for a microflow.

#### QueryOptions (Element)

* We introduced the `topSupported` property for indicating whether this resource supports the `$top` parameter.
* We introduced the `skipSupported` property for indicating whether this resource supports the `$skip` parameter.

#### PublishedODataMicroflow (Element)

* We introduced this element for a microflow published in an OData service.

### Pages

#### SetTaskOutcomeClientAction (Element)

* We introduced the `outcomeValue` property.
* We deleted the `outcome` property.

### Workflows

#### UserTaskOutcome (Element)

* We introduced the `value` property. 
* We deleted the `name` and `caption` properties.
