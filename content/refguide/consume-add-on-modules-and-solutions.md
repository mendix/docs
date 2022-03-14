---
title: "Consuming Add-on Modules and Solutions"
parent: "modules"
menu_order: 20
tags: ["studio pro", "add-on", "solution", "module", "modules"]
---

## 1 Introduction

Add-on and solution modules are special types of modules that add functionality to your app. They have Intellectual Property (IP) protection enabled and have the *.mxmodule* extension. For more information on IP protection, see [IP Protection](/appstore/creating-content/sol-ip-protection). 

The main *difference* between an add-on and a solution module is their purpose. An add-on module is developed to be a *stand-alone functionality* that others users can consume in the their apps, for example, an add-on can be a connector. 

Solution modules are *always part of a solution* –  any Mendix app that is suitable to be sold to multiple different customers. Solution modules are dependent on each other and are inseparable. Solutions modules form the **solution core** of the solution. 

{{% alert type="info" %}}

Add-on and solution modules are not supported in Mendix Studio.

{{% /alert %}}

## 2 Consuming Add-on Modules and Solutions

{{% alert type="warning" %}}

When consuming an add-on or a solution, Studio should be disabled for your app. 

{{% /alert %}}

An example of an add-on module is the **MS Teams Connector** module. For more information on this module, see [MS Teams Connector](/appstore/app-services/ms-teams-connector).

When you download an add-on module, it shows up in the **Add-ons** folder in the App Explorer. The main difference of the add-on module is that the implementation details of some functionality and elements, such as microflows, are *hidden* from consumers so that IP is protected. This means that add-on modules have a clear API: you know which elements you can use. For example, when you open a microflow, you will see its API including the microflow and parameter documentation. You cannot see how the microflow is built, but you are able to use it in your app, for example, you can call the microflow with protected implementation from another microflow:

![Protected Microflow Example](attachments/add-on-and-solution-modules/protected-microflow.png)

You also might not see the full domain model of the module, only entities, attributes, and associations that were specifically exposed by the publisher. The visible parts of the domain model are intended to be reused; hidden elements are not needed for proper use of the module.

{{% alert type="warning" %}}

Mendix Studio does not currently support add-on modules, you will not be able to open apps that use add-on modules in Studio.

{{% /alert %}}

## 3 Importing an Add-on Module to Your App

There are several ways to import an add-on module from the Marketplace. For more information, see the [Installing Marketplace Content](/appstore/general/app-store-content#install) section in *Use Marketplace Content in Studio Pro*.

You can also add an add-on module to your app not through the Marketplace. For more information, see the [Importing Module Package](/howto/integration/importing-and-exporting-objects#import-module) section in *How to Import & Export Objects*. 

## 4 Deleting a Consumed Add-on Module from Your App

To delete an add-on module, do the following:

1. Go to  **App** > **Show App Directory in Explorer** to open the app folder.
2. Browse to the **modules** folder and remove the *mxmodule* file from there.

The module is deleted from your app.

## Read More

* [IP Protection](/appstore/creating-content/sol-ip-protection)
* [Use Marketplace Content in Studio Pro](/appstore/general/app-store-content)
* [How to Import & Export Objects](/howto/integration/importing-and-exporting-objects)

