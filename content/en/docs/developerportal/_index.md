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
    - mendix_version: ""
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 1 What Is the Developer Portal?

The [Developer Portal](http://sprintr.home.mendix.com) is one of the three key components of the Mendix Platform. The other two are [Mendix Studio Pro](/refguide/modeling/) and [Mendix Studio](/studio/). In the Developer Portal, Mendix developers can collaborate, deploy, and manage their apps, and manage their company and users. 

The Developer Portal also offers open, well-defined APIs, enabling third-party developers to integrate their own widgets and plugins. For more information, see [API Documentation](/apidocs-mxsdk/apidocs/).

## 2 Navigation {#navigation}

To create a new app click **Create App**, which will open a page where you can choose a starting pointing for your new app:

{{< figure src="/attachments/developerportal/create-app.png" >}}

On the right side of the top bar, you can search and access your [Mendix Profile](/developerportal/community-tools/mendix-profile/). You can also click the **+** icon to create a new app.

On the left side of the top bar, you open an access menu by clicking the **Switch to** menu:

{{< figure src="/attachments/developerportal/switcher.png"   width="300"  >}}

You can then access the following parts of the Mendix Platform:

* **Mendix Home** – the [My Apps](/developerportal/#my-apps) page
* [Studio](/studio/)
* **Get Studio Pro** – the [Studio Pro](/refguide/) download page in the [Mendix Marketplace](/appstore/)
* **Cloud**  – the [Nodes](/developerportal/deploy/node-permissions/) page, which shows a list of all the licensed Mendix Cloud nodes to which you have access
	* Clicking **Details** on this page opens the [Environments](/developerportal/deploy/environments/) page for the app that is deployed to a node
	* For details on the **Cluster Manager** option in the top bar, see [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/)
* [Control Center](/developerportal/control-center/)
* [Marketplace](/appstore/)
* [Data Hub](/data-hub/)
* [Academy](https://academy.mendix.com/link/home)
* [Docs](https://docs.mendix.com/)
* [Forum](/developerportal/community-tools/mendix-forum/)
* [Community](/developerportal/community-tools/)

You can also quickly access specific [Recent Apps](#my-apps) you have used.

Click [Company Buzz](/developerportal/collaborate/buzz/) to communicate with colleagues, team members, stakeholders, and any other Mendix users in your company.

Click [Company Apps](/developerportal/#my-company-apps) to see all the apps created by members of your company.

If you want to turn on the old navigation/header, click your avatar and toggle **New Navigation** to **Off**.

## 3 My Apps {#my-apps}

The **My Apps** page shows you a summary of your apps:

{{< figure src="/attachments/developerportal/apps-tiles.jpg" alt="Apps tiles" >}}

**All** displays all the apps for which you are a [Team](/developerportal/collaborate/team/) member. Any apps you pin with the pin icon will appear in the **Pinned** tab. 

Click an app tile to see the app [Buzz](/developerportal/collaborate/buzz/).

Using the drop-down menu, you can choose to sort the apps in the following ways:

* **Most Recent** first
* Alphabetical order of **App Name**

By clicking the ellipsis (**…**) in the app tile, you can quickly perform a number of actions:

{{< figure src="/attachments/developerportal/quick-action-menu.jpg" alt="Quick actions menu for an app" >}}

The actions available depend on the app selected:

* **Edit in Mendix Studio**
* **Edit in Mendix Studio Pro**
* **Leave App** – allows you to leave the app

To go to the [licensed environments](/developerportal/deploy/environments/) of your deployed app, click the cloud icon in the lower-right corner of the app tile.

## 4 My Company's Apps & Buzz {#my-company-apps}

In the header, you can click links to see your **Company Apps** and **Company Buzz**:

{{< figure src="/attachments/developerportal/company-links.png" >}}

On the **My Company's Apps** page, you will see all the apps created by members of your [company](/developerportal/control-center/#company).

You can also sort the order of the apps here.

If you click an app for which you are a team member, you will be taken to the app [Buzz](/developerportal/collaborate/buzz/).

If you click an app for which you are not an team member, you will see the app details:

{{< figure src="/attachments/developerportal/app-details.png" alt="Example of app details"   width="400"  >}}

For details on **Company Buzz**, see the [Company Buzz](/developerportal/collaborate/buzz/#company-buzz) section of *Buzz*.

## 5 Getting Assistance

Clicking the question icon in the Developer Portal brings up the options Mendix provides for getting assistance:

{{< figure src="/attachments/developerportal/developerportal-assistance.jpg" >}}

* **Get Started with Mendix** – click this to check out [Mendix Basics](https://guidance.mendix.com/link/onboarding)
* **What's New?** – click this to see our [latest features](https://www.mendix.com/releases/)
* **Ask the Community** – click this to go to the [Mendix Forum](https://forum.mendixcloud.com/)
* **Share an Idea** – click this to share your idea on Mendix Forum
* **Check the documentation** – click this to go to the [Mendix Documentation](https://docs.mendix.com/)
* **Contact Mendix Support** – click this to go to [Mendix Support](https://support.mendix.com/)

## 6 Notifications

Clicking the notification icon shows all the notifications that you have received.

{{< figure src="/attachments/developerportal/notification-icon.png" >}}

{{% alert color="info" %}}
A notification in the form of a red dot next to **Get Started with Mendix** will remain there for 30 days after your signup.
{{% /alert %}}

To configure what types of notifications you receive, click the settings icon and configure the settings in the [Notification Settings](https://user-settings.mendix.com/link/notifications) page.

{{< figure src="/attachments/developerportal/notification-settings-icon.png" >}}

## 7 Guide Categories

The *Developer Portal Guide* is divided into the following categories:

