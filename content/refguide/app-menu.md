---
title: "App Menu"
parent: "menus"
description: "Describes the App Menu in Studio Pro."
menu_order: 30
tags: ["Studio Pro", "app menu", "top bar"]
---

## 1 Introduction

In the **App** menu, you can view and/or manipulate settings that are connected to your app and deployment. For example, you can create a deployment package.

![App Menu](attachments/app-menu/app-menu.png)

## 2 Tools

Under **App** > **Tools**, you can find settings on updating widgets, button icons, and layouts, checking widgets, and converting your classes to **Design** properties.

### 2.1 Batch Update Button Icons

The **Batch Update Button Icons** option allows you to update many button icons in a single batch process.

### 2.2 Batch Update Layouts

The **Batch Update Layouts** option allows you to update the layouts of many pages in a single batch process.

### 2.3 Update Widgets {#update-widgets}

The **Update Widgets** option presents the current versions of the widgets you are using in your app, what the latest versions of the widgets are, and an update option.

### 2.4 Check Widgets

The **Check Widgets** option checks that the widgets you have implemented in the app have been built correctly.

### 2.5 Convert Classes to Design Properties

The **Convert classes to design properties** option allows you to convert classes in widgets into design properties to assist in changing the widget styling. See [How To Implement Native Mobile Styling](/howto/mobile/native-styling) for more information.

## 3 Synchronize App Directory

The **Synchronize App Directory** option creates folders inside the app directory (resources, widgets, theme, etc.), if necessary. It also reads the widget packages that are currently inside the widgets folders. For example, if you add widgets to the widgets folder, you needs to synchronize the app directory for them to appear in the **Toolbox**.

Shortcut key: <kbd>F4</kbd>

## 4 Show App Directory in Explorer

The **Show App Directory in Explorer** option shows the directory that contains the app file (*.mpr*) and other assets such as resources and Java actions in Windows Explorer. By default, the directory is located in the **MyDocuments** section.

The following directories in the app directory are useful for customizing the app style and adding custom widgets and Java actions:

* **theme** – stores the *.css* files that can be used to style the application
* **javasource** – stores the JavaScript actions
* **widgets** – stores the widgets

## 5 Deploy for Eclipse

The **Deploy for Eclipse** option deploys the app to the deployment directory. The Java stubs are generated so that you can start editing them in Eclipse. This action does not compile the Java actions. Use this if you are writing Java actions and you want to compile and debug them through Eclipse.

Shortcut key: <kbd>F6</kbd>

## 6 Create Deployment Package

The **Create Deployment Package** option creates a Mendix Deployment Archive package (*.mda*) that contains all necessary files to run the app. This can be used if you want to deploy your app on a Windows server or on a custom Mendix Cloud.

Shortcut key:  <kbd>F7</kbd>

For more information on settings displayed on the Create Deployment Package dialog box, see [Create Deployment Package](create-deployment-package-dialog).

## 7 Clean Deployment Directory

The **Clean Deployment Directory** option cleans the deployment directory.

## 8 Deploy to Licensed Cloud Node {#deploy}

The **Deploy to Licensed Cloud Node** option deploys the latest committed revision of a Team Server app to the associated Mendix Cloud node.

Shortcut key:  <kbd>Ctrl</kbd> + <kbd>F5</kbd>

{{% alert type="warning" %}}
The [Mendix Studios Target](/developerportal/deploy/studio-deployment-settings#target) needs to be set and the deploying user needs to have transport rights to the set target.
{{% /alert %}}

For more information on using this option, see [Deploy to the Cloud](deploy-to-the-cloud-dialog).

## 9 Read More

* [Studio Pro Overview](studio-pro-overview)
* [Deployment](/developerportal/deploy)
