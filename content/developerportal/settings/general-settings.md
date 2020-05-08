---
title: "Manage General App Settings"
category: "App Settings"
menu_order: 10
description: "Describes general settings of your app."
tags: ["Settings", "App", "Developer Portal"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #managing-app-users below is mapped from App > General > Settings > Manage App Users and the Mendix SSO module, so it should not be removed or changed.
---

## 1 Introduction

The **General** settings page presents an overview of your app project with the following details:

* A **Description** of the app
* The [App Contact](../company-app-roles/manage-roles#change-app-contact) and [Technical Contact](../company-app-roles/technical-contact) for the app
* Whether the app is enabled for Mendix **Studio** (for details, see the [Mendix Studio](#web) section below)

* The **App ID**

{{% image_container width="550" %}}![](attachments/general-settings.png)
{{% /image_container %}}

The sections below describe the actions you can perform on this page.

## 2 Mendix Studio {#web}

In the **Mendix Studio** section, you can see whether Studio is enabled for the app. 

You can also enable Studio if it has not been enabled yet by clicking **Enable Mendix Studio**:

![](attachments/not-enabled.png)

{{% alert type="info" %}}
Only Scrum Masters or custom App Team roles with the **App Settings** permission are allowed to enable Studio.
{{% /alert %}}    

## 3 Editing Cloud Settings

Click **Cloud Settings** to select the cloud platform on which to deploy your app. The selection of cloud platforms available will depend on the features of your Mendix account.

{{% alert type="info" %}}
Only users with the **App Settings** permission can change cloud platforms. For default roles, only the **Scrum Master** has this permission. For more details, see the [App Team Roles](../company-app-roles/index#app-team-roles) section of *Company & App Roles*.
{{% /alert %}}

![](attachments/cloudsettings.png)

If you select a non-Mendix cloud platform like SAP, you will be redirected to a page to complete the setup. If you select Mendix Cloud, no additional setup is needed.

Specific steps for configuring different cloud platforms are provided here:

* [Mendix Cloud](../deploy/mendix-cloud-deploy)
* [SAP Cloud Platform](../deploy/sap-cloud-platform)
* [IBM Cloud](../deploy/ibm-cloud)
* [On-Premises](../deploy/on-premises-design)

## 4 Managing App Users {#managing-app-users}

Click **Manage App Users** to manage and invite App Users, who are end-users who can access the deployed app on specific environments to use it, test it, and provide feedback.

{{% alert type="info" %}}
You can also manage app users from Studio, by clicking **Manage Users** on the **Settings > Roles and Permissions** page within Studio.
{{% /alert %}}

After clicking **Manage App Users**, you will see a list of environments for your app on the **App User Management** page. You will only be able to see environments that satisfy these requirements:

* [Mendix Single Sign-On](/developerportal/deploy/mendix-sso) is implemented:
	* In Studio, SSO is automatically implemented for your app project by enabling security for your app – for details, see the [Enabling Security](/studio/settings-security#enabling-security) section of *Security, Roles & Permissions*
	* In Studio Pro, SSO can be implemented via the [Mendix SSO](/appstore/modules/mendix-sso) module or the (deprecated) [AppCloudServices](https://appstore.home.mendix.com/link/app/934/) module
		* For details of the Mendix SSO module, see [Mendix Single Sign-On](/developerportal/deploy/mendix-sso)
		* For details of the (deprecated) AppCloudServices module, see the relevant document in the [Mendix Single Sign-On](/developerportal/deploy/mendix-sso) section of the documentation
* If you manage user roles from Studio, your app should be published (for more information see the [Managing App Users](/studio/settings-security#managing-app-users) section of *Security, Roles & Permissions* )
* Your user role allows you to manage other users (for more information, see the [User Management Properties](/refguide/user-roles#user-management) section of *User Roles*)

![](attachments/app-user-management-environments.png)

### 4.1 Manage Users

When you click **Manage Uses** on for your environment, you will see a page with a list of the current App Users you can remove or edit:

![](attachments/app-user-management-users.png)

To remove an App User from the environment, click **Remove** by their name.

To edit an App User's roles, click **Edit** by their name. Permissions for these roles (for example, **User** or **Administrator**) correspond to what you have configured for your app project's user roles in [Project Security](/refguide/project-security#user-roles) in Mendix Studio Pro or [Roles and Permissions](/studio/settings-security#roles-and-permissions) in Mendix Studio. If you have created a customized role, you need to publish the app before you are able to see and assign it here.

{{% alert type="info" %}}
If an App User has been granted access to an app environment through a security group, only a Company Admin using the [Security Groups](../company-app-roles/users#security-groups) page can remove them from that environment (by removing them from that security group) or edit the roles granted by that security group policy.
{{% /alert %}}

### 4.2 Invite Users

To invite new App Users to your app, click **Invite Users** on the **App User Management** page or on the page with a list of current App Users and follow these steps:

1. Enter the email addresses of the end-users you want to invite.

2.  Click **Include your app team** to include invitations to all the members of your [App Team](../collaborate/team). This may be useful, because people invited to join your App Team are not added as App Users automatically.

	{{% image_container width="450" %}}![](attachments/invite-app-user.png)
	{{% /image_container %}}
	
3. Click **Add to invitee list**.

4. Select the role for the App User (for example, **User** or **Administrator**). Permissions for these roles correspond to what you have configured for your app project's user roles in [Project Security](/refguide/project-security#user-roles) in Mendix Studio Pro or [Roles and Permissions](/studio/settings-security#roles-and-permissions) in Mendix Studio. If you have created a customized role, you need to publish the app before you are able to see and assign it here.

5. Click **Next**.

6. Add a personal message to your invitation, and finally click **Next** then **Send Invitations** to send it.

The invitee will receive an email asking them to authorize access to their Mendix account on this screen:

{{% image_container width="350" %}}![](attachments/authorize.png)
{{% /image_container %}}

After they provide authorization, they will be brought to your deployed app.

## 5 Editing App Info

{{% alert type="info" %}}
Only users with the **App Settings** permission can edit the application information.
{{% /alert %}}

Click **Edit App Info** to edit the following details:

* The name and logo of the app
* The **Description** of the app
* The **App Contact**

{{% image_container width="450" %}}![](attachments/edit.png)
{{% /image_container %}}

## 6 Managing Webhooks {#webhooks}

Click **Manage Webhooks** to manage your app's webhooks. A webhook enables the Developer Portal to talk to another website and post updated Developer Portal content (for example, Sprint updates and new stories) to that website. For example, if [Mansystems](https://developer.mendixcloud.com/link/partnerprofile/1068) wants to follow the changes in their app project, they will create a service with a certain URL (see the required [URL](#url) below) that keeps track of the data. Changes in the app project in the Developer Portal are then sent to that URL.

{{% alert type="info" %}}
Only [Company Admins](../company-app-roles/companyadmin-settings) or users with the **App Settings** permission can manage webhooks.
{{% /alert %}}

On the **Webhooks settings** page, you can add a new webhook and edit or delete existing webhooks:

{{% image_container width="550" %}}![](attachments/webhooks-list.png)
{{% /image_container %}}

After clicking **New** to create a new webhook, fill in the following details:

* **Name** – the name of the webhook
* <a name="url"></a>**URL** – the URL to which the webhook will connect 
* **Secret** – the secret used by the Developer Portal to sign the data payload in order to identify the source of the data to the receiving URL (this appears when creating and editing a webhook, but it will not be displayed on the **Webhooks settings** page)
* **Version** – the version of the webhooks feature to be used
* **Events** – what types of data will be sent via the webhook (you must select at least one; this appears when creating and editing a webhook, but it will not be displayed on the **Webhooks settings** page)
  * [Sprints](../collaborate/stories#sprint)
  * [Stories](../collaborate/stories)

To edit the above details for an existing webhook, click **Edit**.

To delete an existing webhook, click **Delete**.

{{% alert type="info" %}}
For details on the technical configuration of webhooks, see [Webhooks](/apidocs-mxsdk/apidocs/webhooks-sprints) in the *API Documentation*.
{{% /alert %}}

## 7 Leaving the App

To leave the app, click **Leave App**. For details on leaving, deleting, and deactivating an app, see [How to Leave & Delete an App](leave-delete-app).

## 8 Read More

* [Leave & Delete an App](leave-delete-app)
* [Manage Deep Links](manage-deeplinks)
