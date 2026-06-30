---
title: "11.12"
url: /releasenotes/sdk/metamodel-11.12/
weight: 55
---

## 11.12.0

### Settings

#### WebUIProjectSettingsPart (Element)

* We deleted the `exportEmbeddedEntrypoint` property. 

#### RuntimeSettings (Element)

* We deleted the `javaVersion` property. 
* We introduced the `javaMajorVersion` property. 

#### Configuration (Element)

* We deleted the `tracing` property. 
* We introduced the `openTelemetry` property. 

#### TracingConfiguration (Element)

* We deleted this element. 

#### OpenTelemetryConfiguration (Element)

* We introduced this element. 

#### OpenTelemetryTracesConfiguration (Element)

* We introduced this element. 

#### OpenTelemetryLogsConfiguration (Element)

* We introduced this element. 

### Microflows

#### SendEmailAction (Element)

* We introduced the `testEmailMessage` property. 
* We introduced the `useTemplateForTest` property. 

#### EmailMessage (Element)

* We introduced the `subjectTemplate` property. 
* We introduced the `messageBodyPlainTextTemplate` property. 
* We introduced the `messageBodyHtmlTemplate` property. 

### Navigation

#### NavigationProfileBase (Element)

* We introduced the `throwPartialSyncError` property. 

#### EmbeddedHomePage (Element)

* We introduced this element. 

#### EmbeddedNavigationProfile (Element)

* We introduced this element. 

### ODataPublish

#### PublishedAttribute (Element)

* We introduced the `edmType` property. 

#### PublishedAssociationEnd (Element)

* We introduced the `isMany` property. 

### Projects

#### Project (StructuralUnit)

* We introduced the `guidMappings` property. 

#### ModuleSettings (ModelUnit)

* We introduced the `packageId` property. 
* We introduced the `originalPackageId` property. 
* We introduced the `checksum` property. 
* We introduced the `convertedChecksum` property. 
* We introduced the `moduleDependencies` property. 
* We introduced the `enableDetailedTroubleshooting` property. 

#### ModuleGuidMapping (ModelUnit)

* We introduced this model unit. 

#### GuidMappingEntry (Element)

* We introduced this element. 

#### ModuleDependencies (Element)

* We introduced this element. 

#### Dependency (Element)

* We introduced this element. 

