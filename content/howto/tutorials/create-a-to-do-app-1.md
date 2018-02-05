---
title: "Build a Mobile To-Do App Step 1: Create a New Project, Module, and Domain Model"
parent: "create-a-to-do-app"
description: "This is the first how-to for creating a to-do app in 20 minutes using the Mendix Mobile Quick Starter app."
tags: ["Mobile", "Quick", "Starter", "App", "To-do", "Kickstart", "Development"]
toc-level: "4"
---

## 1 Introduction

In this how-to, you will create and prepare a new project, module, and domain model. This is the first how-to in the series for creating a to-do app in 20 minutes using the Mendix Mobile Quick Starter app.

**This how-to will teach you how to do the following:**

* Create a project that will speed up and simplify your mobile app development

## 2 Prerequisite

To start this tutorial, create a new instance of the **Build a Mobile ToDo app** by downloading the app from the [Mendix App Store](https://appstore.home.mendix.com/link/app/70763/). After selecting the location where you will download the app project, the Desktop Modeler Version Selector will be opened. You need to select the Desktop Modeler version here in which you will open the app project.

{{% alert type="warning" %}}
This tutorial was written for use on [Desktop Modeler 7.4.0](https://appstore.home.mendix.com/link/modeler/7.4.0). You should use that version for best results.
{{% /alert %}}

## 3 First Changes

When your app is loaded into the Desktop Modeler, follow these first steps:

1. Open **Project** > **Security** to update the security settings of your app project.
2.  Switch the **Security level** to **Off** and click **OK**.

    ![](attachments/create-a-to-do-app/todo-01.jpg)

Switching the security level to **Off** is done for fast development. Make sure you change it back to **Production** and configure the security of your app when you are going to use the app in a production environment!

## 4 Creating a New Module

The development of your app stays comprehensible when its functionality is split into separate modules.
Follow these steps to create a new module where you can add the to-do implementation of your app:

1. Right-click your **ProjectName** in the Project Explorer.
2. Click **Add module** and give it the name **ToDo**.

## 5 Creating the Domain Model

The domain model is a data model that describes the information in your application domain in an abstract way.

The domain model for the to-do app will be pretty simple. It'll contain one entity with three attributes. Follow these steps to create the entity and attributes:

1. Open the **Domain Model** in the **ToDo** module.
2. Add a new **Entity** to the Domain Model.
2. Rename the entity to **ToDo**.
3.  Add the following three attributes:
    * *Description* (String)
    * *DueDate* (Date and time)
    * *Completed* (Boolean with default value *False*)

    ![](attachments/create-a-to-do-app/todo-02.jpg)

For the next step in this series, move on to [How to Build a Mobile To-Do App Step 2: Create the Pages](create-a-to-do-app-2).

## 6 Related Content

* [How to Build a Mobile To-Do App Step 2: Create the Pages](create-a-to-do-app-2)
* [How to Build a Mobile To-Do App Step 3: Improve the Look and Feel of the App](create-a-to-do-app-3)
* [How to Build a Mobile To-Do App Step 4: Add Logic to the Microflows](create-a-to-do-app-4)
* [How to Deploy Your First Hybrid Mobile App](../mobile/deploy-your-first-hybrid-mobile-app)
* [How to Publish a Mendix Hybrid Mobile App in Mobile App Stores](../mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)
* [Push Notifications](../mobile/push-notifications)
