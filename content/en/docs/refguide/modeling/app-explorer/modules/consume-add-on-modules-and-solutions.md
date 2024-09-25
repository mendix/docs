---
title: "Consuming Add-on Modules and Solutions"
url: /refguide/consume-add-on-modules-and-solutions/
linktitle: "Consume Add-on Modules and Solutions"
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

An *add-on module* is a special type of module that adds functionality to your app. It has Intellectual Property (IP) protection enabled and has the *.mxmodule* extension. An add-on module is developed to be a *standalone functionality* that other users can consume in their apps, for example, an add-on can be a connector. 

A *solution* is a Mendix app that has out-of-the-box solution suitable for multiple customers. Solution, as any other app, may consist of several modules, including app modules (standard modules) and add-on modules, but it also has solution modules that form the **solution core**. Solution modules have IP protection enabled. For more information on IP protection, see [IP Protection](/appstore/creating-content/sol-ip-protection/). 

## Limitations

When consuming add-on modules and solutions, you may come across the following limitations:

* When debugging add-on and solution modules, you cannot step into microflows, debugging will automatically use **Step Over**.
* If app modules and add-on modules or solutions have conflicting custom widgets, you are prompted with a warning showing the sources of the conflicts (module and widget package names) to find a workaround. An automatic fix is not implemented.
* When a constant is hidden, you cannot configure its value in the **App settings**. For more information on app settings, see the [Configuration Tab](/refguide/app-settings/#configurations) section in *App Settings*. 

## Importing an Add-on Module 

There are several ways to import an add-on module from the Marketplace. For more information, see the [Installing Marketplace Content](/appstore/use-content/#install) section in *Using Marketplace Content*.

You can also add an add-on module to your app not through the Marketplace. For more information, see the [Importing Module Package](/refguide/import-and-export/#import-module) section in *Importing and Exporting Apps, Modules, Widgets, and Documents*. 

## Importing a Solution Package 

A solution package is imported to your app as any other app package. For more information, see the [Importing App Packages](/refguide/import-and-export/#import-app-package) section in *Importing and Exporting Apps, Modules, Widgets, and Documents*. 

## Working with Add-on Modules and Solutions in Your App

When you import an add-on module, it shows up in the **Add-ons** folder in the App Explorer. The main difference of the add-on module is that the implementation details of some functionality and elements, such as microflows, are *hidden* from consumers so that IP is protected. This means that add-on modules have a clear API: you know which elements you can use. For example, when you open a microflow, you will see its API including the microflow and parameter documentation. You cannot see how the microflow is built, but you are able to use it in your app, for example, you can call the microflow with protected implementation from another microflow:

{{< figure src="/attachments/refguide/modeling/app-explorer/modules/consume-add-on-modules-and-solutions/protected-microflow.png" class="no-border" >}}

You also might not see the full domain model of the module, only entities, attributes, and associations that were specifically exposed by the publisher. The visible parts of the domain model are intended to be reused; hidden elements are not needed for proper use of the module.

## Deleting a Consumed Add-on Module 

To delete an add-on module, do one of the following:

1. Right-click the module and select **Delete**.
1. Go to **App** > **Show App Directory in Explorer** to open the app folder; browse to the **modules** folder and remove the .*mxmodule* file from there.

The module is deleted from your app.

## Read More

* [IP Protection](/appstore/creating-content/sol-ip-protection/)
* [Using Marketplace Content](/appstore/use-content/)
* [Importing and Exporting Apps, Modules, Widgets, and Documents](/refguide/import-and-export/)
