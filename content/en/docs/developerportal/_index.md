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
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 1 What Is the Developer Portal?

The [Developer Portal](http://sprintr.home.mendix.com) is one of the key components of the Mendix Platform. In the Developer Portal, Mendix developers can collaborate, deploy, and manage their apps, and manage their company and users. 

The Developer Portal also offers open, well-defined APIs, enabling third-party developers to integrate their own widgets and plugins. For more information, see [API Documentation](/apidocs-mxsdk/apidocs/).

## 2 Top Bar and Navigation {#navigation}

On the right side of the top bar, you can access your [Mendix Profile](/developerportal/community-tools/mendix-profile/).

To see your platform notifications, click the **Open Notification Menu** button (via the bell icon).

{{% alert color="info" %}}
A notification in the form of a red dot next to **Get Started with Mendix** will remain there for 30 days after your signup.
{{% /alert %}}

Click the **Open Support Menu** button (via the question mark icon) to access this resouce menu:

{{< figure src="/attachments/developerportal/help-menu.png" width="300" >}}

The menu items open the following parts of the Mendix Platform:

* **What's New?** – the [Mendix Platform Releases](https://www.mendix.com/releases/) page
* **Ask the Community** – the **Questions** section of the [Mendix Forum](/developerportal/community-tools/mendix-forum/#questions-tab)
* **Share an Idea** – the **Ideas** section of the [Mendix Forum](/developerportal/community-tools/mendix-forum/#ideas-tab)
* **Check the Documentation** – the [Welcome to Mendix Docs](/) page
* **Contact Mendix Support** – the [Mendix Support](https://support.mendix.com/hc/en-us) page

You can also search the Mendix Platform via the field in the top bar.

On the left side of the top bar, click the **Open Global Navigation** button (via the nine-dots icon) to access this navigation menu:

{{< figure src="/attachments/developerportal/navigation-menu.png" width="300" >}}

The menu items open the following parts of the Mendix Platform:

* **Home** – the [My Apps](/developerportal/#my-apps) page
* **Apps** – the [My Apps](/developerportal/#my-apps) page
* **Deployment**  – the [Nodes](/developerportal/deploy/node-permissions/) page, which shows a list of all the licensed Mendix Cloud nodes to which you have access
* [Control Center](/developerportal/control-center/)
* [Portfolio](/developerportal/portfolio-management/)
* [Marketplace](/appstore/)
* [Catalog](/catalog/)
* [Academy](https://academy.mendix.com/link/home)
* [Community](/developerportal/community-tools/)

You can hover over the menu items above to expand the sections for further access.

## 3 My Apps {#my-apps}

To get started with building a new app, click **Create App** to open a page where you can choose a starting point:

{{< figure src="/attachments/developerportal/create-app.png" width="150" >}}

The **My Apps** page shows you a summary of your current apps:

{{< figure src="/attachments/developerportal/app-tiles.png" alt="Apps tiles" >}}

**All** displays all the apps for which you are a [Team](/developerportal/general/team/) member. Any apps you pin with the pin icon will appear in the **Pinned** tab. 

### 3.1 App Buzz

Click an app tile to see the app [Buzz](/developerportal/general/buzz/#app-buzz).

Using the drop-down menu, you can choose to sort the apps in the following ways:

* **Most Recent** first
* Alphabetical order of **App Name**

By clicking the ellipsis (**…**) in the app tile, you can quickly perform a number of actions:

{{< figure src="/attachments/developerportal/quick-action-menu.png" alt="Quick actions menu for an app" width="50%" >}}

The actions available depend on the app selected:

* **Edit in Mendix Studio Pro**
* **Leave App** – allows you to leave the app

To stop watching an app and disable notifications for that app, click the eye symbol so that you see the tooltip **You are not watching this app**. To return to watching that app, click the eye symbol so that you see the tooltip **You are watching this app**.

To go to the [licensed environments](/developerportal/deploy/environments/) of your deployed app, click the cloud icon in the lower-right corner of the app tile.

The **Pending Invites** tab presents the pending invitations to apps that you have received (which you can **Accept** or **Decline**) in addition to the invitations you have sent. 

### 4 My Company's Apps and Company Buzz {#my-company-apps}

In the top bar of the Developer Portal, you can do the following:

* Click [Company Buzz](/developerportal/general/buzz/) to communicate with colleagues, team members, stakeholders, and any other Mendix users in your company
* Click [Company Apps](/developerportal/#my-company-apps) to see all the apps created by members of your company

{{< figure src="/attachments/developerportal/company-links.png" >}}

On the **My Company's Apps** page, you will see all the apps created by members of your [company](/developerportal/control-center/#company).

You can also sort the order of the apps here.

If you click an app for which you are a team member, you will be taken to the app [Buzz](/developerportal/general/buzz/).

If you click an app for which you are not an team member, you will see the app details.

For details on **Company Buzz**, see the [Company Buzz](/developerportal/general/buzz/#company-buzz) section of *Buzz*.

## 5 Getting Assistance

Clicking the question icon in the Developer Portal brings up the options Mendix provides for getting assistance:

* **Get Started with Mendix** – click this to check out [Mendix Basics](https://guidance.mendix.com/link/onboarding)
* **What's New?** – click this to see our [latest features](https://www.mendix.com/releases/)
* **Ask the Community** – click this to go to the [Mendix Forum](https://forum.mendixcloud.com/)
* **Share an Idea** – click this to share your idea on Mendix Forum
* **Check the documentation** – click this to go to the [Mendix Documentation](/)
* **Contact Mendix Support** – click this to go to [Mendix Support](https://support.mendix.com/)

## 6 Notifications {#notifications}

Clicking the notifications icon shows all the notifications that you have received.

{{< figure src="/attachments/developerportal/notifications-icon.png" >}}

To configure what types of notifications you receive, click the settings icon and configure the settings in the [Notification Settings](https://user-settings.mendix.com/link/notifications) page.

{{< figure src="/attachments/developerportal/notification-settings-icon.png" >}}

{{% alert color="info" %}}If you no longer would like to receive notifications when new feedback is submitted for a specific app, go to the [General Settings](/developerportal/collaborate/general-settings/) page for this app, and then click **Stop Watching**.<br/>

If you would like to disable notifications for multiple apps on one page, you can also use the **Stop Watching** option on the [My Apps](#my-apps) page.{{% /alert %}}

## 7 Guide Categories

The *Developer Portal Guide* is divided into the following categories:
