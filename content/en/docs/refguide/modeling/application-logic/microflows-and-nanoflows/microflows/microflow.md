---
title: "Microflow Properties"
url: /refguide/microflow/
tags: ["microflow", "entity access"]
---

## 1 Introduction

This document describes the properties of a microflow. If you want to see what microflows are for and what kind of elements they contain, you can check [Microflows](/refguide/microflows/).

## 2 Properties

An example of microflow properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/microflow/microflow-properties.png" alt="Microflow Properties"   width="250"  >}}

Microflow properties consist of the following sections:

* [Common](#common)
* [Concurrent execution](#concurrent)
* [Output](#output)
* [Security](#security)
* [Usage](#usage)

### 2.1 Common Section {#common}

#### 2.1.1 Name

**Name** is the internal name of the microflow. When referring to the microflow in the app you will use this name. It must be unique within the module, but you can have two microflows with the same name in different modules. When referring to the microflow, you will normally prepend the name of the module to ensure uniqueness and allow you to use microflows in other modules.

#### 2.1.2 Export Level 

{{% alert color="info" %}}

This property is only available for add-on and solution modules. For more information on types of modules, see the [Module Types](/refguide/modules/#module-types) section in *Modules*. 

{{% /alert %}}

**Export level** allows you to define access level to this document on the consumer (customer) side when developing an add-on module or a solution. 

| Value              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Hidden *(default)* | The document/element content is hidden from a consumer.      |
| Usable             | Consumers can see the API and use the microflow in their app. They will not be able to see the contents of the microflow and how it is built. |

#### 2.1.3 Documentation

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

The return type defines what information the microflow returns. The caller of the microflow will get a result of this type. See [Data Types](/refguide/data-types/) for the possible return types.

{{% alert color="info" %}}
To indicate whether or not an object should be committed, you can use Boolean as the return type of the microflow.
{{% /alert %}}

### 2.4 Security Section {#security}

#### 2.4.1 Apply Entity Access

**Apply entity access** indicates whether entity access based on the current user is applied when performing operations on objects. Setting this to yes limits the objects that are retrieved by the [retrieve action](/refguide/retrieve/) to only those that the current user is allowed to see. Similarly, when reading and writing attributes and associations the entity access of the current user is applied. Conversely, if entity access is not applied, all operations are allowed and all objects are retrieved.

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

**Allowed roles** defines which [module role](/refguide/module-security/#module-role) the user must have to be able to execute the microflow.

{{% alert color="warning" %}}
These roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow, and these roles are not checked then.
{{% /alert %}}

For more information, see [Module Security](/refguide/module-security/).

### 2.5 Usage Section {#usage}

#### 2.5.1 Mark as Used

You can search for unused items (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>, then select **Unused items** in the **Search for** drop-down menu) in Studio Pro. Microflows that are only called from Java code will be listed as unused, because Studio Pro cannot look inside the Java source code.

By setting the property **Mark as used** to **Yes**, you explicitly specify that the microflow is used and Studio Pro will no longer list it when searching for unused items.

Default: *No*

## 3 Expose as Microflow Action

This property is accessible by right-clicking in the microflow and selecting **Properties**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/microflow/microflow-expose.jpg" alt="Expose as Microflow Action" width="550" >}}

By selecting the **Expose as microflow action**  option, you can expose the microflow as a microflow action and use the return type of the microflow to generate outcomes / paths in the workflow. Exposing the microflow will make it appear in the **Toolbox** when you are editing a microflow in the category of your choice. When this action is used in a microflow, it will show the provided caption and icon.

The **Caption** and **Category** of the workflow action are required, but the **Icon** and **Image** are optional. The image in the **Icon** property is used for the list view of the **Toolbox**, and the image in the **Image** property – for the toolbox tile view. For more information, see the [Toolbox](/refguide/view-menu/#toolbox) section in the **View Menu**.

The required size for the icon is 64x64 pixels, and 256x192 pixels for the image; the required image format for both is PNG. 

A separate icon and image can be provided for the [dark mode](/refguide/preferences-dialog/#dark-mode) of Studio Pro to fit its color scheme.

{{% alert type="info" %}}

When no icon and no image are selected, the default microflow call action icon and image are used.

If only icon is specified, the icon image will be used for the toolbox tile view.

{{% /alert %}}

## 4 Expose as Workflow Action {#expose-as-workflow-action}

This property is accessible by right-clicking in the microflow and selecting **Properties**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/microflow/workflow-expose.jpg" alt="Expose As Workflow Action" width="550" >}}

By selecting the **Expose as workflow action** option, you can expose the microflow as a [workflow](/refguide/workflows/) action. Exposing the workflow will make it appear in the **Toolbox** of a [workflow editor](/refguide/workflows/) in the category of your choice. When this action is used in a workflow, it will show the provided caption and icon.

The **Caption** and **Category** of the workflow action are required, but the **Icon** and **Image** are optional. The image in the **Icon** property is used for the list view of the **Toolbox**, and the image in the **Image** property – for the toolbox tile view. For more information, see the [Toolbox](/refguide/view-menu/#toolbox) section in the *View Menu*.

The required size for the icon is 64x64 pixels, and 256x192 pixels for the image; the required image format for both is PNG. 

A separate icon and image can be provided for the [dark mode](/refguide/preferences-dialog/#dark-mode) of Studio Pro to fit its color scheme.

{{% alert type="info" %}}

When no icon and no image are selected, the default workflow call action icon and image are used.

If only icon is specified, the icon image will be used for the toolbox tile view.

{{% /alert %}}
