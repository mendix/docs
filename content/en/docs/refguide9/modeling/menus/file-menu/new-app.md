---
title: "New App"
url: /refguide9/new-app/
weight: 10
description: "This document describes the New App flow and the App Settings dialog box."
aliases:
    - /refguide9/app-settings-dialog.html
    - /refguide9/app-settings-dialog
    - /refguide9/new-project/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

You can create a new app in Mendix Studio Pro. 

To create a new app, follow the steps below:

1. Do one of the following:
    1. Open the **File** menu in the top bar > **New App**.
    2. Click **Create New App** on the Studio Pro landing page.

2. In **My Apps** tab, select a starting point (an app template).
3. Click **Use this app**.
4. In the **App Settings** dialog box, select the settings for your app and click **Create app**. For more information on app settings, see the [App Settings](#app-settings) section. 

The new app is created and opened. 

## App Settings {#app-settings}

When creating a new app, the **App Settings** dialog box is opened where you can specify an app name, whether or not to enable the online services provided by the Mendix Platform, the default language, and the location on disk where the app files for your app are stored:

{{< figure src="/attachments/refguide9/modeling/menus/file-menu/new-app/app-settings-dialog.png" alt="App Settings" class="no-border" >}}

### App Name

The name of your new app. This name is used as the name of the app directory and file on disk. If you enable the online services for this app, the name is also used for the Team Server repository and a corresponding app in **My Apps**.

### Enable Online Services

The Mendix Platform offers online services such as [version control](/refguide9/version-control/) and [cloud deployment](/deployment/). When enabled, this will create an app in [Apps](https://sprintr.home.mendix.com/) and a corresponding version control repository.

If you choose *No*, you will create an app that is only stored on your local disk. At a later point you can still decide to upload this local app to a version control server and enjoy the benefits of version control.

### Default Language

The default language is the language of the user interface of your app. Choose the language that you will initially use in your forms and other user interface elements. You can always add additional languages to your app later.

### App Directory

Specify the directory in which the files for your app are stored.

If you enable the online services for the new app, you will see that the suffix *-main* has been added to the directory name automatically. It is used to indicate that the directory contains the main branch line of your app. While working on your app, you can create new branches and download them to other directories. For more information on the branch line management, see [Branch Line Manager](/refguide9/branch-line-manager-dialog/).

The default directory in which new apps are stored can be changed in the [Preferences](/refguide9/preferences-dialog/#default-directory) dialog box.

## Read More

* [Version Control](/refguide9/version-control/)
* [Open App](/refguide9/open-app-dialog/)
