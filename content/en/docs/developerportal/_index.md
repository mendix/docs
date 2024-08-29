---
title: "Apps"
url: /developerportal/
description: "Describes the home page of Apps and links to more detailed documents in the guide."
weight: 30
no_list: false
description_list: true
cascade:
  - content_type: "Apps"
  - mendix_version: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

{{% alert color="info" %}}
The Mendix Portal is the online platform of Mendix. It includes Apps, [Control Center](/control-center/), [Community](/community-tools/), [Marketplace](/appstore/), [Catalog](/catalog/), and [Mendix Support](/support/).
{{% /alert %}}

## Introduction

[Apps](https://sprintr.home.mendix.com) is one of the key components of the Mendix Portal. In **Apps**, you can create, deploy, and manage apps as well as collaborate with each other. After you open **Apps**, you will get a summary of your current apps, your company apps, and your pending invites.

{{< figure src="/attachments/developerportal/apps-overview.png" alt="Apps Overview" >}}

## Creating an App {#create-app}

To create a new app and start collaborating, you can perform the following procedure.

1. In Apps, click **Create App** in the upper-right corner. A screen opens to guide you through the process.

    {{< figure src="/attachments/developerportal/create-app-step-1.png" alt="Create App Step One" >}}

2. Enter the following information for your app:

    * **App name** – Every app must have a name.

        The app name cannot be longer than 200 characters (but preferably, no more than 40 characters). The app name can contain letters, numbers, underscores (`_`), dashes (`-`), or white spaces (). The app name must not start with a white space.

    * **App description (Optional)** – Give your app a short description. This is optional.
    
    * **App icon** – Mendix has generated an icon for your app. You can change the color of the icon if you like. You can upload a custom icon in the [App Settings](/developerportal/collaborate/general-settings/#general) page after you created the app.

3. Click **Next** in the lower-right corner to go to step 2.

    {{< figure src="/attachments/developerportal/create-app-step-2.png" alt="Create App Step Two" >}}

4. Select a starter app template on which the app will be based. Some most used starter app templates are shown.

    {{% alert color="info" %}}If you would like to choose a different starter app template than the ones shown here, click the **discover community starter apps** link at the top. This takes you to the Marketplace where you can browse through all available starter app templates and select one that suits your needs.{{% /alert %}}

5. After selecting a starter app template, click **Create App**. Based on the starter app template you selected, it can take some time to set up the app, its repository, and access to the collaboration tools. After it is completed, the app is created.

## My Apps {#my-apps}

The **My Apps** tab displays all the apps for which you are a [Team](/developerportal/general/team/) member.

If you pin an app, it stays on top.

Use the drop-down menu on the right side of the page to sort the apps by **Pinned**, **Recent Activity** or in alphabetical order of **App Name**.

### App Tiles {#app-tiles}

You can pin an app tile by clicking **Pin** ({{% icon name="pin" %}}). Pinned apps appear at the top of the list.

To stop watching an app and disable notifications for that app, click the {{% icon name="view" %}} icon so that you see the **You are not watching this app** tooltip. To return to watching that app, click the {{% icon name="view-off" %}} icon so that you see the **You are watching this app** tooltip.

By clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the app tile, you can quickly perform the actions **Edit in Mendix Studio Pro** and **Leave App**.

{{< figure src="/attachments/developerportal/quick-action-menu.png" alt="Quick actions menu for an app" width="50%" >}}

To go to the [licensed environments](/developerportal/deploy/environments/) of your deployed app, click **Environments** at the bottom of the app tile.

### Navigation Pane {#navigation-pane}

You can open an app in [Apps](https://sprintr.home.mendix.com/) by clicking the app tile. After an app is open, you can navigate between sections using the navigation pane on the left side of the screen. 

The navigation pane is divided into four main categories:

* [General](/developerportal/general/)
* [Project Management](/developerportal/project-management/)
* [App Insights](/developerportal/app-insights/)
* [Deployment](/developerportal/deploy/general/)

{{< figure src="/attachments/developerportal/navigation-pane.png" alt="The navigation pane" width="45%" >}}

{{% alert color="info" %}}
The features in the navigation pane can also be accessed via APIs, enabling third-party developers to integrate their own widgets and plugins. For more information, see [API Documentation](/apidocs-mxsdk/apidocs/).
{{% /alert %}}

### Pending Invitations {#pending-invitations}

If you are invited to collaborate on an app, the invitation will appear at the top of the **My Apps** page. You can accept or decline the invitation.

{{% alert color="info" %}}
You get an invitation only when someone invites you to an app from a different company. If someone invites you to an app from your company, you will be added automatically.
{{% /alert %}}

## Company Apps {#my-company-apps}

The **Company Apps** tab displays all the apps created by members of your [company](/control-center/company-settings/).

There are also details on the app's [Target Cloud](/deployment/), and the [Total Members](/control-center/members/) who can view or edit the app.

You can also sort the order of the apps here by **Updated Date**, **Last Created**, **App Name**, **App Name, descending**, **Oldest Updated**, or **Oldest Created**.

## Guide Categories

The documentation of **Apps** is divided into the following categories:
