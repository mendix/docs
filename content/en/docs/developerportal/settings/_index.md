---
title: "Settings"
url: /developerportal/general-settings/
weight: 11
description: "Describes the Settings page of your app."
aliases:
    - /developerportal/settings/general-settings
    - /developerportal/settings/api-key
    - /developerportal/collaborate/general-settings
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #managing-app-users below is mapped from App > General > Settings > Manage App Users and the Mendix SSO module, so it should not be removed or changed.
---

## Introduction

The **Settings** page in the [navigation pane](/developerportal/#navigation-pane) of **Apps** presents an overview of your app.

The **Settings** page always contains the following tabs:

* **General**
* **Access Management**

These tabs are only available for users with the **App Settings** permission:

* **Cloud Settings**
* **Project Management**
* **History**
* **Story Archive**

## Page Header {#settings-page-header}

The page header displays the following information:

* The app image – You can change the image by clicking it.
* The app name – You can change the name of the app by clicking the pencil icon next to it.    
    Renaming the app in the Mendix Portal does not rename it in Studio Pro. The app name in Studio Pro is tied to its *.mpr* file. However, changing the name of the *.mpr* file is not supported, and we strongly advise against it. For more information, refer to the [Mendix MPR Storage](/refguide/version-control/#mpr-format) section in *Version Control*. 
* The company that owns the app.
* The **Watch** / **Stop Watching** toggle – You can enable or disable notifications for this app.

{{% alert color="info" %}}
Only users with the **App Settings** permission can edit the image and the app name.
{{% /alert %}}

## General {#general}

On this tab, you can find the following items:

* Logo of the project
* **Description** of the project
* **Project ID**
* [Technical Contact](/developerportal/general/app-roles/#technical-contact) of the app
* **Categories**
* **Danger Zone**
    * **Leave Project**
    * **Deactivate Project**
    * **Delete Project**

{{% alert color="info" %}}
Only users with the **App Settings** permission can do the following:

* Change the description of the project.
* Change the category assignment of the project.
* Deactivate or delete a project. For details, refer to [Leaving, Deleting, or Deactivating an App](/developerportal/general/leave-delete-app/).
{{% /alert %}}

## Cloud Settings {#cloud-settings}

{{% alert color="info" %}}
Only users with the **App Settings** permission can change cloud platforms.
{{% /alert %}}

On the **Cloud Settings** tab, you can select the cloud platform on which to deploy your app. The selection of cloud platforms available will depend on the features of your Mendix account.

If you select a non-Mendix Cloud platform like SAP, you will be redirected to a page to complete the setup. If you select Mendix Cloud, no additional setup is needed.

Specific steps for configuring different cloud platforms are provided here:

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)
* [Mendix on Kubernetes](/developerportal/deploy/private-cloud/)

## Access Management {#managing-app-users}

On the **Access Management** tab, you can manage and invite app users. App users are end-users who can access the deployed app on specific environments. They can use and test your deployed app, and provide feedback.

To manage users or invite users for an app deployed on a specific environment, click **Manage Users** or **Invite Users** for that environment. For more information, see the [Managing Users](#manage-users) and [Inviting Users](#invite-users) sections on this page.

On the tab, you can only see the environments that satisfy the following requirements:

* [Mendix Single Sign-On](/developerportal/deploy/mendix-sso/) is implemented in the app using the [Mendix SSO](/appstore/modules/mendix-sso/) module. For more information, refer to [Mendix Single Sign-On](/developerportal/deploy/mendix-sso/).
* You are currently assigned a user role in the app which allows you to manage other users. For more information, refer to the [User Management Properties](/refguide/user-roles/#user-management) section of *User Roles*.

{{% alert color="info" %}}
When deploying your application to a non-production environment, the deploying user and the Technical Contact are always assigned the Administrator user role.

When deploying your application to a production environment, the Technical Contact is always assigned the Administrator user role. If you cannot see an environment, ask your Technical Contact to assign you a user role for that environment which allows you to manage other users. 
{{% /alert %}}

### Managing Users {#manage-users}

When you click **Manage Users** for your environment, a dialog box opens with a list of the current app users you can remove or edit:

To remove an app user from the environment, click **Remove** by their name.

To edit an app user's roles, click **Edit** by their name. Permissions for these roles, such as **User** or **Administrator**, correspond to what you have configured for your app's user roles in [App Security](/refguide/app-security/#user-roles) in Mendix Studio Pro. If you have created a customized role, you need to publish the app before you are able to see and assign it here.

{{% alert color="info" %}}
If an app user has been granted access to an app environment through a [group](/control-center/groups/), only a Mendix Admin can remove them from that environment (by removing them from that group) or edit the roles granted by that group policy.
{{% /alert %}}

### Inviting Users {#invite-users}

To invite new app users to your app, click **Invite Users** within that environment or in the **Manage Users** window, and follow these steps:

1. Enter the email addresses of the end-users you want to invite.
2. Click **Include your app team** to include invitations to all the members of your [Team](/developerportal/general/team/). This may be useful, because people invited to join your team are not added as app users automatically.
3. Click **Add to invitee list**.
4. Select the role for the app user (for example, **User** or **Administrator**). Permissions for these roles correspond to what you have configured for your app's user roles in [App Security](/refguide/app-security/#user-roles) in Mendix Studio Pro. If you have created a customized role, you need to publish the app before you are able to see and assign it here.
5. Click **Next** to send the invitation.

The invitee will receive an email asking them to authorize access to their Mendix account. After they provide authorization, they are directed to your deployed app.

## Project Management {#project-management}

{{% alert color="info" %}}
Only users with the **App Settings** permission can manage these settings.
{{% /alert %}}

On the **Project Management** tab, you can select your team's planning tool for the app. By default, [Epics](/developerportal/project-management/epics/) is the selected tool.

If you manage your projects in Jira, you can connect your apps in **Apps** to Jira. For more information, see [Jira Connector](/developerportal/project-management/jira-connector/).

## Maia Settings {#maia-settings}

{{% alert color="info" %}}
Only users with the **App Settings** permission can toggle this setting.
{{% /alert %}}

The **Maia Settings** tab allows you to enable or disable Maia features for your app.    

When you enable Maia, you are prompted to provide a description for your project. That way, the Mendix AI assisted responses will be more accurate and more relevant to your app.

## History {#history}

{{% alert color="info" %}}
Only users with the **App Settings** permission can view the history.
{{% /alert %}}

The **History** tab presents the collaboration actions for the app. On this page, you can see what change was made, who performed it, and when it occurred.

When you select a history item and click **Show item**, the details of the story, Sprint, or [feedback item](/developerportal/app-insights/feedback/) are displayed.

## Read More

* [Leave and Delete an App](/developerportal/general/leave-delete-app/)
