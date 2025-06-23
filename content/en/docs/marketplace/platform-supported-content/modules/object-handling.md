---
title: "Object Handling"
url: /appstore/modules/object-handling/
description: "Describes the configuration and usage of the Object Handling module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Object Handling](https://marketplace.mendix.com/link/component/37114/) module is a collection of reusable actions concerning object handling.

This is a module from the Mendix Community Commons, which is a series of modules for and by the Mendix community that extend the low-code capabilities of the Mendix Platform.

### Dependencies

* *commons-lang3-3.7.jar*

## Configuration

### Microflow Activities 

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

### Java

This helper Java class can be used in Java actions:

* `Xpath.java`
