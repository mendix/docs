---
title: "Upgrading to Mendix Version 8"
category: "General Info"
menu_order: 30
description: "Describes the process of upgrading to Mendix version 8 in Studio."
tags: ["studio", "studio pro", "upgrade", "version"]
---

## 1 Introduction 

Mendix version 8 brings many improvements to the platform and opens up new app building capabilities to Mendix developers. However, this release contains changes that cannot be upgraded automatically using the regular Studio upgrade mechanism. 

This means the following:

* Existing apps built in Studio will remain on the latest release of Mendix version 7.23 
* Newly created apps in Studio will have Mendix version 8 from the start

For more information on Studio version and Mendix version, see [Studio Version & Mendix Version Correlation](general-versions).

## 2 Upgrading Your Studio App to Mendix Version 8

Developers wanting to upgrade their Studio apps to Mendix version 8 can only do so in Studio Pro or by involving developers familiar with Studio Pro. For more information on upgrading apps using Studio Pro, see [Moving from Desktop Modeler Version 7 to Studio Pro 8](/refguide/moving-from-7-to-8) in  the *Mendix Reference Guide*.

Automatic upgrade will not be offered in Studio when moving from Mendix 7 to Mendix 8.  However, if your app has Mendix 8 beta version, it will be upgraded to Mendix 8 automatically.

{{% alert type="info" %}}
Note that apps with version lower than 7.23.7 will still show the orange upgrade bar to upgrade to Mendix 7.23.7 version.
{{% /alert %}}

## 3 Read More

* [Studio Pro 8 Release Notes](../../releasenotes/studio-pro/8)
* [Studio Release Notes](../../releasenotes/studio)
* [Studio Version & Mendix Version Correlation](general-versions)
