---
title: "Create a Mobile To-Do App Step 1: _________"
space: "Mendix 7 How-To's"
parent: "create-a-to-do-app"
description: "This is the first how-to for creating a to-do app in 20 minutes using the Mendix Mobile Quick Starter app."
tags: ["Mobile", "Quick", "Starter", "App", "To-do", "Kickstart", "Development"]
toc-level: "4"
---

## 1 Introduction

_______

**This how-to will teach you how to do the following:**

[EDIT - WHICH TO INCLUDE?]

* Create a project that will speed up and simplify your mobile app development
* Build a to-do app
* Configure several widgets to realize a rich mobile app with a native look and feel

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Download [Mendix Desktop Modeler 7.3 or later](https://appstore.home.mendix.com/link/modeler/)

## 3 Creating and Preparing a New Project

The basis for the to-do app is the Mobile Quick Starter App. Follow these steps to create a new app with the Mobile Quick Starter App:

1. Open the **Mendix Desktop Modeler** and log in.
2. Click **Create App**.
3. Go the the **Samples** tab.
4. Click **Mobile Quick Starter App**.
5. Click **Use this starting point >**.
6. Enter the app details and click **Create app**.
7. Open the **Security** settings of your project.
8. Switch the **Securiy level** to **Off** and click **OK**.

![](attachments/create-a-to-do-app/todo-01.jpg)

<div class="alert alert-warning">
Switching the security level to *Off* is done for fast development. Make sure you change it back to *Production* and configure the security of your app when you are going to use the app in a production environment.
</div>

## 4 Creating a New Module

The to-do app will use a separate module, so you can keep all the to-do app documents in one location. Follow these steps to create a new module:

1. Right-click your **ProjectName** in the Project Explorer.
2. Click **Add module** and give it the name **ToDo**.

## 5 Creating the Domain Model

The domain for the to-do app is pretty simple. It contains one entity with some attributes. Follow these steps to create the entity and attributes:

1. Open the **Domain Model** in the **ToDo** module.
2. Add a new **Entity** to the Domain Model.
2. Rename the entity to **ToDo***.
3. Add the following three attributes:
  * *Description* (String)
  * *DueDate* (Date and time)
  * *Completed* (Boolean with default value *False*)

  ![](attachments/create-a-to-do-app/todo-02.jpg)

## 6 Related Content

[EDIT]

* [How to Deploy Your First Hybrid Mobile App](../mobile/deploy-your-first-hybrid-mobile-app)
* [How to Publish a Mendix Hybrid Mobile App in Mobile App Stores](../mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)
* [Push Notifications](../mobile/push-notifications)
