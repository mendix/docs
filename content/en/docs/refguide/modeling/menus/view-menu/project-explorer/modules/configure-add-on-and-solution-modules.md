---
title: "Configuring Add-on and Solution Modules for Publishing"
url: /refguide/configure-add-on-and-solution-modules/
parent: "modules"
weight: 20
tags: ["studio pro", "add-on", "solution", "module", "modules"]
---

## 1 Introduction

Add-on and solution modules are special types of modules that are developed to add functionality to an app. They have Intellectual Property (IP) protection enabled and have the *.mxmodule* extension. For more information on IP protection, see [IP Protection](/appstore/creating-content/sol-ip-protection/). 

The main *difference* between an add-on and a solution module is their purpose. An add-on module is developed to be a *stand-alone functionality* that others users can consume in the their apps, for example, an add-on can be a connector. 

Solution modules are *always part of a solution* – any Mendix app that is suitable to be sold to multiple different customers. Solution modules are dependent on each other and are inseparable. Solutions modules form the **solution core** of the solution. 

{{% alert type="info" %}}

Add-on and solution modules are not supported in Mendix Studio.

{{% /alert %}}

## 2 Configuring Add-on and Solution Modules

You can mark a standard module (app module) as an add-on or solution module at any time, but we recommend to do so right-away when you start developing. 

All content of add-on and solution modules is set to be hidden from consumers (has IP protection enabled) by default. You can then decide what parts of the module you would like to make usable, if any. For example, you can allow consumers to see how one of the microflows is configured or allow them to use certain entities and attributes. 

### 2.1 Changing Export Level of a Document/Element

Documents and some elements in the add-on and solution module have the **Export level** property. This property defines whether the consumers will be able to see the contents of the document/element and use it. For more information on what documents and elements are supported for add-on and solution modules, see the [Supported Documents](#supported-documents) section below. 

The **Export level** has two values:

* **Hidden** – the document/element content is hidden from a consumer; for example, microflow's implementation can be hidden
* **Usable** – consumers can see the content of the document/element; for example, you can mark some entities and their attributes as usable

To change the **Export level** and mark documents/elements as **Usable**, do the following:

1. In the App Explorer, double-click **Settings** of the module that you would like to set as an add-on or solution module. 

2. In the **Module settings** dialog box, select the type of the module and click **OK**.

3. Open the document/element that you would like to mark as **Usable**.

2. Navigate to its properties.

3. Set the **Export level** property to **Usable**:

   ![](attachments/add-on-and-solution-modules/export-level-property.png)
   

You can see that documents/elements that are marked as usable have an **eye icon**, this means the document is part of the API. The domain model gets an eye icon if any entities are usable. 

### 2.2 Supported Documents {#supported-documents}

The following documents and elements are supported in add-on and solution modules:

* Domain Model:

    * Entity and attributes (including external entities)

    * Association
* Microflow
* Rules
* Enumeration
* Constants (when a constant is hidden, a consumer will not be able to configure its value in the **App settings**)
* Java Action
* Integration documents (the **Export level** can be **Hidden** only):

    * Published rest service (**Consume Rest Service** microflow action is also supported)
    * Consumed web service
    * Message definitions
    * Import mapping
    * Export mapping
    * JSON structure
    * XML schema
* Scheduled Events (the **Export type** can be **Hidden** only)
* Regular expressions
* Image collections
* Custom widgets

{{% alert type="info" %}}

If the element or document cannot be used in the add-on or solution module, the **Export level** property will not be shown. 

{{% /alert %}}

## 3 Exporting Add-on Modules and Solutions

### 3.1 Exporting Add-on Module Package

To export the add-on module, right-click it in the App Explorer and select **Export add-on module package**: 

![](attachments/add-on-and-solution-modules/export-add-on.png)

It is possible to add files in an add-on module package, you can select them during export and they will be imported. 

![](attachments/add-on-and-solution-modules/select-depencencies-add-on-export.png)

{{% alert type="info" %}}

Resources selected above are not remembered when exporting the module again and need to be selected for every subsequent export.

{{% /alert %}}

The add-on module gets an *.mxmodule* extension.

### 3.2 Exporting Solution Package

Solution package is an app package that will be sold as an out-of-the-box solution and can be used by multiple customers. It has a **solution core** that consists of solution modules. It can also consist of standard modules (app modules) and add-on modules. For more information on solutions, see [Creating Solutions](/appstore/creating-content/sol-solutions-guide/) in the *Marketplace Guide*.

To export the solution package, right-click the name of the app in the **App Explorer** and select **Export app package** or open the **File** menu > **Export App Package**. For more information on exporting, see [Export App Package](/refguide/export-app-package-dialog/).

The solution package gets an *.mxsolution* extension.

## 4 Updating Add-on and Solution Modules

When you update an individual add-on or a solution module to another version, you can export this module and distribute the new module package to your consumers. 

{{% alert type="warning" %}}

If, for some reason, you switch the add-on and solution module to an app module, for example, to provide source code to customers, their module data is lost once they upload a new version of this module to their app. 

{{% /alert %}}

## Read More

*  [Creating Solutions](/appstore/creating-content/sol-solutions-guide/)
* [IP Protection](/appstore/creating-content/sol-ip-protection/)
* [Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/)
* [How to Import & Export Objects](/howto/integration/importing-and-exporting-objects/)

