---
title: "10.21"
url: /releasenotes/sdk/metamodel-10.21/
weight: 79
---

## 10.21.0

### JavaScriptActions

#### MicroflowJavaScriptActionParameterType (Element)

* We introduced the `MicroflowJavaScriptActionParameterType` element.

### DomainModels

#### AssociationBase (Element)

* We introduced the `storageFormat` property. Info: "How the association is stored in the database"

### Microflows

#### ExclusiveMerge (Element)

* We changed the default value of the `^size` property.

### Settings

#### RuntimeSettings (Element)

* We introduced the `sslCertificateAlgorithm` property. 

#### ModelerSettings (Element)

* We introduced the `defaultAssociationStorage` property. 

#### Configuration (Element)

* We introduced the `tracing` property. 

#### TracingConfiguration (Element)

* We introduced this element. 

#### IntegrationProjectSettingsPart (Element)

* We introduced the `obsoleteEnableUrlEncoding` property. Info: "A toggle for the user to enable url encoding in REST Operation call action."

### IntegrationOverview

#### SourceApi (Element)

* We introduced this element. 

#### CatalogApi (Element)

* We introduced this element. 

### Rest

#### OpenApiFile (Element)

* We introduced this element. Info: "Storage for OpenAPI file contents"

#### ConsumedRestService (ModelUnit)

* We introduced the `openApiFile` property. Info: "Store OpenAPI file contents"

#### RestOperation (Element)

* We introduced the `tags` property. Info: "Rest operation tags"

### CustomWidgets

#### WidgetActionVariable (Element)

* We introduced this element. 

#### WidgetValueType (Element)

* We introduced the `actionVariables` property. 

### Navigation

#### NativeNavigationProfile (Element)

* We introduced the `sessionCookieEncryptionEnabled` property. 

### Workflows

#### Workflow (ModelUnit)

* We introduced the `persistentId` property. 

#### WorkflowActivity (Element)

* We introduced the `persistentId` property. 

#### EndOfParallelSplitPathActivity (Element)

* We introduced `EndOfParallelSplitPathActivity` element. 

#### BoundaryEvent (Element)

* We introduced the `persistentId` property. 

#### Outcome (Element)

* We introduced the `persistentId` property. 
