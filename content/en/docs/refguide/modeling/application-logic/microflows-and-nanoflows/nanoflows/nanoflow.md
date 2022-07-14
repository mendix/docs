---
title: "Nanoflow Properties"
url: /refguide/nanoflow/
tags: ["studio pro"]
---

## 1 Introduction

This page describes the properties of nanoflows. For details on using nanoflows and nanoflow elements, see [Nanoflows](/refguide/nanoflows/).

## 2 Properties

An example of nanoflow properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/nanoflows/nanoflow/nanoflow-properties.png" alt="Nanoflow Properties"   width="250"  >}}

Nanoflow properties consist of the following sections:

* [Common](#common)
* [Output](#output)
* [Security](#security)
* [Usage](#usage)

### 2.1 Common Section{#common}

#### 2.1.1 Name

**Name** is the internal name of the nanoflow. When referring to the nanoflow in the app you will use this name. It must be unique within the module, but you can have two nanoflows with the same name in different modules. When referring to the nanoflow, you will normally prepend the name of the module to ensure uniqueness and allow you to use nanoflows in other modules.

#### 2.1.2 Documentation

**Documentation** allows you to describe your nanoflow to make it easier for people to use and modify it.

### 2.2 Output Section{#output}

#### 2.2.1 Return Type

The return type defines what information the nanoflow returns. The caller of the nanoflow will get a result of this type. For possible return types, see [Data Types](/refguide/data-types/).

### 2.3 Security Section{#security}

#### 2.3.1 Allowed Roles

These are the [module roles](/refguide/module-security/#module-role) the user must have to be able to execute the nanoflow.

For more information, see [Module Security](/refguide/module-security/).

### 2.4 Usage Section {#usage}

#### 2.4.1 Mark as Used

You can search for unused items (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>, then select **Unused items** in the **Search for** drop-down menu) in Studio Pro. Nanoflows that are only called from JavaScript code will be listed as unused, because Studio Pro cannot look inside the source code.

By setting the property **Mark as used** to **Yes**, you explicitly specify that the nanoflow is used and Studio Pro will no longer list it when searching for unused items.

Default: *No*
