---
title: "Developer Portal Guide"
url: /developerportal/
description: "Describes the sections of the Mendix Developer Portal and links to more detailed documents in the guide."
weight: 30
no_list: false
description_list: true
cascade:
  - content_type: "Developer Portal Guide"
  - mendix_version: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 1 What Is the Developer Portal?

The [Developer Portal](https://sprintr.home.mendix.com) is one of the key components of the Mendix Platform. In the Developer Portal, Mendix users can collaborate, deploy, manage their apps.

The Developer Portal also offers open, well-defined APIs, enabling third-party developers to integrate their own widgets and plugins. For more information, see [API Documentation](/apidocs-mxsdk/apidocs/).

## 2 Apps {#apps}

When you open the Developer Portal, you are brought to the **Apps** page, which shows you a summary of your current apps, your company apps, and your pending invites.

{{< figure src="/attachments/developerportal/apps-overview.png" alt="Apps Overivew" class="no-border" >}}

### 2.1 My Apps {#my-apps}

The **My Apps** tab displays all the apps for which you are a [Team](/developerportal/general/team/) member.

If you pin an app, it stays on top.

Use the drop-down menu on the right side of the page to sort the apps by **Pinned**, **Recent Activity** or in alphabetical order of **App Name**.

#### 2.1.1 App Tiles {#app-tiles}

Click an app tile to see the app [Buzz](/developerportal/general/buzz/).

Any app tile you pin by clicking **Pin** ({{% icon name="pin" %}}) will make them appear as first in the list.

To stop watching an app and disable notifications for that app, click the {{% icon name="view" %}} icon so that you see the **You are not watching this app** tooltip. To return to watching that app, click the {{% icon name="view-off" %}} icon so that you see the **You are watching this app** tooltip.

By clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the app tile, you can quickly perform the actions **Edit in Mendix Studio Pro** and **Leave App**.

{{< figure src="/attachments/developerportal/quick-action-menu.png" alt="Quick actions menu for an app" width="50%" class="no-border" >}}

To go to the [licensed environments](/developerportal/deploy/environments/) of your deployed app, click **Environments** at the bottom of the app tile.

### 2.2 Company Apps {#my-company-apps}

The **Company Apps** tab displays all the apps created by members of your [company](/control-center/company-settings/).

There are also details on the app's [Target Cloud](/developerportal/deploy/), and the [Total Members](/control-center/members/) who can view and/or edit the app.

You can also sort the order of the apps here by **Updated Date**, **Last Created**, **App Name**, **App Name, descending**, **Oldest Updated**, or **Oldest Created**.

### 2.3 Creating a New App {#new-app}

To get started with building an app, click **Create App** to open a page where you can choose a starting point:

{{< figure src="/attachments/developerportal/create-app.png" width="150" class="no-border" >}}

### 2.4 Pending Invites {#pending-invites}

{{% alert color="info" %}}
The **Pending Invites** tab is only visible if you have any pending invites.
{{% /alert %}}

The **Pending Invites** tab presents the pending invitations to apps that you have received. You can accept or deline the invite.

{{% alert color="info" %}}
You  get an invite only when someone invites you to an app from a different company. If someone invites you to an app from your company, you will be added automatically.
{{% /alert %}}

## 3 Navigation Pane {#navigation-pane}

When you open an app in the Developer Portal, you can navigate between sections using the navigation pane on the left side of the screen.

The navigation pane is divided into four main categories, which correspond with the documentation in this guide:

- [General](/developerportal/general/)
- [Project Management](/developerportal/project-management/)
- [App Insights](/developerportal/app-insights/)
- [Deployment](/developerportal/deploy/general/)

{{< figure src="/attachments/developerportal/navigation-pane.png" alt="The navigation pane" width="45%" class="no-border" >}}

## 4 Guide Categories

The _Developer Portal Guide_ is divided into the following categories:
