---
title: "Microflow Properties"
url: /refguide9/microflow/
weight: 1
---

## Introduction

This document describes the properties of a microflow. If you want to see what microflows are for and what kind of elements they contain, you can check [Microflows](/refguide9/microflows/). If you want to know about the settings of the **Call a microflow** event action, you can check [Microflow Settings](/refguide9/on-click-event/#microflow-settings).

## Properties

An example of microflow properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/microflow/microflow-properties.png" alt="Microflow Properties"   width="250"  class="no-border" >}}

Microflow properties consist of the following sections:

* [Common](#common)
* [Concurrent execution](#concurrent)
* [Output](#output)
* [Security](#security)
* [Usage](#usage)

### Common Section {#common}

#### Name

**Name** is the internal name of the microflow. When referring to the microflow in the app you will use this name. It must be unique within the module, but you can have two microflows with the same name in different modules. When referring to the microflow, you will normally prepend the name of the module to ensure uniqueness and allow you to use microflows in other modules.

#### Export Level 

{{% alert color="info" %}}

This property is only available for add-on and solution modules. For more information on types of modules, see the [Module Types](/refguide9/modules/#module-types) section in *Modules*. 

{{% /alert %}}

**Export level** allows you to define access level to this document on the consumer (customer) side when developing an add-on module or a solution. 

| Value              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Hidden *(default)* | The document/element content is hidden from a consumer.      |
| Usable             | Consumers can see the API and use the microflow in their app. They will not be able to see the contents of the microflow and how it is built. |

#### Documentation

**Documentation** allows you to describe your microflow to make it easier for people to use and modify it.

### Concurrent Execution Section {#concurrent}

#### Disallow

The **Disallow** property allows you to specify whether the microflow can be executed multiple times concurrently. This applies to all end-users who are using the app, not just within one user session.

Disallowing concurrent execution of a microflow can be useful if a microflow would interfere with another running instance (for example, if it accesses a global resource).

| Option | Description |
| --- | --- |
| No *(default)*  | It is possible to execute the microflow more than once concurrently. |
| Yes | It is not possible to execute the microflow more than once concurrently; the user receives a message or another microflow is executed instead. |

#### Error Message

**Error message** defines the message the user gets when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed. This will not be shown if there is an **Error microflow** defined.

#### Error Microflow

**Error microflow** defines another microflow to execute when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed. When set, there will be no further message shown to the user.

### Output Section {#output}

#### Return Type

The return type defines what information the microflow returns. The caller of the microflow will get a result of this type. See [Data Types](/refguide9/data-types/) for the possible return types.

{{% alert color="info" %}}
To indicate whether or not an object should be committed, you can use Boolean as the return type of the microflow.
{{% /alert %}}

### Security Section {#security}

#### Apply Entity Access

**Apply entity access** indicates whether entity access based on the current user is applied when performing operations on objects. Setting this to yes limits the objects that are retrieved by the [retrieve action](/refguide9/retrieve/) to only those that the current user is allowed to see. Similarly, when reading and writing attributes and associations the entity access of the current user is applied. Conversely, if entity access is not applied, all operations are allowed and all objects are retrieved.

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

#### Allowed Roles

**Allowed roles** defines which [module role](/refguide9/module-security/#module-role) the user must have to be able to execute the microflow.

{{% alert color="warning" %}}
These roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow, and these roles are not checked then.
{{% /alert %}}

For more information, see [Module Security](/refguide9/module-security/).

### Usage Section {#usage}

#### Mark as Used

You can search for unused items (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>, then select **Unused items** in the **Search for** drop-down menu) in Studio Pro. Microflows that are only called from Java code will be listed as unused, because Studio Pro cannot look inside the Java source code.

By setting the property **Mark as used** to **Yes**, you explicitly specify that the microflow is used and Studio Pro will no longer list it when searching for unused items.

Default: *No*

## Expose as Microflow Action {#expose-as-microflow}

This property is accessible by right-clicking in the microflow and selecting **Properties**.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/microflow/microflow-expose.jpg" alt="Expose as Microflow Action" width="550" class="no-border" >}}

By selecting the **Expose as microflow action**  option, you can expose the microflow as a microflow action and use the return type of the microflow to generate outcomes / paths in the workflow. Exposing the microflow will make it appear in the **Toolbox** when you are editing a microflow in the category of your choice. When this action is used in a microflow, it will show the provided caption and icon.

The **Caption** and **Category** of the workflow action are required, but the **Icon** and **Image** are optional. The image in the **Icon** property is used for the list view of the **Toolbox**, and the image in the **Image** property – for the toolbox tile view. For more information, see the [Toolbox](/refguide9/view-menu/#toolbox) section in the **View Menu**.

The required size for the icon is 64x64 pixels, and 256x192 pixels for the image; the required image format for both is PNG. 

A separate icon and image can be provided for the [dark mode](/refguide9/preferences-dialog/#dark-mode) of Studio Pro to fit its color scheme.

{{% alert type="info" %}}

When no icon and no image are selected, the default microflow call action icon and image are used.

If only icon is specified, the icon image will be used for the toolbox tile view.

{{% /alert %}}

## Expose as Workflow Action {#expose-as-workflow-action}

This property is accessible by right-clicking in the microflow and selecting **Properties**.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/microflow/workflow-expose.jpg" alt="Expose As Workflow Action" width="550" class="no-border" >}}

By selecting the **Expose as workflow action** option, you can expose the microflow as a [workflow](/refguide9/workflows/) action. Exposing the workflow will make it appear in the **Toolbox** of a [workflow editor](/refguide9/workflows/) in the category of your choice. When this action is used in a workflow, it will show the provided caption and icon.

The **Caption** and **Category** of the workflow action are required, but the **Icon** and **Image** are optional. The image in the **Icon** property is used for the list view of the **Toolbox**, and the image in the **Image** property – for the toolbox tile view. For more information, see the [Toolbox](/refguide9/view-menu/#toolbox) section in the *View Menu*.

The required size for the icon is 64x64 pixels, and 256x192 pixels for the image; the required image format for both is PNG. 

A separate icon and image can be provided for the [dark mode](/refguide9/preferences-dialog/#dark-mode) of Studio Pro to fit its color scheme.

{{% alert type="info" %}}

When no icon and no image are selected, the default workflow call action icon and image are used.

If only icon is specified, the icon image will be used for the toolbox tile view.

{{% /alert %}}
