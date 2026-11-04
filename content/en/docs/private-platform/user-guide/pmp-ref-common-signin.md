---
title: "Signing in and Navigating the Private Mendix Platform Home Page"
linktitle: "Sign In and Navigation"
url: /private-mendix-platform/reference-guide/common/signin/
description: "Provides details on the login and home page of Private Mendix Platform."
weight: 5
---

## Introduction

The initial login screen is the same for all users, whether or not they have administrator access rights. The following login methods are available:

* A local user login with a username and password
* Optionally, an SSO login which redirects to an SSO provider

{{< figure src="/attachments/private-platform/pmp-ref-signin.png" class="no-border" >}}

After signing in, all users regardless of their role are initially directed to the **Home** page. Users with the administrator role can switch to admin view by clicking the user icon in the top right corner, and then selecting **Admin Mode** from the **User Mode** drop-down.

## Top Navigation Bar

The top navigation bar displays your location within the Platform (for example, *Apps* or *Marketplace*). The branding of the bar, such as the logo and title, can be customized by a Company Admin.

From the navigation bar, you can access the following items:

* [Platform Navigation](#navigation) (({{% icon name="layout-1-filled" %}}))
* [Notifications](#notifications) (({{% icon name="alarm-bell" %}}))
* [Account Menu](#account)

### Platform Navigation {#navigation}

The navigation menu contains the options that you need to make or manage your apps.

{{< figure src="/attachments/private-platform/pmp-navigation-menu.png" class="no-border" >}}

It consists of the following sections:

* **Make**
    * **Mendix Home** - Click this option to go to the [My Apps](/private-mendix-platform/reference-guide/common/my-apps/) page.
    * **Group Apps** - Click this option to go to the [My Group Apps](/private-mendix-platform/reference-guide/common/group-apps/) page.
    * **Get Studio Pro** - Click this option to go to the [Get Studio Pro](/private-mendix-platform/reference-guide/common/get-studio/) page.
* **Manage**
    * **My Content** - Click this option to go to the [My Content](/private-mendix-platform/reference-guide/common/my-content/) page.
    * **Group Content** - Click this option to go to the [Group Content](/private-mendix-platform/reference-guide/common/group-content/) page.
    * **Company Content** - Click this option to go to the [Company Content](/private-mendix-platform/reference-guide/common/company-content/) page.

### Notifications {#notifications}

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

You can click a notification to view the related page or link. You can also mark a notification as read or unread by clicking the status dot on the left. To set your notification preferences, go to [Manage My Account > Notifications](/private-mendix-platform/reference-guide/common/account/#manage-notifications).

### Account Menu {#account}

The Account menu contains the options that you need to make or manage your account.

{{< figure src="/attachments/private-platform/pmp-account-menu.png" class="no-border" >}}

It consists of the following sections:

* **Manage My Account** - Click this option to go to the [Manage My Account](/private-mendix-platform/reference-guide/common/account/) section.
* **Manage My Group** - This option is available only to users who have the Group Admin role. Click it to go to the [Manage My Group](/private-mendix-platform/reference-guide/common/manage-group/) page.
* **Switch to Admin Mode** - This option is available only to users who have the Company Admin and System Admin roles. Click it to go to the Administration section of Private Mendix Platform.
* **Show Onboarding** - Click this option to re-enable the [Onboarding](/private-mendix-platform/reference-guide/common/my-apps/#onboarding) section if you previously hid it.
* **Sign out** - Click this option to end the session and go back to the login screen.