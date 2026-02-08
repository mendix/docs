---
title: "8.2"
url: /releasenotes/sdk/metamodel-8.2/
weight: 99
---

## 8.2.0

**릴리스 날짜: 2019년 9월 25일**

### Constants

#### Constant (ModelUnit)

* `exposedToClient` 속성을 도입하였습니다.

### DomainModels

#### Entity (Element)

* `isRemote` 속성을 공개하였습니다.
* `remoteSourceDocument` (experimental) property, which indicates the source document of the external entity.

#### NoGeneralization (Element)

다음 속성을 공개하였습니다:

* `hasChangedDate`
* `hasCreatedDate`
* `hasOwner`
* `hasChangedBy`

#### RemoteEntitySourceDocument (ModelUnit)

* We introduced this experimental property, which indicates a source document of an external entity.

### CustomWidgets

#### WidgetValue (Element)

* `widgets` 속성을 도입하였습니다.

### Pages

#### NativeLayoutContent (Element)

* `showBottomBar` 속성을 도입하였습니다.
