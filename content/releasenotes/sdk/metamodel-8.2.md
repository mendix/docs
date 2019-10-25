---
title: "8.2"
parent: "metamodel"
---

These are the release notes for the  [Mendix Metamodel](/apidocs-mxsdk/mxsdk/understanding-the-metamodel) version 8.2.

## 8.2.0

**Release date: September 25th, 2019**

## Constants

### Constant (ModelUnit)

* Introduced the `exposedToClient` property.

## DomainModels

### Entity (Element)

* Made the `isRemote` property public.
* Introduced the `remoteSourceDocument` (experimental) property, which indicates the source document of the remote entity.

### NoGeneralization (Element)

The following properties were made public:

* `hasChangedDate`
* `hasCreatedDate`
* `hasOwner`
* `hasChangedBy`

### RemoteEntitySourceDocument (ModelUnit)

* Introduced this experimental property, which indicates a source document of a remote entity.

## CustomWidgets

### WidgetValue (Element)

* Introduced the `widgets` property.

## Pages

### NativeLayoutContent (Element)

* Introduced the `showBottomBar` property.
