---
title: "Nanoflow Properties"
url: /refguide/nanoflow/
weight: 20
---

## Introduction

This page describes the properties of nanoflows. For details on using nanoflows and nanoflow elements, see [Nanoflows](/refguide/nanoflows/).

## Properties

Nanoflow properties consist of the following sections:

* [General](#general)
* [Common](#common)
* [Usage](#usage)
* [Security](#security)

### General Section {#general}

#### Return Type

The return type defines what information the nanoflow returns. The caller of the nanoflow will get a result of this type. For possible return types, see [Data Types](/refguide/data-types/).

### Common Section {#common}

#### Name

**Name** is the internal name of the nanoflow. When referring to the nanoflow in the app you will use this name. It must be unique within the module, but you can have two nanoflows with the same name in different modules. When referring to the nanoflow, you will normally prepend the name of the module to ensure uniqueness and allow you to use nanoflows in other modules.

#### Documentation

**Documentation** allows you to describe your nanoflow to make it easier for people to use and modify it.

### Usage Section {#usage}

#### Mark as Used

You can search for unused items (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>, then select **Unused items** in the **Search for** drop-down menu) in Studio Pro. Nanoflows that are only called from JavaScript code will be listed as unused, because Studio Pro cannot look inside the source code.

By enabling the property **Mark as used**, you explicitly specify that the nanoflow is used and Studio Pro will no longer list it when searching for unused items.

Default: *disabled*

### Security Section {#security}

#### Allowed Roles

These are the [module roles](/refguide/module-security/#module-role) the user must have to be able to execute the nanoflow.

For more information, see [Module Security](/refguide/module-security/).
