---
title: "8.11"
parent: "metamodel-8"
---

## 8.11.0

**Release date: June 30th, 2020**

### DomainModels

#### RemoteEntitySourceDocument (ModelUnit)

* We introduced this model unit.
* We added the public `icon` property.

#### AssociationBase (Element)

* We introduced the `capabilities` property for what an association is capable of.

#### AssociationCapabilities (Element)

* We introduced this element for what an association is capable of.

### Microflows

#### CloseFormAction (Element)

* We introduced the `numberOfPagesToClose` property.
* We deleted the `numberOfPages` property.

#### ShowPageAction (Element)

* We introduced the `numberOfPagesToClose` property.

### Settings

#### WorkflowsProjectSettingsPart (Element)

* We introduced the `userEntity` property.

### Rest

#### ConsumedODataService (ModelUnit)

* We introduced the `applicationId` property for the application ID of the published service that is being consumed.
* We deleted the `entities` property. All information is now in the sources.

#### ODataRemoteEntitySource (Element) {#odataremoteentitysource}

* We introduced the `entitySet` property for the entity set.
* We introduced the `key` property for the entity's key.

#### ODataEntity (Element)

* We deleted this element. The [ODataRemoteEntitySource](#odataremoteentitysource) element is now used instead.

#### ODataNavigationProperty (Element)

* We deleted this element. The `ODataRemoteAssociationSource` element is used instead.

#### ODataAttribute (Element)

* We deleted this element. The `ODataMappedValue` element is used instead.

### Pages

#### PageClientAction (Element)

* We introduced the `numberOfPagesToClose` property.

#### CreateObjectClientAction (Element)

* We introduced the `numberOfPagesToClose` property.

#### RetrievalQuery (Element)

* We introduced the `usedAttributes` property.

### Workflows

#### Workflow (ModelUnit)

* We introduced the `subject` and `overviewPage` properties.

#### WorkflowTaskOutcome (Element)

* We introduced the `caption` property.

#### UserTask (Element)

* We introduced the `userSource` property.
* We deleted the `userRole` property.

#### CallMicroflowTask, UserSource & XPathBasedUserSource (Elements)

* We introduced these elements.
