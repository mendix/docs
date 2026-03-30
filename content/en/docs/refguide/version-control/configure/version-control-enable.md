---
title: "Enabling Version Control for Your App"
url: /refguide/version-control/enable/
weight: 10
description: "Learn how you can start or join an app that uses version control."
---

## Introduction {#intro}

Version control is enabled by default for Mendix apps. If the option was explicitly disabled during app creation, you can also enable it at a later point.

## Starting an App with Version Control

Version control is automatically enabled for every new Mendix application that you create, unless you disable online services during the app creation.

To start a new app with version control, do the following:

1. Open Studio Pro.
2. In the **Select App** dialog box, click **Create New App**. 
3. Select the starting point – an app template.
4. In the **App Settings** dialog box, make sure that **Enable online services** is set to **Yes**. This option creates a remote (Team Server) repository and an app in [Apps](https://sprintr.home.mendix.com/) of the Mendix Portal.
5. Optionally, change the default **App directory** set by Studio Pro.
6. Click **Create app**.

The app is created on the Team Server, and a working copy is created in the **App directory**. This is opened in Studio Pro so that you can start working immediately.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/app-settings.png" class="no-border" >}}

## Joining an App

If there is already a Team Server-enabled app, you can be invited to join it (see [Team](/developerportal/general/team/)).

Once you are a team member, provided that you have been given a role with sufficient rights, you can work on the app by doing the following:

1. Choose **Open App** in Studio Pro.
2. Choose your app from the list of the **Open App** dialog box.
3. Click **Open in Studio Pro**.

The app will be downloaded from the Team Server and opened in Studio Pro.

## Enabling Version Control for an Existing App

If version control was disabled during the app creation, you can enable it by performing the following steps:

1. In Studio Pro, open the [Version Control menu](/refguide/upload-to-version-control-dialog/).
2. Click **Upload to Version Control Server**.
3. Select the server where you want to store the app. You can also create a new server.