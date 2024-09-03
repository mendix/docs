---
title: "Configuring Add-on and Solution Modules for Publishing"
linktitle: "Publish Add-on and Solution Modules"
url: /refguide/configure-add-on-and-solution-modules/
weight: 20
---

## Introduction

Add-on and solution modules are special types of modules that are developed to add functionality to an app. They have [intellectual property (IP) protection](/appstore/creating-content/sol-ip-protection/) enabled, and they have the *.mxmodule* extension. For more information on IP protection, see . 

The main difference between an add-on and a solution module is their purpose. An add-on module is developed to be a standalone functionality that other users can consume in the their apps (for example, an add-on can be a connector). 

Solution modules are always part of a solution, which is any Mendix app that is suitable to be sold to multiple different customers. Solution modules are dependent on each other and are inseparable. Solutions modules form the solution core of the solution. 

## Configuring Add-on and Solution Modules

You can mark a standard module (app module) as an add-on or solution module at any time, but Mendix recommends doing so right as you start developing. Mendix also recommends changing the module version for add-on and solution modules every time you make changes to them. 

All the content in add-on and solution modules is set to be hidden from consumers by default (as modules have IP protection enabled). You can then decide what parts of the module you would like to make as usable, if any. For example, you can allow consumers to use certain entities and attributes. 

### Changing the Export Level of a Document/Element {#export-level}

Documents and some elements in the add-on and solution modules have the **Export level** property. This property defines whether the consumers are able to use a certain document/element in their app. For details on what documents and elements are supported for add-on and solution modules, see the [Supported Documents](#supported-documents) section below. 

The **Export level** has two values:

* **Hidden** – the document/element content is hidden from a consumer
* **Usable** – consumers are able to use the document/element in their apps (for example, you can mark some entities and their attributes as usable)

To change the **Export level** and mark documents/elements as **Usable**, do the following:

1. In **App Explorer**, double-click **Settings** for the module you would like to set as an add-on or solution module. 
2. In the **Module settings** dialog box, select the type of the module and click **OK**.
3. Open the document/element that you would like to mark as **Usable**.
4. Navigate to its properties.
5. Set the **Export level** property to **Usable**:

    {{< figure src="/attachments/refguide/modeling/app-explorer/modules/configure-add-on-and-solution-modules/export-level-property.png" class="no-border" >}}   

You can see that documents/elements that are marked as usable have an eye icon ({{% icon name="view" %}}). This means the document is a part of the API. The domain model gets an eye icon if any entity is usable. 

### Supported Documents {#supported-documents}

Not all documents/elements can be marked as **Usable** in add-on and solution modules. Some can only be **Hidden**. 

Below is the list of documents and elements that can be mark as **Usable**:

* Domain model:
    * Entity and attributes (including external entities)
    * Association
* Microflow
* Rules
* Enumeration
* Constants (when a constant is hidden, a consumer is not able to configure its value in the **App settings**)
* Java Action
* Regular expressions
* Image collections
* Custom widgets

{{% alert color="info" %}}
Pages cannot be made **Usable**. Instead, a navigation microflow that opens the page can be made **Usable**.
{{% /alert %}}

## Exporting Add-on Modules and Solutions {#export}

{{% alert color="info" %}}
Before exporting an add-on module or a solution to customers, note that only English (US) is shipped by default. This may be important if your app is in another language (meaning, not English (US)) and your customers decide to translate the consumed solution or add-on to other languages. To avoid confusion, open [Language](/refguide/translatable-texts/) > **Language Operations** and select the **Delete** operation for English (US). For details on performing a certain operation, see [Language Operations](/refguide/language-operations/).
{{% /alert %}}

### Exporting Add-on Module Package

To export the add-on module, right-click it in the **App Explorer** and select **Export add-on module package**: 

{{< figure src="/attachments/refguide/modeling/app-explorer/modules/configure-add-on-and-solution-modules/export-add-on.png" class="no-border" >}}

It is possible to add files in an add-on module package. You can select them during export, and they will be imported. 

{{< figure src="/attachments/refguide/modeling/app-explorer/modules/configure-add-on-and-solution-modules/select-depencencies-add-on-export.png" class="no-border" >}}

{{% alert color="info" %}}
The selection made above is not saved when exporting the module again. You need to select the files for every subsequent export.
{{% /alert %}}

The add-on module gets an *.mxmodule* extension.

### Exporting Solution Package

A solution package is an app package that can be sold as an out-of-the-box solution and can be used by multiple customers. It has a solution core that consists of solution modules. It can also consists of app modules and add-on modules. For more information, see [How to Create Solutions](/appstore/creating-content/sol-solutions-guide/) in the *Marketplace Guide*.

To export the solution package, right-click the name of the app in the **App Explorer** and select **Export app package**, or open **File** > **Export App Package**. For more information, see [Export App Package](/refguide/export-app-package-dialog/).

The solution package gets an *.mxsolution* extension.

## Updating Add-on and Solution Modules

When you update an individual add-on or a solution module to another version, you can export this module and distribute the new module package to your consumers. 

{{% alert color="warning" %}}
If for some reason you switch the add-on and solution module to an app module (for example, to provide the source code to customers), their module data is lost once they upload a new version of this module to their app.
{{% /alert %}}

## Read More

* [Create Solutions](/appstore/creating-content/sol-solutions-guide/)
* [IP Protection](/appstore/creating-content/sol-ip-protection/)
* [Using Marketplace Content](/appstore/use-content/)
* [Import and Export Apps, Modules, Widgets, and Documents](/refguide/import-and-export/)
