---
title: "Find Your Way in an App Project"
parent: studio-pro-overview
description: "Describes Go to and Find usages option in Mendix Studio Pro."
menu_order: 1
tags: ["project", "navigation", "usage", "find usages"]
---

## 1 Introduction

In Studio Pro editors, such as navigation, page, or microflow editor, you can access a handy menu by right-clicking items. Two options are commonly used to find your way in a project: **Go to** and **Find usages**. 

The **Go to** option allows you to navigate from one element to another: for example, to navigate to the target of a button or to the source of a data grid.

 The **Find Usages** option allows you to find where a certain element is used, for example, to find all buttons that open a certain page.

## 2 Go To Options

The examples of using the **Go to** option are described below:

* **Opening a target of a menu item** – in **Project** > **Navigation**, you can right-click a menu item and select **Go to target**. Studio Pro will open the corresponding target of the menu item,for example, a page.
  ![](attachments/find-your-way/18581619.png)
* **Opening a data source of an element** – on pages, you can navigate to the data source of a widget. For example, you can right-click a button in the data grid and select **Go to microflow**. Mendix Studio Pro will open the corresponding microflow:
  ![](attachments/find-your-way/18581618.png)
* **Opening an entity from a microflow** – you can navigate to an entity in the domain model if you right-click an activity in the microflow and select **Go to entity**. Mendix Studio Pro will open the corresponding domain model:
  ![](attachments/find-your-way/18581617.png)

## 3 Finding Usages

To find where a certain element is used, do the following:

1.  In the domain-model, right-click an entity and select **Find usages**. Mendix Studio Pro shows all usages of this entity in the **Find Results** pane.
    ![](attachments/find-your-way/18581616.png)
2.  Double-click an item in the **Find Results** pane to open the corresponding document:
    ![](attachments/find-your-way/18581615.png)
3.  Click **Lock results** in the **Find Results** pane. Now if you click **Find Usages**, the results will be shown in a second **Find Results** pane. This allows you to  keep several search results.
    ![](attachments/find-your-way/18581614.png)

## 4 Read More

* [Navigation](navigation)
* [Pages](pages)
* [Microflows](microflows)
* [Domain Model](domain-model)