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

## 1 Introduction

[Apps](https://sprintr.home.mendix.com) is one of the key components of the Mendix Portal. In **Apps**, you can create, deploy, and manage apps as well as collaborate with each other. After you open **Apps**, you will get a summary of your current apps, your company apps, and your pending invites.

{{< figure src="/attachments/developerportal/apps-overview.png" alt="Apps Overview" class="no-border" >}}

## 2 My Apps {#my-apps}

The **My Apps** tab displays all the apps for which you are a [Team](/developerportal/general/team/) member.

If you pin an app, it stays on top.

Use the drop-down menu on the right side of the page to sort the apps by **Pinned**, **Recent Activity** or in alphabetical order of **App Name**.

### 2.1 App Tiles {#app-tiles}

You can pin an app tile by clicking **Pin** ({{% icon name="pin" %}}). Pinned apps appear at the top of the list.

To stop watching an app and disable notifications for that app, click the {{% icon name="view" %}} icon so that you see the **You are not watching this app** tooltip. To return to watching that app, click the {{% icon name="view-off" %}} icon so that you see the **You are watching this app** tooltip.

By clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the app tile, you can quickly perform the actions **Edit in Mendix Studio Pro** and **Leave App**.

{{< figure src="/attachments/developerportal/quick-action-menu.png" alt="Quick actions menu for an app" width="50%" class="no-border" >}}

To go to the [licensed environments](/developerportal/deploy/environments/) of your deployed app, click **Environments** at the bottom of the app tile.

### 2.2 Navigation Pane {#navigation-pane}

You can open an app in [Apps](https://sprintr.home.mendix.com/) by clicking the app tile. After an app is open, you can navigate between sections using the navigation pane on the left side of the screen. 

The navigation pane is divided into four main categories:

* [General](/developerportal/general/)
* [Project Management](/developerportal/project-management/)
* [App Insights](/developerportal/app-insights/)
* [Deployment](/developerportal/deploy/general/)

{{< figure src="/attachments/developerportal/navigation-pane.png" alt="The navigation pane" width="45%" class="no-border" >}}

{{% alert color="info" %}}
The features in the navigation pane can also be accessed via APIs, enabling third-party developers to integrate their own widgets and plugins. For more information, see [API Documentation](/apidocs-mxsdk/apidocs/).
{{% /alert %}}

## 3 Company Apps {#my-company-apps}

The **Company Apps** tab displays all the apps created by members of your [company](/control-center/company-settings/).

There are also details on the app's [Target Cloud](/deployment/), and the [Total Members](/control-center/members/) who can view or edit the app.

You can also sort the order of the apps here by **Updated Date**, **Last Created**, **App Name**, **App Name, descending**, **Oldest Updated**, or **Oldest Created**.

## 4 Pending Invites {#pending-invites}

{{% alert color="info" %}}
The **Pending Invites** tab is only visible if you have any pending invites.
{{% /alert %}}

The **Pending Invites** tab presents the pending invitations to apps that you have received. You can accept or decline the invite.

{{% alert color="info" %}}
You  get an invite only when someone invites you to an app from a different company. If someone invites you to an app from your company, you will be added automatically.
{{% /alert %}}

## 5 Guide Categories

The documentation of **Apps** is divided into the following categories:
