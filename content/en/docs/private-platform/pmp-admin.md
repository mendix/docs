---
title: "Private Mendix Platform Administration Guide"
url: /private-mendix-platform/administration/
description: "Documents the business-as-usual administrator tasks for the Private Mendix Platform."
weight: 40
aliases:
    - /private-mendix-platform-administration/
---

## Introduction

As a user with Administrator access rights, you can perform the business-as-usual administrator tasks such as app management and user management. You can also manage Marketplace-related settings for your company.

## App Management

On the **App Management** page, administrators can manage their apps.

{{< figure src="/attachments/private-platform/pmp-admin1.png" class="no-border" >}}

The page shows you a summary of your apps.

Click an app tile to see more details about the app.

By clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the app tile, you can quickly perform a number of actions:

* Edit details such as app name and description
* Invite users to work on the app
* View the Git revisions per branch for the app
* Assign the app to a new owner or group
* Archive the app, provided you are the only team member.
    
    You will be warned of the consequences and asked for confirmation before the app is archived.

* Delete the app, provided you are the only team member.
    
    You will be warned of the consequences and asked for confirmation before the app is archived.

## Marketplace

In the **Marketplace** section, administrators can manage various settings related to the content available on the Private Platform Marketplace. The Private Platform Marketplace is a local version of the [Mendix Marketplace](/appstore/overview/), enclosed entirely within the Private Platform. Developers in your organization can also create their own modules, connectors, and sample apps, and share them on the Private Platform Marketplace to make them available to other users.

{{< figure src="/attachments/private-platform/pmp-admin2.png" class="no-border" >}}

As the administrator, you can perform the following actions:

* In the **Content Management** tab, you can view the Marketplace content that your users have already published, as well as any items which are pending approval, or which have been rejected.
* In the **Taxonomy Management** tab, you can configure the supported Studio Pro versions and sub-categories that your users can select when creating Marketplace content. You can also view and edit the available licenses.
* In the **Content Import** tab, you can view the contents available in your Private Marketplace. You can also download and import the modules in bulk.

## Users

In the **User Management** section, administrators can manage user accounts and user groups.

{{< figure src="/attachments/private-platform/pmp-admin3.png" class="no-border" >}}

As the administrator, you can perform the following actions:

* In the **User Management** tab, you can create and edit accounts for your local users and API users (that is, accounts that are used by an API service to access your Private Mendix Platform). By clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) by an account, you can quickly perform a number of actions:

    * Edit a user's name and email
    * Assign or remove user roles
    * Block a user
    * Change a user's password
    * Configure the language and time zone settings for a user
    * Delete a user account

In the **Group Management** tab, you can create and edit user groups. These groups typically reflect your organization's structure. You can also use the **Automation Settings** option to automatically assign users to groups based on their profile attributes.
