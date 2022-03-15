---
title: "Project Menu"
url: /refguide8/project-menu/
parent: "menus"
description: "Describes the Project Menu in Studio Pro."
menu_order: 30
tags: ["Studio Pro", "project menu", "top bar"]
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/project-menu.pdf).
{{% /alert %}}

## 1 Introduction

In the **Project** menu, you can view and/or manipulate settings that are connected to your project and deployment. For example, you can create a deployment package.

{{% image_container width="300" %}}![Project Menu](/attachments/refguide8/modeling/menus/project-menu/project-menu.png)
{{% /image_container %}}

## 2 Tools

Under **Project** > **Tools**, you can find settings on updating widgets, button icons, and layouts, checking widgets, and converting your classes to **Design** properties.  

![Tools](/attachments/refguide8/modeling/menus/project-menu/tools.png)

### 2.1 Batch Update Button Icons

The **Batch Update Button Icons** option allows you to update many button icons in a single batch process.

### 2.2 Batch Update Layouts

The **Batch Update Layouts** option allows you to update the layouts of many pages in a single batch process.

### 2.3 Update Widgets {#update-widgets}

The **Update Widgets** option presents the current versions of the widgets you are using in your app, what the latest versions of the widgets are, and an update option.

### 2.4 Check Widgets

The **Check Widgets** option checks that the widgets you have implemented in the app have been built correctly.

### 2.5 Convert Classes to Design Properties

The **Convert classes to design properties** option allows you to convert classes in widgets into design properties to assist in changing the widget styling. See [How To Implement Native Mobile Styling](/howto8/mobile/native-styling/) for more information.

## 3 Synchronize Project Directory

The **Synchronize Project Directory** option creates folders inside the project directory (resources, widgets, theme, etc.), if necessary. It also reads the widget packages that are currently inside the widgets folders. For example, if you add widgets to the widgets folder, you needs to synchronize the project directory for them to appear in the **Toolbox**.

Shortcut key: <kbd>F4</kbd>

## 4 Show Project Directory in Explorer

The **Show Project Directory in Explorer** option shows the directory that contains the project file (*.mpr*) and other assets such as resources and Java actions in Windows Explorer. By default, the directory is located in the **MyDocuments** section.

The following directories in the project directory are useful for customizing the app style and adding custom widgets and Java actions:

* **theme** – stores the *.css* files that can be used to style the application
* **javasource** – stores the JavaScript actions
* **widgets** – stores the widgets

## 5 Deploy for Eclipse

The **Deploy for Eclipse** option deploys the project to the deployment directory. The Java stubs are generated so that you can start editing them in Eclipse. This action does not compile the Java actions. Use this if you are writing Java actions and you want to compile and debug them through Eclipse.

Shortcut key: <kbd>F6</kbd>

## 6 Create Deployment Package

The **Create Deployment Package** option creates a Mendix Deployment Archive package (*.mda*) that contains all necessary files to run the project. This can be used if you want to deploy your project on a Windows server or on a custom Mendix Cloud.

Shortcut key:  <kbd>F7</kbd>

For more information on settings displayed on the Create Deployment Package dialog box, see [Create Deployment Package](/refguide8/create-deployment-package-dialog/).

## 7 Clean Deployment Directory

The **Clean Deployment Directory** option cleans the deployment directory.

## 8 Deploy to Licensed Cloud Node {#deploy}

The **Deploy to Licensed Cloud Node** option deploys the latest committed revision of a Team Server project to the associated Mendix Cloud node.

Shortcut key:  <kbd>Ctrl</kbd> + <kbd>F5</kbd>

{{% alert type="warning" %}}
The [Mendix Studios Target](/developerportal/deploy/studio-deployment-settings/#target) needs to be set and the deploying user needs to have transport rights to the set target.
{{% /alert %}}

For more information on using this option, see [Deploy to the Cloud](/refguide8/deploy-to-the-cloud-dialog/).

## 9 Read More

* [Studio Pro Overview](/refguide8/studio-pro-overview/)
* [Deployment](/developerportal/deploy/)
