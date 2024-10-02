---
title: "Module Settings"
url: /refguide9/module-settings/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
In Studio Pro 9, add-on modules and solution modules were previously available in preview for select customers and partners as part of an early access program. In Studio Pro 10, this functionality is generally available for all users. For more information, see this page in the [Studio Pro 10 Guide](/refguide/module-settings/).
{{% /alert %}}

## Introduction

Module settings allow you to choose the type of the module when you build your app and to set a version for certain module types:

{{< figure src="/attachments/refguide9/modeling/app-explorer/modules/module-settings/module-settings-dialog.png" class="no-border" >}}

To open module settings, select the module in the App Explorer and double-click **Settings**:

{{< figure src="/attachments/refguide9/modeling/app-explorer/modules/module-settings/settings.png" class="no-border" >}}

## Module Type {#module-type}

There are three different types of modules and the choice of the type depends on the purpose of the module. You can choose one the following:

* [App module](#app-module)
* [Add-on module](#add-on-module)
* [Solution Module](#solution-module)

### App Module {#app-module}

**App module** is a standard way of structuring your app. Use app modules to distinguish between functional domains: create an app module for each relevant domain and put all pages, microflows, entities, and other documents in one place.

An **App module** is exported as a package file (*.mpk* ) that includes the full source code of the module.

### Add-on Module {#add-on-module}

An **add-on module** is a standalone module that is not dependent on other modules and is used as a separate element, for example, as a connector. 

An add-on module is exported as an module file (*.mxmodule*) that only exposes the elements with the **Usable** export level. For more information on Export levels, see [Configuring Add-on and Solution Modules for Publishing](/refguide9/configure-add-on-and-solution-modules/). Its source cannot be inspected by the consumer of the module.

If you are creating functionality that can be exported and used by other users separately and independently of the rest of the app, you can set your module to an add-on type.  

When the module is set as the add-on module, it gets the letter A as an icon.

### Solution Module {#solution-module}

**Solution modules** are only used for developing a solution and are an inseparable part of it. Set of solution modules used for the solution form the **solution core**. Solution modules are exported as a solution package and distributed as a solution to multiple consumers. For more information on solutions, see [Create Solutions](/appstore/creating-content/sol-solutions-guide/) in the *Marketplace Guide*.

When the module is set as the solution module, it gets the letter S as an icon.

## Module Version

{{% alert color="info" %}}
This setting is available for only add-on and solution module types.
{{% /alert %}}

A version number of the module. The version should be a semantic version (i.e. consisting of at least three parts: major, minor, and patch version). For more information on semantic versions, see [Semantic Versioning](https://semver.org/).

Mendix recommends setting a new version every time changes are made to the module. 

## Read More

* [Modules](/refguide9/modules/)
* [Configure Add-on and Solution Modules for Publishing](/refguide9/configure-add-on-and-solution-modules/)
* [IP Protection](/appstore/creating-content/sol-ip-protection/)
* [Create Solutions](/appstore/creating-content/sol-solutions-guide/)
