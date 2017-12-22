---
title: "Migrate Existing Projects to Atlas UI"
category: "Atlas UI"
tags: ["Atlas", "UI", "UX", "user experience"]
---

## 1 Introduction

Atlas UI and the Web Modeler bring a lot of features to the process of building an app. But what if you already have a Mendix app that looks great and run smoothly? No problem! To get an existing Mendix app to work with Atlas UI and the Web Modeler, there are a couple of steps to follow. This how-to describes how to upgrade existing Mendix projects to Atlas UI.

**This how-to will teach you how to do the following:**

* Prepare your app for Atlas UI
* Replace the UI Framework module
* Replace existing navigation layouts
* Perform some optional actions

## 2 Prerequisite

Before starting this how-to, make sure you have completed the following prerequisite:

* Make sure the Mendix app is converted to Mendix 7.9.0 or higher

## 3 Replace the UI Framework Module

To get the full experience of Atlas UI, it’s necessary to import the Atlas UI Resources module. Startign with Mendix 7.9.0, every app includes a module called **UI_Resources** that can be found under **Project** > **App Store modules** in the Desktop Modeler. This module contains all the layouts, page templates, and building blocks. The **UI Framework** folder in this module contains the old Mendix UI Framework content, which we will be upgrading to Atlas UI.

To replace the UI Framework, follow these stepsL

1. Delete the **UI_Resources** module.
2. Import the [Atlas UI Resources](https://appstore.home.mendix.com/link/app/104730/Mendix/Atlas-UI-Resources) module from the Mendix App Store.
3.  When the Atlas UI Resources module is downloaded from the Mendix App Store, it will be found in **App Store modules**:

    ![](attachments/howto/migrate_dm_appstore.png)

After the import is complete, there may be some errors in the **Error** pane for navigation profiles or layouts that do not exist. Be sure to resolve all of these errors.

Once the Atlas UI Resources module is imported, all the new resources will be available in the Desktop Modeler and Web Modeler. When creating a new page, a new set of page templates for all devices will be available. In the **Toolbox**, a new tab will be added called **Building blocks**. You can drag building blocks from this pane onto your pages.

![Image of Mendix Atlas UI](attachments/howto/migrate_dm_bb_toolbox.png)

## 4 Replacing Existing Navigation Layouts

The Atlas UI Resources module comes with navigation layouts, which are required in order to use the page templates. If your existing navigation layouts are in a separate module, you will have to replace all the layouts for your pages with the Atlas UI layouts in order to make use of the new page templates. It is possible to keep using your old navigation layouts, but you will not be able to access the full capabilities of Atlas UI if you choose to do so.

![](attachments/howto/migrate_dm_navlayouts.png)

## 5 Enabling the Mendix Web Modeler (Optional)

After you complete the previous steps, all the new Atlas UI features will be available in your app while it is running in the Desktop Modeler.

But before your app can run in the Web Modeler, it is necessary to enable the Mendix Web Modeler feature. This can be done in the [Mendix Developer Portal](https://sprintr.home.mendix.com/index.html) through your app's settings (app > **SETTINGS** > **General**).

## 6 Reusing Parts of Your Old Theme (Optional)

A lot of Mendix projects have a custom theme. If this is the case for your project, your old theme can be found in the Project Explorer folder named **theme_old**. The Atlas UI framework is similar to the Mendix UI Framework, so it is possible to reuse parts of your custom variables file.

![Image of Mendix Atlas UI](attachments/howto/migrate_old_theme.png)

## 7 Related Content

* [How to Get Started with Atlas UI](get-started-with-atlasui)
* [How to Create Company Atlas UI Resources](create-company-atlas-ui-resources)
* [How to Create Custom Preview Images for Building Blocks and Page Templates](create-custom-preview-images-for-building-blocks-and-page-templates)
* [How to Extend Design Properties to Customize the Web Modeler Experience](extend-design-properties-to-customize-the-web-modeler-experience)
* [How to Share Company Atlas UI Resources](share-company-atlas-ui-resources)
