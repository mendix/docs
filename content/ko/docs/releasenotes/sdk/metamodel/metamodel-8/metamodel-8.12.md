---
title: "8.12"
url: /releasenotes/sdk/metamodel-8.12/
weight: 89
---

## 8.12.0

**릴리스 날짜: 2020년 7월 21일**

### DomainModels

#### Entity (Element)

* `capabilities` 속성을 도입하였습니다. hat an entity is capable of.

#### EntityCapabilities (Element)

* 이 엘리먼트를 도입하였습니다. what an entity is capable of.

### Rest

#### PublishedODataService (ModelUnit)

* `replaceIllegalChars` property, which allows for the export of content with illegal characters to XML by replacing them.

#### ConsumedODataService (ModelUnit)

* 공개 `applicationId` 속성을 추가하였습니다.

### Menus

#### MenuItem (Element)

* `alternativeText` 속성을 도입하였습니다.

### Navigation

#### NavigationProfile (Element)

* `appTitle` and `appIcon` 속성을 도입하였습니다.
* `applicationTitle` 속성을 삭제하였습니다. Use the `appTitle` property을(를) 사용하세요.

### Pages

#### ClientAction (Element)

* `disabledDuringExecution` 속성을 도입하였습니다.

#### PageSettings (Element)

* `titleOverride` 속성을 도입하였습니다.
* `formTitle` 속성을 삭제하였습니다.

#### DivContainer (Element)

* `screenReaderHidden` 속성을 도입하였습니다.

#### TextBox (Element)

* `autocompletePurpose` 속성을 도입하였습니다.

#### InputWidget (Element)

* `screenReaderLabel` 속성을 도입하였습니다.

#### ActionButton (Element)

`disabledDuringAction` 속성을 삭제하였습니다.

### Workflows

#### WorkflowActivity (Element)

* 공개 `caption` 속성을 추가하였습니다.
