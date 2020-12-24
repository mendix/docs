---
title: "Object Handling"
category: "Modules"
description: "Describes the configuration and usage of the Object Handling module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "object handling", "community commons", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Object Handling](https://appstore.home.mendix.com/link/app/37114/) module is a collection of reusable actions concerning object handling.

This is a module from the Mendix Community Commons, which is a series of modules for and by the Mendix community that extend the low-code capabilities of the Mendix Platform.

### 1.1 Dependencies

* *commons-lang3-3.7.jar*

## 2 Configuration

### 2.1 Microflow Activities 

These are Java actions exposed as object activities available to use in your microflows:

* Clone object
* Copy object attribute contents
* Deep clone
* Delete all objects
* Force commit
* Force delete
* Delete objects without events
* Create a list from an object
* Commit without events
* End transaction
* Get 'Created by' user object
* Get 'Changed by' user object
* Get object GUID
* Get committed value
* Get entity type
* Object member has changed
* Object has changed
* Refresh class by object
* Start transaction

### 2.2 Java

This helper Java class can be used in Java actions:

* `Xpath.java`
