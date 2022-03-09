---
title: "Add-on and Solution Modules"
parent: "modules"
menu_order: 20
tags: ["studio pro", "add-on", "solution", "module", "modules"]
---

## 1 Introduction

Add-on and solution modules are a special kind of modules that add functionality to your app. They have Intellectual Property (IP) protection enabled and have the *.mxmodule* extension. For more information on IP protection, see [IP Protection](/appstore/creating-content/sol-ip-protection). 

Add-on module has an A letter as an icon.
Solution module has an S letter as an icon.

The main *difference* between an add-on and a solution module is their purpose. An add-on module is developed to be a stand-alone functionality that others users can use in the their apps, for example, a connector. 

Solution modules are always part of a solution – an app that can be used out of the box by the customers. Solution modules are dependent on each other and are inseparable.  

**Solution core** is a set of solution modules. 

## Configuring Add-on or Solution Modules

To configure an add-on or solution module you need to select the corresponding module type and then decide what parts of the module you would like to be usable (if any). 

By default, all content of add-on and solution modules is hidden from consumers (has IP protection enabled). You can make some parts of your modules usable, for example, allow consumers to see some microflow or certain entities and attributes. 

You need to mark those document/elements as usable individually. Do the following:

1. Open the document/element that you would like to make usable.

2. Navigate to its properties.

3. Set the **Export level** property to **Usable**:

   ![](attachments/add-on-module/export-level-property.png)
   
You can see that the documents/elements that are marked as usable have an eye icon displayed. This means the document is part of the API. The domain model is a special case: if any entities in the domain model are usable the domain model will get an eye icon as well.

### Supported Documents

The following documents and elements are supported for use in** add-on **modules:

* Domain Model

    * Entity

         * Attribute

    * Association

* Microflow  (only the actions pertaining to document types which are supported in add-on modules)

* Rules

* Enumeration

* Constants
* Java Action

* Preliminary, hidden only in Integration:

    * Published Rest Service (Consume Rest Service microflow action is also supported)
    * Consumed Web Service
    * Message definitions
    * Import Mapping
    * Export Mapping
    * JSON Structure
    * XML Schema

* Scheduled Events (hidden only)

* Regular expressions

* Image collections

* Custom widgets

## Exporting Add-ons and Solutions



## Consuming Add-on Modules and Solutions

An example of an add-on module is the **MS Teams Connector** module. For more information on this module, see [MS Teams Connector](/appstore/app-services/ms-teams-connector).

When you download an add-on module, it shows up in the **Add-ons** folder in the App Explorer. The main difference of the add-on module is that the implementation details of some functionality and elements, such as microflows, are *hidden* from consumers so that IP is protected. This means that add-on modules have a clear API: you know which elements you can use. For example, when you open a microflow, you will see its API including the microflow and parameter documentation. You cannot see how the microflow is built, but you are able to use it in your app, for example, you can call the microflow with protected implementation from another microflow:

![Protected Microflow Example](attachments/add-on-module/protected-microflow.png)

You also might not see the full domain model of the module, only entities, attributes, and associations that were specifically exposed by the publisher. The visible parts of the domain model are intended to be reused; hidden elements are not needed for proper use of the module.

{{% alert type="warning" %}}

Mendix Studio does not currently support add-on modules, you will not be able to open apps that use add-on modules in Studio.

{{% /alert %}}

## Updating Add-on and Solution Modules



## Importing an Add-on Module to Your App

There are several ways to import an add-on module from the Marketplace. For more information, see the [Installing Marketplace Content](/appstore/general/app-store-content#install) section in *Use Marketplace Content in Studio Pro*.

You can also add an add-on module to your app not through the Marketplace. For more information, see the [Importing Module Package](/howto/integration/importing-and-exporting-objects#import-module) section in *How to Import & Export Objects*. 

## Deleting a Consumed Add-on Module from Your App

To delete an add-on module, do the following:

1. Go to  **App** > **Show App Directory in Explorer** to open the app folder.
2. Browse to the **modules** folder and remove the *mxmodule* file from there.

The module is deleted from your app.

## 5 Read More

* [IP Protection](/appstore/creating-content/sol-ip-protection)
* [Use Marketplace Content in Studio Pro](/appstore/general/app-store-content)
* [How to Import & Export Objects](/howto/integration/importing-and-exporting-objects)

