---
title: "Administration"
url: /appstore/modules/administration/
description: "Describes the configuration and usage of the Administration module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Administration](https://marketplace.mendix.com/link/component/23513) module contains the administration functionality. It allows you to manage local accounts and view app statistics, such as runtime information, sessions, and scheduled events.

### Features

* Manages user accounts
* Provides a read-only overview that shows the following information:
    * All active sessions
    * All scheduled events
    * All runtime instances
* Displays runtime statistics

### Dependencies

* [Atlas Core](https://marketplace.mendix.com/link/component/117187): required for the Administration module versions 4.0.0 and above
* [Combo Box](https://marketplace.mendix.com/link/component/219304): required for the Administration module versions 4.0.0 and above
* [Atlas UI Resources](https://marketplace.mendix.com/link/component/104730): required for the Administration module versions 3.0.0 and below
* [Mendix SSO](https://marketplace.mendix.com/link/component/111349): required for the Administration module versions 1.3.X (for example 1.3.2) and 2.1.X (for example 2.1.2)

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Administration module into your app.

## Module Roles and Access Control

### Overview of Module Roles

The Administration module provides a set of fine-grained module roles for enhanced control over permissions and access. You can combine these roles to allow only the permissions required for a specific use case.

* **Administrator** – Allows full management of user accounts:

    * Create new user accounts. 
    * Delete existing user accounts.
    * Read and write access to `FullName` and `Email` of the `Administration.Account` objects. 
    * Change passwords of other accounts.

* **User** – Allows the following access levels:

    * Write access to the `FullName` and `Email` attributes of the `Administration.Account` object for the current user. 
    * Read access to the `FullName` and `Email` attributes of other users’ `Account` objects.

{{% alert color="warning" %}}This module role has been superseded by granular module roles, which offer improved flexibility and control. Refer to the following user roles for detailed instructions and examples.{{% /alert %}}

* **ReadOwnDetails** – Allows read access to the `FullName` and `Email` attributes of the `Administration.Account` object for the current user.

* **EditOwnDetails** – Allows read and write access to the `FullName` and `Email` attributes of the `Administration.Account` object for the current user, where write access inherently includes read access.

* **EditOwnPassword** – Allows the current user to change their own password. Note that either `ReadOwnDetails` or `EditOwnDetails` is required when applying this module role.

* **ReadOthersFullName** – Allows read access to the `FullName` attribute of other users’ `Administration.Account` objects.

* **ReadOthersEmail** – Allows read access to the `Email` attribute of other users’ `Administration.Account` objects.

{{% alert color="info" %}}The fine-grained module which were just mentioned were introduced in version 4.5.0 of the Administration module. If these roles are not available in your environment, Mendix recommends upgrading to the latest version to benefit from these improvements.{{% /alert %}}

### Default Access Rules

**Default rights for new members** are set to **None** for all access rules.

## Combining Module Roles Depending on Use Case

You can combine these module roles to configure access to user account data based on the needs of the app. Instead of assigning broad access, select only the module roles required for each app role.

{{% alert color="info" %}}Users with edit access automatically have read access. Edit permissions therefore include the ability to view and modify data.{{% /alert %}}

The following examples illustrate common role combinations:

### Default End-User 

Allows users to read and edit only their own details, and change only their own password.

* **EditOwnDetails** 
* **EditOwnPassword** 

### Read-Only User Profile

Allows users to read only their own personal details. Profile updates and password management are handled externally through the configured identity provider (IdP) or single sign-on (SSO) solution.

* **ReadOwnDetails**

### Users Who Need Visibility of Other Users’ Names

Required only when users’ full names must be displayed. For example, when using the [Workflow Commons](https://docs.mendix.com/appstore/modules/workflow-commons/) module, users with access to the Task Inbox must be able to view other users’ full names. The **Assignee** column uses this to display who is assigned to each task.

* **ReadOwnDetails**
* **EditOwnPassword**
* **ReadOthersFullName**

### User Profile with Email Visibility

Allows users to view their own personal details, the names of other users, and other users’ email addresses.

* **ReadOwnDetails**
* **EditOwnPassword**
* **ReadOthersFullName**
* **ReadOthersEmail**

### Administrative Users

Allows full management of user accounts.

* **Administrator**

## Usage

### Adding the Account Overview Page to the Navigation {#add-account-overview}

On the `Administration.Account_Overview` page, you can view and manage all the accounts in your app. To add the page to the app navigation, follow these steps:

1. In **App Explorer**, open **Navigation**.
2. In **Menu**, click **New item**. The **New Menu Item** dialog box opens.
3. Enter a caption.
4. Select an icon.
5. In the **On click** drop-down list, select **Show a page**. The **Select web page** dialog box opens.
6. Find **Account_Overview** using the search box at the top and select it. The **Select web page** dialog box closes.
7. Click **OK** to save the settings for the new menu item.

If you run the app and log in as a user with the Administrator role, you can see the new page in the navigation.

### Adding Users as an Administrator

1. Make sure that you [added the account overview page to the navigation](#add-account-overview).

2. Run the app and sign in as a user with the Administrator role.

3. Go to the account overview page.

4. If the new user does not need to consume the published web service of your app, click **New local user** to add the new user.

   {{% alert color="info" %}}A local user can only sign in to your app using a web browser. Their user name and password cannot be used for authentication to consume a published web service of your app.{{% /alert %}}

5. If the new user needs to consume the published web service of your app, click **New web service user** to add the new user.

   {{% alert color="info" %}}A web service user cannot sign in to your app using a web browser. Their user name and password can only be used for authentication to consume a published web service of your app.{{% /alert %}}

6. In the **New Account** dialog box, fill in the user data.

7. Click **Save**.

## Using Supporting Microflows with Mendix SSO {#use-with-mendix-sso}

The [Administration](https://marketplace.mendix.com/link/component/23513) module versions 1.3.X (for example, 1.3.2) and 2.1.X (for example, 2.1.2) contain a set of microflows to configure Mendix SSO to use **Administration.Account** as the user entity. To use the supporting microflows with Mendix SSO, follow these steps:

1. Make sure that your app contains the Mendix SSO module. If it does not, import the [Mendix SSO](https://marketplace.mendix.com/link/component/111349) module from the Marketplace.

2. Configure the **MendixSSO_AfterStartup** microflow from the Administration module as the [after startup](/refguide/runtime-tab/#after-startup) microflow. If there is already an after startup microflow, add the **MendixSSO_AfterStartup** microflow as a sub-microflow in the existing microflow instead of replacing it.

{{% alert color="info" %}}If you previously used the Mendix SSO in your application, use the **MendixSSO_MigrateUsersToAccount** microflow to migrate users from the `MendixSSOUser` to the `Administration.Account` specialization. Before executing the migration, carefully read the instructions in the microflow.{{% /alert %}}
