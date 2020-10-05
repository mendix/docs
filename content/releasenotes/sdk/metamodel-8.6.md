---
title: "8.6"
parent: "metamodel-8"
---

## 8.6.0

**Release date: January 29th, 2020**

### Microflows

#### StringTemplateParameterValue (Element)

* We deleted the `template` property. Use `TypedTemplate` instead.
* We introduced the `typedTemplate` property.

#### TypedTemplate, TypedTemplateArgument & PrimitiveTypedTemplateArgument (Elements)

* We introduced these elements.

### Settings

#### ModelerSettings (Element)

* We introduced the `actionActivityDefaultColors` property.

#### ActionActivityDefaultColor (Element)

* We introduced this element.

### Rest

#### ConsumedODataService (ModelUnit)

* We introduced the `metadataReferences` property for a metadata file.
* We introduced the `oDataVersion` property for the OData version of the service.

#### MetadataReference (Element)

* We introduced this element for the referenced metadata file.

### Pages

#### StaticImageViewer (Element)

* We introduced the `alternativeText` property.

#### DynamicImageViewer (Element)

* We introduced the `alternativeText` property.

#### RetrievalQuery (Element)

* We introduced the `parameters` property.

#### RetrievalQueryParameter (Element)

* We introduced this element.
