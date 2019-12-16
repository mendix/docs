---
title: "Project Menu"
category: "App Modeling"
description: "Describes the Project Menu in Studio Pro."
menu_order: 18
tags: ["Studio Pro", "project menu", "top bar"]
---

## 1 Introduction

In the **Project** menu you can view and/or manipulate settings that are connected to your project and deployment. For example, you can create a deployment package.

{{% image_container width="300" %}}![Project Menu](attachments/project-menu/project-menu.png)
{{% /image_container %}}

## 2 Tools

Under **Project** > **Tools**, you can find settings on updating widgets, button icons, and layouts, checking widgets, and converting your classes to the **Design** properties.  

![Tools](attachments/project-menu/tools.png)

### 2.1 Batch Update Button Icons

This option opens the **Batch Update Button Icons** dialog box so that you can configure the batch update of many button icons at once.

###2.2 Batch Update Layouts

This option opens the **Batch Update Layouts** dialog box so that you can configure the batch update of the layouts of many pages at once.

###2.3 Batch Convert Split Panes

This option opens the **Batch Convert Split Panes** dialog box so that you can configure the batch update.

###2.4 Update Widgets

The **Update Widgets** option presents the current versions of the widgets you are using in your app project, what the latest versions of the widgets are, and an update option.

### 2.5 Check Widgets

The **Check Widgets** option checks that the widgets you have implemented in the app project have been built correctly.

## 3 Synchronize Project Directory

The **Synchronize Project Directory** option creates folders inside the project directory (resources, widgets, theme, etc.), if necessary. It also reads the widget packages that are currently inside the widgets folders. For example, if you add widgets to the widgets folder, you needs to synchronize the project directory for them to appear in the **Toolbox**.

Shortcut key: <kbd>F4</kbd>

## 4 Show Project Directory in Explorer

The **Show Project Directory in Explorer** option shows the directory that contains the project file (*.mpr*) and other assets such as resources and Java actions in Windows Explorer

## 5 Deploy for Eclipse

The **Deploy for Eclipse** option deploys the project to the deployment directory. The Java stubs are generated so that you can start editing them in Eclipse. This action does not compile the Java actions. Use this if you are writing Java actions and you want to compile and debug them through Eclipse.

Shortcut key: <kbd>F6</kbd>

##6 Create Deployment Package

The **Create Deployment Package** option creates a Mendix Deployment Archive package (*.mda*) that contains all necessary files to run the project. This can be used if you want to deploy your project on a Windows server or on a custom Mendix Cloud.

Shortcut key:  <kbd>F7</kbd>

For more information on settings displayed on the Create Deployment Package dialog window, see [Create Deployment Package](create-deployment-package-dialog).

##7 Clean Deployment Directory

The **Clean Deployment Directory** option cleans the deployment directory.

## 8 Deploy to Licensed Cloud Node

The **Deploy to Licensed Cloud Node** option deploys the latest committed revision of a Team Server project to the associated Mendix Cloud node.

Shortcut key:  <kbd>Ctrl</kbd> + <kbd>F5</kbd>

## 9 Read More

* [Studio Pro Overview](studio-pro-overview)
* [Deployment](/developerportal/deploy)