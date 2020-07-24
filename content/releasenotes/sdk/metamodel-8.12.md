---
title: "8.12"
parent: "metamodel-8"
---

## 8.12.0

**Release date: July 21st, 2020**

### DomainModels

#### Entity (Element)

* We introduced the `capabilities` property for what an entity is capable of.

#### EntityCapabilities (Element)

* We introduced this element for what an entity is capable of.

### Kafka

#### ConsumedKafkaService (ModelUnit)

* We introduced the `serviceFeed` property.
* We deleted the `entities` property.

#### KafkaRemoteEntitySource (Element)

* We introduced the `topicName` property.

#### KafkaEntity, KafkaNavigationProperty & KafkaAttribute (Elements)

* We deleted these elements.

### Rest

#### PublishedODataService (ModelUnit)

* We introduced the `replaceIllegalChars` property, which allows for the export of content with illegal characters to XML by replacing them.

#### ConsumedODataService (ModelUnit)

* We added the public `applicationId` property.

### Menus

#### MenuItem (Element)

* We introduced the `alternativeText` property.

### Navigation

#### NavigationProfile (Element)

* We introduced the `appTitle` and `appIcon` properties.
* We deleted the `applicationTitle` property. Use the `appTitle` property instead.

### Pages

#### ClientAction (Element)

* We introduced the `disabledDuringExecution` property.

#### PageSettings (Element)

* We introduced the `titleOverride` property.
* We deleted the `formTitle` property.

#### DivContainer (Element)

* We introduced the `screenReaderHidden` property.

#### TextBox (Element)

* We introduced the `autocompletePurpose` property.

#### InputWidget (Element)

* We introduced the `screenReaderLabel` property.

#### ActionButton (Element)

We deleted the `disabledDuringAction` property.

### Workflows

#### WorkflowActivity (Element)

* We added the public `caption` property.
