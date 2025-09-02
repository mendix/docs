---
title: "Administration"
url: /appstore/modules/administration/
description: "Describes the configuration and usage of the Administration module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Administration](https://marketplace.mendix.com/link/component/23513) module contains the administration functionality, which allows you to manage local accounts and to view app statistics, such as runtime information, sessions, and schedules events.

### Features

* Support managing user accounts
* Provide a read-only overview to show the following information:
    * All active sessions
    * All scheduled events
    * All runtime instances
* Support viewing runtime statistics

### Dependencies

* [Atlas Core](https://marketplace.mendix.com/link/component/117187): required for the Administration module versions 4.0.0 and above
* [Combo Box](https://marketplace.mendix.com/link/component/219304): required for the Administration module versions 4.0.0 and above
* [Atlas UI Resources](https://marketplace.mendix.com/link/component/104730): required for the Administration module versions 3.0.0 and below
* [Mendix SSO](https://marketplace.mendix.com/link/component/111349): required for the Administration module versions 1.3.X (for example 1.3.2) and 2.1.X (for example 2.1.2)

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Administration module into your app.

## Usage

### Adding the Account Overview Page to the Navigation {#add-account-overview}

On the `Administration.Account_Overview` page, you can view and manage all the accounts in your app. To add the page to the navigation of the app, do as follows:

1. In App Explorer, open **Navigation**.
2. In **Menu**, click **New item**. The **New Menu Item** dialog box opens.
3. Enter a caption.
4. Select an icon.
5. In the **On click** drop-down list, select **Show a page**. The **Select web page** dialog box opens.
6. Find **Account_Overview** using the search box on the top and select it. The **Select web page** dialog box closes.
7. Click **OK** to save the settings for the new menu item.

If you run the app and log in as a user with the Administrator role, you can see the new page in the navigation.

### Adding Users as an Administrator

1. Make sure that you [added the account overview page to the navigation](#add-account-overview).

2. Run the app and log in to the app as a user with the Administrator role.

3. Go to the account overview page.

4. If the new user does not need to consume the published web service of your app, click **New local user** to add the new user.

   {{% alert color="info" %}}A local user can only log in to your app using a web browser. Their user name and password cannot be used for authentication to consume a published web service of your app.{{% /alert %}}

5. If the new user needs to consume the published web service of your app, click **New web service user** to add the new user.

   {{% alert color="info" %}}A web service user cannot log into your app using a web browser. Their user name and password can only be used for authentication to consume a published web service of your app.{{% /alert %}}

6. In the **New Account** dialog box, fill in the user data.

7. Click **Save**.

## Using Supporting Microflows with Mendix SSO                                                               {#use-with-mendix-sso}

The [Administration](https://marketplace.mendix.com/link/component/23513) module versions 1.3.X (for example 1.3.2) and 2.1.X (for example 2.1.2) contain a set of microflows to configure Mendix SSO to use **Administration.Account** as the user entity. To use the supporting microflows with Mendix SSO, perform the following steps:

1. Make sure that your app contains the Mendix SSO module. If it does not, import the [Mendix SSO](https://marketplace.mendix.com/link/component/111349) module from the Marketplace.

2. Configure the **MendixSSO_AfterStartup** microflow from the Administration module as the [after startup](/refguide/app-settings/#after-startup) microflow. If there is already an after startup microflow, do not replace it, but add the **MendixSSO_AfterStartup** microflow as a sub-microflow in the existing microflow.

{{% alert color="info" %}}If you previously used the Mendix SSO in your application, use the **MendixSSO_MigrateUsersToAccount** microflow to migrate users from the `MendixSSOUser` to the `Administration.Account` specialization. Before executing the migration, carefully read the instructions in the microflow.{{% /alert %}}
