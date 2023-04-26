---
title: "Microflow Properties"
url: /refguide8/microflow/
tags: ["microflow", "entity access"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/microflow.pdf).
{{% /alert %}}

## 1 Introduction

This document describes the properties of a microflow. If you want to see what microflows are for and what kind of elements they contain, you can check [Microflows](/refguide8/microflows/).

## 2 Properties

An example of microflow properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/microflow/microflow-properties.png" alt="Microflow Properties"   width="250"  >}}

Microflow properties consist of the following sections:

* [Common](#common)
* [Concurrent execution](#concurrent)
* [Output](#output)
* [Security](#security)
* [Usage](#usage)

### 2.1 Common Section {#common}

#### 2.1.1 Name

**Name** is the internal name of the microflow. When referring to the microflow in the app you will use this name. It must be unique within the module, but you can have two microflows with the same name in different modules. When referring to the microflow, you will normally prepend the name of the module to ensure uniqueness and allow you to use microflows in other modules.

#### 2.1.2 Documentation

**Documentation** allows you to describe your microflow to make it easier for people to use and modify it.

### 2.2 Concurrent Execution Section {#concurrent}

#### 2.2.1 Disallow

The **Disallow** property allows you to specify whether the microflow can be executed multiple times concurrently. This applies to all end-users who are using the app, not just within one user session.

Disallowing concurrent execution of a microflow can be useful if a microflow would interfere with another running instance (for example, if it accesses a global resource).

| Option | Description |
| --- | --- |
| No *(default)*  | It is possible to execute the microflow more than once concurrently. |
| Yes | It is not possible to execute the microflow more than once concurrently; the user receives a message or another microflow is executed instead. |

#### 2.2.2 Error Message

**Error message** defines the message the user gets when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed. This will not be shown if there is an **Error microflow** defined.

#### 2.2.3 Error Microflow

**Error microflow** defines another microflow to execute when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed. When set, there will be no further message shown to the user.

### 2.3 Output Section {#output}

#### 2.3.1 Return Type

The return type defines what information the microflow returns. The caller of the microflow will get a result of this type. See [Data Types](/refguide8/data-types/) for the possible return types.

{{% alert color="info" %}}
To indicate whether or not an object should be committed, you can use Boolean as the return type of the microflow.
{{% /alert %}}

### 2.4 Security Section {#security}

#### 2.4.1 Apply Entity Access

**Apply entity access** indicates whether entity access based on the current user is applied when performing operations on objects. Setting this to yes limits the objects that are retrieved by the [retrieve action](/refguide8/retrieve/) to only those that the current user is allowed to see. Similarly, when reading and writing attributes and associations the entity access of the current user is applied. Conversely, if entity access is not applied, all operations are allowed and all objects are retrieved.

| Option | Description |
| --- | --- |
| Yes | Entity access is applied to retrieving and manipulating objects. The rights of current user are taken into account. |
| No  *(default)*  | Entity access is not applied. |

{{% alert color="info" %}}
By default entity access is not applied. Set **Apply entity access** to **Yes** if you want to perform some actions that respect the access rights of the current user.
{{% /alert %}}

{{% alert color="info" %}}
Microflows that apply entity access have an **Entity Access** tag in the editor.
{{% /alert %}}

#### 2.4.2 Allowed Roles

**Allowed roles** defines which [module role](/refguide8/module-security/#module-role) the user must have to be able to execute the microflow.

{{% alert color="warning" %}}
These roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow, and these roles are not checked then.
{{% /alert %}}

For more information, see [Module Security](/refguide8/module-security/).

### 2.5 Usage Section {#usage}

#### 2.5.1 Mark as Used

You can search for unused items (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>, then select **Unused items** in the **Search for** drop-down menu) in Studio Pro. Microflows that are only called from Java code will be listed as unused, because Studio Pro cannot look inside the Java source code.

By setting the property **Mark as used** to **Yes**, you explicitly specify that the microflow is used and Studio Pro will no longer list it when searching for unused items.

Default: *No*

## 3 Expose as Microflow Action

There is one other property which is accessible by right-clicking in the microflow and selecting **Properties**.

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/microflow/microflow-expose.png" alt="Expose as Microflow Actin" >}}

By selecting the **Expose as microflow action**  option, you can expose the microflow as a microflow action. Exposing the microflow will make it appear in the **Toolbox** when you are editing a microflow in the category of your choice. When this action is used in a microflow, it will show the provided caption and icon.

The caption and category of the microflow action are required, but the icon is optional. When no icon is selected, the default microflow call action icon is used. The recommended size for the icon is 16x16 pixels.
