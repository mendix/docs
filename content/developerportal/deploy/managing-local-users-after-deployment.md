---
title: "Manage Local Users in Studio"
parent: "tencent-deploy"
menu_order: 60
description: ""
tags: ["Tencent"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#draft: true
---

{{% alert type="info" %}}
This documentation is only relevant to customers deploying their Mendix app on the Tencent Cloud.
{{% /alert %}}

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click \[中文译文\](https://cdn.mendix.tencent-cloud.com/documentation/deploy/tencent-local-users-in-studio.pdf).
{{% /alert %}}


# 1 Introduction

Mendix gives you various ways to manage your App's users.

With Mendix Studio Pro, you can configure this directly in your security settings. \[Click here to learn more\](https://docs.mendix.com/refguide8/administrator). 

With Mendix Studio on Tencent Cloud, it’s also possible to directly publish your app to your deployment environment and manage your app’s users locally from there. For your convenience, we’ve included the “Administration” module in the starter app template to make that happen. This article guides you through accessing this and managing users.


# 2 Accessing the Administrator Account

For each app published from Mendix Studio on Tencent Cloud, a default administrator user is created.

## 2.1 Administrator Properties

In the **Administrator** tab the following properties are available:

- User name
- Password
- User role

**2.1.1 User Name**
The user name is used to sign into the application as the Administrator.
Default: *MxAdmin*
{{% alert type="info" %}}
Since this is general knowledge, it is safer to change this to a custom user name after you’ve obtained access to the user administration of your app.
{{% /alert %}}

**2.1.2 Password**
The password is used to sign into the application as the Administrator. You can change the password from the Developer Portal after publishing your app.

**2.1.3 User Role**
The user role assigned to the Administrator. For more information, see [User Roles](https://docs.mendix.com/refguide8/user-roles).
Default: *Administrator*

{{% alert type="info" %}}
The administrator is always created and has the System.Administrator role by default. The System.Administrator role allows users of your application to be managed.
{{% /alert %}}

{{% alert type="warning" %}}
When your app is deployed on Tencent Cloud, changes to the user role of the administrator account will not be applied until the administrator password is changed. See the [Action Buttons] (https://docs.mendix.com/developerportal/deploy/tencent-deploy#6-1-3-5-change-admin-password) section of *Deploying a Mendix App on Tencent Cloud (腾讯云)* for instructions on changing the admin password.
{{% /alert %}}


## 2.2 Changing the Default Administrator Password

**2.2.1 Introduction**
To enter the Environment details page, go to the Developer Portal, select your app, click Environments.

![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1625753996456_image.png)


On the Environments page in Cloud Portal, choose the environment you’ve published your app to, and select **Details**.

![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1625754092270_image.png)


On the *Environment Details* page, make sure you're on the [*General* tab](https://docs.mendix.com/developerportal/deploy/tencent-deploy#environment-details) for the specific environment.

**2.2.2 Action Buttons on the General Tab**
The general tab shows information about your running app. Most of the information is self-explanatory, but the status information gives you a quick summary of the status of the environment and the app deployed there.

There are also buttons which allow you to perform various actions on your app and environment. Go here and find the button labeled **Change Admin Password**.


![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1625754152298_image.png)


**2.2.3 Change Admin Password**
This allows you to change the password for the local admin user in your app without having to change it in Studio Pro and redeploy the app.

![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1625754375245_image.png)


**2.2.4 Apply Changes**
Apply the changes you've made by click **Apply Changes**

![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1625754415893_image.png)



# 3 Managing App Users

Using your freshly updated login credentials, you’re ready to start managing your users. For your convenience, on Tencent, we’ve included the *Administration* module with every new blank app. Log into your newly published app and visit the User Administration section.


## 3.1 Introduction

The Administration module is shipped with al Mendix Project Themes that can be used for new App creation. The module contains administration functionalities to manage App Users and to see App statistics like runtime information, sessions and schedules events.

**3.1.1 Typical usage scenario**
Every new project created in the Mendix Portal or in the Mendix Modeler contains this module. Included by default in templates on Mendix platform on Tencent Cloud.

**3.1.2 Features and limitations**

1. Management of User Accounts
2. Read-only overview of
    - all active sessions
    - all schedules events
    - all runtime instances
    - Runtime statistics


## 3.2 Accessing User Management

This section describes how to access the user management screen(s) from the Administration module as embedded in your Mendix App.

**3.2.1 Admin login**
Go to your newly deployed app on its *App URL* and log in with the \[default Admin username\](#2-1-1) and your \[newly changed Admin Password\](#2-2-3).

![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1626176073776_image.png)


**3.2.2 Access User Management**
After logging in, select the User Management option from your App’s navigation menu. Since you are logged in as administrator, this option should be visible to you.

![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1626176148627_image.png)


{{% alert type="info" %}}
If you’ve created your app using an older version of Mendix, this module might not be available to you. Please \[consult the How-to guide on importing modules\](https://docs.mendix.com/howto8/integration/importing-and-exporting-objects) into your project and redeploy.
{{% /alert %}}


## 3.3 Managing User Accounts

This section describes how to create and manage user accounts from the Administration module as embedded in your Mendix App.

**3.3.1 Create a New Local User**
To create a new local user, select **New local user** in the User Management Overview and fill out the required fields.

![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1626177467104_image.png)


Under **User role**, select the appropriate role. Your app is configured by default with *Administrator* and *User* roles.

**3.3.2 Edit an existing Local User**
To exist an existing Local User, select the user’s row in the overview and select the **Edit** button.

![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1626183178013_image.png)


Change the user properties where necessary and select the **Save** button

![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1626183221613_image.png)


**3.3.3 Create or Edit Web Service Users**
The User Management Overview also gives you the ability to create *Web Service Users*, which are meant to connect your Mendix App with other (Mendix) apps \[when publishing Web Services\](https://docs.mendix.com/refguide/published-web-services). In some cases, to access services, other apps may need to authenticate themselves with your Mendix App. You can use this option to create dedicated accounts for each user of your Mendix App’s *Web Services*.


![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1626183607285_image.png)


Simply select **New web service user** in the User Management Overview and fill out the required fields.


![](https://paper-attachments.dropbox.com/s_F1AEA4C30EA77C019CA03F860C9CCE8820091DA2D4D3996D28589DE43817C673_1626183638876_image.png)


