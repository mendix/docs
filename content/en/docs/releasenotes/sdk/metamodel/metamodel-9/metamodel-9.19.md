---
title: "9.19"
parent: "metamodel-9"
---

## 9.19.0

### Microflows

#### CallExternalAction (Element)
* We introduced this element. Info: "Calling an OData action"

#### SetTaskOutcomeAction (Element)
* We deleted the `outcome` property. 
* We introduced the `outcomeValue` property. 

#### OpenUserTaskAction (Element)
* We introduced the `assignOnOpen` property. 
* We introduced the `openWhenAssigned` property. 

### Rest

#### PublishedODataService (ModelUnit)
* We introduced the `microflows` property. Info: "The microflows exposed in this service"

#### CallMicroflowToRead (Element)
* We made the `microflow` property optional.
* We introduced the `microflowRuntime` property. Info: "Runtime property for microflow"

#### QueryOptions (Element)
* We introduced the `topSupported` property. Info: "Indicates whether this resource supports the $top parameter"
* We introduced the `skipSupported` property. Info: "Indicates whether this resource supports the $skip parameter"

#### PublishedODataMicroflow (Element)
* We introduced this element. Info: "A microflow published in an OData service"

### Pages

#### SetTaskOutcomeClientAction (Element)
* We deleted the `outcome` property. 
* We introduced the `outcomeValue` property. 

### Workflows

#### UserTaskOutcome (Element)
* We deleted the `name` property. 
* We deleted the `caption` property. 
* We introduced the `value` property. 

This page has been generated automatically.
