---
title: "Configuring Add-on and Solution Modules for Publishing"
url: /refguide/configure-add-on-and-solution-modules/
parent: "modules"
weight: 20
tags: ["studio pro", "add-on", "solution", "module", "modules"]
---

{{% alert color="warning" %}}

Access to this functionality is currently limited and can be gained through the [Mendix Vendor Program](/appstore/creating-content/vendor-program/).

{{% /alert %}}

## 1 Introduction

Add-on and solution modules are special types of modules that are developed to add functionality to an app. They have Intellectual Property (IP) protection enabled and have the *.mxmodule* extension. For more information on IP protection, see [IP Protection](/appstore/creating-content/sol-ip-protection/). 

The main *difference* between an add-on and a solution module is their purpose. An add-on module is developed to be a *stand-alone functionality* that other users can consume in the their apps, for example, an add-on can be a connector. 

Solution modules are *always part of a solution* – any Mendix app that is suitable to be sold to multiple different customers. Solution modules are dependent on each other and are inseparable. Solutions modules form the **solution core** of the solution. 

{{% alert color="info" %}}

Add-on and solution modules are not supported in Mendix Studio.

{{% /alert %}}

## 2 Configuring Add-on and Solution Modules

You can mark a standard module (app module) as an add-on or solution module at any time, but we recommend to do so right-away when you start developing. We also recommend changing the module version for add-on and solution modules every time you make changes to them. 

All content of add-on and solution modules is set to be hidden from consumers by default (modules have IP protection enabled). You can then decide what parts of the module you would like to make as usable, if any. For example, you can allow consumers to use certain entities and attributes. 

### 2.1 Changing Export Level of a Document/Element

Documents and some elements in the add-on and solution modules have the **Export level** property. This property defines whether the consumers will be able to use a certain document/element in their app. For more information on what documents and elements are supported for add-on and solution modules, see the [Supported Documents](#supported-documents) section below. 

The **Export level** has two values:

* **Hidden** – the document/element content is hidden from a consumer
* **Usable** – consumers are able to use the document/element in their apps; for example, you can mark some entities and their attributes as usable

To change the **Export level** and mark documents/elements as **Usable**, do the following:

1. In the App Explorer, double-click **Settings** of the module that you would like to set as an add-on or solution module. 

2. In the **Module settings** dialog box, select the type of the module and click **OK**.

3. Open the document/element that you would like to mark as **Usable**.

2. Navigate to its properties.

3. Set the **Export level** property to **Usable**:

    {{< figure src="/attachments/refguide/modeling/menus/view-menu/project-explorer/modules/configure-add-on-and-solution-modules/export-level-property.png" >}}   

You can see that documents/elements that are marked as usable have an **eye icon**, this means the document is a part of the API. The domain model gets an eye icon if any entity is usable. 

### 2.2 Supported Documents {#supported-documents}

Not all documents/elements can be marked as **Usable** in add-on and solution modules, some – can be **Hidden** only. 

Below is the list of documents and elements that can be mark as **Usable**:

* Domain Model:

    * Entity and attributes (including external entities)

    * Association
* Microflow
* Rules
* Enumeration
* Constants (when a constant is hidden, a consumer will not be able to configure its value in the **App settings**)
* Java Action
* Regular expressions
* Image collections
* Custom widgets

## 3 Exporting Add-on Modules and Solutions

### 3.1 Exporting Add-on Module Package

To export the add-on module, right-click it in the App Explorer and select **Export add-on module package**: 

{{< figure src="/attachments/refguide/modeling/menus/view-menu/project-explorer/modules/configure-add-on-and-solution-modules/export-add-on.png" >}}

It is possible to add files in an add-on module package, you can select them during export and they will be imported. 

{{< figure src="/attachments/refguide/modeling/menus/view-menu/project-explorer/modules/configure-add-on-and-solution-modules/select-depencencies-add-on-export.png" >}}

{{% alert color="info" %}}

Selection made above is not saved when exporting the module again, you need to select files for every subsequent export.

{{% /alert %}}

The add-on module gets an *.mxmodule* extension.

### 3.2 Exporting Solution Package

Solution package is an app package that will be sold as an out-of-the-box solution and can be used by multiple customers. It has a solution core that consists of solution modules. It can also consist of app modules and add-on modules. For more information on solutions, see [Creating Solutions](/appstore/creating-content/sol-solutions-guide/) in the *Marketplace Guide*.

To export the solution package, right-click the name of the app in the **App Explorer** and select **Export app package** or open the **File** menu > **Export App Package**. For more information on exporting, see [Export App Package](/refguide/export-project-package-dialog/).

The solution package gets an *.mxsolution* extension.

## 4 Updating Add-on and Solution Modules

When you update an individual add-on or a solution module to another version, you can export this module and distribute the new module package to your consumers. 

{{% alert color="warning" %}}

If, for some reason, you switch the add-on and solution module to an app module, for example, to provide source code to customers, their module data is lost once they upload a new version of this module to their app. 

{{% /alert %}}

## Read More

* [Creating Solutions](/appstore/creating-content/sol-solutions-guide/)
* [IP Protection](/appstore/creating-content/sol-ip-protection/)
* [Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/)
* [How to Import & Export Objects](/howto/integration/importing-and-exporting-objects/)

