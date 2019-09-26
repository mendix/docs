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

* Added the public `isRemote` property.
* Introduced the `remoteSourceDocument` (experimental) property, which indicates the source document of the remote entity.

### NoGeneralization (Element)

* Added the public `hasChangedDate` property.
* Added the public `hasCreatedDate` property.
* Added the public `hasOwner` property.
* Added the public `hasChangedBy` property.

### RemoteEntitySourceDocument (ModelUnit)

* Introduced this experimental property, which indicates a source document of a remote entity.

## CustomWidgets

### WidgetValue (Element)

* Introduced the `widgets` property.

## Pages

### NativeLayoutContent (Element)

* Introduced the `showBottomBar` property.
