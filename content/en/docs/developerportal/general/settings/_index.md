---
title: "Settings"
url: /developerportal/collaborate/general-settings/
weight: 14
description: "Describes the Settings page of your app."
aliases:
    - /developerportal/settings/general-settings
    - /developerportal/settings/api-key
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #managing-app-users below is mapped from App > General > Settings > Manage App Users and the Mendix SSO module, so it should not be removed or changed.
---

## Introduction

The **Settings** page in the [navigation pane](/developerportal/#navigation-pane) of **Apps** presents an overview of your app.

On the top of the page, you can see the image of the app, the app name, and the company that owns the app. You can also find the **Watch** / **Stop Watching** toggle, which enables or disables notifications for this app.

{{< figure src="/attachments/developerportal/general/settings/general-information.png"  class="no-border" >}}

{{% alert color="info" %}}
Only users with the **App Settings** permission can edit the image and the app name.
{{% /alert %}}

The **Settings** page always contains the following tabs:

* **General**
* **Access Management**

These tabs are only available for users with the **App Settings** permission:

* **Cloud Settings**
* **API Keys**
* **Project Management**
* **History**
* **Story Archive**

## General {#general}

In this tab, you can find the following items:

* **Logo** of the app
* **Description** of the app
* **App ID**
* [Technical Contact](/developerportal/general/app-roles/#technical-contact) of the app
* **Danger Zone**
    * **Leave this app**
    * **Deactivate this app**
    * **Delete this app**

{{% alert color="info" %}}
Only users with the **App Settings** permission can change the description of the app.<br/>Only users with the **App Settings** permission can deactivate or delete an app. For details, see [How to Leave, Delete, or Deactivate an App](/developerportal/general/leave-delete-app/).
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
* [Mendix Private Cloud](/developerportal/deploy/private-cloud/)

## Access Management {#managing-app-users}

On the **Access Management** tab, you can manage and invite app users. App users are end-users who can access the deployed app on specific environments. They can use and test your deployed app, and provide feedback.

To manage users or invite users for an app deployed on a specific environment, click **Manage Users** or **Invite Users** for that environment. For more information, see the [Managing Users](#manage-users) and [Inviting Users](#invite-users) section below.

On the tab, you can only see the environments that satisfy the following requirements:

* [Mendix Single Sign-On](/developerportal/deploy/mendix-sso/) is implemented in the app using the [Mendix SSO](/appstore/modules/mendix-sso/) module (for more information, see [Mendix Single Sign-On](/developerportal/deploy/mendix-sso/))
* You are currently assigned a user role in the app which allows you to manage other users (for more information, see the [User Management Properties](/refguide/user-roles/#user-management) section of *User Roles*)

{{% alert color="info" %}}
When deploying your application to a non-production environment, the deploying user and the Technical Contact are always assigned the Administrator user role.

When deploying your application to a production environment, the Technical Contact is always assigned the Administrator user role. If you cannot see an environment, ask your Technical Contact to assign you a user role for that environment which allows you to manage other users. 
{{% /alert %}}

### Managing Users {#manage-users}

When you click **Manage Users** for your environment, a dialog box opens with a list of the current app users you can remove or edit:

To remove an app user from the environment, click **Remove** by their name.

To edit an app user's roles, click **Edit** by their name. Permissions for these roles (for example, **User** or **Administrator**) correspond to what you have configured for your app's user roles in [App Security](/refguide/app-security/#user-roles) in Mendix Studio Pro. If you have created a customized role, you need to publish the app before you are able to see and assign it here.

{{% alert color="info" %}}
If an app user has been granted access to an app environment through a [group](/control-center/groups/), only a Mendix Admin can remove them from that environment (by removing them from that group) or edit the roles granted by that group policy.
{{% /alert %}}

### Inviting Users {#invite-users}

To invite new app users to your app, click **Invite Users** for that environment or via the **Manage Users** and follow these steps:

1. Enter the email addresses of the end-users you want to invite.
2. Click **Include your app team** to include invitations to all the members of your [Team](/developerportal/general/team/). This may be useful, because people invited to join your team are not added as app users automatically.
3. Click **Add to invitee list**.
4. Select the role for the App User (for example, **User** or **Administrator**). Permissions for these roles correspond to what you have configured for your app's user roles in [App Security](/refguide/app-security/#user-roles) in Mendix Studio Pro. If you have created a customized role, you need to publish the app before you are able to see and assign it here.
5. Click **Next** to send the invitation.

The invitee will receive an email asking them to authorize access to their Mendix account on this screen.

After they provide authorization, they will be brought to your deployed app.

## API Keys {#general-settings-api-keys}

{{% alert color="info" %}}
Only users with the **App Settings** permission can manage app-specific API keys.
{{% /alert %}}

In **API Keys**, there is an overview of the API keys created for your app with the following information:

* **API Key Name**
* Date of **Creation**
* Date **Last Used**

{{< figure src="/attachments/developerportal/general/settings/keys.png"   width="800"  class="no-border" >}}

To create a new app-specific API key, click **Create New API Key**  and follow these steps:

1. Fill in the **API key name**.
2. Click **Generate API Key** to be able to use the app API key.

{{% alert color="warning" %}}For security reasons, the app API key will only be displayed once, during **Step 2 of 2**. It will not be displayed again.{{% /alert %}}

To delete an app API key, click **Revoke**.

## Project Management {#project-management}

{{% alert color="info" %}}
Only users with the **App Settings** permission can manage these settings.
{{% /alert %}}

On the **Project Management** tab, you can select your team's planning tool for the app. By default, [Epics](/developerportal/project-management/epics/) is the selected tool.

If you manage your projects in Jira, you can connect your apps in **Apps** to Jira. For more information, see [Jira Connector](/developerportal/project-management/jira-connector/).

{{< figure src="/attachments/developerportal/general/settings/story-switcher.png" width="700"  class="no-border" >}}

## History {#history}

{{% alert color="info" %}}
Only users with the **App Settings** permission can view the history.
{{% /alert %}}

The **History** tab presents the collaboration actions for the app. On this page, you can see what change was made, who performed it, and when it occurred:

{{< figure src="/attachments/developerportal/general/settings/history.png"   width="700"  class="no-border" >}}

When you select a history item and click **Show item**, the details of the story, Sprint, or [feedback item](/developerportal/app-insights/feedback/) will be presented.

## Story Archive {#story-archive}

Once you have switched from Mendix Stories to Epics or Jira, Mendix archives any work you may have had in Mendix Stories. You can review your work on this tab, and download it if necessary.

{{% alert color="warning" %}}
Mendix will keep this data until October 1, 2024. Until then, you will be able to export it to Excel in case you need an offline copy. Mendix strongly urges you to download your work before that date.
{{% /alert %}}

{{< figure src="/attachments/developerportal/general/settings/story-archive.png" width="700"  class="no-border" >}}

## Read More

* [Leave and Delete an App](/developerportal/general/leave-delete-app/)
