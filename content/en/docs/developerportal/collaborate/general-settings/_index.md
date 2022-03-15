---
title: "General Settings"
url: /developerportal/collaborate/general-settings/
category: "Collaboration"
menu_order: 8
description: "Describes general settings of your app."
tags: ["Settings", "App", "Developer Portal"]
aliases:
    - /developerportal/settings/general-settings
    - /developerportal/settings/api-key
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #managing-app-users below is mapped from App > General > Settings > Manage App Users and the Mendix SSO module, so it should not be removed or changed.
---

## 1 Introduction

The **General** settings page presents an overview of your app with the following details:

* A **Description** of the app
* The [App Contact](/developerportal/collaborate/app-roles/#app-contact) and [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) for the app
* Whether the app is enabled for **Mendix Studio** (for details, see the [Mendix Studio](#web) section below)
* The **App ID**

{{% image_container width="450" %}}
![](/attachments/developerportal/collaborate/general-settings/general-settings.png)
{{% /image_container %}}

The sections below describe the actions you can perform on this page.

## 2 Mendix Studio {#web}

In the **Mendix Studio** section, you can see whether Studio is enabled for the app. 

You can enable Studio if it has not been enabled yet by clicking **Enable Mendix Studio**.

{{% alert color="info" %}}
Only Scrum Masters or custom team roles with the **App Settings** permission are allowed to enable Studio.
{{% /alert %}}    

## 3 Editing Cloud Settings

Click **Cloud Settings** to select the cloud platform on which to deploy your app. The selection of cloud platforms available will depend on the features of your Mendix account.

{{% alert color="info" %}}
Only users with the **App Settings** permission can change cloud platforms. For default roles, only the **Scrum Master** has this permission. For more details, see the [Team Roles](/developerportal/collaborate/app-roles/#team-roles) section of *App Roles*.
{{% /alert %}}

{{% image_container width="450" %}}
![](/attachments/developerportal/collaborate/general-settings/cloudsettings.png)
{{% /image_container %}}

If you select a non-Mendix cloud platform like SAP, you will be redirected to a page to complete the setup. If you select Mendix Cloud, no additional setup is needed.

Specific steps for configuring different cloud platforms are provided here:

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)
* [IBM Cloud](/developerportal/deploy/ibm-cloud/)
* [On-Premises](/developerportal/deploy/on-premises-design/)

## 4 Managing App Users {#managing-app-users}

Click **Manage App Users** to manage and invite App Users, who are end-users who can access the deployed app on specific environments to use it, test it, and provide feedback.

{{% alert color="info" %}}
You can also manage app users from Studio, by clicking **Manage Users** on the **Settings > Roles and Permissions** page within Studio.
{{% /alert %}}

After clicking **Manage App Users**, you will see a list of environments for your app on the **App User Management** page. You will only be able to see environments that satisfy these requirements:

* [Mendix Single Sign-On](/developerportal/deploy/mendix-sso/) is implemented:
	* In Studio, SSO is automatically implemented for your app by enabling security for your app – for details, see the [Security Overview](/studio/settings-security/#overview) section of *Security, Roles & Permissions*
	* In Studio Pro, SSO can be implemented via the [Mendix SSO](/appstore/modules/mendix-sso/) module (for more information, see [Mendix Single Sign-On](/developerportal/deploy/mendix-sso/))
* If you manage user roles from Studio, your app should be published (for more information see the [Managing App Users](/studio/settings-security/#managing-app-users) section of *Security, Roles & Permissions* )
* Your user role allows you to manage other users (for more information, see the [User Management Properties](/refguide/user-roles/#user-management) section of *User Roles*)

![](/attachments/developerportal/collaborate/general-settings/app-user-management-environments.png)

### 4.1 Manage Users

When you click **Manage Users** on for your environment, you will see a page with a list of the current App Users you can remove or edit:

{{% image_container width="450" %}}
![](/attachments/developerportal/collaborate/general-settings/app-user-management-users.png)
{{% /image_container %}}

To remove an App User from the environment, click **Remove** by their name.

To edit an App User's roles, click **Edit** by their name. Permissions for these roles (for example, **User** or **Administrator**) correspond to what you have configured for your app's user roles in [Project Security](/refguide/project-security/#user-roles) in Mendix Studio Pro or [Roles and Permissions](/studio/settings-security/#roles-and-permissions) in Mendix Studio. If you have created a customized role, you need to publish the app before you are able to see and assign it here.

{{% alert color="info" %}}
If an App User has been granted access to an app environment through a [Group](/developerportal/control-center/#groups), only a Mendix Admin can remove them from that environment (by removing them from that group) or edit the roles granted by that group policy.
{{% /alert %}}

### 4.2 Invite Users

To invite new App Users to your app, click **Invite Users** on the **App User Management** page or on the page with a list of current App Users and follow these steps:

1. Enter the email addresses of the end-users you want to invite.
2.  Click **Include your app team** to include invitations to all the members of your [Team](/developerportal/collaborate/team/). This may be useful, because people invited to join your team are not added as App Users automatically.
3. Click **Add to invitee list**.
4. Select the role for the App User (for example, **User** or **Administrator**). Permissions for these roles correspond to what you have configured for your app's user roles in [Project Security](/refguide/project-security/#user-roles) in Mendix Studio Pro or [Roles and Permissions](/studio/settings-security/#roles-and-permissions) in Mendix Studio. If you have created a customized role, you need to publish the app before you are able to see and assign it here.
5. Click **Next**.
6. Add a personal message to your invitation, and finally click **Next** then **Send Invitations** to send it.

The invitee will receive an email asking them to authorize access to their Mendix account on this screen.

After they provide authorization, they will be brought to your deployed app.

## 5 API Keys {#api-keys}

In **API Keys**, there is an overview of the API keys created for your app with the following information:

*   **API Key Name**
*   Date of **Creation**
*   Date **Last Used**

{{% image_container width="550" %}}![](/attachments/developerportal/collaborate/general-settings/keys.png)
{{% /image_container %}}

To create a new app API key, click **Create API Key**  and follow these steps:

1.  Fill in the **API key name**.	
2.  Click **Generate API Key** to be able to use the app API key.

	{{% alert color="warning" %}}For security reasons, the app API key will only be displayed once, during **Step 2 of 2**. It will not be displayed again.
	{{% /alert %}}
	
Click **Revoke** to delete an app API key.

## 6 Editing App Info {#editing}

{{% alert color="info" %}}
Only users with the **App Settings** permission can edit the application information.
{{% /alert %}}

Click **Edit App Info** to edit the following details:

* The name and logo of the app
* The **Description** of the app
* The **App Contact**

{{% image_container width="450" %}}![](/attachments/developerportal/collaborate/general-settings/edit.png)
{{% /image_container %}}

For details on the **Deactivate App**, **Leave App**, and **Delete App** options, see [How to Leave & Delete an App](/developerportal/collaborate/leave-delete-app/).

## 7 Managing Webhooks {#webhooks}

Click **Manage Webhooks** to manage your app's webhooks. A webhook enables the Developer Portal to talk to another website and post updated Developer Portal content (for example, Sprint updates and new stories) to that website. For example, if [CLEVR](https://developer.mendixcloud.com/link/partnerprofile/1068) wants to follow the changes in their app, they will create a service with a certain URL (see the required [URL](#url) below) that keeps track of the data. Changes in the app in the Developer Portal are then sent to that URL.

{{% alert color="info" %}}
Only [Mendix Admins](/developerportal/control-center/#company) or users with the **App Settings** permission can manage webhooks.
{{% /alert %}}

On the **Webhooks** page, you can add a new webhook and edit or delete existing webhooks:

{{% image_container width="550" %}}![](/attachments/developerportal/collaborate/general-settings/webhooks-list.png)
{{% /image_container %}}

After clicking **New Webhook** to create a new webhook, fill in the following details:

* **Name** – the name of the webhook
* <a name="url"></a>**URL** – the URL to which the webhook will connect 
* **Secret** – the secret used by the Developer Portal to sign the data payload in order to identify the source of the data to the receiving URL (this appears when creating and editing a webhook, but it will not be displayed on the **Webhooks settings** page)
* **Version** – the version of the webhooks feature to be used
* **Events** – what types of data will be sent via the webhook (you must select at least one; this appears when creating and editing a webhook, but it will not be displayed on the **Webhooks settings** page)
  * [Sprints](/developerportal/collaborate/stories/#story-actions)
  * [Stories](/developerportal/collaborate/stories/)

To edit the above details for an existing webhook, click **Edit**.

To delete an existing webhook, click **Delete**.

{{% alert color="info" %}}
For details on the technical configuration of webhooks, see [Webhooks](/apidocs-mxsdk/apidocs/webhooks-sprints/) in the *API Documentation*.
{{% /alert %}}

## 8 Leaving the App

To leave the app, click **Leave App**. For details on leaving, deleting, and deactivating an app, see [How to Leave & Delete an App](/developerportal/collaborate/leave-delete-app/).

## 9 Read More

* [Leave & Delete an App](/developerportal/collaborate/leave-delete-app/)
* [Manage Deep Links](/developerportal/collaborate/manage-deeplinks/)
