---
title: "Private Mendix Platform Functionalities - All Users"
url: /private-mendix-platform/reference-guide/common/
description: "Provides details on the features and functionality of the Private Mendix Platform that are common for all types of users."
weight: 10
---

## Introduction

This section of the Private Mendix Platform Reference Guide provides information about the menus and functionalities of the Private Mendix Platform that are common for administrator and developer users.

### Sign In

The initial login screen is the same for all users, whether or not they have administrator access rights. The following login methods are available:

* A local user login with a username and password
* Optionally, an SSO login which redirects to an SSO provider

{{< figure src="/attachments/private-platform/pmp-ref-signin.png" class="no-border" >}}

After signing in, all users regardless of their role are initially directed to the **My Apps** page. Users with the administrator role can switch to admin view by clicking the user icon in the top right corner, and then selecting **Switch to Admin Mode**.

### Top Navigation Bar

The top navigation bar displays your location within the Platform (for example, *Apps* or *Marketplace*). The branding of the bar, such as the logo and title, can be customized by a Company Admin.

From the navigation bar, you can access the following items:

* [Platform Navigation](#navigation) (({{% icon name="layout-1-filled" %}}))
* **Notification Center** (({{% icon name="alarm-bell" %}}))
* **Account Menu**

#### Platform Navigation {#navigation}

The navigation menu contains the options that you need to make or manage your apps.

{{< figure src="/attachments/private-platform/pmp-navigation-menu.png" class="no-border" >}}

It consists of the following sections:

* **Make**
    * **Mendix Home** - Click this option to go to the [My Apps](#my-apps) page.
    * **Group Apps** - Click this option to go to the [My Group Apps](#my-group-apps) page.
    * **Get Studio Pro** - Click this option to go to the [Get Studio Pro](#get-studio-pro) page.
* **Manage**
    * **My Content** - Click this option to go to the [My Content](#my-content) page.
    * **Group Content** - Click this option to go to the [Group Content](#group-content) page.
    * **Company Content** - Click this option to go to the [Company Content](#company-content) page.

#### Notifications

The **Notifications** center shows notifications for the following events:

* App events
    * You were added to an app.
    * You were removed from an app.
    * Your role in an app changed.
    * A user requested access to your an app.
    * You were made the owner of an app.
    * Your app has received new feedback.
* Deployment events
    * Your deployment package was successfully created.
    * Your deployment package could not be created because of an error.
    * Your app was deployed.
    * Your app could not be deployed due to an error.
* Marketplace events
    * A Marketplace component that you are following was updated.
    * A Marketplace component that you own was approved for publication.
    * A new version of your Marketplace component was approved for publication.
    * A Marketplace component that you own was rejected from publication.
    * A new version of your Marketplace component was rejected from publication.
    * You were made the owner of a Marketplace component.

{{< figure src="/attachments/private-platform/pmp-notifications.png" class="no-border" >}}

You can click a notification to view the related page or link. You can also mark a notification as read or unread by clicking the status dot on the left. To set your notification preferences, go to [Manage My Account > Notifications](#manage-notifications).

### My Apps {#my-apps}

The **My Apps** page is the landing page of Private Mendix Platform.

{{< figure src="/attachments/private-platform/pmp-homepage.png" class="no-border" >}}

It contains the following elements:

#### Onboarding

The top section of the **My Apps** page contains elements that help new users get started with the Private Mendix Platform. It consists of the following blocks:

* **Download & Install Studio Pro** - Click this block to download the highest version of Studio Pro available in your Private Mendix Platform.
* **Patch Studio Pro** - Click this block to download the required patch file for Studio Pro.
* **Create a New App Project** - Click this block to create a new app. For more information, see [Creating a New App](/private-mendix-platform/user-guide/#create-app).

To hide the **Onboarding** section, click **Hide onboarding**.

#### My Apps Overview

The bottom section of the **My Apps** page contains an overview of your active and archived applications. It contains the following elements:

* Search bar - Use the search bar to search through apps by name or description.
* **Active** tab - Displays all currently active apps. Each tile shows the current member count for the app, as well as a sub-menu to archive or delete it. To view more details about an app, click on its tile. For more information, see [Managing Your App](/private-mendix-platform/user-guide/#manage-app).
* **Archived** tab - Displays all archived apps. To reactivate an archived project, click on its tile. Apps cannot be archived if they have more than one member.