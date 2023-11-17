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

The [Developer Portal](http://sprintr.home.mendix.com) is one of the key components of the Mendix Platform. In the Developer Portal, Mendix developers can collaborate, deploy, and manage their apps, and manage their company and users. 

The Developer Portal also offers open, well-defined APIs, enabling third-party developers to integrate their own widgets and plugins. For more information, see [API Documentation](/apidocs-mxsdk/apidocs/).

## 2 Navigation

[REMOVE] Developer Portal navigation is split up into global navigation (with the top bar), side navigation, and on-page navigation. 

Global navigation works the same in the Developer Portal as it does in other parts of the Mendix Platform (for example, [Mendix Marketplace](/appstore/) and [Mendix Catalog](/catalog/)). The global navigation is always accessible. 

[REMOVE] The side navigation is context-dependent and changes through different parts of the platform.

### 2.1 Global Navigation {#global-navigation}

[REMOVE] Global navigation includes the main menu (via the nine-dots icon), Search Menu, Help Menu, Notifications Menu, and Account Menu. From the Main Menu you can navigate anywhere. 

On the left side of the top bar, click the **Open Global Navigation** button (via the nine-dots icon) to access the main menu:

{{< figure src="/attachments/developerportal/navigation-menu.png" width="250" >}}

You can click the menu items to navigate to different parts of the Mendix Platform, or you can hover over the menu items to expand the sections for further access.

### 2.2 Search

In the **Search** box, you can search the platform for **Docs**, **Forum** posts, public **Marketplace** content, and **Academy** content.

Use the various filters to refine your search results:

{{< figure src="/attachments/developerportal/search-menu.png" width="300" >}}

### 2.3 Support Menu

Click the **Open Support Menu** button (via the question mark icon) to read up on [What's New](https://www.mendix.com/releases/), ask questions to the [Mendix community](/developerportal/community-tools/mendix-forum/#questions-tab), share an [idea](/developerportal/community-tools/mendix-forum/#ideas-tab) with the community, explore more [documentation](/), or contact [Mendix Support](/developerportal/support).

{{< figure src="/attachments/developerportal/help-menu.png" width="300" >}}

{{% alert color="info" %}}
If you see **Get Started with Mendix** on this menu, a red dot next to this menu item will remain there for 30 days after your signup.
{{% /alert %}}

### 2.4 Notifications

Click the **Open Notification Menu** button (via the bell icon) to see the platform notifications you have received. Clicking the notification itself takes you to the source.

To configure what types of notifications you receive, click the settings button (via the gear icon) and update the options in the configure the settings in [Notification Settings](/developerportal/community-tools/mendix-profile/#notifications) page that opens. 

{{< figure src="/attachments/developerportal/notifications.png" width="300" >}}

{{% alert color="info" %}}
To stop receiving notifications when new feedback is submitted for a specific app, go to the [General Settings](/developerportal/collaborate/general-settings/) page for that app and click **Stop Watching**. To disable notifications for multiple apps on one page, you can also use the **Stop Watching** option on the [My Apps](#my-apps) page.
{{% /alert %}}

### 2.5 Account

Click your avatar to access the account menu, which has relevant information about you and your settings. You can access your [Mendix Profile](/developerportal/community-tools/mendix-profile/), enable **Dark Mode**, and access your [User Settings](/developerportal/community-tools/mendix-profile/#settings).

## 3 Company Buzz and Apps {#my-company-apps}

In the top bar of the Developer Portal, two additional menu items are available: 

{{< figure src="/attachments/developerportal/company-links.png" width="400" >}}

* Click **Company Buzz** to communicate with colleagues, team members, stakeholders, and any other Mendix users in your company
    * For more details, see the [Company Buzz](/developerportal/general/buzz/#company-buzz) section of *Buzz*
* Click **Company Apps** to see all the apps created by members of your [company](/control-center/#company)
    * If you click an app for which you are a team member, you will be taken to the app [Buzz](/developerportal/general/buzz/#app-buzz)
    * If you click an app for which you are not an team member, you will see the app details
    * You can also sort the order of the apps here

## 4 My Apps {#my-apps}

To get started with building a new app, click **Create App** to open a page where you can choose a starting point:

{{< figure src="/attachments/developerportal/create-app.png" width="150" >}}

The **My Apps** page shows you a summary of your current apps:

{{< figure src="/attachments/developerportal/app-tiles.png" alt="Apps tiles" >}}

The **All** tab displays all the apps for which you are a [Team](/developerportal/general/team/) member. Any apps you pin with the pin icon will appear in the **Pinned** tab. Use the drop-down menu on the right side of the page to sort the apps by **Most Recent** or in alphabetical order of **App Name**.

The **Pending Invites** tab presents the pending invitations to apps that you have received (which you can **Accept** or **Decline**) in addition to the invitations you have sent. 

### 4.1 App Tiles

Click an app tile to see the app [Buzz](/developerportal/general/buzz/#app-buzz).

By clicking the ellipsis (**…**) in the app tile, you can quickly perform a number of actions:

{{< figure src="/attachments/developerportal/quick-action-menu.png" alt="Quick actions menu for an app" width="50%" >}}

The actions available depend on the app selected. The default actions available are **Edit in Mendix Studio Pro** and **Leave App**.

To stop watching an app and disable notifications for that app, click the eye icon so that you see the tooltip **You are not watching this app**. To return to watching that app, click the eye icon so that you see the tooltip **You are watching this app**.

To go to the [licensed environments](/developerportal/deploy/environments/) of your deployed app, click **Environments** at the bottom of the app tile.

## 5 Guide Categories

The *Developer Portal Guide* is divided into the following categories:
