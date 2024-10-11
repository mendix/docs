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
* [Notifications](#notifications) (({{% icon name="alarm-bell" %}}))
* [Account Menu](#account)

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

#### Notifications {#notifications}

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

#### Account Menu {#account}

The Account menu contains the options that you need to make or manage your account.

{{< figure src="/attachments/private-platform/pmp-account-menu.png" class="no-border" >}}

It consists of the following sections:

* **Manage My Account** - Click this option to go to the [Manage My Account](#manage-account) section.
* **Manage My Group** - This option is available only to users who have the Group Admin role. Click it to go to the [Manage My Group](#manage-group) page.
* **Switch to Admin Mode** - This option is available only to users who have the Company Admin and System Admin roles. Click it to go to the Administration section of Private Mendix Platform.
* **Show Onboarding** - Click this option to re-enable the [Onboarding](#onboarding) section if you previously hid it.
* **Sign out** - Click this option to end the session and go back to the login screen.

### My Apps {#my-apps}

The **My Apps** page is the landing page of Private Mendix Platform.

{{< figure src="/attachments/private-platform/pmp-homepage.png" class="no-border" >}}

It contains the following elements:

#### Onboarding {#onboarding}

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

### My Group Apps {#my-group-apps}

The **My Group Apps** page shows an overview of all apps owned by the groups to which a user belongs.

{{< figure src="/attachments/private-platform/pmp-refguide-groupapps.png" class="no-border" >}}

It contains the following elements:

* Search bar - Use the search bar to search through apps by name or description.
* A card for each app owned by all your user groups.

   * If you are a member of this app's project team, you can click the card to see the app details. 
   * If you are not a member of the project, clicking the card opens a dialogue window with basic information about this app. From there, you can click **Request Access** to notify the app owner that you want to join the app team. If the app has been deployed, you can also click **Launch App** to open the URL of this app's most recently deployed environment.

### Get Studio Pro {#get-studio-pro}

The **Get Studio Pro** page is the download page for compatible Studio Pro versions.

{{< figure src="/attachments/private-platform/pmp-ref-download-studio.png" class="no-border" >}}

Not all Studio Pro versions published by Mendix on the [Mendix Marketplace](https://marketplace.mendix.com/) are compatible with Private Mendix Platform. Private Mendix Platform offers predefined compatible versions of Studio Pro, which are tied to supported Runtime versions and reusable components (such as Starter App templates). Company admins can specify which of these supported versions are available the end users of their Private Mendix Platform.

### My Content {#my-content}

The **My Content** page shows a list of all the content owned by the user.

{{< figure src="/attachments/private-platform/pmp-refguide-mycontent.png" class="no-border" >}}

You can click **Add Content** to add a new content item. For more information, see [Sharing Marketplace Content](/private-mendix-platform/user-guide/#sharing).

You can also click a content item to view or edit its details.

{{< figure src="/attachments/private-platform/pmp-content-details.png" class="no-border" >}}

### Group Content {#group-content}

The **My Content** page shows a list of all the content owned by the groups to which the user belongs. Only items that have been shared with the relevant group are displayed here. Draft versions of content are not shown on the page.

{{< figure src="/attachments/private-platform/pmp-refguide-mygroupcontent.png" class="no-border" >}}

You can click **Add Content** to add a new content item. For more information, see [Sharing Marketplace Content](/private-mendix-platform/user-guide/#sharing-content-with-groups).

You can also click a content item to view or download it from the Private Platform Marketplace.

{{< figure src="/attachments/private-platform/pmp-group-content-details.png" class="no-border" >}}

### Company Content {#company-content}

The **Marketplace** page is a local version of the Mendix Marketplace, enclosed entirely within the Private Platform.

{{< figure src="/attachments/private-platform/pmp-refguide-company-content.png" class="no-border" >}}

The page shows content available to end users, organized by category. You can click **View More** to view all items from a particular category. You can also click a content item to view or download it from the Private Platform Marketplace.

### Manage My Account {#manage-account}

The **Manage My Account** menu contains the options that you need to make or manage your account. It consists of the following sections:

#### Profile

Use the **Profile** page to add a profile picture, as well as view and edit your profile information. Some fields are fixed or only editable by an admin.

{{< figure src="/attachments/private-platform/pmp-manage-profile.png" class="no-border" >}}

#### Change Password

Use the **Change Password** page to reset your password by doing the following steps:

1. Enter your current password.
2. Enter the new password.
3. Confirm the new password.
4. Click **Update**.

#### Personal Access Tokens

A Personal Access Token (PAT) is used to identify the user account and its corresponding privileges/permissions when interacting with PMP over API's and other non-GUI interactions. For example, when setting up automated API calls between an external service and PMP. For more information, see [APIs for Private Mendix Platform](/apidocs-mxsdk/apidocs/private-platform/).

{{< figure src="/attachments/private-platform/pmp-manage-pat.png" class="no-border" >}}

The **Personal Access Tokens** page shows a list of previously created Personal Access Tokens along with the following information:

* **Name**
* **Scope**
* **Expiry date**
* **Actions**
    * **View details** - Explains the token scope.
    * **Copy PAT** - Copies the token to clipboard.
    * **Delete** - Deletes the token.
* **New Token** - Creates a new token with the following information:
    * **Input Name** – Enter a meaningful name for the token.
    * **Expiry Date** – Specify the expiry date of the token according to your company restrictions. As a best practice, never set the expiration time for the token to be more than one year.
    * **Project scopes** – Specify the scopes that are needed for this token. To reduce risk and impact, follow the least-privilege principle for token scope and use different tokens for different purposes instead of creating one token with a large scope.

#### Service Credentials

Service credentials are used to establish the user account's identity with external services that Private Mendix Platform is integrated with, such as the version control server. Depending on settings configured by the admin, they can automatically provisioned through the integrations or manually configured for the user account.

{{< figure src="/attachments/private-platform/pmp-manage-credentials.png" class="no-border" >}}

The **Service Credentials** page shows a card for each previously created set of credentials. You can edit, delete, or create new credentials on this page.

#### Notifications

The preferences displayed on the **Notifications** page cannot be changed in the current version of Private Mendix Platform and are offered for information only. In a future release, preferences for additional notification channels such as email and push notifications will be configurable on this page.

### Manage My Group {#manage-group}

The **Manage My Group** page enables users with the Group Admin role to manage the membership of their user groups. The left navigation menu lists all groups managed by this admin.

{{< figure src="/attachments/private-platform/pmp-manage-my-group.png" class="no-border" >}}

The page shows a list of members for a particular group. Group admins can use it to add and remove members, or search for Platform users by their name or email and add them to the group.