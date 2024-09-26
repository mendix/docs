---
title: "Module Settings"
url: /refguide/module-settings/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
In Studio Pro 10.3.0 and above, there are two tabs: **Java Dependencies** and **Export**. In versions below 10.3.0, the content of the **Export** tab is the only content of the dialog box.
{{% /alert %}}

## Introduction

Module settings allow you to set Java managed dependencies, choose the type of the module, and set a version for certain module types.

To open module settings, double-click **Settings** in the required module.

{{< figure src="/attachments/refguide/modeling/app-explorer/modules/module-settings/settings.png" class="no-border" >}}

## Java Dependencies

{{% alert color="info" %}}
Java managed dependencies are available in Studio Pro 10.3.0 and above.
{{% /alert %}}

You can add managed dependencies for each module on the **Java Dependencies** tab. For more information, see [Managed Dependencies](/refguide/managed-dependencies/).

{{< figure src="/attachments/refguide/modeling/app-explorer/modules/module-settings/module-settings-java-dependencies.png" class="no-border" >}}

## Export

Select the **Export** tab:

{{< figure src="/attachments/refguide/modeling/app-explorer/modules/module-settings/module-settings-export.png" class="no-border" >}}

### Module Type {#module-type}

There are three types of modules, and the choice of type depends on the purpose of the module. You can choose one the following:

* [App module](#app-module)
* [Add-on module](#add-on-module)
* [Solution Module](#solution-module)

{{% alert color="warning" %}}
If for some reason you switch from an add-on or solution module to an app module, or from an app module to a solution or an add-on module, the module data is lost once the new version of the app is deployed. Switching from an add-on to a solution module and from a solution to an add-on module is possible without loss of data. 
{{% /alert %}}

#### App Module {#app-module}

An app module is a standard way of structuring your app. Use app modules to distinguish between functional domains: create an app module for each relevant domain and put all pages, microflows, entities, and other documents in one place.

An app module is exported as a package file (*.mpk* ) that includes the full source code of the module.

#### Add-on Module {#add-on-module}

An add-on module is a standalone module that is not dependent on other modules. It is used as a separate element (for example, as a connector). 

An add-on module is exported as a module file (*.mxmodule*) that only exposes the elements with the **Usable** export level. For more information on export levels, see [Configuring Add-on and Solution Modules for Publishing](/refguide/configure-add-on-and-solution-modules/). Its source cannot be inspected by the consumer of the module.

If you are creating functionality that can be exported and used by other users separately and independently of the rest of the app, you can set your module to an add-on type.

When the module is set as the add-on module, it gets the letter **A** as an icon.

#### Solution Module {#solution-module}

Solution modules are only used for developing a solution and are an inseparable part of it. The set of solution modules used for the solution form the solution core. Solution modules are exported as a solution package and distributed as a solution to multiple consumers. For more information, see [How to Create Solutions](/appstore/creating-content/sol-solutions-guide/) in the *Marketplace Guide*.

When the module is set as the solution module, it gets the letter **S** as an icon.

### Module Version

{{% alert color="info" %}}
This setting is available only for add-on and solution module types.
{{% /alert %}}

This is the version number of the module. The version should be a semantic version (meaning, it should consist of at least three parts: major, minor, and patch version). For more information on semantic versions, see [Semantic Versioning](https://semver.org/).

Mendix recommends setting a new version every time changes are made to the module.

## Read More

* [Modules](/refguide/modules/)
* [Configure Add-on and Solution Modules for Publishing](/refguide/configure-add-on-and-solution-modules/)
* [IP Protection](/appstore/creating-content/sol-ip-protection/)
* [Create Solutions](/appstore/creating-content/sol-solutions-guide/)
