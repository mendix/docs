---
title: "Add-On Module"
parent: "modules"
menu_order: 10
tags: ["studio pro", "protected module", "module"]
---

## 1 Introduction

An **add-on** module is a special kind of module that adds functionality to your app. 

Add-on modules have Intellectual Property (IP) protection enabled and have the *.mxmodule* extension. For more information on IP protection, see [IP Protection](/appstore/creating-content/sol-ip-protection). 

An example of an add-on module is the **MS Teams Connector** module. For more information on this module, see [MS Teams Connector](/appstore/app-services/ms-teams-connector).

When you download an add-on module, it shows up in the **Add-ons** folder in the App Explorer. The main difference of the add-on module is that the implementation details of some functionality and elements, such as microflows, are *hidden* from consumers so that IP is protected. This means that add-on modules have a clear API: you know which elements you can use. For example, when you open a microflow, you will see its API including the microflow and parameter documentation. You cannot see how the microflow is built, but you are able to use it in your app, for example, you can call the microflow with protected implementation from another microflow:

![Protected Microflow Example](attachments/add-on-module/protected-microflow.png)

You also might not see the full domain model of the module, only entities, attributes, and associations that were specifically exposed by the publisher. The visible parts of the domain model are intended to be reused; hidden elements are not needed for proper use of the module.

{{% alert type="warning" %}}

Mendix Studio does not currently support add-on modules, you will not be able to open apps that use add-on modules in Studio.

{{% /alert %}}

## 2 Importing an Add-On Module to Your App

There are several ways to import an add-on module from the Marketplace. For more information, see the [Installing Marketplace Content](/appstore/general/app-store-content#install) section in *Use Marketplace Content in Studio Pro*.

You can also add an add-on module to your app not through the Marketplace. For more information, see the [Importing Module Package](/howto/integration/importing-and-exporting-objects#import-module) section in *How to Import & Export Objects*. 

## 3 Updating an Add-On Module 

For information on how to update a module in your app, see the [Updating a Module to a Newer Version](/appstore/general/app-store-content#update-module) section in *Use Marketplace Content in Studio Pro*.

## 4 Deleting an Add-On Module

To delete an add-on module, do the following:

1. Go to  **App** > **Show App Directory in Explorer** to open the app folder.
2. Browse to the **modules** folder and remove the *mxmodule* file from there.

The module is deleted from your app.

## 5 Read More

* [IP Protection](/appstore/creating-content/sol-ip-protection)
* [Use Marketplace Content in Studio Pro](/appstore/general/app-store-content)
* [How to Import & Export Objects](/howto/integration/importing-and-exporting-objects)

