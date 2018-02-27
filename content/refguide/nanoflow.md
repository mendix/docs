---
title: "Nanoflow"
category: "Modeler"
---

## 1 Introduction

This page describes the properties of nanoflows. For details on using nanoflows and nanoflow elements, see [Nanoflows Overview](nanoflows).

{{% /alert %}}

## 2 Common Properties

### 2.1 Name

This is the internal name of the nanoflow.

## 3 Output Properties

### 3.1 Return Type

The return type defines what information the nanoflow returns. The caller of the nanoflow will get a result of this type. For possible return types, see [Data Types](data-types).

{{% alert type="info" %}}

A nanoflow can return whether or not the committing of an object should continue. In this case, a Boolean would be the return type of the nanoflow.

{{% /alert %}}

## 4 Security Properties

### 4.1 Allowed Roles

These are the [module roles](module-role) the user must have to be able to execute the nanoflow.

For more information, see [Module Security](module-security).

## 5 Usage Properties

### 5.1 Mark as Used

You can search for unused items (using <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>) in the Modeler. Nanoflows that are only called from Java code will be listed as unused, because the Modeler cannot look inside Java source code.

By setting the **Mark as used** property to **Yes**, you can specify that the document is used implicitly, and the Modeler will no longer list it when searching for unused items.

_Default value:_ No
