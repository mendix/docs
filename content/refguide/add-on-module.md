---
title: "Add-On Module"
parent: "modules"
menu_order: 10
tags: ["studio pro", "protected module", "module"]
---

## 1 Introduction

An **add-on** module is a special kind of Marketplace module that adds functionality to your app. 

Add-on modules may have Intellectual Property (IP) protection enabled and have an extension `.mxmodule`. For more information on IP protection, see [IP Protection](/appstore/creating-content/sol-ip-protection). 

An example of the add-on module is the Microsoft Teams Connector module. When you download it, it shows up in a new folder called **Add-ons** in your App Explorer. 

When you add the add-on module to your app,  it shows up in a new folder called **Add-ons** in your App Explorer. The main difference of the add-on module is that some functionality and elements, such as microflows and entities, are protected and, therefore, *hidden* from other users by the publisher. This means that you cannot see how the microflow is built, but you are able to use it in your app, for example, you can call the protected microflow from another microflow:

![Protected Microflow Example](attachments/add-on-module/protected-microflow.png)

You also might not see the full domain model of the module, but entities, attributes, and associations that were specifically exposed by the published. 

An example of the add-on module is the Microsoft Teams Connector module. {{% todo %}}[Examples from the Microsoft Teams Connector? Especially pages if any.]{{% /todo %}}

{{% alert type="warning" %}}

Mendix Studio does not support add-on modules, so you will not be able to open the app that uses them in Studio.

{{% /alert %}}

## 2 Adding an Add-On Module to Your App



## 3 Updating an Add-On Module 

For information on how to update a module in your app, see the [Updating a Module](/appstore/app-store-content#update-module) section in *Use Marketplace Content in Studio Pro*.

## 4 Deleting an Add-On Module

If you want to delete an add-on module from the app, go to **App** > **Show App Directory in Explorer** to open the app folder, and then remove the ZIP file from the **modules** folder.

## 5 Read More

