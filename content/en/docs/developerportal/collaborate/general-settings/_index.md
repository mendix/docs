---
title: "General Settings"
url: /developerportal/collaborate/general-settings/
category: "Collaboration"
weight: 8
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

The **General Settings** page presents an overview of your app.

On the top of page, you can see the image of the app, the app name, and the company that owns the app. 

{{< figure src="/attachments/developerportal/collaborate/general-settings/general-information.png"  >}}

{{% alert color="info" %}}
Only users with the **App Settings** permission can edit the image and the app name.
{{% /alert %}}

The **General Settings** page contains the following tabs:

* **General**
* **Cloud Settings** *
* **Access Management**
* **API Keys** *
* **Stories** *
* **Webhooks** *

{{% alert color="info" %}}
Tabs with an asterisk (*) are only available for users with the **App Settings** permission.
{{% /alert %}}


## 2 General

In this tab, you can find the following items:

* **Description** of the app
* **App ID**

* [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) of the app
* **Danger Zone**
  * **Leave this app**
  * **Deactivate this app**
  * **Delete this app**

{{% alert color="info" %}}
Only users with the **App Settings** permission can change the description of the app.<br/>Only users with the **App Settings** permission can deactivate or delete an app. For details, see [How to Leave, Delete, or Deactivate an App](/developerportal/collaborate/leave-delete-app/).
{{% /alert %}}


## 3 Cloud Settings

On the **Cloud Settings** tab, you can select the cloud platform on which to deploy your app. The selection of cloud platforms available will depend on the features of your Mendix account.

{{% alert color="info" %}}
Only users with the **App Settings** permission can change cloud platforms.
{{% /alert %}}


If you select a non-Mendix cloud platform like SAP, you will be redirected to a page to complete the setup. If you select Mendix Cloud, no additional setup is needed.

Specific steps for configuring different cloud platforms are provided here:

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)
* [IBM Cloud](/developerportal/deploy/ibm-cloud/)
* [Mendix Private Cloud](/developerportal/deploy/private-cloud/)


## 4 Access Management {#managing-app-users}

On the **Access Management** tab, you can manage and invite app users. App users are end-users who can access the deployed app on specific environments. They can use and test your deployed app, and provide feedback.

To manage users or invite users for an app deployed on a specific environment, click **Mange Users** or **Invite Users** for that environment. For more information, see the [Mange Users](#manage-users) and [Invite Users](#invite-users) section below.

{{% alert color="info" %}}
You can also manage app users from Studio, by clicking **Manage Users** on the **Settings > Roles and Permissions** page within Studio.
{{% /alert %}}

On the tab, you can only see the environments that satisfy these requirements:

* [Mendix Single Sign-On](/developerportal/deploy/mendix-sso/) is implemented:
	* In Studio, SSO is automatically implemented for your app by enabling security for your app – for details, see the [Security Overview](/studio/settings-security/#overview) section of *Security, Roles & Permissions*
	* In Studio Pro, SSO can be implemented via the [Mendix SSO](/appstore/modules/mendix-sso/) module (for more information, see [Mendix Single Sign-On](/developerportal/deploy/mendix-sso/))
* If you manage user roles from Studio, your app should be published (for more information see the [Managing App Users](/studio/settings-security/#managing-app-users) section of *Security, Roles & Permissions* )
* Your user role allows you to manage other users (for more information, see the [User Management Properties](/refguide/user-roles/#user-management) section of *User Roles*)

### 4.1 Manage Users {#manage-users}

When you click **Manage Users** for your environment, a dialog box opens with a list of the current app users you can remove or edit:

To remove an app user from the environment, click **Remove** by their name.

To edit an app user's roles, click **Edit** by their name. Permissions for these roles (for example, **User** or **Administrator**) correspond to what you have configured for your app's user roles in [App Security](/refguide/app-security/#user-roles) in Mendix Studio Pro or [Roles and Permissions](/studio/settings-security/#roles-and-permissions) in Mendix Studio. If you have created a customized role, you need to publish the app before you are able to see and assign it here.

{{% alert color="info" %}}
If an app user has been granted access to an app environment through a [group](/developerportal/control-center/#groups), only a Mendix Admin can remove them from that environment (by removing them from that group) or edit the roles granted by that group policy.
{{% /alert %}}

### 4.2 Invite Users {#invite-users}

To invite new app users to your app, click **Invite Users** for that environment or via the **Manage Users** and follow these steps:

1. Enter the email addresses of the end-users you want to invite.
2.  Click **Include your app team** to include invitations to all the members of your [Team](/developerportal/collaborate/team/). This may be useful, because people invited to join your team are not added as app users automatically.
3. Click **Add to invitee list**.
4. Select the role for the App User (for example, **User** or **Administrator**). Permissions for these roles correspond to what you have configured for your app's user roles in [App Security](/refguide/app-security/#user-roles) in Mendix Studio Pro or [Roles and Permissions](/studio/settings-security/#roles-and-permissions) in Mendix Studio. If you have created a customized role, you need to publish the app before you are able to see and assign it here.
5. Click **Next**.
6. Add a personal message to your invitation, and finally click **Next** then **Send Invitations** to send it.

The invitee will receive an email asking them to authorize access to their Mendix account on this screen.

After they provide authorization, they will be brought to your deployed app.


## 5 API Keys {#api-keys}

In **API Keys**, there is an overview of the API keys created for your app with the following information:

*   **API Key Name**
*   Date of **Creation**
*   Date **Last Used**

{{< figure src="/attachments/developerportal/collaborate/general-settings/keys.png"   width="800"  >}}

To create a new app API key, click **Create New API Key**  and follow these steps:

1.  Fill in the **API key name**.	
2.  Click **Generate API Key** to be able to use the app API key.

	{{% alert color="warning" %}}For security reasons, the app API key will only be displayed once, during **Step 2 of 2**. It will not be displayed again.{{% /alert %}}

You use these API keys to authenticate requests to the [Stories API](/apidocs-mxsdk/apidocs/stories-api/).

Click **Revoke** to delete an app API key.


## 6 Stories {#stories}

On the **Stories** tab, you can select a planning tool for the app. By default [Stories](/developerportal/collaborate/stories/) is the selected tool. If you like, you can switch to [Epics](/developerportal/collaborate/epics/). Once you select a tool, everyone in your team can use the same tool for this app.

{{% alert color="info" %}}It is not yet possible to migrate the data from Stories into Epics, so we recommend you to use Epics for new projects or iterations first – in this way you do not have to worry about the stories in your current backlog.{{% /alert %}}


## 7 Managing Webhooks {#webhooks}

Click the **Manage Webhooks** tab to manage your app's webhooks. A webhook enables the Developer Portal to talk to another website and post updated Developer Portal content (for example, Sprint updates and new stories) to that website. For example, if [CLEVR](https://developer.mendixcloud.com/link/partnerprofile/1068) wants to follow the changes in their app, they will create a service with a certain URL (see the required [URL](#url) below) that keeps track of the data. Changes in the app in the Developer Portal are then sent to that URL.

{{% alert color="info" %}}
Only users with the **App Settings** permission can manage webhooks.
{{% /alert %}}

{{< figure src="/attachments/developerportal/collaborate/general-settings/webhooks-list.png"   width="800"  >}}

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


## 8 Read More

* [Leave & Delete an App](/developerportal/collaborate/leave-delete-app/)
* [Manage Deep Links](/developerportal/collaborate/manage-deeplinks/)
