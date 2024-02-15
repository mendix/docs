---
title: "Developer Portal Guide"
url: /developerportal/
description: "Describes the sections of the Mendix Developer Portal and links to more detailed documents in the guide."
tags: ["mendix", "developer portal", "platform services", "buzz", "apps", "community", "marketplace", "academy", "forum", "docs", "documentation"]
weight: 30
no_list: false
description_list: true
cascade:
    - space: "Developer Portal Guide"
    - mendix_version: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 1 What Is the Developer Portal?

The [Developer Portal](http://sprintr.home.mendix.com) is one of the key components of the Mendix Platform. In the Developer Portal, Mendix users can collaborate, deploy, manage their apps. 

The Developer Portal also offers open, well-defined APIs, enabling third-party developers to integrate their own widgets and plugins. For more information, see [API Documentation](/apidocs-mxsdk/apidocs/).

## 2 Creating a New App

To get started with building an app, click **Create App** to open a page where you can choose a starting point:

{{< figure src="/attachments/developerportal/create-app.png" width="150" >}}

## 3 My Apps {#my-apps}

When you open the Developer Portal, you are brought to the **My Apps** page, which shows you a summary of your current apps:

{{< figure src="/attachments/developerportal/app-tiles.png" alt="Apps tiles" >}}

The **All** tab displays all the apps for which you are a [Team](/developerportal/general/team/) member. 

Any app tile you pin by clicking **Pin** ({{% icon name="pin" %}}) will appear in the **Pinned** tab. 

Use the drop-down menu on the right side of the page to sort the apps by **Most Recent** or in alphabetical order of **App Name**.

The **Pending Invites** tab presents the pending invitations to apps that you have received (which you can **Accept** or **Decline**) in addition to the invitations you have sent.

### 3.1 App Tiles

Click an app tile to see the app [Buzz](/developerportal/general/buzz/#app-buzz).

By clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the app tile, you can quickly perform a number of actions:

{{< figure src="/attachments/developerportal/quick-action-menu.png" alt="Quick actions menu for an app" width="50%" >}}

The actions available depend on the app selected. The default actions available are **Edit in Mendix Studio Pro** and **Leave App**.

To stop watching an app and disable notifications for that app, click the {{% icon name="view" %}} icon so that you see the **You are not watching this app** tooltip. To return to watching that app, click the {{% icon name="view-off" %}} icon so that you see the **You are watching this app** tooltip.

To go to the [licensed environments](/developerportal/deploy/environments/) of your deployed app, click **Environments** at the bottom of the app tile.

## 4 Navigation Pane {#navigation-pane}

When you open an app in the Developer Portal, you can navigate between sections using the navigation pane on the left side of the screen. 

The navigation pane is divided into four main categories, which correspond with the documentation in this guide:

* [General](/developerportal/general/)
* [Project Management](/developerportal/project-management/)
* [App Insights](/developerportal/app-insights/)
* [Deployment](/developerportal/deploy/general/)

{{< figure src="/attachments/developerportal/navigation-pane.png" alt="The navigation pane" width="45%" >}}

## 5 Company Buzz and Apps {#my-company-apps}

In the top bar of the Developer Portal, an additional menu item is available for **Company Apps**:

{{< figure src="/attachments/developerportal/company-apps.png" class="image-border"  width=80%  alt="Company Apps in MxDock">}}

Click **Company Apps** to see a list of all the apps created by members of your [company](/control-center/company-settings/).

There are also details on the app's [Target Cloud](/developerportal/deploy/), the [Total Members](/control-center/members/) who can view and/or edit the app, a **Summary** description of the app, and the [Technical Contact](/developerportal/general/app-roles/#technical-contact) for the app.

You can also sort the order of the apps here by **Most Recent** or **App Name**.

## 6 Guide Categories

The *Developer Portal Guide* is divided into the following categories:
