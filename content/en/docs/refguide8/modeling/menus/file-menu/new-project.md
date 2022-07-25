---
title: "New Project"
url: /refguide8/new-project/
weight: 10
description: "This document describes the New Project (New App) flow and the App Settings dialog box."
tags: ["studio pro", "create app", "new app", "new project", "creating new app"]
aliases:
    - /refguide8/app-settings-dialog.html
    - /refguide8/app-settings-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/new-project.pdf).
{{% /alert %}}

## 1 Introduction

You can create a new project in Mendix Studio Pro. 

To create a new project, follow the steps below:

1. Do one of the following:
   1. Open the **File** menu in the top bar > **New Project**.
   2. Click **New App** on the Studio Pro landing page.
   
2. In **My Apps** tab, select a starting point – an app template. 

3.  Click **Use this app**.
4. In the **App Settings** dialog, select the settings for your project and click **Create app**. For more information on app settings, see the [App Settings](#app-settings) section. 

The new project is created and opened. 

## 2 App Settings {#app-settings}

When creating a new app, the **App Settings** dialog box is opened where you can specify an app name, whether or not to enable the online services provided by the Mendix Platform, the default language, and the location on disk where the project files for your app are stored:

{{< figure src="/attachments/refguide8/modeling/menus/file-menu/new-project/app-settings-dialog.png" alt="App Settings" >}}

### 2.1 Name

The name of your new app. This name is used as the name of the project directory and file on disk. If you enable the online services for this app, the name is also used for the Team Server repository and a corresponding app in **My Apps**.

### 2.2 Enable Online Services

The Mendix Platform offers online services such as [version control](/refguide8/version-control/), [cloud deployment](/developerportal/deploy/), and [collaboration](/refguide8/collaborative-development/). When enabled, this will create a project in the Developer Portal and a corresponding version control repository.

If you choose *No*, you will create an app that is only stored on your local disk. At a later point you can still decide to upload this local app to a version control server and enjoy the benefits of version control.

### 2.3 Default Language

The default language is the language of the user interface of your project. Choose the language that you will initially use in your forms and other user interface elements. You can always add additional languages to your project later.

### 2.4 Project Directory

Specify the project directory in which the files for your app are stored. If you enable the online services for the new app, you will see that the suffix *-main* will be appended to the directory name automatically. This is to indicate that the directory contains the main branch line of your project. While working on your app, you can create new branches and download these to other directories. For more information on the branch line management, see [Branch Line Manager](/refguide8/branch-line-manager-dialog/).

## 3 Read More

* [Version Control](/refguide8/version-control/)
* [Open Project](/refguide8/open-app-dialog/)