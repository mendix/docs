---
title: "8.6"
url: /releasenotes/sdk/metamodel-8.6/
weight: 95
---

## 8.6.0

**릴리스 날짜: 2020년 1월 29일**

### Microflows

#### StringTemplateParameterValue (Element)

* `template` 속성을 삭제하였습니다. Use `TypedTemplate`을(를) 사용하세요.
* `typedTemplate` 속성을 도입하였습니다.

#### TypedTemplate, TypedTemplateArgument, and PrimitiveTypedTemplateArgument (Elements)

* 이 엘리먼트들을 도입하였습니다.

### Settings

#### ModelerSettings (Element)

* `actionActivityDefaultColors` 속성을 도입하였습니다.

#### ActionActivityDefaultColor (Element)

* 이 엘리먼트를 도입하였습니다.

### Rest

#### ConsumedODataService (ModelUnit)

* `metadataReferences` 속성을 도입하였습니다. metadata file.
* `oDataVersion` 속성을 도입하였습니다. OData version of the service.

#### MetadataReference (Element)

* 이 엘리먼트를 도입하였습니다. the referenced metadata file.

### Pages

#### StaticImageViewer (Element)

* `alternativeText` 속성을 도입하였습니다.

#### DynamicImageViewer (Element)

* `alternativeText` 속성을 도입하였습니다.

#### RetrievalQuery (Element)

* `parameters` 속성을 도입하였습니다.

#### RetrievalQueryParameter (Element)

* 이 엘리먼트를 도입하였습니다.
