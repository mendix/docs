---
title: "Microflow Properties"
url: /refguide/microflow/
weight: 1
---

## Introduction

This document describes the properties of a microflow. If you want to see what microflows are for and what kind of elements they contain, you can check [Microflows](/refguide/microflows/). If you want to know about the settings of the **Call a microflow** event action, you can check [Microflow Settings](/refguide/on-click-event/#microflow-settings).

## Properties

Microflow properties consist of the following sections:

* [General](#general)
* [Common](#common)
* [Usage](#usage)
* [Security](#security)
* [Concurrent execution](#concurrent)

### General Section {#general}

#### Return Type {#returntype}

The return type defines what information the microflow returns. The caller of the microflow will get a result of this type. See [Data Types](/refguide/data-types/) for the possible return types.

{{% alert color="info" %}}
To indicate whether or not an object should be committed, you can use Boolean as the return type of the microflow.
{{% /alert %}}

#### URL {#url}

Microflow URLs allow you to execute a microflow when the end-user navigates to a specific URL within your application. The microflow is executed during the client startup, just before the home page is shown. When the microflow executes a [Show page](/refguide/on-click-event/#show-page) activity, its page is the first page shown to the end-user. The microflow's full URL starts with the base URL of your application, followed by `/p/`, and then by the microflow's configured URL. For example, `http://example.mendixcloud.com/p/microflow` is the full URL for the microflow's configured URL `microflow`.

Microflows with parameters can also have URLs. Such cases require that all parameters are present in the URL. You should include the parameters in the URL by writing their names between brackets, for example, `my-microflow/{Name}` where `Name` is the parameter's name. 

For object parameters, the name of the parameter and the name of the attribute are used, for example, `my-microflow/{Product/Name}`. For primitive parameters, they are parsed from the URL and their values are directly passed to the microflow. However, for object parameters, an XPath query is used to retrieve the object by the value of the attribute.

For example, in the URL `product/{Product/Name}`, the `Name` attribute of the parameter `Product` will be used in the URL (in a browser, the URL appears as `http://example.mendixcloud.com/p/product/hammer`). Any attribute or primitive parameter of types `Boolean`, `Decimal`, `Enumeration`, `Integer`, `Long`, or `String` can be used in the URL. 

You can also use `Id` as an attribute to include the entity's identifier in the URL. This would appear as `product/{Product/Id}` for example. 

Alternatively, starting from Studio Pro 10.9.0, primitive parameters can be used as **Query string** parameters. Check the checkbox in the parameter's table to configure a microflow parameter to be used as a query string parameter. A query string parameter will be included in the query section of the URL, for example, `?MyParameter=MyValue&MyParameter_2=MySecondValue`. The ordering of query string parameters in the URL does not matter. If a query string parameter is missing in the URL, `empty` is passed to the microflow as the value for the parameter.

In the **Edit Microflow URL** dialog box, the configured URL is shown together with an example URL with example values filled in for the parameters. It also shows how the parameter will be retrieved:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/microflow/microflow-url.png" alt="microflow url dialog" max-width=80% >}}

{{% alert color="warning" %}}
URLs are not supported for microflows that have non-persistable entities or lists as parameters.
{{%/alert %}}

### Common Section {#common}

#### Name

**Name** is the internal name of the microflow. When referring to the microflow in the app you will use this name. It must be unique within the module, but you can have two microflows with the same name in different modules. When referring to the microflow, you will normally prepend the name of the module to ensure uniqueness and allow you to use microflows in other modules.

#### Export Level 

{{% alert color="info" %}}

This property is only available for add-on and solution modules. For more information on types of modules, see the [Module Types](/refguide/modules/#module-types) section in *Modules*. 

{{% /alert %}}

**Export level** allows you to define access level to this document on the consumer (customer) side when developing an add-on module or a solution. 

| Value              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Hidden *(default)* | The document/element content is hidden from a consumer.      |
| Usable             | Consumers can see the API and use the microflow in their app. They will not be able to see the contents of the microflow and how it is built. |

#### Documentation

**Documentation** allows you to describe your microflow to make it easier for people to use and modify it.

### Usage Section {#usage}

#### Mark as Used

You can search for unused items (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>, then select **Unused items** in the **Search for** drop-down menu) in Studio Pro. Microflows that are only called from Java code will be listed as unused, because Studio Pro cannot look inside the Java source code.

By enabling the property **Mark as used**, you explicitly specify that the microflow is used and Studio Pro will no longer list it when searching for unused items.

Default: *disabled*

### Security Section {#security}

#### Apply Entity Access

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

#### Allowed Roles

**Allowed roles** defines which [module role](/refguide/module-security/#module-role) the user must have to be able to execute the microflow.

{{% alert color="warning" %}}
These roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow, and these roles are not checked then.
{{% /alert %}}

For more information, see [Module Security](/refguide/module-security/).

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

## Expose as Microflow Action {#expose-as-microflow}

You can select this option by right-clicking in the microflow editor and selecting **Expose as action** > **Expose as microflow action**.

It is also accessible by right-clicking in the microflow editor and selecting **Properties**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/microflow/microflow-expose.jpg" alt="Expose as Microflow Action" width="550" class="no-border" >}}

By selecting the **Expose as microflow action**  option, you can expose the microflow as a microflow action and use the return type of the microflow to generate outcomes / paths in the workflow. Exposing the microflow will make it appear in the **Toolbox** when you are editing a microflow in the category of your choice. When this action is used in a microflow, it will show the provided caption and icon.

The **Caption** and **Category** of the workflow action are required, but the **Icon** and **Image** are optional. The image in the **Icon** property is used for the list view of the **Toolbox**, and the image in the **Image** property – for the toolbox tile view. For more information, see the [Toolbox](/refguide/view-menu/#toolbox) section in the **View Menu**.

The required size for the icon is 64x64 pixels, and 256x192 pixels for the image; the required image format for both is PNG. 

A separate icon and image can be provided for the [dark mode](/refguide/preferences-dialog/#studio-pro-theme) of Studio Pro to fit its color scheme.

{{% alert type="info" %}}

When no icon and no image are selected, the default microflow call action icon and image are used.

If only icon is specified, the icon image will be used for the toolbox tile view.

{{% /alert %}}

## Expose as Workflow Action {#expose-as-workflow-action}

You can select this option by right-clicking in the microflow editor and selecting **Expose as action** > **Expose as workflow action**.

It is also accessible by right-clicking in the microflow editor and selecting **Properties**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/microflow/workflow-expose.jpg" alt="Expose As Workflow Action" width="550" class="no-border" >}}

By selecting the **Expose as workflow action** option, you can expose the microflow as a [workflow](/refguide/workflows/) action. Exposing the workflow will make it appear in the **Toolbox** of a [workflow editor](/refguide/workflows/) in the category of your choice. When this action is used in a workflow, it will show the provided caption and icon.

The **Caption** and **Category** of the workflow action are required, but the **Icon** and **Image** are optional. The image in the **Icon** property is used for the list view of the **Toolbox**, and the image in the **Image** property – for the toolbox tile view. For more information, see the [Toolbox](/refguide/view-menu/#toolbox) section in the *View Menu*.

The required size for the icon is 64x64 pixels, and 256x192 pixels for the image; the required image format for both is PNG. 

A separate icon and image can be provided for the [dark mode](/refguide/preferences-dialog/#studio-pro-theme) of Studio Pro to fit its color scheme.

{{% alert type="info" %}}

When no icon and no image are selected, the default workflow call action icon and image are used.

If only icon is specified, the icon image will be used for the toolbox tile view.

{{% /alert %}}
