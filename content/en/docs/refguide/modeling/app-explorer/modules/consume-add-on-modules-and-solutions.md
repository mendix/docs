---
title: "Consuming Add-on Modules and Solutions"
url: /refguide/consume-add-on-modules-and-solutions/
linktitle: "Consuming Add-on Modules and Solutions"
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

An *add-on module* is a special type of module that adds functionality to your app. It has Intellectual Property (IP) protection enabled and has the *.mxmodule* extension. An add-on module is developed to be a *standalone functionality* that other users can consume in their apps, for example, an add-on can be a connector. 

A *solution* is a Mendix app that has out-of-the-box solution suitable for multiple customers. Solution, as any other app, may consist of several modules, including app modules (standard modules) and add-on modules, but it also has solution modules that form the **solution core**. Solution modules have IP protection enabled. For more information on IP protection, see [IP Protection](/appstore/creating-content/sol-ip-protection/). 

## Limitations

When consuming add-on modules and solutions, you may come across the following limitations and known issues:

* When debugging add-on and solution modules, you cannot step into microflows, debugging will automatically use **Step Over**.
* If app modules and add-on modules or solutions have conflicting custom widgets, you are prompted with a warning showing the sources of the conflicts (module and widget package names) to find a workaround. An automatic fix is not implemented.
* When a constant is hidden, you cannot configure its value in the **App settings**. For more information on app settings, see the [Configuration Tab](/refguide/configurations-tab/) section in *App Settings*. 
* If there are add-on modules imported into Studio Pro and the application is deployed for Eclipse using menu option **App > Deploy for Eclipse**, there are known build failures in Java source code.
* If you set the default language to something other than English, and if there is no translation for that language, an error is thrown. To avoid this, set English as the default language.

## Importing an Add-on Module 

There are several ways to import an add-on module from the Marketplace. For more information, see the [Installing Marketplace Content](/appstore/use-content/#install) section in *Using Marketplace Content*.

You can also add an add-on module to your app not through the Marketplace. For more information, see the [Importing Module Package](/refguide/import-and-export/#import-module) section in *Importing and Exporting Apps, Modules, Widgets, and Documents*. 

## Importing a Solution Package 

A solution package is imported to your app as any other app package. For more information, see the [Importing App Packages](/refguide/import-and-export/#import-app-package) section in *Importing and Exporting Apps, Modules, Widgets, and Documents*. 

## Working with Add-on Modules and Solutions in Your App

When you import an add-on module, it shows up in the **Add-ons** folder in the App Explorer. The main difference of the add-on module is that the implementation details of some functionality and elements, such as microflows, are *hidden* from consumers so that IP is protected. This means that add-on modules have a clear API: you know which elements you can use. For example, when you open a microflow, you will see its API including the microflow and parameter documentation. You cannot see how the microflow is built, but you are able to use it in your app, for example, you can call the microflow with protected implementation from another microflow:

{{< figure src="/attachments/refguide/modeling/app-explorer/modules/consume-add-on-modules-and-solutions/protected-microflow.png" class="no-border" >}}

You also might not see the full domain model of the module, only entities, attributes, and associations that were specifically exposed by the publisher. The visible parts of the domain model are intended to be reused; hidden elements are not needed for proper use of the module.

## Replacing an Add-on Module with an App Module {#replace-add-on-module}

{{% alert color="info" %}}
This feature requires Studio Pro 11.XX or above. <!-- TODO verify: target release (SOLP-4040 has no fix version; it blocks SOLP-4162 which targets 11.18). -->
{{% /alert %}}

Add-on and solution modules are being deprecated. Publishers can therefore provide a new version of a previously protected module as a standard app module (*.mpk* file). When you receive this package, you can replace the add-on module (*.mxmodule* file) in your app with the app module without losing data. <!-- TODO verify: whether solution modules are covered as well. -->

When you replace the add-on module, Studio Pro keeps the storage identifiers of entities, attributes, and associations from the add-on module. Existing data in your database is therefore retained. Studio Pro also keeps the document identifiers, so references from your own modules to documents in the replaced module continue to work.

To replace an add-on module with an app module, follow these steps: <!-- TODO verify: entry point and captions. SOLP-4040 mentions Import Module Package and Marketplace download, while its title mentions Update from file. Not implemented yet. -->

1. Commit all your changes. <!-- TODO verify: whether version control or a clean working copy is required. -->
1. Obtain the app module package (*.mpk*) of the module from the publisher, either from the Marketplace or as a file.
1. Right-click your app in the **App Explorer** and select **Import Module Package**, then select the *.mpk* file. Alternatively, download the new version from the Marketplace.
1. In the **Import Module** dialog box, select **Replace existing module** and select the add-on module as the **Module to replace**.
1. Click **Import**.

The module is now shown as an app module in the **App Explorer**, and you can view and change its implementation.

{{% alert color="info" %}}
You can only replace an add-on module with a package that the publisher provides. You cannot convert an add-on module that is already in your app into an app module yourself.
{{% /alert %}}

{{% alert color="warning" %}}
Add-on modules that contain an extension cannot be converted to app modules.
{{% /alert %}}

## Deleting a Consumed Add-on Module 

To delete an add-on module, do one of the following:

1. Right-click the module and select **Delete**.
1. Go to **App** > **Show App Directory in Explorer** to open the app folder; browse to the **modules** folder and remove the .*mxmodule* file from there.

The module is deleted from your app.

## Read More

* [IP Protection](/appstore/creating-content/sol-ip-protection/)
* [How to Use Marketplace Content](/appstore/use-content/)
* [Importing and Exporting Apps, Modules, Widgets, and Documents](/refguide/import-and-export/)
