---
title: "Microflow Properties"
url: /refguide7/microflow/
tags: ["microflow", "entity access"]
---

## 1 Introduction

This document describes the properties of a microflow. If you want to see what microflows are for and what kind of elements they contain, you can check [Microflows](/refguide7/microflows/).

## 2 Common Properties

### 2.1 Name

The internal name of the microflow.

## 3 Concurrent Execution Properties

### 3.1 Disallow

With this property you can specify whether it is allowed for the microflow to be executed more than once concurrently. This applies to all users at the same time.

Disallowing concurrent execution of a microflow is useful if a microflow would interfere with another running instance. For example, if it accesses a global resource.

| Option | Description |
| --- | --- |
| No | It is possible to execute the microflow more than once concurrently. |
| Yes | It is not possible to execute the microflow more than once concurrently; the user receives a message or another microflow is executed instead. |

_Default value_: No

### 3.2 Error Message

Error message defines the message the user gets when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed.

### 3.3 Error Microflow

Error microflow defines which microflow is executed when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed. When set, there will be no further message shown to the user.

## 4 Output Properties

### 4.1 Return type

The return type defines what information the microflow returns. The caller of the microflow will get a result of this type. See [Data Types](/refguide7/data-types/) for the possible return types.

{{% alert color="info" %}}

A microflow could return whether or not the committing of an object should continue. In this case, a Boolean would be the return type of the microflow.

{{% /alert %}}

## 5 Security Properties

### 5.1 Allowed roles

Allowed roles defines to which [module role](/refguide7/module-role/) the user must have to be able to execute the microflow.

{{% alert color="warning" %}}

Note that these roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow and these roles are not checked then.

{{% /alert %}}

See also [Module Security](/refguide7/module-security/).

### 5.2 Apply entity access

This property indicates whether entity access based on the current user is applied when performing operations on objects. Applying entity access limits the objects that are retrieved by the [retrieve action](/refguide7/retrieve/) to only those that the current user is allowed to see. Similarly, to reading and writing attributes and associations the entity access of the current user is applied. If entity access is not applied on the other hand, all operations are allowed and all objects are retrieved.

{{% alert color="warning" %}}
Microflows that apply entity access have an **Entity Access** tag in the editor for Mendix versions 7.14 and above. For Mendix versions below that, the editor has a yellow background for microflows that apply entity access.
{{% /alert %}}

| Option | Description |
| --- | --- |
| Yes | Entity access is applied to retrieving and manipulating objects. The rights of current user are taken into account. |
| No | Entity access is not applied. |

{{% alert color="success" %}}

By default entity access is not applied. Set 'Apply entity access' to 'Yes' if you want to perform some actions that respect the access rights of the current user.

{{% /alert %}}

_Default value:_ No

## 6 Usage Properties

### 6.1 Mark as Used

You can search for unused items (Ctrl+Shift+F, Search for = Unused items) in the Modeler. Microflows that are only called from Java code will be listed as unused because the Modeler cannot look inside Java source code.

By setting the propery 'Mark as used' to 'Yes' you specify that the document is used implicitly and the Modeler will no longer list it when searching for unused items.

_Default value:_ No
