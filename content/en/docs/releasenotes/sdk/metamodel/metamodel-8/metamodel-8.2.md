---
title: "8.2"
url: /releasenotes/sdk/metamodel-8.2/
weight: 99
---

## 8.2.0

**Release date: September 25th, 2019**

### Constants

#### Constant (ModelUnit)

* We introduced the `exposedToClient` property.

### DomainModels

#### Entity (Element)

* We made the `isRemote` property public.
* We introduced the `remoteSourceDocument` (experimental) property, which indicates the source document of the external entity.

#### NoGeneralization (Element)

We made the following properties public:

* `hasChangedDate`
* `hasCreatedDate`
* `hasOwner`
* `hasChangedBy`

#### RemoteEntitySourceDocument (ModelUnit)

* We introduced this experimental property, which indicates a source document of an external entity.

### CustomWidgets

#### WidgetValue (Element)

* We introduced the `widgets` property.

### Pages

#### NativeLayoutContent (Element)

* We introduced the `showBottomBar` property.
