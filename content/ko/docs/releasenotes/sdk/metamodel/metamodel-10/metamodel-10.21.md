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

* `storageFormat` 속성을 도입하였습니다. Info: "How the association is stored in the database"

### Microflows

#### ExclusiveMerge (Element)

* `^size` 속성의 기본값을 변경하였습니다.

### Settings

#### RuntimeSettings (Element)

* `sslCertificateAlgorithm` 속성을 도입하였습니다. 

#### ModelerSettings (Element)

* `defaultAssociationStorage` 속성을 도입하였습니다. 

#### Configuration (Element)

* `tracing` 속성을 도입하였습니다. 

#### TracingConfiguration (Element)

* 이 엘리먼트를 도입하였습니다. 

#### IntegrationProjectSettingsPart (Element)

* `obsoleteEnableUrlEncoding` 속성을 도입하였습니다. Info: "A toggle for the user to enable url encoding in REST Operation call action."

### IntegrationOverview

#### SourceApi (Element)

* 이 엘리먼트를 도입하였습니다. 

#### CatalogApi (Element)

* 이 엘리먼트를 도입하였습니다. 

### Rest

#### OpenApiFile (Element)

* 이 엘리먼트를 도입하였습니다. Info: "Storage for OpenAPI file contents"

#### ConsumedRestService (ModelUnit)

* `openApiFile` 속성을 도입하였습니다. Info: "Store OpenAPI file contents"

#### RestOperation (Element)

* `tags` 속성을 도입하였습니다. Info: "Rest operation tags"

### CustomWidgets

#### WidgetActionVariable (Element)

* 이 엘리먼트를 도입하였습니다. 

#### WidgetValueType (Element)

* `actionVariables` 속성을 도입하였습니다. 

### Navigation

#### NativeNavigationProfile (Element)

* `sessionCookieEncryptionEnabled` 속성을 도입하였습니다. 

### Workflows

#### Workflow (ModelUnit)

* `persistentId` 속성을 도입하였습니다. 

#### WorkflowActivity (Element)

* `persistentId` 속성을 도입하였습니다. 

#### EndOfParallelSplitPathActivity (Element)

* We introduced `EndOfParallelSplitPathActivity` element. 

#### BoundaryEvent (Element)

* `persistentId` 속성을 도입하였습니다. 

#### Outcome (Element)

* `persistentId` 속성을 도입하였습니다. 
