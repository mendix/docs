---
title: "Microflow Properties"
parent: "microflows"
tags: ["microflow", "entity access"]
---

## 1 Introduction

This document describes the properties of a microflow. If you want to see what microflows are for and what kind of elements they contain, you can check [Microflows](microflows).

## 2 Common Properties

### 2.1 Name

The internal name of the microflow.

## 3 Concurrent Execution Properties

### 3.1 Disallow

With this property you can specify whether it is allowed for the microflow to be executed more than once concurrently. This applies to all users at the same time.

Disallowing concurrent execution of a microflow is useful if a microflow would interfere with another running instance. For example, if it accesses a global resource.

| Option | Description |
| --- | --- |
| No *(default)*  | It is possible to execute the microflow more than once concurrently. |
| Yes | It is not possible to execute the microflow more than once concurrently; the user receives a message or another microflow is executed instead. |

### 3.2 Error Message

Error message defines the message the user gets when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed.

### 3.3 Error Microflow

Error microflow defines which microflow is executed when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed. When set, there will be no further message shown to the user.

## 4 Output Properties

### 4.1 Return Type

The return type defines what information the microflow returns. The caller of the microflow will get a result of this type. See [Data Types](data-types) for the possible return types.

{{% alert type="info" %}}

A microflow could return whether or not the committing of an object should continue. In this case, a Boolean would be the return type of the microflow.

{{% /alert %}}

## 5 Security Properties

### 5.1 Apply Entity Access

This property indicates whether entity access based on the current user is applied when performing operations on objects. Applying entity access limits the objects that are retrieved by the [retrieve action](retrieve) to only those that the current user is allowed to see. Similarly, to reading and writing attributes and associations the entity access of the current user is applied. If entity access is not applied on the other hand, all operations are allowed and all objects are retrieved.

{{% alert type="warning" %}}
Microflows that apply entity access have an **Entity Access** tag in the editor.
{{% /alert %}}

| Option | Description |
| --- | --- |
| Yes | Entity access is applied to retrieving and manipulating objects. The rights of current user are taken into account. |
| No  *(default)*  | Entity access is not applied. |

{{% alert type="info" %}}
By default entity access is not applied. Set **Apply entity access** to **Yes** if you want to perform some actions that respect the access rights of the current user.
{{% /alert %}}

### 5.2 Allowed Roles

**Allowed roles** defines which [module role](module-security#module-role) the user must have to be able to execute the microflow.

{{% alert type="warning" %}}
These roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow, and these roles are not checked then.
{{% /alert %}}

For more information, see [Module Security](module-security).

## 6 Usage Properties

### 6.1 Mark as Used

You can search for unused items (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>, then select **Unused items** in the **Search for** drop-down menu) in Studio Pro. Microflows that are only called from Java code will be listed as unused, because Studio Pro cannot look inside Java source code.

By setting the property **Mark as used** to **Yes**, you specify that the document is used implicitly and Studio Pro will no longer list it when searching for unused items.

Default: *No*

### 7 Expose as Microflow Action

By selecting the **Expose as microflow action**  option, it is possible to expose the microflow as a microflow action. Exposing the microflow will make it appear in the the **Toolbox** when you are editing a microflow in the category of your choice. When this action is used in a microflow, it will show the provided caption and icon.

The caption and category of the microflow action are required, but the icon is optional. When no icon is selected, the default microflow call action icon is used. The recommended size for the icon is 16x16 pixels.
