---
title: "New App"
url: /refguide/new-app/
weight: 10
description: "Describes how to create a new app in Studio Pro and configure the App Settings dialog box."
aliases:
    - /refguide/app-settings-dialog.html
    - /refguide/app-settings-dialog
    - /refguide/new-project/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

You can create a new app in Studio Pro. 

To create a new app, follow these steps:

1. Do one of the following:
    1. Open the **File** menu in the top bar > **New App**.
    2. Click **Create New App** on the Studio Pro landing page.

2. In the **My Apps** tab, select a starting point (an app template).
3. Click **Use this app**.
4. In the **App Settings** dialog box, select the settings for your app and click **Create app**. For more information on app settings, see the [App Settings](#app-settings) section. 

The new app is created and opened. 

## App Settings {#app-settings}

When creating a new app, the **App Settings** dialog box opens. Use it to specify an app name, whether to enable the online services provided by the Mendix Platform, the default language, and the location on disk where the app files are stored:

{{< figure src="/attachments/refguide/modeling/menus/file-menu/new-app/app-settings-dialog.png" alt="App Settings" class="no-border" >}}

### App Name

The name of your new app. This name is used as the name of the app directory and file on disk. If you enable online services for this app, the name is also used for the Team Server repository and a corresponding app in **My Apps**.

### Enable Online Services

The Mendix Platform offers online services such as [version control](/refguide/version-control/) and [cloud deployment](/deployment/). When enabled, this creates an app in [Apps](https://sprintr.home.mendix.com/) in the Mendix Portal and a corresponding version control repository.

If you choose *No*, you create an app that is only stored on your local disk. You can still upload this local app to a version control server later.

### Default Language

The default language is the language of the user interface of your app. Choose the language that you use initially in your forms and other user interface elements. You can add additional languages to your app later.

### App Directory

Specify the directory in which the files for your app are stored.

If you enable online services for the new app, the suffix *-main* is added to the directory name automatically. This indicates that the directory contains the main branch line of your app. While working on your app, you can create new branches and download them to other directories. For more information on branch line management, see [Branch Line Manager](/refguide/branch-line-manager-dialog/).

You can change the default directory in which new apps are stored in the [Preferences](/refguide/preferences-dialog/#default-directory) dialog box.

## Read More

* [Version Control](/refguide/version-control/)
* [Open App](/refguide/open-app-dialog/)
